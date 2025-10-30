import refs from "./refs";

export function openModal() {
    refs.modal.classList.add("modal--is-open");
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onEscapeKey);
    refs.modal.addEventListener("click", onBackDrop);
}
 export function closeModal() {
    refs.modal.classList.remove("modal--is-open");
    document.body.style.overflow = "";
    window.removeEventListener("keydown", onEscapeKey);
    refs.modal.removeEventListener("click", onBackDrop);
}
function onEscapeKey(event) {
    if(event.code === "Escape") {
        closeModal();
    }
}

function onBackDrop(event) {
    if (event.target === refs.modal) {
        closeModal();
    }
}