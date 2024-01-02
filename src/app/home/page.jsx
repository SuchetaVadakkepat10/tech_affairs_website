'use client'
import React from 'react';
import { useState } from "react";
import Image from 'next/image';
import Card from 'react-bootstrap/Card';

import Footer from '../(components)/Footer';

const Home = () => {
  const [image,setImage] = useState('/unsplashmxvkwpijals1@2x.png');
  return (
    <div className="relative bg-white w-full overflow-hidden text-left text-base text-black font-inter">

      {/* Vector and text section */}
      <div className="relative w-full h-[322px] bg-gainsboro-100 flex items-center justify-center text-center p-12">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Image
            src="/vector.svg"
            alt="Vector"
            width={50}
            height={50}
          />
          <div className="font-semibold text-black">Lorem Ipsum</div>
        </div>
      </div>

     {/* Cards section */}
     <div className="flex flex-wrap justify-center">
      <div className="flex flex-wrap justify-center items-center md:flex-nowrap md:space-x-4 p-12  lg:space-x-8">
        <CardWrapper title="Technical Clubs" number="13" />
        <CardWrapper title="Competitive Teams" number="6" />
        <CardWrapper title="Esteemed Awards" number="10+" />
        <CardWrapper title="Events annually" number="50+" />
        <CardWrapper title="Sponsors" number="20+" />
      </div>
    </div>



  <div className="text-center sm:text-3xl md:text-4xl lg:text-5xl mt-8 mb-128 ">
  <div className="flex flex-col items-center justify-center gap-4">
  <div className="rounded-8xs bg-gradient-to-r from-[#acddf9] to-[#879cfd] w-[100px] flex items-center justify-center p-1 box-border h-10 mt-8" style={{ borderRadius: '10px' }}>
      <p className='text-xs sm:text-sm'>About</p>
    </div>
    <h1>All you need to know about us</h1>
  </div>
  <div className="flex flex-col sm:flex-row items-center text-left sm:gap-8 ml-4">
    <div className="sm:w-1/2">
      <h2 className='lg:ml-8'>Discover Technical Excellence: Welcome to Technical Affairs at IIITDM</h2>
      <p className='lg:ml-8 font-normal'>
      The Technical Affairs of Student Affairs Council at IIITDM Kancheepuram plays a dynamic role in fostering and overseeing all technical initiatives, events, and projects within the institute. Comprising dedicated coordinators, faculty, and student members, the council is ardently engaged in elevating the technological landscape of the institute through proactive management and promotion of various technical endeavors.
      </p>
      <div className=" lg:ml-8 rounded-8xs bg-gradient-to-r from-[#acddf9] to-[#879cfd] w-[120px] h-[50px] flex items-center justify-center p-2 box-border" style={{ borderRadius: '10px' }}>
        <div><a href="/about" className='font-semibold text-black' style={{ textDecoration: 'none' }}>Know More</a></div>
      </div>
    </div>
    
    <div className="sm:w-1/2 flex justify-center sm:justify-end mt-4 sm:mt-0 mr-4 sm:mr-8 lg:mr-12">
      {/* First image */}
      <Image
            src="/"
            alt="Vector"
            width={50}
            height={50}
          />
    </div> 
  </div>
</div>


    
<div className="relative bg-[url('/frame.png')] bg-cover bg-no-repeat bg-[top] text-center mb-8">
      <div className="flex flex-col items-center justify-center gap-4 mt-8">
        <div className="sm:justify-center rounded-8xs bg-gradient-to-r from-[#acddf9] to-[#879cfd] w-[100px] flex items-center justify-center p-1 box-border h-10 mt-8" style={{ borderRadius: '10px' }}>
          <p className='text-xs sm:text-sm'>Achievements</p>
        </div>
        <h1 className='text-normal text-white'>Triumphs and Milestones: Celebrating Our Achievements</h1>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between mt-8 sm:mx-4 sm:mb-12">
        <div className="sm:w-1/4 sm:justify-center sm:mb-8">
        <div className="w-[100px] flex flex-col items-start justify-start text-left text-xl select-bar text-white mb-18 sm:w-[200px]">
                  <div className="relative w-[200px] cursor-pointer hover:[background:linear-gradient(90deg,_#acddf9,_#879cfd)] h-[50px] hover:text-black"  onClick={() => (setImage('/unsplashmxvkwpijals1@2x.png'))}>
                    <div className="absolute top-[0px] left-[0px] rounded-8xs  w-[120px] h-[50px]" />
                    <div className="absolute top-[12px] left-[10px] capitalize font-medium inline-block w-[373.8px] ofv">
                      Hackathon 2.0
                    </div>
                  </div>
                  <div className="relative w-[200px] cursor-pointer hover:[background:linear-gradient(90deg,_#acddf9,_#879cfd)] h-[50px] hover:text-black"  onClick={() => (setImage('/unsplashmxvkwpijals1@2x.png'))}>
                    <div className="absolute top-[0px] left-[0px] rounded-8xs w-[120px] h-[50px]" />
                    <div className="absolute top-[12px] left-[10px] capitalize font-medium inline-block w-[373.8px] ofv">
                      Event 2
                    </div>
                  </div>
                  <div className="relative w-[200px] h-[50px] cursor-pointer hover:[background:linear-gradient(90deg,_#acddf9,_#879cfd)] hover:text-black"  onClick={() => (setImage('/unsplashmxvkwpijals1@2x.png'))}>
                    <div className="absolute top-[0px] left-[0px] rounded-8xs w-[120px] h-[50px]" />
                    <div className="absolute top-[12px] left-[10px] capitalize font-medium inline-block w-[373.8px] ofv">
                    Event 3
                    </div>
                  </div>
                  <div className="relative w-[200px] h-[50px] cursor-pointer hover:[background:linear-gradient(90deg,_#acddf9,_#879cfd)] hover:text-black"  onClick={() => (setImage('/unsplashmxvkwpijals1@2x.png'))}>
                    <div className="absolute top-[0px] left-[0px] rounded-8xs w-[120px] h-[50px]" />
                    <div className="absolute top-[12px] left-[10px] capitalize font-medium inline-block w-[373.8px] ofv">
                    Event 4
                    </div>
                  </div>
                  <div className="relative w-[200px] h-[50px] cursor-pointer hover:[background:linear-gradient(90deg,_#acddf9,_#879cfd)] hover:text-black" onClick={() => (setImage('/unsplashmxvkwpijals1@2x.png'))}>
                    <div className="absolute top-[0px] left-[0px] rounded-8xs  w-[120px] h-[50px]" />
                    <div className="absolute top-[12px] left-[10px] capitalize font-medium inline-block w-[373.8px] ofv">
                    Event 5
                    </div>
                  </div>
                  <div className="relative w-[200px] h-[50px] cursor-pointer hover:[background:linear-gradient(90deg,_#acddf9,_#879cfd)] hover:text-black" onClick={() => (setImage('/unsplashmxvkwpijals1@2x.png'))}>
                    <div className="absolute top-[0px] left-[0px] rounded-8xs  w-[120px] h-[50px]" />
                    <div className="absolute top-[12px] left-[10px] capitalize font-medium inline-block w-[373.8px] ofv">
                    Event 6
                    </div>
                  </div>
                  <div className="relative w-[200px] h-[50px] cursor-pointer hover:[background:linear-gradient(90deg,_#acddf9,_#879cfd)] hover:text-black mb-12" onClick={() => (setImage('/unsplashmxvkwpijals1@2x.png'))}>
                    <div className="absolute top-[0px] left-[0px] rounded-8xs  w-[120px] h-[50px]" />
                    <div className="absolute top-[12px] left-[10px] capitalize font-medium inline-block w-[373.8px] ofv">
                    Event 7
                    </div>
                  </div>
              </div>
        </div>




        {/* Next section */}

  
<div className="sm:w-3/4 lg:start-12 ml-0 sm:ml-0 mt-4 sm:mt-0">
  <div className="flex flex-col items-center sm:flex-row sm:items-start justify-center text-center sm:text-center text-white">
    <div className="flex flex-col sm:flex-row items-center text-center sm:text-center">
      <div className="sm:w-full sm:mt-0">
        <h1 className='text-normal text-center sm:text-center lg:text-left'>Hack Code 2.0</h1>
        <h2 className='lg:ml-0 text-center sm:text-center lg:text-left '>We are Technical Affairs IIITDM</h2>
        
        <div className='overflow-clip'>
          <p className='font-normal sm:text-sm  lg:text-left lg:ml-0 sm:text-center'>
            HackCode 2.0 serves as a platform to encourage enthusiastic minds to brainstorm on solutions for challenging issues from all over India. The unified motive of gathering all like-minded hackers to the institution is what led to the creation of the idea, the first of its kind. Well provide a platform for innovations, where developers can test and showcase their potential to the best of their abilities.
          </p>
        </div>
      </div>
      <div className="sm:w-1/2 flex justify-center sm:justify-end mt-4 sm:mt-0 mr-4 sm:mr-8 lg:mr-12">
      <Image
                    src="/"
                    alt="Vector"
                    width={300}
                    height={300}
                  />
      </div>
    </div>
  </div>
</div>

  
  
  </div>
</div>
{/* Clubs section */}


<div className="text-center sm:text-3xl md:text-4xl lg:text-5xl mt-12 mb-8">
  <div className="flex flex-col items-center justify-center gap-4">
    <div className="rounded-8xs bg-gradient-to-r from-[#acddf9] to-[#879cfd] w-[100px] flex items-center justify-center p-2 box-border h-10 mt-8" style={{ borderRadius: '10px' }}>
      <div><p className='text-xs'>Clubs</p></div>
    </div>
    <h1>Technical clubs in IIITDM</h1>
  </div>
  <div className="flex flex-col sm:flex-row items-center text-left sm:gap-8 ml-4">
    <div className="sm:w-1/2">
    <h2 className='lg:ml-8'>We have diversity in clubs</h2>
      <p className='lg:ml-8 font-normal'>
      Dive into a realm of technical prowess at Technical Affairs, IIITDM Kancheepuram, where we take immense pride in hosting acclaimed technical clubs and teams renowned for their outstanding achievements on the international stage. Our vibrant community includes student chapters affiliated with prestigious institutions such as the American Society of Mechanical Engineers (ASME), Institute of Electrical and Electronics Engineers (IEEE), Optica (Optical Society of America), and GeeksforGeeks. These associations have not only garnered accolades but have also evolved into dynamic student research groups within our institute. Join us in celebrating the spirit of innovation, collaboration, and excellence that defines our technical landscape.      </p>
      <div className=" lg:ml-8 rounded-8xs bg-gradient-to-r from-[#acddf9] to-[#879cfd] w-[120px] h-[50px] flex items-center justify-center p-2 box-border" style={{ borderRadius: '10px' }}>
        <div><a href="/clubs" className='font-semibold text-black' style={{ textDecoration: 'none' }}>Know More</a></div>
      </div>
    </div>
    
    <div className="sm:w-1/2 flex justify-center sm:justify-end mt-4 sm:mt-0 mr-4 sm:mr-8 lg:mr-12">
      {/* First image */}
      <Image
            src="/spinny.gif"
            alt="Vector"
            width={450}
            height={450}
          />
    </div> 
  </div>
</div>


{/* Our Annual techfest Vashisht */}

<div className="text-center sm:text-3xl md:text-4xl lg:text-5xl mt-8 mb-8 bg-[url('/frame.png')] bg-cover bg-no-repeat bg-[top]">
  <div className="flex flex-col items-center justify-center gap-4">
    <div className="rounded-8xs bg-gradient-to-r from-[#acddf9] to-[#879cfd] w-[100px] flex items-center justify-center p-2 box-border h-10 mt-8" style={{ borderRadius: '10px' }}>
      <div><p className='text-xs'>Fest</p></div>
    </div>
    <h1 className='text-white'>Our Annual Techfest Vashisht</h1>
  </div>
  <div className="flex flex-col sm:flex-row items-center text-left sm:gap-8 ml-4 text-white pb-12">
    <div className="sm:w-1/2">
    <h2 className='lg:ml-8'>Unveiling Tomorrow&apos;s Tech: Vashisht Annual Techfest</h2>
      <p className='lg:ml-8 font-normal'>
      Vashisht is a much awaited three-day tech-fest that assessed participants in a variety of subjects, from robots to entrepreneurship, coding to designing. It inspired a love of technology, opening students&apos; eyes to new avenues for creativity and drawing more than 3000+ pupils from all across the nation. <br></br>At Vashisht, we are more than just a festival; we are a movement. Our goal is to build a technically engaged community that thrives on technical activities, not merely for entertainment but as a means of community building, ideation, and sharing groundbreaking ideas.
      </p>
      <div className=" lg:ml-8 rounded-8xs bg-gradient-to-r from-[#acddf9] to-[#879cfd] w-[120px] h-[50px] flex items-center justify-center p-2 box-border" style={{ borderRadius: '10px' }}>
        <div><a href="http://www.vashisht.iiitdm.ac.in/" className='font-semibold text-black' style={{ textDecoration: 'none' }}>Know More</a></div>
      </div>
    </div>
    
    <div className="sm:w-1/2 flex justify-center sm:justify-end mt-4 sm:mt-0 mr-4 sm:mr-8 lg:mr-8 pb-12">
      {/* First image */}
      <Image
            src="/"
            alt="Vector"
            width={50}
            height={50}
          />
    </div> 
  </div>
</div>

{/* Sponsor section */}
<div className=" text-center sm:text-3xl md:text-4xl lg:text-5xl mt-8 mb-12">
  <div className="flex flex-col items-center justify-center gap-4 mt-8">
    <h1 className="text-sm sm:text-lg md:text-xl lg:text-2xl">Our Sponsors</h1>
  </div>
  <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-8">
    <div className="rounded-8xs bg-gradient-to-r from-[#acddf9] to-[#879cfd] w-[100px] flex items-center justify-center p-1 box-border h-auto">
      <div> 
        <Image
            src="/india_bank.png"
            alt="Vector"
            width={50}
            height={50}
          />
        </div>
    </div>

    <div className="rounded-8xs bg-gradient-to-r from-[#acddf9] to-[#879cfd] w-[100px] flex items-center justify-center p-1 box-border h-auto">
      <div> 
        <Image
            src="/tkw_logo.png"
            alt="Vector"
            width={50}
            height={50}
          />
        </div>
    </div>

    <div className="rounded-8xs bg-gradient-to-r from-[#acddf9] to-[#879cfd] w-[100px] flex items-center justify-center p-1 box-border h-auto">
      <div> 
        <Image
            src="/tlc_logo.png"
            alt="Vector"
            width={50}
            height={50}
          /></div>
    </div>
    
    <div className="rounded-8xs bg-gradient-to-r from-[#acddf9] to-[#879cfd] w-[100px] flex items-center justify-center p-1 box-border h-auto">
     <div> 
      <Image
            src="/gcpa_logo.png"
            alt="Vector"
            width={70}
            height={50}
          />
        </div>
    </div>

    <div className="rounded-8xs bg-gradient-to-r from-[#acddf9] to-[#879cfd] w-[100px] flex items-center justify-center p-1 box-border h-auto">
      <div> <Image
            src="/contentstack_logo.png"
            alt="Vector"
            width={70}
            height={50}
          /></div>
    </div>
    
    <div className="rounded-8xs bg-gradient-to-r from-[#acddf9] to-[#879cfd] w-[100px] flex items-center justify-center p-1 box-border h-auto">
      <div> <Image
            src="/hdfc_logo.png"
            alt="Vector"
            width={80}
            height={50}
          /></div>
    </div>

    <div className="rounded-8xs bg-gradient-to-r from-[#acddf9] to-[#879cfd] w-[100px] flex items-center justify-center p-1 box-border h-auto">
      <div> <Image
            src="/ggvs_logo.png"
            alt="Vector"
            width={50}
            height={50}
          /></div>
    </div>
    
    <div className="rounded-8xs bg-gradient-to-r from-[#acddf9] to-[#879cfd] w-[100px] flex items-center justify-center p-1 box-border h-auto">
      <div> <Image
            src="/cad_logo.png"
            alt="Vector"
            width={50}
            height={50}
          /></div>
    </div>

    <div className="rounded-8xs bg-gradient-to-r from-[#acddf9] to-[#879cfd] w-[100px] flex items-center justify-center p-1 box-border h-auto">
      <div> <Image
            src="/ashok_logo.png"
            alt="Vector"
            width={50}
            height={50}
          /></div>
    </div>

  
    
  </div>
</div>



<Footer />
    </div>
  );
};

const CardWrapper = ({ title, number }) => {
  return (
    <Card className="[background:linear-gradient(90deg,_#acddf9,_#879cfd)] h-20 w-60 text-black flex flex-col justify-center items-center p-12  sm:w-1/2 md:w-1/2 lg:w-1/5" style={{ borderRadius: '10px' }}>
      <h1 className='text-center text-2xl'>{number}</h1>
      <p className='text-center'>{title}</p>
    </Card>
  );
};

export default Home;
