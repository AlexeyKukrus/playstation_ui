import {Bell, Gamepad2, Handbag, SmilePlus, Trophy, Wifi} from "lucide-react";

const currentTime = new Date().toLocaleTimeString([], {
    hour: '2-digit', minute: '2-digit'
});

export default function Header() {

    return (
        <header className='p-8'>
            <div className='text-sm flex items-center gap-18'>
                <div className='flex items-center gap-3'>
                    <time className='font-semibold'>{currentTime}</time>
                    <Wifi className='size-4'/>
                </div>
                <div className='text-xs flex items-center gap-1'>
                    <span className='flex items-center gap-1'>
                        <Handbag fill='white' className='size-5'/>
                        <span>3</span>
                    </span>
                    <span>|</span>
                    <span>$39.97</span>
                </div>

            </div>
            <div>
                <Gamepad2/>
                <span>1</span>
            </div>
            <div>
                <Gamepad2/>
                <span>2</span>
            </div>
            <div>
                <div>
                    <Bell fill='white'/>
                    <span>12</span>
                </div>
                <div>
                    <SmilePlus/>
                    <span>9</span>
                </div>
                <div>
                    <img
                        src="/img/ps-plus.png"
                        alt='PS Plus'
                        width={24}
                        height={24}
                    />
                </div>
                <img
                    src="/img/avatar.png"
                    className='rounded-[25px]'
                    alt='Avatar'
                    width={40}
                    height={40}
                />
                <div>
                    <div>AlexeyKukrus</div>
                    <div>
                        <Trophy fill='white'/>
                        <span>14</span>
                    </div>
                </div>
            </div>
        </header>
    )
}