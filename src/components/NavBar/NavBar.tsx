import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSelect, RootState } from "store";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";

export const NavBar = () => {
    const navElements = useSelector((state: RootState) => state.navElements.navElements);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const isMain = location.pathname === "/";

    useEffect(() => {
        if (isMain) dispatch(toggleSelect("Главная"));
    }, [dispatch, isMain]);


    const selectElement = (name: string): void => {
        dispatch(toggleSelect(name));
        if (name === "Главная") navigate("/");
        if (name === "Поиск адресов") navigate("/address");
    };

    return (
        <nav className={styles.navbar}>
            <ul aria-label="Меню" className={styles.list}>
                {navElements.map(element =>
                    <div key={element.id}>
                        <li onClick={() => selectElement(element.name)} className={`${styles.element} ${element.selected ? styles.elementSelected : null}`}>
                            <img className={styles.icon} src={element.img} alt="" />
                            <span className={styles.name}>{element.name}</span>
                        </li>
                        {element.selected && element.id === 7 ?
                            <ul className={styles.settingsList}>
                                {element.expansion?.map(element =>
                                    <li className={styles.element}>
                                        <img className={styles.icon} src={element.img} alt="" />
                                        <span className={styles.name}>{element.name}</span>
                                    </li>
                                )}
                            </ul>
                            : null}
                    </div>
                )}
            </ul>
        </nav>
    );
};