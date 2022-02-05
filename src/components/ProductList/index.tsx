import Image from 'next/image';
import styles from './styles.module.scss';

export function ProductList() {
  return (
    <main className={styles.container}>
      <div className={styles.content}>

        <div className={styles.productContainer}>
          <div className={styles.productImage}>
            <Image height={500} width={500} src="/images/products/sweater.png" alt="Sweater"></Image>
          </div>

          <div className={styles.productDescription}>
            <h3 className={styles.productTitle}>Ribbed polo-Neck Jumper</h3>
            <span className={styles.productCategory}>Jack & James</span>
            <strong className={styles.productPrice}>$39.90</strong>
          </div>
        </div>

        <div className={styles.productContainer}>
          <div className={styles.productImage}>
            <Image layout='fill' src="/images/products/jacketLarge.png" alt="Sweater"></Image>
          </div>

          <div className={styles.productDescription}>
            <h3 className={styles.productTitle}>oversized Shirt Jacket</h3>
            <span className={styles.productCategory}>Jack & James</span>
            <strong className={styles.productPrice}>$79.90</strong>
          </div>
        </div>

        <div className={styles.productContainer}>
          <div className={styles.productImage}>
            <Image height={500} width={500} src="/images/products/jacketJeans.png" alt="Sweater"></Image>
          </div>

          <div className={styles.productDescription}>
            <h3 className={styles.productTitle}>oversized Denim Jacket</h3>
            <span className={styles.productCategory}>Jack & James</span>
            <strong className={styles.productPrice}>$67.90</strong>
          </div>
        </div>

        <div className={styles.productContainer}>
          <div className={styles.productImage}>
            <Image height={500} width={500} src="/images/products/jacketJeans.png" alt="Sweater"></Image>
          </div>

          <div className={styles.productDescription}>
            <h3 className={styles.productTitle}>oversized Denim Jacket</h3>
            <span className={styles.productCategory}>Jack & James</span>
            <strong className={styles.productPrice}>$67.90</strong>
          </div>
        </div>

        <div className={styles.productContainer}>
          <div className={styles.productImage}>
            <Image height={500} width={500} src="/images/products/sweater.png" alt="Sweater"></Image>
          </div>

          <div className={styles.productDescription}>
            <h3 className={styles.productTitle}>Ribbed polo-Neck Jumper</h3>
            <span className={styles.productCategory}>Jack & James</span>
            <strong className={styles.productPrice}>$39.90</strong>
          </div>
        </div>

        <div className={styles.productContainer}>
          <div className={styles.productImage}>
            <Image layout='fill' src="/images/products/jacketLarge.png" alt="Sweater"></Image>
          </div>

          <div className={styles.productDescription}>
            <h3 className={styles.productTitle}>oversized Shirt Jacket</h3>
            <span className={styles.productCategory}>Jack & James</span>
            <strong className={styles.productPrice}>$79.90</strong>
          </div>
        </div>

        <div className={styles.productContainer}>
          <div className={styles.productImage}>
            <Image height={500} width={500} src="/images/products/jacketJeans.png" alt="Sweater"></Image>
          </div>

          <div className={styles.productDescription}>
            <h3 className={styles.productTitle}>oversized Denim Jacket</h3>
            <span className={styles.productCategory}>Jack & James</span>
            <strong className={styles.productPrice}>$67.90</strong>
          </div>
        </div>

        <div className={styles.productContainer}>
          <div className={styles.productImage}>
            <Image height={500} width={500} src="/images/products/jacketJeans.png" alt="Sweater"></Image>
          </div>

          <div className={styles.productDescription}>
            <h3 className={styles.productTitle}>oversized Denim Jacket</h3>
            <span className={styles.productCategory}>Jack & James</span>
            <strong className={styles.productPrice}>$67.90</strong>
          </div>
        </div>
      </div>
    </main>
  )
}
