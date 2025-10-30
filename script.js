document.querySelectorAll(".toggle-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const results = btn.nextElementSibling;
    const isOpen = results.style.display === "block";
    results.style.display = isOpen ? "none" : "block";
    btn.textContent = isOpen ? "▼ Results & Notes" : "▲ Results & Notes";
  });
});
