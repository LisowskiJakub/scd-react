import css from './SectionTitle.module.css'
import { Trans } from "react-i18next"

export const SectionTitle = ({key}) => (
    <section className={css.section}>
        <h2 className={css.title}>
            <Trans i18nKey={key + ".title"}></Trans>
            <p>{key}</p>
            {console.log(key)}
        </h2>
        <p className={css.description}>
            <Trans i18nKey={{key} + ".description"}></Trans>
        </p>
        {console.log("test")}
        {console.log({key})}

    </section>
)