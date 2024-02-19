import { Outlet, NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import { Trans, } from 'react-i18next';
import css from './Nav.module.css'

export const Nav = () => {

    return (
        <div className={'menu'}>

            <NavLink className="menu__link" to='/Projects'><Trans i18nKey='nav.projects'>Projects</Trans></NavLink>
            <NavLink className="menu__link" to='/Services'><Trans i18nKey="nav.services">Services</Trans></NavLink>
            <NavLink className="menu__link" to='/AboutUs'><Trans i18nKey="nav.aboutUs">About us</Trans></NavLink>
            <NavLink className="menu__link" to='/Career'><Trans i18nKey="nav.career">Career</Trans></NavLink>


        </div>
    )
}