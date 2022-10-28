import { AddressSearch, News } from "Pages";
import { Dispatch, SetStateAction } from "react";
import { Routes, Route } from "react-router-dom";
import styles from "./styles.module.scss";

interface AppRouterProps {
    setAddress: Dispatch<SetStateAction<string>>;
    arrayAddresses: any;
}

export const AppRouter = ({ setAddress, arrayAddresses }: AppRouterProps) => {

    return (
        <main className={styles.main}>
            <div className={styles.wrap}>
                <Routes>
                    <Route path="/" element={<News />} />
                    <Route path="/address" element={<AddressSearch setAddress={setAddress} arrayAddresses={arrayAddresses} />} />
                </Routes>
            </div>
        </main>
    );
};