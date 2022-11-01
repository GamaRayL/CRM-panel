import { FC } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";

export const AppBar: FC = () => {
    const navigate = useNavigate();
    return (
        <header className={styles.header}>
            <div className={styles.logo} onClick={() => navigate("/")}>
                <svg className={styles.icon}>
                    <use xlinkHref="images/sprite.svg#logo"></use>
                </svg>
                <span className={`${styles.name} ${styles.logo__name}`}>Wrench CRM</span>
            </div>
            <div className={styles.profile}>
                <svg className={`${styles.icon} ${styles.profile__icon}`}>
                    <use xlinkHref="images/sprite.svg#person"></use>
                </svg>
                <span className={styles.name}>Имя Фамилия</span>
            </div>
        </header>
    );
};