import React, { useState, useEffect } from "react";

const PhotoGallery = () => {
  const photos = [
    {
      id: 1,
      url: "./img/aakashe.jpg",
      alt: "Library Photo",
    },
    { id: 2, url: "./img/aakashe_02.jpg", alt: "Cultural Team" },
    { id: 3, url: "./img/aakashe_03.jpg", alt: "Stage Performance" },
    { id: 4, url: "./img/aakashe_04.jpg", alt: "Profile Photo" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 2000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="relative h-[500px] w-full overflow-hidden">
      {photos.map((photo, index) => (
        <div
          key={photo.id}
          className="absolute top-0 left-0 w-full h-full transition-all duration-500"
          style={{
            transform: `translateX(${
              index === activeIndex ? 0 : index < activeIndex ? "-100%" : "100%"
            })`,
            zIndex: index === activeIndex ? 10 : 0,
            opacity: index === activeIndex ? 1 : 0,
          }}
        >
          <img
            src={photo.url}
            alt={photo.alt}
            className="w-full h-full rounded-lg object-cover shadow-xl border-4 border-gray-800"
          />
        </div>
      ))}
    </div>
  );
};

export default PhotoGallery;
