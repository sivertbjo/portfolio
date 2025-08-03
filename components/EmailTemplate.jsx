import React from "react";

export const EmailTemplate = ({ name, email, message }) => {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          backgroundColor: "#f8f8f8",
          padding: "20px",
          borderRadius: "5px",
          border: "1px solid #e8e8e8",
        }}
      >
        <h2
          style={{
            color: "#333",
            borderBottom: "1px solid #ddd",
            paddingBottom: "10px",
          }}
        >
          Ny melding fra kontaktskjema
        </h2>

        <div style={{ padding: "10px 0" }}>
          <p>
            <strong>Name:</strong> {name}
          </p>
          <p>
            <strong>Email:</strong> {email}
          </p>
        </div>

        <div
          style={{
            backgroundColor: "#fff",
            padding: "15px",
            borderRadius: "4px",
            border: "1px solid #e8e8e8",
            marginTop: "10px",
          }}
        >
          <h3 style={{ margin: "0 0 10px 0", color: "#555" }}>Message:</h3>
          <p style={{ lineHeight: "1.5", whiteSpace: "pre-wrap" }}>{message}</p>
        </div>

        <div
          style={{
            marginTop: "20px",
            fontSize: "12px",
            color: "#777",
            textAlign: "center",
          }}
        >
          <p>
            Denne meldingen ble sendt fra kontaktskjemaet på nettstedet ditt.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailTemplate;
