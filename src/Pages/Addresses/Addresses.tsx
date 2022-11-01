import { FC } from "react";
import { SearchForm } from "components";
import { IAddressesProps, Suggestion } from "types";
import styles from "./styles.module.scss";

export const Addresses: FC<IAddressesProps> = ({ arrayAddresses }) => {
    console.log(arrayAddresses ? arrayAddresses : null);

    return (
        <section>
            <h1 className={styles.title}>Поиск адресов</h1>
            <p>Введите интересующий вас адрес</p>
            <SearchForm />
            <ul className={styles.addressList}>
                <h2 className={styles.subtitle}>Адреса</h2>
                {arrayAddresses ? arrayAddresses.suggestions.map((item: Suggestion) =>
                    <li key={item.value} className={styles.addressItem}>
                        <a className={styles.addressLink} href={`mailto:?body=${item.value}`}>{item.value}</a>
                    </li>)
                    : null}
            </ul>
        </section>

    );
};