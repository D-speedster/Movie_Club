import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header/Header'
import Latest_Trailers from './Latest_Trailers/Latest_Trailers'
import SliderMovie from './SliderMovie/SliderMovie'
import './Home.css';
import Footer from './Footer/Footer'

import Boxoffice from './Boxofiice/Boxoffice'
import { Container } from 'react-bootstrap'

export default function Home() {
  let [MoviesData, SetMovie] = useState(
    [
      { id: 1, namePer: 'پسر', nameEn: 'The Son', realase: '2022', poster: '/img/The Son_.jpg', rate: '7.3', story: 'روایت فردی به نام پیتر که وقتی همسر سابقش کیت با پسر نوجوانشان، نیکلاس روبرو می شود، وی به عنوان زندگی پرمشغله خود با شریک زندگی جدید اما و کودکشان در هم آمیخته می شود.' },
      { id: 2, namePer: 'بابل', nameEn: 'Babylon', realase: '2022', poster: '/img/babylon.jpg', rate: '7.6', story: 'این فیلم داستان یک بازیگر جوان به نام «منی تورس» را روایت می کند که در دهه 1920 در هالیوود به دنبال شغل است و کارش را به عنوان دستیار شروع می کند' },
      { id: 3, namePer: '', nameEn: 'M3GAN', realase: '2022', poster: '/img/m3gan.jpg', rate: '6.6', story: 'یک مهندس رباتیک که در یک کمپانی اسباب بازی سازی کار می کند عروسکی انسان نما را می سازد که این عروسک کم کم شروع به پیدا کردن شخصیت می کند      ' },
      { id: 4, namePer: 'آلوده', nameEn: 'Infiesto ', realase: '2023', poster: '/img/infiesto-2943376.webp', rate: '5.6', story: 'به دو کارآگاه مأموریتی محول می‌شود تا به شهری کوچک معدن‌دار در کوه‌های آستوریاس بروند. چرا که زنی که چندین ماه مُرده بوده ناگهان زنده ظاهر می‌شود و حالا باید پی ببرند چه نیروهای تاریک و مرموزی در این کار دست داشته‌اند.' },
      { id: 5, namePer: 'در نیمه شب', nameEn: 'At Midnight ', realase: '2023', poster: '/img/At Midnight.jpg', rate: '5.6', story: 'روایتی عاشقانه و طنز از یک دختر و پسر که با خود تصمیم گرفته‌اند عاشق نشوند.      ' },
      { id: 6, namePer: 'پلنگ سیاه : واکاندا برای همیشه', nameEn: 'Black Panther: Wakanda Forever', realase: '2022', poster: '/img/wakanda_forever.jpg', rate: '7.2', story: 'در این فیلم رهبران پادشاهی واکاندا تلاش می کنند تا بعد از مرگ پادشاه تیچالا از ملت خود در برابر نیروهای متجاوز محافظت کنند.' },
      { id: 7, namePer: 'مرد مورچه ای ', nameEn: 'Ant-Man and the Wasp: Quantumania', realase: '2023', poster: '/img/antman.jpg', rate: '6.5', story: 'اسکات لانگ به همراه دوستانش در قلمرو کوانتومی به کاوش می پردازند، در آنجا با موجودات عجیب و غریبی روبرو می شوند و ماجراهایی را تجربه می کنند که فراتر از محدودیت های آنها می باشد.' },
      { id: 8, namePer: 'در کابین را بزن', nameEn: 'Knock at the Cabin 2023', realase: '2023', poster: '/img/knock.jpg', rate: '6.4', story: 'داستان زوجی به نام اندرو و اریک و دختر خوانده‌شان، ون، که در حال گذراندن تعطیلات در یک کلبه خلوت واقع در نیوهمپشایر هستند. تا اینکه اتفاقات ناگواری رخ می دهد و ...' }

    ]
  )
  let [MoviesData2, SetMovie2] = useState(
    [
      { id: 1, namePer: 'انتقام جویان : عصر التران', nameEn: 'Avengers: Age of Ultron', realase: '2015', poster: '/img/poster4.PNG', rate: '8.4', story: '' },
      { id: 2, namePer: 'انتفام جویان', nameEn: 'The Avengers', realase: '2012', poster: '/img/poster3.PNG', rate: '8', story: '' },
      { id: 3, namePer: 'انتفام جویان : جنگ بینهایت', nameEn: 'Avenger Infinity War', realase: '2019', poster: '/img/poster2.PNG', rate: '8.5', story: '' },
      { id: 4, namePer: 'مرذ آهنی', nameEn: 'Iron Man', realase: '2008', poster: '/img/poster5.PNG', rate: '7.6', story: '' },
      { id: 5, namePer: 'سپیادرمن : راهی به خانه نیست', nameEn: 'Spider-Man: No Way Home ', realase: '2021', poster: '/img/poster7.jpg', rate: '8.0', story: '' },
      { id: 6, namePer: 'کاپیتان مارول', nameEn: 'Captain Marvel ', realase: '2019', poster: '/img/poster6.PNG', rate: '7.7', story: '' },

    ])
  let [Moviecollection, Setcollection] = useState([
    { id: 1, namePer: 'کالکشن هری پاتر', nameEn: 'Harry Potter ', realase: '2001 -2003', poster: '/img/C_1.jpg', rate: '8.8', story: '' },
    { id: 2, namePer: 'کالکشن ارباب حلقه ها', nameEn: 'Lord Of Rings ', realase: '2001 -2003', poster: '/img/C_2.jpg', rate: '8.5', story: '' },
    { id: 3, namePer: 'کالکشن ماتریکس', nameEn: 'Matrix', realase: '2001 -2003', poster: '/img/Matrix.jpg', rate: '8.1', story: '' },
    { id: 4, namePer: 'کالکشن جنگ ستارگان', nameEn: 'Star Wars', realase: '2001 -2003', poster: '/img/C_3.jpg', rate: '8.1', story: '' },
    { id: 5, namePer: 'کالکشن پارک ژوراستیک', nameEn: 'Jurassic Park', realase: '2001 -2003', poster: '/img/C_4.jpg', rate: '8.1', story: '' },

    

  ])
  let [BoxOffice, SetBoxOffice] = useState();
  let [BoxOffice2, SetBoxOffice2] = useState();


  useEffect(() => {
    fetch('http://localhost:3000/MOVIEBOX').then(res => {
      return res.json()
    }).then(data => {

      SetBoxOffice(data[0])
    })
  }, [])
  // let Sender = () => {
  //   var requestOptions = {
  //     method: 'POST',
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(BoxOffice),
  //     redirect: 'follow'
  //   };
  //   fetch("http://localhost:3000/MOVIEBOX", requestOptions)
  //     .then(response => response.json())
  //     .then(result => console.log(result))
  //     .catch(error => console.log('error', error));
  //   console.log(BoxOffice2)
  // }

  return (
    <div className='body'>
      <Header />

      <SliderMovie {...MoviesData} Title={'جدیدترین ها '}></SliderMovie>

      <Latest_Trailers />

      <SliderMovie {...MoviesData2} Title={'برترین فیلم های تخیلی'}></SliderMovie>
      <SliderMovie {...Moviecollection} Title={'برترین کالکشن فیلم'}></SliderMovie>
  

      <Boxoffice {...BoxOffice}></Boxoffice>

      <Footer />
      {/* <Container>
        <button onClick={Sender} className='btn btn-danger btn-lg mt-5 mb-5'>Sended Data</button>
        <br />

      </Container> */}
    </div>
  )
}
