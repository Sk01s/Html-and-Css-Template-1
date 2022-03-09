let Btn = document.querySelector("[data-btn]");
Btn.addEventListener("click", (el) =>
	el.currentTarget.classList.toggle("active")
);
