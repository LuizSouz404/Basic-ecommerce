import Link from 'next/link'
import styles from './styles.module.scss'

export function MainPage() {
  return (
    <main className={styles.container}>
      <div className={styles.content}>

        <div className={styles.categoryContainer}>
          <strong className={styles.sectionTitle}>Categories</strong>
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

        <div className={styles.trendingContainer}>
          <strong>Trending collections</strong>

          <div className={styles.trendingSection}>
            <Link href="/product/" passHref>
              <div style={{ background: "linear-gradient(37.44deg, #000000 2.71%, rgba(0, 0, 0, 0) 50.1%), no-repeat center/cover url('/images/category/jacket.png') , #171717" }} className={styles.trendingSectionContent}>
                <span className={styles.trendingSectionTitle}>
                  New
                </span>
              </div>
            </Link>
            <Link href="/product/" passHref>
              <div style={{ background: "linear-gradient(37.44deg, #000000 2.71%, rgba(0, 0, 0, 0) 50.1%), no-repeat center/cover url('/images/category/jacket.png') , #171717" }} className={styles.trendingSectionContent}>
                <span className={styles.trendingSectionTitle}>
                  New
                </span>
              </div>
            </Link>
          </div>
        </div>

      </div>
    </main>
  )
}