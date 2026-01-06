import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.get(api.projects.list.path, async (req, res) => {
    const projects = await storage.getProjects();
    res.json(projects);
  });

  app.get(api.projects.get.path, async (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ message: "Invalid ID" });
    }
    const project = await storage.getProject(id);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.json(project);
  });

  // Seed data
  const existing = await storage.getProjects();
  if (existing.length === 0) {
    await storage.createProject({
      title: "ESP8266 Deauther",
      description: "Scan for WiFi networks, block selected connections, create dozens of fake networks and confuse WiFi trackers.",
      category: "Hardware",
      imageUrl: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&q=80", 
      linkUrl: "https://deauther.com",
      features: ["WiFi Scanning", "Deauthentication", "Beacon Spam"]
    });
    await storage.createProject({
      title: "USB Nova",
      description: "USB Nova is a cute little USB drive that acts as a keyboard, mouse, and mass storage device.",
      category: "Hardware",
      imageUrl: "https://images.unsplash.com/photo-1629230538964-6d9b7c844111?w=800&q=80",
      linkUrl: "https://usbnova.com",
      features: ["BadUSB", "Keystroke Injection", "Scriptable"]
    });
    await storage.createProject({
      title: "HackHeld",
      description: "Open Source DIY Smartwatch for Hackers. Easy to build and program.",
      category: "Hardware",
      imageUrl: "https://images.unsplash.com/photo-1510511459019-5dda7724fd82?w=800&q=80",
      linkUrl: "https://hackheld.spacehuhn.com",
      features: ["ESP8266/ESP32", "OLED Display", "WiFi Attacks"]
    });
    await storage.createProject({
      title: "ESP Web Tool",
      description: "Flash ESP8266 & ESP32 devices from your browser. No software installation required.",
      category: "Software",
      imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
      linkUrl: "https://esptool.spacehuhn.com",
      features: ["WebSerial", "Easy Flashing", "Console"]
    });
    await storage.createProject({
      title: "Duckify",
      description: "Convert Ducky Script to Arduino code. Supports various keyboard layouts.",
      category: "Software",
      imageUrl: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&q=80",
      linkUrl: "https://duckify.spacehuhn.com",
      features: ["Ducky Script", "Arduino Code", "Multiple Layouts"]
    });
  }

  return httpServer;
}
