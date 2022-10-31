import React from "react";
import { SearchForm } from "components";
import styles from "./styles.module.scss";

interface AddressesProps {
    arrayAddresses: any;
}

export const Addresses = ({ arrayAddresses }: AddressesProps) => {

    return (
        <section>
            <h1 className={styles.title}>Поиск адресов</h1>
            <p>Введите интересующий вас адрес</p>
            <SearchForm />
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