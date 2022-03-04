import React from 'react'
import Link from "next/link";
import styles from '../styles/Navbar.module.css'
const Navbar = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.home}>AVOCADO</div>
                <div className={styles.home}>
                    <ul>
                        <li><Link></Link></li>
                        <li><Link></Link></li>
                        <li><Link></Link></li>
                        <li><Link></Link></li>
                        <li><Link></Link></li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Navbar