
import { Trans } from 'react-i18next'
import css from './OurServicesItem.module.css'
export const OurServicesItem = ({ transKey }) => (
    < li className={css.item} >

        <h3 className={css.title}><Trans i18nKey={transKey + ".title"} ></Trans></h3>
        <p className={css.description}>
            <Trans i18nKey={transKey + ".description"}></Trans>

            {/* {transKey.description} */}

        </p>
        <a className={css.link}><Trans i18nKey="learn"></Trans></a>
    </li >

)