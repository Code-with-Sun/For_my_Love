document.addEventListener("DOMContentLoaded", function () {
  const flames = document.querySelectorAll(".flame, .flame2, .flame3");
  const text = document.querySelector(".text");
  const text2 = document.querySelector(".text2");
  const sms = document.querySelector(".message");
  const heart = document.querySelector(".heart");
  const wish = document.querySelector(".wish");
  flames.forEach((flame) => {
    flame.addEventListener("click", () => {
      flames.forEach((flame) => {
        flame.style.opacity = "0"; // Hide flames
      });
      text.style.opacity = "1"; // Show text
      text.style.top = "-580%"; // Move text up
      text2.style.opacity = "0"; // Hide text 2
      sms.style.opacity = "1"; // To show the sms
      sms.style.top = "92%";
      heart.style.opacity = "1"; // to show the love
      heart.style.top = "-13%";
      wish.style.opacity = "0"; // To hide the wishes
    });
  });
});

// Function to detect mobile devices and Desktop Mode
function checkDesktopModeOnMobile() {
  // Check if the device is mobile
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  if (isMobile && window.innerWidth > 768) {
    // Redirect to mobile version of the site
    // window.location.href = "https://192.168.137.1:5501//index.html";
  } else if (window.innerWidth > 768) {
    // Force mobile layout
    document.body.style.maxWidth = "480px";
    document.body.style.margin = "0 auto";
    document.body.style.overflowX = "hidden";

    // Notify the user
    alert(
      "Hi Sona I am Jarvis !!\nI'm personal AI assistant of Mr. Sundar\nPlease off desktop site for best experience👍"
    );
  }
}

// Run the function on page load
checkDesktopModeOnMobile();

// Run the function again whenever the window is resized
window.addEventListener("resize", checkDesktopModeOnMobile);

// for index page
// Utility delay
const wait = (ms) => new Promise((res) => setTimeout(res, ms));

async function typeText(el, text, speed = 50, delay = 0) {
  el.textContent = "";
  if (delay) await wait(delay);
  for (const char of text) {
    el.textContent += char;
    await wait(speed);
  }
}

// Messages
const titleText = `Happy Birthday
    My Love!
    💝💕💖`;
const line1Text = "To the most amazing woman in my life...";
const line2Text =
  "Every moment with you is a gift and today we celebrate the greatest gift of all - YOU! 🌹🌹🌹\n Love You 3000";

async function playTyping() {
  await typeText(document.getElementById("title"), titleText, 70, 300);
  await wait(400);
  await typeText(document.getElementById("line1"), line1Text, 35, 200);
  await wait(300);
  await typeText(document.getElementById("line2"), line2Text, 35, 200);

  // Show button after typing
  const btn = document.getElementById("surpriseBtn");
  btn.classList.remove("hidden");
  btn.classList.add("show");
}

// Run automatically when page loads
window.addEventListener("DOMContentLoaded", playTyping);

const audio = document.getElementById("bg-music");
const btn = document.getElementById("music-btn");

// --- Play music function (with autoplay handling) ---
function playMusic(force = false) {
  if (!audio) return;

  if (force) {
    audio.currentTime = 0;
  }
  audio.muted = false;

  audio
    .play()
    .then(() => {
      updateButton();
    })
    .catch(() => {
      console.warn("Autoplay blocked, waiting for user action...");
    });
}

// --- Update button text/icon based on state ---
function updateButton() {
  if (audio.muted || audio.paused) {
    btn.textContent = "🔇";
  } else {
    btn.textContent = "🔊";
  }
}

// --- Toggle mute/unmute ---
btn.addEventListener("click", () => {
  audio.muted = !audio.muted;

  if (!audio.muted && audio.paused) {
    audio.play().catch((err) => console.error("Play blocked:", err));
  }

  updateButton();
});

// --- Run on first load ---
document.addEventListener("DOMContentLoaded", () => {
  playMusic(true);
});

// --- Run again if user navigates back/forward ---
window.addEventListener("pageshow", () => {
  playMusic(true);
});
