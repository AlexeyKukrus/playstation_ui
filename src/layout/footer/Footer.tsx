import { hotkeysData } from "../../data/hotkeys.data.tsx";
import { KeyInfo } from "../ui/KeyInfo.tsx";

export default function Footer() {
  return (
    <div className="flex items-center gap-5 absolute bottom-5 right-8">
      {hotkeysData.map((hotkey) => (
        <KeyInfo key={hotkey.label} keyDetail={hotkey} />
      ))}
    </div>
  );
}
