import { Trans } from 'react-i18next'
import css from "./HeroContact.module.css"
import mail from '/mail.svg'
import location from '/location.svg'
import phone from '/phone.svg'
import { theme } from '../../../Theme'



export const HeroContact = ({ picture }) => (
    <section className={css.hero}>
        <div className={css.wrapper} >
            <div className={css.image}>
                <img src={picture} alt="" />
            </div>
            <div className={css.content}>
                <h5 className={css.description}>SCD Automation</h5>
                <ul className={css.list}>
                    <li className={css.item}>
                        <img className={css.icon} src={location} alt="" />
                        <p>Klinkierowa 7,<br />
                            60-101 Poznań<br />
                            Poland</p>
                    </li>
                    <li className={css.item}>
                        <img className={css.icon} src={phone} /><p>+48 668 875 710</p>
                    </li>

                    <li className={css.item}>
                        <img className={css.icon} src={mail} />
                        <div className={css.duns}>
                            <a href="mailto:office@scd-automation.com">office@scd-automation.com</a>
                            <p>NIP:782-190-51-91</p>
                            <p>DUNS: 674393268</p>
                        </div>
                    </li>
                </ul>

            </div>
        </div>
    </section>
)
