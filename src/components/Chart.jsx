import React from "react";

function Chart({ stops, currentIdx }) {
  return (
    <div className="max-w-md mx-auto my-8 relative">
      <div className="absolute top-0 bottom-0 left-5 w-1 bg-gray-300 rounded" />
      <div className="space-y-8">
        {stops.map((stop, idx) => {
          const isCompleted = idx < currentIdx;
          const isCurrent = idx === currentIdx;
          const circleColor = isCurrent ? "bg-indigo-600 border-indigo-300" : isCompleted ? "bg-green-500 border-green-300" : "bg-gray-300 border-gray-300";
          const textColor = isCurrent ? "text-indigo-600 font-semibold" : isCompleted ? "text-green-600" : "text-gray-500";

          return (
            <div key={idx} className="flex items-center gap-4">
              <div className={`h-6 w-6 rounded-full border-4 ${circleColor}`} />
              <div className={`text-lg ${textColor}`}>
                {stop.stop_name || `Stop ${idx + 1}`}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Chart;
