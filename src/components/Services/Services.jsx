
import { HeroServices } from "./HeroServices/HeroServices"
import { Trans } from "react-i18next"
import css from "./Services.module.css"
import picture from "/robotarm.png"
import { Card } from "./Card/Card"
import electricImg from '/src/assets/img/electric.png'
import controlImg from '/src/assets/img/hmi.png'
import laptopImg from '/src/assets/img/laptop.png'
export const Services = () => (

    <>
        <section className={css.section}>
            <h2 className={css.title}>
                <Trans i18nKey={"section.ourServices.title"}></Trans>
            </h2>
            <p className={css.description}>
                <Trans i18nKey={"section.ourServices.description"}>
                </Trans>
            </p>
        </section>
        <HeroServices transKey={"heroMenu.services"} picture={picture} />
        <section className={css.cardsSection}>
            <Card picture={electricImg} langKey="services.electrical" />
            <Card picture={controlImg} position="right" langKey="services.control" />
            <Card picture={laptopImg} langKey="services.support" />
        </section>
    </>
)