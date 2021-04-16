import React, { cloneElement } from "react";
import { Modal, ModalOverlay } from "@chakra-ui/react";

const CustomModal = ({ isOpen, onClose, name, children, ...props }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <div className={`modal-content ${name ? name : ""}`}>
                {cloneElement(children, { ...props })}
            </div>
        </Modal>
    );
};

export default CustomModal;
