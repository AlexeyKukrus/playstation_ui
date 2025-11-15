import { Bell, Gamepad2, Handbag, SmilePlus, Trophy, Wifi } from "lucide-react";

const currentTime = new Date().toLocaleTimeString([], {
  hour: "2-digit",
  minute: "2-digit",
});

export default function Header() {
  return (
    <header className="p-8 grid grid-cols-[1fr_5fr_2fr] items-center">
      <div className="text-sm flex items-center gap-18">
        <div className="flex items-center gap-3">
          <time className="font-semibold">{currentTime}</time>
          <Wifi className="size-4" />
        </div>
        <div className="text-xs flex items-center gap-1">
          <span className="flex items-center gap-1">
            <Handbag fill="white" className="size-5" />
            <span>3</span>
          </span>
          <span>|</span>
          <span>$39.97</span>
        </div>
      </div>
      <div className="text-xs font-semibold flex items-center gap-2 justify-center">
        <div className="flex flex-col items-center">
          <Gamepad2 />
          <div className="-mt-1.5">1</div>
        </div>
        <div className="flex flex-col items-center">
          <Gamepad2 />
          <div className="-mt-1.5">2</div>
        </div>
      </div>
      <div className="flex items-center justify-end gap-6 test-sm font-semibold">
        <div className="flex items-center gap-1.5">
          <Bell fill="white" />
          <span>12</span>
        </div>
        <div className="flex items-center gap-1.5">
          <SmilePlus />
          <span>9</span>
        </div>
        <div className="flex items-center gap-3">
          <img src="/img/ps-plus.png" alt="PS Plus" width={24} height={24} />
          <div className="flex items-center gap-2">
            <img
              src="/img/avatar.png"
              className="rounded-[25px]"
              alt="Avatar"
              width={45}
              height={45}
            />
          </div>

          <div>
            <div className="mb-1">AlexeyKukrus</div>
            <div className="flex items-center gap-1.5 text-xs">
              <Trophy size={16} fill="white" />
              <span>14</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
