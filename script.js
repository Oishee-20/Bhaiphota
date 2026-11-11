
const openLetter = document.getElementById("openLetter");
const letter = document.getElementById("letter");

openLetter.addEventListener("click", function () {
    letter.classList.toggle("hidden");

    if (letter.classList.contains("hidden")) {
        openLetter.textContent = "Open your letter 💌";
    } else {
        openLetter.textContent = "Close your letter ♡";
        letter.scrollIntoView({ behavior: "smooth" });
    }
});

const revealButton = document.getElementById("revealButton");
const finalMessage = document.getElementById("finalMessage");

revealButton.addEventListener("click", function () {
    finalMessage.classList.toggle("hidden");

    if (finalMessage.classList.contains("hidden")) {
        revealButton.textContent = "Click for your final surprise ✨";
    } else {
        revealButton.textContent = "A little more love ♡";
        finalMessage.scrollIntoView({ behavior: "smooth" });
    }
});
