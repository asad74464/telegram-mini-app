import { useState, startTransition, Suspense, lazy } from "react";
import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem } from "@/components/ui/menubar";

const Dashboard = lazy(() => import("../components/Dashboard"));
const ProjectInfo = lazy(() => import("@/pages/ProjectInfo"));
const ReferralSystem = lazy(() => import("../components/RefferalSystem"));
const TasksAndRewards = lazy(() => import("@/components/TasksAndRewards"));
const TradingPanel = lazy(() => import("../components/TradingPanel"));
const WalletConnect = lazy(() => import("../components/WalletConnect"));

const Home = () => {
  const [activeComponent, setActiveComponent] = useState("dashboard");

  const handleMenuChange = (component) => {
    startTransition(() => {
      setActiveComponent(component);
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Mini-App</h1>
      <div className="p-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <header className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Token Management</h1>
          </header>

          <Menubar>
            {/* Main Options */}
            <MenubarMenu>
              <MenubarTrigger>Dashboard</MenubarTrigger>
              <MenubarContent>
                <MenubarItem onClick={() => handleMenuChange("dashboard")}>
                  Overview
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
              <MenubarTrigger>Airdrop</MenubarTrigger>
              <MenubarContent>
                <MenubarItem onClick={() => handleMenuChange("airdrop")}>
                  Airdrop Info
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
              <MenubarTrigger>Referral</MenubarTrigger>
              <MenubarContent>
                <MenubarItem onClick={() => handleMenuChange("refferal")}>
                  Referral System
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
              <MenubarTrigger>More</MenubarTrigger>
              <MenubarContent>
                <MenubarItem onClick={() => handleMenuChange("tasks")}>
                  Tasks & Rewards
                </MenubarItem>
                <MenubarItem onClick={() => handleMenuChange("trade")}>
                  Trading Panel
                </MenubarItem>
                <MenubarItem onClick={() => handleMenuChange("wallet")}>
                  Wallet Connect
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>

          {/* Dynamic Content */}
          <div className="mt-6">
            <Suspense fallback={<div>Loading...</div>}>
              {activeComponent === "dashboard" && <Dashboard />}
              {activeComponent === "airdrop" && <ProjectInfo />}
              {activeComponent === "refferal" && <ReferralSystem />}
              {activeComponent === "tasks" && <TasksAndRewards />}
              {activeComponent === "trade" && <TradingPanel />}
              {activeComponent === "wallet" && <WalletConnect />}
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
