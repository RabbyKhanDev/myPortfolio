// Add active class to the current button (highlight it)
const header = document.getElementById("myDIV");
const btns = header.getElementsByClassName("btn");

// Loop through the buttons and add the active class to the current/clicked button.
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
    const current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    });
};