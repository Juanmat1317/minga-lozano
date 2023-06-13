import Display from "./Display";
import { useState } from "react";
export default function Navbar() {

  let options = [
    { title: "Home" },
    { title: "Comics" },
    { title: "My Comics" },
    { title: "Favorites" },
    { title: "Logout" }
]
  const [show, setShow] = useState(false)
  return (
    <>
    {show && <Display options={options} show={show} setShow={setShow}/>}
      <nav className="w-full flex justify-between">
        <div className="mt-[13px] ml-[14px] pl-[11px] pt-[16px] w-[100px] h-[14px] lg:mt-[31px] lg:ml-[46px]">
          <img onClick={() => setShow(!show)} className="hidden lg:inline-block" src="src/assets/images/Menu1.svg" alt="menu" />
          <img onClick={() => setShow(!show)} className="inline-block lg:hidden" src="src/assets/images/Menu2.svg" alt="menu" />
        </div>
        <div className="h-12 mr-[20px] mt-[13px] pt-[11.5px] lg:mt-[31px] lg:mr-[46px]">
          <img src="src/assets/images/logo.png" alt="logo" />
        </div>
      </nav>
    </>
  );
}
