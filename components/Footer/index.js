import React from 'react';
import { BsFacebook, BsTwitter, BsYoutube } from 'react-icons/bs'
import { IoLogoInstagram } from 'react-icons/io';
import styles from './style.module.scss'

//global components
import AdsCampaign from '../AdsCampaign';

const footerNav = {
    navigation: [
        {
            label: 'About Us',
            nav: '/about-us'
        },
        {
            label: 'Terms & Conditions',
            nav: '/tnc'
        },
        {
            label: 'Awards',
            nav: '/awards'
        },
        {
            label: 'Feedback',
            nav: '/feedback'
        },
        {
            label: 'Privacy Policy',
            nav: '/privacy-policy'
        },
        {
            label: 'Newsletter',
            nav: '/newsletter'
        },
        {
            label: 'Contact',
            nav: '/contact'
        },
        {
            label: 'Help',
            nav: '/help'
        }
    ],
    store: [
        {
            logo: '/images/appstore.png',
            link: 'https://apps.apple.com/id/app/female-daily-beauty-review/id1160742672'
        },
        {
            logo: '/images/playstore.png',
            link: 'https://play.google.com/store/apps/details?id=com.fdbr.android&hl=en&gl=US'
        }
    ],
    socmed: [
        {
            logo: <BsFacebook size={25} color='#3c5997' />,
            link: 'https://www.facebook.com/FemaleDailyNetwork/',
        },
        {
            logo: <BsTwitter size={25} color='#55aced' />,
            link: 'https://twitter.com/femaledaily?lang=en',
        },
        {
            logo: <IoLogoInstagram size={25} color='#438bca' />,
            link: 'https://www.instagram.com/femaledailynetwork/?hl=en',
        },
        {
            logo: <BsYoutube size={25} color='#d52528' />,
            link: 'https://www.youtube.com/user/FemaleDailyNetwork',
        }
    ]
}

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.left}>
                    <div className={styles.navContainer}>
                        {footerNav.navigation.map((item, i) => <span key={i}><a href={item.nav}>{item.label}</a></span>)}
                    </div>

                    <div className={styles.footerCopyright}>
                        <img alt='logo' src='/fd-logo.png' />
                        <p>Copyright 2015 - 2017 Female Daily Network • All rights reserved</p>
                    </div>
                </div>

                <div className={styles.right}>
                    <div className={styles.app}>
                        <p>Download Our Mobile App</p>
                        <div>
                            {footerNav.store.map((item, i) => <a key={i} href={item.link}><img alt='store' src={item.logo} /></a>)}
                        </div>
                    </div>

                    <div className={styles.socmed}>
                        {footerNav.socmed.map((item, i) => <a key={i} href={item.link}>{item.logo}</a>)}
                    </div>
                </div>
            </div>

            <AdsCampaign width={970} height={50} label='Bottom Frame' />
        </div>
    );
}

export default Footer;