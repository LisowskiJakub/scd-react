import { HeroServices } from "./HeroServices/HeroServices"
import { Trans } from "react-i18next"
import { Card } from "./Card/Card"
import { DropDown } from "../DropDown/DropDown"
import css from "./Services.module.css"
import electricImg from '/src/assets/img/electrical.jpg'
import controlImg from '/src/assets/img/control.jpg'
import supportImg from '/src/assets/img/support.jpg'
import picture from "/src/assets/img/services.jpg"

export const Services = () => {


    return (
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

            {window.innerWidth > 1080 ?
                <section className={css.cardsSection}>
                    <Card id={"electrical"} picture={electricImg} langKey="services.electrical" />
                    <Card id={"control"} picture={controlImg} position="right" langKey="services.control" />
                    <Card id={"support"} picture={supportImg} langKey="services.support" />
                </section>
                :
                <section className={css.mobileCardsSection}>
                    <DropDown id={"electrical"} transKey={"services.electrical"} picture={electricImg} />
                    <DropDown id={"control"} transKey={"services.control"} picture={controlImg} />
                    <DropDown id={"support"} transKey={"services.support"} picture={supportImg} />
                </section>
            }
        </>
    )
}