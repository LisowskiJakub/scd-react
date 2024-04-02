import { useState } from "react"
import { Trans } from "react-i18next"
import { ChevronDown, ChevronUp } from "react-bootstrap-icons"
import css from "./StatsMobile.module.css"
import { transformData, filterObjectByKey } from "../../../functions/dataFunctions"
import Data from '/src/locales/en/translation.json'

const StatItem = ({ id, langKey, numb }) => (
    <div className={css.item}>
        <p className={css.itemNumber}><Trans i18nKey={`projectsStats.${langKey}.${numb}.stats.${id}.number`}></Trans></p>
        <p className={css.itemDescription}><Trans i18nKey={`projectsStats.${langKey}.${numb}.stats.${id}.description`}></Trans></p>
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

        <div className={css.element}>

            <div className={css.wrapper}>
                <h5 style={isActive ? activeStyle : {}} className={css.title}> <Trans i18nKey={`projectsInfo.${langKey}.title`}></Trans></h5>
                <button className={css.button} onClick={triggerActive}>{isActive ? <ChevronUp color={activeStyle.color} size={25} strokeWidth={40} /> : <ChevronDown size={25} />}</button>
            </div>

            {isActive &&

                <>
                    < div className={css.description}>
                        <Trans i18nKey={`projectsInfo.${langKey}.description`} >Opis</Trans>
                    </div>
                    <div className={css.image}>
                        <img src={picture}></img>
                    </div>
                    {arr.map((el, index) => (
                        <>
                            {console.log(el)}
                            <h3><Trans i18nKey={`projectsStats.${langKey}.${el.id}.title`}></Trans></h3>
                            <div className={css.scope}>
                                <h3><Trans i18nKey="scope"></Trans></h3>
                                <p className={css.description}>
                                    <Trans i18nKey={`projectsStats.${langKey}.${el.id}.scopeDescription`}></Trans>
                                </p>
                            </div>
                            <div className={css.kpi}>
                                <h3><Trans i18nKey="kpi"></Trans></h3>
                                <p className={css.description}>
                                    <Trans i18nKey={`projectsStats.${langKey}.${el.id}.kpiDescryption`}></Trans>
                                </p>
                            </div>
                            <div className={css.numbers}>
                                {Object.values(el.stats).map(({ number, description }, index,) => (

                                    < StatItem numb={el.id} langKey={langKey} key={index} id={index} />
                                ))}
                            </div>
                        </>
                    ))}

                </>}

        </div>
    )
}