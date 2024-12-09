// app/page.tsx
export default function UserProfilePage() {
  return (
    <div style={{ display: "flex", padding: "20px" }}>
      {/* Sidebar */}
      <aside style={{ width: "200px", marginRight: "20px" }}>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li
            style={{ padding: "10px 0", fontWeight: "bold", color: "#007BFF" }}
          >
            ユーザー情報
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main
        style={{
          flexGrow: 1,
          backgroundColor: "#ffffff",
          borderRadius: "8px",
          padding: "20px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div style={{ marginBottom: "20px" }}>
          <h2 style={{ margin: 0 }}>Alexa Rawles</h2>
          <p style={{ color: "#888", margin: 0 }}>alexarawles@gmail.com</p>
        </div>

        <form>
          {/* Name and Nickname */}
          <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
            <div style={{ flex: 1 }}>
              <label>名前</label>
              <input
                type="text"
                defaultValue="Alexa Rawles"
                style={{
                  width: "100%",
                  padding: "10px",
                  marginTop: "5px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <label>ニックネーム</label>
              <input
                type="text"
                defaultValue="Alexa"
                style={{
                  width: "100%",
                  padding: "10px",
                  marginTop: "5px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
              />
            </div>
          </div>

          {/* Gender and Country */}
          <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
            <div style={{ flex: 1 }}>
              <label>性別</label>
              <select
                defaultValue="女性"
                style={{
                  width: "100%",
                  padding: "10px",
                  marginTop: "5px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
              >
                <option value="女性">女性</option>
                <option value="男性">男性</option>
              </select>
            </div>
            <div style={{ flex: 1 }}>
              <label>国</label>
              <select
                defaultValue="アメリカ"
                style={{
                  width: "100%",
                  padding: "10px",
                  marginTop: "5px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
              >
                <option value="アメリカ">アメリカ</option>
                <option value="日本">日本</option>
              </select>
            </div>
          </div>

          {/* Language and Timezone */}
          <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
            <div style={{ flex: 1 }}>
              <label>言語</label>
              <select
                defaultValue="日本語"
                style={{
                  width: "100%",
                  padding: "10px",
                  marginTop: "5px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
              >
                <option value="日本語">日本語</option>
                <option value="英語">英語</option>
              </select>
            </div>
            <div style={{ flex: 1 }}>
              <label>時間帯</label>
              <select
                defaultValue="UTC +9"
                style={{
                  width: "100%",
                  padding: "10px",
                  marginTop: "5px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
              >
                <option value="UTC +9">UTC +9</option>
                <option value="UTC +0">UTC +0</option>
              </select>
            </div>
          </div>

          {/* Email Section */}
          <div>
            <p style={{ marginBottom: "10px" }}>私のメールアドレス</p>
            <p style={{ marginBottom: "20px", color: "#888" }}>
              alexarawles@gmail.com{" "}
              <span style={{ fontSize: "12px" }}>1ヶ月前</span>
            </p>
            <button
              type="button"
              style={{
                backgroundColor: "#007BFF",
                color: "#fff",
                padding: "10px 20px",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              メールアドレスを追加
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
