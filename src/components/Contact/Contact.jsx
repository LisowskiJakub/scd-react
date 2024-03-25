
import { HeroContact } from "./HeroContact/HeroContact"
import { Trans } from "react-i18next"
import css from "./Contact.module.css"
import picture from "/src/assets/img/building.png"
import MyMap from "../GoogleMap/GoogleMap"


export const Contact = () => (

    <>
        <section className={css.section}>
            <h2 className={css.title}>
                <Trans i18nKey={"section.contact.title"}></Trans>
            </h2>
            <p className={css.description}>
                <Trans i18nKey={"section.contact.description"}>
                </Trans>
            </p>
        </section>
        <HeroContact transKey={"heroMenu.contact"} picture={picture} />
        <div className={css.findUs} >
            <h2 className={css.subtitle}><Trans i18nKey="findUs"></Trans></h2>
        </div>
        <MyMap />

    </>
)