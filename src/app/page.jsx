import HomeAbout from "./components/HomePage/AboutUs";
import PopularCourses from "./components/HomePage/PopularCourses";
import HeroSection from "./components/HomePage/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />;
      <HomeAbout />;
      <PopularCourses />;
    </>
  );
}
