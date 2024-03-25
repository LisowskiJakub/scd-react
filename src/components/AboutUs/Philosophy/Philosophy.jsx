import { Trans } from 'react-i18next'
import css from "./Philosophy.module.css"
import picture from "/src/assets/img/boxes.png"


const PhilosophyItem = ({ transKey }) => (

    <div className={css.wrapper} >
        <div className={css.content}>
            <h3 className={css.title}><Trans i18nKey={transKey + ".title"}></Trans></h3>
        </div>
        <div className={css.content}>
            <p className={css.description}><Trans i18nKey={transKey + ".description"}></Trans></p>
        </div>
    </div>

)

export const Philosophy = () => (
    <section className={css.philosophy}>
        <PhilosophyItem transKey={"philosophy.vision"} />
        <PhilosophyItem transKey={"philosophy.mission"} />
        <PhilosophyItem transKey={"philosophy.values"} />
        <div className={css.image}>
            <img src={picture} alt="" />
        </div>
    </section>
)
