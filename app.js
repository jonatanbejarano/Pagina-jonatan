document.addEventListener('DOMContentLoaded', () => {
    const languageSelectorButton = document.getElementById('language-selector-button');
    const languageOptions = document.getElementById('language-options');
    const currentLangFlag = document.getElementById('current-lang-flag');
    const currentLangText = document.getElementById('current-lang-text');

    const translations = {
    'nav': {
        'es': {
            'nav-inicio': 'Inicio',
            'nav-about': 'Sobre mí',
            'nav-habilidades': 'Habilidades'
        },
        'en': {
            'nav-inicio': 'Home',
            'nav-about': 'About me',
            'nav-habilidades': 'Skills'
        }
    },
    'index.html': {
        'es': {
            'greeting': '¡Hola! soy Jonatan Alexander Bejarano Avila estudiante de',
            'degree': 'ingeniería Biomédica',
            'socialsTitle': 'Accede a mis redes:',
            'footer-text': 'Desarrollado por Jonatan'
        },
        'en': {
            'greeting': 'Hello! I am Jonatan Alexander Bejarano Avila, a student of',
            'degree': 'Biomedical Engineering',
            'socialsTitle': 'Access my social networks:',
            'footer-text': 'Developed by Jonatan'
        }
    },
    'about.html': {
        'es': {
            'about-title': 'Sobre mí',
            'about-text': 'Estudiante de décimo semestre de Ingeniería Biomédica con una sólida base en C#, C++, y Python, adquirida a través de mi formación académica y diplomados especializados. Mi experiencia incluye el manejo de HTML, CSS y el software de diseño Figma, herramientas que aplico en el desarrollo de soluciones tecnológicas. Me apasiona la aplicación de la tecnología para resolver desafíos en el campo de la salud. Destaco por mi capacidad para trabajar en equipo, mi enfoque en la planificación detallada y mis habilidades de organización, siempre buscando la optimización de procesos y la calidad en los resultados. Estoy en busca de oportunidades para aplicar mis conocimientos en proyectos innovadores y continuar mi crecimiento profesional.',
            'footer-text': 'Desarrollado por Jonatan',
            'spotify-section': 'mi música en Spotify 🎧',
            'spotify-text': 'Esta playlist me acompaña mientras programo:'
        },
        'en': {
            'about-title': 'About me',
            'about-text': 'I am a tenth-semester Biomedical Engineering student with a solid foundation in C#, C++, and Python, acquired through my academic training and specialized diplomas. My experience includes handling HTML, CSS, and the Figma design software, tools that I apply in the development of technological solutions. I am passionate about applying technology to solve challenges in the field of health. I stand out for my ability to work in a team, my focus on detailed planning, and my organizational skills, always seeking to optimize processes and the quality of results. I am looking for opportunities to apply my knowledge in innovative projects and continue my professional growth.',
            'footer-text': 'Developed by Jonatan',
            'spotify-section': 'my music on Spotify 🎧',
            'spotify-text': 'This playlist accompanies me while I code:'
        }
    },
    'habilidades.html': {
        'es': {
            'skills-title': 'Habilidades',
            'skills-text1': 'Programación en C#, C++, y Python',
            'skills-text2': 'Desarrollo web con HTML y CSS, manejo de Figma',
            'skills-text3': 'Trabajo en Equipo, Comunicación, Planificación',
            'footer-text': 'Desarrollado por Jonatan'
        },
        'en': {
            'skills-title': 'Skills',
            'skills-text1': 'Programming in C#, C++, and Python',
            'skills-text2': 'Web development with HTML and CSS, Figma proficiency',
            'skills-text3': 'Teamwork, Communication, Planning',
            'footer-text': 'Developed by Jonatan'
        }
    }
};

    let currentLanguage = localStorage.getItem('selectedLanguage') || 'es';

    const updateNav = (lang) => {
        const navTranslations = translations.nav[lang];
        for (const id in navTranslations) {
            const element = document.getElementById(id);
            if (element) element.textContent = navTranslations[id];
        }
    };

    const updateContent = (lang) => {
        const page = window.location.pathname.split('/').pop();
        const pageTranslations = translations[page];
        if (!pageTranslations) return;

        const content = pageTranslations[lang];
        for (const id in content) {
            const element = document.getElementById(id);
            if (element) element.textContent = content[id];
        }
    };

    const updateLanguageSelector = (lang) => {
        if (lang === 'es') {
            currentLangFlag.textContent = '🇨🇴';
            currentLangText.textContent = 'Español';
        } else if (lang === 'en') {
            currentLangFlag.textContent = '🇺🇸';
            currentLangText.textContent = 'English';
        }
    };

    const applyLanguage = (lang) => {
        updateNav(lang);
        updateContent(lang);
        updateLanguageSelector(lang);
    };

    // Abrir/cerrar dropdown
    languageSelectorButton.addEventListener('click', (e) => {
        e.stopPropagation();
        languageOptions.classList.toggle('hidden');
    });

    // Selección de idioma
    languageOptions.addEventListener('click', (event) => {
        const selectedOption = event.target.closest('div[data-lang]');
        if (selectedOption) {
            const selectedLang = selectedOption.dataset.lang;
            if (selectedLang !== currentLanguage) {
                currentLanguage = selectedLang;
                localStorage.setItem('selectedLanguage', currentLanguage); 
                applyLanguage(currentLanguage);
            }
            languageOptions.classList.add('hidden');
        }
    });

    // Cerrar si se hace clic fuera
    document.addEventListener('click', (event) => {
        if (!document.getElementById('language-dropdown-container').contains(event.target)) {
            languageOptions.classList.add('hidden');
        }
    });

    // Inicializar en español
    applyLanguage(currentLanguage);
});
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.header_menu').classList.toggle('active');
});


