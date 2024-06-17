import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import Modal from 'react-modal';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const videoIds = ['dQw4w9WgXcQ', '3JZ_D3ELwOQ', 'kJQP7kiw5Fk'];

export default function Videos() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedVideoId, setSelectedVideoId] = useState('');

  const openModal = (videoId: string) => {
    setSelectedVideoId(videoId);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedVideoId('');
  };

  return (
    <div className="grid grid-cols-4 gap-P md:grid-cols-8 lg:grid-cols-12 mt-H3">
      <div className="col-span-4 md:col-start-2 md:col-span-6 lg:col-start-3 lg:col-span-8">
        <h1 className="text-H6 text-gray-10 font-hind font-bold md:col-start-2 lg:col-start-3 mb-H6">
            Videos
        </h1>


        <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
          interval={1000}
          centerMode
          showArrows={false}
          showStatus={false}
          showIndicators={false}
          centerSlidePercentage={25}
          className='z-0'
        >
          {videoIds.map((videoId) => (
            <div 
              className="cursor-pointer z-0 mr-P" 
              key={videoId} 
              onClick={() => openModal(videoId)}
            >
              <img src={`https://img.youtube.com/vi/${videoId}/0.jpg`} alt="Video thumbnail" />
            </div>
          ))}
        </Carousel>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          ariaHideApp={false}
          className="bg-transparent"
        >
            {selectedVideoId && (
              <iframe
                className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${selectedVideoId}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="YouTube Video"
              ></iframe>
            )}
        </Modal>
      </div>
    </div>
  );
};