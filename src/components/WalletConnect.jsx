import { toast } from "react-toastify";
import { useTheme } from "../context/ThemeProvider";
import { useState } from "react";

const WalletConnect = () => {
  const { theme } = useTheme();
  const darkMode = theme === "dark";
  const [isLocked, setIsLocked] = useState(false);

  const connectWallet = () => {
    toast.success("Wallet connected!", { position: "top-left" });
  };

  const lockWallet = () => {
    setIsLocked(true);
    toast.info("Wallet locked!", { position: "top-left" });
  };

  const freeStake = () => {
    if (isLocked) {
      toast.warning("Unlock the wallet first!", { position: "top-left" });
    } else {
      toast.success("Stake is free!", { position: "top-left" });
    }
  };

  const unlockWallet = () => {
    setIsLocked(false);
    toast.success("Wallet unlocked!", { position: "top-left" });
  };

  return (
    <div
      className={`p-4 shadow rounded mb-4 ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <h2 className="text-xl font-semibold">Wallet</h2>
      <button
        className={`mt-2 px-4 py-2 rounded ${
          darkMode ? "bg-blue-600 text-white" : "bg-blue-500 text-white"
        }`}
        onClick={connectWallet}
      >
        Connect Wallet
      </button>
      <button
        className={`mt-2 ml-2 px-4 py-2 rounded ${
          isLocked
            ? "bg-red-600 text-white"
            : darkMode
            ? "bg-green-600 text-white"
            : "bg-green-500 text-white"
        }`}
        onClick={isLocked ? unlockWallet : lockWallet}
      >
        {isLocked ? "Unlock Wallet" : "Lock Wallet"}
      </button>
      <button
        className={`mt-2 ml-2 px-4 py-2 rounded ${
          darkMode ? "bg-yellow-600 text-black" : "bg-yellow-500 text-black"
        }`}
        onClick={freeStake}
      >
        Free Stake
      </button>
    </div>
  );
};

export default WalletConnect;
