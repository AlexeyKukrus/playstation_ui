import {GAMES_DATA, type TGame} from "../../data/games.data.ts";
import GameItem from "./game-item/GameItem.tsx";

export default function GameCarousel() {
  return (
      <div className='flex items-center gap-2'>
        {GAMES_DATA.map((game: TGame) => (
            <GameItem key={game.slug} game={game} />
        ))}
      </div>
  );
}
