import { Trans } from "react-i18next"
import picture from '/projects/industry.png'
import css from "./IndustryMachines.module.css"
export const IndustryMachines = () => (
    <>
        <p>
            <Trans i18nKey="projectsInfo.industryMachines.description"></Trans>
        </p>
        <div className={css.image}>
            <img src={picture} alt="" />

        </div>
    </>
)