import { useState } from "react"
import { Trans } from "react-i18next"
import { ChevronDown, ChevronUp } from "react-bootstrap-icons"
import css from "./StatsMobile.module.css"
import { transformData, filterObjectByKey } from "../../../functions/dataFunctions"
import Data from '/src/locales/en/translation.json'

const StatItem = ({ id, langKey, numb }) => (
    <div className={css.item}>
        <div className={css.itemWrapper}>
            <p className={css.itemNumber}><Trans i18nKey={`projectsStats.${langKey}.${numb}.stats.${id}.number`}></Trans></p>
            <p className={css.itemDescription}><Trans i18nKey={`projectsStats.${langKey}.${numb}.stats.${id}.description`}></Trans></p>
        </div>
    </div>
)

export const StatsMobile = ({ langKey, color, picture }) => {

    const projects = transformData(Data.projectsStats)
    const project = (Object.values(filterObjectByKey(projects, langKey)))
    const arr = project[0]
    console.log(arr)

    const activeStyle = {
        color: `${color}`
    };
    const [isActive, setIsActive] = useState(false)
    const triggerActive = () => {
        setIsActive(!isActive)
    }

    return (

        <div className={css.section}>

            <div className={css.wrapper}>
                <h3 style={isActive ? activeStyle : {}} className={css.title}> <Trans i18nKey={`projectsInfo.${langKey}.title`}></Trans></h3>
                <button className={css.button} onClick={triggerActive}>{isActive ? <ChevronUp color={activeStyle.color} size={25} strokeWidth={40} /> : <ChevronDown size={25} color="#EEE" />}</button>
            </div>

            {isActive &&

                <>
                    < div className={css.description}>
                        <Trans i18nKey={`projectsInfo.${langKey}.description`} ></Trans>
                    </div>
                    <div className={css.image}>
                        <img src={picture}></img>
                    </div>
                    {arr.map((el) => (
                        <div className={css.statsWrapper}>
                            {console.log(el)}
                            <h5 className={css.subtitle}><Trans i18nKey={`projectsStats.${langKey}.${el.id}.title`}></Trans></h5>
                            <div className={css.scope}>
                                <h6><Trans i18nKey="scope"></Trans></h6>
                                <p className={css.scopeDescription}>
                                    <Trans i18nKey={`projectsStats.${langKey}.${el.id}.scopeDescription`}></Trans>
                                </p>
                            </div>
                            <div className={css.kpi}>
                                <h6><Trans i18nKey="kpi"></Trans></h6>
                                <p className={css.kpiDescription}>
                                    <Trans i18nKey={`projectsStats.${langKey}.${el.id}.kpiDescryption`}></Trans>
                                </p>
                            </div>
                            <div className={css.numbers}>
                                {Object.values(el.stats).map((_, index,) => (

                                    < StatItem numb={el.id} langKey={langKey} key={index} id={index} />
                                ))}
                            </div>
                        </div>
                    ))}

                </>}

        </div>
    )
}