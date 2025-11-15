import type { THotkeyKey } from "../../data/hotkeys.data.tsx";

interface Props {
  keyDetail: THotkeyKey;
}

export function KeyInfo({ keyDetail: key }: Props) {
  return (
    <div className="flex items-center gap-2">
      <div className="bg-white rounded-full size-5 text-[#353841] shadow">
        {key.icon}
      </div>
      <div>{key.label}</div>
    </div>
  );
}
