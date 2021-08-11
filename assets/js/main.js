function getElement(element) {
    return document.querySelector(element);
}

let buttons = {
    "about-me": getElement("#about-me-btn"),
    "my-portfolio": getElement("#my-portfolio-btn"),
    "contact-me": getElement("#contact-me-btn"),
};

Object.keys(buttons).forEach((value) => {
    buttons[value].addEventListener("click", () => {});
});
