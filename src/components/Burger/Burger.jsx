import { NavLink } from "react-router-dom"
import css from './Burger.module.css'
import { useState } from "react"
import { Trans, useTranslation } from "react-i18next"
import { X, List } from "react-bootstrap-icons"


export const Burger = () => {
    const { t, i18n } = useTranslation();
    const changeLanguage = (language) => {
        i18n.changeLanguage(language)
    }
    const [isActive, setIsActive] = useState(false)

    const toggleActive = () => {
        setIsActive(!isActive)
        console.log('click')
    }
    return (
        <>
            <button className={css.burgerButton} onClick={toggleActive}>
                {isActive ? <X size={45} /> : <List size={45} />}
            </button>
            {isActive &&
                <div className={css.burgerMenu}>
                    <NavLink className={css.link} to='/Projects' onClick={toggleActive}><Trans i18nKey='nav.projects'>Projects</Trans></NavLink>
                    <NavLink className={css.link} to='/Services' onClick={toggleActive}><Trans i18nKey="nav.services">Services</Trans></NavLink>
                    <NavLink className={css.link} to='/AboutUs' onClick={toggleActive}><Trans i18nKey="nav.aboutUs">About us</Trans></NavLink>
                    <NavLink className={css.link} to='/Career' onClick={toggleActive}><Trans i18nKey="nav.career">Career</Trans></NavLink>
                    <NavLink className={css.link} to='/Contact' onClick={toggleActive}><Trans i18nKey="nav.contact">Contact</Trans></NavLink>
                    <div className={css.langWrapper}>
                        <div onClick={() => changeLanguage("pl")} className={css.sideMenu__link}>PL</div>
                        <div onClick={() => changeLanguage("en")} className={css.sideMenu__link}>EN</div>
                    </div>
                </div>
            }
        </>
    )
}