
import { Trans } from 'react-i18next'
import css from './Robot.module.css'

export const Robot = () => (
    <section className={css.robot}>
        <div className={css.wrapper}>
            <div className={css.content}>
                <h2 className={css.title}><Trans i18nKey="robot.title"></Trans></h2>
                <p className={css.description}><Trans i18nKey="robot.description"></Trans></p>
            </div>
        </div>
        <div className={css.bg} alt="sorter"></div>
    </section>
)

