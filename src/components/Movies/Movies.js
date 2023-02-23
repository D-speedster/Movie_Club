import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Figure } from 'react-bootstrap'
import Header from '../Home/Header/Header'
import './Movies.css';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Hi() {
    let [MoviesData, SetMovie] = useState(
        [
            { id: 1, namePer: 'پسر', nameEn: 'The Son', realase: '2022', poster: '/img/The Son_.jpg', rate: '7.3', story: 'روایت فردی به نام پیتر که وقتی همسر سابقش کیت با پسر نوجوانشان، نیکلاس روبرو می شود، وی به عنوان زندگی پرمشغله خود با شریک زندگی جدید اما و کودکشان در هم آمیخته می شود.' },
            { id: 2, namePer: 'بابل', nameEn: 'Babylon', realase: '2022', poster: '/img/babylon.jpg', rate: '7.6', story: 'این فیلم داستان یک بازیگر جوان به نام «منی تورس» را روایت می کند که در دهه 1920 در هالیوود به دنبال شغل است و کارش را به عنوان دستیار شروع می کند' },
            { id: 3, namePer: '', nameEn: 'M3GAN', realase: '2022', poster: '/img/m3gan.jpg', rate: '6.6', story: 'یک مهندس رباتیک که در یک کمپانی اسباب بازی سازی کار می کند عروسکی انسان نما را می سازد که این عروسک کم کم شروع به پیدا کردن شخصیت می کند      ' },
            { id: 4, namePer: 'آلوده', nameEn: 'Infiesto ', realase: '2023', poster: '/img/infiesto-2943376.webp', rate: '5.6', story: 'به دو کارآگاه مأموریتی محول می‌شود تا به شهری کوچک معدن‌دار در کوه‌های آستوریاس بروند. چرا که زنی که چندین ماه مُرده بوده ناگهان زنده ظاهر می‌شود و حالا باید پی ببرند چه نیروهای تاریک و مرموزی در این کار دست داشته‌اند.' },
            { id: 5, namePer: 'در نیمه شب', nameEn: 'At Midnight ', realase: '2023', poster: '/img/At Midnight.jpg', rate: '5.6', story: 'روایتی عاشقانه و طنز از یک دختر و پسر که با خود تصمیم گرفته‌اند عاشق نشوند.      ' },
            { id: 6, namePer: 'پلنگ سیاه : واکاندا برای همیشه', nameEn: 'Black Panther: Wakanda Forever', realase: '2022', poster: '/img/wakanda_forever.jpg', rate: '7.2', story: 'در این فیلم رهبران پادشاهی واکاندا تلاش می کنند تا بعد از مرگ پادشاه تیچالا از ملت خود در برابر نیروهای متجاوز محافظت کنند.' },
            { id: 7, namePer: 'مرد مورچه ای ', nameEn: 'Ant-Man and the Wasp: Quantumania', realase: '2023', poster: '/img/antman.jpg', rate: '6.5', story: 'اسکات لانگ به همراه دوستانش در قلمرو کوانتومی به کاوش می پردازند، در آنجا با موجودات عجیب و غریبی روبرو می شوند و ماجراهایی را تجربه می کنند که فراتر از محدودیت های آنها می باشد.' },
            { id: 8, namePer: 'در کابین را بزن', nameEn: 'Knock at the Cabin 2023', realase: '2023', poster: '/img/knock.jpg', rate: '6.4', story: 'داستان زوجی به نام اندرو و اریک و دختر خوانده‌شان، ون، که در حال گذراندن تعطیلات در یک کلبه خلوت واقع در نیوهمپشایر هستند. تا اینکه اتفاقات ناگواری رخ می دهد و ...' },
            { id: 1, namePer: 'انتقام جویان : عصر التران', nameEn: 'Avengers: Age of Ultron', realase: '2015', poster: '/img/poster4.PNG', rate: '8.4', story: '' },
            { id: 2, namePer: 'انتفام جویان', nameEn: 'The Avengers', realase: '2012', poster: '/img/poster3.PNG', rate: '8', story: '' },
            { id: 3, namePer: 'انتفام جویان : جنگ بینهایت', nameEn: 'Avenger Infinity War', realase: '2019', poster: '/img/poster2.PNG', rate: '8.5', story: '' },
            { id: 4, namePer: 'مرذ آهنی', nameEn: 'Iron Man', realase: '2008', poster: '/img/poster5.PNG', rate: '7.6', story: '' },
            { id: 5, namePer: 'سپیادرمن : راهی به خانه نیست', nameEn: 'Spider-Man: No Way Home ', realase: '2021', poster: '/img/poster7.jpg', rate: '8.0', story: '' },
            { id: 6, namePer: 'کاپیتان مارول', nameEn: 'Captain Marvel ', realase: '2019', poster: '/img/poster6.PNG', rate: '7.7', story: '' },

        ]
    )
    let i = { ...MoviesData };
    console.log(i)
    console.log(MoviesData)

    return (
        <div>
            <Header></Header>
            <Container>
                <div className='Advanced_search'>
                    <h5>جستجوی پیشرفته فیلم</h5>
                    <Container>
                        <Row className='justify-content-between'>
                            <Col lg={2} sm={4} xs={4} md={2}>

                                <select className='form-control bg-dark w-100 text-center'
                                    style={{ color: '#FFF', border: 'none', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                                    <option>ژانر</option>
                                    <option>تاریخی</option>
                                    <option>علمی تخیلی </option>
                                    <option>موزیکال </option>
                                    <option>ژانر</option>
                                    <option>تاریخی</option>
                                    <option>علمی تخیلی </option>
                                    <option>موزیکال </option>
                                    <option>ژانر</option>
                                    <option>تاریخی</option>
                                    <option>علمی تخیلی </option>
                                    <option>موزیکال </option>
                                </select>
                            </Col>
                            <Col lg={2} sm={4} xs={4} md={2}>

                                <select className='form-control bg-dark w-100 text-center'
                                    style={{ color: '#FFF', border: 'none', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                                    <option>رتبه</option>
                                    <option>بالای 8.5</option>
                                    <option>بالای 8 </option>
                                    <option>بالای 7 </option>
                                    <option>بالای 6</option>
                                    <option>بالای 5</option>

                                </select>
                            </Col>
                            <Col lg={2} sm={4} xs={4} md={2}>

                                <select className='form-control bg-dark w-100 text-center'
                                    style={{ color: '#FFF', border: 'none', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                                    <option>دوبله و زیرنویس</option>
                                    <option>دوبله فارسی</option>
                                    <option>زیرنویس فارسی</option>

                                </select>
                            </Col>
                            <Col lg={2} sm={4} xs={4} md={2}>

                                <select className='form-control bg-dark w-100 text-center'
                                    style={{ color: '#FFF', border: 'none', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                                    <option>ژانر</option>
                                    <option>تاریخی</option>
                                    <option>علمی تخیلی </option>
                                    <option>موزیکال </option>
                                    <option>ژانر</option>
                                    <option>تاریخی</option>
                                    <option>علمی تخیلی </option>
                                    <option>موزیکال </option>
                                    <option>ژانر</option>
                                    <option>تاریخی</option>
                                    <option>علمی تخیلی </option>
                                    <option>موزیکال </option>
                                </select>
                            </Col>
                            <Col lg={2} sm={4} xs={4} md={2}>

                                <select className='form-control bg-dark w-100 text-center'
                                    style={{ color: '#FFF', border: 'none', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                                    <option>مرتب سازی بر اساس</option>
                                    <option>جدیدترین</option>
                                    <option>پر فروش ترین</option>
                                    <option>پر بازدیدترین </option>
                                    <option>250 فیلم برتر</option>

                                </select>
                            </Col>
                            <Col lg={2} sm={4} xs={4} md={2}>

                                <select className='form-control bg-dark w-100 text-center'
                                    style={{ color: '#FFF', border: 'none', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                                    <option>مرتب سازی بر اساس</option>
                                    <option>جدیدترین</option>
                                    <option>پر فروش ترین</option>
                                    <option>پر بازدیدترین </option>
                                    <option>250 فیلم برتر</option>

                                </select>
                            </Col>
                            
                        </Row>
                    </Container>
                </div>
                <Row className='justify-content-start Slider_Movie'>
                    {Object.entries(i).map(item => (

                        <Col lg={3} md={3} xs={6} sm={6} classname='Movies_Item'>
                            <SwiperSlide key={Math.random(10, 1000)} >
                                <Figure>
                                    <Figure.Image

                                        alt="171x180"
                                        src={item[1].poster}
                                    />
                                    <div className='info_Sliders'>

                                        <Container>
                                            {item[1].nameEn}
                                        </Container>
                                    </div>
                                    <p className='Rate_Movie'>{item[1].rate}</p>

                                    <div className='Story' style={{ color: 'white', paddingLeft: '25px' }}>
                                        <Container>
                                            <h5>خلاصه داستان</h5>
                                            {item[1].story}
                                        </Container>
                                    </div>


                                </Figure>
                            </SwiperSlide>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}
