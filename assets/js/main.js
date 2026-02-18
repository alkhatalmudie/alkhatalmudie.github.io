document.addEventListener('DOMContentLoaded', () => {
    
    // 1. INITIAL SETUP
    const defaultLang = localStorage.getItem('site-lang') || 'en';
    setLanguage(defaultLang);

    // 2. MENU TOGGLE LOGIC
    const menuToggle = document.getElementById('menuToggle');
    const sideMenu = document.getElementById('side-menu');
    const closeMenu = document.getElementById('closeMenu');
    const dropdownTrigger = document.querySelector('.dropdown-trigger > a');

    if(menuToggle) {
        menuToggle.addEventListener('click', (e) => { e.preventDefault(); sideMenu.classList.add('active'); });
        closeMenu.addEventListener('click', () => { sideMenu.classList.remove('active'); });
        
        document.addEventListener('click', (e) => {
            if (!sideMenu.contains(e.target) && !menuToggle.contains(e.target)) {
                sideMenu.classList.remove('active');
            }
        });

        if(dropdownTrigger) {
            dropdownTrigger.addEventListener('click', function(e) {
                e.preventDefault();
                this.parentElement.classList.toggle('open');
            });
        }
    }

    // 3. LANGUAGE SWITCHER (The Flag Orbs)
    const langLinks = document.querySelectorAll('.lang-orb');
    
    langLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const title = link.getAttribute('title');
            
            // MAP FLAGS TO CODES
            let code = 'en';
            if (title === 'Arabic') code = 'ar';
            if (title === 'Russian') code = 'ru';
            if (title === 'Dutch') code = 'du';

            setLanguage(code);
            sideMenu.classList.remove('active');
        });
    });
});

/* ==========================================================================
   THE MASTER DICTIONARY
   ========================================================================== */
const translations = {
    // === ENGLISH ===
    "en": {
        "header": { "brand_sub": "TRANSLATION SERVICES", "menu_btn": "MENU" },
        "menu": {
            "label_nav": "NAVIGATION", "label_member": "MEMBER AREA", "label_region": "REGION SELECT",
            "home": "Home", "pages": "Pages", "about": "About Us", "services": "Services",
            "translation": "Translation Info", "packages": "Packages & Pricing", "shop": "Shop / Products",
            "reservation": "Book Reservation", "contacts.html": "Contact Us", "login": "Log In", "signup": "Sign Up"
        },
        "hero": {
            "slide1_title": "Bridging Languages,<br>Connecting Worlds",
            "slide1_desc": "Amman's most trusted certified translation service. Accuracy you can rely on.",
            "slide1_btn": "Get a Free Quote",
            "slide2_title": "Official & Legal<br>Documentation",
            "slide2_desc": "Certified by the Ministry of Justice. We handle your contracts, visas, and certificates with speed.",
            "slide2_btn": "Our Services",
            "slide3_title": "The Luminous Line<br>of Communication",
            "slide3_desc": "Expert linguists located in the heart of Marka Al-Shamaliya.",
            "slide3_btn": "Visit Our Office"
        },
        "about": {
            "title": "Who We Are", "arabic_name": "الخط المضيء للترجمة",
            "p1": "At <strong>Al-Khat Al-Mudi</strong> (The Luminous Line), we believe that translation is more than just swapping words; it’s about preserving meaning, tone, and intent. Located in Marka Al-Shamaliya, we serve individuals and businesses with certified translation services accepted by all government bodies and embassies in Jordan.",
            "p2": "Whether you are a student applying abroad, a business expanding internationally, or dealing with complex legal documents, our team ensures your message remains clear and professional.",
            "badge_certified": "Certified", "badge_confidential": "Confidential", "badge_fast": "Fast"
        },
        "services": {
            "section_title": "Our Services", "section_desc": "Comprehensive language solutions tailored to your specific needs.",
            "s1_title": "Legal Translation", "s1_desc": "Certified translation for contracts, court documents, and powers of attorney.",
            "s2_title": "Immigration & Visas", "s2_desc": "Accurate translation of birth certificates, marriage licenses, and passports.",
            "s3_title": "Academic Translation", "s3_desc": "Translation of university transcripts, diplomas, and research papers.",
            "s4_title": "Website Localization", "s4_desc": "Adapt your digital content for new markets.",
            "s5_title": "Medical Translation", "s5_desc": "Precise translation of medical reports and prescriptions.",
            "s6_title": "Proofreading", "s6_desc": "Polishing your existing documents to ensure grammatical perfection."
        },
        "reservation": {
            "title": "Get Your Quote", "subtitle": "Ready to Translate?",
            "desc": "Upload your documents securely and get a fast, certified quote.",
            "step1_title": "Upload File", "step1_desc": "Select your document",
            "step2_title": "Select Details", "step2_desc": "Choose languages and urgency",
            "step3_title": "Receive Quote", "step3_desc": "We send you the price instantly",
            "form_header": "Quick Request",
            "ph_name": "Full Name", "ph_email": "Email Address", "ph_phone": "Phone Number",
            "ph_from": "Translate From...", "ph_to": "Translate To...", "ph_link": "Paste Document Link (Drive, Dropbox...)",
            "btn_submit": "Send Request"
        },
        "stats": {
            "languages": "Languages Supported", "acceptance": "Acceptance Rate",
            "clients": "Happy Clients", "delivery": "Express Delivery"
        },
        "footer": {
            "about_text": "Your partner in overcoming language barriers.",
            "col_links": "Quick Links", "col_legal": "Legal", "col_contact": "Contact Us",
            "privacy": "Privacy Policy", "terms": "Terms of Service",
            "copyright": "© 2026 Al-Khat Al-Mudi Translation. All rights reserved."
        },
        "overlay": {
            "title": "AL-KHAT SECURE GATEWAY v4.0",
            "status": "PROCESSING...",
            "log1": "> Establishing secure link (TLS 1.3)...",
            "log2": "> Handshaking with Al-Khat Mainframe...",
            "log3": "> Encrypting data packets...",
            "log4": "> Verifying document integrity...",
            "log5": "> Uploading to secure cloud storage...",
            "log6": "> Generating quote reference ID...",
            "log7": "> Transaction confirmed.",
            "success_msg": "Request Received Successfully! We will contact you shortly."
        },
        "about_page": {
            "hero_title": "Our Journey",
            "hero_desc": "From Marka Al-Shamaliya to the World. The story of precision.",
            "mission_title": "Our Mission",
            "mission_desc": "To eliminate language barriers for businesses and individuals with 100% legal accuracy.",
            "vision_title": "Our Vision",
            "vision_desc": "To be the #1 reference for certified translation in the Middle East.",
            "values_title": "Core Values",
            "value1": "Integrity",
            "value2": "Speed",
            "value3": "Confidentiality"
        },
        "timeline": {
            "title": "Our History",
            "year1": "2026", "title1": "The Foundation", "desc1": "Al-Khat Al-Mudi was established in Marka Al-Shamaliya with a single mission: Precision.",
            "year2": "2027", "title2": "Official Certification", "desc2": "Recognized by the Ministry of Justice and all major embassies in Jordan.",
            "year3": "2028", "title3": "Digital Expansion", "desc3": "Launched our AI-assisted translation portal and website localization services.",
            "year4": "2029", "title4": "Going Global", "desc4": "Serving 500+ corporate clients across Europe and the Middle East."
        },
        "map": {
            "title": "Global Reach",
            "desc": "Headquartered in Amman, connecting the world."
        },
        "merch": {
            "title": "Corporate Identity",
            "desc": "Professional tools for a professional lifestyle. Browse our official merchandise.",
            "item1": "Official Flag",
            "item2": "2030 Calendar",
            "item3": "Brand Mug",
            "item4": "Sample Book",
            "btn_shop": "See All Products"
        },
        // --- NEW PAGES ---
        "res": {
            "map_title": "Select Your Region",
            "map_desc": "Click on the nearest office to handle your documents.",
            "step2_title": "Step 2: Document Details",
            "label_from": "Translate From",
            "label_to": "Translate To",
            "label_doc": "Document Type",
            "label_pages": "Page Count",
            "label_urgency": "Service Level",
            "sum_title": "Order Summary",
            "sum_loc": "Selected Office:",
            "sum_doc": "Document:",
            "sum_pages": "Pages:",
            "sum_fees": "Fees:",
            "sum_total": "Estimated Total",
            "btn_checkout": "Proceed to Checkout"
        },
        "chk": {
            "nav_secure": "256-Bit SSL Encrypted",
            "bill_title": "Billing Information",
            "label_fname": "First Name",
            "label_lname": "Last Name",
            "label_email": "Email Address (For Invoice)",
            "pay_title": "Payment Method",
            "label_card": "Card Number",
            "label_exp": "Expiry Date",
            "label_cvc": "CVC / CVV",
            "label_cname": "Cardholder Name",
            "btn_pay": "Pay",
            "sum_title": "Order Summary",
            "sum_loc": "Service Location",
            "sum_doc": "Document Type",
            "sum_lang": "Languages",
            "sum_pages": "Pages",
            "sum_urgency": "Urgency",
            "sum_total": "Total",
            "secure_msg": "Payments are processed via Stripe/PayPal Secure Gateway.",
            "modal_title": "Processing Payment...",
            "modal_desc": "Do not close this window."
        },
        "inv": {
            "brand_sub": "TRANSLATION SERVICES",
            "title": "INVOICE",
            "label_bill": "Billed To:",
            "label_date": "Date Issued:",
            "label_txn": "Transaction ID:",
            "th_desc": "Description",
            "th_type": "Type",
            "th_pages": "Pages",
            "th_amt": "Amount",
            "label_total": "Grand Total",
            "label_qr": "Verification QR",
            "stamp": "PAID",
            "footer_msg": "Thank you for your business.",
            "btn_print": "Print Invoice",
            "btn_home": "Home"
        },
		// ... (Inside "en" object) ...
        "contact_page": {
            "hero_title": "Get in Touch",
            "hero_desc": "We are here to answer your questions and discuss your projects.",
            "info_title": "Contact Info",
            "label_address": "Address",
            "text_address": "Marka Al-Shamaliya<br>Amman, Jordan",
            "label_phone": "Phone",
            "label_email": "Email",
            "form_title": "Send Message",
            "ph_name": "Your Name",
            "ph_email": "Email Address",
            "ph_subject": "Subject",
            "ph_msg": "How can we help you?",
            "btn_send": "Send Message"
        }
    },

    // === ARABIC ===
    "ar": {
        "header": { "brand_sub": "لخدمات الترجمة", "menu_btn": "القائمة" },
        "menu": {
            "label_nav": "التنقل", "label_member": "منطقة الأعضاء", "label_region": "اختر المنطقة",
            "home": "الرئيسية", "pages": "الصفحات", "about": "من نحن", "services": "خدماتنا",
            "translation": "معلومات الترجمة", "packages": "الباقات والأسعار", "shop": "المتجر",
            "reservation": "حجز موعد", "contacts.html": "اتصل بنا", "login": "دخول", "signup": "تسجيل"
        },
        "hero": {
            "slide1_title": "جسر اللغات،<br>وصل الحضارات",
            "slide1_desc": "خدمة الترجمة المعتمدة الأكثر موثوقية في عمان. دقة يمكنك الاعتماد عليها.",
            "slide1_btn": "اطلب عرض سعر مجاني",
            "slide2_title": "وثائق رسمية<br>وقانونية",
            "slide2_desc": "معتمدون لدى وزارة العدل. نعالج عقودك، تأشيراتك، وشهاداتك بسرعة واحترافية.",
            "slide2_btn": "تصفح خدماتنا",
            "slide3_title": "الخط المضيء<br>للتواصل الفعال",
            "slide3_desc": "نخبة من اللغويين الخبراء في قلب ماركا الشمالية.",
            "slide3_btn": "تفضل بزيارتنا"
        },
        "about": {
            "title": "من نحن", "arabic_name": "Al-Khat Al-Mudi Translation",
            "p1": "في <strong>الخط المضيء</strong>، نؤمن أن الترجمة ليست مجرد استبدال كلمات؛ بل هي نقل للمعنى. نخدم الأفراد والشركات بخدمات ترجمة معتمدة ومقبولة لدى جميع الجهات الحكومية والسفارات في الأردن.",
            "p2": "سواء كنت طالبًا تتقدم للدراسة في الخارج، أو شركة تتوسع دوليًا، يضمن فريقنا أن تظل رسالتك واضحة ومهنية.",
            "badge_certified": "معتمد", "badge_confidential": "سري", "badge_fast": "سريع"
        },
        "services": {
            "section_title": "خدماتنا", "section_desc": "حلول لغوية شاملة مصممة خصيصًا لتلبية احتياجاتك.",
            "s1_title": "الترجمة القانونية", "s1_desc": "ترجمة معتمدة للعقود، وثائق المحاكم، والوكالات.",
            "s2_title": "الهجرة والتأشيرات", "s2_desc": "ترجمة دقيقة لشهادات الميلاد، عقود الزواج، وجوازات السفر.",
            "s3_title": "الترجمة الأكاديمية", "s3_desc": "ترجمة كشوف العلامات الجامعية، الشهادات، والأوراق البحثية.",
            "s4_title": "تعريب المواقع", "s4_desc": "قم بتكييف محتواك الرقمي لأسواق جديدة.",
            "s5_title": "الترجمة الطبية", "s5_desc": "ترجمة دقيقة للتقارير الطبية والوصفات.",
            "s6_title": "التدقيق اللغوي", "s6_desc": "تنقيح وثائقي الحالية لضمان الكمال النحوي."
        },
        "reservation": {
            "title": "احصل على عرض سعر", "subtitle": "جاهز للبدء؟",
            "desc": "ارفع وثائقك بأمان واحصل على عرض سعر سريع.",
            "step1_title": "ارفع الملف", "step1_desc": "اختر وثيقتك",
            "step2_title": "حدد التفاصيل", "step2_desc": "اختر اللغات ومستوى الاستعجال",
            "step3_title": "استلم العرض", "step3_desc": "نرسل لك السعر والوقت فوراً",
            "form_header": "طلب سريع",
            "ph_name": "الاسم الكامل", "ph_email": "البريد الإلكتروني", "ph_phone": "رقم الهاتف",
            "ph_from": "ترجمة من...", "ph_to": "ترجمة إلى...", "ph_link": "رابط الملف (Drive, Dropbox...)",
            "btn_submit": "إرسال الطلب"
        },
        "stats": {
            "languages": "لغة مدعومة", "acceptance": "نسبة القبول",
            "clients": "عميل سعيد", "delivery": "تسليم فوري"
        },
        "footer": {
            "about_text": "شريكك في تجاوز الحواجز اللغوية.",
            "col_links": "روابط سريعة", "col_legal": "قانوني", "col_contact": "اتصل بنا",
            "privacy": "سياسة الخصوصية", "terms": "شروط الخدمة",
            "copyright": "© 2026 الخط المضيء للترجمة. جميع الحقوق محفوظة."
        },
        "overlay": {
            "title": "بوابة الخط المضيء الآمنة v4.0",
            "status": "جاري المعالجة...",
            "log1": "> جاري إنشاء اتصال آمن (TLS 1.3)...",
            "log2": "> المصافحة الرقمية مع الخادم الرئيسي...",
            "log3": "> تشفير حزم البيانات...",
            "log4": "> التحقق من سلامة الوثائق...",
            "log5": "> الرفع إلى التخزين السحابي الآمن...",
            "log6": "> توليد الرقم المرجعي للطلب...",
            "log7": "> تم تأكيد العملية.",
            "success_msg": "تم استلام الطلب بنجاح! سنتواصل معك قريباً."
        },
        "about_page": {
            "hero_title": "رحلتنا",
            "hero_desc": "من ماركا الشمالية إلى العالم. قصة الدقة والاحتراف.",
            "mission_title": "رسالتنا",
            "mission_desc": "إزالة الحواجز اللغوية للشركات والأفراد بدقة قانونية 100٪.",
            "vision_title": "رؤيتنا",
            "vision_desc": "أن نكون المرجع الأول للترجمة المعتمدة في الشرق الأوسط.",
            "values_title": "قيمنا الجوهرية",
            "value1": "النزاهة",
            "value2": "السرعة",
            "value3": "السرية"
        },
        "timeline": {
            "title": "تاريخنا",
            "year1": "2026", "title1": "التأسيس", "desc1": "تأسس الخط المضيء في ماركا الشمالية بمهمة واحدة: الدقة.",
            "year2": "2027", "title2": "الاعتماد الرسمي", "desc2": "اعتراف رسمي من وزارة العدل وكافة السفارات الكبرى في الأردن.",
            "year3": "2028", "title3": "التوسع الرقمي", "desc3": "إطلاق بوابة الترجمة المدعومة بالذكاء الاصطناعي وخدمات تعريب المواقع.",
            "year4": "2029", "title4": "نحو العالمية", "desc4": "نخدم أكثر من 500 عميل مؤسسي في أوروبا والشرق الأوسط."
        },
        "map": {
            "title": "انتشارنا العالمي",
            "desc": "مقرنا في عمان، ونصل إلى العالم."
        },
        "merch": {
            "title": "الهوية المؤسسية",
            "desc": "أدوات احترافية لأسلوب حياة مهني. تصفح منتجاتنا الرسمية.",
            "item1": "العلم الرسمي",
            "item2": "تقويم 2030",
            "item3": "كوب العلامة التجارية",
            "item4": "كتيب العينات",
            "btn_shop": "شاهد جميع المنتجات"
        },
        // --- NEW PAGES ---
        "res": {
            "map_title": "اختر منطقتك",
            "map_desc": "انقر على أقرب مكتب لمعالجة وثائقك.",
            "step2_title": "الخطوة 2: تفاصيل الوثيقة",
            "label_from": "ترجمة من",
            "label_to": "ترجمة إلى",
            "label_doc": "نوع الوثيقة",
            "label_pages": "عدد الصفحات",
            "label_urgency": "مستوى الخدمة",
            "sum_title": "ملخص الطلب",
            "sum_loc": "المكتب المحدد:",
            "sum_doc": "الوثيقة:",
            "sum_pages": "الصفحات:",
            "sum_fees": "الرسوم:",
            "sum_total": "المجموع التقديري",
            "btn_checkout": "الذهاب للدفع"
        },
        "chk": {
            "nav_secure": "تشفير SSL 256-Bit",
            "bill_title": "بيانات الفوترة",
            "label_fname": "الاسم الأول",
            "label_lname": "اسم العائلة",
            "label_email": "البريد الإلكتروني (للفاتورة)",
            "pay_title": "طريقة الدفع",
            "label_card": "رقم البطاقة",
            "label_exp": "تاريخ الانتهاء",
            "label_cvc": "رمز الأمان CVC",
            "label_cname": "اسم حامل البطاقة",
            "btn_pay": "دفع",
            "sum_title": "ملخص الطلب",
            "sum_loc": "موقع الخدمة",
            "sum_doc": "نوع الوثيقة",
            "sum_lang": "الزوج اللغوي",
            "sum_pages": "الصفحات",
            "sum_urgency": "السرعة",
            "sum_total": "المجموع",
            "secure_msg": "تتم معالجة المدفوعات عبر بوابة Stripe/PayPal الآمنة.",
            "modal_title": "جاري معالجة الدفع...",
            "modal_desc": "يرجى عدم إغلاق النافذة."
        },
        "inv": {
            "brand_sub": "لخدمات الترجمة",
            "title": "فاتورة ضريبية",
            "label_bill": "فاتورة إلى:",
            "label_date": "تاريخ الإصدار:",
            "label_txn": "رقم المعاملة:",
            "th_desc": "الوصف",
            "th_type": "النوع",
            "th_pages": "الصفحات",
            "th_amt": "المبلغ",
            "label_total": "المجموع الكلي",
            "label_qr": "رمز التحقق QR",
            "stamp": "مدفوع",
            "footer_msg": "شكراً لتعاملكم معنا.",
            "btn_print": "طباعة الفاتورة",
            "btn_home": "الرئيسية"
        },
		// ... (Inside "ar" object) ...
        "contact_page": {
            "hero_title": "تواصل معنا",
            "hero_desc": "نحن هنا للإجابة على استفساراتكم ومناقشة مشاريعكم.",
            "info_title": "معلومات الاتصال",
            "label_address": "العنوان",
            "text_address": "ماركا الشمالية<br>عمان، الأردن",
            "label_phone": "الهاتف",
            "label_email": "البريد الإلكتروني",
            "form_title": "أرسل رسالة",
            "ph_name": "الاسم الكريم",
            "ph_email": "البريد الإلكتروني",
            "ph_subject": "الموضوع",
            "ph_msg": "كيف يمكننا مساعدتك؟",
            "btn_send": "إرسال الرسالة"
        }
    },

    // === RUSSIAN ===
    "ru": {
        "header": { "brand_sub": "БЮРО ПЕРЕВОДОВ", "menu_btn": "МЕНЮ" },
        "menu": {
            "label_nav": "НАВИГАЦИЯ", "label_member": "КАБИНЕТ", "label_region": "ВЫБОР РЕГИОНА",
            "home": "Главная", "pages": "Страницы", "about": "О нас", "services": "Услуги",
            "translation": "Информация", "packages": "Цены и Пакеты", "shop": "Магазин",
            "reservation": "Забронировать", "contacts.html": "Контакты", "login": "Войти", "signup": "Регистрация"
        },
        "hero": {
            "slide1_title": "Объединяя языки,<br>Соединяя миры",
            "slide1_desc": "Самая надежная сертифицированная служба переводов в Аммане.",
            "slide1_btn": "Получить расчет",
            "slide2_title": "Официальная и правовая<br>документация",
            "slide2_desc": "Аккредитация Министерства юстиции. Контракты, визы и справки.",
            "slide2_btn": "Наши услуги",
            "slide3_title": "Светлая линия<br>коммуникации",
            "slide3_desc": "Эксперты-лингвисты в самом сердце Марка Аль-Шамалия.",
            "slide3_btn": "Наш офис"
        },
        "about": {
            "title": "О нас", "arabic_name": "Аль-Хат Аль-Муди Переводы",
            "p1": "В <strong>Al-Khat Al-Mudi</strong> мы верим, что перевод — это не просто замена слов, а сохранение смысла и интонации. Мы находимся в Аммане и предоставляем сертифицированные услуги, признанные всеми государственными органами Иордании.",
            "p2": "Будь то учеба за границей, расширение бизнеса или сложные юридические документы — мы гарантируем профессионализм.",
            "badge_certified": "Сертифицировано", "badge_confidential": "Конфиденциально", "badge_fast": "Быстро"
        },
        "services": {
            "section_title": "Наши услуги", "section_desc": "Комплексные языковые решения для ваших задач.",
            "s1_title": "Юридический перевод", "s1_desc": "Контракты, судебные документы, доверенности.",
            "s2_title": "Иммиграция и Визы", "s2_desc": "Свидетельства о рождении, браке, паспорта для посольств.",
            "s3_title": "Академический перевод", "s3_desc": "Дипломы, транскрипты и научные работы.",
            "s4_title": "Локализация сайтов", "s4_desc": "Адаптация цифрового контента для новых рынков.",
            "s5_title": "Медицинский перевод", "s5_desc": "Медицинские отчеты, рецепты и справки.",
            "s6_title": "Корректура", "s6_desc": "Проверка документов на грамматическую точность."
        },
        "reservation": {
            "title": "Узнать стоимость", "subtitle": "Готовы переводить?",
            "desc": "Загрузите документы безопасно и получите быстрый расчет.",
            "step1_title": "Загрузка", "step1_desc": "Выберите файл (PDF, Word...)",
            "step2_title": "Детали", "step2_desc": "Выберите языки и срочность",
            "step3_title": "Расчет", "step3_desc": "Мгновенная цена и сроки",
            "form_header": "Быстрый запрос",
            "ph_name": "ФИО", "ph_email": "Email", "ph_phone": "Телефон",
            "ph_from": "Перевести с...", "ph_to": "Перевести на...", "ph_link": "Ссылка на документ (Drive, Dropbox...)",
            "btn_submit": "Отправить запрос"
        },
        "stats": {
            "languages": "Языков", "acceptance": "Процент принятия",
            "clients": "Клиентов", "delivery": "Экспресс"
        },
        "footer": {
            "about_text": "Ваш партнер в преодолении языковых барьеров.",
            "col_links": "Ссылки", "col_legal": "Инфо", "col_contact": "Контакты",
            "privacy": "Конфиденциальность", "terms": "Условия",
            "copyright": "© 2026 Al-Khat Al-Mudi Translation. Все права защищены."
        },
        "overlay": {
            "title": "ШЛЮЗ БЕЗОПАСНОСТИ AL-KHAT v4.0",
            "status": "ОБРАБОТКА...",
            "log1": "> Установка защищенного соединения (TLS 1.3)...",
            "log2": "> Рукопожатие с сервером Al-Khat...",
            "log3": "> Шифрование пакетов данных...",
            "log4": "> Проверка целостности документа...",
            "log5": "> Загрузка в защищенное облако...",
            "log6": "> Генерация ID заявки...",
            "log7": "> Транзакция подтверждена.",
            "success_msg": "Запрос успешно получен! Мы скоро свяжемся с вами."
        },
        "about_page": {
            "hero_title": "Наш путь",
            "hero_desc": "Из Марка Аль-Шамалия в мир. История точности.",
            "mission_title": "Наша миссия",
            "mission_desc": "Устранение языковых барьеров с 100% юридической точностью.",
            "vision_title": "Наше видение",
            "vision_desc": "Стать эталоном сертифицированного перевода на Ближнем Востоке.",
            "values_title": "Ценности",
            "value1": "Честность",
            "value2": "Скорость",
            "value3": "Конфиденциальность"
        },
        "timeline": {
            "title": "Наша история",
            "year1": "2026", "title1": "Основание", "desc1": "Al-Khat Al-Mudi была основана в Марка Аль-Шамалия с единственной миссией: Точность.",
            "year2": "2027", "title2": "Официальная сертификация", "desc2": "Признание Министерством юстиции и всеми крупными посольствами в Иордании.",
            "year3": "2028", "title3": "Цифровое расширение", "desc3": "Запуск портала переводов с ИИ и услуг локализации веб-сайтов.",
            "year4": "2029", "title4": "Выход на глобальный уровень", "desc4": "Обслуживание 500+ корпоративных клиентов по всей Европе и на Ближнем Востоке."
        },
        "map": {
            "title": "Глобальный охват",
            "desc": "Штаб-квартира в Аммане, связь с миром."
        },
        "merch": {
            "title": "Корпоративная идентичность",
            "desc": "Профессиональные инструменты для профессионального стиля жизни. Ознакомьтесь с нашей продукцией.",
            "item1": "Официальный флаг",
            "item2": "Календарь 2030",
            "item3": "Брендовая кружка",
            "item4": "Книга образцов",
            "btn_shop": "Смотреть все товары"
        }
    },

    // === DUTCH (NL) ===
    "du": {
        "header": { "brand_sub": "VERTAALDIENSTEN", "menu_btn": "MENU" },
        "menu": {
            "label_nav": "NAVIGATIE", "label_member": "LEDENZONE", "label_region": "REGIO SELECTIE",
            "home": "Home", "pages": "Pagina's", "about": "Over Ons", "services": "Diensten",
            "translation": "Vertaal Info", "packages": "Pakketten & Prijzen", "shop": "Winkel",
            "reservation": "Reserveren", "contacts.html": "Contact", "login": "Inloggen", "signup": "Aanmelden"
        },
        "hero": {
            "slide1_title": "Talen Overbruggen,<br>Werelden Verbinden",
            "slide1_desc": "Amman's meest vertrouwde gecertificeerde vertaaldienst. Nauwkeurigheid waar u op kunt bouwen.",
            "slide1_btn": "Gratis Offerte",
            "slide2_title": "Officiële & Juridische<br>Documentatie",
            "slide2_desc": "Gecertificeerd door het Ministerie van Justitie. Contracten, visa en certificaten.",
            "slide2_btn": "Onze Diensten",
            "slide3_title": "De Lichtende Lijn<br>van Communicatie",
            "slide3_desc": "Expert linguïsten gevestigd in het hart van Marka Al-Shamaliya.",
            "slide3_btn": "Bezoek Ons Kantoor"
        },
        "about": {
            "title": "Over Ons", "arabic_name": "Al-Khat Al-Mudi Vertalingen",
            "p1": "Bij <strong>Al-Khat Al-Mudi</strong> geloven we dat vertalen meer is dan woorden wisselen; het gaat om betekenis en toon. Gevestigd in Marka Al-Shamaliya, bedienen wij particulieren en bedrijven met gecertificeerde diensten.",
            "p2": "Of u nu in het buitenland gaat studeren of internationaal uitbreidt, ons team zorgt ervoor dat uw boodschap professioneel blijft.",
            "badge_certified": "Gecertificeerd", "badge_confidential": "Vertrouwelijk", "badge_fast": "Snel"
        },
        "services": {
            "section_title": "Onze Diensten", "section_desc": "Uitgebreide taaloplossingen op maat.",
            "s1_title": "Juridische Vertaling", "s1_desc": "Contracten, rechtbankdocumenten en volmachten.",
            "s2_title": "Immigratie & Visa", "s2_desc": "Geboorteakten, huwelijksakten en paspoorten.",
            "s3_title": "Academische Vertaling", "s3_desc": "Universitaire transcripties en diploma's.",
            "s4_title": "Website Lokalisatie", "s4_desc": "Pas uw digitale inhoud aan voor nieuwe markten.",
            "s5_title": "Medische Vertaling", "s5_desc": "Medische rapporten en recepten.",
            "s6_title": "Proeflezen", "s6_desc": "Uw documenten perfectioneren op grammatica."
        },
        "reservation": {
            "title": "Ontvang een Offerte", "subtitle": "Klaar om te vertalen?",
            "desc": "Upload uw documenten veilig en ontvang snel een offerte.",
            "step1_title": "Upload Bestand", "step1_desc": "Selecteer uw document",
            "step2_title": "Kies Details", "step2_desc": "Kies talen en urgentie",
            "step3_title": "Ontvang Prijs", "step3_desc": "Direct prijs en tijd",
            "form_header": "Snelle Aanvraag",
            "ph_name": "Volledige Naam", "ph_email": "E-mailadres", "ph_phone": "Telefoonnummer",
            "ph_from": "Vertaal Van...", "ph_to": "Vertaal Naar...", "ph_link": "Document Link (Drive, Dropbox...)",
            "btn_submit": "Verstuur Aanvraag"
        },
        "stats": {
            "languages": "Talen", "acceptance": "Acceptatiegraad",
            "clients": "Tevreden Klanten", "delivery": "Express Levering"
        },
        "footer": {
            "about_text": "Uw partner in het overwinnen van taalbarrières.",
            "col_links": "Snelle Links", "col_legal": "Juridisch", "col_contact": "Contact",
            "privacy": "Privacybeleid", "terms": "Servicevoorwaarden",
            "copyright": "© 2026 Al-Khat Al-Mudi Translation. Alle rechten voorbehouden."
        },
        "overlay": {
            "title": "AL-KHAT BEVEILIGDE GATEWAY v4.0",
            "status": "VERWERKEN...",
            "log1": "> Beveiligde verbinding tot stand brengen (TLS 1.3)...",
            "log2": "> Handshake met Al-Khat Mainframe...",
            "log3": "> Gegevenspakketten versleutelen...",
            "log4": "> Documentintegriteit verifiëren...",
            "log5": "> Uploaden naar beveiligde cloud...",
            "log6": "> Offerte referentie-ID genereren...",
            "log7": "> Transactie bevestigd.",
            "success_msg": "Aanvraag succesvol ontvangen! We nemen spoedig contact op."
        },
        "about_page": {
            "hero_title": "Onze Reis",
            "hero_desc": "Van Marka Al-Shamaliya naar de wereld. Het verhaal van precisie.",
            "mission_title": "Onze Missie",
            "mission_desc": "Taalbarrières wegnemen met 100% juridische nauwkeurigheid.",
            "vision_title": "Onze Visie",
            "vision_desc": "De nummer 1 referentie zijn voor beëdigde vertalingen in het Midden-Oosten.",
            "values_title": "Kernwaarden",
            "value1": "Integriteit",
            "value2": "Snelheid",
            "value3": "Vertrouwelijkheid"
        },
        "timeline": {
            "title": "Onze Geschiedenis",
            "year1": "2026", "title1": "De Oprichting", "desc1": "Al-Khat Al-Mudi werd opgericht in Marka Al-Shamaliya met één missie: Precisie.",
            "year2": "2027", "title2": "Officiële Certificering", "desc2": "Erkend door het Ministerie van Justitie en alle grote ambassades in Jordanië.",
            "year3": "2028", "title3": "Digitale Expansie", "desc3": "Lancering van ons AI-ondersteunde vertaalportaal en website-lokalisatiediensten.",
            "year4": "2029", "title4": "Wereldwijd Gaan", "desc4": "Bedienen van 500+ zakelijke klanten in Europa en het Midden-Oosten."
        },
        "map": {
            "title": "Wereldwijd Bereik",
            "desc": "Hoofdkantoor in Amman, verbonden met de wereld."
        },
        "merch": {
            "title": "Bedrijfsidentiteit",
            "desc": "Professionele tools voor een professionele levensstijl. Bekijk onze officiële merchandise.",
            "item1": "Officiële Vlag",
            "item2": "2030 Kalender",
            "item3": "Merk Mok",
            "item4": "Monsterboek",
            "btn_shop": "Bekijk Alle Producten"
        }
    }
};

// --- THE ENGINE ---
function setLanguage(lang) {
    // 1. Update HTML attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';

    // 2. Save Preference
    localStorage.setItem('site-lang', lang);

    // 3. Get Data directly from memory
    const data = translations[lang];
    if(data) {
        updateContent(data);
    }
}

function updateContent(data, prefix = '') {
    for (const key in data) {
        if (typeof data[key] === 'object') {
            updateContent(data[key], prefix + key + '-');
        } else {
            const elementId = prefix + key; // e.g. "contact-ph_name"
            const element = document.getElementById(elementId);
            
            if (element) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA' || element.tagName === 'SELECT' || element.tagName === 'OPTION') {
                    if(element.tagName === 'OPTION') element.text = data[key];
                    else element.placeholder = data[key];
                } 
                else if (element.tagName === 'IMG') {
                    element.alt = data[key];
                }
                else {
                    element.innerHTML = data[key];
                }
            }
        }
    }
}

/* ==========================================================================
   SUPPORT CENTER LOGIC
   ========================================================================== */

// 2. STAFF PORTAL ACCESS
function unlockStaffPortal() {
    const pin = prompt("Enter Agent PIN Code:");
    if (pin === "2026") { // <--- SIMPLE PASSWORD
        document.getElementById('staff-dashboard').classList.add('active');
    } else {
        alert("Access Denied.");
    }
}

function closeStaffPortal() {
    document.getElementById('staff-dashboard').classList.remove('active');
}

// 3. STAFF TOOLS
function staffCalc() {
    const pages = document.getElementById('staff-pages').value || 0;
    const rate = document.getElementById('staff-type').value;
    const total = pages * rate;
    document.getElementById('staff-result').innerText = total + " JOD";
}

function launchWhatsApp() {
    let number = document.getElementById('wa-number').value.replace(/[^0-9]/g, '');
    if(number) {
        window.open(`https://web.whatsapp.com/send?phone=${number}`, '_blank');
    } else {
        alert("Please enter a client phone number first.");
    }
}