export default function Welcome() {
  return (
    <>
      <h1 className="font-poppins font-bold text-[40px] leading-[38px] lg:font-bold lg:text-[64px] lg:leading-[60px]">
      Your favorite comic book store ✨
      </h1>
      <p className="font-poppins font-normal text-[17px] leading[19px] mx-4 inline-block lg:hidden">
        From classics to novelties, we have everythin you need to immerse
        yourself in your favorite universes. Explore our catalog and live the
        adventure of your life.
      </p>
      <p className="font-poppins font-normal lg:text-[24px] lg:leading-[53px] hidden lg:inline-block">
        Explore our catalog to live the adventure of your life 
      </p>
      <button className="bg-[#4338CA] cursor-pointer font-roboto font-medium text-[20px] leading-[19px] text-center w-[300px] h-[59px] rounded-full lg:hidden">
        Started
      </button>
      <button className="bg-[#4338CA] mt-5 ml-62 cursor-pointer font-roboto font-medium text-[22px] w-[250px] h-[55px] rounded-md hidden lg:block">
        Let's go!
      </button>
    </>
  );
}
