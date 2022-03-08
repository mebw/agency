import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import style from '../styles/Services.module.css'
const Services = ({ services }) => {
    return (
        <div className={style.container}>
            <div className={style.info}>
                <h1 className={style.title}>What We Can Do?</h1>
                <h1 className={style.subtitle}>Services we can help you with</h1>
                <div className={style.services}>
                    {services.map(service => (
                        <Link key={service.id} href={`products/${service.name}`} passHref>
                            <div className={style.service}>
                                <span className={style.cat}>{service.title}</span>
                                <div className={style.catInfo}>{service.desc}</div>

                                <div className={style.media}>
                                    {
                                        service.video ? (
                                            <>
                                                <h2>hello</h2>
                                                <video
                                                    className={style.video}
                                                    src={`/img/${service.video}`}
                                                    autoPlay
                                                    loop
                                                />
                                            </>
                                        ) : (<Image
                                            src={`/img/${service.photo}`}
                                            width="100%"
                                            height="100%"
                                            layout="responsive"
                                            objectFit="cover"
                                            alt=""
                                        />)
                                    }
                                </div>
                            </div>
                        </Link>
                    )

                    )}
                </div>
            </div>
        </div>
    )
}

export default Services