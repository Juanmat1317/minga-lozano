import { useEffect, useState } from "react";
import axios from "axios";
import apiUrl from "../apiUrl";
export default function Carousel() {
  
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios(apiUrl + "/categories")
      .then((res) => {
        //console.log(res.data.response))
        setCategories(res.data.response);
      })
      .catch((err) => console.log(err));
  }, []);
  //let counter = 0
  const [counter, setCounter] = useState(0);
  const next = () => {
    //counter = counter+1
    //las variables de estado se modifican gracias a su funcion seteadora, no mediante la reasignacion
    setCounter(counter + 1);
    console.log(counter);
  };
  const prev = () => {
    //counter = counter-1
    setCounter(counter - 1);
    console.log(counter);
  };
  
  return (
    <>
      <div className="hidden lg:inline-block w-full h-72 py-10 mt-[100px] ">
        <div className=" h-[200px] bg-[#4338CA] rounded-md mb-12 w-[85%] mx-24 flex items-center relative ">
          <img
            onClick={prev}
            className="absolute left-2 pl-1"
            src="src/assets/images/left-arrow.png"
            alt=""
          />
          <img
            className="absolute left-10 h-[225px] w-[180px] mb-8"
            src={categories[counter]?.character_photo}
            alt=""
          />
          <img
            className="absolute left-72 h-[200px] w-[130px] mb-11"
            src={categories[counter]?.cover_photo}
            alt=""
          />
          <div className="flex flex-col w-[320px] font-normal text-start text-white ml-[500px]">
            <h4 className="font-roboto text-2xl font-medium ">{categories[counter]?.name.toUpperCase()}</h4>
            <p className="font-roboto text-xs font-normal leading-[13.33px]">
              {categories[counter]?.description}
            </p>
          </div>
          <img
            onClick={next}
            className="absolute right-8 pl-4"
            src="src/assets/images/right-arrow.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
