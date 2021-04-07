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
import SimpleBar from "simplebar-react";
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
                <SimpleBar className="scroll-container">
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
                                    value={
                                        emailSubscriptionForm.values.firstName
                                    }
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
                                        emailSubscriptionForm.values
                                            .privacyCheck
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
                            {/*<div id="mc_embed_signup_scroll">
                            <div className="indicates-required">
                                <span className="asterisk"></span> campi
                                obbligatori
                            </div>
                            <div className="mc-field-group">
                                <label htmlhtmlFor="mce-FNAME">
                                    Nome <span className="asterisk"></span>{" "}
                                </label>
                                <input
                                    type="text"
                                    value=""
                                    name="FNAME"
                                    className="required"
                                    id="mce-FNAME"
                                />
                            </div>
                            <div className="mc-field-group">
                                <label htmlhtmlFor="mce-EMAIL">
                                    Indirizzo email{" "}
                                    <span className="asterisk"></span>
                                </label>
                                <input
                                    type="email"
                                    value=""
                                    name="EMAIL"
                                    className="required email"
                                    id="mce-EMAIL"
                                />
                            </div>
                            <div
                                id="mergeRow-gdpr"
                                className="mergeRow gdpr-mergeRow content__gdprBlock mc-field-group"
                            >
                                <div className="content__gdpr">
                                    <label>Privacy Policy</label>
                                    <p></p>
                                    <fieldset
                                        className="mc_fieldset gdprRequired mc-field-group"
                                        name="interestgroup_field"
                                    >
                                        <label
                                            className="checkbox subfield"
                                            htmlhtmlFor="gdpr_45294"
                                        >
                                            <input
                                                type="checkbox"
                                                id="gdpr_45294"
                                                name="gdpr[45294]"
                                                value="Y"
                                                className="av-checkbox gdpr"
                                            />
                                            <span>
                                                Accetto la
                                                <a href="https://www.demusic.it/privacy-policy">
                                                    privacy policy
                                                </a>
                                            </span>
                                        </label>
                                    </fieldset>
                                    <p>
                                        Potrai disiscriverti in qualsiasi
                                        momento cliccando sul link nel footer
                                        delle nostre email. Per informazioni
                                        sulla nostra privacy policy ti preghiamo
                                        di visitare il nostro sito alla pagina
                                        dedicata.
                                    </p>
                                </div>
                                <div className="content__gdprLegal">
                                    <p>
                                        We use Mailchimp as our marketing
                                        platform. By clicking below to
                                        subscribe, you acknowledge that your
                                        information will be transferred to
                                        Mailchimp for processing.
                                        <a
                                            href="https://mailchimp.com/legal/"
                                            target="_blank"
                                        >
                                            Learn more about Mailchimp's privacy
                                            practices here.
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div id="mce-responses" className="clear">
                                <div
                                    className="response"
                                    id="mce-error-response"
                                ></div>
                                <div
                                    className="response"
                                    id="mce-success-response"
                                ></div>
                            </div>

                            <div aria-hidden="true">
                                <input
                                    type="text"
                                    name="b_b7e2d6033a631fd14ad6c9b26_f691003b9b"
                                    tabindex="-1"
                                    value=""
                                />
                            </div>
                            <div className="clear">
                                <input
                                    type="submit"
                                    value="Subscribe"
                                    name="subscribe"
                                    id="mc-embedded-subscribe"
                                    className="button"
                                />
                            </div>
                        </div>*/}
                        </form>
                    </div>
                </SimpleBar>
            </ModalBody>
            <ModalFooter></ModalFooter>
        </ModalContent>
    );
};

export default EmailSubscriptionModal;
