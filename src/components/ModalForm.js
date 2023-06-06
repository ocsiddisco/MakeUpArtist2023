import Modal from "react-modal";
import { useState } from "react";

export default function ModalForm(props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseModal = () => {
    setIsOpen(false);
    props.onClose();
  };

  const customStyles = {
    overlay: { backgroundColor: "rgba(0, 0, 0, 0.6)" },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      zIndex: 50,
    },
  };
  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={handleCloseModal}
      style={customStyles}
    >
      <p>Hi there,</p>
      <p>
        This website is for learning purpose, no information were sent using
        this form. Thank you for testing the form and visiting my website!
      </p>
      <button onClick={handleCloseModal}>Close</button>
      {/* <button onClick={() => setIsOpen(false)}>Close</button> */}
    </Modal>
  );
}
