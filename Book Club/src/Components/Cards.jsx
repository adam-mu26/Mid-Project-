import React from 'react';
import Card from './Card'; 
import "./Cards.css"


const Cards = () => {
  return (
    <div className='cards-container'>
      <Card
        title="Explore a World of Books"
        description="Dive into our extensive book list, featuring titles with rich details and penned by authors you adore."
        imageUrl="/src/assets/imgs/img1.jpeg"
      />

<Card
        title="Build Your Collection"
        description="Add your favorite books to your personal library effortlessly. Curate and showcase the stories that resonate with you in a space uniquely yours"
        imageUrl="/src/assets/imgs/img2.jpg"
      />

<Card
        title="Your Personal Haven"
        description="Craft a personal library that mirrors your reading preferences. Decide whether to share your favorite reads with the world or keep them close in your private sanctuary"
        imageUrl="/src/assets/imgs/img3.jpg"
      />
{/* <div className='card2-container'> */}
<Card
        title="Create Your Stories"
        description= "Unleash your creativity by crafting your own books within your library. Mark them as Public to contribute to our master book list, or keep them Private for your eyes only"
        imageUrl="/src/assets/imgs/img4.jpg"
      />



<Card
        title="Join the Community"
        description= "Engage with other book enthusiasts in our thriving literary community. Like, dislike, and comment on books directly from the master book list"
        imageUrl="/src/assets/imgs/img5.png"
      />

<Card
        title=" Library Control"
        description= "Manage your library effortlessly. Delete or edit books to ensure your collection remains a true reflection of your evolving literary tastes"
        imageUrl="/src/assets/imgs/img6.png"
      />

<Card
        title="Connect with Readers"
        description= "Allow other users to connect with your curated collection. Share your thoughts, receive likes, and be an integral part of a community that celebrates the magic of storytelling"
        imageUrl="/src/assets/imgs/img7.jpg"
      />
     
     </div>
  // </div>
  
  )}
export default Cards; 
