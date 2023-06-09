export default function Navbar() {
  return (
    <>
      <nav className="w-full flex justify-between">
        <div className="mt-[13px] ml-[14px] pl-[11px] pt-[16px] w-[100px] h-[14px] lg:mt-[31px] lg:ml-[46px]">
          <img className="hidden lg:inline-block" src="src/assets/images/Menu1.svg" alt="menu" />
          <img className="inline-block lg:hidden" src="src/assets/images/Menu2.svg" alt="menu" />
        </div>
        <div className="h-12 mr-[20px] mt-[13px] pt-[11.5px] lg:mt-[31px] lg:mr-[46px]">
          <img src="src/assets/images/logo.png" alt="logo" />
        </div>
      </nav>
    </>
  );
}
