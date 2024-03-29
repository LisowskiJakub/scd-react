import { Trans } from "react-i18next"
import picture from "/src/assets/img/intralogistics.png"
import css from "./Intralogistics.module.css"
export const Intralogistics = () => {
    return (
        <>
            <div className={css.wrapper}>
                <p>
                    <Trans i18nKey="projectsInfo.intralogistics.description"></Trans>
                </p>
                <div className={css.image}>
                    <img src={picture} alt="" />
                </div>
            </div>

        </>
    )
}