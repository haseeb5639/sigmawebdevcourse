// script.js

const namesTextarea = document.getElementById('namesTextarea');
const spinBtn = document.getElementById('spinBtn');
const wheelCanvas = document.getElementById('wheelCanvas');
const ctx = wheelCanvas.getContext('2d');

let names = ["Haseeb", "Mukk", "Hamza", "Zimam"];
let startAngle = 0;
let arc = 0;
let spinAngleStart = 40; // Increased initial spin speed
let spinTime = 0;
let spinTimeTotal = 15000; // Total spin time set to 15 seconds
let isSpinning = false;
let slowSpinSpeed = 0.006; // Minimal slow spin speed
let slowSpinActive = true; // Control for the initial slow spin

// Fixed colors array
const colors = ["#3369e8", "#009925", "#d50f25", "#eeb211"]; // Blue, Green, Red, Yellow

// Load the arrow image
const arrowImage = new Image();
arrowImage.src = 'dark border arrow.png'; // The arrow image file path

// Set default names in the textarea
namesTextarea.value = names.join('\n');

// Ensure the canvas is large enough to accommodate all circles
wheelCanvas.width = 560;
wheelCanvas.height = 560;

// Draw the initial wheel
arrowImage.onload = function () {
    drawWheel();
    startSlowSpin(); // Start the slow spinning on initial load
};

namesTextarea.addEventListener('input', () => {
    names = namesTextarea.value.split('\n').filter(name => name.trim() !== "");
    drawWheel();
});

spinBtn.addEventListener('click', () => {
    if (names.length > 0 && !isSpinning) {
        isSpinning = true;
        spinTime = 0;
        slowSpinActive = false; // Stop the slow spin when the user clicks spin
        rotateWheel();
    }
});

function startSlowSpin() {
    if (slowSpinActive) {
        startAngle += slowSpinSpeed; // Slowly increase the start angle
        drawWheel();
        requestAnimationFrame(startSlowSpin); // Continuously call startSlowSpin
    }
}

function drawWheel() {
    arc = 2 * Math.PI / names.length; // Calculate the arc for each segment

    // Clear the canvas
    ctx.clearRect(0, 0, wheelCanvas.width, wheelCanvas.height);

    // Draw the outer circle (560x560)
    ctx.beginPath();
    ctx.arc(280, 280, 275, 0, 2 * Math.PI); // Outer circle centered at (280, 280)
    ctx.fillStyle = "#e0e0e0"; // Light gray for the outer circle
    ctx.fill();
    ctx.closePath();

    // Draw the middle circle (500x500)
    ctx.beginPath();
    ctx.arc(280, 280, 245, 0, 2 * Math.PI); // Inner circle
    ctx.fillStyle = "#f4f4f4"; // Main inner circle color
    ctx.fill();
    ctx.closePath();

    // Draw the smaller center circle
    ctx.beginPath();
    ctx.arc(280, 280, 50, 0, 2 * Math.PI); // Small center circle
    ctx.fillStyle = "#ffffff"; // White for the smallest circle
    ctx.fill();
    ctx.closePath();

    // Draw a yellow line pointing towards 3 o'clock (0 radians)
    ctx.beginPath();
    ctx.moveTo(280, 280); // Center of the wheel
    ctx.lineTo(560, 280); // Line extending towards 3 o'clock
    ctx.strokeStyle = "yellow";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();


    // Draw the wheel segments on the middle circle
    for (let i = 0; i < names.length; i++) {
        const angle = startAngle + i * arc;
        const colorIndex = i % colors.length; // Fixed color based on index
        ctx.fillStyle = colors[colorIndex]; // Assign color based on position

        ctx.beginPath();
        ctx.arc(280, 280, 245, angle, angle + arc, false); // Middle circle arc
        ctx.arc(280, 280, 50, angle + arc, angle, true); // Small center circle arc
        ctx.fill();
        ctx.closePath();

        ctx.save();
        ctx.fillStyle = "#FFFFFF"; // White text color
        ctx.font = "25px 'Roboto', sans-serif"; // Set font size and family

        if (i % 2 !== 0) {
            ctx.fillStyle = "#000000"; // Change text color for alternating segments
        }

        // Rotate text to align with the segment
        ctx.translate(280 + Math.cos(angle + arc / 2) * 170, 280 + Math.sin(angle + arc / 2) * 170);
        ctx.rotate(angle + arc / 2); // Rotate text to match segment direction
        ctx.fillText(names[i], -ctx.measureText(names[i]).width / 2, 10); // Adjust Y-position to center text in the segment

        ctx.restore();
    }

    // Draw the arrow at the right center of the outer circle
    drawArrow();
}

function drawArrow() {
    const arrowX = 508; // Positioning the arrow so it's half out of the outer circle
    const arrowY = 255; // Adjust Y to center the arrow vertically within the larger circle
    const arrowWidth = 50; // Set the arrow width
    const arrowHeight = 50; // Set the arrow height

    ctx.drawImage(arrowImage, arrowX, arrowY, arrowWidth, arrowHeight);
}

function rotateWheel() {
    spinTime += 30;
    if (spinTime >= spinTimeTotal) {
        setTimeout(stopRotateWheel, 500); // Add a slight delay before stopping and alerting
        isSpinning = false; // Reset the spinning flag
        return;
    }
    const spinAngle = spinAngleStart - easeOut(spinTime, 0, spinAngleStart, spinTimeTotal);
    startAngle += (spinAngle * Math.PI / 180);
    drawWheel();
    requestAnimationFrame(rotateWheel);
}

function stopRotateWheel() {
    // Normalize the final angle to be within [0, 2 * Math.PI] range
    const normalizedFinalAngle = (startAngle % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI);

    // Adjust the angle to account for the arrow pointing at the right-center (0 radians)
    const adjustedAngle = (normalizedFinalAngle + Math.PI / 2) % (2 * Math.PI);

    // Calculate the index of the segment aligned with the right-center (0 radians)
    const index = Math.floor(adjustedAngle / arc) % names.length;

    // Ensure the wheel has stopped before showing the alert
    setTimeout(() => {
        alert("The winner is: " + names[index]);
    }, 300); // Adding a small delay before showing the alert
}


function easeOut(t, b, c, d) {
    t /= d;
    t--;
    return c * (t * t * t + 1) + b;
}