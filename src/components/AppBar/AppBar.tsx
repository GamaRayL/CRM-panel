import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";

export const AppBar = () => {
    const navigate = useNavigate();
    return (
        <header className={styles.header}>
            <div className={styles.logo} onClick={() => navigate("/")}>
                <svg className={styles.logo__icon}>
                    <use xlinkHref="images/sprite.svg#logo"></use>
                </svg>
                <span className={styles.logo__name}>Wrench CRM</span>
            </div>
            <div className={styles.profile}>
                <svg className={styles.profile__icon}>
                    <use xlinkHref="images/sprite.svg#person"></use>
                </svg>
                <span className={styles.profile__name}>Имя Фамилия</span>
            </div>
        </header>
    );
};