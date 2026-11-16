const colorButtons = document.querySelectorAll(".color-btn");
const randomButton = document.getElementById("randomBtn");
const resetButton = document.getElementById("resetBtn");
const colorCode = document.getElementById("colorCode");
const colorName = document.getElementById("colorName");
const originalColor = "#F4F5FA";
function changeBackground(color, name) {
    document.body.style.backgroundColor = color;
    colorCode.textContent = color.toUpperCase();
    colorName.textContent = name;
}
colorButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const selectedColor = button.getAttribute("data-color");
        const selectedName = button.textContent;
        changeBackground(selectedColor, selectedName + " background");
    });

});
randomButton.addEventListener("click", function() {
    const randomColor = "#" + Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0");
    changeBackground(randomColor, "Random background");
});
resetButton.addEventListener("click", function() {
    changeBackground(originalColor, "Original background");
});
