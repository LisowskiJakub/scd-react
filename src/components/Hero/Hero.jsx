import HeroBg from '/hero_bg.png'
import { Trans } from 'react-i18next'


export const Hero = ({ transKey }) => (
    <section className="hero">
        <div className="hero__wrapper ">
            <div className="hero__content">
                <h2 className="hero__title"><Trans i18nKey={transKey + ".title"}></Trans></h2>
                <p className="hero__description"><Trans i18nKey={transKey + ".description"}></Trans></p>
            </div>
        </div>
        <div className="hero__bg" alt="sorter"></div>
    </section>
)

