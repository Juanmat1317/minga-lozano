import { useState } from "react";

function App() {
  return (
    <>
      <div className='w-full h-[1000px] lg:h-[400px] bg-center absolute bg-[url("./assets/images/backgroundHome.svg")] mb[10px] bg-no-repeat bg-cover '>
        <nav className="flex justify-between ">
          <img
            className="mt-[13px] ml-[14px] pl-[11px] pt-[16px] w-14 h-14 lg:mt-[31px] lg:ml-[46px]"
            src="src/assets/images/menu.png"
            alt="menu"
          />
          <img
            className="h-12 mr-[20px] mt-[13px] pt-[11.5px] lg:mt-[31px] lg:mr-[46px] "
            src="src/assets/images/logo.png"
            alt="logo"
          />
        </nav>

        <main>
          <div className="text-center text-white flex flex-col items-center m-[21px] gap-[30px] justify-center">
            <h1 className="font-poppins font-bold text-[40px] leading-[38px] lg:font-bold lg:text-[64px] lg:leading-[60px]">
              Your favorite comic book store
            </h1>
            <p className="font-poppins font-normal text-[17px] leading[19px] inline-block lg:hidden">
              From classics to novelties, we have everythin you need to immerse
              yourself in your favorite universes. Explore our catalog and live
              the adventure of your life.
            </p>
            <p className="font-poppins font-normal lg:text-[24px] lg:leading-[23px] hidden lg:inline-block">
              Explore our catalog to live the adventure of your life
            </p>
            <button className="bg-[#4338CA] cursor-pointer font-roboto font-medium text-[20px] leading-[19px] text-center w-[300px] h-[59px] rounded-full lg:hidden">
              Started
            </button>
            <button className="bg-[#4338CA] cursor-pointer font-roboto font-medium text-[22px] w-[250px] h-[55px] rounded-md hidden lg:inline-block">
              Let's go!
            </button>
          </div>
          <div className="hidden lg:inline-block w-full h-72 py-10 mt-[70px] ">
            <div className=" h-[200px] bg-[#4338CA] rounded-md mb-12 w-[85%] mx-24 flex items-center relative ">
              <img
                className="absolute left-2"
                src="src/assets/images/left-arrow.png"
                alt=""
              />
              <img
                className="absolute left-8 h-[225px] w-[180px] mb-8"
                src="src/assets/images/img-footer-1.png"
                alt=""
              />
              <img
                className="absolute left-72 h-[200px] w-[130px] mb-11"
                src="src/assets/images/img-middle.png"
                alt=""
              />
              <div className="flex flex-col w-[320px] font-normal text-start text-white ml-[500px]">
                <h4 className="font-roboto text-2xl font-medium ">Shonen</h4>
                <p className="font-roboto text-xs font-normal leading-[13.33px]">
                  Is the manga that is aimed at adolescent boys. They are series
                  with large amounts of action, in which humorous situations
                  often occur. The camaraderie between members of a collective
                  or a combat team stands out.
                </p>
              </div>
              <img
                className="absolute right-8 pl-4"
                src="src/assets/images/right-arrow.png"
                alt=""
              />
            </div>
           
          </div>
        </main>

        <footer className="w-full bottom-0 absolute lg:relative bg-white lg:pt-1">
        <img className="hidden lg:inline-block w-full" src="src/assets/images/img-footer-ovalo.png" alt="" />
          <div className="md:flex justify-between md:items-center sm:px-[300px] max-sm:px-[100px] md:relative lg:relative lg:px-[50px] md:px-[60px] max-w-[900px] m-auto mt-[100px] ">
            <div className="font-poppins md:flex lg:flex max-sm:ml-[60px] justify-between mb-10 font-normal text-[#7A7A7A]">
              <p className="mr-10 sm:ml-[10px] max-sm:ml-[10px] relative">Home</p>
              <p className="ml-8 sm:ml-[10px] max-sm:ml-[10px]">Manga</p>
            </div>
            <div className="flex mr-[100px] lg:w-[100px] sm:w-[60px] max-sm:w-[50px] max-sm:ml-[50px] relative pl-0 mb-8">
              <img src="src/assets/images/Logo-footer-1.png" alt="" />
              <img src="src/assets/images/logo-footer-2.png" alt="" />
            </div>
            <div className="sm:inline-block sm:ml-[-50px] max-sm:inline-block max-sm:mr-[-20px]">
              <div className="flex flex-wrap h-2">
                <img
                  className="mr-7"
                  src="src/assets/images/Facebook.png"
                  alt=""
                />
                <img
                  className="mr-7"
                  src="src/assets/images/Twitter.png"
                  alt=""
                />
                <img
                  className="mr-10"
                  src="src/assets/images/Vimeo.png"
                  alt=""
                />
                <img
                  className=""
                  src="src/assets/images/Youtube.png"
                  alt=""
                />
              </div>
              <div className="flex mt-12 ">
                <button className="bg-[#4338CA] cursor-pointer text-white font-poppins text-[15px] text-center w-[200px] max-sm:w-[200px] h-[35px] rounded-full">
                  Donate ❤️
                </button>
              </div>
            </div>
          </div>
          <hr className="mx-[200px] mt-10 mb-14" />
        </footer>
      </div>
    </>
  );
}

export default App;
