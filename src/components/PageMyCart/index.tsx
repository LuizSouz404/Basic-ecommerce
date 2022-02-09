import styles from './styles.module.scss';

export function MyCartPage() {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <div className={styles.cartItemContainer}>
          <img src="/images/products/jacketJeans.png" alt="jacket" />

          <div className={styles.cartItemInformation}>
            <div className={styles.cartItemDescription}>
              <strong className={styles.cartItemTitle}>Jacket Jeans</strong>
              <div className={styles.cartItemProperties}>
                <span className={styles.cartItemSizeProp}>Tamanho: P</span>
                <span className={styles.cartItemColorProp}>Color: Azul</span>
              </div>
            </div>

            <div className={styles.cartItemAction}>
              <div className={styles.cartItemQuantity}>
                <div className={styles.cartItemQuantityInputContainer}>
                  <button className={styles.cartItemQuantityInputMinus}>-</button>
                  <input className={styles.cartItemQuantityInput} maxLength={3} type="number" name="" id="" />
                  <button className={styles.cartItemQuantityInputPlus}>+</button>
                </div>
                <span className={styles.cartItemQuantityPrice}>$19,90</span>
              </div>
              <div className={styles.cartItemButtons}>
                <button className={styles.cartItemBtn}>
                  Editar
                </button>
                <button className={styles.cartItemBtn}>
                  Excluir
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.cartItemContainer}>
          <img src="/images/products/jacketJeans.png" alt="jacket" />

          <div className={styles.cartItemInformation}>
            <div className={styles.cartItemDescription}>
              <strong className={styles.cartItemTitle}>Jacket Jeans</strong>
              <div className={styles.cartItemProperties}>
                <span className={styles.cartItemSizeProp}>Tamanho: P</span>
                <span className={styles.cartItemColorProp}>Color: Azul</span>
              </div>
            </div>

            <div className={styles.cartItemAction}>
              <div className={styles.cartItemQuantity}>
                <div className={styles.cartItemQuantityInputContainer}>
                  <button className={styles.cartItemQuantityInputMinus}>-</button>
                  <input className={styles.cartItemQuantityInput} maxLength={3} type="number" name="" id="" />
                  <button className={styles.cartItemQuantityInputPlus}>+</button>
                </div>
                <span className={styles.cartItemQuantityPrice}>$19,90</span>
              </div>
              <div className={styles.cartItemButtons}>
                <button className={styles.cartItemBtn}>
                  Editar
                </button>
                <button className={styles.cartItemBtn}>
                  Excluir
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.cartItemContainer}>
          <img src="/images/products/jacketJeans.png" alt="jacket" />

          <div className={styles.cartItemInformation}>
            <div className={styles.cartItemDescription}>
              <strong className={styles.cartItemTitle}>Jacket Jeans</strong>
              <div className={styles.cartItemProperties}>
                <span className={styles.cartItemSizeProp}>Tamanho: P</span>
                <span className={styles.cartItemColorProp}>Color: Azul</span>
              </div>
            </div>

            <div className={styles.cartItemAction}>
              <div className={styles.cartItemQuantity}>
                <div className={styles.cartItemQuantityInputContainer}>
                  <button className={styles.cartItemQuantityInputMinus}>-</button>
                  <input className={styles.cartItemQuantityInput} maxLength={3} type="number" name="" id="" />
                  <button className={styles.cartItemQuantityInputPlus}>+</button>
                </div>
                <span className={styles.cartItemQuantityPrice}>$19,90</span>
              </div>
              <div className={styles.cartItemButtons}>
                <button className={styles.cartItemBtn}>
                  Editar
                </button>
                <button className={styles.cartItemBtn}>
                  Excluir
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.cartItemActionCart}>
          <button className={styles.cartItemActionCartPayment}>Excluir</button>
          <span>ID do pedido: 19644</span>
          <button className={styles.cartItemActionCartCancel}>Pagar</button>
        </div>
      </div>
    </main>
  )
}
