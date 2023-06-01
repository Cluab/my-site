import Link from 'next/link'
import styles from '../styles/home.module.css'

export default async function Home() {
  return (
    <div className={styles.home}>
      <div>
        <div><h1>Hello, my name is Ebrahim</h1></div>
        <div><Link href={'/blog'}>Checkout My Blog</Link></div>
        <div><Link href={'/contact'}>Contact Me</Link></div>
      </div>
    </div>
  )
}
