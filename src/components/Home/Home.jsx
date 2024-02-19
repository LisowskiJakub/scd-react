import { Hero } from '../Hero/Hero'
import { OurServices } from '../OurServices/OurServices'
import elements1 from '../OurServices/OurServicesItems'
import { WorldMap } from '../WorldMap/WorldMap'
import LogoCarousel from '../LogoCarousel/LogoCarousel'

export const Home = () => (
    <>
        <Hero />
        <OurServices elements={elements1} />
        <WorldMap />
        <LogoCarousel />
    </>)