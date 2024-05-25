import "react";

const Modal = ({
  onClose,
  header,
  text,
}: {
  onClose: any;
  header: any;
  text: any;
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg">
        <button
          onClick={onClose}
          className="text-black text-2xl absolute top-2 right-2"
        >
          &times;
        </button>
        {header}
        {text}
      </div>
    </div>
  );
};

export default Modal;
