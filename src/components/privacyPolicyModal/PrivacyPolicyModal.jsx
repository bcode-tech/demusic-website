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

const PrivacyPolicyModal = () => {
    const { t } = useTranslation();
    const privacyPolicyContent = t("privacyPolicy:content", {
        returnObjects: true,
    });

    console.log(privacyPolicyContent);

    return (
        <ModalContent>
            <ModalHeader>
                <h2 className="title">{t("privacy_policy")}</h2>
                <ModalCloseButton />
            </ModalHeader>
            <ModalBody>
                <SimpleBar className="scroll-container">
                    <div className="wrapper-content">
                        {Object.keys(privacyPolicyContent).map(key => {
                            return (
                                <section key={key} className="section">
                                    <h3 className="title">
                                        {privacyPolicyContent[key].title}
                                    </h3>
                                    {privacyPolicyContent[key].content && (
                                        <RenderTerms
                                            itemKey={key}
                                            content={
                                                privacyPolicyContent[key]
                                                    .content
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

export default PrivacyPolicyModal;
