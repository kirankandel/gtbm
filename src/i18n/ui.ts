export const languages = {
    en: 'English',
    ne: 'नेपाली',
};

export const defaultLang = 'en';

export const ui = {
    en: {
        'nav.home': 'Home',
        'nav.about': 'About Us',
        'nav.services': 'Services',
        'nav.projects': 'Projects',
        'nav.contact': 'Contact',
        'nav.callnow': 'Call Now',
        'footer.description': 'Building Dreams, Securing Futures in Kathmandu.',
        'footer.quicklinks': 'Quick Links',
        'footer.contact': 'Contact Us',
        'footer.rights': 'All rights reserved.',
    },
    ne: {
        'nav.home': 'गृह पृष्ठ',
        'nav.about': 'हाम्रो बारेमा',
        'nav.services': 'सेवाहरु',
        'nav.projects': 'प्रोजेक्टहरू',
        'nav.contact': 'सम्पर्क',
        'nav.callnow': 'अहिले फोन गर्नुहोस्',
        'footer.description': 'काठमाडौँमा सपनाहरू निर्माण गर्दै, भविष्य सुरक्षित गर्दै।',
        'footer.quicklinks': 'द्रुत लिङ्कहरू',
        'footer.contact': 'हामीलाई सम्पर्क गर्नुहोस',
        'footer.rights': 'सर्वाधिकार सुरक्षित।',
    },
} as const;

export function useTranslations(lang: keyof typeof ui) {
    return function t(key: keyof typeof ui[typeof defaultLang]) {
        return ui[lang][key] || ui[defaultLang][key];
    }
}
