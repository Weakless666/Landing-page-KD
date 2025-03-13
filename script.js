// Global variables
let currentSlide = 0;
let sliderTrack, slides, dots, prevButton, nextButton;
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

// Global function for updating slider
function updateSlider() {
  if (!sliderTrack) return;
  
  requestAnimationFrame(() => {
    sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentSlide);
    });
    
    if (prevButton) prevButton.style.opacity = currentSlide === 0 ? '0.5' : '1';
    if (nextButton) nextButton.style.opacity = currentSlide === slides.length - 1 ? '0.5' : '1';
  });
}

// Initialize slider
function initSlider() {
  sliderTrack = document.querySelector('.slider-track');
  slides = Array.from(document.querySelectorAll('.slide'));
  dots = Array.from(document.querySelectorAll('.slider-dot'));
  prevButton = document.querySelector('.slider-arrow.prev');
  nextButton = document.querySelector('.slider-arrow.next');

  // Arrow navigation
  if (prevButton) {
    prevButton.addEventListener('click', () => {
      if (currentSlide > 0) {
        currentSlide--;
        updateSlider();
      }
    });
  }

  if (nextButton) {
    nextButton.addEventListener('click', () => {
      if (currentSlide < slides.length - 1) {
        currentSlide++;
        updateSlider();
      }
    });
  }

  // Dot navigation
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentSlide = index;
      updateSlider();
    });
  });

  // Initialize touch functionality
  initTouchSlider();
  
  // Set initial position
  updateSlider();
}

// Touch slider functionality
function initTouchSlider() {
  if (!sliderTrack) return;
  
  let touchStartX = 0;
  let touchEndX = 0;
  let initialTransform = 0;

  sliderTrack.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
    initialTransform = getCurrentTranslate();
    sliderTrack.style.transition = 'none';
  }, { passive: true });

  sliderTrack.addEventListener('touchmove', (e) => {
    const touch = e.touches[0];
    const diff = touchStartX - touch.clientX;
    const newTransform = initialTransform - diff;
    
    if (currentSlide === 0 && diff < 0 || 
        currentSlide === slides.length - 1 && diff > 0) {
      sliderTrack.style.transform = `translateX(${newTransform / 3}px)`;
    } else {
      sliderTrack.style.transform = `translateX(${newTransform}px)`;
    }
  }, { passive: true });

  sliderTrack.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    const threshold = window.innerWidth * 0.15;

    sliderTrack.style.transition = 'transform 0.3s ease-out';

    if (Math.abs(diff) > threshold) {
      if (diff > 0 && currentSlide < slides.length - 1) {
        currentSlide++;
      } else if (diff < 0 && currentSlide > 0) {
        currentSlide--;
      }
    }

    updateSlider();
  });
}

function getCurrentTranslate() {
  const style = window.getComputedStyle(sliderTrack);
  const matrix = new WebKitCSSMatrix(style.transform);
  return matrix.m41;
}

document.addEventListener('DOMContentLoaded', function() {
  // Initialize VANTA background
  VANTA.WAVES({
    el: "body",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x0077ff,
    shininess: 35.00,
    waveHeight: 15.00,
    waveSpeed: 0.75,
    zoom: 0.65,
    backgroundColor: 0x0055cc
  });

  // Smooth scroll
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

  // Video handling
  const videoWrapper = document.querySelector(".video-wrapper");
  const iframe = document.querySelector(".youtube-video");
  const overlay = document.createElement("div");
  overlay.className = "overlay";
  document.body.appendChild(overlay);

  function toggleVideo() {
    videoWrapper.classList.toggle("expanded");
    overlay.classList.toggle("active");
  }

  if (videoWrapper && overlay) {
    videoWrapper.addEventListener("click", toggleVideo);
    overlay.addEventListener("click", toggleVideo);
  }

  // Initialize slider
  initSlider();
  
  // Render testimonials
  renderTestimonials();

  const burgerMenu = document.querySelector('.burger-menu');
  const navMenu = document.querySelector('.nav-menu');
  
  burgerMenu.addEventListener('click', function() {
    burgerMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    if (!burgerMenu.contains(e.target) && !navMenu.contains(e.target)) {
      burgerMenu.classList.remove('active');
      navMenu.classList.remove('active');
    }
  });

  // Close menu when clicking a link
  const navLinks = document.querySelectorAll('.nav-links a, .nav-cta');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      burgerMenu.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });

  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      // Scrolling down
      navbar.style.top = '-80px'; // Adjust this value based on your navbar height
    } else {
      // Scrolling up
      navbar.style.top = '0';
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
  });
});

// Keep these functions outside the DOMContentLoaded event
function showSection(sectionNumber) {
  const section = document.getElementById(`courseSection${sectionNumber}`);
  if (section) {
    section.style.removeProperty("display");
    section.offsetHeight;
    section.classList.add("active");
    document.body.style.overflow = "hidden";

    const navLinks = document.querySelectorAll(".nav-links a");
    navLinks.forEach((link) => {
      link.style.pointerEvents = "none";
      link.style.opacity = "0.5";
    });
  }

  const button = document.querySelector(`.course-btn:nth-child(${sectionNumber})`);
  if (button) button.classList.add("visited");
}

function hideSection() {
  const sections = document.querySelectorAll(".course-detail-section.active");
  sections.forEach((section) => {
    section.classList.remove("active");
  });

  document.body.style.overflow = "auto";

  const navLinks = document.querySelectorAll(".nav-links a");
  navLinks.forEach((link) => {
    link.style.pointerEvents = "auto";
    link.style.opacity = "1";
  });
}

// ESC key handler
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    hideSection();
  }
});

// Reviews data array
const reviews = [
  {
    name: "sibellpelfan05",
    text: "Красен е невероятен професионалист и вдъхновител. Обяснява сложните неща по ясен и достъпен начин, като винаги е отворен за въпроси и обратна връзка. А създадената общност в Discord групата е място за знания, подкрепа и развитие, която помага на всеки да върви напред. Споделяне на полезна информация...",
    date: "Feb 23, 2025",
    timeAfterPurchase: "28 minutes after purchase"
  },
  {
    name: "ivetsharankova0",
    text: "Сърдечни благодарности към Красен и колегите му! Неговото присъствие изигра съществена роля, в този епизод на моя личен сериал- живота! Още съм в самото начало на обучението, но определено се отправих в съвсем различна и вдъхновяваща за мен трансформация, както в професионален, така и в личен план.",
    date: "Feb 22, 2025",
    timeAfterPurchase: "5 hours after purchase"
  },
  {
    name: "qq4zv6vhfr",
    text: "Не мен групата много ми помага за обработка,също така е много полезна защото всички хора вътре си помагаме взаимно,СИЛНО ПРЕПОРЪЧВАМ❗️❤️",
    date: "Feb 22, 2025",
    timeAfterPurchase: "8 hours after purchase"
  },
  {
    name: "Mincho Dankov",
    text: "Групата е полезна да се заобграждаш с хора, които мислят като теб и имат амбиции. Хубавото е че се развиват в моята сфера и така има надпревера помежду си и е интересно. Забавни, готини и амбицирани хора само вътре. Препоръчвам!",
    date: "Feb 14, 2025",
    timeAfterPurchase: "17 days after purchase"
  },
  {
    name: "stoqnovvst",
    text: "Тази група е перфектното място за всеки, който се занимава с видеообработка – от начинаещи до професионалисти. Членовете са активни, приятелски настроени и винаги готови да помогнат със съвети, ресурси и конструктивна критика. Обсъждат се популярни софтуери като Premiere Pro, DaVinci Resolve и After...",
    date: "Feb 2, 2025",
    timeAfterPurchase: "20 days after purchase"
  },
  {
    name: "aneliya09",
    text: "Адски полезна, добре конфигурирана, разработена и подпомагаща за всякакви хора, които искат или тепърва искат да се развиват в сферата! Хората и обстановката са повече от мотивиращи и помагащи с всеки един въпрос или проблем който би изникнал в главата на един опитен или дори неопитен човек, който с...",
    date: "Jan 31, 2025",
    timeAfterPurchase: "2 days after purchase"
  },
  {
    name: "gergana11apostolova",
    text: "Здрасти, аз съм Гергана и съм на 14 години и тази група ме научи на много нови неща и групата е просто страхотна и много се радвам че съм тук ❤️❗️",
    date: "Jan 31, 2025",
    timeAfterPurchase: "6 days after purchase"
  },
  {
    name: "iliyantomov",
    text: "Чудесна група за целеустремени хора с идеи, в която можеш да научиш много и същевременно да допринесеш за развитието на някой друг. Изключително полезна общност и обогатяваща информация от много естества!",
    date: "Jan 30, 2025",
    timeAfterPurchase: "9 days after purchase"
  },
  {
    name: "lyudmilnedelchev",
    text: "Групата е страхотна !",
    date: "Jan 30, 2025",
    timeAfterPurchase: "14 minutes after purchase"
  },
  {
    name: "yanaemilowa96",
    text: "Изключително полезно. Красен е страхотен мотиватор, ментор и професионалист в сферата си. Дава цялата информация по достъпен и разбираем език. Винаги се отзовава на въпроси. Със създаването на дискорд групата достига до много хора, работещи в различни сфери, които искат да черпят информация и знания...",
    date: "Jan 30, 2025",
    timeAfterPurchase: "12 days after purchase"
  }
];

// Add this function to render the reviews
function renderTestimonials() {
  const container = document.getElementById('testimonials-container');
  if (!container) return;
  
  container.innerHTML = '';
  
  reviews.forEach(review => {
    const card = document.createElement('div');
    card.className = 'testimonial-card';
    
    // Truncate text if it's too long
    const truncatedText = review.text.length > 150 
      ? review.text.substring(0, 150) + '...'
      : review.text;
    
    card.innerHTML = `
      <div class="testimonial-header">
        <div class="testimonial-avatar">👤</div>
        <div class="testimonial-info">
          <h3 class="testimonial-name">${review.name}</h3>
          <p class="testimonial-date">${review.date}</p>
          <p class="testimonial-purchase-time">${review.timeAfterPurchase}</p>
        </div>
      </div>
      <p class="testimonial-text">${truncatedText}</p>
      ${review.text.length > 150 ? '<a href="#" class="read-more">Read more</a>' : ''}
    `;
    
    container.appendChild(card);
  });
}
