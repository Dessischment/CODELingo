let docTitle = document.title;

window.addEventListener("blur", () => {
    document.title = "CODELingo : Learning Coding free";
})
window.addEventListener("focus", () => {
    document.title = docTitle;
})