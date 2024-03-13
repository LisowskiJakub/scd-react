import Facebook from '/svg/socials.svg'
import { Trans } from 'react-i18next'
import Logo from '/LogoFooter.svg'
import css from './Footer.module.css'
const handleClick = (e) => {
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
    })
}

export const Footer = () => (

    <>
        <footer className={css.footer}>
            <div className={css.wrapper}>
                <div className={css.leftSide}>
                    <div className={css.logo} onClick={handleClick}>
                        <img src={Logo}></img>
                    </div>
                    <p className={css.description}>
                        <Trans i18nKey="footer.description">

                        </Trans>
                    </p>
                    <p className={css.copyRights}>
                        <Trans i18nKey="footer.rights">
                            © 2024 SCD Automation sp. z o.o. All Rights Reserved.
                        </Trans>
                    </p>
                </div>
                <div className={css.rightSide}>
                    <h5 className={css.title}><Trans i18nKey="footer.contact">Contact</Trans></h5>
                    <p className={css.details}>Klinkierowa 7,<br />
                        60-101 Poznań, Poland<br />
                        NIP: 782 29 05 191<br />
                        DUNS: 674393268</p>
                    <p className={css.email}>office@scd-automation.com</p>
                    <p className={css.phone}>+48 668 875 710</p>
                    <ul className={css.links}>
                        <li className={css.item}>
                            <a href="" className={css.link}>
                                <svg className={css.svg}>
                                    <use href="/svg/socials.svg#instagram"></use>
                                </svg>
                            </a>
                        </li>
                        <li className={css.item}>
                            <a href="" className={css.link}>
                                <svg className={css.svg}>
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