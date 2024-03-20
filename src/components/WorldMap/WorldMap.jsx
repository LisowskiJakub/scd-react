// import map from './world.svg'
import css from './WorldMap.module.css'
import { useState } from 'react'
import world from '/maps/world.png'
import usa from '/maps/usa.png'
import europe from '/maps/europe.png'
import places from './data.json'



const scrollIntoViewWithOffset = (selector, offset) => {
    window.scrollTo({
        behavior: 'smooth',
        top:
            document.querySelector(selector).getBoundingClientRect().top -
            document.body.getBoundingClientRect().top -
            offset,
    })
}


const PlaceItem = ({ position, country, city, id }) => (
    <div className={css.wrapper} style={{
        top: `${position.y}px`, left: `${position.x}px`
    }}>
        <div className={css.dot} onClick={() => {
            console.log(id)
            // setActivePlace(id)
            scrollIntoViewWithOffset(`#${id}`, 150)
        }}></div>
        <div className={css.description}>
            {country}, {city}
        </div>
    </div>
)

export const WorldMap = ({ simple = true }) => {
    const [activePlace, setActivePlace] = useState("id-10")
    const [map, setMap] = useState(world);
    console.log(places)




    return (
        simple ? <section className={css.map}>
            <div className={css.picture}>
                <img src={map}></img>

                {places.map(({ positionW, id, country, city }) => (

                    <PlaceItem position={positionW} key={id} country={country} city={city} />
                ))

                }
            </div>
        </section >
            : <section className={css.map}>
                <div className={css.menu}>
                    <button className={`${css.button} ${map == world && css.active}`} onClick={() => setMap(world)} >World</button>
                    <button className={`${css.button} ${map == europe && css.active}`} onClick={() => setMap(europe)} >Europe</button>
                    <button className={`${css.button} ${map == usa && css.active}`} onClick={() => setMap(usa)} >United States</button>
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
                            {console.log(typeof (id))}
                            <div className={css.country}>{country}</div>
                            < div className={css.city}>{city}</div>
                            < div className={css.business}>{business}</div>

                            <ul className={css.stuff}>{
                                stuff.map((el) => (<li className={css.stuffItem}>{el}</li>))}
                            </ul>
                            < div className={css.date}>{date}</div>
                        </li>

                    ))

                    }

                </ul>

            </section>
    )
}

