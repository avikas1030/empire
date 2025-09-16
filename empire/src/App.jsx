import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import HealthBenefits from "./components/HealthBenefits";
import CurrentSituation from "./components/CurrentSituation";
import Technology from "./components/Technology";
import Inovation from "./components/Inovation ";
import Milestones from "./components/Milestones";
import Milestone from "./components/Milestone";
import OurSuccess from "./components/OurSuccess";

function App() {
  return (
    <>
      <Header />
      <main>
        {/* Other sections like Hero, About, etc */}
        <HeroSection/>
        <About/>
        <CurrentSituation/>
        <Technology/>
        <HealthBenefits/>
        <Inovation/>
        <Milestones/>
        <Milestone/>
        <OurSuccess/>
      </main>
    </>
  );
}

export default App;
