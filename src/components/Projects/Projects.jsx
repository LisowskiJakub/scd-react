
import { Trans } from "react-i18next"
import { ProjectsInfo } from "../ProjectsInfo/ProjectsInfo"
import { Outlet } from "react-router-dom"
import { WorldMap } from "../WorldMap/WorldMap"
import { MobileWorldMap } from "../MobileWorldMap/MobileWorldMap"
import { Gallery } from "../Gallery/Gallery"
import css from "./Projects.module.css"


export const Projects = () => (

    <>


        <section id="projects" className={css.section}>
            <h2 className={css.title}>
                <Trans i18nKey={"section.projects.title"}></Trans>
            </h2>
            <p className={css.description}>
                <Trans i18nKey={"section.projects.description"}>
                </Trans>
            </p>

        </section>
        <ProjectsInfo>
            <Outlet></Outlet>
        </ProjectsInfo>
        <Gallery />

        {window.innerWidth > 1080 ?
            <WorldMap simple={false} />
            :
            <MobileWorldMap simple={false} />}

    </>
)