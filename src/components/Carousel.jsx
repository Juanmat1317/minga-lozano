export default function Carousel({
  character_photo,
  cover_photo,
  name,
  description,
}) {
  return (
    <div className="hidden lg:inline-block w-full h-72 py-10 mt-[100px] ">
      <div className=" h-[200px] bg-[#4338CA] rounded-md mb-12 w-[85%] mx-24 flex items-center relative ">
        <img
          className="absolute left-2"
          src="src/assets/images/left-arrow.png"
          alt=""
        />
        <img
          className="absolute left-8 h-[225px] w-[180px] mb-8"
          src={character_photo}
          alt=""
        />
        <img
          className="absolute left-72 h-[200px] w-[130px] mb-11"
          src={cover_photo}
          alt=""
        />
        <div className="flex flex-col w-[320px] font-normal text-start text-white ml-[500px]">
          <h4 className="font-roboto text-2xl font-medium ">{name}</h4>
          <p className="font-roboto text-xs font-normal leading-[13.33px]">
            {description}
          </p>
        </div>
        <img
          className="absolute right-8 pl-4"
          src="src/assets/images/right-arrow.png"
          alt=""
        />
      </div>
    </div>
  );
}
