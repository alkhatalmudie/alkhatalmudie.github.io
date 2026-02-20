// assets/js/lang-engine.js

const dictionary = {
    en: {
        // --- HEADER & MENU ---
        "nav_home": "Home",
        "nav_about": "About Us",
        "nav_services": "Services",
        "nav_quote": "Get Quote",
        "nav_contact": "Contact",
        "menu_member_area": "MEMBER AREA",
        "menu_login": "Log In",
        "menu_signup": "Sign Up",
        "menu_logout": "Logout",
        "menu_region": "REGION SELECT",
        
        // --- HERO SECTION (Example) ---
        "hero_title": "Bridging Languages,<br>Connecting Worlds",
        "hero_desc": "Amman's most trusted certified translation service.",
        "hero_btn": "Get a Free Quote"
    },
    ar: {
        // --- HEADER & MENU ---
        "nav_home": "الرئيسية",
        "nav_about": "من نحن",
        "nav_services": "خدماتنا",
        "nav_quote": "احصل على تسعيرة",
        "nav_contact": "اتصل بنا",
        "menu_member_area": "منطقة الأعضاء",
        "menu_login": "تسجيل الدخول",
        "menu_signup": "حساب جديد",
        "menu_logout": "تسجيل الخروج",
        "menu_region": "اختر المنطقة",
        
        // --- HERO SECTION (Example) ---
        "hero_title": "نربط اللغات،<br>ونقرب العوالم",
        "hero_desc": "خدمة الترجمة المعتمدة الأكثر ثقة في عمّان.",
        "hero_btn": "احصل على تسعيرة مجانية"
    },
    ru: {
        // --- HEADER & MENU ---
        "nav_home": "Главная",
        "nav_about": "О нас",
        "nav_services": "Услуги",
        "nav_quote": "Получить квоту",
        "nav_contact": "Контакты",
        "menu_member_area": "ЛИЧНЫЙ КАБИНЕТ",
        "menu_login": "Войти",
        "menu_signup": "Регистрация",
        "menu_logout": "Выйти",
        "menu_region": "ВЫБОР РЕГИОНА",
        
        // --- HERO SECTION (Example) ---
        "hero_title": "Соединяем языки,<br>Сближаем миры",
        "hero_desc": "Самое надежное бюро сертифицированных переводов в Аммане.",
        "hero_btn": "Получить бесплатный расчет"
    }
};

// 1. THE CORE SWITCHER FUNCTION
window.switchLanguage = function(langCode) {
    // Save to browser memory
    localStorage.setItem('site-lang', langCode);
    
    // Set HTML attributes for SEO and formatting
    document.documentElement.lang = langCode;
    document.documentElement.dir = langCode === 'ar' ? 'rtl' : 'ltr';
    
    // Find every element with a 'data-i18n' tag and swap the text
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dictionary[langCode] && dictionary[langCode][key]) {
            // Using innerHTML so we can keep <br> tags and formatting
            el.innerHTML = dictionary[langCode][key];
        }
    });

    // Optional: Add a class to body for specific CSS tweaks (like font-family changes)
    document.body.className = document.body.className.replace(/\blang-\S+/g, '');
    document.body.classList.add('lang-' + langCode);
};

// 2. AUTO-LOAD SAVED PREFERENCE
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('site-lang') || 'en';
    switchLanguage(savedLang);
});