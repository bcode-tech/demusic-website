import React from "react";
import { useTranslation } from "react-i18next";
import {
    Button,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Switch,
} from "@chakra-ui/react";
import { find } from "lodash";

import { headerVoices } from "../../imports/config";

const CustomDrawer = ({ isOpen, onOpen, onClose, btnRef, onModalOpen }) => {
    const { t, i18n } = useTranslation();

    const actions = [
        {
            name: "more",
            action: () => {
                onClose();
                onModalOpen();
            },
        },
    ];

    return (
        <Drawer
            placement="right"
            onClose={onClose}
            isOpen={onOpen}
            finalFocusRef={btnRef}
        >
            <DrawerOverlay />
            <div className="drawer-content">
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerCloseButton />
                    </DrawerHeader>
                    <DrawerBody>
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
                    </DrawerBody>
                    <DrawerFooter>
                        <div className="container-language">
                            <p className="text">{t("en")}</p>
                            <div className="wrapper-switch">
                                <Switch
                                    isChecked={i18n.language === "it"}
                                    onChange={value =>
                                        value.currentTarget.checked
                                            ? i18n.changeLanguage("it")
                                            : i18n.changeLanguage("en")
                                    }
                                />
                            </div>
                            <p className="text">{t("it")}</p>
                        </div>
                    </DrawerFooter>
                </DrawerContent>
            </div>
        </Drawer>
    );
};

export default CustomDrawer;
