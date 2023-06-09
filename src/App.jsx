import Index from "./pages/Index.jsx";
import Main from "./layouts/Main.jsx";

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
    <div className='w-full h-[1400px] lg:h-[550px] bg-center absolute bg-[url("./assets/images/backgroundHome.svg")] mb[10px] bg-no-repeat bg-cover '>
      <Main>
        <Index data={data} />
      </Main>
    </div>
  );
}

export default App;
