import Modal from "react-modal";

export default function ModalForm(props) {
  const handleCloseModal = () => {
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
      backgroundColor: "rgb(226, 200, 183)",
    },
  };
  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={handleCloseModal}
      style={customStyles}
    >
      <div className="text-center">
        <p>Hi there,</p>
        <p>
          This website is for learning purpose, no information were sent using
          this form. Thank you for testing the form and visiting my website!
        </p>
        <button
          className="text-orange-950 text-center"
          onClick={handleCloseModal}
        >
          Close
        </button>
      </div>
    </Modal>
  );
}
