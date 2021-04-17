import React from "react";
import { useTranslation } from "react-i18next";
import { Button, Link } from "@chakra-ui/react";

const Voices = ({ onClose, onModalOpen }) => {
    const { t } = useTranslation();

    return (
        <ul className="list reset-list">
            <li className="list-item">
                <Link href="#who" className="link" onClick={onClose}>
                    {t("who_we_are")}
                </Link>
            </li>
            <li className="list-item">
                <Link href="#what" className="link" onClick={onClose}>
                    {t("what_is_demusic")}
                </Link>
            </li>
            <li className="list-item">
                <Link href="#perks" className="link" onClick={onClose}>
                    {t("perks")}
                </Link>
            </li>
            <li className="list-item">
                <Link href="#why" className="link" onClick={onClose}>
                    {t("why")}
                </Link>
            </li>
            <li className="list-item">
                <Button className="button" onClick={onModalOpen}>
                    {t("find_out_more")}
                </Button>
            </li>
        </ul>
    );
};

export default Voices;
