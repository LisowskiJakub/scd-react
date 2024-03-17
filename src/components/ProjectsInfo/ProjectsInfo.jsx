import { Outlet, NavLink } from 'react-router-dom';
import { Trans, } from 'react-i18next';
import css from './ProjectsInfo.module.css'
import { useState } from 'react';
import { Intralogistics } from './Intralogistics/Intralogistics';
import { Automotive } from './Automotive/Automotive';
import { IndustryMachines } from './IndustryMachines/IndustryMachines';





export const ProjectsInfo = () => {
    const [page, setPage] = useState(Intralogistics)
    const [activePage, setActivePage] = useState("Intralogistics")
    const activeStyle = {
        color: '#8CB4F7',
    };

    const handleClick = (e) => {
        const activeElement = e.target.id;
        setActivePage(activeElement)
        if (activeElement == "Intralogistics") {
            return setPage(Intralogistics)
        }
        else if (activeElement == "Automotive") {
            return setPage(Automotive)
        }
        else if (activeElement == "IndustryMachines") {
            return setPage(IndustryMachines)
        }

    }





    return (
        <section className={css.section}>
            <div className={css.menu}>
                <div className={css.wrapper} id="menuActive">
                    <button id='Intralogistics' onClick={handleClick} style={activePage == "Intralogistics" ? activeStyle : {}} className={css.link} ><Trans i18nKey='projectsInfo.intralogistics.title'></Trans></button>
                    <button id='Automotive' onClick={handleClick} style={activePage == "Automotive" ? activeStyle : {}} className={css.link}><Trans i18nKey="projectsInfo.automotive.title"></Trans></button>
                    <button id='IndustryMachines' onClick={handleClick} style={activePage == "IndustryMachines" ? activeStyle : {}} className={css.link}><Trans i18nKey="projectsInfo.industryMachines.title"> </Trans></button>
                </div>
                <div className={css.description}>
                    {page}
                </div>
            </div>


        </section >
    )
}