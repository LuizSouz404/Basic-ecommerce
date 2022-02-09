import styles from './styles.module.scss';

export function PageProfile() {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <h1>Profile</h1>
        <span>Meus dados</span>

        <div>
          <div>
            <strong>Nome</strong>
            <span>Luiz Souza</span>
          </div>
          <div>
            <strong>Endereços</strong>
            <span>Rua 2 bloco 12 Ap34, bom retiro 11090-300</span>
          </div>
          <div>
            <strong>E-mail</strong>
            <span>luizsouza@gmail.com</span>
          </div>
          <div>
            <strong>Telefone</strong>
            <span>(13) 991442487</span>
          </div>
        </div>

      </div>
    </main>
  )
}
