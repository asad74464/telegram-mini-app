import { useTheme } from "../context/ThemeProvider";
import { useState } from "react";

const ReferralSystem = () => {
  const referralLink = "https://telegram.app/referral-code";
  const { theme } = useTheme();
  const darkMode = theme === "dark";

  const [referralList, setReferralList] = useState([
    { id: 1, name: "Mohammad Reza", date: "2023-12-01" },
    { id: 2, name: "John Doe", date: "2024-12-01" },
    { id: 3, name: "Jane Smith", date: "2024-12-02" },
  ]);

  const handleForward = () => {
    alert(`Forward the referral link: ${referralLink}`);
  };

  return (
    <div
      className={`p-4 shadow rounded mb-4 ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <h2 className="text-xl font-semibold">Referral System</h2>
      <p className="mt-2">Share your referral link:</p>
      <input
        type="text"
        value={referralLink}
        readOnly
        className={`border p-2 w-full rounded mt-2 ${
          darkMode
            ? "bg-gray-700 text-white border-gray-600"
            : "border-gray-300"
        }`}
      />
      <div className="flex space-x-2 mt-2">
        <button
          className={`px-4 py-2 rounded ${
            darkMode ? "bg-green-600 text-white" : "bg-green-500 text-white"
          }`}
          onClick={() => navigator.clipboard.writeText(referralLink)}
        >
          Copy Link
        </button>
        <button
          className={`px-4 py-2 rounded ${
            darkMode ? "bg-blue-600 text-white" : "bg-blue-500 text-white"
          }`}
          onClick={handleForward}
        >
          Forward Link
        </button>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-semibold">Referral List</h3>
        {referralList.length === 0 ? (
          <p className="mt-2 text-sm">
            No referrals yet. Share your link to get started!
          </p>
        ) : (
          <ul className="mt-2 space-y-2">
            {referralList.map((referral) => (
              <li
                key={referral.id}
                className={`p-2 rounded ${
                  darkMode
                    ? "bg-gray-700 text-white border-gray-600"
                    : "bg-gray-100 border-gray-300"
                } border`}
              >
                <p className="text-sm font-medium">{referral.name}</p>
                <p className="text-xs">Joined on: {referral.date}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ReferralSystem;
