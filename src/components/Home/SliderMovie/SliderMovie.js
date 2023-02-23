import React from 'react'
import { Card, Container, Figure } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { Navigation } from "swiper";


import './SliderMovie.css';
export default function SliderMovie(props) {

    return (
        <div className='Slider_Movie'>

            <Container>
                <div className='d-flex justify-content-between mb-4 mt-2'>
                    <h5 style={{ paddingRight: '24px', color: '#FFF', fontSize: '24px' }}>{props.Title}</h5>
                    <h5 style={{ paddingLeft: '24px', color: '#FFF' }}>
                        مشاهده کامل
                        <AiOutlineArrowLeft className='me-1' />

                    </h5>
                </div>
                <Swiper

                    touchAngle={true}
                    navigation={true}
                    modules={[Navigation]}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    className="mySwiper"
                    breakpoints={{
                        "@0.00": {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        "@0.75": {
                            slidesPerView: 2,
                            spaceBetween: 15,
                        },
                        "@1.00": {
                            slidesPerView: 2,
                            spaceBetween: 25,
                        },
                        "@1.50": {
                            slidesPerView: 5,
                            spaceBetween: 25
                        },
                    }}
                >

                    {Object.entries(props).map(item => (

                        <div key={Math.random(10, 1000)}>

                            <SwiperSlide key={Math.random(10, 1000)} >
                                <Figure>
                                    <Figure.Image
                                        width={171}
                                        height={180}
                                        alt="171x180"
                                        src={item[1].poster}
                                    />
                                    <div className='info_Sliders'>

                                        {item[1].nameEn}
                                    </div>
                                    <p className='Rate_Movie'>{item[1].rate}</p>
                                    
                                    <div className='Story' style={{ color: 'white' }}>
                                        <Container>
                                            <h5>خلاصه داستان</h5>
                                            {item[1].story}
                                        </Container>
                                    </div>


                                </Figure>
                            </SwiperSlide>

                        </div>
                    ))}




                </Swiper>
            </Container>
        </div>
    )
}
