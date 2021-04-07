import React, { useRef, useEffect, useState } from "react";
import SimpleBar from "simplebar-react";
import { useTranslation } from "react-i18next";
import { useMedia } from "react-use";
import { useScrolling, useWindowSize } from "react-use";
import { useDisclosure, Button } from "@chakra-ui/react";

import "../i18n";

import { responsiveBreakpoints } from "../imports/constants";

import CustomDrawer from "../components/customDrawer/CustomDrawer";
import CustomModal from "../components/customModal/CustomModal";
import EmailSubscriptionModal from "../components/emailSubscriptionModal/EmailSubscriptionModal";
import Voices from "../components/voices/Voices";

import Logo from "../imports/assets/icons/logo.svg";
import Menu from "../imports/assets/icons/menu.svg";
import MoreOrLess from "../imports/assets/icons/more-or-less.svg";
import Cpr from "../imports/assets/icons/cpr.svg";
import Support from "../imports/assets/icons/support.svg";
import Incentives from "../imports/assets/icons/incentives.svg";
import Transparency from "../imports/assets/icons/transparency.svg";
import Facebook from "../imports/assets/icons/facebook.svg";
import Twitter from "../imports/assets/icons/twitter.svg";

import testimonial from "../imports/assets/images/testimonial.png";
import testimonialTwo from "../imports/assets/images/testimonial-two.png";
import testimonialThree from "../imports/assets/images/testimonial-three.png";

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
    const isWindowResizing = useWindowSize();

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

    const useOutsideAlerter = ref => {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setShowLanguageDropdown(false);
                }
            }

            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    };

    const btnRef = React.useRef();
    const languageDropdownRef = React.useRef();

    useOutsideAlerter(languageDropdownRef);

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
    }, [isScrolling, isWindowResizing.width]);

    useEffect(() => {
        if (isDrawerOpen) {
            if (isModalOpen) {
                onDrawerClose();
            }
        }
    }, [isDrawerOpen, isModalOpen]);

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
                        <Voices onModalOpen={onModalOpen} />
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
                                <ul
                                    className="list dropdown reset-list"
                                    ref={languageDropdownRef}
                                >
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
                                <h1 className="title">{t("slogan_main")}</h1>
                                <h2 className="subtitle">
                                    {t("slogan_subtitle")}
                                </h2>
                                <Button
                                    className="button"
                                    onClick={() => onModalOpen()}
                                >
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
                                    </a>
                                    <img
                                        src={testimonial}
                                        alt="testimonial"
                                        className="img"
                                    />
                                </div>
                            )}
                        </div>
                    </section>
                    <section
                        className={`who padding-${responsiveState}`}
                        id="who"
                    >
                        <h2 className="title">{t("who_we_are")}</h2>
                        <div className="container-content">
                            <div className="container-image">
                                <a
                                    href="https://it.freepik.com/foto/musica"
                                    className="link"
                                >
                                    <span className="text">
                                        Musica foto creata da cookie_studio -
                                        it.freepik.com
                                    </span>
                                </a>
                                <img
                                    src={testimonialTwo}
                                    alt="testimonial"
                                    className="img"
                                />
                            </div>
                            <div className="container-text">
                                <p className="text">
                                    {t("who_we_are_content_part_one")}
                                </p>
                                <p className="text">
                                    {t("who_we_are_content_part_two")}
                                </p>
                                <p className="text">
                                    {t("who_we_are_content_part_three")}
                                </p>
                                <Button
                                    className="button"
                                    onClick={() => onModalOpen()}
                                >
                                    {t("find_out_more")}
                                </Button>
                            </div>
                        </div>
                    </section>
                    <section
                        className={`what padding-${responsiveState}`}
                        id="what"
                    >
                        <h2 className="title">{t("what_is_demusic")}</h2>
                        <div className="container-content">
                            <div className="container-text">
                                <p className="text">
                                    {t("what_is_content_part_one")}
                                </p>
                                <p className="text">
                                    {t("what_is_content_part_two")}
                                </p>
                                <Button
                                    className="button"
                                    onClick={() => onModalOpen()}
                                >
                                    {t("find_out_more")}
                                </Button>
                            </div>
                            <div className="container-image">
                                <a
                                    href="https://it.freepik.com/foto/musica"
                                    className="link"
                                >
                                    <span className="text">
                                        Musica foto creata da cookie_studio -
                                        it.freepik.com
                                    </span>
                                </a>
                                <img
                                    src={testimonialThree}
                                    alt="testimonial"
                                    className="img"
                                />
                            </div>
                        </div>
                    </section>
                    <section
                        className={`perks padding-${responsiveState}`}
                        id="perks"
                    >
                        <h2 className="title">{t("perks_title")}</h2>
                        <div className="container-cards">
                            <div className="card">
                                <h3 className="title">
                                    {t("card_rights_title")}
                                </h3>
                                <div className="container-icon">
                                    <Cpr className="icon" />
                                </div>
                                <div className="text">
                                    {t("card_rights_content")}
                                </div>
                            </div>
                            <div className="card">
                                <h3 className="title">
                                    {t("card_support_title")}
                                </h3>
                                <div className="container-icon">
                                    <Support className="icon" />
                                </div>
                                <div className="text">
                                    {t("card_support_content")}
                                </div>
                            </div>
                            <div className="card">
                                <h3 className="title">
                                    {t("card_streamer_title")}
                                </h3>
                                <div className="container-icon">
                                    <Incentives className="icon" />
                                </div>
                                <div className="text">
                                    {t("card_streamer_content")}
                                </div>
                            </div>
                            <div className="card">
                                <h3 className="title">
                                    {t("card_trasparency_title")}
                                </h3>
                                <div className="container-icon">
                                    <Transparency className="icon" />
                                </div>
                                <div className="text">
                                    {t("card_trasparency_content")}
                                </div>
                            </div>
                        </div>
                    </section>
                    <section
                        className={`why padding-${responsiveState}`}
                        id="why"
                    >
                        <h2 className="title">{t("why_us_title")}</h2>
                        <p className="text">{t("why_us_content_part_one")}</p>
                        <p className="text">{t("why_us_content_part_two")}</p>
                        <Button
                            className="button"
                            onClick={() => onModalOpen()}
                        >
                            {t("find_out_more")}
                        </Button>
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
                    <div
                        className={`container-content padding-${responsiveState}`}
                    >
                        <Logo className="logo" />
                        <ul className="list wrapper-terms reset-list">
                            <li className="list-item">
                                <a href="" className="link">
                                    {t("terms_and_conditions")}
                                </a>
                            </li>
                            <li className="list-item">
                                <a href="" className="link">
                                    {t("privacy_policies")}
                                </a>
                            </li>
                            <li className="list-item">
                                <p className="text">Copyright © 2021 BCode</p>
                            </li>
                        </ul>
                        <ul className="list wrapper-socials reset-list">
                            <li className="list-item">
                                <a
                                    href="https://www.facebook.com/BCodeBlockchain"
                                    className="link"
                                >
                                    <Facebook className="icon" />
                                </a>
                            </li>
                            <li className="list-item">
                                <a
                                    href="https://www.linkedin.com/company/bcode-blockchain"
                                    className="link"
                                >
                                    <Twitter className="icon twitter" />
                                </a>
                            </li>
                        </ul>
                    </div>
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
