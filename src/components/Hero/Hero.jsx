import HeroBg from '/hero_bg.png'
import { Trans } from 'react-i18next'


export const Hero = () => (
    <section className="hero">
        <div className="hero__wrapper ">
            <div className="hero__content">
                <h2 className="hero__title"><Trans i18nKey="hero.title">WE AUTOMATE THE WORLD </Trans></h2>
                <p className="hero__description"><Trans i18nKey="hero.description"></Trans></p>
            </div>
        </div>
        <div className="hero__bg" alt="sorter"></div>
    </section>
)

