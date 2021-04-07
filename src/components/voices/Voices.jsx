import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@chakra-ui/react";

const Voices = ({ onModalOpen }) => {
    const { t } = useTranslation();

    return (
        <ul className="list reset-list">
            <li className="list-item">
                <a href="#who" className="link">
                    {t("who_we_are")}
                </a>
            </li>
            <li className="list-item">
                <a href="#what" className="link">
                    {t("what_is_demusic")}
                </a>
            </li>
            <li className="list-item">
                <a href="#perks" className="link">
                    {t("perks")}
                </a>
            </li>
            <li className="list-item">
                <a href="#why" className="link">
                    {t("why")}
                </a>
            </li>
            <li className="list-item">
                <Button className="button" onClick={() => onModalOpen()}>
                    {t("find_out_more")}
                </Button>
            </li>
        </ul>
    );
};

export default Voices;
