import screen from '/svg/screen.svg'

export const OurServicesItem = ({ title, description }) => (

    <li className="ourServices__item">
        <img src={screen} />
        <h3>{title}</h3>
        <p>{description}</p>

    </li>

)