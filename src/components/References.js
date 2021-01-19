import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination,Scrollbar  } from 'swiper';
import Title from './Title'
import SigleReference from '../constants/references'

// Import Swiper styles
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation,Pagination,Scrollbar]);




 const References = () => {
    return (
        <section className="section reference">
            <Title title="referencias"/>
            <Swiper 
                navigation
                lazy = {true}
                slidesPerView={3}
                spaceBetween={50}
                loop= {true}
                pagination={{ 
                    clickable: true 
                }}
                breakpoints={{
                    320: {
                    slidesPerView: 1,
                    spaceBetween: 10
                    },
                    760: {
                        slidesPerView: 2,
                        spaceBetween: 30
                      },
                      990: {
                        slidesPerView: 3,
                        spaceBetween: 50
                      }
                }}
                
                scrollbar={{ 
                    draggable: true, 
                    hide:true,
                    el: null,
                }}
                className="section-center services-center">
                {SigleReference.map((reference) => {
                    const {id,img,title,designation,description} = reference;
                    return(
                        <SwiperSlide key={id} className="service">
                            <div>
                            <a 
                                href="https://bit.ly/referenciasFacebook" 
                                target="blank"
                                rel="noopener">
                            <img src={img} alt={title}/>
                            <h4>{title}</h4>
                            <p className="designation">{designation}</p>
                            <div className="underline"></div>
                            </a>
                            <p>{description}</p>
                            </div>     
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    )
}

export default References