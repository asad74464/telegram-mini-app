import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeProvider";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"; // You can import ShadCN's chart components here if applicable

const TradingPanel = () => {
  const [amount, setAmount] = useState("");
  const [price, setPrice] = useState(100);
  const [tradeType, setTradeType] = useState("buy");
  const [chartData, setChartData] = useState([]);
  const { theme } = useTheme();

  const darkMode = theme === "dark";

  const handleTrade = () => {
    if (!amount || isNaN(amount) || Number(amount) <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    const action = tradeType === "buy" ? "bought" : "sold";
    alert(
      `You have successfully ${action} ${amount} tokens at ${price} USD each.`
    );
    setAmount("");
  };

  useEffect(() => {
    const fetchPrice = async () => {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
      );
      const data = await response.json();
      setPrice(data.bitcoin.usd);
    };
    fetchPrice();

    // Simulate a price trend for the chart
    const simulatedChartData = [
      { time: "12:00", price: 100 },
      { time: "12:10", price: 105 },
      { time: "12:20", price: 110 },
      { time: "12:30", price: 115 },
      { time: "12:40", price: 120 },
      { time: "12:50", price: 125 },
    ];
    setChartData(simulatedChartData);
  }, []);

  return (
    <div
      className={`p-4 shadow rounded mb-4 ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <h2 className="text-xl font-semibold">Trading Panel</h2>

      <div className="mt-4">
        <h3 className="text-lg font-semibold">Market Price (Live)</h3>
        <div
          className={`h-40 flex items-center justify-center rounded mt-2 ${
            darkMode ? "bg-gray-700" : ""
          }`}
        >
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip
                contentStyle={{
                  backgroundColor: darkMode ? "#333" : "#fff",
                  border: `1px solid ${darkMode ? "#444" : "#ddd"}`,
                  color: darkMode ? "#fff" : "#000",
                }}
                labelStyle={{
                  color: darkMode ? "#fff" : "#000",
                }}
              />

              <Area
                type="monotone"
                dataKey="price"
                stroke={darkMode ? "#fff" : "#8884d8"}
                fill={darkMode ? "#8884d8" : "#8884d8"}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-semibold">Trade Tokens</h3>
        <div className="mt-2 flex items-center gap-2">
          <button
            className={`px-4 py-2 rounded ${
              tradeType === "buy"
                ? darkMode
                  ? "bg-green-600 text-white"
                  : "bg-green-500 text-white"
                : darkMode
                ? "bg-gray-600 text-gray-200"
                : "bg-gray-300 text-black"
            }`}
            onClick={() => setTradeType("buy")}
          >
            Buy
          </button>
          <button
            className={`px-4 py-2 rounded ${
              tradeType === "sell"
                ? darkMode
                  ? "bg-red-600 text-white"
                  : "bg-red-500 text-white"
                : darkMode
                ? "bg-gray-600 text-gray-200"
                : "bg-gray-300 text-black"
            }`}
            onClick={() => setTradeType("sell")}
          >
            Sell
          </button>
        </div>

        <div className="mt-4">
          <input
            type="number"
            placeholder="Enter token amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className={`border p-2 w-full rounded ${
              darkMode
                ? "bg-gray-700 text-white border-gray-600"
                : "border-gray-300"
            }`}
          />
        </div>

        <div className="mt-4">
          <button
            className={`px-4 py-2 rounded w-full ${
              darkMode ? "bg-blue-600 text-white" : "bg-blue-500 text-white"
            }`}
            onClick={handleTrade}
          >
            {tradeType === "buy" ? "Buy Tokens" : "Sell Tokens"}
          </button>
        </div>
      </div>

      <div className="mt-4">
        <p className={`${darkMode ? "text-gray-300" : "text-gray-700"}`}>
          Current Price: <strong>{price} USD</strong> per token
        </p>
      </div>
    </div>
  );
};

export default TradingPanel;
