import Welcome from "../components/Welcome.jsx";
import Carousel from "../components/Carousel.jsx";

export default function Index({ data }) {
  return (
    <>
      <main className="text-center text-white flex flex-col items-center mt-[100px] gap-[30px] justify-center">
        <Welcome />
        <Carousel
          name={data[0].name}
          character_photo={data[0].character_photo}
          cover_photo={data[0].cover_photo}
          description={data[0].description}
        />
      </main>
    </>
  );
}
