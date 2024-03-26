import { Trans } from 'react-i18next'
import Logo from '/src/assets/svg/LogoFooter.svg'
import css from './Footer.module.css'
import fbIcon from '/src/assets/svg/facebook.svg'
import inIcon from '/src/assets/svg/linkedin1.svg'



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
                    <p className={css.details}>Klinkierowa 7<br />
                        60-101 Poznań, Poland<br />
                        NIP: 782 29 05 191<br />
                        DUNS: 674393268</p>
                    <a href="mailto:office@scd-automation.com" className={css.email}>office@scd-automation.com</a>
                    <a href="tel:+48668875710" className={css.phone}>+48 668 875 710</a>
                    <ul className={css.links}>
                        <li className={css.item}>
                            <a href="https://www.linkedin.com/company/scd-automation" className={css.link}>

                                <img src={inIcon}></img>

                            </a>
                        </li>
                        <li className={css.item}>
                            <a href="https://www.facebook.com/profile.php?id=100083203395064" className={css.link}>

                                <img src={fbIcon}></img>

                            </a>
                        </li>
                    </ul>
                    <p className={css.copyRights__mobile}>
                        <Trans i18nKey="footer.rights">
                            © 2024 SCD Automation sp. z o.o. All Rights Reserved.
                        </Trans>
                    </p>
                </div>

            </div>

        </footer>
    </>



)