//your JS code here. If required.
const squares = document.querySelectorAll(".square");

squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
        squares.forEach((sq) => {
            if (sq !== square) {
                sq.style.backgroundColor = "#6F4E37"; // coffee
            } else {
                sq.style.backgroundColor = "#e6e6fa"; // lavender
            }
        });
    });
});
