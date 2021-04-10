import React from "react";
import { useTranslation } from "react-i18next";
import { Button, Link } from "@chakra-ui/react";

const Voices = ({ onModalOpen }) => {
    const { t } = useTranslation();

    return (
        <ul className="list reset-list">
            <li className="list-item">
                <Link href="#who" className="link">
                    {t("who_we_are")}
                </Link>
            </li>
            <li className="list-item">
                <Link href="#what" className="link">
                    {t("what_is_demusic")}
                </Link>
            </li>
            <li className="list-item">
                <Link href="#perks" className="link">
                    {t("perks")}
                </Link>
            </li>
            <li className="list-item">
                <Link href="#why" className="link">
                    {t("why")}
                </Link>
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
