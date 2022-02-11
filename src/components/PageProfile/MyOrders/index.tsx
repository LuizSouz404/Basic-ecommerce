import Link from 'next/link'
import styles from './styles.module.scss';

export function MyOrders() {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.ProfileTitleSection}>My orders</h1>

        <div className={styles.ProfileContainer}>
          <aside>
            <ul className={styles.ProfileNav}>
              <Link href="/profile" passHref>
                <li className={styles.navBtn}>My profile</li>
              </Link>
              <Link href="/profile/myAddressBook" passHref>
                <li className={styles.navBtn}>My address book</li>
              </Link>
              <Link href="/profile/myOrders" passHref>
                <li className={styles.navActive}>My orders</li>
              </Link>
              <Link href="/profile/myWishlist" passHref>
                <li className={styles.navBtn}>My wishlist</li>
              </Link>
            </ul>
          </aside>
          <div className={styles.profileSectionContent}>
          <span className={styles.ProfileSubtitleSection}>Minhas compras</span>

            <section className={styles.ProfileSection}>
              <div className={styles.profileSectionData}>
                <strong>ID</strong>
                <strong>Status</strong>
              </div>
              <div className={styles.profileSectionData}>
                <span>99142457</span>
                <span>Envio pendente</span>
              </div>
              <div className={styles.profileSectionData}>
                <span>99142458</span>
                <span>A caminho</span>
              </div>
              <div className={styles.profileSectionData}>
                <span>99142459</span>
                <span>Entregue</span>
              </div>
            </section>
          </div>
        </div>

      </div>
    </main>
  )
}
