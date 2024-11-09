// DOM Elements
const passwordsGrid = document.getElementById("passwordsGrid");
const modal = document.getElementById("passwordModal");
const searchInput = document.getElementById("searchInput");
const passwordForm = document.getElementById("passwordForm");

// Toggle password visibility
function togglePassword(button) {
  const card = button.closest(".password-card");
  const hiddenSpan = card.querySelector(".password-hidden");
  const visibleSpan = card.querySelector(".password-visible");

  hiddenSpan.classList.toggle("hidden");
  visibleSpan.classList.toggle("hidden");
  button.textContent = button.textContent.replace(/\s/g, "");
  button.textContent = button.textContent == "Show" ? "Hide" : "Show";
}

// Show add password modal
function showAddModal() {
  document.getElementById("modalTitle").textContent = "Add New Password";
  passwordForm.reset();
  passwordForm.method = "post";
  modal.style.display = "flex";
}

// Show edit password modal
document.querySelectorAll(".edit-btn").forEach((editBtn) => {
  editBtn.addEventListener("click", () => {
    for (let i = 0; i < userPasswords.length; i++) {
      if (editBtn.id == userPasswords[i].id) {
        showEditModal(userPasswords[i]);
        break;
      }
    }
  });
});

function showEditModal(pass) {
  document.getElementById("modalTitle").textContent = "Edit Password";
  document.getElementById("nameInput").value = pass.name;
  document.getElementById("urlInput").value = pass.url || "";
  document.getElementById("emailInput").value = pass.email;
  document.getElementById("passwordInput").value = pass.password;
  document.getElementById("notesInput").value = pass.note || "";
  passwordForm.method = "patch";
  modal.style.display = "flex";
}

// Hide modal
function hideModal() {
  modal.style.display = "none";
  passwordForm.reset();
}

// Close modal if clicked outside
window.onclick = (event) => {
  if (event.target === modal) {
    hideModal();
  }
};
