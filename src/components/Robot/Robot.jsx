
import { Trans } from 'react-i18next'


export const Robot = () => (
    <section className="robot">
        <div className="robot__wrapper ">
            <div className="robot__content">
                <h2 className="robot__title"><Trans i18nKey="robot.title"></Trans></h2>
                <p className="robot__description"><Trans i18nKey="robot.description"></Trans></p>
            </div>
        </div>
        <div className="robot__bg" alt="sorter"></div>
    </section>
)

