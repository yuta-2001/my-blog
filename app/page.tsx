import Image from 'next/image';
import Fireworks from '@fireworks-js/react';
import styles from './Home.module.css'

export default function Home() {
  return (
    <>
      <div className="w-screen h-screen  text-white relative z-20 bg-black bg-opacity-30">
        <div className="p-4 md:p-8 flex flex-col h-full items-center justify-center">
          <h2 className="text-white font-bold mb-8 text-9xl">
            Engineering Blog
          </h2>
          <div className={`${styles.outlinedText} text-3xl md:text-5xl font-bold p-2`}>
            Yuta Sugimine / Yokohama City Univ.
          </div>
        </div>
        <Fireworks
          options={{
            hue: {
              min: 0,
              max: 209
            },
            acceleration: 1.00,
            brightness: {
              min: 4,
              max: 95
            },
            decay: {
              min: 0.013,
              max: 0.033
            },
            delay: {
              min: 24.52,
              max: 55.00
            },
            explosion: 4,
            flickering: 40.00,
            intensity: 6.00,
            friction: 0.96,
            gravity: 1.52,
            opacity: 0.1,
            particles: 103,
            traceLength: 5.70,
            traceSpeed: 10,
            rocketsPoint: {
              min: 0,
              max: 100
            },
            lineWidth: {
              explosion: {
                min: 0.83,
                max: 5.65
              },
              trace: {
                min: 0.10,
                max: 4.84
              }
            },
            lineStyle: "round",
            mouse: {
              click: true,
              move: false,
              max: 2
            }
          }}
          style={{
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            position: 'fixed',
            zIndex: 15
          }}
        />
      </div>
      <Image src="/images/mv.jpg" width={1280} height={800} quality={100} className="fixed top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 block min-w-min min-h-screen w-screen h-screen z-10" alt="mv" />
    </>
  )
}
