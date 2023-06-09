export default function Footer() {
  return (
    <footer className="w-full bottom-0 absolute lg:relative bg-white lg:pt-1">
      <img
        className="hidden lg:inline-block w-full"
        src="src/assets/images/img-footer-ovalo.png"
        alt=""
      />
      <div className="md:flex justify-between md:items-center sm:px-[300px] max-sm:px-[100px] max-sm:ml-12 md:relative lg:relative lg:px-[50px] md:px-[60px] max-w-[900px] m-auto mt-[100px] ">
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
            <img className="mr-7" src="src/assets/images/Facebook.png" alt="" />
            <img className="mr-7" src="src/assets/images/Twitter.png" alt="" />
            <img className="mr-10" src="src/assets/images/Vimeo.png" alt="" />
            <img className="" src="src/assets/images/Youtube.png" alt="" />
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
  );
}
