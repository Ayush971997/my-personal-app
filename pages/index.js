import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
     

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to My Page!!!
        </h1>

        <p className={styles.description}>
          Here I write Blogs and you can ask me anything!!!
        </p>

       
      </main>
    </div>
  )
}
