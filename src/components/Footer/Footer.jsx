import { NavLink } from 'react-router-dom'
import Facebook from '/svg/socials.svg#'
import { Trans } from 'react-i18next'


import Logo from '/LogoFooter.svg'

export const Footer = () => (

    <>
        <footer className="footer">
            <div className="container footer__wrapper">
                <div className="footer__leftSide">
                    <NavLink className="logo" to='/'>
                        <img src={Logo}></img>
                    </NavLink>
                    <p className="footer__description">
                        <Trans i18nKey="footer.description">

                        </Trans>
                    </p>
                    <p className="footer__copyRights">
                        <Trans i18nKey="footer.rights">
                            © 2024 SCD Automation sp. z o.o. All Rights Reserved.
                        </Trans>
                    </p>
                </div>
                <div className="footer__rightSide">
                    <h5 className="footer__title"><Trans i18nKey="footer.contact">Contact</Trans></h5>
                    <p className="footer__details">Klinkierowa 7,<br />
                        60-101 Poznań, Poland<br />
                        NIP: 782 29 05 191<br />
                        DUNS: 674393268</p>
                    <p className="footer__email">office@scd-automation.com</p>
                    <p className="footer__phone">+48 668 875 710</p>
                    <ul className="footer__links">
                        <li className="footer__item">
                            <a href="" className="footer__link">
                                <svg className="footer__svg">
                                    <use href="/svg/socials.svg#instagram"></use>
                                </svg>
                            </a>
                        </li>
                        <li className="footer__item">
                            <a href="" className="footer__link">
                                <svg className="footer__svg">
                                    <use href={Facebook}></use>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>

            </div>

        </footer>
    </>



)