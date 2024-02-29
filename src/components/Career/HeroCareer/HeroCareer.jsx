import { Trans } from 'react-i18next'
import css from "./HeroCareer.module.css"

import { theme } from '../../../Theme'



export const HeroCareer = ({ transKey, picture }) => (
    <section className={css.hero}>
        <div className={css.wrapper} >
            <div className={css.content}>
                <h2 className={css.title}><Trans i18nKey={transKey + ".title"}></Trans></h2>
                <p className={css.description}><Trans i18nKey={transKey + ".description"}></Trans></p>
                <a className={css.email} href="mailto:office@scd-automation.com">office@scd-automation.com</a>
            </div>
            <div className={css.image}>
                <img src={picture} alt="" />
            </div>
        </div>
    </section>
)
