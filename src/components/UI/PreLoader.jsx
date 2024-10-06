import { useEffect } from 'react';
import { preLoaderAnim } from '../../animations';

export default function PreLoader() {

    useEffect(() => {
        preLoaderAnim();
    }, []);

    return (
        <div className="preloader h-screen w-full bg-black text-white fixed bottom-0 left-0 right-0 z-[55] flex justify-center items-center overflow-hidden">
            <div className="texts-container flex items-center justify-between text-3xl font-extrabold overflow-hidden space-x-4">
                <span>Developer, </span>
                <span>Designer, </span>
                <span>Creator</span>
            </div>
        </div>
    );
}
