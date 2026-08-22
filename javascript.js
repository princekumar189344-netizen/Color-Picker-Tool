const colorPicker = document.getElementById("colorPicker");
const colorBox = document.getElementById("colorBox");
const colorCode = document.getElementById("colorCode");

colorPicker.addEventListener("input", function () {
    const selectedColor = colorPicker.value;

    colorBox.style.backgroundColor = selectedColor;
    colorCode.textContent = selectedColor;
});

function copyColor() {
    navigator.clipboard.writeText(colorCode.textContent)
        .then(() => {
            alert("Color code copied!");
        })
        .catch(() => {
            alert("Failed to copy color code.");
        });
    
    }
