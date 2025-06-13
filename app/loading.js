"use client";

import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Loading = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "#ffffff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
        flexDirection: "column",
      }}
    >
      <ClipLoader
        color="#0070f3"
        size={60}
        speedMultiplier={1}
        aria-label="Loading Spinner"
      />
      <p
        style={{
          marginTop: "1rem",
          fontSize: "1rem",
          color: "#333",
          fontWeight: 500,
        }}
      >
        Loading, please wait...
      </p>
    </div>
  );
};

export default Loading;
