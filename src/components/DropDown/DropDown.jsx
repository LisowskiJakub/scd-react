import { useState } from "react"
import { Trans } from "react-i18next"
import { CaretDown, CaretUp } from "react-bootstrap-icons"
import { ChevronDown, ChevronUp } from "react-bootstrap-icons"
import css from "./DropDown.module.css"

export const DropDown = ({ transKey, color, children }) => {
    const activeStyle = {
        color: `${color}`
    };

    const [isActive, setIsActive] = useState(false)
    const triggerActive = () => {
        setIsActive(!isActive)
    }

    return (
        <div className={css.element}>
            {console.log(activeStyle.color)}
            <div className={css.wrapper}>
                <h5 style={isActive ? activeStyle : {}} className={css.title}> <Trans i18nKey={transKey + ".title"}>Title</Trans></h5>
                <button className={css.button} onClick={triggerActive}>{isActive ? <ChevronUp color={activeStyle.color} size={25} strokeWidth={40} /> : <ChevronDown size={25} />}</button>
            </div>
            {
                isActive &&
                <div className={css.description}>
                    <Trans i18nKey={transKey + ".description"} >description</Trans>
                </div>
            }
        </div >




    )
}