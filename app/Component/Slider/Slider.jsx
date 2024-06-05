import { useState } from 'react';
import Image from 'next/image';

const images = [
  '/images/img1.jpg',
  '/images/img2.jpg',
  '/images/img3.jpg',
  '/images/img4.jpg',
  '/images/img5.jpg',
];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const openModal = (image) => {
    setModalImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div className="flex overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`w-full flex-none transition-transform duration-500 transform ${
              current === index ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <Image
              src={image}
              alt={`Image ${index + 1}`}
              width={500}
              height={300}
              onClick={() => openModal(image)}
              className="cursor-pointer"
            />
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white text-black p-2"
        onClick={prevSlide}
      >
        Prev
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white text-black p-2"
        onClick={nextSlide}
      >
        Next
      </button>

      <div className="flex justify-center mt-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full mx-1 cursor-pointer ${
              current === index ? 'bg-black' : 'bg-gray-400'
            }`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-4">
            <Image src={modalImage} alt="Modal Image" width={500} height={300} />
            <button className="mt-2 p-2 bg-red-500 text-white" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageSlider;
