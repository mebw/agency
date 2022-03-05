import React from 'react'
import styles from '../styles/Footer.module.css'
import Image from 'next/image'
import Link from 'next/link'
const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <p className={styles.title}>AVOCADO CREATIVES</p>
                <p className={styles.titleDesc}>
                    <Link href="/contact">
                        <>
                            <span className={styles.workWithUs}>WORK WITH US</span>
                            <Image src={"/img/link.png"}
                                width="40px"
                                height="40px"
                                alt=''
                            />
                        </>
                    </Link>
                </p>
            </div>
            <div className={styles.addresses}>
                <div>First address</div>
                <div>Second description</div>
            </div>


        </div>
    )
}

export default Footer