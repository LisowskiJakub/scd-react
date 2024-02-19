import screen from '/svg/screen.svg'
import { Trans } from 'react-i18next'

export const OurServicesItem = ({ title, description }) => (

    <li className="ourServices__item">
        <img src={screen} />
        <h3>{title}</h3>
        <p>

            {description}

        </p>

    </li>

)