import React from "react";
import { RiComputerLine } from "react-icons/ri";
import { GrLanguage } from "react-icons/gr";
import { AiOutlineTranslation } from "react-icons/ai";
import { GiJapan } from "react-icons/gi";
import { RiTimeZoneFill } from "react-icons/ri";

const LanguageAndRegionPage = () => {
  return (
    <div style={{ padding: "16px", backgroundColor: "#f3f4f6", minHeight: "100vh" }}>
      <h1 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "16px" }}>
        設定およびプライバシー
      </h1>

      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: "0 1px 4px rgba(0, 0, 0, 0.1)",
          overflow: "hidden",
        }}
      >
        {/* Tab Header */}
        <div style={{ borderBottom: "1px solid #e5e7eb", display: "flex" }}>
          <button
            style={{
              flex: 1,
              padding: "12px",
              fontWeight: "bold",
              borderBottom: "2px solid #3b82f6",
              color: "#3b82f6",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            言語と地域
          </button>
          <button
            style={{
              flex: 1,
              padding: "12px",
              color: "#6b7280",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            プライバシー
          </button>
        </div>

        {/* Content */}
        <div style={{ padding: "16px" }}>
          {/* Language Section */}
          <div style={{ marginBottom: "24px" }}>
            <h2 style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "12px" }}>言語</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <button
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  width: "100%",
                  padding: "12px",
                  fontSize: "14px",
                  fontWeight: "bold",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                  backgroundColor: "#f9fafb",
                  cursor: "pointer",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <RiComputerLine
                    style={{ width: "24px", height: "24px", marginRight: "12px" }}
                  />
                  表示言語
                </div>
                <span style={{ marginLeft: "36px", fontWeight: "normal" }}>Japanese</span>
              </button>

              <button
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  width: "100%",
                  padding: "12px",
                  fontSize: "14px",
                  fontWeight: "bold",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                  backgroundColor: "#f9fafb",
                  cursor: "pointer",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <GrLanguage 
                    style={{ width: "24px", height: "24px", marginRight: "12px" }}
                  />
                    
                </div>
                <span style={{ marginLeft: "36px", fontWeight: "normal" }}>
                  Japanese (Japan) ; Vietnamese (Vietnam)
                </span>
              </button>

              <button
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  width: "100%",
                  padding: "12px",
                  fontSize: "14px",
                  fontWeight: "bold",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                  backgroundColor: "#f9fafb",
                  cursor: "pointer",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <AiOutlineTranslation 
                    style={{ width: "24px", height: "24px", marginRight: "12px" }}
                  />
                  翻訳
                </div>
                <span style={{ marginLeft: "36px", fontWeight: "normal" }}>
                  Japanese, 翻訳する前に確認する
                </span>
              </button>
            </div>
          </div>

          {/* Region Section */}
          <div>
            <h2 style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "12px" }}>地域</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <button
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  width: "100%",
                  padding: "12px",
                  fontSize: "14px",
                  fontWeight: "bold",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                  backgroundColor: "#f9fafb",
                  cursor: "pointer",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <GiJapan 
                    style={{ width: "24px", height: "24px", marginRight: "12px" }}
                  />
                  地域設定
                </div>
                <span style={{ marginLeft: "36px", fontWeight: "normal" }}>
                  Japanese (Japan), 2000-08-31, 1:01 - 23:59
                </span>
              </button>

              <button
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  width: "100%",
                  padding: "12px",
                  fontSize: "14px",
                  fontWeight: "bold",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                  backgroundColor: "#f9fafb",
                  cursor: "pointer",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <RiTimeZoneFill 
                    style={{ width: "24px", height: "24px", marginRight: "12px" }}
                  />
                  タイムゾーン
                </div>
                <span style={{ marginLeft: "36px", fontWeight: "normal" }}>
                  UTC+07:00 (Bangkok, Hanoi, Jakarta)
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageAndRegionPage;
