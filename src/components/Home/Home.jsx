import { Hero } from '../Hero/Hero'
import { OurServices } from '../OurServices/OurServices'
import { WorldMap } from '../WorldMap/WorldMap'
import { Robot } from '../Robot/Robot'
import { LogoCarusel } from '../LogoCarousel/LogoCarousel'
import { Offer } from '../Offer/Offer'

export const Home = () => (
    <>
        <Hero transKey={"hero"} />
        <OurServices />
        <LogoCarusel />
        <Robot />
        <Offer />
        <WorldMap />
    </>)