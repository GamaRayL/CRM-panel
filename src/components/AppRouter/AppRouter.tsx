import { Routes, Route } from "react-router-dom";
import { routes } from "routes";
import styles from "./styles.module.scss";

export const AppRouter = () => {
    return (
        <main className={styles.main}>
            <div className={styles.wrap}>
                <Routes>
                    {routes.map(({ path, page }) => (
                        <Route key={path} path={path} element={page} />
                    ))}
                </Routes>
            </div>
        </main>
    );
};