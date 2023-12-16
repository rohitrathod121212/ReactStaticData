import React, { useState } from 'react';
import './App.css';

const videosData = [
  {
    id: 1,
    title: 'Salaar Telugu Trailer | Prabhas | Prashanth Neel | Prithviraj|Shruthi|',
    thumbnail: 'https://www.sakshi.com/sites/default/files/styles/rich_cards/public/article_images/2023/07/2/salar.jpg?itok=b9MHTi2J',
    likes: 1000,
    views: 10000,
    channel: 'Hombale Films ',
    channelLogo: 'https://yt3.googleusercontent.com/ytc/APkrFKYSj1OfdqWSO4X4zCxWYvnVstqnJy-YKSwQ3XxzzA=s176-c-k-c0x00ffffff-no-rj',
  },
  {
    id: 2,
    title: 'TypeScript Tutorial for Beginners [2022] Programming with Mosh via YouTube Help',
    thumbnail: 'https://ccweb.imgix.net/https%3A%2F%2Fimg.youtube.com%2Fvi%2Fd56mG7DezGs%2Fhqdefault.jpg?ar=16%3A9&auto=format&cs=strip&fit=crop&h=380&ixlib=php-4.1.0&w=535&s=660712f4db435db86f8c23c76c854e2f',
    likes: 100,
    views: 1000,
    channel: 'Programming with Mosh',
    channelLogo: 'https://yt3.googleusercontent.com/ebu9ZksIXw0tUWBZd6rtk-It8VGSk8AdfSI_eGR-fl6WGet9LnVPngNQCmjdLJeGXpuylwYInQ=s176-c-k-c0x00ffffff-no-rj',
  },
  {
    id: 3,
    title: 'The Reason Why AWM is King of Game | TACAZ PUBG MOBILE',
    thumbnail: 'https://i.ytimg.com/an_webp/PUv29zvZxL8/mqdefault_6s.webp?du=3000&sqp=CMGW16sG&rs=AOn4CLDy50UuxDXzZNTC9GSbVBLcRkqfAw',
    likes: 200,
    views: 50000,
    channel:'Tacaz Gaming',
    channelLogo: 'https://yt3.ggpht.com/uTMHf3jIguOCARsVgq4-STyV5La6SA_aEIvVs3Bf07o4Z_SuhWZqEndRf3b0KhA_WGp0p3Cd=s88-c-k-c0x00ffffff-no-rj',
  },
  {
    id: 4,
    title: 'Off Campus JOB Opportunity 2023 (Geek Olympics) | DSA Free Course | GeeksforGeeks',
    thumbnail: 'https://i.ytimg.com/vi/QavJUSiHFvg/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBuGCSDAQHXiPCF9gww1JkyUTsOaA',
    likes: 10,
    views: 500,
    channel: 'Anshika Gupta',
    channelLogo: 'https://yt3.googleusercontent.com/ytc/APkrFKa3yoeLWJXX30BOAgr75umgoreAWWB3A91YoMd6PDE=s176-c-k-c0x00ffffff-no-rj',
  },
  {
    id: 5,
    title: 'Introduction to JavaScript + Setup | JavaScript Tutorial in Hindi #1',
    thumbnail: 'https://cwh-full-next-space.fra1.cdn.digitaloceanspaces.com/videoseries/ultimate-js-tutorial-hindi-1/JS-Thumb.jpg',
    likes: 10,
    views: 15000,
    channel: 'CodeWithHarry',
    channelLogo: 'https://yt3.googleusercontent.com/ytc/APkrFKZGyiFJtoR2Isio_S591bOWpCKBFaIzqSuAG56ubA=s176-c-k-c0x00ffffff-no-rj',
  },
  {
    id: 6,
    title: '10-Hour React Tutorial 2023 - Zero to Advanced | Learn React JS in Hindi',
    thumbnail: 'https://i.ytimg.com/vi/6l8RWV8D-Yo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBJo44aFPfL6lqBLF99a_1j2q5XFg',
    likes: 200,
    views: 15000,
    channel: 'Coder Dost',
    channelLogo: 'https://yt3.googleusercontent.com/m-FbG7zwy9uuelkhgj4BqkpSGuL29FCDaibjs6P5KmmACUgm5N4iAk2SbJNuHK7dBqUEvSEf=s176-c-k-c0x00ffffff-no-rj',
  },
  {
    id: 7,
    title: 'IAS VS IPS Officers ',
    thumbnail: 'https://i.ytimg.com/vi/uNlLvdnoxeA/maxresdefault.jpg',
    likes: 100,
    views: 180000,
    channel: 'Anurag Aggarwal ',
    channelLogo: 'https://yt3.googleusercontent.com/AZd3lOX5SNLbj1U-sR76YhLkIPYS1mp9OY-sZZeWBFsix7WW2CGiYwbO5SHIwtCY3exbPQrJ=s176-c-k-c0x00ffffff-no-rj',
  },
  {
    id: 8,
    title: 'Full Stack Web Development Course in Telugu | Day 13 | Build Portfolio Project',
    thumbnail: 'https://i.ytimg.com/vi/rkaBFyJX2a0/mqdefault.jpg',
    likes: 10000,
    views: 1000000,
    channel: 'Btechiot Telugu ',
    channelLogo: 'https://yt3.googleusercontent.com/8m5OeQ8PX-inNgirGxNDWr_c383ppIZst7-1qvpqa9Ktpn78aQ7zLc9y6w4ZmLrZtIb6MeWHDw=s176-c-k-c0x00ffffff-no-rj',
  },
  {
    id: 9,
    title: ' I Tried Food From Every State In America',
    thumbnail: 'https://i.ytimg.com/an_webp/iWT0kl1k32M/mqdefault_6s.webp?du=3000&sqp=CJu416sG&rs=AOn4CLDZjm-d7dLohTo62-6iVbgXmMSU-A',
    likes: 20000,
    views: 1000000,
    channel: 'Joshua Weissman  ',
    channelLogo: 'https://yt3.googleusercontent.com/ytc/APkrFKbqfypQ_0BHRqTJu_bgt80PGI8F_FzSe-SLEzt5ag=s176-c-k-c0x00ffffff-no-rj',
  },
  {
    id: 10,
    title: ' History of Bhimavaram',
    thumbnail: 'https://i.ytimg.com/vi/rkaBFyJX2a0/mqdefault.jpg',
    likes: 10000,
    views: 1000000,
    channel: 'PARASHURAM TALKS ',
    channelLogo: 'https://yt3.googleusercontent.com/ytc/APkrFKYdXVUEOOISfBQIBJ9PnJfMMgvEkZrMq10jF9WH=s176-c-k-c0x00ffffff-no-rj',
  },
  
  {
    id: 11,
    title: ' Job Interview Process at Altisource ft Ravali 1 | EdYoda Alumni Tallks with Rishabh',
    thumbnail: 'https://i.ytimg.com/vi/vd_SJONwQTY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAceEgqb3uAA2_m4eAdCEwWf-MWJA',
    likes: 150000,
    views: 1200000,
    channel: 'EdYoda ',
    channelLogo: 'https://yt3.ggpht.com/ytc/APkrFKbqv3R1PJCM_hN2BxYLDp0KU_GIe2aPiWNcoSP0=s88-c-k-c0x00ffffff-no-rj',
  },
  
  
  {
    id: 12,
    title: ' Breakfast Song | CoComelon Nursery Rhymes & Kids Songs',
    thumbnail: 'https://i.ytimg.com/vi/BEJLI_y6OHE/maxresdefault.jpg',
    likes: 15000,
    views: 180000,
    channel: 'Cocomelon - Nursery Rhymes  ',
    channelLogo: 'https://yt3.googleusercontent.com/ytc/AIf8zZQtdgqoLsOAaZnVnijNPflgiywbpzWTNbwswTghyQ=s176-c-k-c0x00ffffff-no-rj',
  },
  {
    id: 13,
    title: ' Ramp Car Racing - Car Racing 3D - Android Gameplay',
    thumbnail: 'https://i.ytimg.com/vi/GyO1MtLhyt0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCQbutSglZ6qQhCbcy9qvge092szw',
    likes: 20000,
    views: 1000000,
    channel: 'Gaming aadii ',
    channelLogo: 'https://yt3.ggpht.com/XH31zlps9jiqZPwoPvBdKoR2oDF8PKokbepOHaM78kGceaIm-KHMSQkJaumBHP-4mJx8oU2Vhg=s88-c-k-c0x00ffffff-no-rj',
  },

  {
    id: 14,
    title: ' CoComelon - Kids Songs and Nursery Rhymes',
    thumbnail: 'https://m.media-amazon.com/images/S/pv-target-images/cf40e2ebc398a3f040cb304974fbc88a873b822c6bb641b99c6533101d1106ed.jpg',
    likes: 11000,
    views: 190000,
    channel: 'Cocomelon - Nursery Rhymes  ',
    channelLogo: 'https://yt3.googleusercontent.com/ytc/AIf8zZQtdgqoLsOAaZnVnijNPflgiywbpzWTNbwswTghyQ=s176-c-k-c0x00ffffff-no-rj',
  },


  
  {
    id: 15,
    title: ' Mega Ramp Car Stunt Game - Impossible Car Racing Game 3D - Android Gameplay',
    thumbnail: 'https://i.ytimg.com/an_webp/2FQAKa6IYY4/mqdefault_6s.webp?du=3000&sqp=CJKh16sG&rs=AOn4CLDmbHs6WaVRKUPz33xdLERqCfe7pA',
    likes: 11100,
    views: 10000,
    channel: 'Gaming aadii ',
    channelLogo: 'https://yt3.ggpht.com/XH31zlps9jiqZPwoPvBdKoR2oDF8PKokbepOHaM78kGceaIm-KHMSQkJaumBHP-4mJx8oU2Vhg=s88-c-k-c0x00ffffff-no-rj',

  },
  {
    id: 16,
    title: 'TypeScript Tutorial for Beginners [2022] Programming with Mosh via YouTube Help',
    thumbnail: 'https://ccweb.imgix.net/https%3A%2F%2Fimg.youtube.com%2Fvi%2Fd56mG7DezGs%2Fhqdefault.jpg?ar=16%3A9&auto=format&cs=strip&fit=crop&h=380&ixlib=php-4.1.0&w=535&s=660712f4db435db86f8c23c76c854e2f',
    likes: 100,
    views: 1000,
    channel: 'Programming with Mosh',
    channelLogo: 'https://yt3.googleusercontent.com/ebu9ZksIXw0tUWBZd6rtk-It8VGSk8AdfSI_eGR-fl6WGet9LnVPngNQCmjdLJeGXpuylwYInQ=s176-c-k-c0x00ffffff-no-rj',
  },
  {
    id: 17,
    title: 'Salaar Telugu Trailer | Prabhas | Prashanth Neel | Prithviraj|Shruthi|Hombale Films|Vijay Kiragandur',
    thumbnail: 'https://www.sakshi.com/sites/default/files/styles/rich_cards/public/article_images/2023/07/2/salar.jpg?itok=b9MHTi2J',
    likes: 1000,
    views: 10000,
    channel: 'Hombale Films ',
    channelLogo: 'https://yt3.googleusercontent.com/ytc/APkrFKYSj1OfdqWSO4X4zCxWYvnVstqnJy-YKSwQ3XxzzA=s176-c-k-c0x00ffffff-no-rj',
  },
  {
    id: 18,
    title: '10-Hour React Tutorial 2023 - Zero to Advanced | Learn React JS in Hindi',
    thumbnail: 'https://i.ytimg.com/vi/6l8RWV8D-Yo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBJo44aFPfL6lqBLF99a_1j2q5XFg',
    likes: 200,
    views: 15000,
    channel: 'Coder Dost',
    channelLogo: 'https://yt3.googleusercontent.com/m-FbG7zwy9uuelkhgj4BqkpSGuL29FCDaibjs6P5KmmACUgm5N4iAk2SbJNuHK7dBqUEvSEf=s176-c-k-c0x00ffffff-no-rj',
  },
  {
    id: 19,
    title: 'Off Campus JOB Opportunity 2023 (Geek Olympics) | DSA Free Course | GeeksforGeeks',
    thumbnail: 'https://i.ytimg.com/vi/QavJUSiHFvg/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBuGCSDAQHXiPCF9gww1JkyUTsOaA',
    likes: 10,
    views: 500,
    channel: 'Anshika Gupta',
    channelLogo: 'https://yt3.googleusercontent.com/ytc/APkrFKa3yoeLWJXX30BOAgr75umgoreAWWB3A91YoMd6PDE=s176-c-k-c0x00ffffff-no-rj',
  },
  {
    id: 20,
    title: 'omg😱MY NEW BEST RUSH GAMEPLAY TODAY🔥PUBG Mobile',
    thumbnail: 'https://i.ytimg.com/an_webp/-xed-89bgf0/mqdefault_6s.webp?du=3000&sqp=CJTB16sG&rs=AOn4CLAS-Iad0SlfU63-8j1oHylG1Pxpyg',
    likes: 200,
    views: 50000,
    channel:'Nemo',
    channelLogo: 'https://yt3.ggpht.com/ytc/APkrFKYJ9DtDntM2K7VWVqv3mr1R7HBguMia6RY2x9_h=s88-c-k-c0x00ffffff-no-rj',
  },



];

const Video = ({ video }) => (
  <div className="video">
    <img src={video.thumbnail} alt={video.title} />
    <div className="video-info">
      <h3>{video.title}</h3>
      <p>{video.views} views • {video.likes} likes</p>
      <div className="channel">
        <img src={video.channelLogo} alt={video.channel} />
        <p>{video.channel}</p>
      </div>
    </div>
  </div>
);

const NavBar = () => (
  <div className="navbar">
    <div className="navbar-content">
    <img className="icon" src="https://cdn-icons-png.flaticon.com/128/7710/7710488.png" height="30px" width="30px"/>
      <img className="logo" src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg" alt="Logo" />
      
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          className="searchbar"
          // onChange={(e) => onSearch(e.target.value)}
        />
        <button type="submit" className="search-button">
          <img src="https://p1.hiclipart.com/preview/88/220/54/box-search-box-address-bar-user-interface-window-web-browser-circle-line-png-clipart.jpg"className="search-icon" alt="Search" />
        </button>
      </div>
      <img  src="https://cdn-icons-png.flaticon.com/512/3138/3138411.png" height="20px" width="20px"/>
      
      <img class="login-pic" src="https://cdn.icon-icons.com/icons2/3446/PNG/512/account_profile_user_avatar_icon_219236.png" height="20px" width="20px"/>
    </div>
  </div>
);

const App = () => {
  const [videos, setVideos] = useState(videosData);

  return (
    <div className="App">
      <NavBar />
      
      <div className="video-gallery">
        {videos.map((video) => (
          <Video key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default App;
