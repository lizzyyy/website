import React from "react";
import "./projects.css";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Image,
} from "@chakra-ui/react";

const ProjectModal = (
  title,
  modal_image1,
  modal_image2,
  modal_image3,
  modal_image4
) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className="project_button">
      <Button onClick={onOpen} className="btn" resetCSS={false}>
        Learn More
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} scrollBehavior={"inside"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image src={modal_image1} />
            <Image src={modal_image2} />
            <Image src={modal_image3} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ProjectModal;
