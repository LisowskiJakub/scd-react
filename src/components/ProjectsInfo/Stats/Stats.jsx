import { Trans } from "react-i18next"
import css from './Stats.module.css'





const StatItem = ({ numbers, description }) => (

    <div className={css.item}>
        <p className={css.number}></p>
        <p className={css.description}></p>
    </div>

)



export const Stats = ({ stats, langKey }) => (
    <div className={css.stat}>

        <h2 className={css.title}><Trans i18nKey={langKey + ".title"}></Trans></ h2>
        <div className={css.wrapper}>

            <div className={css.scope}>
                <h3><Trans i18nKey="projecstStats.scope"></Trans></h3>
                <p className={css.description}>
                    <Trans i18nKey={langKey + ".scopeDescription"}></Trans>
                </p>
            </div>

            <div className={css.kpi}>
                <h3><Trans i18nKey="projecstStats.kpi"></Trans></h3>
                <p className={css.description}>
                    <Trans i18nKey={langKey + ".kpiDescryption"}></Trans>
                </p>
            </div>

            <div className={css.numbers}>
                {/* {stats.map(e => (
                    <StatItem />



                ))} */}
            </div>
        </div>

    </div >

)