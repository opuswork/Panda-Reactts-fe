import styles from './landing.module.css';

export function Landing() {
    return (
        <>
            <main>
            <section className={styles.banner}>
                <div className={styles.wrapper}>
                <h1>
                    일상의 모든 물건을<br />
                    거래해 보세요
                </h1>
                <a href="items.html" className={styles.button}>구경하러 가기</a>
                </div>
            </section>

            <section className={styles.wrapper}>
                <div className={styles.feature}>
                <img
                    className={styles.featureImage}
                    src="images/home/feature1-image.png"
                    alt="인기 상품"
                    width="50%"
                />
                <div className={styles.featureContent}>
                    <h2 className={styles.featureTag}>Hot item</h2>
                    <h1>인기 상품을<br />확인해 보세요</h1>
                    <p className={styles.featureDescription}>
                    가장 HOT한 중고거래 물품을<br />판다마켓에서 확인해 보세요
                    </p>
                </div>
                </div>
                <div className={styles.feature}>
                <div className={styles.featureContent}>
                    <h2 className={styles.featureTag}>Search</h2>
                    <h1>구매를 원하는<br />상품을 검색하세요</h1>
                    <p className={styles.featureDescription}>
                    구매하고 싶은 물품은 검색해서
                    <br />쉽게 찾아보세요
                    </p>
                </div>
                <img
                    className={styles.featureImage}
                    src="images/home/feature2-image.png"
                    alt="검색 기능"
                    width="50%"
                />
                </div>
                <div className={styles.feature}>
                <img
                    className={styles.featureImage}
                    src="images/home/feature3-image.png"
                    alt="판매 상품 등록"
                    width="50%"
                />
                <div className={styles.featureContent}>
                    <h2 className={styles.featureTag}>Register</h2>
                    <h1>판매를 원하는<br />상품을 등록하세요</h1>
                    <p className={styles.featureDescription}>
                    어떤 물건이든 판매하고 싶은 상품을
                    <br />쉽게 등록하세요
                    </p>
                </div>
                </div>
            </section>

            <section className={styles.banner}>
                <div className={styles.wrapper}>
                <h1>
                    믿을 수 있는
                    <br />
                    판다마켓 중고거래
                </h1>
                </div>
            </section>
            </main>
        </>
    )
}