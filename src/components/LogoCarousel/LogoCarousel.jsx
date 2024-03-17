import adidas from '/src/assets/img/brands/adidas.png'
import arvato from '/src/assets/img/brands/arvato.png'
import ceva from '/src/assets/img/brands/ceva.png'
import dhl from '/src/assets/img/brands/dhl.png'
import eberspacher from '/src/assets/img/brands/eberspacher.png'
import geodis2 from '/src/assets/img/brands/geodis2.png'
import jd from '/src/assets/img/brands/jd.png'
import mahle from '/src/assets/img/brands/mahle.png'
import mcmaster from '/src/assets/img/brands/mcmaster.png'
import skoda from '/src/assets/img/brands/skoda.png'
import toyota from '/src/assets/img/brands/toyota.png'
import vw from '/src/assets/img/brands/vw.png'
import zalando from '/src/assets/img/brands/zalando.png'
import css from './LogoCarousel.module.css'
import { Trans } from 'react-i18next'

const Slider = () => (

    <div className={css.part}>
        <img className={css.logo} src={adidas} alt="" />
        <img className={css.logo} src={arvato} alt="" />
        <img className={css.logo} src={ceva} alt="" />
        <img className={css.logo} src={dhl} alt="" />
        <img className={css.logo} src={eberspacher} alt="" />
        <img className={css.logo} src={geodis2} alt="" />
        <img className={css.logo} src={jd} alt="" />
        <img className={css.logo} src={mahle} alt="" />
        <img className={css.logo} src={mcmaster} alt="" />
        <img className={css.logo} src={skoda} alt="" />
        <img className={css.logo} src={toyota} alt="" />
        <img className={css.logo} src={vw} alt="" />
        <img className={css.logo} src={zalando} alt="" />
    </div>


)

export const LogoCarusel = () => (
    <section className={css.carusel}>
        <div className={css.wrapper}>
            <h2 className={css.title}><Trans i18nKey="carusel.title"></Trans></h2>
        </div>
        <div className={css.slider}>
            <Slider />
            <Slider />
        </div>
    </section>

)