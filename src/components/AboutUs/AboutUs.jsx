

import { HeroAboutUs } from "./HeroAboutUs/HeroAboutUs"
import { Trans } from "react-i18next"
import css from "./AboutUs.module.css"
import picture from "/team.png"
import { TimeLine } from "../TimeLine/TimeLine"
import { Philosophy } from "./Philosophy/Philosophy"





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
        <HeroAboutUs transKey={"heroMenu.aboutUs"} picture={picture} />
        <TimeLine></TimeLine>
        <Philosophy />

    </>
)