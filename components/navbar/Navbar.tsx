import Link from 'next/link';
import React from 'react';
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <Link href={'/'}>Main</Link>
            <Link href={'/characters'}>Characters</Link>
        </div>
    );
};

export default Navbar;