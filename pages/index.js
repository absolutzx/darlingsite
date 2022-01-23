import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useTheme } from 'next-themes'

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div>
      <button className={styles.card} onClick={() => setTheme('light')}>Light Mode</button>
    </div>
  )
}

const ThemeChanger2 = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div>
      <button className={styles.card} onClick={() => setTheme('dark')}>Dark Mode</button>
    </div>
  )
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Darling - Home</title>
        <meta name="description" content="Darling bot" />
        <link rel="icon" href="/icon.png" />
      </Head>
      
      <main className={styles.main}>
      <img className={styles.centericon} src="https://cdn.discordapp.com/avatars/931190925445693450/45b99ddd1b05bd6659d79d4dc02a37ec.png?size=256" alt="Your Name" />
        <h1 className={styles.title}>
          Welcome to Darling !
        </h1>

        <div className={styles.grid}>
          <a href="button" className={styles.card}>
            <h2>Sobre &rarr;</h2>
            <p>Encontre respostas detalhadas sobre as Funcionalidade do Bot.</p>
          </a>

          <a href="https://discord.com/oauth2/authorize?client_id=931190925445693450&permissions=8&scope=bot%20applications.commands" className={styles.card}>
            <h2>Adicione &rarr;</h2>
            <p>Clique aqui para adicionar o Bot ao seu servidor de Discord.</p>
          </a>
        </div>

      <div className={styles.grid}>
        <div>
        <ThemeChanger2></ThemeChanger2>
        </div>
        <div>
          <ThemeChanger></ThemeChanger>
        </div>
      </div>
        
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by Stiker | Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
