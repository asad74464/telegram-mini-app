import { useState, startTransition, Suspense, lazy } from "react";
import { Bell, Wallet } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ModeToggle } from "@/components/ModeToggle";

const Dashboard = lazy(() => import("../components/Dashboard"));
const ProjectInfo = lazy(() => import("@/pages/ProjectInfo"));
const ReferralSystem = lazy(() => import("../components/RefferalSystem"));
const TasksAndRewards = lazy(() => import("@/components/TasksAndRewards"));
const TradingPanel = lazy(() => import("../components/TradingPanel"));
const WalletConnect = lazy(() => import("../components/WalletConnect"));

const Home = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const handleTabChange = (tab) => {
    startTransition(() => {
      setActiveTab(tab);
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Mini-App</h1>
      <div className="p-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <header className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Token Management</h1>
            <div className="flex gap-4">
              <ModeToggle />
              <Bell className="cursor-pointer" />
              <Wallet className="cursor-pointer" />
            </div>
          </header>

          <Tabs defaultValue={activeTab}>
            <TabsList className="w-full">
              <TabsTrigger
                value="dashboard"
                onClick={() => handleTabChange("dashboard")}
              >
                Dashboard
              </TabsTrigger>
              <TabsTrigger
                value="airdrop"
                onClick={() => handleTabChange("airdrop")}
              >
                Airdrop Info
              </TabsTrigger>
              <TabsTrigger
                value="refferal"
                onClick={() => handleTabChange("refferal")}
              >
                Refferal
              </TabsTrigger>
              <TabsTrigger
                value="tasks"
                onClick={() => handleTabChange("tasks")}
              >
                Tasks
              </TabsTrigger>
              <TabsTrigger
                value="trade"
                onClick={() => handleTabChange("trade")}
              >
                Trading Panel
              </TabsTrigger>
              <TabsTrigger
                value="wallet"
                onClick={() => handleTabChange("wallet")}
              >
                Wallet Connect
              </TabsTrigger>
            </TabsList>

            <TabsContent value={activeTab}>
              <Suspense fallback={<div>Loading...</div>}>
                {activeTab === "dashboard" && <Dashboard />}
                {activeTab === "airdrop" && <ProjectInfo />}
                {activeTab === "refferal" && <ReferralSystem />}
                {activeTab === "tasks" && <TasksAndRewards />}
                {activeTab === "trade" && <TradingPanel />}
                {activeTab === "wallet" && <WalletConnect />}
              </Suspense>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Home;
