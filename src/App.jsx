import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages";
function App() {
  let data = [
    {
      name: "Shonen",
      character_photo: "src/assets/images/img-footer-1.png",
      cover_photo: "src/assets/images/img-middle.png",
      description:
        "Is the manga that is aimed at adolescent boys. They are series with large amounts of action, in which humorous situations often occur. The camaraderie between members of a collective or a combat team stands out.",
    },
  ];
  return (
    <>
      <div className='w-full h-[1000px] lg:h-[500px] bg-center absolute bg-[url("./assets/images/backgroundHome.svg")] mb[10px] bg-no-repeat bg-cover '>
        <Navbar />
        <Index data={data} />
        <Footer />
      </div>
    </>
  );
}

export default App;
