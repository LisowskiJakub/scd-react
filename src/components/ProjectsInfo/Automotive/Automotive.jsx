import { Trans } from "react-i18next"
import picture from "/projects/automotive.png"
import css from "./Automotive.module.css";
import { Stats } from "../Stats/Stats";
export const Automotive = () => (
    <>
        <p>
            <Trans i18nKey="projectsInfo.automotive.description"></Trans>
        </p>
        <div className={css.image}>
            <img src={picture} alt="" />
            <Stats></Stats>
        </div>

    </>
)