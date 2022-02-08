import styles from './styles.module.scss';

export function MyCartPage() {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <div>
          <img src="/images/products/jacketJeans.png" alt="jacket" />

          <div>
            <div>
              <strong>Jacket Jeans</strong>
              <div>
                <span>Tamanho: P</span>
                <span>Color: Azul</span>
              </div>
            </div>
            <div>
              <div>
                <input type="number" name="" id="" />
                <span>$19,90</span>
              </div>
              <div>
                <button>
                  Editar
                </button>
                <button>
                  Excluir
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
