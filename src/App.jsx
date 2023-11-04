import { useState } from "react";
import Hero from "./assets/Hero.svg";
import Mobile from "./assets/mobilelogin.svg";
import Icon from "./assets/Icon.svg";
import Happy from "./assets/happy.svg";
import Social from "./assets/social.svg";
import Mention from "./assets/mention.svg";
import Facebook from "./assets/facebook.svg";
import Linkin from "./assets/linkin.svg";
import Twitter from "./assets/twitter.svg";
import Youtube from "./assets/youtube.svg";
import Instagram from "./assets/instagram.svg";
function App() {
  return (
    <>
      <nav className="w-full h-[60px] bg-transparent absolute">
        <div className="flex justify-around items-center mt-3">
          <div className="pagelink w-48 text-sm text-center">
            <span>Home</span>
            <span>About</span>
            <span>Contact</span>
          </div>
          <div className="text-[26px] font-black text-[#37447E]">Landing</div>
          <div className="w-48 text-center">
            <button className="font-medium w-[160px] h-[26px] text-white bg-[#111B47] text-[12px] leading-[18px] rounded-[2px]">Buy Now</button>
          </div>
        </div>
      </nav>
      <main className="main">
        <div className="w-[40%] 2xl:w-[30%] pt-[120px] 2xl:pt-[303px] ml-[163.12px]"><div className="text-[40px] 2xl:text-[50px] font-[500] leading-[66px] tracking-[1px] mb-5">Introduce Your Product Quickly & Effectively</div>
          <p className="text-[#505F98] text-[16px] 2xl:text-[18px] font-[400] leading-[30px]">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
          <br/>
          <p className="text-[#505F98]">mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
          <div className="mt-[74px]"><button className="mr-[30px] text-white bg-[#111B47] font-medium py-[5px] w-[189px] border-[#111B47] solid border-2 rounded-[2px]">Purchase UI Kit</button><button className="text-[#091133] font-medium py-[5px] px-[26px] w-[189px] border-2 border-[#091133] rounded-[2px] solid">Learn More</button></div>
        </div>
      </main>
      <main className="flex relative justify-center flex-row-reverse items-center py-[109px]">
        <img src={Mobile}  className="h-[448px] 2xl:h-[524px] w-auto mx-[15px]"/>
        <div className="w-[40%] 2xl:w-[30%] mx-[15px]">
          <div className="text-[32px] 2xl:text-[36px] font-medium leading-[48px]">Light, Fast & Powerful</div>
          <p className="text-[#505F98] text-[16px] 2xl:text-[18px] font-[400] leading-[30px] mt-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
          <p className="text-[#505F98] mt-3">mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
          <div className="flex mt-[40px] justify-around 2xl:mt-[80px]">
            <div className="w-[45%]">
              <img src={Icon} className="w-8 h-auto"/>
              <div className="font-medium mt-[14px] text-[#091133]">Title Goes Here</div>
              <p className="text-[12px] mt-[6px] text-[#5D6970]">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
            </div>
            <div className="w-[45%]">
              <img src={Icon} className="w-8 h-auto"/>
              <div className="font-medium mt-[14px] text-[#091133]">Title Goes Here</div>
              <p className="text-[12px] mt-[6px] text-[#5D6970]">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
            </div>
          </div>
        </div>
      </main>
      <main className="flex relative justify-center flex-row items-center py-[109px]">
        <img src={Happy} className="h-[315px] w-auto mx-[36px] 2xl:mx-[77.5px]"/>
        <div className="w-[40%] 2xl:w-[30%] mx-[36px] 2xl:mx-[77.5px]">
          <div className="text-[32px] 2xl:text-[36px] font-medium leading-[48px]">Light, Fast & Powerful</div>
          <p className="text-[#505F98] text-[16px] 2xl:text-[18px] font-[400] leading-[30px] mt-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
          <p className="text-[#505F98] mt-3">mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
        </div>
      </main>
      <main className="flex relative justify-center flex-row items-center py-[109px]">
        <img src={Social} className="h-[315px] w-auto mx-[36px] 2xl:mx-[77.5px]"/>
        <div className="w-[40%] 2xl:w-[30%] mx-[36px] 2xl:mx-[77.5px]">
          <div className="text-[32px] 2xl:text-[36px] font-medium leading-[48px]">Light, Fast & Powerful</div>
          <p className="text-[#505F98] text-[16px] 2xl:text-[18px] font-[400] leading-[30px] mt-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
          <p className="text-[#505F98] mt-3">mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
        </div>
      </main>
      <main className="flex relative justify-center flex-row items-center py-[109px]">
        <img src={Mention} className="h-[315px] w-auto mx-[36px] 2xl:mx-[77.5px]"/>
        <div className="w-[40%] 2xl:w-[30%] mx-[36px] 2xl:mx-[77.5px]">
          <div className="text-[32px] 2xl:text-[36px] font-medium leading-[48px]">Light, Fast & Powerful</div>
          <p className="text-[#505F98] text-[16px] 2xl:text-[18px] font-[400] leading-[30px] mt-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
          <p className="text-[#505F98] mt-3">mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
          <button className="mt-[44px] text-white bg-[#111B47] font-medium py-[5px] w-[189px] border-[#111B47] solid border-2 rounded-[2px]">Purchase Now</button>
        </div>
      </main>
      <main className="text-center rec pt-[237px] pb-[307px]">
        <div className="w-[31%] mx-auto">
          <div className="text-[36px] font-medium text-[#091133]">A Price to Suit Everyone</div>
          <p className="mt-4 text-[#6F7CB2]">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
          <div className="text-[50px] font-medium text-[#222F65] mt-[36px] tracking-[1px] leading-[66px]">$40</div>
          <div className="text-[#37447E] font-[400]">UI Design Kit</div>
          <div className="text-[#5D6970] text-sm font-[400] mt-[60px]">See, One price. Simple.</div>
          <button className="mt-[9px] text-white bg-[#111B47] font-medium  w-[189px] h-[32px] border-[#111B47] solid border-2 rounded-[2px]">Purchase Now</button>
        </div>
      </main>
      <footer className="bg-[#E7ECFF] -mt-24 pb-[36px]">
        <div className="flex justify-around items-center pt-[60px] mb-10">
          <div className="w-48 text-sm text-center text-[#939EA4] font-medium">©2023 Yourcompany</div>
          <div className="text-[26px] font-black text-[#37447E]">Landing</div>
          <div className="w-48 text-center"><button className="text-white text-[12px] w-[109px] h-[26px] bg-[#111B47] rounded-[2px]">Purchase now</button></div>
        </div>
        <hr className="mb-4 bg-[#CDD1D4] h-[1px] w-[70%] mx-auto"></hr>
        <div className="flex justify-around">
          <div className="text-[#929ECC] text-sm">
            <span className="mr-[60px]">Home</span>
            <span className="mr-[60px]">About</span>
            <span>Contact</span>
          </div>
          <div className="flex">
            <img src={Facebook} className="w-4 h-auto mr-[30px]"/>
            <img src={Linkin} className="w-4 h-auto mr-[30px]"/>
            <img src={Twitter} className="w-4 h-auto mr-[30px]"/>
            <img src={Youtube} className="w-4 h-auto mr-[30px]"/>
            <img src={Instagram} className="w-4 h-auto mr-[30px]"/>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
