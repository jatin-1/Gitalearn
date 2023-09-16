import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import homeimg from "../assets/images/homeimage.jpg";

function Homeindex() {
  return (
    <>
      <Navbar />
      <Hero
        cName="Hero"
        heroImg={homeimg}
        title="Experience the Gita
"
        text="Anywhere, Anytime"
        buttonText="Read More"
        url="/Chapterindex"
        btnClass="show"
      />
    </>
  );
}
export default Homeindex;
