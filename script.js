let editor = document.getElementById("editor");
function changeBg(color) {
    editor.style.backgroundColor = color;
}
function changeText(color) {
    editor.style.color = color;
}
function changeFont() {
    let font = document.getElementById("font").value;
    editor.style.fontFamily = font;
}