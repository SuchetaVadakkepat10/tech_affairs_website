"use client";

import MemberCard from "../(components)/MemberCard";
import React, { useState } from "react";
import Image from "next/image";
import DisclaimerModal from "../(components)/DisclaimerModal";

const Home1 = () => {


  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  const web_team = [{name:"Gokul",img:"gokul.jpeg"},{name:"Sucheta",img:"Sucheta.jfif"},{name:"M Ashwinth Anbu",img:"/M_Ashwinth_Anbu.jpg"},{name:"Harshith B",img:"/Harshith_B.jpg"}];
  const frost_team= [{name:"Sibi",img:"/Sibi.jpg"},{name:"Anmol",img:"anmol.jpeg"},{name:"Sugreev S",img:"Sugreev.jpeg"},{name:"Prahaladh A R",img:"/Prahalad.jpg"},{name:"Rohan G",img:"rohan.jpeg"}];
  const event_team = [{name:"Karthikeyan S",img:"/karthikeyan.jpg"},{name:"Anish V Thomas",img:"/Anish_V_Thomas.jpg"},{name:"Vikas",img:"/Vikas.png"},{name:"Akshaj",img:"akshaj.jpeg"},{name:"Lekha",img:"/Lekha.jpg"}];
  const video_team = [{name:"Mrudula",img:"/Mrudula.jpg"},{name:"C Vineeth Babu",img:"vineeth.jpg"}];
  const design_team = [{name:"Sakthiprian",img:"sakthiprian.jpg"},{name:"Snekan S",img:"/Snekan_S.jpg"},{name:"Akshita Jha",img:"/Akshita_Jha.jpg"},{name:"Thakur Sai Madan",img:"saimadhan.jpg"},{name:"Harsha",img:"harsha.jpg"}];
  const operations_team = [{name:"G Praneeth Kumar",img:"/image-40@2x.png"},{name:"S Sundar Subramanian",img:"sundar.jpg"},{name:"S Ezhil",img:"/S_Ezhil.jpg"},{name:"Hariram Selva V R",img:"hariram.jpg"}];

  const arr = [1,2,3,4,5,6,7,8,9,10];

  const [image, setImage] = useState("/unsplashmxvkwpijals1@2x.png");

  const Web_dev_team= []
  return (
    <div className="relative bg-white lg:w-full sm:w-full h-[2721px] overflow-x-hidden text-center text-base text-white font-image-text">
      <div className="absolute top-[0px] left-[-26px] lg:w-[101vw] lg:h-[401px] overflow-hidden text-29xl first">
        <div className="absolute top-[712px] left-[687px] flex flex-row items-start justify-start gap-[16px] opacity-[0]">
          <div className="relative rounded-[50%] bg-black w-[15px] h-[15px]" />
          <div className="relative rounded-[50%] bg-black w-[15px] h-[15px]" />
          <div className="relative rounded-[50%] bg-black w-[15px] h-[15px]" />
        </div>
        <img
          className="absolute top-[0px] left-[26px] w-[100vw] h-[979px] object-cover first-img"
          alt=""
          src="/unsplashi6at9f7mwdq@2x.png"
        />
        <div className="absolute w-[calc(100%_+_3px)] top-[0px] right-[0px] left-[0px] [background:linear-gradient(180.03deg,_rgba(0,_0,_0,_0.5),_rgba(0,_0,_0,_0)_51.48%,_#000)] h-[401px]" />
        <b className="absolute top-[308px] left-[calc(50%_-_279px)] weare">
          We are Technical affairs
        </b>
      </div>
      <div className="absolute top-[521px] left-[50px] flex lg:flex-row items-center justify-start gap-[166px] text-left lg:text-17xl md:text-4xl text-black font-inter lg:w-[600px] md:w-[325px] about-us">
        <div className="flex flex-col items-start justify-start gap-[26px] lg:w-[700px] sm:w-[320px]">
          <div className="relative font-semibold inline-block sm:w-full md:w-[662px] about-title">
            Mission 
          </div>
          <div class="capitalize inline-block md:w-full lg:w-[600px] lg:text-9xl sm:text-2xl md:text-2xl">
          Our mission is to create a healthy community where people interact, explore, and increase their knowledge with added fun.
          </div>
          <div className="relative font-semibold inline-block sm:w-full md:w-[662px] about-title">
            Motto
          </div>
          <div class="capitalize inline-block md:w-full lg:w-[600px] lg:text-9xl sm:text-2xl md:text-2xl">
          He who has a why can endure any how.
          </div>
        </div>
        <div className="relative flex flex-row w-[510px] h-[183px] text-xs text-white font-image-text about-image">
          <div className=" rounded-tl-3xs rounded-tr-none rounded-b-none w-[255px] h-[182.7px] overflow-hidden img-abt">
            <img
              className=" w-[268px] h-[406px] object-cover"
              alt=""
              src="/unsplashmxvkwpijals@2x.png"
            />
            <div className="absolute top-[0px] left-[0px] rounded-tl-3xs rounded-tr-none rounded-b-none [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_#000)] w-[255px] h-[182.7px] gra" />
            <b className="relative bottom-[40px] w-[81.2px] h-[15.4px]">
              Experience
            </b>
          </div>
          <div className=" rounded-tl-none rounded-tr-3xs rounded-b-none w-[255px] h-[182.7px] overflow-hidden img-abt">
            <img
              className=" w-[285px] h-[190px] object-cover"
              alt=""
              src="/unsplashourqhrte2im@2x.png"
            />
            <div className="absolute top-[0px] left-[255px] rounded-tl-none rounded-tr-3xs rounded-b-none [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_#000)] w-[255px] h-[182.7px] gra" />
            <b className="relative bottom-[40px] left-[20px] w-[81.2px] h-[15.4px]">
              Hackathons
            </b>
          </div>
        </div>
      </div>
      <div className="absolute top-[904px] left-[0px] w-[100vw] overflow-hidden flex flex-col items-center justify-center py-[72px] px-[54px] bg-[url('/frame-37@3x.png')] bg-cover bg-no-repeat bg-[top] text-17xl journey">
        <div className="flex flex-row items-center justify-start gap-[213px] j-content">
          <div className="flex flex-col items-start justify-start gap-[30px] ">
            <b className="relative oj">Our Journey</b>
            <div className="w-[551px] flex flex-col items-start justify-start text-left text-xl select-bar">
              <div
                className="relative w-[551px] h-[50px] cursor-pointer hover:[background:linear-gradient(90deg,_#acddf9,_#879cfd)] hover:text-black"
                onClick={() => setImage("/unsplashmxvkwpijals1@2x.png")}
              >
                <div className="absolute top-[0px] left-[0px] rounded-8xs  w-[551px] h-[50px]" />
                <div className="absolute top-[12px] left-[10px] capitalize font-medium inline-block w-[373.8px] ofv">
                  Our first Vashisht in 2018
                </div>
              </div>
              <div
                className="relative w-[551px] cursor-pointer hover:[background:linear-gradient(90deg,_#acddf9,_#879cfd)] h-[50px] hover:text-black"
                onClick={() => setImage("/unsplashmxvkwpijals1@2x.png")}
              >
                <div className="absolute top-[0px] left-[0px] rounded-8xs w-[551px] h-[50px]" />
                <div className="absolute top-[12px] left-[10px] capitalize font-medium inline-block w-[373.8px] ofv">
                  Our second Vashisht in 2019
                </div>
              </div>
              <div
                className="relative w-[551px] h-[50px] cursor-pointer hover:[background:linear-gradient(90deg,_#acddf9,_#879cfd)] hover:text-black"
                onClick={() => setImage("/unsplashmxvkwpijals1@2x.png")}
              >
                <div className="absolute top-[0px] left-[0px] rounded-8xs w-[551px] h-[50px]" />
                <div className="absolute top-[12px] left-[10px] capitalize font-medium inline-block w-[373.8px] ofv">
                  Our third Vashisht in 2022
                </div>
              </div>
              <div
                className="relative w-[551px] h-[50px] cursor-pointer hover:[background:linear-gradient(90deg,_#acddf9,_#879cfd)] hover:text-black"
                onClick={() => setImage("/unsplashmxvkwpijals1@2x.png")}
              >
                <div className="absolute top-[0px] left-[0px] rounded-8xs w-[551px] h-[50px]" />
                <div className="absolute top-[12px] left-[10px] capitalize font-medium inline-block w-[373.8px] ofv">
                  Our fourth Vashisht in 2023
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end justify-start gap-[18px] text-left text-9xl ji">
            <div className="relative w-[567px] h-[136px] overflow-hidden shrink-0 journey-img">
              <img
                className="absolute top-[0px] left-[0px] w-[604px] h-[916px] object-cover"
                alt=""
                src={image}
              />
              <div className="absolute top-[0px] left-[0px] [background:linear-gradient(179.91deg,_rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0.2))] w-[567px] h-[136px]" />
            </div>
            {/* <div className="relative font-medium inline-block w-[567px] eve">
              Event
            </div>
            <div className="relative text-xl capitalize inline-block w-[568px] eve">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div> */}
          </div>
        </div>
      </div>

      <div className="absolute top-[1325px] left-[calc(50%_-_719px)] overflow-hidden flex flex-col items-start justify-start py-[72px] px-[49px] text-black team">
        <div className="flex flex-col items-center justify-start gap-[50px]">
          <div className="flex flex-col items-center justify-start gap-[20px]">
            <div className="rounded-8xs [background:linear-gradient(90deg,_#acddf9,_#879cfd)] w-[102px] flex flex-row items-center justify-center p-2.5 box-border">
              <div className="relative">Team</div>
            </div>
            <b className="relative text-17xl inline-block w-[1340px]">
              Our lovely team
            </b>
          </div>


          <div className="flex flex-col items-center justify-start gap-[50px] text-left text-9xl font-inter">

            
            <div className="flex flex-col items-center justify-start gap-[30px]">
              <div className="relative capitalize fhtl">
                Faculty Heads
              </div>
              <div className="flex flex-row items-start justify-start gap-[26px] text-xs font-image-text divalign">
                <div className="flex flex-row gap-[26px]">
                  <div className="relative w-[138px] h-[103px]">
                    <div className="absolute top-[0px] left-[0px] w-[138px] h-[110px]">
                      <div className="absolute top-[0px] left-[0px] [background:linear-gradient(90deg,_#acddf9,_#879cfd)] w-[138px] h-[110px]" />
                      <b className="absolute top-[64px] left-[calc(50%_-_42px)]">
                      Dr. Sivaselvan B
                      </b>
                      <div className="absolute top-[80px] left-[calc(50%_-_50px)] text-3xs">
                      Dean - Student Affairs
                      </div>
                    </div>
                    <img
                      className="absolute top-[10px] left-[45px] rounded-[112px] w-12 h-12 object-cover"
                      alt=""
                      src="/image-38@2x.png"
                    />
                  </div>
                  <div className="relative rounded-8xs w-[138px] h-[110px]">
                    <div className="absolute top-[0px] left-[0px] rounded-8xs [background:linear-gradient(90deg,_#acddf9,_#879cfd)] w-[138px] h-[110px]" />
                    <b className="absolute top-[64px] left-[calc(50%_-_47px)]">
                    Dr. Siva Prasad
                    </b>
                    <div className="absolute top-[80px] left-[calc(50%_-_40px)] text-3xs">
                    A V S - PIC- Co-curricular Affairs
                    </div>
                    <img
                      className="absolute top-[10px] left-[45px] rounded-[300px] w-12 h-12 object-cover"
                      alt=""
                      src="avs.jpeg"
                    />
                  </div>
                  <div className="relative rounded-8xs w-[138px] h-[110px]">
                    <div className="absolute top-[0px] left-[0px] rounded-8xs [background:linear-gradient(90deg,_#acddf9,_#879cfd)] w-[138px] h-[110px]" />
                    <b className="absolute top-[64px] left-[calc(50%_-_47px)]">
                      Dr. Parvathy Das
                    </b>
                    <div className="absolute top-[80px] left-[calc(50%_-_40px)] text-3xs">
                    PIC - Co-curricular Affairs
                    </div>
                    <img
                      className="absolute top-[10px] left-[45px] rounded-[300px] w-12 h-12 object-cover"
                      alt=""
                      src="/image-39@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-start gap-[30px]">
              <div className="relative capitalize fhtl">
              SAC - Technical Affairs
              </div>
              <div className="flex flex-row items-start justify-start gap-[26px] text-xs font-image-text divalign">
                <div className="flex flex-row gap-[26px]">
                  <div className="flex flex-col items-center justify-start">
                    <div className="relative w-[138px] h-[103px]">
                      <div className="absolute top-[0px] left-[0px] w-[138px] h-[103px]">
                        <div className="absolute top-[0px] left-[0px] rounded-8xs [background:linear-gradient(90deg,_#acddf9,_#879cfd)] w-[138px] h-[103px]" />
                        <b className="absolute top-[64px] left-[calc(50%_-_52px)]">
                          G.Praneeth kumar
                        </b>
                        <div className="absolute top-[80px] left-[calc(50%_-_45px)] text-3xs">
                          Technical secretary
                        </div>
                      </div>
                      <img
                        className="absolute top-[10px] left-[45px] rounded-81xl w-12 h-12 object-cover"
                        alt=""
                        src="/image-40@2x.png"
                      />
                    </div>
                    <div className="rounded-[34.21px] [background:linear-gradient(90deg,_#acddf9,_#879cfd)] overflow-hidden flex flex-row items-start justify-start p-[6.842105388641357px] mt-[-7px]">
                      <img
                        className="relative w-[12.3px] h-[12.3px]"
                        alt=""
                        src="/vector.svg"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start">
                    <div className="relative w-[138px] h-[103px]">
                      <div className="absolute top-[0px] left-[0px] w-[138px] h-[103px]">
                        <div className="absolute top-[0px] left-[0px] rounded-8xs [background:linear-gradient(90deg,_#acddf9,_#879cfd)] w-[138px] h-[103px]" />
                        <b className="absolute top-[64px] left-[calc(50%_-_26px)]">
                          Sundar S
                        </b>
                        <div className="absolute top-[80px] left-[calc(50%_-_56px)] text-3xs">
                          Joint Technical Secretary
                        </div>
                      </div>
                      <img
                        className="absolute top-[10px] left-[calc(50%_-_24px)] rounded-81xl w-12 h-12 object-cover"
                        alt=""
                        src="/image-40@2x.png"
                      />
                    </div>
                    <div className="rounded-[34.21px] [background:linear-gradient(90deg,_#acddf9,_#879cfd)] overflow-hidden flex flex-row items-start justify-start p-[6.842105388641357px] mt-[-7px]">
                      <img
                        className="relative w-[12.3px] h-[12.3px]"
                        alt=""
                        src="/vector.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            
            <div className="flex flex-col items-center justify-start gap-[30px]">
              <div className="relative capitalize fhtl">Web Development Team</div>
              <div className="flex flex-row items-start justify-start gap-[26px] text-xs font-image-text animate-scrolling">
                {web_team.map((member, index) => (
                  <MemberCard key={index} member_name={member.name} member_img= {member.img} />
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center justify-start gap-[30px]">
              <div className="relative capitalize fhtl">Frost Team</div>
              <div className="flex flex-row items-start justify-start gap-[26px] text-xs font-image-text animate-scrolling">
                {frost_team.map((member, index) => (
                  <MemberCard key={index} member_name={member.name} member_img= {member.img} />
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center justify-start gap-[30px]">
              <div className="relative capitalize fhtl">Operations Team</div>
              <div className="flex flex-row items-start justify-start gap-[26px] text-xs font-image-text animate-scrolling">
                {operations_team.map((member, index) => (
                  <MemberCard key={index} member_name={member.name} member_img= {member.img} />
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center justify-start gap-[30px]">
              <div className="relative capitalize fhtl">Events Team</div>
              <div className="flex flex-row items-start justify-start gap-[26px] text-xs font-image-text animate-scrolling">
                {event_team.map((member, index) => (
                  <MemberCard key={index} member_name={member.name} member_img= {member.img} />
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center justify-start gap-[30px]">
              <div className="relative capitalize fhtl">Design Team</div>
              <div className="flex flex-row items-start justify-start gap-[26px] text-xs font-image-text animate-scrolling">
                {design_team.map((member, index) => (
                  <MemberCard key={index} member_name={member.name} member_img= {member.img} />
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center justify-start gap-[30px]">
              <div className="relative capitalize fhtl">Public Outreach Team</div>
              <div className="flex flex-row items-start justify-start gap-[26px] text-xs font-image-text md:animate-scrolling">
                {video_team.map((member, index) => (
                  <MemberCard key={index} member_name={member.name} member_img= {member.img} />
                ))}
              </div>
            </div>



            {/* <div className="flex flex-col items-center justify-start gap-[30px]">
              <div className="relative capitalize fhtln">
                <span>Designed and developed with</span>
                <span className="text-red">❤</span>
                <span>️ by : </span>
                <span>️ Website Design and Development Team </span>
              </div>
            </div> */}
          </div>
        </div>
      </div>


      <div className="absolute bottom-[-1500px] w-[100vw] flex flex-col items-start justify-start p-[50px] box-border bg-[url('/frame.png')] bg-cover bg-no-repeat bg-[top] text-center foot">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row md:gap-10">
        <div className="flex flex-col items-center md:items-start gap-6 md:w-2/6">
          <div className="font-semibold text-whitesmoke">
            <Image
              src="/nav_logo.png"
              alt="Tech Affairs Logo"
              width={80}
              height={80}
            />
          </div>
          <div className="text-center md:text-left text-whitesmoke">
            <p className="m-0 ml-0">
              Elevating Technology At IIITDM Kancheepuram
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start gap-6 text-whitesmoke md:w-4/6 md:gap-10">
          {/* PC Version - Two Columns */}
          <div className="hidden md:flex md:flex-row md:gap-10">
            <div className="flex flex-col items-start gap-6 text-whitesmoke">
              <div className="font-semibold">Innovation Grant and Support</div>
              <a
                className="cursor-pointer"
                href="/pdfs/Advance_Request_Form.pdf"
                download="Advance_Request_Form.pdf"
              >
                Advance Request Form
              </a>
              <a
                className="cursor-pointer"
                href="/pdfs/Budget_Request_Form.pdf"
                download="Budget_Request_Form.pdf"
              >
                Budget Request Form
              </a>
              <a
                className="cursor-pointer"
                href="/pdfs/Reimbursement_Form.pdf"
                download="Reimbursement_Form.pdf"
              >
                Reimbursement Form
              </a>
            </div>

            <div className="flex flex-col items-start gap-6 text-whitesmoke">
              <a
                className="cursor-pointer"
                href="/pdfs/SA_Tech_Advance_Settlement_Form.pdf"
                download="SA_Tech_Advance_Settlement_Form.pdf"
              >
                Advance Settlement Form
              </a>
              <a
                className="cursor-pointer"
                href="/pdfs/SA_Tech_03_ASSET_TRANSFER_FORM.pdf"
                download="SA_Tech_03_ASSEST_TRANSFER_FORM.pdf"
              >
                Asset Transform Form
              </a>
              <a
                className="cursor-pointer"
                href="/pdfs/SA_Tech_Non_Consumable_Indent.pdf"
                download="SA_Tech_Non_Consumable_Indent.pdf"
              >
                Non Consumable Indent Form
              </a>
              <a
                className="cursor-pointer"
                href="/pdfs/SA_Tech_Temporary_Advance_Form.pdf"
                download="SA_Tech_Temporary_Advance_Form.pdf"
              >
                Temporary Advance Form
              </a>
            </div>
          </div>

          {/* Mobile Version - Single Column */}
          <div className="md:hidden">
            <div className="flex flex-col items-start gap-6 text-whitesmoke">
              <div className="font-semibold">Innovation Grant and Support</div>
              <a
                className="cursor-pointer"
                href="/pdfs/Advance_Request_Form.pdf"
                download="Advance_Request_Form.pdf"
              >
                Advance Request Form
              </a>
              <a
                className="cursor-pointer"
                href="/pdfs/Budget_Request_Form.pdf"
                download="Budget_Request_Form.pdf"
              >
                Budget Request Form
              </a>
              <a
                className="cursor-pointer"
                href="/pdfs/Reimbursement_Form.pdf"
                download="Reimbursement_Form.pdf"
              >
                Reimbursement Form
              </a>
              <a
                className="cursor-pointer"
                href="/pdfs/SA_Tech_Advance_Settlement_Form.pdf"
                download="SA_Tech_Advance_Settlement_Form.pdf"
              >
                Advance Settlement Form
              </a>
              <a
                className="cursor-pointer"
                href="/pdfs/SA_Tech_03_ASSEST_TRANSFER_FORM.pdf"
                download="SA_Tech_03_ASSEST_TRANSFER_FORM.pdf"
              >
                Asset Transform Form
              </a>
              <a
                className="cursor-pointer"
                href="/pdfs/SA_Tech_03_ASSET_TRANSFER_FORM.pdf"
                download="SA_Tech_Non_Consumable_Indent.pdf"
              >
                Non Consumable Indent Form
              </a>
              <a
                className="cursor-pointer"
                href="/pdfs/SA_Tech_Temporary_Advance_Form.pdf"
                download="SA_Tech_Temporary_Advance_Form.pdf"
              >
                Temporary Advance Form
              </a>
            </div>
          </div>

          <div className="flex flex-col items-start gap-6 text-whitesmoke">
            <div className="font-semibold">I2R MakerSpace</div>
            <a
              className="cursor-pointer"
              href="https://docs.google.com/document/d/1r8gTKgbhtiYPMCVVTHUTe97uFcEpFMG-e1pJwtALNEI/edit#heading=h.4hwppuotdne3"
              target="_blank"
              rel="noopener noreferrer"
            >
              Access Form
            </a>
          </div>
        </div>
      </div>
      <hr className="border-t border-white w-full" />
      <div className="text-center py-4 flex flex-col items-center justify-center lg:flex-row justify-between">
        <p className="text-xs sm:text-sm lg:text-base text-whitesmoke">
          © Technical Affairs IIITDM. All rights reserved.
        </p>
        <div className="flex gap-4 mt-2">
          <button
            className="cursor-pointer bg-transparent text-white text-[15px] text-bold"
            onClick={openModal}
          >
            Disclaimer
          </button>
        </div>
        <DisclaimerModal isOpen={isModalOpen} onClose={closeModal} />
        <div className="flex gap-4 mt-2">
          <a
            href="https://www.instagram.com/iiitdm.technical/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="w-6 h-6" alt="Instagram" src="/instagram.svg" />
          </a>
          <a
            href="https://www.linkedin.com/company/technical-affairs-iiitdm/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="w-6 h-6" alt="LinkedIn" src="/linkedin.svg" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCV0JKK0XVBhzvtuofQB5_5g"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="w-6 h-6" alt="Yt" src="/youtube.svg" />
          </a>
          <a
            href="mailto:technical.affairs@iiitdm.ac.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="w-6 h-6" alt="Mail" src="/mail.svg" />
          </a>
        </div>
      </div>
    </div>


    </div>
  );
};

export default Home1;
