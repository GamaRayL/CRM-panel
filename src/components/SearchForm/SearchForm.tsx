import { useState } from "react";
import { useAppDispatch } from "hooks";
import { updateAddress } from "store/addressSlice";
import styles from "./styles.module.scss";

export const SearchForm = () => {
    const [value, setValue] = useState<string>("");
    const dispatch = useAppDispatch();

    const handleChanger = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(updateAddress(value));
        setValue("");
    };

    return (
        <form className={styles.form} onSubmit={(e) => handleChanger(e)}>
            <input
                className={styles.input}
                placeholder="Введите интересующий вас адрес"
                type="text"
                minLength={3}
                required
                defaultValue=""
                onChange={(e) => setValue(e.target.value)}
            />
            <button type="submit" className={styles.button} >
                <svg className={styles.icon}>
                    <use xlinkHref="images/sprite.svg#search"></use>
                </svg>
                <span className={styles.buttonText}>Поиск</span>
            </button>
        </form>
    );
};