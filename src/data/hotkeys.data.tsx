import { ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";

export const hotkeysData = [
  {
    icon: <>1</>,
    label: "TOP MENU",
    hotkey: "1",
  },
  {
    icon: (
      <>
        <ArrowDown />
      </>
    ),
    label: "DETAILS",
    hotkey: "ArrowDown",
  },
  {
    icon: (
      <>
        <ArrowRight />
      </>
    ),
    label: "NEXT GAME",
    hotkey: "ArrowRight",
  },
  {
    icon: (
      <>
        <ArrowLeft />
      </>
    ),
    label: "PREV GAME",
    hotkey: "ArrowLeft",
  },
];

export type THotkeyKey = (typeof hotkeysData)[number];
