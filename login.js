// PASSWORD SHOW / HIDE
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("toggle-password");

if (togglePassword) {
  togglePassword.addEventListener("click", () => {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      togglePassword.textContent = "非表示";
    } else {
      passwordInput.type = "password";
      togglePassword.textContent = "表示";
    }
  });
}

// REMEMBER EMAIL
const emailInput = document.getElementById("email");
const remember = document.getElementById("remember");

if (emailInput) {
  const savedEmail = localStorage.getItem("email");
  if (savedEmail) {
    emailInput.value = savedEmail;
    remember.checked = true;
  }
}

// FORM VALIDATION
const form = document.getElementById("login-form");
const message = document.getElementById("login-message");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (email === "" || password === "") {
      message.textContent = "入力してください。";
      return;
    }

    if (!email.includes("@")) {
      message.textContent = "メール形式が正しくありません。";
      return;
    }

    // remember me
    if (remember.checked) {
      localStorage.setItem("email", email);
    } else {
      localStorage.removeItem("email");
    }

    message.textContent = "ログイン機能はデモです（UIのみ）";
  });
}