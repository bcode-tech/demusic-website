import React from "react";
import { useTranslation } from "react-i18next";
import SimpleBar from "simplebar-react";
import {
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
} from "@chakra-ui/react";

import RenderTerms from "../renderTerms/RenderTerms";

const CookiePolicyModal = () => {
    const { t } = useTranslation();

    const cookiePolicyContent = t("cookiePolicy:content", {
        returnObjects: true,
    });

    return (
        <ModalContent>
            <ModalHeader>
                <h2 className="title">{t("cookie_policy")}</h2>
                <ModalCloseButton />
            </ModalHeader>
            <ModalBody>
                <SimpleBar className="scroll-container">
                    <div className="wrapper-content">
                        {Object.keys(cookiePolicyContent).map(key => {
                            return (
                                <section key={key} className="section">
                                    <h3 className="title">
                                        {cookiePolicyContent[key].title}
                                    </h3>
                                    {cookiePolicyContent[key].content && (
                                        <RenderTerms
                                            itemKey={key}
                                            content={
                                                cookiePolicyContent[key].content
                                            }
                                        />
                                    )}
                                </section>
                            );
                        })}
                    </div>
                </SimpleBar>
            </ModalBody>
        </ModalContent>
    );
};

export default CookiePolicyModal;
