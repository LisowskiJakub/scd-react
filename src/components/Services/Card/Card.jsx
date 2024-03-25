import { Trans } from "react-i18next"
import css from './Card.module.css'


export const Card = ({ id, picture, position, langKey, bottom }) => (
    <div id={id} className={css.Card}>

        <h2 className={css.title}><Trans i18nKey={langKey + ".title"}></Trans></h2>

        <div className={css.wrapper}>
            {position == "right" ?
                <>
                    <div className={css.description}><Trans i18nKey={langKey + ".description"}></Trans></div>
                    <img src={picture}></img>
                </>
                :
                <>

                    <img src={picture} className={bottom && css.imgBottom}></img>
                    <div className={css.description}><Trans i18nKey={langKey + ".description"}></Trans></div>
                </>}
        </div>
    </div>

)