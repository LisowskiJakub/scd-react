import { OfferItem } from './OfferItem/OfferItem'
import css from './Offer.module.css'
import { DropDown } from '../DropDown/DropDown'


export const Offer = () => (

    <section className={css.offer}>
        <div className={css.wrapper}>
            < OfferItem transKey={"offer.engineering"} />
            < OfferItem transKey={"offer.electrical"} />
            < OfferItem transKey={"offer.programming"} />
            < OfferItem transKey={"offer.installations"} />
            < OfferItem transKey={"offer.support"} />
        </div>
        <div className={css.mobileWrapper}>
            <DropDown color="#0C5ADB" transKey={"offer.engineering"} />
            <DropDown color="#0C5ADB" transKey={"offer.electrical"} />
            <DropDown color="#0C5ADB" transKey={"offer.programming"} />
            <DropDown color="#0C5ADB" transKey={"offer.installations"} />
            <DropDown color="#0C5ADB" transKey={"offer.support"} />
        </div>
    </section>
)



