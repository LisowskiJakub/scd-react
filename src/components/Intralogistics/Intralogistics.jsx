import { Trans } from "react-i18next"
import picture from "/public/projects/intralogistics.png"
import css from "./Intralogistics.module.css"
export const Intralogistics = () => (
    <>
        <p>
            <Trans i18nKey="projectsInfo.intralogistics.description"></Trans>

        </p>
        <div className={css.image}>
            <img src={picture} alt="" />

        </div>
    </>

)