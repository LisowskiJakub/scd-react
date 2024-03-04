
import { HeroServices } from "./HeroServices/HeroServices"
import { Trans } from "react-i18next"
import css from "./Services.module.css"
import picture from "/robotarm.png"



export const Services = () => (

    <>        <section className={css.section}>
        <h2 className={css.title}>
            <Trans i18nKey={"section.ourServices.title"}></Trans>
        </h2>
        <p className={css.description}>
            <Trans i18nKey={"section.ourServices.description"}>
            </Trans>
        </p>
    </section>
        <HeroServices transKey={"heroMenu.services"} picture={picture} />

    </>
)