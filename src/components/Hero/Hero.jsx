import css from './Hero.module.css'
import { Trans } from 'react-i18next'


export const Hero = ({ transKey }) => (
    <section className={css.hero}>
        <div className={css.wrapper}>
            <div className={css.content}>
                <h2 className={css.title}><Trans i18nKey={transKey + ".title"}></Trans></h2>
                <p className={css.description}><Trans i18nKey={transKey + ".description"}></Trans></p>
            </div>
        </div>
        <div className={css.bg} alt="sorter"></div>
    </section>
)

