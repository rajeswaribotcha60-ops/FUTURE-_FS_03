
function orderFood(foodName) {

    alert(
        "Thank you for choosing Royal Spice! 🍽️\n\n" +
        foodName +
        " has been added to your order."
    );
)

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    alert(
        "Thank you, " + name + "! 😊\n\n" +
        "Your message has been received.\n" +
        "We will contact you soon."
    );

    contactForm.reset();

});