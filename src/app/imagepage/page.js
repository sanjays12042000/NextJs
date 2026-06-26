import Image from "next/image";
import React from "react";

// image optimization

const ImagePage = () => {
  return (
    <>
      <p>Local Image Page</p>
      <img src="car-1.avif" alt="car-1" height={300} width={200} />
      <p>CDN image page</p>
      <img
        src="https://ik.imagekit.io/Sanjay12s/Mern/2026-Toyota-GR-Supra.webp?updatedAt=1782444131266"
        alt="car-2"
        height={300}
        width={200}
      />
      <p>image component</p>
      <Image
        src="https://ik.imagekit.io/Sanjay12s/Mern/wp2707538.jpg"
        alt="car-3"
        height={300}
        width={200}
      />
    </>
  );
};

export default ImagePage;
