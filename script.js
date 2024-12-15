function openPopup(content) {
    console.log ("Popup triggered with content:", content);
    const popup = document.getElementById("popup");
    const popupText = document.getElementById("popup-text");
    if (!popupText) {
        console.error("Popup text element not found");
        return;
    }
    popupText.innerHTML =content;
    popup.style.display = "flex";
}

function closePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none";
}