export default function Navbar() {
  return (
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
  )
}
