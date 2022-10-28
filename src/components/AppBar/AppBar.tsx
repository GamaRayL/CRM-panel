import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";

export const AppBar = () => {
    const navigate = useNavigate();
    return (
        <header className={styles.header}>
            <div className={styles.logo} onClick={() => navigate("/")}>
                <img className={styles.logo__icon} src="images/logo.svg" alt="" />
                <span className={styles.logo__name}>Wrench CRM</span>
            </div>
            <div className={styles.profile}>
                <img className={styles.profile__icon} src="images/person.svg" alt="" />
                <span className={styles.profile__name}>Имя Фамилия</span>
            </div>
        </header>
    );
};