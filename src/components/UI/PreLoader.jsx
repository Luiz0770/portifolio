import { useEffect } from 'react';
import { preLoaderAnim } from '../../animations';
import './PreLoader.css'

export default function PreLoader() {

    useEffect(() => {
        preLoaderAnim()
    }, [])

    return (
        <>
            <div className="preloader">
                <div className="texts-container">
                    <span>Developer, </span>
                    <span>Curator, </span>
                    <span>Vibe </span>
                </div>

            </div>
        </>
    );
}
