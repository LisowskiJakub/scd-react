import { Outlet, NavLink } from 'react-router-dom';
import { Suspense } from 'react';

import css from './Nav.module.css'

export const Nav = () => (
    <div className={'menu'}>

        <NavLink className="menu__link" to='/Projects'>Projects</NavLink>
        <NavLink className="menu__link" to='/Services'>Services</NavLink>
        <NavLink className="menu__link" to='/AboutUs'>About us</NavLink>
        <NavLink className="menu__link" to='/Career'>Career</NavLink>


    </div>
)