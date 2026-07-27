let div = document.getElementById("myDiv");
let button = document.getElementById("myButton");
let input = document.getElementById("colorInput");

button.addEventListener("click", function () {
    let color = input.value.trim();

    const test = new Option().style;
    test.color = color;

    if (test.color === "") {
        alert("Please enter a valid color!");
    } else {
        div.style.backgroundColor = color;
    }
});