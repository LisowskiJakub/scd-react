
import { NavLink, Link } from 'react-router-dom';
import css from './Header.module.css'
import { Nav } from '../Nav/Nav'
import Logo from '/src/assets/svg/Logo1.svg'
import { Trans, useTranslation } from 'react-i18next'



export const Header = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language)
    }

    return (
        <header className={css.header}>
            <div className={css.menu}>
                <NavLink className={css.logo} to='/'>
                    <img src={Logo}></img>
                </NavLink>
                <Nav />
                <div className={css.sideMenu}>
                    <div onClick={() => changeLanguage("pl")} className={css.sideMenu__link}>PL</div>
                    <div onClick={() => changeLanguage("en")} className={css.sideMenu__link}>EN</div>
                    <Link className={css.sideMenu__link__accent} to='/Contact'><Trans i18nKey="nav.contact">Contact</Trans></Link>
                </div>
            </div>
        </header>

    )
}