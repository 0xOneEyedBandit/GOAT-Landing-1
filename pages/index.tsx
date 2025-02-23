import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import styles from '../styles/Home.module.css'
import Logo from "../DEFINITIVOOO.png"
import Tg from "../public/socials/telegram.svg"
import Tw from "../public/socials/twitter (1).svg"
import Ds from "../public/socials/discord.svg"
import Timer from "../pages/src/renderTimer"
import "animate.css"
 //import Part from "../src/particles"

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>GOAT MONEY</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>  
      {/* <Part><Part/> */}
        <header className={styles.title}>
          <p id ="title" className={styles.titleStyle}>GOAT MONEY </p>
        </header>
        
        <div className={'image-container'}>
          <Image 
            layout="responsive" 
            className={'image'}
            src= {Logo} 
            alt=" GOAT Logo" 
            priority></Image></div>
        <h1 className={styles.description}>
          The next generation Avalanche memecoin.
        </h1>
        {/* <Timer></Timer> */}
        <div className={styles.grid}>
            <button type= "button" className="button" ><a target="_blank" rel="noreferrer noopener" href= "https://one-eyed-bandit.gitbook.io/goat-money/">Docs</a> </button>
            <button className="button button2" disabled ><a target="_blank" rel="noreferrer noopener">DApp Soon</a></button>
        </div>
        <main className={styles.main2}>
          <a className= "animate__animated animate__lightSpeedInLeft animate__delay-2s	2s" target="_blank" rel="noreferrer noopener" href= "https://linktr.ee/GoatMoney">Join our community!</a>
            <div className= {styles.grid2}>
              <h1 className={styles.icon}>
                <button className= {styles.button}><a target="_blank" rel="noreferrer noopener" href= "https://t.me/+N-FoJXd372UzMDVh">
                  <Image 
                src= {Tg} 
                alt="Telegram" 
                layout="responsive" 
                className={styles.icon}>
                </Image>
                </a>
                </button>
              </h1>
              <h1 className={styles.icon}>
                <button className= {styles.button}><a target="_blank" rel="noreferrer noopener" href= "https://twitter.com/GoatMoneyToken?s=20">
                <Image 
                  src= {Tw} 
                  alt="Twitter" 
                  layout="responsive" 
                  className={styles.icon}>
                  </Image>
                  </a>
                  </button>
              </h1>
              <h1 className={styles.icon}>
                <button className= {styles.button} ><a target="_blank" rel="noreferrer noopener" href="https://discord.gg/BSkmZGQeM5">
                <Image 
                  src= {Ds} 
                  alt="Discord" 
                  layout="responsive" 
                className={styles.icon}>
                  </Image></a>
                  </button>
              </h1>

            </div>
          </main>
          <footer className={styles.footer}>
          <p className= {styles.ftext}>Bringed to you with love by Patagonia Labs</p>
            </footer>
      </main>

      
    </div>
  )
}

export default Home
