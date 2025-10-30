import React from "react";
import { Polyline } from "react-leaflet";

function Route({ positions, currentIdx }) {
  // Completed route positions up to current index
  const completed = positions.slice(0, currentIdx + 1);

  // Remaining route positions after current index
  const remaining = positions.slice(currentIdx);

  return (
    <>
      {completed.length > 1 && (
        <Polyline positions={completed} pathOptions={{ color: "green", weight: 6, opacity: 0.8 }} />
      )}
      {remaining.length > 1 && (
        <Polyline positions={remaining} pathOptions={{ color: "blue", weight: 6, opacity: 0.5 }} />
      )}
    </>
  );
}
export default Route;