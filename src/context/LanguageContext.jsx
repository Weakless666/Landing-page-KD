import React, { createContext, useContext, useState } from 'react';

const translations = {
  en: {
    // Navbar
    bookCall: 'BOOK A CALL',
    home: 'Home',
    community: 'Community',
    aboutUs: 'About Us',
    login: 'LOGIN',
    signup: 'SIGN UP',
    logout: 'Logout',
    toggleMenu: 'Toggle Menu',

    // Hero
    heroBackground: 'Hero background',
    joinBestCommunity: 'Join the best community',
    createInspiring: 'Create content that inspires',
    monetizeSkills: 'Learn how to monetize your skills and build an online presence',
    rediscoverWorld: 'Rediscover a new world and develop yourself!',
    learnMore: 'Learn More',

    // Video Section
    welcomeToCommunity: 'Welcome to our creators community!',
    youtubeVideoTitle: 'YouTube video player',
    signupNow: 'SIGN UP NOW',

    // Footer
    reelVisionDescription: 'Reel Vision is not just a platform. We created it as a system – for people who want to earn from their skills in the digital world.',
    ourMission: '🎯 Our Mission: To provide a clear path and real tools for:',
    createEngagingContent: 'Creating engaging content',
    turnSkillsIntoIncome: 'Turning skills into income',
    buildTrustedBrand: 'Building a trusted personal brand',
    noQuickSuccess: 'We don\'t promise success in 7 days.',
    promiseSupport: 'We promise you support, structure, and results if you invest actions and time.',
    connectWithMe: 'Connect with me through:',

    // Director Valve
    scene: 'SCENE',
    date: 'DATE',
    prodCo: 'PROD.CO.',
    director: 'DIRECTOR',
    take: 'TAKE',
    roll: 'ROLL',
    sound: 'SOUND',
    continueToSite: 'CONTINUE TO SITE',

    // Course Content
    specialForYou: 'Specially for you who believe you deserve more from life!',
    learnCreateContent: '🎬 Learn how to create content that not only looks good – but brings real results.',
    joinSystem: 'Join the Hook & Story system we use to build videos, personal brands, and sustainable income – no matter where you are or where you start.',
    creatorMindset: '✅ Think like a creator – not just someone behind a program.',
    workWithSoftware: '✅ Work with professional software, explained step by step.',
    buildBrand: '✅ Build a personal brand or work with real clients – don\'t just learn, act.',
    readyTemplates: '✅ Ready templates, processing resources, guidance, and path – without wandering alone.',
    joinActiveComm: '✅ Join a community of people who are already taking action.',

    // Course Content - Slide 1
    storyBehindReel: '🇺🇸 The Story Behind Reel Vision',
    personalJourney: 'I didn\'t study marketing. I had no connections. I was just a person with a camera, laptop, and lots of unanswered questions. But one question kept bothering me: "Can I live freely by doing what I love?"',
    resultOfEffort: '⚙️ failures and repetitions\n🧠 hundreds of hours of learning\n💬 and desire to help more people create their freedom.',
    noEasyPromise: 'I don\'t promise an easy path. But if you\'re ready to learn and act – I\'ll show you how your skill can work for you.',

    // Bonuses
    bonusTitle: 'Bonuses:',
    bonus1Title: '✅ Video Presets',
    bonus1Description: 'You\'ll create professional-looking videos in minutes.',
    bonus2Title: '✅ Discord Community',
    bonus2Description: 'Connection with like-minded people and 24/7 feedback from me.',
    bonus3Title: '✅ Exclusive Templates',
    bonus3Description: 'Optimize your process and save time.',
    bonus4Title: '✅ Motivating and Disciplined Environment',
    bonus5Title: '✅ Personal Development Channels',
    bonus6Title: '✅ Exclusive Workflows',
    bonus6Description: 'Learn proven workflows that will save you hours and help you work effectively.',
    bonus7Title: '✅ Mini-Mastermind Sessions',
    bonus7Description: 'Direct access to me for personalized advice and development strategies.',

    // Course Content - Slide 2
    whatWeDoTitle: 'What We Do Here (and Why It\'s Different)',
    painPoint1: 'We don\'t just show you how to make videos, but how to earn from the skill of creating content.',
    painPoint2: 'We work not only on technique, but on how to turn it into a product (service) that sells.',
    systemBenefits: 'You get a system with which you can:\n✅ find clients\n✅ create a portfolio\n✅ offer services\n🎯 AND EARN FROM YOUR SKILLS!',

    // Course Content - Slide 3
    whatYouLearnTitle: 'What Will You Learn in This Community?',
    modulesIntro: 'The community is divided into several modules, each focused on different aspects of video creation.',
    module1Title: 'Module 1: Introduction and Preparation',
    module1Goal: '🎯 Goal: To prepare the participant technically and mentally, without overwhelming them.',
    module1Features: 'Introduction to Digital Editing, Digital Editor Profession!, What you need to start!, Basic principles and thinking as a content creator, How to quickly orient yourself in the process and start even without experience',
    
    module2Title: 'Module 2: Content Creation',
    module2Goal: '🎯 Goal: To learn how to create videos with clear structure, editing, and message.',
    module2Features: 'How video sells: psychology and structure, Hook & Story: formula for engaging content, Basics of effective editing, Colors, sound and exporting, Templates and demo processing (LIVE example)',
    
    module3Title: 'Module 3: Brand and Positioning',
    module3Goal: '🎯 Goal: To build a personal brand that stands out and attracts clients.',
    module3Features: 'What is personal brand, How to position yourself and your services, How to build an offer that sells, Pricing and client communication, Social media presentation strategy',
    
    module4Title: 'Module 4: Finding Clients',
    module4Goal: '🎯 Goal: To start selling your skills and work with real clients.',
    module4Features: 'How to sell value, not service, How to think like a client and solve real problems, How to communicate offers and gain trust, What is Loom video and how to use it, Upsell strategy and long-term work with clients',
    
    module5Title: 'Module 5: Brand and Positioning',
    module5Goal: '🎯 Goal: To know where and how to find the right clients for your services.',
    module5Features: 'Where to find potential clients, How to approach organically and with confidence, Building a portfolio that speaks for you, Presenting yourself and your work online, Steps for first conversation and building trust',

    // Course Content - Slide 4
    beforeYouDecideTitle: '🧭 Before You Decide If This Is For You',
    commonQuestionsTitle: 'Most people who get here wonder about one of these things:',
    myth1: '"What if I don\'t have a camera, equipment, or expensive laptop?"',
    truth1: '👉 You don\'t need expensive equipment. Start with what you have – and upgrade over time. What matters is knowing how to use the idea, not what camera you hold.',
    myth2: '"I\'ve never edited before. Will I be able to?"',
    truth2: '👉 It\'s created for people with no experience. We\'ll work with clear steps, real examples, and an approach that doesn\'t throw you in the deep end. You\'ll get into rhythm much faster than you expect.',
    myth3: '"I don\'t have time."',
    truth3: '👉 You don\'t need to spend all day in front of the screen. You have access to systems and templates that save you time. Work with focus, not hours.',
    myth4: '"What if it doesn\'t work?"',
    truth4: '👉 The only way something works is by testing it. This isn\'t for people who wait for motivation. It\'s for people who want a skill that opens opportunities – and are ready to start.',
    myth5: '📌 This isn\'t for everyone.',
    truth5: '👉 The only way something works is by testing it. But if you\'re among the few who want to learn to earn with skills, not clichés – you\'ll feel right at home.',

    // Course Content - Slide 5
    resourcesTitle: '🎁 Resources You Get',
    mainResourceTitle: 'Hook & Story Formula',
    mainResourceDescription: 'Ready scripts and formulas for creating video content that engages and sells.',
    resource1Emoji: '📊',
    resource1Title: 'Professional Offer',
    resource1Description: 'Ready templates for offers that show value and attract clients.',
    resource2Emoji: '🎨',
    resource2Title: 'Portfolio Templates',
    resource2Description: 'Professional templates for presenting your work.',
    resource3Emoji: '💬',
    resource3Title: 'Communication Scripts',
    resource3Description: 'Ready templates for client communication and presentations.',
    resource4Emoji: '🎥',
    resource4Title: 'Video Presentations',
    resource4Description: 'Structure and scripts for creating video presentations.',
    resource5Emoji: '📈',
    resource5Title: '7-Day Plan',
    resource5Description: 'Structured plan for quick start and first results.',

    // Special Offer
    specialOfferTitle: '🚀 Special Offer',
    originalPrice: 'Standard price: $997',
    specialPrice: 'Now only: $497',
    guarantee: '✅ 30-day guarantee',
    guaranteeText: 'If you\'re not satisfied, we\'ll refund your money',
    offerFeature1: '✨ Access to all resources',
    offerFeature2: '🤝 Community inclusion',
    offerFeature3: '📱 24/7 support',
    startNow: 'START NOW',

    // Course Content - Slide 6
    testimonialsTitle: 'Client Testimonials',
    testimonial1Name: 'John Doe',
    testimonial1Date: '2024-03-15',
    testimonial1PurchaseTime: 'Bought course: 2 months ago',
    testimonial1Text: '"This course changed my life! I learned to create professional videos and find clients. Now I earn over $2000 per month!"',
    testimonial2Name: 'Alice Smith',
    testimonial2Date: '2024-03-10',
    testimonial2PurchaseTime: 'Bought course: 1 month ago',
    testimonial2Text: '"Thanks to this course, I was able to start my own video creation business. I recommend it to anyone who wants to start in this field!"',

    // Course Content - Slide 7
    futureTitle: 'The future isn\'t video – the future is who uses it well.',
    futureSubtitle: 'If you\'re not using video in your communication – you\'re falling behind. Today, attention is the most valuable resource, and video is the most direct way to win it.',
    benefitsList: '• It explains what you do – in seconds, • It builds trust – even before you\'ve met, • It sells – even when you sleep, • You don\'t need an office. You don\'t need a big team',
    limitationsList: '• You need skill + system, • Who does it work for?, • For freelancers who want clients, • For creators who want to be noticed, • For businesses who want more sales',
    closingText: '📌 Video isn\'t a "trend". It\'s the infrastructure of modern marketing. Whether you\'ll use it – is a matter of choice. But every day you don\'t do it – you pay with time, money, and missed opportunities.',

    // About Us Section
    aboutUsTitle: 'About Us',
    aboutUsDescription: 'Reel Vision is not just a platform. We created it as a system – for people who want to earn from their skills in the digital world.',
    ourMissionTitle: '🎯 Our Mission: To provide a clear path and real tools for:',
    contentCreation: 'Creating content that attracts',
    skillsToIncome: 'Turning skills into income',
    buildPersonalBrand: 'Building a personal brand with trust',
    noSevenDayPromise: 'We don\'t promise success in 7 days.',
    supportPromise: 'We promise you support, structure and results if you invest actions and time.',
    connectWith: 'Connect with me through:',
    signUpNowButton: 'SIGN UP NOW',
    bookCallButton: 'BOOK A CALL',
  },
  bg: {
    // Navbar
    bookCall: 'ЗАПАЗИ СИ РАЗГОВОР',
    home: 'Начало',
    community: 'Общество',
    aboutUs: 'За нас',
    login: 'ВЛЕЗ',
    signup: 'РЕГИСТРИРАЙ СЕ',
    logout: 'Излез',
    toggleMenu: 'Отвори меню',

    // Hero
    heroBackground: 'Фоново изображение',
    joinBestCommunity: 'Влез в най-доброто общество',
    createInspiring: 'Създавай съдържание, което вдъхновява',
    monetizeSkills: 'Научи как да монетизираш уменията си и да изградиш присъствие онлайн',
    rediscoverWorld: 'Преоткрий един нов свят и развий себе си!',
    learnMore: 'Научете повече',

    // Video Section
    welcomeToCommunity: 'Заповядай в нашето общество за създатели!',
    youtubeVideoTitle: 'YouTube видео плейър',
    signupNow: 'ЗАПИШИ СЕ СЕГА',

    // Footer
    reelVisionDescription: 'Reel Vision не е просто платформа. Създадохме я като система – за хора, които искат да печелят от уменията си в дигиталния свят.',
    ourMission: '🎯 Нашата мисия: Да дадем ясен път и реални инструменти за:',
    createEngagingContent: 'Създаване на съдържание, което привлича',
    turnSkillsIntoIncome: 'Превръщане на умения в доход',
    buildTrustedBrand: 'Изграждане на личен бранд с доверие',
    noQuickSuccess: 'Не обещаваме успех за 7 дни.',
    promiseSupport: 'Обещаваме ти подкрепа, структура и резултати, ако вложиш действия и време.',
    connectWithMe: 'Свържете се с мен чрез:',

    // Director Valve
    scene: 'СЦЕНА',
    date: 'ДАТА',
    prodCo: 'ПРОД.КО.',
    director: 'РЕЖИСЬОР',
    take: 'ДУБЪЛ',
    roll: 'РОЛКА',
    sound: 'ЗВУК',
    continueToSite: 'НАПРЕД КЪМ САЙТА',

    // Course Content
    specialForYou: 'Специално за теб, който вярваш, че заслужаваш нещо повече от живота!',
    learnCreateContent: '🎬 Научи как да създаваш съдържание, което не просто изглежда добре – а носи реални резултати.',
    joinSystem: 'Влез в системата Hook & Story, която използваме, за да изграждаме видеа, лични брандове и устойчив доход – независимо къде се намираш и откъде започваш.',
    creatorMindset: '✅ Мислене като създател – не просто като човек зад програма.',
    workWithSoftware: '✅ Работа с професионални софтуери, обяснени стъпка по стъпка.',
    buildBrand: '✅ Изграждаш личен бранд или работиш с реални клиенти – не просто учиш, а действаш.',
    readyTemplates: '✅ Готови темплейти, ресурси за обработка, насоки и път – без да се луташ сам.',
    joinActiveComm: '✅ Влизаш в общност от хора, които вече действат.',

    // Course Content - Slide 1
    storyBehindReel: '🇺🇸 Историята зад Reel Vision',
    personalJourney: 'Не съм учил маркетинг. Нямах връзки. Бях просто човек с камера, лаптоп и куп въпроси без отговор. Но един въпрос не ми излизаше от ума: "Мога ли да живея свободно, като правя това, което обичам?"',
    resultOfEffort: '⚙️ провали и повторения\n🧠 стотици часове учене\n💬 и желание да помогна на още хора да създадат своята свобода.',
    noEasyPromise: 'Не ти обещавам лесен път. Но ако си готов да учиш и действаш – ще ти покажа как умението ти може да работи за теб.',

    // Bonuses
    bonusTitle: 'Бонуси:',
    bonus1Title: '✅ Присети за видеа',
    bonus1Description: 'Ще създаваш професионално изглеждащи видеа за минути.',
    bonus2Title: '✅ Дискорд общност',
    bonus2Description: 'Връзка с хора със сходно мислене и 24/7 обратна връзка от мен.',
    bonus3Title: '✅ Ексклузивни шаблони',
    bonus3Description: 'Оптимизирай процеса си и спестявай време.',
    bonus4Title: '✅ Мотивираща и дисциплинирана среда',
    bonus5Title: '✅ Канали за личностно развитие',
    bonus6Title: '✅ Ексклузивни Workflows',
    bonus6Description: 'Научи доказани работни потоци, които ще ти спестят часове и ще ти помогнат да работиш ефективно.',
    bonus7Title: '✅ Мини-Mastermind Сесии',
    bonus7Description: 'Директен достъп до мен за персонализирани съвети и стратегии за развитие.',

    // Course Content - Slide 2
    whatWeDoTitle: 'Какво правим тук (и защо е различно)',
    painPoint1: 'Не просто ти показваме как се прави видео, а как се печели от умението да създаваш съдържание.',
    painPoint2: 'Работим не само върху техниката, а върху това как да я превърнеш в продукт(услуга), която се продава.',
    systemBenefits: 'Получаваш система, с която можеш да:\n✅ намираш клиенти\n✅ създаваш портфолио\n✅ предлагаш услуги\n🎯 И ПЕЧЕЛИШ ОТ УМЕНИЯТА СИ!',

    // Course Content - Slide 3
    whatYouLearnTitle: 'Какво ще научите в това общество?',
    modulesIntro: 'Обществото е разделено на няколко модула, всеки от които е фокусиран върху различни аспекти на създаването на видеа.',
    module1Title: 'Модул 1: Въведение и подготовка',
    module1Goal: '🎯 Цел: Да подготви участника технически и ментално, без да го претоварва.',
    module1Features: 'Въведение в Дигиталното Монтиране, Професия Дигитален Монтажист!, Какво ти трябва, за да започнеш!, Основни принципи и мислене като създател на съдържание, Как да се ориентираш бързо в процеса и да започнеш дори без опит',
    
    module2Title: 'Модул 2: Създаване на съдържание',
    module2Goal: '🎯 Цел: Да научиш как да създаваш видеа с ясна структура, монтаж и послание.',
    module2Features: 'Как видеото продава: психология и структура, Hook & Story: формула за ангажиращо съдържание, Основи на ефективния монтаж, Цветове, звук и експортиране, Шаблони и демо обработка (LIVE пример)',
    
    module3Title: 'Модул 3: Бранд и позициониране',
    module3Goal: '🎯 Цел: Да изградиш личен бранд, който се откроява и привлича клиенти.',
    module3Features: 'Какво представлява личният бранд, Как да позиционираш себе си и услугите си, Как се изгражда оферта, която продава, Ценообразуване и комуникация с клиента, Стратегия за представяне в социалните мрежи',
    
    module4Title: 'Модул 4: Намиране на клиенти',
    module4Goal: '🎯 Цел: Да започнеш да продаваш своите умения и да работиш с реални клиенти.',
    module4Features: 'Как се продава стойност, а не услуга, Как да мислиш като клиент и да решаваш реални проблем, Как се комуникира оферта и се печели доверие, Какво представлява Loom видео и как се използва, Upsell стратегия и дългосрочна работа с клиенти',
    
    module5Title: 'Модул 5: Бранд и позициониране',
    module5Goal: '🎯 Цел: Да знаеш къде и как да намериш правилните клиенти за своите услуги.',
    module5Features: 'Къде се намират потенциалните клиенти, Как да подхождаш органично и с увереност, Изграждане на портфолио, което говори вместо теб, Представяне на себе си и работата ти онлайн, Стъпки за първи разговор и изграждане на доверие',

    // Course Content - Slide 4
    beforeYouDecideTitle: '🧭 Преди да решиш дали това е за теб',
    commonQuestionsTitle: 'Най-често хората, които стигат до тук, се чудят едно от следните неща:',
    myth1: '"Ами ако нямам камера, техника или скъп лаптоп?"',
    truth1: '👉 Нямаш нужда от скъпо оборудване. Започваш с това, което имаш – и надграждаш с времето. Важното е да знаеш как да използваш идеята, не каква камера държиш.',
    myth2: '"Не съм монтирал никога. Ще мога ли?"',
    truth2: '👉 Създадено е за хора, които нямат опит. Ще работим с ясни стъпки, реални примери и подход, който не те хвърля в дълбокото. Ще влезеш в ритъм много по-бързо, отколкото очакваш.',
    myth3: '"Нямам време."',
    truth3: '👉 Не е нужно да прекарваш цял ден пред екрана. Имаш достъп до системи и шаблони, които ти спестяват време. Работиш с фокус, не с часове.',
    myth4: '"Ами ако не стане?"',
    truth4: '👉 Единственият начин нещо да стане, е да го тестваш. Това тук не е за хора, които чакат мотивация. А за хора, които искат умение, което им отваря възможности – и са готови да започнат.',
    myth5: '📌 Това не е за всеки.',
    truth5: '👉 Единственият начин нещо да стане, е да го тестваш. Но ако си от малцината, които искат да се научат да печелят с умения, а не с клишета – ще се чувстваш точно на мястото си.',

    // Course Content - Slide 5
    resourcesTitle: '🎁 Ресурси които получаваш',
    mainResourceTitle: 'Hook & Story Формула',
    mainResourceDescription: 'Готови скриптове и формули за създаване на видео съдържание, което ангажира и продава.',
    resource1Emoji: '📊',
    resource1Title: 'Професионална Оферта',
    resource1Description: 'Готови шаблони за оферти, които показват стойност и привличат клиенти.',
    resource2Emoji: '🎨',
    resource2Title: 'Портфолио Шаблони',
    resource2Description: 'Професионални шаблони за представяне на твоята работа.',
    resource3Emoji: '💬',
    resource3Title: 'Комуникационни Скриптове',
    resource3Description: 'Готови шаблони за комуникация с клиенти и презентации.',
    resource4Emoji: '🎥',
    resource4Title: 'Видео Презентации',
    resource4Description: 'Структура и скриптове за създаване на видео презентации.',
    resource5Emoji: '📈',
    resource5Title: '7-Дневен План',
    resource5Description: 'Структуриран план за бърз старт и първи резултати.',

    // Special Offer
    specialOfferTitle: '🚀 Специална Оферта',
    originalPrice: 'Стандартна цена: 997 лв.',
    specialPrice: 'Сега само: 497 лв.',
    guarantee: '✅ 30-дневна гаранция',
    guaranteeText: 'Ако не си доволен, връщаме парите',
    offerFeature1: '✨ Достъп до всички ресурси',
    offerFeature2: '🤝 Включване в общността',
    offerFeature3: '📱 24/7 поддръжка',
    startNow: 'ЗАПОЧНИ СЕГА',

    // Course Content - Slide 6
    testimonialsTitle: 'Отзиви от клиенти',
    testimonial1Name: 'John Doe',
    testimonial1Date: '2024-03-15',
    testimonial1PurchaseTime: 'Купи курс: Преди 2 месеца',
    testimonial1Text: '"Този курс промени живота ми! Научих се да създавам професионални видеа и да намирам клиенти. Сега печеля над 2000 лв. на месец!"',
    testimonial2Name: 'Alice Smith',
    testimonial2Date: '2024-03-10',
    testimonial2PurchaseTime: 'Купи курс: Преди 1 месец',
    testimonial2Text: '"Благодаря на този курс, успях да започна свой собствен бизнес в създаването на видеа. Препоръчвам го на всеки, който иска да започне в тази сфера!"',

    // Course Content - Slide 7
    futureTitle: 'Бъдещето не е видео – бъдещето е този, който го използва добре.',
    futureSubtitle: 'Ако не използваш видео в комуникацията си – изоставаш. Днес вниманието е най-ценният ресурс, а видеото е най-директният начин да го спечелиш.',
    benefitsList: '• То обяснява какво правиш – за секунди, • То изгражда доверие – още преди да сте се срещнали, • То продава – дори когато спиш, • Не ти трябва офис. Не ти трябва голям екип',
    limitationsList: '• Трябва ти умение + система, • За кого работи?, • За фрийлансъри, които искат клиенти, • За създатели, които искат да бъдат забелязани, • За бизнеси, които искат повече продажби',
    closingText: '📌 Видео не е "тенденция". То е инфраструктурата на модерния маркетинг. Дали ще го използваш – е въпрос на избор. Но всеки ден, в който не го правиш – плащаш с време, пари и пропуснати възможности.',

    // About Us Section
    aboutUsTitle: 'За Нас',
    aboutUsDescription: 'Reel Vision не е просто платформа. Създадохме я като система – за хора, които искат да печелят от уменията си в дигиталния свят.',
    ourMissionTitle: '🎯 Нашата мисия: Да дадем ясен път и реални инструменти за:',
    contentCreation: 'Създаване на съдържание, което привлича',
    skillsToIncome: 'Превръщане на умения в доход',
    buildPersonalBrand: 'Изграждане на личен бранд с доверие',
    noSevenDayPromise: 'Не обещаваме успех за 7 дни.',
    supportPromise: 'Обещаваме ти подкрепа, структура и резултати, ако вложиш действия и време.',
    connectWith: 'Свържете се с мен чрез:',
    signUpNowButton: 'ЗАПИШИ СЕ СЕГА',
    bookCallButton: 'ЗАПАЗИ СИ РАЗГОВОР',
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const t = (key) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext; 