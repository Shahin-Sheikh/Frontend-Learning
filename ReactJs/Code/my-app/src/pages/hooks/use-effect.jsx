import { useState, useEffect } from "react";

export default function UseEffectHook() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours() % 12;

  const secondDegrees = (seconds / 60) * 360;
  const minuteDegrees = (minutes / 60) * 360 + (seconds / 60) * 6;
  const hourDegrees = (hours / 12) * 360 + (minutes / 60) * 30;

  return (
    <div>
      <div>Use Effect - Analog Watch</div>
      <div
        style={{
          position: "relative",
          shapeOutside: "circle()",
          clipPath: "circle()",
          borderRadius: "50%",
          width: "300px",
          height: "300px",
          backgroundColor: "#FFCCCB",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "20px auto",
          border: "8px solid #333",
        }}
      >
        {/* Hour markers */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: "2px",
              height: "10px",
              backgroundColor: "#333",
              top: "10px",
              left: "50%",
              transformOrigin: "center 140px",
              transform: `translateX(-50%) rotate(${i * 30}deg)`,
            }}
          />
        ))}

        {/* Center dot */}
        <div
          style={{
            position: "absolute",
            width: "12px",
            height: "12px",
            backgroundColor: "#333",
            borderRadius: "50%",
            zIndex: 10,
          }}
        />

        {/* Hour hand */}
        <div
          style={{
            position: "absolute",
            width: "6px",
            height: "70px",
            backgroundColor: "#333",
            bottom: "50%",
            left: "50%",
            transformOrigin: "bottom center",
            transform: `translateX(-50%) rotate(${hourDegrees}deg)`,
            borderRadius: "3px 3px 0 0",
          }}
        />

        {/* Minute hand */}
        <div
          style={{
            position: "absolute",
            width: "4px",
            height: "100px",
            backgroundColor: "#555",
            bottom: "50%",
            left: "50%",
            transformOrigin: "bottom center",
            transform: `translateX(-50%) rotate(${minuteDegrees}deg)`,
            borderRadius: "2px 2px 0 0",
          }}
        />

        {/* Second hand */}
        <div
          style={{
            position: "absolute",
            width: "2px",
            height: "120px",
            backgroundColor: "#ff0000",
            bottom: "50%",
            left: "50%",
            transformOrigin: "bottom center",
            transform: `translateX(-50%) rotate(${secondDegrees}deg)`,
            borderRadius: "1px 1px 0 0",
          }}
        />
      </div>
      <div style={{ textAlign: "center", marginTop: "10px", fontSize: "18px" }}>
        {time.toLocaleTimeString()}
      </div>
    </div>
  );
}
