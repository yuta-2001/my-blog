import Image from 'next/image';
import styles from './Home.module.css'

export default function Home() {
  return (
    <>
      <div className="w-screen h-screen text-white relative z-20 bg-gradient-to-b from-black/30 to-transparent">
        <div className="p-4 md:p-8 flex flex-col h-full items-center justify-center">
          <h1 className="text-white font-bold mb-8 text-6xl md:text-9xl tracking-wide drop-shadow-lg">
            Engineering Blog
          </h1>
          <div className={`${styles.outlinedText} text-3xl md:text-5xl font-bold p-2 drop-shadow-lg`}>
            Yuta Sugimine / Software Enginner at CyberAgent.inc
          </div>
        </div>
      </div>
      <Image 
        src="/images/mv.jpg" 
        width={1280} 
        height={800} 
        quality={100} 
        className="fixed top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 block min-w-min min-h-screen w-screen h-screen z-10 object-cover" 
        alt="mv" 
        priority
      />
    </>
  )
}
