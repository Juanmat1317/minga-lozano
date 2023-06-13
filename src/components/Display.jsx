export default function Display({ options, show, setShow }) {
    return (
        <div className="fixed z-10 top-0 left-0 bg-gradient-to-r bg-[#4338CA] w-full h-full lg:w-[430px] ">
            <div className='flex mt-5 ml-5'>
                <img src="src/assets/images/perfil.jpg" className="rounded-[50px]" alt='Perfil' />
                <div className='flex flex-col ml-3 text-white font-poppins'>
                    <p className='text-base font-semibold'>Juan Mateo Lozano</p>
                    <p className='text-sm font-medium'>lozanomateo40@gmail.com</p>
                </div>
            </div>
            <div onClick={() => setShow(!show)} className="cursor-pointer absolute right-[29px] top-[40px]"><img src="src/assets/images/close.png" alt='close' /></div>
            <div className="absolute top-[85px] w-full lg:w-[430px] flex flex-col items-center">
                {options?.map((each, index) => <div key={index} className='text-white text-center font-poppins text-[15px] font-semibold leading-6 mt-[10px] w-[382px] rounded-lg cursor-pointer py-3 hover:bg-white hover:text-purple-400'>{each.title}</div>)}
            </div>
        </div>
    )
}