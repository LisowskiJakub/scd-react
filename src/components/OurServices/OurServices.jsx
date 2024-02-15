import { OurServicesItem } from "./OurServicesItem"
import screen from '/svg/screen.svg'



export const OurServices = ({ elements }) => (

    <section className=" ourServices">
        <div className=" container ourServices__wrapper">
            <div className="ourServices__picture"></div>
            <div className="ourServices__content">
                <h2 className=" ourServices__title">Our services</h2>
                <ul className="ourServices__list">
                    {elements.map(({ title, description }) => (
                        <OurServicesItem title={title} description={description} key={title} />
                    )
                    )}
                </ul>
            </div>
        </div>
    </section>
)



