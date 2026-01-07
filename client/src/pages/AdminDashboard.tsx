import { useAuth } from "@/hooks/use-auth";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LayoutDashboard, LogOut, Plus, Settings } from "lucide-react";

export default function AdminDashboard() {
  const { user, logoutMutation } = useAuth();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 pt-32 pb-20">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h1 className="text-4xl font-black mb-2">ADMIN DASHBOARD</h1>
              <p className="text-muted-foreground font-mono">Welcome back, {user?.username}</p>
            </div>
            <Button variant="outline" onClick={() => logoutMutation.mutate()} className="font-mono">
              <LogOut className="w-4 h-4 mr-2" />
              LOGOUT
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <DashboardCard 
              title="Projects" 
              count="5" 
              icon={<LayoutDashboard className="w-6 h-6" />} 
              action="Manage"
            />
            <DashboardCard 
              title="Blog Posts" 
              count="1" 
              icon={<Plus className="w-6 h-6" />} 
              action="Write"
            />
            <DashboardCard 
              title="Users" 
              count="1" 
              icon={<Settings className="w-6 h-6" />} 
              action="Settings"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function DashboardCard({ title, count, icon, action }: any) {
  return (
    <Card className="hover:border-accent transition-colors">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-mono font-bold uppercase">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-black mb-4">{count}</div>
        <Button size="sm" variant="ghost" className="w-full justify-start font-mono text-xs">
          {action} →
        </Button>
      </CardContent>
    </Card>
  );
}
