import React from "react";

export default function Metadata({ currentPoint, currentIdx, total }) {
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6 mt-6 font-sans text-gray-800">
      {currentPoint ? (
        <>
          <div className="mb-3">
            <strong className="text-indigo-600">Current Stop:</strong>{" "}
            <span className="font-semibold">{currentPoint.stop_name}</span>
          </div>
          <div className="mb-3">
            <strong className="text-indigo-600">Coordinate:</strong>{" "}
            <span>{currentPoint.lat}, {currentPoint.lon}</span>
          </div>
          <div className="mb-3">
            <strong className="text-indigo-600">Elapsed Steps:</strong>{" "}
            <span>{currentIdx + 1} / {total}</span>
          </div>
          <div className="mb-3">
            <strong className="text-indigo-600">Timestamp:</strong>{" "}
            <span>{new Date(currentPoint.timestamp).toLocaleString()}</span>
          </div>
        </>
      ) : (
        <div className="text-center text-gray-500">Waiting for data...</div>
      )}
    </div>
  );
}
