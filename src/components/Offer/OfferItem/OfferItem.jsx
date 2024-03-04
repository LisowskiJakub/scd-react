
import { Trans } from 'react-i18next'
import css from './OfferItem.module.css'
export const OfferItem = ({ transKey }) => (
    < div className={css.item} >

        <h3 className={css.title}><Trans i18nKey={transKey + ".title"} ></Trans></h3>
        <p className={css.description}>
            <Trans i18nKey={transKey + ".description"}></Trans>

        </p>

    </div >

)