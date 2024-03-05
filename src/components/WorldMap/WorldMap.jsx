// import map from './world.svg'
import css from './WorldMap.module.css'
import { useState } from 'react'
import world from '/maps/world.png'
import usa from '/maps/usa.png'
import europe from '/maps/europe.png'
import places from './data.json'



export const WorldMap = () => {

    const [map, setMap] = useState(world);


    const handleClick = (e) => (
        console.log(e)
    )

    return (
        <section className={css.map}>
            <div className={css.menu}>
                <button className={css.button} onClick={() => setMap(world)} >World</button>
                <button className={css.button} onClick={() => setMap(europe)} >Europe</button>
                <button className={css.button} onClick={() => setMap(usa)} >United States</button>
            </div>
            <div className={css.picture}>
                <img src={map}></img>
                {places.map(({ positionW, id }) => (<div key={id} className={css.dot} style={{
                    top: `${positionW.y}px`, left: `${positionW.x}px`
                }}>
                    {console.log(positionW.x)}

                </div>))}

            </div>
            <ul className={css.list}>
                {places.map(({ country, city, id, business, stuff, date }) => (
                    <li key={id} className={css.item} onClick={handleClick}>
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

