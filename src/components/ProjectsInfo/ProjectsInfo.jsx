import { Outlet, NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import { Trans, } from 'react-i18next';
import css from './ProjectsInfo.module.css'
import { Route, Routes } from "react-router-dom"
import { Automotive } from '../Automotive/Automotive';
import { IndustryMachines } from '../IndustryMachines/IndustryMachines';
import { Intralogistics } from '../Intralogistics/Intralogistics';
export const ProjectsInfo = () => {

    return (
        <section className={css.section}>
            <div className={css.menu}>
                <div className={css.wrapper} id="menuActive">
                    <NavLink className={css.link + " project__link"} to='intralogistics'><Trans i18nKey='projectsInfo.intralogistics.title'></Trans></NavLink>
                    <NavLink className={css.link + " project__link"} to='automotive'><Trans i18nKey="projectsInfo.automotive.title"></Trans></NavLink>
                    <NavLink className={css.link + " project__link"} to='industryMachines'><Trans i18nKey="projectsInfo.industryMachines.title"> </Trans></NavLink>
                </div>
                <div className={css.description}>
                    <Outlet></Outlet>
                </div>
            </div>


        </section>
    )
}