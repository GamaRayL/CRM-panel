import React, { useState } from "react";
import styles from "./styles.module.scss";
import { Dispatch, SetStateAction } from "react";

interface AddressSearchProps {
    setAddress: Dispatch<SetStateAction<string>>;
    arrayAddresses: any;
}

export const AddressSearch = ({ setAddress, arrayAddresses }: AddressSearchProps) => {
    const [value, setValue] = useState<string>("");

    const handleChanger = (e: React.FormEvent) => {
        e.preventDefault();
        setAddress(value);
        setValue("");
    };

    return (
        <section>
            <h1 className={styles.title}>Поиск адресов</h1>
            <p>Введите интересующий вас адрес</p>
            <form className={styles.form} onSubmit={(e) => handleChanger(e)}>
                <input
                    className={styles.inputSearch}
                    placeholder="Введите интересующий вас адрес"
                    type="text"
                    minLength={3}
                    required
                    defaultValue=""
                    onChange={(e) => setValue(e.target.value)}
                />
                <button type="submit" className={styles.button} >
                    <img src="images/searchW.svg" alt="" />
                    <span className={styles.buttonText}>Поиск</span>
                </button>
            </form>
            <ul className={styles.addressList}>
                <h2 className={styles.subtitle}>Адреса</h2>
                {arrayAddresses ? arrayAddresses.suggestions.map((item: any) =>
                    <li key={item.value} className={styles.addressItem}>
                        <a className={styles.addressLink} href={`mailto:?body=${item.value}`}>{item.value}</a>
                    </li>)
                    : null}
            </ul>
        </section>

    );
};