


import { Trans } from "react-i18next"
import css from "./AboutUs.module.css"


export const AboutUs = () => (

    <>
        <section className={css.section}>
            <h2 className={css.title}>
                <Trans i18nKey={"section.aboutUs.title"}></Trans>
            </h2>
            <p className={css.description}>
                <Trans i18nKey={"section.aboutUs.description"}>
                </Trans>
            </p>
        </section>

    </>
)