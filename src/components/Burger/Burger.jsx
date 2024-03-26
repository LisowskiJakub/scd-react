import { Nav } from "../Nav/Nav"
import { NavLink } from "react-router-dom"
import css from './Burger.module.css'
import { useState } from "react"
import { Trans } from "react-i18next"

export const Burger = () => {

    const [isActive, setIsActive] = useState(false)


    const toggleActive = () => {
        setIsActive(!isActive)
        console.log('click')
    }

    return (
        <>
            <button className={css.burgerButton} onClick={toggleActive}>
            </button>
            {isActive &&
                <div className={css.burgerMenu}>
                    <NavLink className={css.link} to='/Projects' onClick={toggleActive}><Trans i18nKey='nav.projects'>Projects</Trans></NavLink>
                    <NavLink className={css.link} to='/Services' onClick={toggleActive}><Trans i18nKey="nav.services">Services</Trans></NavLink>
                    <NavLink className={css.link} to='/AboutUs' onClick={toggleActive}><Trans i18nKey="nav.aboutUs">About us</Trans></NavLink>
                    <NavLink className={css.link} to='/Career' onClick={toggleActive}><Trans i18nKey="nav.career">Career</Trans></NavLink>
                    <NavLink className={css.link} to='/Contact' onClick={toggleActive}><Trans i18nKey="nav.contact">Contact</Trans></NavLink>
                </div>
            }
        </>
    )
}