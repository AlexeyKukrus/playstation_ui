import type {TGame} from "../../../data/games.data.ts";
import cn from "clsx";

interface Props {
  game: TGame
}
export default function GameItem({game}: Props) {
  return(
      <button>
        <div className={cn('p-1 border-2 border-transparent transition-color duration-300 ease-in-out')}>
          <img src={game.coverImage} alt={game.title} className='w-56 h-56 object-cover' />
        </div>
          <div className='mt-2 filter brightness-0 invert'>
              <img
                  src={game.platform === 'PS5' ? 'img/ps5.png' : 'img/ps4.png'}
                  alt={game.platform}
                  width={60}
              />
          </div>

      </button>
  )
}
