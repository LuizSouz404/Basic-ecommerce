import Link from 'next/link'
import styles from './styles.module.scss';

export function MyProfile() {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.ProfileTitleSection}>My profile</h1>

        <div className={styles.ProfileContainer}>
          <aside>
            <ul className={styles.ProfileNav}>
              <Link href="/profile" passHref>
                <li className={styles.navActive}>My profile</li>
              </Link>
              <Link href="/profile/myAddressBook" passHref>
                <li className={styles.navBtn}>My address book</li>
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
          <span className={styles.ProfileSubtitleSection}>Meus dados</span>

            <section className={styles.ProfileSection}>
              <div className={styles.profileSectionData}>
                <strong>Nome</strong>
                <span>Luiz Souza</span>
              </div>
              <div className={styles.profileSectionData}>
                <strong>E-mail</strong>
                <span>luizsouza@gmail.com</span>
              </div>
              <div className={styles.profileSectionData}>
                <strong>Endereços</strong>
                <span>Rua 2 bloco 12 Ap34, bom retiro 11090-300</span>
              </div>
              <div className={styles.profileSectionData}>
                <strong>Telefone</strong>
                <span>(13) 991442487</span>
              </div>
            </section>
          </div>
        </div>

      </div>
    </main>
  )
}
