import Link from 'next/link'
import { BsBagPlus } from 'react-icons/bs';
import styles from './styles.module.scss';

export function MyWishlist() {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.ProfileTitleSection}>My wishlist</h1>

        <div className={styles.ProfileContainer}>
          <aside>
            <ul className={styles.ProfileNav}>
              <Link href="/profile" passHref>
                <li className={styles.navBtn}>My profile</li>
              </Link>
              <Link href="/profile/myAddress" passHref>
                <li className={styles.navBtn}>My address book</li>
              </Link>
              <Link href="/profile/myOrders" passHref>
                <li className={styles.navBtn}>My orders</li>
              </Link>
              <Link href="/profile/myWishlist" passHref>
                <li className={styles.navActive}>My wishlist</li>
              </Link>
            </ul>
          </aside>
          <div className={styles.profileSectionContent}>
          <span className={styles.ProfileSubtitleSection}>Minha lista de desejos</span>

            <section className={styles.ProfileSection}>
              <div className={styles.newWishlistContainer}>
                <div className={styles.newWishlistImg}>
                  <BsBagPlus size={42} />
                </div>
                <strong>New wishlist</strong>
                <span></span>
              </div>
              <div className={styles.profileSectionData}>
                <div className={styles.wishlistImg} style={{backgroundImage: "url(/images/products/jacketJeans.png)"}}></div>
                <strong>Camisa</strong>
                <span>2 Itens</span>
              </div>
              <div className={styles.profileSectionData}>
                <div className={styles.wishlistImg} style={{backgroundImage: "url(/images/products/jacketLarge.png)"}}></div>
                <strong>Casaco</strong>
                <span>12 Itens</span>
              </div>
              <div className={styles.profileSectionData}>
                <div className={styles.wishlistImg} style={{backgroundImage: "url(/images/products/sweater.png)"}}></div>
                <strong>Calça</strong>
                <span>10 Itens</span>
              </div>
              <div className={styles.profileSectionData}>
                <div className={styles.wishlistImg} style={{backgroundImage: "url(/images/products/sweaterPatern.jpg)"}}></div>
                <strong>Accessorios</strong>
                <span>17 Itens</span>
              </div>
            </section>
          </div>
        </div>

      </div>
    </main>
  )
}
