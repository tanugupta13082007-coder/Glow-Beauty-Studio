
function showMessage() {
    alert("Thank you! Your appointment request is received.");
}

const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("customerName").value;
    const service = document.getElementById("service").value;
    const date = document.getElementById("date").value;

    alert(
        "Appointment Request Submitted Successfully!\n\n" +
        "Name: " + name +
        "\nService: " + service +
        "\nDate: " + date
    );

    bookingForm.reset();

});
