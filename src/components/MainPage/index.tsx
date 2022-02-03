import Link from 'next/link'
import styles from './styles.module.scss'

export function MainPage() {
  return (
    <main className={styles.container}>
      <div className={styles.content}>

        <div className={styles.categoryContainer}>
          <strong className={styles.categoryTitle}>Categories</strong>
          <div className={styles.categorySection}>
            <Link href="/product/" passHref>
              <div style={{ backgroundImage: "url('/images/category/new.png')" }} className={styles.categorySectionContent}>
                <span className={styles.categorySectionTitle}>
                  New
                </span>
              </div>
            </Link>
            <Link href="/product/" passHref>
              <div style={{ backgroundImage: "url('/images/category/tshirt.png')" }} className={styles.categorySectionContent}>
                <span className={styles.categorySectionTitle}>
                  t-Shirt
                </span>
              </div>
            </Link>
            <Link href="/product/" passHref>
              <div style={{ backgroundImage: "url('/images/category/jacket.png')" }} className={styles.categorySectionContent}>
                <span className={styles.categorySectionTitle}>
                  Jacket
                </span>
              </div>
            </Link>
            <Link href="/product/" passHref>
              <div style={{ backgroundImage: "url('/images/category/pants.png')" }} className={styles.categorySectionContent}>
                <span className={styles.categorySectionTitle}>
                  Pants
                </span>
              </div>
            </Link>
          </div>
        </div>

      </div>
    </main>
  )
}