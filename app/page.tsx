import Image from "next/image";
import styles from "./page.module.scss";
import svg from "../public/icon-star.svg";

export default function Home() {
    return (
        // className={`${styles.description} ${styles.yellow} next 13`}
        <div className={styles.page}>
            <div className={`${styles.card} ${styles.border_radius_1}`}>
                <div className={styles.circle}>
                    <Image
                        src="/icon-star.svg"
                        alt="Vercel Logo"
                        width={50}
                        height={50}
                        // priority
                    />
                </div>
                <h2>How did we do?</h2>
                <p>
                    Please let us know how we did with your support request. All feedback is
                    appreciated to help us improve our offering!
                </p>

                <div className={styles.flex}>
                    <button className={styles.circle}>
                        <span>1</span>
                    </button>
                    <button className={styles.circle}>
                        <span>2</span>
                    </button>
                    <button className={styles.circle}>
                        <span>3</span>
                    </button>
                    <button className={styles.circle}>
                        <span>4</span>
                    </button>
                    <button className={styles.circle}>
                        <span>5</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

// 1 2 3 4 5

// Submit

// <!-- Rating state end -->

// <!-- Thank you state start -->

// You selected <!-- Add rating here --> out of 5

// Thank you!

// We appreciate you taking the time to give a rating. If you ever need more support,
// don’t hesitate to get in touch!
