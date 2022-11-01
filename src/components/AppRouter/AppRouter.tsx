import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { Addresses, News } from "Pages";
import { IAddressesProps } from "types";
import styles from "./styles.module.scss";

export const AppRouter: FC<IAddressesProps> = ({ arrayAddresses }) => {

    return (
        <main className={styles.main}>
            <div className={styles.wrap}>
                <Routes>
                    <Route path="/" element={<News />} />
                    <Route path="/address" element={<Addresses arrayAddresses={arrayAddresses} />} />
                </Routes>
            </div>
        </main>
    );
};