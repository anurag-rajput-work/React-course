import { useId } from "react";
import React from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
  className = "",
}) {
  let amountId = useId();

  return (
    <div
      className={`flex flex-col sm:flex-row bg-gray-900/80 backdrop-blur-md p-4 rounded-2xl gap-4 shadow-lg ${className}`}
    >
      {/* Amount Input */}
      <div className="flex-1 flex flex-col">
        <label
          htmlFor={amountId}
          className="text-white/60 text-sm font-medium mb-2"
        >
          {label}
        </label>
        <input
          id={amountId}
          type="number"
          placeholder="Amount"
          value={amount}
          disabled={amountDisabled}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
          className="w-full rounded-lg bg-gray-800/50 text-white placeholder-white/50 py-2 px-3 outline-none focus:ring-2 focus:ring-indigo-500 transition"
        />
      </div>

      {/* Currency Select */}
      <div className="flex-1 flex flex-col">
        <p className="text-white/60 text-sm font-medium mb-2">Currency Type</p>
        <select
          value={selectedCurrency}
          disabled={currencyDisabled}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          className="w-full rounded-lg bg-gray-800/50 text-white py-2 px-3 outline-none cursor-pointer focus:ring-2 focus:ring-indigo-500 transition"
        >
          {currencyOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
