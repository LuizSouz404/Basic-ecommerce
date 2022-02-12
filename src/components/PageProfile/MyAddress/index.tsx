import Link from 'next/link'
import styles from './styles.module.scss';

export function MyAddressList() {
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
              <Link href="/profile/myAddress" passHref>
                <li className={styles.navActive}>My address book</li>
              </Link>
              <Link href="/profile/myOrders" passHref>
                <li className={styles.navBtn}>My orders</li>
              </Link>
              <Link href="/profile/myWishlist" passHref>
                <li className={styles.navBtn}>My wishlist</li>
              </Link>
            </ul>
          </aside>
          <div className={styles.profileSectionContent}>
          <span className={styles.ProfileSubtitleSection}>Meus endereços</span>

            <section className={styles.ProfileSection}>
              <div className={styles.profileSectionData}>
                <strong>Nome do endereço</strong>
                <strong>Local do endereço</strong>
              </div>
              <div className={styles.profileSectionData}>
                <span>Casa</span>
                <span>Rua dois, 12 Ap34</span>
              </div>
              <div className={styles.profileSectionData}>
                <span>Trabalho</span>
                <span>Rua castelo branco 52</span>
              </div>
            </section>
          </div>
        </div>

      </div>
    </main>
  )
}
