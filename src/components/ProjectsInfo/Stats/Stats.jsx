import { Trans } from "react-i18next"
import css from './Stats.module.css'
import data from '../../../locales/en/translation.json'

export const Stats = () => (
    <>
        <h2 className={css.title}><Trans i18nKey=".title"></Trans></ h2>
        <div className={css.scope}>XX</div>
        <div className={css.kpi}>XX</div>
        <div className={css.numbers}>
        </div>

    </>





)