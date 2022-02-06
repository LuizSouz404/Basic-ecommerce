import Image from 'next/image';
import { useState } from 'react';
import { BsHandbag, BsHeart, BsChevronRight } from 'react-icons/bs';
import Breadcrumbs from '../Breadcrumb';
import styles from './styles.module.scss';

export function DetailsProduct() {
  const [isOpenSize, setIsOpenSize] = useState(false);
  const [isOpenColor, setIsOpenColor] = useState(false);

  const [colorValue, setColorValue] = useState('white');
  const [colorSize, setColorSize] = useState('');

  function toggleColor(color: string) {
    setColorValue(color);

    setIsOpenColor(!isOpenColor);
  }

  return (
    <main className={styles.container}>

      <Breadcrumbs />
      <div className={styles.content}>

        <div className={styles.imageContainer}>
          <Image width={500} height={500} src="/images/products/sweaterPatern.jpg" alt="sweater" />
        </div>

        <div className={styles.productContainer}>
          <h1 className={styles.productTitle}>Ribbed polo-Neck Jumper</h1>

          <strong className={styles.productPrice}>$39.90</strong>

          <div className={styles.descriptionContainer}>
            <p className={styles.description}>Description</p>
            <span className={styles.productDescription}>Straight cut shirt jacket in sturdy, washed denim. Features a pointed collar and buttons down the front. Dropped shoulders and long sleeves with button cuffs. Detachable tie belt at the waist and a rounded hem.</span>
          </div>

          <div>
            <p className={styles.description}>Size</p>
            <div className={styles.selectContainer}>
              <div onClick={() => setIsOpenSize(!isOpenSize)} className={styles.selectTitle}>
                <span>P</span>
                <BsChevronRight className={styles.iconTransform} style={!!isOpenSize ? {transform: 'rotate(90deg)'} : {}} />
              </div>

              {!!isOpenSize && (
                <ul className={styles.selectContent}>
                  <li className={styles.selectItem}>P</li>
                  <li className={styles.selectItem}>M</li>
                  <li className={styles.selectItem}>G</li>
                  <li className={styles.selectItem}>GG</li>
                </ul>
              )}
            </div>
          </div>

          <div>
            <p className={styles.description}>Color</p>
            <div className={styles.selectContainer}>
              <div onClick={() => setIsOpenColor(!isOpenColor)} className={styles.selectTitleColor}>
                <div className={styles.colorDescription}>
                  <div style={{background: colorValue}} className={styles.colorContainer}></div>
                  <span className={styles.colorTitle}>{colorValue}</span>
                </div>
                <BsChevronRight className={styles.iconTransform} style={!!isOpenColor ? {transform: 'rotate(90deg)'} : {}} />
              </div>

              {!!isOpenColor && (
                <ul className={styles.selectContentColor}>
                  <li onClick={() => toggleColor("Blue")} className={styles.selectItemColor}>
                    <div style={{background: "blue"}} className={styles.colorContainer}></div>
                    Blue
                  </li>
                  <li onClick={() => toggleColor("Red")} className={styles.selectItemColor}>
                    <div style={{background: "red"}} className={styles.colorContainer}></div>
                    Red
                  </li>
                  <li onClick={() => toggleColor("Purple")} className={styles.selectItemColor}>
                    <div style={{background: "purple"}} className={styles.colorContainer}></div>
                    Purple
                  </li>
                  <li onClick={() => toggleColor("Yellow")} className={styles.selectItemColor}>
                    <div style={{background: "yellow"}} className={styles.colorContainer}></div>
                    Yellow
                  </li>
                </ul>
              )}
            </div>
          </div>

          <div className={styles.actionButton}>
            <button className={styles.actionButtonFav}>
              <BsHeart size={20} />
              WishList
            </button>
            <button className={styles.actionButtonBuy}>
              <BsHandbag size={20} />
              Addcart
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
