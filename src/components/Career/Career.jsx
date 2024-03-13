
import { HeroCareer } from "./HeroCareer/HeroCareer"
import { Trans } from "react-i18next"
import css from "./Career.module.css"
import picture from "/office.png"
import linkedin from "/src/assets/svg/test.svg"



export const Career = () => (
    <>
        <section className={css.section}>
            <h2 className={css.title}>
                <Trans i18nKey={"section.career.title"}></Trans>
            </h2>
            <p className={css.description}>
                <Trans i18nKey={"section.career.description"}>
                </Trans>
            </p>
        </section>
        <HeroCareer transKey={"heroMenu.career"} picture={picture} />
        <section className={css.linkedin}>

            <Trans i18nKey={"section.career.linkedin"}>
            </Trans>
            <div className={css.wrapper}>
                <img className={css.icon} src={linkedin} ></img>
                <a className={css.link} href="https:\\www.linkedin.com/company/scd-automation/about/">www.linkedin.com/company/scd-automation/about/</a>
            </div>
        </section>
    </>
)