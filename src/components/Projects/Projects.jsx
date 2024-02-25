
import { Trans } from "react-i18next"
import css from "./Projects.module.css"
import { ProjectsInfo } from "../ProjectsInfo/ProjectsInfo"

export const Projects = () => (

    <>
        <section className={css.section}>
            <h2 className={css.title}>
                <Trans i18nKey={"section.projects.title"}></Trans>
            </h2>
            <p className={css.description}>
                <Trans i18nKey={"section.projects.description"}>
                </Trans>
            </p>
            <ProjectsInfo />
        </section>

    </>
)