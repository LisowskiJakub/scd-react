import { useState } from 'react'
import { scrollIntoViewWithOffset } from '../../functions/navFunctions'
import { Trans } from 'react-i18next'
import css from './WorldMap.module.css'
import world from '/src/assets/img/maps/world.png'
import usa from '/src/assets/img/maps/usa.png'
import europe from '/src/assets/img/maps/europe.png'
import places from './data.json'



const PlaceItem = ({ position, country, city, id }) => (
    <div className={css.wrapper} style={{
        top: `${position.y}px`, left: `${position.x}px`
    }}>
        <div className={css.dot} onClick={() => {
            scrollIntoViewWithOffset(`#${id}`, 130)
        }}></div>
        <div className={css.description}>
            {country}, {city}
        </div>
    </div>
)

export const WorldMap = ({ simple = true }) => {
    const [activePlace, setActivePlace] = useState("id-10")
    const [map, setMap] = useState(world);

    return (
        simple ? <section className={css.map}>
            <div className={css.picture} >
                <img src={map}></img>

                {places.map(({ positionW, id, country, city }) => (

                    <PlaceItem position={positionW} key={id} country={country} city={city} >

                    </PlaceItem>
                ))

                }
            </div>
        </section >
            : <section className={css.map}>
                <div className={css.menu}>
                    <button className={`${css.button} ${map == world && css.active}`} onClick={() => setMap(world)} ><Trans i18nKey="worldmap.world"></Trans></button>
                    <button className={`${css.button} ${map == europe && css.active}`} onClick={() => setMap(europe)} ><Trans i18nKey="worldmap.europe"></Trans></button>
                    <button className={`${css.button} ${map == usa && css.active}`} onClick={() => setMap(usa)} ><Trans i18nKey="worldmap.usa"></Trans></button>
                </div>
                <div className={css.picture}>
                    <img src={map}></img>

                    {map == world ?
                        <>
                            {places.map(({ positionW, id, country, city }) => (
                                <PlaceItem id={id} position={positionW} key={id} country={country} city={city} />
                            ))}
                        </>
                        : <>
                            {places.filter(el => (map == usa) ? (el.country == "US") : (el.country !== "US")
                            )
                                .map(({ position, id, country, city }) => (
                                    <PlaceItem id={id} position={position} key={id} country={country} city={city} />
                                ))}
                        </>
                    }



                </div>
                <ul className={css.list}>
                    {places.map(({ country, city, id, business, stuff, date }) => (
                        <li id={id} key={id} className={`${css.item} ${activePlace == { id } && css.activePlace}`} >
                            <div className={css.country}>{country}</div>
                            < div className={css.city}>{city}</div>
                            < div className={css.business}>{business}</div>
                            <ul className={css.stuff}>{
                                stuff.map((el) => (<li key={id} className={css.stuffItem}>{el}</li>))}
                            </ul>
                            < div className={css.date}>{date}</div>
                        </li>

                    ))

                    }

                </ul>

            </section>
    )
}

