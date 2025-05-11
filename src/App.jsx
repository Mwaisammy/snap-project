import React from "react";
import Navigation from "./components/shareable/navigation";
import Hero from "./components/hero/hero";

const App = () => {
  return (
    <div className="max-w-screen-xlg px-20 pt-3 mx-auto h-screen">
      <Navigation />
      <Hero />
    </div>
  );
};

export default App;
