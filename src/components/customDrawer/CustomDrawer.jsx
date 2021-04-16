import React from "react";
import { useTranslation } from "react-i18next";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Switch,
} from "@chakra-ui/react";

import Voices from "../voices/Voices";

const CustomDrawer = ({ isOpen, onOpen, onClose, btnRef, onModalOpen }) => {
    const { t, i18n } = useTranslation();

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
                        <Voices onClose={onClose} onModalOpen={onModalOpen} />
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
