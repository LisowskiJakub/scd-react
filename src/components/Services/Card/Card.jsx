import { Trans } from "react-i18next"
import css from './Card.module.css'


export const Card = ({ id, picture, position, langKey, bottom }) => (
    <div id={id} className={css.card}>
        {position == "right" ?
            <>
                <div className={css.wrapper}>
                    <h2 className={css.title}><Trans i18nKey={langKey + ".title"}></Trans></h2>
                    <div className={css.description}><Trans i18nKey={langKey + ".description"}></Trans></div>
                </div>
                <img src={picture}></img>
            </>
            :
            <>
                <img src={picture} className={bottom && css.imgBottom}></img>
                <div className={css.wrapper}>
                    <h2 className={css.title}><Trans i18nKey={langKey + ".title"}></Trans></h2>
                    <div className={css.description}><Trans i18nKey={langKey + ".description"}></Trans></div>
                </div>
            </>}
    </div>

)