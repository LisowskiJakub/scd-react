import css from './TimeLine.module.css'
import { useEffect, useState } from "react"
import { Trans } from 'react-i18next'



const TimeLineElement = ({ langKey }) => (
    <div className={css.card}>
        <h6 className={css.month}>
            <Trans i18nKey={"events." + langKey.id + ".month"}></Trans>
        </h6>
        <p className={css.description}>
            <Trans i18nKey={"events." + langKey.id + ".description"}></Trans>
        </p>
    </div>
)


export const TimeLine = () => {
    let x = 2021
    const [events, setEvents] = useState([])
    const fetchJson = () => {
        fetch('src/locales/en/translation.json')
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


    const transformEventsToData = (events) => {
        const data = {};
        for (const eventId in events) {
            const event = events[eventId];
            const year = event.year;
            if (!data[year]) {
                data[year] = [];
            }
            data[year].push({
                id: event.id,
                month: event.month,
                description: event.description
            });
        }

        return data;
    }
    const data = transformEventsToData(events);


    console.log(data)


    return (
        <section className={css.timeLine}>
            <h2 className={css.title}>
                <Trans i18nKey='timeLine.title'></Trans>
            </h2>
            <div className={css.time} >

                <div className={css.line} ></div>
                <div className={css.wrapper}>

                    {Object.entries(data).map(([year, events]) => (
                        <>
                            <h4 className={`${css.element}  ${css.year}`}>
                                <div className={css.dot}></div>
                                <p>
                                    {year}
                                </p>
                            </h4>
                            {events.map((event) => (
                                <div className={css.element}>
                                    <div className={css.dot}></div>
                                    <TimeLineElement langKey={event} key={event.id}></TimeLineElement>
                                </div>
                            ))}
                        </>
                    ))}

                </div>
            </div>
        </section>

    )
}