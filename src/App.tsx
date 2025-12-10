import TopMenu from "./layout/top-menu/TopMenu.tsx";
import GameCarousel from "./components/game-carousel/GameCarousel.tsx";
import { useState } from "react";
import type { TCategorySlug } from "./types/types.ts";

function App() {
  const [activeCategory, setActiveCategory] = useState<TCategorySlug>("all");
  return (
    <>
      <TopMenu
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <GameCarousel />
    </>
  );
}

export default App;
