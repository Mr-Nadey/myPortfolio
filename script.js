// JavaScript source code
// JavaScript to confirm script loading
// Array to track all gallery pictures dynamically
let currentImgIndex = 0;
const images = document.getElementsByClassName("gallery-thumb");

function openLightbox(index) {
    currentImgIndex = index;
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const captionText = document.getElementById("lightbox-caption");

    lightbox.style.display = "block";
    lightboxImg.src = images[index].src;
    captionText.innerHTML = images[index].alt;
}

function closeLightbox() {
    document.getElementById("lightbox").style.style.display = "none";
}

function changeImage(direction) {
    currentImgIndex += direction;

    // Loop logic: back to start if reaching the end, or to the end if stepping before 0
    if (currentImgIndex >= images.length) { currentImgIndex = 0; }
    if (currentImgIndex < 0) { currentImgIndex = images.length - 1; }

    const lightboxImg = document.getElementById("lightbox-img");
    const captionText = document.getElementById("lightbox-caption");

    lightboxImg.src = images[currentImgIndex].src;
    captionText.innerHTML = images[currentImgIndex].alt;
}

// Close the viewer window if a user presses the Escape key
document.addEventListener('keydown', function (event) {
    if (event.key === "Escape") {
        closeLightbox();
    }
});

// Processing Form Inbound Data
function handleFormSubmit(event) {
    event.preventDefault(); // Stop page refresh logic

    // Fetch values input by visitor
    const name = document.getElementById("user-name").value;
    const email = document.getElementById("user-email").value;
    const msg = document.getElementById("user-message").value;
    const alertBox = document.getElementById("form-alert");

    // Display localized mock submission success notification
    alertBox.className = "alert-box alert-success";
    alertBox.innerHTML = `Thank you, ${name}! Your message has been sent successfully. I will reach out to you at ${email}.`;

    // Clear out input values for subsequent submissions
    document.getElementById("contact-form").reset();

    // Log tracking payloads to terminal / developer tool panel
    console.log("--- New Inbound Form Payload Received ---");
    console.log(`Sender Name: ${name}`);
    console.log(`Reply Target: ${email}`);
    console.log(`Body Contents: ${msg}`);
}
