import css from './Gallery.module.css';
import { Swiper, SwiperSlide } from "swiper/react";
import 'react-image-gallery/styles/css/image-gallery.css';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Swiper.css'
import { Navigation, Pagination, A11y, EffectCoverflow } from 'swiper/modules';


import img1 from '/src/assets/img/projects/1.jpg';
import img2 from '/src/assets/img/projects/2.jpg';
import img3 from '/src/assets/img/projects/3.jpg';
import img4 from '/src/assets/img/projects/4.jpg';
import img5 from '/src/assets/img/projects/5.jpg';
import img6 from '/src/assets/img/projects/6.jpg';
import img7 from '/src/assets/img/projects/7.jpg';
import img8 from '/src/assets/img/projects/8.jpg';
import img9 from '/src/assets/img/projects/9.jpg';
import img10 from '/src/assets/img/projects/10.jpg';
import img11 from '/src/assets/img/projects/11.jpg';
import img12 from '/src/assets/img/projects/12.jpg';


const images = [

    {
        original: "https://picsum.photos/id/1018/1000/600/",
        thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
        original: "https://picsum.photos/id/1015/1000/600/",
        thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
        original: "https://picsum.photos/id/1019/1000/600/",
        thumbnail: "https://picsum.photos/id/1019/250/150/",
    },

]

export const Gallery = () => (
    <div className={css.gallery}>
        <Swiper
            modules={[Navigation, EffectCoverflow, Pagination]}
            spaceBetween={40}
            slidesPerView={2}
            centeredSlides={true}
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                clickable: true
            }}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            loop={true}

            className="swiper_container"
        >
            <SwiperSlide>
                <img className={css.slide} src={img1} alt="slide" />
            </SwiperSlide>
            <SwiperSlide>
                <img className={css.slide} src={img2} alt="slide" />
            </SwiperSlide>
            <SwiperSlide>
                <img className={css.slide} src={img3} alt="slide" />
            </SwiperSlide>
            <SwiperSlide>
                <img className={css.slide} src={img4} alt="slide" />
            </SwiperSlide>
            <SwiperSlide>
                <img className={css.slide} src={img5} alt="slide" />
            </SwiperSlide>
            <SwiperSlide>
                <img className={css.slide} src={img6} alt="slide" />
            </SwiperSlide>
            <SwiperSlide>
                <img className={css.slide} src={img7} alt="slide" />
            </SwiperSlide>
            <SwiperSlide>
                <img className={css.slide} src={img8} alt="slide" />
            </SwiperSlide>
            <div className="slider-controler">
                <div className="swiper-button-prev slider-arrow"></div>
                <div className="swiper-button-next slider-arrow"></div>
            </div>
        </Swiper>
    </div>
)


