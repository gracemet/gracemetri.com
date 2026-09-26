function copyToClipboard(info) {
    navigator.clipboard.writeText(info)

    document.getElementById("phone").innerHTML = "Copied &checkmark;"
    // document.getElementById("phone").style = ""

}

function contact(toggle) {
    if (toggle === "open") {
        document.getElementById("contact").style.display = "flex";
    }
    else {
        document.getElementById("contact").style.display = "none";
    }
}

function sendEmail() {
    emailjs.init("f3swxLU3du_qQ1npK");
    const form = document.getElementById("contact-form");
    const button = form.querySelector("button");
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const emailValue = form.contactEmail.value;

        if (!isValidEmail(emailValue)) {
            alert("Please enter a valid email address.");
            return;
        }

        button.disabled = true;
        button.textContent = "Playing...";
        emailjs.sendForm("service_8seecoh", "template_uu1z8gl", this)
            .then(() => { button.textContent = "Sent!"; })
            .catch((err) => { button.disabled = false; button.textContent = "&#9654; Play"; alert("Failed to send: " + err); });
    });
}

function formatPhoneNumber(value) {
    const digits = value.replace(/\D/g, "").slice(0, 10);
    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

document.addEventListener("DOMContentLoaded", () => {
    const phoneInput = document.getElementById("phoneNumber");
    phoneInput.addEventListener("input", (e) => {
        e.target.value = formatPhoneNumber(e.target.value);
    });
});

function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

