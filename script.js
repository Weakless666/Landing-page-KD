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

function showSection(sectionNumber) {
  const section = document.getElementById(`courseSection${sectionNumber}`);
  if (section) {
    // Remove display:none if it exists
    section.style.removeProperty("display");
    // Trigger reflow
    section.offsetHeight;
    section.classList.add("active");
    document.body.style.overflow = "hidden";

    // Disable navigation links
    const navLinks = document.querySelectorAll(".nav-links a");
    navLinks.forEach((link) => {
      link.style.pointerEvents = "none";
      link.style.opacity = "0.5";
    });
  }

  // Add visited class to the button
  const button = document.querySelector(
    `.course-btn:nth-child(${sectionNumber})`
  );
  button.classList.add("visited");
}

function hideSection() {
  const sections = document.querySelectorAll(".course-detail-section.active");
  sections.forEach((section) => {
    section.classList.remove("active");
    // No need to set display:none since we're using visibility
  });

  document.body.style.overflow = "auto";

  // Re-enable navigation links
  const navLinks = document.querySelectorAll(".nav-links a");
  navLinks.forEach((link) => {
    link.style.pointerEvents = "auto";
    link.style.opacity = "1";
  });
}

// Add event listener for ESC key
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    hideSection();
  }
});
