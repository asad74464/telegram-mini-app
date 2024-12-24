import { useApp } from "@/context/AppContext";
import { Eye, EyeOff } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "react-toastify";

const Dashboard = () => {
  const { balance, hideBalance, setHideBalance, canClaim, claimRewards } =
    useApp();

  return (
    <>
      <Card className="w-full">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Dashboard</CardTitle>
            <button
              onClick={() => setHideBalance(!hideBalance)}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              {hideBalance ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Balance:</span>
              <span className="text-xl font-bold">
                {hideBalance ? "****" : `${balance} TOKENS`}
              </span>
            </div>
            <p className="mt-2">Claim tokens every 24 hours.</p>
            <button
              onClick={() => {
                if (claimRewards()) {
                  toast.success("Claimed successfully!", {
                    position: "top-left",
                  });
                }
              }}
              disabled={!canClaim()}
              className={`w-full p-3 rounded-lg ${
                canClaim() ? "bg-blue-600 text-white" : "bg-gray-300"
              }`}
            >
              Claim Daily Rewards
            </button>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default Dashboard;
