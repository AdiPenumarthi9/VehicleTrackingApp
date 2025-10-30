import React from "react";
import { FaPlay, FaPause, FaRedo } from "react-icons/fa";

export default function Controls({ playing, onPlayPause, onReset, disabled }) {
  return (
    <div className="flex justify-center gap-6 mt-4">
      <button
        onClick={onPlayPause}
        disabled={disabled}
        className={`
          flex items-center gap-2 px-5 py-3 rounded-lg font-semibold transition
          focus:outline-none focus:ring-2 focus:ring-indigo-500
          ${disabled ? "bg-gray-400 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700 text-white"}
        `}
      >
        {playing ? <FaPause /> : <FaPlay />}
        {playing ? " Pause" : " Play"}
      </button>

      <button
        onClick={onReset}
        className="
          flex items-center gap-2 px-5 py-3 rounded-lg bg-gray-200 hover:bg-gray-300
          font-semibold text-gray-700 transition focus:outline-none focus:ring-2 focus:ring-indigo-500
        "
      >
        <FaRedo />
        Reset
      </button>
    </div>
  );
}
