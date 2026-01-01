
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../contexts/LanguageContext';

const SeoHead = ({ title, description }) => {
    const { t } = useLanguage();

    // Default values if not provided
    const siteTitle = 'GTBM - Gulmeli Three Brothers Multipurpose Pvt Ltd';
    const pageTitle = title ? `${title} | GTBM` : siteTitle;
    const pageDescription = description || t('footer.description');

    return (
        <Helmet>
            <title>{pageTitle}</title>
            <meta name="description" content={pageDescription} />
            {/* Open Graph tags for social sharing */}
            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={pageDescription} />
            <meta property="og:type" content="website" />
        </Helmet>
    );
};

export default SeoHead;
