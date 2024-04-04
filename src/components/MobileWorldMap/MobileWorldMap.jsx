import { useState } from 'react'
import { ChevronDown, ChevronUp } from "react-bootstrap-icons"
import { Trans } from 'react-i18next'
import css from './MobileWorldMap.module.css'
import world from '/src/assets/img/maps/world.png'
import usa from '/src/assets/img/maps/usa.png'
import europe from '/src/assets/img/maps/europe.png'
import places from './data.json'
import mobileMap from '/src/assets/img/mobileMap.png'





const MobileMapCard = ({ id, business, date, country, city, stuff }) => {

    const activeStyle = {
        border: `1px solid #0C5ADB `,
        borderRadius: `20px`
    };
    const [isActive, setIsActive] = useState(false)
    const triggerActive = () => setIsActive(!isActive)

    return (
        <div style={isActive ? activeStyle : {}} className={css.mobileMapCard} >
            <div className={css.bar}>
                <div className={css.country}>{country}</div>
                < div className={css.city}>{city}</div>
                <button className={css.buttonItem} onClick={triggerActive}>{isActive ? <ChevronUp size={25} strokeWidth={40} /> : <ChevronDown size={25} />}</button>
            </div>

            {isActive && <div className={css.content}>
                < div className={css.business}>{business}</div>
                <ul className={css.stuff}>{
                    stuff.map((el) => (<li key={id} className={css.stuffItem}>{el}</li>))}
                </ul>
                < div className={css.date}>{date}</div>
            </div>}

        </div>
    )
}

export const MobileWorldMap = ({ simple = true }) => {
    const [activePlace, setActivePlace] = useState("")
    const [map, setMap] = useState(world);

    return (
        <>
            {simple ? <section className={css.map}>

                <div className={css.picture} >
                    <img src={map}></img>
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
                    </div>
                    <ul className={css.list}>
                        {places.map(({ country, city, id, business, stuff, date }) => (
                            <MobileMapCard id={id} key={id} country={country} city={city} business={business} stuff={stuff} date={date} />
                        ))
                        }
                    </ul>
                </section>
            }
            <div className={css.worldMobile}>
                <img src={mobileMap} />
            </div>
        </>
    )
}

