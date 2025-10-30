import React, { useState, useEffect, useRef } from "react";
import MapView from "./components/MapView";
import Controls from "./components/Controls";
import Metadata from "./components/Metadata";
import "./app.css";
import Chart from "./components/Chart";

function App() {
  const [route, setRoute] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [playing, setPlaying] = useState(false);
  const intervalRef = useRef();

  useEffect(() => {
    fetch("/dummy-route.json")
      .then(res => res.json())
      .then(data => setRoute(data));
  }, []);

  useEffect(() => {
    if (playing && route.length > 0 && currentIdx < route.length - 1) {
      intervalRef.current = setInterval(() => {
        setCurrentIdx(idx => Math.min(idx + 1, route.length - 1));
      }, 1000); // 1 sec interval or use route timestamps for dynamic intervals
    } else if (!playing || currentIdx === route.length - 1) {
      setPlaying(false);
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [playing, currentIdx, route]);

  return (
    <div className="container flex flex-col items-start gap-4 md:flex-row md:items-center md:gap-6 p-4">
      <MapView route={route} currentIdx={currentIdx} />      
      <div className="w-full md:w-1/3 flex flex-col gap-4">
        <Controls
        playing={playing}
        onPlayPause={() => setPlaying(p => !p)}
        onReset={() => {
          setPlaying(false);
          setCurrentIdx(0);
        }}
          disabled={route.length === 0}
        />
        <Metadata
          currentPoint={route[currentIdx]}
          currentIdx={currentIdx}
          total={route.length}
        />
        <Chart stops={route} currentIdx={currentIdx} />
      </div>
    </div>
  );
}

export default App;
