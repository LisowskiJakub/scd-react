import { Trans } from 'react-i18next'
import css from "./HeroServices.module.css"




export const HeroServices = ({ transKey, picture }) => (
    <section className={css.hero}>
        <div className={css.wrapper} >
            <div className={css.content}>
                <p className={css.description}><Trans i18nKey={transKey + ".description"}></Trans></p>
            </div>
            <div className={css.image}>
                <img src={picture} alt="" />
            </div>
        </div>
    </section>
)
