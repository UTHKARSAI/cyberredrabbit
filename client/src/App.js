import React, { useState } from "react";
import API from "./api";

function App() {
  const [file, setFile] = useState(null);

  const [message, setMessage] =
    useState("");

  const uploadFile = async () => {
    if (!file) {
      alert("Please select a file");

      return;
    }

    const formData = new FormData();

    formData.append("file", file);

    try {
      const res = await API.post(
        "/api/upload",
        formData
      );

      setMessage(res.data.message);
    } catch (error) {
      console.log(error);

      setMessage("Upload failed ❌");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0f172a",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial",
      }}
    >
      <h1>
        CyberRedRabbit 🔐
      </h1>

      <p>
        AES-256 Secure File
        Encryption
      </p>

      <input
        type="file"
        onChange={(e) =>
          setFile(e.target.files[0])
        }
        style={{
          marginTop: "20px",
        }}
      />

      <button
        onClick={uploadFile}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        Upload & Encrypt
      </button>

      <p style={{ marginTop: "20px" }}>
        {message}
      </p>
    </div>
  );
}

export default App;
