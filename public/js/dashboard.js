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
  passwordForm.action = "/passwords";
  modal.style.display = "flex";
}

// Show edit password modal
document.querySelectorAll(".edit-btn").forEach((editBtn) => {
  editBtn.addEventListener("click", () => {
    for (let i = 0; i < userPasswords.length; i++) {
      if (editBtn.id == userPasswords[i]._id) {
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
  passwordForm.action = `/passwords/${pass._id}`;
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

async function deletePassword(passwordId) {
  if (confirm('Are you sure you want to delete this password?')) {
    try {
      const response = await fetch('/passwords', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ _id: passwordId })
      });

      if (response.ok) {
        window.location.reload();
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to delete password');
    }
  }
}
