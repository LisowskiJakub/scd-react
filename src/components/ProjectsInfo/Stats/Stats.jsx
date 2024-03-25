import { Trans } from "react-i18next"
import css from './Stats.module.css'
import Data from '../../../locales/en/translation.json'

const StatItem = ({ id, langKey, numb }) => (

    <div className={css.item}>
        <p className={css.itemNumber}><Trans i18nKey={`projectsStats.${langKey}.${numb}.stats.${id}.number`}></Trans></p>
        <p className={css.itemDescription}><Trans i18nKey={`projectsStats.${langKey}.${numb}.stats.${id}.description`}></Trans></p>
    </div>
)
const transformData = (inputData) => {
    const transformedData = {};

    for (const category in inputData) {
        if (inputData.hasOwnProperty(category)) {
            transformedData[category] = Object.keys(inputData[category]).map(subcategory => {
                return inputData[category][subcategory];
            });
        }
    }

    return transformedData;
}

function filterObjectByKey(obj, keyToFilter) {
    if (typeof obj !== 'object' || obj === null) {
        return {};
    }
    const filteredObject = {};
    for (let key in obj) {
        if (key === keyToFilter) {
            filteredObject[key] = obj[key];
        }
    }
    return filteredObject;
}

export const Stats = ({ langKey }) => {
    const projects = transformData(Data.projectsStats)
    const project = (Object.values(filterObjectByKey(projects, langKey)))
    const arr = project[0]
    return (
        <div className={css.stat}>
            <>
                {arr.map((el) => (
                    <>
                        <h2 className={css.title}><Trans i18nKey={`projectsStats.${langKey}.${el.id}.title`}></Trans></ h2>
                        <div className={css.wrapper}>
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
                        </div>
                    </>
                ))}
            </>
        </div >

    )
}