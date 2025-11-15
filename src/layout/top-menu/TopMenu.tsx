import { CATEGORIES } from "../../data/categories.data.ts";
import type { ICategory, TCategorySlug } from "../../types/types.ts";
import cn from "clsx";

interface Props {
  activeCategory: TCategorySlug;
  setActiveCategory: (slug: TCategorySlug) => void;
}
export default function TopMenu({ activeCategory, setActiveCategory }: Props) {
  return (
    <nav className="ml-28 mt-5">
      <ul className="flex gap-2 items-center">
        {CATEGORIES.map((category: ICategory) => (
          <li>
            <button
              className={cn(
                "border font-medium rounded-full py-0.5 px-5",
                activeCategory === category.slug
                  ? "border-[#1d6ab2]"
                  : "border-transparent",
              )}
              onClick={() => {
                console.log(category);
                setActiveCategory(category.slug);
              }}
            >
              {category.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
