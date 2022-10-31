import { Addresses, News } from "Pages";
import { Routes, Route } from "react-router-dom";
import styles from "./styles.module.scss";

interface AppRouterProps {
    arrayAddresses: any;
}

export const AppRouter = ({ arrayAddresses }: AppRouterProps) => {

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