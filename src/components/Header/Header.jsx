import propTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import css from './Header.module.css'
import { Nav } from '../Nav/Nav'
import Logo from '/Logo1.svg'

export const Header = () => (

    <header className={'header'}>
        <div className={`container header__menu`}>
            <NavLink className="logo" to='/'>
                <img src={Logo}></img>
            </NavLink>
            <Nav />
            <div className={'side-menu'}>
                <a href="" className={'side-menu__link'}>PL</a>
                <a href="" className={'side-menu__link'}>EN</a>
                <a href="" className={'side-menu__link accent'}>Contact</a>
            </div>
        </div>
    </header>

)