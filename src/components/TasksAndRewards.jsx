import { useTheme } from "../context/ThemeProvider";

const TasksAndRewards = () => {
  const { theme } = useTheme();
  const darkMode = theme === "dark";

  return (
    <div
      className={`p-4 shadow rounded mb-4 ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <h2 className="text-xl font-semibold">Tasks and Rewards</h2>

      {/* Prize Pool */}
      <div className="mt-4">
        <h3 className="text-lg font-medium">🎁 Prize Pool</h3>
        <p className="mt-1">Current Prize Pool: <strong>$500</strong></p>
      </div>

      {/* Tasks Section */}
      <div className="mt-4">
        <p>Complete tasks to earn rewards:</p>
        <ul
          className={`list-disc pl-6 mt-2 ${
            darkMode ? "text-gray-200" : "text-gray-900"
          }`}
        >
          <li>Subscribe to our Telegram channel.</li>
          <li>Watch a video on YouTube.</li>
          <li>
            <a 
              href="https://youtube.com/your-channel" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`underline ${
                darkMode ? "text-blue-400" : "text-blue-600"
              }`}
            >
              Subscribe to our YouTube channel
            </a>.
          </li>
          <li>Share our referral link.</li>
        </ul>
      </div>

      {/* Claim Code Section */}
      <div className="mt-4">
        <h3 className="text-lg font-medium">🏷️ Claim Reward</h3>
        <p className="mt-1">Enter your code to claim your reward:</p>
        <form className="mt-2 flex">
          <input
            type="text"
            placeholder="Enter claim code"
            className={`flex-1 px-3 py-2 border rounded-l ${
              darkMode ? "bg-gray-700 text-white" : "bg-gray-100 text-black"
            }`}
          />
          <button
            type="submit"
            className={`px-4 py-2 rounded-r ${
              darkMode
                ? "bg-blue-500 hover:bg-blue-600 text-white"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            Claim
          </button>
        </form>
      </div>
    </div>
  );
};

export default TasksAndRewards;
