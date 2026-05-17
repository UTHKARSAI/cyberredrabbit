import React, { useEffect, useState } from "react";
import API from "./api";

function App() {
  const [message, setMessage] = useState("Connecting to backend...");

  useEffect(() => {
    API.get("/api/test")
      .then((res) => {
        setMessage(res.data.message);
      })
      .catch((err) => {
        console.error(err);
        setMessage("Backend Connection Failed ❌");
      });
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#0f172a",
        color: "white",
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ fontSize: "40px", marginBottom: "20px" }}>
        CyberRedRabbit 🚀
      </h1>

      <p style={{ fontSize: "24px" }}>{message}</p>
    </div>
  );
}

export default App;