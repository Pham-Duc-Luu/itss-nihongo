import React from "react";

function App() {
  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.heading}>アカウントを作成する</h2>
        <p style={styles.subheading}>
          すでにアカウントをお持ちですか？
          <a href="#" style={styles.link}>
            ログイン
          </a>
        </p>
        <form>
          <label style={styles.label}>
            メールは何ですか？
            <input type="email" placeholder="メールアドレスを入力してください" style={styles.input} />
          </label>
          <label style={styles.label}>
            あなたを何と呼べばいいでしょうか？
            <input type="text" placeholder="プロフィール名を入力してください" style={styles.input} />
          </label>
          <label style={styles.label}>
            パスワードを作成
            <input type="password" placeholder="パスワードを入力してください" style={styles.input} />
          </label>
          <label style={styles.label}>
            パスワードを確認してください
            <input type="password" placeholder="パスワードを入力してください" style={styles.input} />
          </label>
          <p style={styles.terms}>
            アカウントを作成すると、
            <a href="#" style={styles.link}>
              利用規約
            </a>
            や
            <a href="#" style={styles.link}>
              プライバシーポリシー
            </a>
            に同意したことになります
          </p>
          <button type="submit" style={styles.button}>
            アカウントを作成する
          </button>
        </form>
        <div style={styles.socialLogin}>
          <button style={styles.socialButton}>Line</button>
          <button style={styles.socialButton}>Google</button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#b9f6ca",
  },
  formContainer: {
    backgroundColor: "#ffffff",
    padding: "30px",
    borderRadius: "10px",
    width: "400px",
    textAlign: "center",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    color: "#333333",
    marginBottom: "10px",
  },
  subheading: {
    color: "#666666",
    fontSize: "14px",
    marginBottom: "20px",
  },
  link: {
    color: "#007BFF",
    textDecoration: "none",
  },
  label: {
    display: "block",
    textAlign: "left",
    marginBottom: "15px",
    fontSize: "14px",
    color: "#333333",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginTop: "5px",
    borderRadius: "5px",
    border: "1px solid #cccccc",
    fontSize: "14px",
  },
  terms: {
    fontSize: "12px",
    color: "#666666",
    marginTop: "20px",
    marginBottom: "20px",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#00c853",
    color: "#ffffff",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
  },
  socialLogin: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "20px",
  },
  socialButton: {
    width: "120px",
    padding: "10px",
    backgroundColor: "#eeeeee",
    border: "1px solid #cccccc",
    borderRadius: "5px",
    fontSize: "14px",
    cursor: "pointer",
  },
};

export default App;
