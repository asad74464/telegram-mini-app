import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};

const AppProvider = ({ children }) => {
  const [balance, setBalance] = useState(1000);
  const [hideBalance, setHideBalance] = useState(false);
  const [lastClaim, setLastClaim] = useState(null);
  const [wallet, setWallet] = useState(null);
  const [notifications, setNotifications] = useState([]);

  const canClaim = () => {
    if (!lastClaim) return true;
    const timeDiff = Date.now() - lastClaim;
    return timeDiff >= 24 * 60 * 60 * 1000;
  };

  const claimRewards = () => {
    if (canClaim()) {
      setBalance((prev) => prev + 100);
      setLastClaim(Date.now());
      return true;
    }
    return false;
  };

  const value = {
    balance,
    setBalance,
    hideBalance,
    setHideBalance,
    lastClaim,
    canClaim,
    claimRewards,
    wallet,
    setWallet,
    notifications,
    setNotifications,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { useApp, AppProvider };
