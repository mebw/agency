import Image from 'next/image'
import avocadoPic from '../public/img/Avocado.png'
import React from 'react'
import style from '../styles/Intro.module.css'
import Circle from './Circle'
const Intro = () => {
    return (
        <div className={style.container}>
            <Circle backgroundColor="#01c686" top="1vh" left="-105vh" />
            <div className={style.card}>
                <h1 className={style.title}> <span className={style.brandName}>AVOCADO</span> DIGITAL PRODUCT AGENCY</h1>
                <p className={style.desc}>

                    Create live segments and target the right people for messages based on their behaviors.
                </p>
                <button className={style.button}> Discover</button>
            </div>
            <div className={style.card}>
                <Image
                    // src={avocadoPic}
                    src="/img/Avocado.png"
                    layout='fill'
                    objectFit='cover'
                    alt=''
                />
            </div>
        </div>
    )
}

export default Intro