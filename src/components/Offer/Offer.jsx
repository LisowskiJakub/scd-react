import { OfferItem } from './OfferItem/OfferItem'
import css from './Offer.module.css'



export const Offer = () => (

    <section className={css.offer}>
        <div className={css.wrapper}>

            < OfferItem transKey={"offer.engineering"} />
            < OfferItem transKey={"offer.electrical"} />
            < OfferItem transKey={"offer.programming"} />
            < OfferItem transKey={"offer.installations"} />
            < OfferItem transKey={"offer.support"} />

        </div>
    </section>
)



