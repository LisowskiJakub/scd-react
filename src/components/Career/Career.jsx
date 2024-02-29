
import { HeroCareer } from "./HeroCareer/HeroCareer"
import { Trans } from "react-i18next"
import css from "./Career.module.css"
import picture from "/office.png"

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



    </>
)