import React from "react";

function LoginPage() {
  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.heading}>ログイン</h2>
        <div style={styles.socialLogin}>
          <button style={styles.socialButton}>Lineで続けます</button>
          <button style={styles.socialButton}>Googleで続けます</button>
        </div>
        <form>
          <label style={styles.label}>
            メールアドレスまたはユーザー名
            <input
              type="text"
              placeholder="メールアドレスまたはユーザー名を入力してください"
              style={styles.input}
            />
          </label>
          <label style={styles.label}>
            パスワード
            <input
              type="password"
              placeholder="パスワードを入力してください"
              style={styles.input}
            />
          </label>
          <div style={styles.options}>
            <label style={styles.checkboxLabel}>
              <input type="checkbox" />
              <span> 保存する</span>
            </label>
            <a href="#" style={styles.link}>
              パスワードを忘れた
            </a>
          </div>
          <button type="submit" style={styles.button}>
            ログイン
          </button>
        </form>
        <p style={styles.footerText}>
          アカウントをお持ちではありませんか？
          <a href="#" style={styles.link}>
            サインアップ
          </a>
        </p>
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
    fontSize: "24px",
    color: "#333333",
    marginBottom: "20px",
  },
  socialLogin: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginBottom: "20px",
  },
  socialButton: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#eeeeee",
    border: "1px solid #cccccc",
    borderRadius: "5px",
    cursor: "pointer",
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
  options: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  checkboxLabel: {
    fontSize: "14px",
    color: "#666666",
  },
  link: {
    color: "#007BFF",
    textDecoration: "none",
    fontSize: "14px",
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
  footerText: {
    fontSize: "14px",
    color: "#666666",
    marginTop: "20px",
  },
};

export default LoginPage;
