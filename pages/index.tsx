import type { NextPage } from 'next'
import Head from 'next/head'
import TaskList from './TaskList'
import styles from '../styles/Home.module.css'
import { useAppSelector } from '../redux/hooks'

const Home: NextPage = () => {
	const tasks = useAppSelector(state => state.tasks)
  return (
    <div className={styles.container}>
      <Head>
        <title>NextJS TODO App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          TODO List
        </h1>

				<TaskList tasks={tasks}></TaskList>
        
      </main>

      <footer className={styles.footer}>
        Created with ♥♥
      </footer>
    </div>
  )
}

export default Home