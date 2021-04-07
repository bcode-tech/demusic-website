import React, { useRef, useEffect, useState } from "react";
import SimpleBar from "simplebar-react";
import { useTranslation } from "react-i18next";
import { useMedia } from "react-use";
import { useScrolling } from "react-use";
import { useDisclosure, Button } from "@chakra-ui/react";
import { find } from "lodash";

import "../i18n";

import { responsiveBreakpoints } from "../imports/constants";
import { headerVoices } from "../imports/config";

import CustomDrawer from "../components/customDrawer/CustomDrawer";
import CustomModal from "../components/customModal/CustomModal";
import EmailSubscriptionModal from "../components/emailSubscriptionModal/EmailSubscriptionModal";

import Logo from "../public/assets/icons/logo.svg";
import Menu from "../public/assets/icons/menu.svg";
import MoreOrLess from "../public/assets/icons/more-or-less.svg";

import testimonial from "../public/assets/images/testimonial.png";

import "../styles/index.scss";
import "../styles/pages/home.scss";

function App() {
    const { t, i18n } = useTranslation();

    const scrollContainerRef = useRef(null);
    const headerRef = useRef(null);

    const isMobile = useMedia(`(max-width: ${responsiveBreakpoints.xs - 1}px)`);
    const isTablet = useMedia(`(max-width: ${responsiveBreakpoints.m - 1}px)`);
    const responsiveState = isMobile
        ? "mobile"
        : isTablet
        ? "tablet"
        : "desktop";

    const isScrolling = useScrolling(scrollContainerRef);

    const {
        isOpen: isDrawerOpen,
        onOpen: onDrawerOpen,
        onClose: onDrawerClose,
    } = useDisclosure();

    const {
        isOpen: isModalOpen,
        onOpen: onModalOpen,
        onClose: onModalClose,
    } = useDisclosure();

    const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

    const btnRef = React.useRef();

    const actions = [
        {
            name: "more",
            action: () => {
                onModalOpen();
            },
        },
    ];

    // set box shadow effect on header when scrolling
    useEffect(() => {
        if (scrollContainerRef?.current && headerRef?.current) {
            if (scrollContainerRef.current.scrollTop > 0) {
                if (!headerRef.current.classList.contains("scrolling")) {
                    headerRef.current.classList.add("scrolling");
                }
            } else {
                if (headerRef.current.classList.contains("scrolling")) {
                    headerRef.current.classList.remove("scrolling");
                }
            }
        }
    }, [isScrolling]);

    return (
        <div className="page">
            <header
                id="header"
                className={`${
                    isScrolling ? "scrolling" : ""
                } ${`padding-${responsiveState}`}`}
                ref={headerRef}
            >
                <Logo className="logo" />
                {responsiveState !== "desktop" ? (
                    <>
                        <Button
                            ref={btnRef}
                            colorScheme="teal"
                            onClick={onDrawerOpen}
                            className="button"
                        >
                            <Menu className="icon" />
                        </Button>
                    </>
                ) : (
                    <div className="wrapper-voices">
                        <ul className="list reset-list">
                            {headerVoices.map(voice => (
                                <li className="list-item" key={voice.name}>
                                    {voice.action ? (
                                        <Button
                                            className="button"
                                            onClick={
                                                find(
                                                    actions,
                                                    obj => obj.name === "more",
                                                ).action
                                            }
                                        >
                                            {t(voice.text)}
                                        </Button>
                                    ) : (
                                        <a href="" className="link">
                                            {t(voice.text)}
                                        </a>
                                    )}
                                </li>
                            ))}
                        </ul>
                        <div className="container-language">
                            <div
                                className="display-language"
                                onClick={() =>
                                    setShowLanguageDropdown(
                                        !showLanguageDropdown,
                                    )
                                }
                            >
                                <p className="text"> {t(i18n.language)} </p>
                                <MoreOrLess
                                    className={`icon ${
                                        showLanguageDropdown ? "less" : ""
                                    }`}
                                />
                            </div>
                            {showLanguageDropdown && (
                                <ul className="list dropdown reset-list">
                                    <li className="list-item">
                                        <Button
                                            className={`button ${
                                                i18n.language === "it"
                                                    ? "active"
                                                    : ""
                                            }`}
                                            onClick={() => {
                                                i18n.changeLanguage("it");
                                                setShowLanguageDropdown(false);
                                            }}
                                        >
                                            {t("italian")}
                                        </Button>
                                    </li>
                                    <li className="list-item">
                                        <Button
                                            className={`button ${
                                                i18n.language === "en"
                                                    ? "active"
                                                    : ""
                                            }`}
                                            onClick={() => {
                                                i18n.changeLanguage("en");
                                                setShowLanguageDropdown(false);
                                            }}
                                        >
                                            {t("english")}
                                        </Button>
                                    </li>
                                </ul>
                            )}
                        </div>
                    </div>
                )}
            </header>
            <SimpleBar
                className="scroll-container"
                scrollableNodeProps={{
                    ref: scrollContainerRef,
                }}
            >
                <main id="home">
                    <section className="hero">
                        <div
                            className={`container-content ${`padding-${responsiveState}`}`}
                        >
                            <div className="container-text">
                                <h1 className="title">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Etiam ac rutrum urna, id
                                    faucibus nisl.
                                </h1>
                                <h2 className="subtitle">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Etiam ac rutrum urna, id
                                    faucibus nisl. Curabitur sit amet magna et
                                    nunc mollis gravida quis ac dolor. Donec
                                    eget pretium lacus. Donec luctus cursus
                                    aliquam.
                                </h2>
                                <Button className="button">
                                    {t("find_out_more")}
                                </Button>
                            </div>
                            {responsiveState === "desktop" && (
                                <div className="container-image">
                                    <a
                                        href="https://it.freepik.com/foto/musica"
                                        className="link"
                                    >
                                        <span className="text">
                                            Musica foto creata da cookie_studio
                                            - it.freepik.com
                                        </span>
                                        <img
                                            src={testimonial}
                                            alt="testimonial"
                                            className="img"
                                        />
                                    </a>
                                </div>
                            )}
                        </div>
                    </section>
                    <section className={`perks padding-${responsiveState}`}>
                        <h2 className="title">{t("perks_title")}</h2>
                        <div className="container-cards">
                            <div className="card">
                                <h3 className="title">
                                    {t("card_rights_title")}
                                </h3>
                                <div className="icon"></div>
                                <div className="text">
                                    {t("card_rights_text")}
                                </div>
                            </div>
                            <div className="card">
                                <h3 className="title">
                                    {t("card_support_title")}
                                </h3>
                                <div className="icon"></div>
                                <div className="text">
                                    {t("card_support_text")}
                                </div>
                            </div>
                            <div className="card">
                                <h3 className="title">
                                    {t("card_streamer_title")}
                                </h3>
                                <div className="icon"></div>
                                <div className="text">
                                    {t("card_streamer_text")}
                                </div>
                            </div>
                            <div className="card">
                                <h3 className="title">
                                    {t("card_trasparency_title")}
                                </h3>
                                <div className="icon"></div>
                                <div className="text">
                                    {t("card_trasparency_text")}
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className={`why padding-${responsiveState}`}>
                        <h2 className="title">{t("why_us_title")}</h2>
                        <p className="text">{t("why_us_content_part_one")}</p>
                        <p className="text">{t("why_us_content_part_two")}</p>
                        <Button className="button">{t("find_out_more")}</Button>
                    </section>
                </main>
                <footer id="footer">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                        className="divider"
                    >
                        <path
                            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                            className="shape-fill"
                            fill="#3b3b3b"
                            fillOpacity="1"
                        ></path>
                    </svg>
                </footer>
                {isDrawerOpen && responsiveState !== "desktop" && (
                    <CustomDrawer
                        isOpen={isDrawerOpen}
                        onOpen={onDrawerOpen}
                        onClose={onDrawerClose}
                        btnRef={btnRef}
                        onModalOpen={onModalOpen}
                    />
                )}
                {isModalOpen && (
                    <CustomModal
                        isOpen={isModalOpen}
                        onOpen={onModalOpen}
                        onClose={onModalClose}
                    >
                        <EmailSubscriptionModal />
                    </CustomModal>
                )}
            </SimpleBar>
        </div>
    );
}
export default App;
