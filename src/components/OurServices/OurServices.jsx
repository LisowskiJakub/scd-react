import { OurServicesItem } from "./OurServicesItem"
import css from './OurServices.module.css'
import cards from '../OurServices/OurServicesItems'
import { Trans } from "react-i18next"
import picture from '/packRobot.png'




export const OurServices = () => (

    <section className={css.ourServices}>
        <div className={css.wrapper}>
            <div className={css.picture}>
                <img src={picture}></img>
            </div>
            <div className={css.content}>
                <h2 className={css.title}><Trans i18nKey="ourServices.title">Our services</Trans></h2>
                <ul className={css.list}>

                    < OurServicesItem transKey={"ourServices.electrical"} />
                    < OurServicesItem transKey={"ourServices.control"} />
                    < OurServicesItem transKey={"ourServices.support"} />



                </ul>
            </div>
        </div>
    </section>
)



