// pages/index.js
import NavBar from "./components/NavBar/NavBar";
import HeroSection from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import Details from "./components/Details/Details";

export default function Home() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Details />
      <Footer />
    </div>
  );
}
