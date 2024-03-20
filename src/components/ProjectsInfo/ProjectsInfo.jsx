import { Outlet, NavLink } from 'react-router-dom';
import { Trans, } from 'react-i18next';
import css from './ProjectsInfo.module.css'
import { useState } from 'react';
import { Intralogistics } from './Intralogistics/Intralogistics';
import { Automotive } from './Automotive/Automotive';
import { IndustryMachines } from './IndustryMachines/IndustryMachines';
import { Stats } from './Stats/Stats';



export const ProjectsInfo = () => {
    const [page, setPage] = useState(Intralogistics)
    const [activePage, setActivePage] = useState("intralogistics")
    const activeStyle = {
        color: '#8CB4F7',
    };

    const handleClick = (e) => {
        const activeElement = e.target.id;
        setActivePage(activeElement)
        if (activeElement == "intralogistics") {
            return setPage(Intralogistics)
        }
        else if (activeElement == "automotive") {
            return setPage(Automotive)
        }
        else if (activeElement == "industryMachines") {
            return setPage(IndustryMachines)
        }

    }
    return (
        <>
            <section className={css.section}>
                <div className={css.menu}>
                    <div className={css.wrapper} id="menuActive">
                        <button id='intralogistics' onClick={handleClick} style={activePage == "intralogistics" ? activeStyle : {}} className={css.link} ><Trans i18nKey='projectsInfo.intralogistics.title'></Trans></button>
                        <button id='automotive' onClick={handleClick} style={activePage == "automotive" ? activeStyle : {}} className={css.link}><Trans i18nKey="projectsInfo.automotive.title"></Trans></button>
                        <button id='industryMachines' onClick={handleClick} style={activePage == "industryMachines" ? activeStyle : {}} className={css.link}><Trans i18nKey="projectsInfo.industryMachines.title"> </Trans></button>
                    </div>
                    <div className={css.description}>
                        {page}
                    </div>
                </div>

            </section >
            <section className={css.statSection}>
                <div className={css.statWrapper}>
                    <Stats langKey={activePage} />

                </div>
            </section>
        </>
    )
}