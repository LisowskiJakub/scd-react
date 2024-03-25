import { OurServicesItem } from "./OurServicesItem"
import { Trans } from "react-i18next"
import css from './OurServices.module.css'
import picture from '/src/assets/img/packRobot.png'




export const OurServices = () => (

    <section className={css.ourServices}>
        <div className={css.wrapper}>
            <div className={css.picture}>
                <img src={picture}></img>
            </div>
            <div className={css.content}>
                <h2 className={css.title}><Trans i18nKey="ourServices.title">Our services</Trans></h2>
                <ul className={css.list}>

                    < OurServicesItem id={"electrical"} transKey={"ourServices.electrical"} />
                    < OurServicesItem id={"control"} transKey={"ourServices.control"} />
                    < OurServicesItem id={"support"} transKey={"ourServices.support"} />



                </ul>
            </div>
        </div>
    </section>
)



