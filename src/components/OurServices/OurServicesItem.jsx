
import { Trans } from 'react-i18next'
import css from './OurServicesItem.module.css'
import { Link } from 'react-router-dom'


export const OurServicesItem = ({ transKey, id }) => (


    < li className={css.item} >
        <h3 className={css.title}><Trans i18nKey={transKey + ".title"} ></Trans></h3>
        <p className={css.description}>
            <Trans i18nKey={transKey + ".description"}></Trans>
        </p>
        <Link to={"/Services#" + id} className={css.link}   ><Trans i18nKey="learn"></Trans></Link>
    </li >

)
