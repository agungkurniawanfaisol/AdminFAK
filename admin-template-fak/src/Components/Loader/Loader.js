import { HeartLoading } from 'Assets/Lottie'
import React from 'react'
import Lottie from 'react-lottie'
import animated from 'animista-css-generator/animations/animated'
import fadeInRight from 'animista-css-generator/animations/fade-in-right'
import BounceTop from 'animista-css-generator/animations/bounce-top'
import animatedSlower from 'animista-css-generator/animations/animated-slower'

const Loader = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: HeartLoading,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    }

    return (
        <div
            className={`relative z-10`}
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
        >
            <div
                className={` ${animated} ${fadeInRight} ${animatedSlower} fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity`}
            >
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div
                        className={` ${BounceTop}   ${animatedSlower} flex items-end sm:items-center justify-center min-h-full p-2 text-center sm:p-0`}
                    >
                        <Lottie options={defaultOptions} height={300} width={300} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loader
