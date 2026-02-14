// src/components/layout/Header.tsx
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="/">
          <img
            src="/images/logo/panda-market-logo.png"
            alt="판다마켓 홈"
            width="153"
          />
        </a>

        <a href="/login" className={styles.loginLink}>
          로그인
        </a>
      </div>
    </header>
  );
}
