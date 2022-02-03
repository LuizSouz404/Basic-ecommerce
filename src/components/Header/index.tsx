import Image from 'next/image'
import Link from 'next/link'
import { CgMenuLeftAlt } from 'react-icons/cg'
import { BsHandbag } from 'react-icons/bs'
import styles from './styles.module.scss'

export function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <button className={styles.iconButton}>
          <CgMenuLeftAlt size={24} />
        </button>

        <Link href="/" passHref>
          <div className={styles.logo}>
            <Image layout='fill' src="/images/basics.svg" alt="Basics" />
          </div>
        </Link>

        <button className={styles.iconButton}>
          <BsHandbag size={24} />
        </button>
      </div>
    </header>
  )
}
