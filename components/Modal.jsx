const Modal = ({handleModalClose}) => {
  return (
    <div
      className="fixed inset-0 z-50 bg-gray-500/50 transition-opacity duration-300 ease-in-out"
      onClick={handleModalClose}
    >
      <div className="flex items-center justify-center min-h-screen pt-4 px-4">
        <div className="w-full max-w-md bg-white rounded-lg p-8 shadow-lg text-center">
          <img
            className="mx-auto mb-4"
            src="/modalImage.png"
            alt="Success Icon"
          />
          <h2 className="text-xl font-semibold text-gray-800">Thank you!</h2>
          <h3 className="text-base text-gray-500 mt-2 leading-5">
            By making you voice heard, you help us improve Tribevibe.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Modal;
