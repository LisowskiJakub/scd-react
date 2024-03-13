import css from './TimeLine.module.css'
import { useEffect, useState } from "react"
import { Trans } from 'react-i18next'
import { TimeLineElement } from './TimelLineElement/TimeLineElement'

export const TimeLine = () => {
    const [events, setEvents] = useState([])

    const fetchJson = () => {
        fetch('/locales/en/translation.json')
            .then(response => {
                return response.json();
            }).then(data => {
                setEvents(Object.values(data.events));
            }).catch((e) => {
                console.log(e.message);
            });
    }
    useEffect(() => {
        fetchJson()
    }, [])

    return (
        <>

            <h2 className={css.title}>
                <Trans i18nKey='timeLine.title'>xxx</Trans>
            </h2>

            {console.log(events)}
            {events.map((event) => (
                <>

                    <TimeLineElement langKey={event} key={event.id}></TimeLineElement>

                </>
            ))}

        </>

    )
}