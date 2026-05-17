import React from "react";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0f172a",
        color: "white",
        fontFamily: "Arial",
        padding: "40px",
      }}
    >
      <h1 style={{ fontSize: "42px" }}>
        CyberRedRabbit 🚀
      </h1>

      <p style={{ fontSize: "20px", marginTop: "10px" }}>
        Secure Cybersecurity Dashboard
      </p>

      <div
        style={{
          marginTop: "40px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        <div
          style={{
            background: "#1e293b",
            padding: "20px",
            borderRadius: "12px",
          }}
        >
          <h2>🔐 File Encryption</h2>
          <p>AES-256 secure file protection module.</p>
        </div>

        <div
          style={{
            background: "#1e293b",
            padding: "20px",
            borderRadius: "12px",
          }}
        >
          <h2>🛡 Threat Monitoring</h2>
          <p>Real-time suspicious activity tracking.</p>
        </div>

        <div
          style={{
            background: "#1e293b",
            padding: "20px",
            borderRadius: "12px",
          }}
        >
          <h2>🤖 AI Detection</h2>
          <p>AI-powered anomaly detection engine.</p>
        </div>

        <div
          style={{
            background: "#1e293b",
            padding: "20px",
            borderRadius: "12px",
          }}
        >
          <h2>📂 Secure Storage</h2>
          <p>Encrypted cloud file storage system.</p>
        </div>
      </div>
    </div>
  );
}

export default App;