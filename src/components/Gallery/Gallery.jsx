import css from './Gallery.module.css';
import { Swiper, SwiperSlide } from "swiper/react";
import 'react-image-gallery/styles/css/image-gallery.css';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Swiper.css'
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';

import img1 from '/src/assets/img/projects/logi1.jpg';
import img2 from '/src/assets/img/projects/logi2.jpg';
import img3 from '/src/assets/img/projects/logi3.jpg';
import img4 from '/src/assets/img/projects/logi4.jpg';
import img5 from '/src/assets/img/projects/logi5.jpg';
import img6 from '/src/assets/img/projects/logi6.jpg';
import img7 from '/src/assets/img/projects/logi7.jpg';
import img8 from '/src/assets/img/projects/logi8.jpg';
import img9 from '/src/assets/img/projects/logi9.jpg';
import img10 from '/src/assets/img/projects/logi10.jpg';
import img11 from '/src/assets/img/projects/auto1.jpg';
import img12 from '/src/assets/img/projects/auto2.jpg';
import img13 from '/src/assets/img/projects/auto3.jpg';
import img14 from '/src/assets/img/projects/auto4.jpg';
import img15 from '/src/assets/img/projects/auto5.jpg';
import img16 from '/src/assets/img/projects/auto6.jpg';
import img17 from '/src/assets/img/projects/auto7.jpg';
import img18 from '/src/assets/img/projects/auto8.jpg';
import img19 from '/src/assets/img/projects/auto9.jpg';
import img20 from '/src/assets/img/projects/auto10.jpg';

export const Gallery = () => (
    <>
        {window.innerWidth > 1080 ?
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
                        <img className={css.slide} src={img11} alt="slide" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={css.slide} src={img2} alt="slide" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={css.slide} src={img12} alt="slide" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={css.slide} src={img3} alt="slide" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={css.slide} src={img13} alt="slide" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={css.slide} src={img4} alt="slide" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={css.slide} src={img14} alt="slide" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={css.slide} src={img5} alt="slide" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={css.slide} src={img15} alt="slide" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={css.slide} src={img6} alt="slide" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={css.slide} src={img16} alt="slide" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={css.slide} src={img7} alt="slide" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={css.slide} src={img17} alt="slide" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={css.slide} src={img8} alt="slide" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={css.slide} src={img18} alt="slide" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={css.slide} src={img9} alt="slide" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={css.slide} src={img19} alt="slide" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={css.slide} src={img10} alt="slide" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={css.slide} src={img20} alt="slide" />
                    </SwiperSlide>
                    <div className="slider-controler">
                        <div className="swiper-button-prev slider-arrow"></div>
                        <div className="swiper-button-next slider-arrow"></div>
                    </div>
                </Swiper>
            </div>
            :
            <div className={css.gallery}>
                <Swiper
                    modules={[Navigation, EffectCoverflow, Pagination]}
                    spaceBetween={0}
                    slidesPerView={1}
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
                        <img className={css.slide} src={img11} alt="slide" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={css.slide} src={img2} alt="slide" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={css.slide} src={img12} alt="slide" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={css.slide} src={img3} alt="slide" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={css.slide} src={img13} alt="slide" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={css.slide} src={img4} alt="slide" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={css.slide} src={img14} alt="slide" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={css.slide} src={img5} alt="slide" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={css.slide} src={img15} alt="slide" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={css.slide} src={img6} alt="slide" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={css.slide} src={img16} alt="slide" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={css.slide} src={img7} alt="slide" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={css.slide} src={img17} alt="slide" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={css.slide} src={img8} alt="slide" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={css.slide} src={img18} alt="slide" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={css.slide} src={img9} alt="slide" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={css.slide} src={img19} alt="slide" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={css.slide} src={img10} alt="slide" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={css.slide} src={img20} alt="slide" />
                    </SwiperSlide>
                    <div className="slider-controler">
                        <div className="swiper-button-prev slider-arrow"></div>
                        <div className="swiper-button-next slider-arrow"></div>
                    </div>
                </Swiper>
            </div>
        }
    </>
)


