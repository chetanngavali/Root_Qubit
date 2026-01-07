import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { setupAuth } from "./auth";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  setupAuth(app);

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

  app.get(api.blog.list.path, async (req, res) => {
    const posts = await storage.getBlogPosts();
    res.json(posts);
  });

  app.get(api.blog.get.path, async (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ message: "Invalid ID" });
    }
    const post = await storage.getBlogPost(id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json(post);
  });

  // Seed data
  const existingProjects = await storage.getProjects();
  if (existingProjects.length === 0) {
    await storage.createProject({
      title: "ESP8266 Deauther",
      description: "Scan for WiFi networks, block selected connections, create dozens of fake networks and confuse WiFi trackers.",
      category: "Hardware",
      imageUrl: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&q=80", 
      linkUrl: "#", // Changed from external link
      features: ["WiFi Scanning", "Deauthentication", "Beacon Spam"]
    });
    // Add more projects as needed
  }

  const existingBlogPosts = await storage.getBlogPosts();
  if (existingBlogPosts.length === 0) {
    await storage.createBlogPost({
      title: "Adding Wireless Charging to HackHeld",
      content: "Hackheld is a DIY, open-source, hackable handheld designed to be easy to build and customize. And with a simple mod, it can run on a battery. But here, we will go one step further and add Qi wireless charging!...",
      excerpt: "Learn how to add wireless charging to your HackHeld handheld device.",
      imageUrl: "https://images.unsplash.com/photo-1610492401150-a9370007886a?w=800&q=80"
    });
  }

  return httpServer;
}
