import React from "react";
import { useTranslation } from "react-i18next";
import {
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Checkbox,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { mailchimpAction } from "../../imports/constants";

import "../../styles/components/emailSubscriptionModal.scss";

const EmailSubscriptionModal = ({}) => {
    const { t } = useTranslation();

    const defaultFormValues = {
        firstName: "",
        email: "",
        privacyCheck: false,
    };

    const emailSubscriptionForm = useFormik({
        initialValues: defaultFormValues,
        validationSchema: Yup.object().shape({
            firstName: Yup.string().required(),
            email: Yup.string().email().required(),
            privacyChec: Yup.bool().required(),
        }),
    });

    return (
        <ModalContent>
            <ModalHeader>
                <h2 className="title">{t("subscribe_to_news_letter")}</h2>
                <ModalCloseButton />
            </ModalHeader>
            <ModalBody>
                <div className="container-form">
                    <form
                        action={`${mailchimpAction.url}/subscribe/post`}
                        method="POST"
                        noValidate
                    >
                        <input
                            type="hidden"
                            name="u"
                            value={mailchimpAction.u}
                        />
                        <input
                            type="hidden"
                            name="id"
                            value={mailchimpAction.id}
                        />

                        <div className="wrapper-field">
                            <div className="label" htmlFor="fname">
                                {t("first_name")}
                            </div>
                            <input
                                type="text"
                                name="FNAME"
                                id="fname"
                                value={emailSubscriptionForm.values.firstName}
                                onChange={e =>
                                    emailSubscriptionForm.setFieldValue(
                                        "firstName",
                                        e.target.value,
                                    )
                                }
                                className="text-field"
                            />
                        </div>
                        <div className="wrapper-field">
                            <div className="label" htmlFor="email">
                                {t("email")}
                            </div>
                            <input
                                type="email"
                                name="EMAIL"
                                id="email"
                                value={emailSubscriptionForm.values.email}
                                onChange={e =>
                                    emailSubscriptionForm.setFieldValue(
                                        "email",
                                        e.target.value,
                                    )
                                }
                                className="text-field"
                            />
                        </div>
                        <div className="wrapper-field">
                            <Checkbox
                                name={"gdpr[45294]"}
                                value={
                                    emailSubscriptionForm.values.privacyCheck
                                }
                                onChange={value =>
                                    emailSubscriptionForm.setFieldValue(
                                        "privacyCheck",
                                        value.currentTarget.checked,
                                    )
                                }
                            >
                                <span>
                                    {t("accept_terms_and_conditions")}
                                    <a href="" className="link">
                                        {t("terms_and_conditions")}
                                    </a>
                                </span>
                            </Checkbox>
                        </div>
                        <input
                            type="submit"
                            name="subscribe"
                            value={t("subscribe")}
                            className="button"
                        />
                    </form>
                </div>
            </ModalBody>
            <ModalFooter></ModalFooter>
        </ModalContent>
    );
};

export default EmailSubscriptionModal;
