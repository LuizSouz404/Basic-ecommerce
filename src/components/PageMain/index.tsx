import Image from 'next/image'
import Link from 'next/link'
import styles from './styles.module.scss'

export function MainPage() {
  return (
    <main className={styles.container}>
      <div className={styles.content}>

        <div className={styles.communicationContainer}>
          <div className={styles.communicationImage}>
            <Image layout='fill' src="/images/rock.svg" alt=''></Image>
          </div>

          <h2>Hey do you like our work? So consider helping us keep making music</h2>

          <span>Here you will find exclusive clothes from the albums, all made in a limited way so don{"'"}t waste time and buy yours</span>
        </div>

        <div className={styles.categoryContainer}>
          <strong className={styles.sectionTitle}>Categories</strong>
          <div className={styles.categorySection}>
            <Link href="/products/" passHref>
              <div
                style={{ backgroundImage: "url('/images/category/new.png')" }}
                className={styles.categorySectionContent}
              >
                <span className={styles.categorySectionTitle}>
                  New
                </span>
              </div>
            </Link>
            <Link href="/products/" passHref>
              <div
                style={{ backgroundImage: "url('/images/category/tshirt.png')" }}
                className={styles.categorySectionContent}
              >
                <span className={styles.categorySectionTitle}>
                  t-Shirt
                </span>
              </div>
            </Link>
            <Link href="/products/" passHref>
              <div
                style={{ backgroundImage: "url('/images/category/jacket.png')" }}
                className={styles.categorySectionContent}
              >
                <span className={styles.categorySectionTitle}>
                  Jacket
                </span>
              </div>
            </Link>
            <Link href="/products/" passHref>
              <div
                style={{ backgroundImage: "url('/images/category/pants.png')" }}
                className={styles.categorySectionContent}
              >
                <span className={styles.categorySectionTitle}>
                  Pants
                </span>
              </div>
            </Link>
          </div>
        </div>

        <div className={styles.trendingContainer}>
          <strong className={styles.sectionTitle}>Trending collections</strong>

          <div className={styles.trendingSection}>
            <Link href="/products/" passHref>
              <div
                style={{
                  background: "linear-gradient(37.44deg, #000000 2.71%, rgba(0, 0, 0, 0) 50.1%), no-repeat center/cover url('/images/category/jacket.png') , #171717"
                }}
                className={styles.trendingSectionContent}
                >
                <span className={styles.trendingSectionTitle}>
                  New album collection
                </span>
              </div>
            </Link>
            <Link href="/products/" passHref>
              <div
                style={{
                  background: "linear-gradient(37.44deg, #000000 2.71%, rgba(0, 0, 0, 0) 50.1%), no-repeat center/cover url('/images/category/jacket.png') , #171717"
                  }}
                className={styles.trendingSectionContent}
              >
                <span className={styles.trendingSectionTitle}>
                  Bring me a new Horizon  Collection album
                </span>
              </div>
            </Link>
          </div>
        </div>

        <div className={styles.partnersContainer}>
          <strong className={styles.sectionTitle}>Partners</strong>

          <div className={styles.partnersSection}>
            <Link href="/products/" passHref>
              <div
                className={styles.partnersSectionContent}
              >
                <Image src="/images/partners/spotify.png" layout='fill' alt="Spotify Music Partner"></Image>
              </div>
            </Link>
            <Link href="/products/" passHref>
              <div
                className={styles.partnersSectionContent}
              >
                <Image src="/images/partners/deezer.png" layout='fill' alt="Deezer Music Partner"></Image>
              </div>
            </Link>
            <Link href="/products/" passHref>
              <div
                className={styles.partnersSectionContent}
              >
                <Image src="/images/partners/googleMusic.png" layout='fill' alt='Google Music Partner'></Image>
              </div>
            </Link>
            <Link href="/products/" passHref>
              <div
                className={styles.partnersSectionContent}
              >
                <Image src="/images/partners/shazam.png" layout='fill' alt='Shazam Music Partner'></Image>
              </div>
            </Link>
            <Link href="/products/" passHref>
              <div
                className={styles.partnersSectionContent}
              >
                <Image src="/images/partners/appleMusic.png" layout='fill'  alt='Apple Music Partner'></Image>
              </div>
            </Link>
          </div>
        </div>

      </div>
    </main>
  )
}
