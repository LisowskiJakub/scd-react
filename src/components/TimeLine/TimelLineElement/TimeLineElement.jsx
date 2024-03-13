import css from './TimeLineElement.module.css'
import { Trans } from 'react-i18next'

export const TimeLineElement = ({ langKey }) => (
    <div className={css.element}>
        <h6 className={css.month}>
            <Trans i18nKey={"events." + langKey.id + ".month"}></Trans>
        </h6>
        <p className={css.description}>
            <Trans i18nKey={"events." + langKey.id + ".description"}></Trans>
        </p>
    </div>
)