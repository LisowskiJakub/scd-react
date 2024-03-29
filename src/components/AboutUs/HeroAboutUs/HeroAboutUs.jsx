import { Trans } from 'react-i18next'
import css from "./HeroAboutUs.module.css"


export const HeroAboutUs = ({ transKey, picture }) => (
    <section className={css.hero}>
        <div className={css.wrapper} >
            <div className={css.content}>
                <h2 className={css.title}><Trans i18nKey={transKey + ".title"}></Trans></h2>
                <p className={css.description}><Trans i18nKey={transKey + ".description"}></Trans></p>
            </div>
            <div className={css.image}>
                <img src={picture} alt="" />
            </div>
        </div>
    </section>
)
