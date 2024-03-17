import { Trans } from "react-i18next"
import picture from "/projects/automotive.png"
import css from "./Automotive.module.css";

export const Automotive = () => (
    <>
        <p>
            <Trans i18nKey="projectsInfo.automotive.description"></Trans>
        </p>
        <div className={css.image}>
            <img src={picture} alt="" />

        </div>

    </>
)