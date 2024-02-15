import { Hero } from '../Hero/Hero'
import { OurServices } from '../OurServices/OurServices'
import elements1 from '../OurServices/OurServicesItems'


export const Home = () => (
    <>
        <Hero />
        <OurServices elements={elements1} />

    </>)