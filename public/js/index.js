const modal = document.querySelector(".modal");
const inputForm = document.querySelector(".inputForm");
const textInput = document.querySelector(".text-input");
const submitBtn = document.querySelector(".submit-btn");

document.querySelectorAll(".loginBtn").forEach((elm) => {
  elm.addEventListener("click", () => {
    document.getElementById("modalTitle").textContent = "Login to your account";
    inputForm.action = "/user/login";
    submitBtn.textContent = "Log in";
    if (!textInput.classList.contains("hidden")) {
      textInput.classList.add("hidden");
      textInput.removeAttribute("required");
    }
    modal.showModal();
  });
});
document.querySelectorAll(".signupBtn").forEach((elm) => {
  elm.addEventListener("click", () => {
    document.getElementById("modalTitle").textContent = "Create a new account";
    inputForm.action = "/user/signup";
    submitBtn.textContent = "Sign up";
    if (textInput.classList.contains("hidden")) {
      textInput.classList.remove("hidden");
      textInput.setAttribute("required", "");
    }

    modal.showModal();
  });
});
document.querySelectorAll(".cancel-btn").forEach((elm) => {
  elm.addEventListener("click", () => {
    modal.close();
  });
});
