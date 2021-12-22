import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiSearch } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import Image from 'next/image';
import styles from './style.module.scss';

//global component
import Button from '../Button';

const navList = [
    {
        label: 'SKINCARE',
        nav: '/category/skincare'
    },
    {
        label: 'MAKE UP',
        nav: '/category/make-up'
    },
    {
        label: 'BODY',
        nav: '/category/body'
    },
    {
        label: 'HAIR',
        nav: '/category/hair'
    },
    {
        label: 'FRAGRANCE',
        nav: '/category/fragrance'
    },
    {
        label: 'NAILS',
        nav: '/category/nails'
    },
    {
        label: 'TOOLS',
        nav: '/category/tools'
    },
    {
        label: 'BRANDS',
        nav: '/brands'
    }
]

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.topNavbar}>
                <div className={styles.navBtnLogoContainer}>
                    <Button variant='ghost' justicon={<GiHamburgerMenu size={25} />} />
                    <Image width='170' height='40' src='/fd-logo.png' />
                </div>

                <div className={styles.searchContainer}>
                    <BiSearch className={styles.searchIcon} size={25} />
                    <input placeholder='Search products, articles, topics, brands, etc' />
                </div>

                <Button style={{ height: 60 }} size='lg' lefticon={<CgProfile size={20} />}>
                    LOGIN / SIGNUP
                </Button>
            </div>

            <div className={styles.bottomNavbar}>
                <div>
                    {navList.map((item, i) => <a key={i} href={item.nav}>{item.label}</a>)}
                </div>
            </div>
        </div>
    );
}

export default Navbar;