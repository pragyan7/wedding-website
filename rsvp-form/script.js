document.getElementById("rsvp-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const attendance = document.getElementById("attendance").value;
    const guests = document.getElementById("guests").value;
    const message = document.getElementById("message").value.trim();

    if (!name || !attendance || !guests) {
        alert("Please fill in all required fields.");
        return;
    }

    document.getElementById("response-message").innerText =
        `Thank you, ${name}! Your RSVP has been submitted.`;

    document.getElementById("rsvp-form").reset();
});
