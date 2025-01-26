document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    targetSection.scrollIntoView({
      behavior: "smooth",
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const videoWrapper = document.querySelector(".video-wrapper");
  const iframe = document.querySelector(".youtube-video");

  // Create overlay element
  const overlay = document.createElement("div");
  overlay.className = "overlay";
  document.body.appendChild(overlay);

  // Toggle video size
  function toggleVideo() {
    videoWrapper.classList.toggle("expanded");
    overlay.classList.toggle("active");
  }

  // Click events
  videoWrapper.addEventListener("click", toggleVideo);
  overlay.addEventListener("click", toggleVideo);
});
