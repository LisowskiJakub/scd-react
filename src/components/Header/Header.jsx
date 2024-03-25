
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
        <header className={'header'}>
            <div className={`container header__menu`}>
                <NavLink className="logo" to='/'>
                    <img src={Logo}></img>
                </NavLink>
                <Nav />
                <div className={'side-menu'}>
                    <div onClick={() => changeLanguage("pl")} className={'side-menu__link'}>PL</div>
                    <div onClick={() => changeLanguage("en")} className={'side-menu__link'}>EN</div>
                    <Link className={'side-menu__link accent'} to='/Contact'><Trans i18nKey="nav.contact">Contact</Trans></Link>
                </div>
            </div>
        </header>

    )
}