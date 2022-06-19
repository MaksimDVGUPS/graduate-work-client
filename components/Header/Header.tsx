import React from "react";
import cn from "classnames";
import styles from './Header.module.scss';
import Navigation from "../Navigation/Navigation";
import HeaderSearch from "../HeaderSearch/HeaderSearch";
import PhoneIcon from '../../public/img/phone.svg'
import OverflowedSpan from "../../ui-kit/OverflowedSpan/OverflowedSpan";
import Image from 'next/image'
import CartIcon from "../CartIcon/CartIcon";

const NavigationLinks = [
    {
        name: 'Каталог',
        link: '/catalog',
    },
    {
        name: 'Сервис',
        link: '/services',
    },
    // {
    //     name: 'SprutCAM',
    //     link: '/sprut-cam',
    // },
    {
        name: 'Статьи',
        link: '/articles',
    },
    {
        name: 'Покупателям',
        link: '/for-buyers',
    },
    {
        name: 'Контакты',
        link: '/contacts',
    },
]

const Header = () => {
    return (
        <header className={cn("section", styles.header)} id="header">
            <div className={cn("container", styles.headerContainer)}>
                <div className={styles.headerTop}>
                    <div className={styles.headerAddress}>
                        <OverflowedSpan text={'г. Хабаровск, ул. Союзная, д. 3Д, оф. 14'} />
                    </div>
                    <HeaderSearch />
                    <div className={styles.headerSocials}>
                        <a href="whatsapp.com" target='_blank'>
                            <svg viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg"
                                 id={styles.headerWhatsapp}>
                                <path
                                    d="M24 11.5004C24 17.8514 18.6275 23 11.9988 23C9.89525 23 7.91923 22.4804 6.19908 21.5704L1.97958 22.8646C0.974336 23.1729 0.0331321 22.2462 0.371669 21.2815L1.72095 17.4365C0.628915 15.7044 0 13.6705 0 11.4996C0.000797104 5.14858 5.37168 0 12.0004 0C18.6283 0.00153965 24 5.14935 24 11.5004ZM11.998 1.83372C6.43502 1.83372 1.90986 6.1709 1.90986 11.5027C1.90986 13.6182 2.62407 15.5766 3.83168 17.1701L2.57225 20.7598L6.44777 19.5704C8.04198 20.5804 9.94945 21.1686 11.998 21.1686C17.561 21.1686 22.0877 16.8322 22.0877 11.5004C22.0893 6.1709 17.5618 1.83372 11.998 1.83372ZM18.0592 14.1493C17.9843 14.0331 17.7882 13.9623 17.4948 13.8206C17.2023 13.679 15.754 12.9977 15.4853 12.9053C15.2143 12.8106 15.0182 12.7629 14.8221 13.0454C14.6285 13.3279 14.0641 13.9623 13.8911 14.1517C13.7198 14.3403 13.5484 14.3641 13.2542 14.2248C12.9601 14.0816 12.0116 13.786 10.8876 12.826C10.0132 12.0778 9.42257 11.1563 9.25199 10.8737C9.07901 10.592 9.23445 10.4396 9.38032 10.2995C9.51184 10.1724 9.67445 9.96998 9.82192 9.80447C9.96938 9.64049 10.018 9.52425 10.116 9.33564C10.2125 9.14704 10.1639 8.98306 10.0913 8.84065C10.018 8.699 9.43054 7.31332 9.18423 6.74904C8.93952 6.18553 8.69481 6.27868 8.52264 6.27868C8.35126 6.27868 8.15517 6.25558 7.95908 6.25558C7.763 6.25558 7.44415 6.32409 7.17553 6.60662C6.90691 6.88914 6.14647 7.57044 6.14647 8.95766C6.14647 10.3464 7.19944 11.6851 7.34691 11.873C7.49517 12.06 9.38271 15 12.3726 16.1286C15.3642 17.2564 15.3642 16.8799 15.903 16.8322C16.4435 16.7844 17.6439 16.1509 17.8878 15.4935C18.1333 14.8329 18.1333 14.2671 18.0592 14.1493Z"
                                    fill="#85999F"/>
                            </svg>
                        </a>
                        <a href="https://vk.com/cncrout" target='_blank'>
                            <svg viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg"
                                 id={styles.headerVk}>
                                <path d="M13 2.2523C16.2041 2.2523 17.5836 2.265 18.849 2.32514C20.019 2.38076 20.6544 2.5844 21.0773 2.75553C21.6373 2.98229 22.0371 3.25321 22.457 3.6906C22.8769 4.12799 23.137 4.54444 23.3546 5.12786C23.519 5.56837 23.7145 6.23024 23.7679 7.44893C23.8256 8.76705 23.8378 9.16236 23.8378 12.5C23.8378 15.8377 23.8256 16.233 23.7679 17.5511C23.7145 18.7698 23.519 19.4317 23.3546 19.8722C23.137 20.4556 22.8769 20.8721 22.457 21.3095C22.0371 21.7468 21.6373 22.0178 21.0773 22.2445C20.6544 22.4157 20.019 22.6193 18.849 22.6749C17.5838 22.7351 16.2043 22.7478 13 22.7478C9.79563 22.7478 8.41613 22.7351 7.15097 22.6749C5.98098 22.6193 5.34559 22.4157 4.92274 22.2445C4.36261 22.0178 3.96282 21.7468 3.54293 21.3095C3.12303 20.8721 2.86295 20.4556 2.64531 19.8722C2.48097 19.4317 2.28548 18.7698 2.23209 17.5511C2.17435 16.233 2.16216 15.8377 2.16216 12.5C2.16216 9.16236 2.17435 8.76705 2.23209 7.44898C2.28548 6.23024 2.48097 5.56837 2.64531 5.12786C2.86295 4.54444 3.12303 4.12799 3.54293 3.6906C3.96282 3.25321 4.36261 2.98229 4.92274 2.75553C5.34559 2.5844 5.98098 2.38076 7.15092 2.32514C8.41632 2.265 9.79582 2.2523 13 2.2523ZM13 0C9.74095 0 8.33234 0.0143895 7.05242 0.0752221C5.77511 0.135956 4.90283 0.347233 4.1395 0.656259C3.35039 0.975705 2.68118 1.40312 2.01406 2.09803C1.34695 2.79294 0.936629 3.49004 0.629961 4.31203C0.333296 5.10717 0.13047 6.01579 0.0721655 7.34632C0.0137662 8.67952 0 9.1052 0 12.5C0 15.8948 0.0137662 16.3205 0.0721656 17.6537C0.13047 18.9843 0.333296 19.8929 0.629961 20.688C0.936629 21.51 1.34695 22.2071 2.01406 22.902C2.68118 23.5969 3.35039 24.0243 4.1395 24.3438C4.90283 24.6528 5.77511 24.8641 7.05242 24.9248C8.33234 24.9857 9.74095 25 13 25C16.259 25 17.6677 24.9857 18.9475 24.9248C20.2248 24.8641 21.0971 24.6528 21.8605 24.3438C22.6496 24.0243 23.3188 23.5969 23.9859 22.902C24.653 22.2071 25.0633 21.51 25.37 20.688C25.6667 19.8929 25.8695 18.9843 25.9278 17.6537C25.9862 16.3205 26 15.8948 26 12.5C26 9.1052 25.9862 8.67952 25.9278 7.34632C25.8695 6.01579 25.6667 5.10717 25.37 4.31203C25.0633 3.49004 24.653 2.79294 23.9859 2.09803C23.3188 1.40312 22.6496 0.975705 21.8605 0.656259C21.0971 0.347233 20.2248 0.135956 18.9475 0.0752221C17.6677 0.0143895 16.259 0 13 0Z" fill="#85999F"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M19.5267 9.09376C19.6268 8.7592 19.5267 8.51336 19.0503 8.51336H17.4749C17.0744 8.51336 16.8897 8.72573 16.7896 8.95991C16.7896 8.95991 15.9884 10.9171 14.8535 12.1884C14.4864 12.5564 14.3194 12.6735 14.1192 12.6735C14.019 12.6735 13.8741 12.5564 13.8741 12.2219V9.09376C13.8741 8.69229 13.7578 8.51336 13.424 8.51336H10.9484C10.6981 8.51336 10.5476 8.69969 10.5476 8.87629C10.5476 9.25688 11.115 9.34465 11.1735 10.4152V12.7404C11.1735 13.2502 11.0816 13.3426 10.8813 13.3426C10.3473 13.3426 9.04819 11.3767 8.2777 9.1272C8.12671 8.68998 7.97526 8.51336 7.57264 8.51336H5.99727C5.54717 8.51336 5.45714 8.72573 5.45714 8.95991C5.45714 9.37812 5.99123 11.4524 7.94393 14.1957C9.24572 16.0692 11.0799 17.0848 12.7488 17.0848C13.7502 17.0848 13.8741 16.8592 13.8741 16.4707V15.0547C13.8741 14.6036 13.969 14.5136 14.2861 14.5136C14.5197 14.5136 14.9203 14.6306 15.8549 15.5339C16.9231 16.6045 17.0992 17.0848 17.7 17.0848H19.2754C19.7255 17.0848 19.9505 16.8592 19.8207 16.4141C19.6786 15.9704 19.1686 15.3268 18.4919 14.5637C18.1247 14.1288 17.574 13.6605 17.4071 13.4262C17.1734 13.1252 17.2402 12.9913 17.4071 12.7237C17.4071 12.7237 19.3264 10.0138 19.5267 9.09376Z" fill="#85999F"/>
                            </svg>
                        </a>
                        <a href="youtube.com" target='_blank'>
                            <svg viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                 id={styles.headerYoutube}>
                                <path
                                    d="M23.537 1.18877H6.76512C3.68154 1.18877 1.17754 3.83284 1.17754 7.07677V16.9029C1.17754 20.1475 3.68154 22.7909 6.76512 22.7909H23.537C26.6206 22.7909 29.1246 20.1469 29.1246 16.9029V7.07677C29.1246 3.83284 26.6206 1.18877 23.537 1.18877ZM27.888 16.9035C27.888 19.4391 25.9336 21.4969 23.537 21.4969H6.76512C4.36856 21.4969 2.41415 19.4385 2.41415 16.9035V7.07677C2.41415 4.5418 4.36856 2.48337 6.76512 2.48337H23.537C25.9336 2.48337 27.888 4.5418 27.888 7.07677V16.9035Z"
                                    fill="#85999F" stroke="#85999F" strokeWidth="0.1"/>
                                <path
                                    d="M23.5367 0.95H6.76489C3.5551 0.95 0.95 3.70173 0.95 7.07691V16.9031C0.95 20.2789 3.55512 23.03 6.76489 23.03H23.5367C26.7465 23.03 29.3516 20.2783 29.3516 16.9031V7.07691C29.3516 3.70173 26.7465 0.95 23.5367 0.95ZM27.6604 16.9037C27.6604 19.3082 25.8069 21.2582 23.5367 21.2582H6.76489C4.49471 21.2582 2.64124 19.3076 2.64124 16.9037V7.07691C2.64124 4.67301 4.49471 2.72242 6.76489 2.72242H23.5367C25.8069 2.72242 27.6604 4.67301 27.6604 7.07691V16.9037ZM6.76489 1.28891H23.5367C26.5602 1.28891 29.0243 3.88316 29.0243 7.07691V16.9031C29.0243 20.0968 26.5602 22.6911 23.5367 22.6911H6.76489C3.74145 22.6911 1.27732 20.0974 1.27732 16.9031V7.07691C1.27732 3.88316 3.74145 1.28891 6.76489 1.28891ZM23.5367 21.5971C25.9935 21.5971 27.9877 19.4894 27.9877 16.9037V7.07691C27.9877 4.49184 25.9935 2.38351 23.5367 2.38351H6.76489C4.30812 2.38351 2.31393 4.49184 2.31393 7.07691V16.9037C2.31393 19.4888 4.30812 21.5971 6.76489 21.5971H23.5367Z"
                                    fill="#85999F" stroke="#85999F" strokeWidth="0.1"/>
                                <path
                                    d="M12.3385 6.88433L12.3385 6.8843C12.1476 6.76707 11.9099 6.76507 11.7171 6.88107C11.5246 6.99685 11.407 7.21122 11.407 7.44237V17.1359C11.407 17.3665 11.5246 17.5814 11.7165 17.6972L11.7166 17.6973C11.8119 17.7545 11.9186 17.7832 12.0253 17.7832C12.1341 17.7832 12.242 17.7532 12.3385 17.694L12.3385 17.694L20.2123 12.8481C20.4016 12.7317 20.5174 12.5187 20.5174 12.2901C20.5174 12.0616 20.4023 11.8478 20.2122 11.7314L12.3385 6.88433ZM18.6791 12.2895L12.6436 16.0042V8.57356L18.6791 12.2895Z"
                                    fill="#85999F" stroke="#85999F" strokeWidth="0.1"/>
                                <path
                                    d="M20.1598 11.8167L20.1597 11.8167L12.2859 6.9696L20.1598 11.8167ZM20.1598 11.8167C20.3187 11.9141 20.4173 12.0946 20.4173 12.2901C20.4173 12.4856 20.3182 12.6656 20.1598 12.763L20.1597 12.763M20.1598 11.8167L20.1597 12.763M20.1597 12.763L12.286 17.6089M20.1597 12.763L12.286 17.6089M12.4532 6.67823L12.4532 6.67826L20.3265 11.525M12.4532 6.67823L20.3265 11.525M12.4532 6.67823C12.1925 6.51812 11.8678 6.5151 11.604 6.67381C11.3407 6.83217 11.1795 7.12569 11.1795 7.44246V17.136C11.1795 17.452 11.3409 17.7463 11.6035 17.9047L11.6036 17.9048C11.734 17.9831 11.8797 18.0222 12.0251 18.0222C12.1739 18.0222 12.3217 17.9809 12.4531 17.9003L12.4532 17.9002L12.4532 6.67823ZM20.3265 11.525L20.3266 11.5251C20.587 11.6847 20.7446 11.9774 20.7446 12.2901C20.7446 12.6037 20.5859 12.8951 20.327 13.0544C20.327 13.0544 20.327 13.0544 20.327 13.0544L20.3265 11.525ZM12.286 17.6089C12.2051 17.6584 12.1153 17.6833 12.0251 17.6833C11.9364 17.6833 11.8475 17.6595 11.7678 17.6116C11.6074 17.5148 11.5068 17.3332 11.5068 17.136V7.44246C11.5068 7.24475 11.6074 7.06371 11.7684 6.96685C11.9291 6.87022 12.1267 6.8718 12.2859 6.96957L12.286 17.6089ZM12.5434 16.0937V16.1832L12.6196 16.1363L18.8005 12.3321L18.8697 12.2896L18.8005 12.247L12.6196 8.44157L12.5434 8.39465V8.48415V16.0937ZM12.8707 8.99049L18.2291 12.2895L12.8707 15.5875V8.99049Z"
                                    fill="#85999F" stroke="#85999F" strokeWidth="0.1"/>
                            </svg>
                        </a>
                    </div>
                    <CartIcon />
                    <a href="tel:+7 (914) 421-10-90" className={styles.headerCallback}>
                        <Image src={PhoneIcon} alt="Позвонить" />
                    </a>
                    <div className={styles.headerPhone}>
                        <a href="tel:+7 (914) 421-10-90">+7 (914) 421-10-90</a>
                    </div>
                </div>
                <Navigation links={NavigationLinks} />
            </div>
        </header>
    )
}

export default Header;