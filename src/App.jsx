import React from "react";
import NavBar from "./Component/NavBar";
import Hero from "./Component/Hero";
import Technologies from "./Component/Technologies";
import Projects from "./Component/Projects";
import { ContactUs } from "./Component/ContactUs";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bd-cyan-300 selection:text-cyan-900 h-screen">
      <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="container mx-auto px-8">
        <NavBar />
        <Hero />
        <Technologies />
        <Projects />
        <ContactUs/>
      </div>
    </div>
  );
};

export default App;
