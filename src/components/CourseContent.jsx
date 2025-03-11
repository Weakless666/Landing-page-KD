import React, { useState } from 'react';

function CourseContent() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 8;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section id="course-content" className="section">
      <div className="container">
        <div className="slider-container">
          <div 
            className="slider-track" 
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {/* Slide 1 */}
            <div className="slide">
              <div className="section-content">
                <div className="eyebrow-options">
                  <p className="eyebrow-text">
                    Специално за теб, който вярваш, че заслужаваш нещо повече от живота!
                  </p>
                </div>
                <h1 className="main-title">
                  Време е да спреш с оправданията! Научи се да създаваш професионални
                  видеа с новия Метод Hook & Story, от които можеш да печелиш над 2000
                  лв./месечно, където и да се намираш по света!
                </h1>
                <div className="features">
                  <p className="feature-item">✅ Без сложни софтуери</p>
                  <p className="feature-item">✅ Без предишен опит</p>
                  <p className="feature-item">✅ Без да прекарваш целия ден пред компютъра</p>
                  <p className="feature-item">✅ Без да показваш лицето си</p>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="slide">
              <div className="course-content-grid">
                <div className="video-side">
                  <div className="course-video-container">
                    <img 
                      src="/src/assets/Images/Live_Editing.png" 
                      alt="Live video editing demonstration in Premiere Pro" 
                      className="course-preview-image"
                    />
                  </div>
                  <div className="video-description">
                    <p>
                      Това обучение е различно от всичко, което си виждал в България
                      досега. Ще ти покажа как да промениш живота си, както аз
                      промених моя.
                    </p>
                    <p>
                      От борбата с ежедневните трудности до сбъдването на
                      Американската мечта и работата ми от всяка една точка на света -
                      моята история ще ти покаже, че е възможно да постигнеш
                      финансовата независимост и да работиш това, което обичаш.
                    </p>
                  </div>
                </div>
                <div className="bonus-section">
                  <h2 className="section-title">Бонуси:</h2>
                  <div className="bonus-item">
                    <h3>✅ Присети за видеа</h3>
                    <p className="bonus-description">
                      Ще създаваш професионално изглеждащи видеа за минути.
                    </p>
                  </div>
                  <div className="bonus-item">
                    <h3>✅ Дискорд общност</h3>
                    <p className="bonus-description">
                      Връзка с хора със сходно мислене и 24/7 обратна връзка от мен.
                    </p>
                  </div>
                  <div className="bonus-item">
                    <h3>✅ Ексклузивни шаблони</h3>
                    <p className="bonus-description">
                      Оптимизирай процеса си и спестявай време.
                    </p>
                  </div>
                  <div className="bonus-item">
                    <h3>✅ Мотивираща и дисциплинирана среда</h3>
                  </div>
                  <div className="bonus-item">
                    <h3>✅ Канали за личностно развитие</h3>
                  </div>
                  <div className="bonus-item">
                    <h3>✅ Ексклузивни Workflows</h3>
                    <p className="bonus-description">
                      Научи доказани работни потоци, които ще ти спестят часове и ще
                      ти помогнат да работиш ефективно.
                    </p>
                  </div>
                  <div className="bonus-item">
                    <h3>✅ Мини-Mastermind Сесии</h3>
                    <p className="bonus-description">
                      Директен достъп до мен за персонализирани съвети и стратегии за
                      развитие.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 3 */}
            <div className="slide">
              <div className="section-content">
                <h2>Защо този курс е различен?</h2>
                <div className="pain-points">
                  <p>
                    Всички други курсове са фокусирани само върху техническите умения
                    за създаване на видеа.
                  </p>
                  <p>
                    Те не ви показват как да намерите клиенти и как да продавате
                    услугите си.
                  </p>
                  <p>
                    В този курс ще научите не само как да създавате професионални
                    видеа, но и как да намерите клиенти и да продавате услугите си.
                  </p>
                  <p>
                    Ще научите как да създавате портфолио, което ще ви помогне да
                    намерите клиенти.
                  </p>
                  <p>
                    Ще научите как да продавате услугите си и как да получавате
                    пари от клиентите си.
                  </p>
                  <p>
                    Всичко това е включено в този курс, за да можете да започнете да
                    печелите пари от създаването на видеа.
                  </p>
                </div>
              </div>
            </div>

            {/* Slide 4 */}
            <div className="slide">
              <div className="section-content">
                <h2>Какво ще научите в този курс?</h2>
                <div className="modules-section">
                  <p className="modules-subtitle">
                    Курсът е разделен на няколко модула, всеки от които е фокусиран
                    върху различни аспекти на създаването на видеа.
                  </p>
                  <div className="modules-list">
                    <div className="module-item">
                      <h3 className="module-title">Модул 1: Въведение</h3>
                      <p className="module-description">
                        В този модул ще научите основите на създаването на видеа и
                        какво оборудване е необходимо.
                      </p>
                      <ul className="module-features">
                        <li>Какво оборудване е необходимо</li>
                        <li>Как да изберете правилната камера</li>
                        <li>Как да изберете правилния микрофон</li>
                        <li>Как да изберете правилното осветление</li>
                      </ul>
                    </div>
                    <div className="module-item">
                      <h3 className="module-title">Модул 2: Създаване на видеа</h3>
                      <p className="module-description">
                        В този модул ще научите как да създавате професионални
                        видеа.
                      </p>
                      <ul className="module-features">
                        <li>Как да планирате видеото си</li>
                        <li>Как да снимате видеото си</li>
                        <li>Как да редактирате видеото си</li>
                        <li>Как да експортирате видеото си</li>
                      </ul>
                    </div>
                    <div className="module-item">
                      <h3 className="module-title">Модул 3: Намиране на клиенти</h3>
                      <p className="module-description">
                        В този модул ще научите как да намерите клиенти за вашите
                        услуги.
                      </p>
                      <ul className="module-features">
                        <li>Как да създадете портфолио</li>
                        <li>Как да рекламирате услугите си</li>
                        <li>Как да намерите клиенти онлайн</li>
                        <li>Как да намерите клиенти офлайн</li>
                      </ul>
                    </div>
                    <div className="module-item">
                      <h3 className="module-title">Модул 4: Продажби</h3>
                      <p className="module-description">
                        В този модул ще научите как да продавате услугите си и как
                        да получавате пари от клиентите си.
                      </p>
                      <ul className="module-features">
                        <li>Как да определите цената на услугите си</li>
                        <li>Как да направите оферта</li>
                        <li>Как да преговаряте с клиентите</li>
                        <li>Как да получавате пари от клиентите си</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 5 */}
            <div className="slide">
              <div className="section-content">
                <h2>Митове и факти</h2>
                <div className="myths-section">
                  <div className="myth-list">
                    <div className="myth-item">
                      <p className="myth">Мит: Трябва да имате скъпо оборудване</p>
                      <p className="truth">
                        Факт: Можете да създавате професионални видеа с дори и
                        най-основното оборудване. Важното е да знаете как да го
                        използвате правилно.
                      </p>
                    </div>
                    <div className="myth-item">
                      <p className="myth">Мит: Трябва да имате предишен опит</p>
                      <p className="truth">
                        Факт: Този курс е проектиран за начинаещи и ще ви научи
                        всичко, което трябва да знаете, за да започнете да създавате
                        професионални видеа.
                      </p>
                    </div>
                    <div className="myth-item">
                      <p className="myth">Мит: Трябва да имате много време</p>
                      <p className="truth">
                        Факт: След като научите основите, можете да създавате
                        професионални видеа за по-малко от час.
                      </p>
                    </div>
                    <div className="myth-item">
                      <p className="myth">Мит: Трябва да имате много пари</p>
                      <p className="truth">
                        Факт: Можете да започнете с минимални инвестиции и да
                        натрупате по-добро оборудване с времето.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 6 */}
            <div className="slide">
              <div className="section-content">
                <h2>Ресурси и бонуси</h2>
                <div className="resources-section">
                  <div className="resources-grid">
                    <div className="resources-visual">
                      <div className="resource-card main-course">
                        <span className="resource-emoji">🎥</span>
                        <h3>Основен курс</h3>
                        <p>Пълно обучение за създаване на професионални видеа</p>
                      </div>
                      <div className="resource-cards-stack">
                        <div className="resource-card bonus">
                          <span className="resource-emoji">📱</span>
                          <h3>Мобилно приложение</h3>
                          <p>Достъп до курса от всяко устройство</p>
                        </div>
                        <div className="resource-card bonus">
                          <span className="resource-emoji">🎯</span>
                          <h3>Шаблони за видеа</h3>
                          <p>Готови шаблони за различни видове видеа</p>
                        </div>
                        <div className="resource-card bonus">
                          <span className="resource-emoji">💡</span>
                          <h3>Съвети и трикове</h3>
                          <p>Експертни съвети за по-добри резултати</p>
                        </div>
                      </div>
                    </div>
                    <div className="offer-side">
                      <h3 className="offer-title">Специална оферта</h3>
                      <div className="price-section">
                        <p className="original-price">Оригинална цена: 997 лв.</p>
                        <p className="special-price">Специална цена: 497 лв.</p>
                        <p className="guarantee">30-дневна гаранция за връщане на парите</p>
                      </div>
                      <a href="https://whop.com/viral-video-social-media/" className="signup-button">
                        ЗАПИШИ СЕ СЕГА
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 7 */}
            <div className="slide">
              <div className="section-content">
                <h2>Отзиви от клиенти</h2>
                <div className="testimonials-section">
                  <div className="testimonials-container">
                    <div className="testimonial-card">
                      <div className="testimonial-header">
                        <div className="testimonial-avatar">JD</div>
                        <div className="testimonial-info">
                          <div className="testimonial-name">John Doe</div>
                          <div className="testimonial-date">2024-03-15</div>
                          <div className="testimonial-purchase-time">Купи курс: Преди 2 месеца</div>
                        </div>
                      </div>
                      <div className="testimonial-text">
                        "Този курс промени живота ми! Научих се да създавам професионални видеа и да намирам клиенти. Сега печеля над 2000 лв. на месец!"
                      </div>
                    </div>
                    <div className="testimonial-card">
                      <div className="testimonial-header">
                        <div className="testimonial-avatar">AS</div>
                        <div className="testimonial-info">
                          <div className="testimonial-name">Alice Smith</div>
                          <div className="testimonial-date">2024-03-10</div>
                          <div className="testimonial-purchase-time">Купи курс: Преди 1 месец</div>
                        </div>
                      </div>
                      <div className="testimonial-text">
                        "Благодаря на този курс, успях да започна свой собствен бизнес в създаването на видеа. Препоръчвам го на всеки, който иска да започне в тази сфера!"
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 8 */}
            <div className="slide">
              <div className="section-content">
                <h2>Бъдещето на видеото</h2>
                <div className="future-section">
                  <p className="section-subtitle">
                    Видеото е бъдещето на маркетинга и комуникацията. Научете се да
                    създавате професионални видеа днес и бъдете готови за утре.
                  </p>
                  <div className="benefits-list">
                    <p className="benefit-item">
                      • Видеото е най-ефективният начин за комуникация
                    </p>
                    <p className="benefit-item">
                      • Видеото е най-популярният формат в социалните мрежи
                    </p>
                    <p className="benefit-item">
                      • Видеото е най-добрият начин за показване на продукти и услуги
                    </p>
                    <p className="benefit-item">
                      • Видеото е най-добрият начин за обучение
                    </p>
                  </div>
                  <div className="limitations-list">
                    <p className="limitation-item">
                      • Не е нужно да имате скъпо оборудване
                    </p>
                    <p className="limitation-item">
                      • Не е нужно да имате предишен опит
                    </p>
                    <p className="limitation-item">
                      • Не е нужно да имате много време
                    </p>
                    <p className="limitation-item">
                      • Не е нужно да имате много пари
                    </p>
                  </div>
                  <p className="closing-text">
                    Запишете се в курса днес и започнете да създавате професионални
                    видеа, които ще ви помогнат да постигнете вашите цели!
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <button 
            className="slider-arrow prev" 
            aria-label="Previous slide"
            onClick={prevSlide}
          >
            ←
          </button>
          <button 
            className="slider-arrow next" 
            aria-label="Next slide"
            onClick={nextSlide}
          >
            →
          </button>
          
          <div className="slider-nav">
            {[...Array(totalSlides)].map((_, index) => (
              <button
                key={index}
                className={`slider-dot ${currentSlide === index ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CourseContent; 