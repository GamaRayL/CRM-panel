import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSelect, RootState } from "store";
import { useNavigate } from "react-router-dom";
import { NEWS_ROUTE } from "utils/const";
import { Element } from "types";
import styles from "./styles.module.scss";

export const NavBar = () => {
    const navElements = useSelector((state: RootState) => state.navElements.navElements);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const selectElement = (element: Element): void => {
        dispatch(toggleSelect(element.id));
        if (element.name === "Главная") navigate(NEWS_ROUTE);
    };

    return (
        <nav className={styles.navbar}>
            <ul aria-label="Меню" className={styles.list}>
                {navElements.map(element =>
                    <>
                        <li key={element.name} onClick={() => selectElement(element)} className={`${styles.element} ${element.selected ? styles.elementSelected : null}`}>
                            <img className={styles.icon} src={element.img} alt="" />
                            <span className={styles.name}>{element.name}</span>
                        </li>
                        {element.selected && element.id === 7 ?
                            <ul className={styles.settingsList}>
                                {element.expansion?.map(element => <li className={styles.element}><img className={styles.icon} src={element.img} alt="" /><span className={styles.name}>{element.name}</span></li>)}
                            </ul>
                            : null}
                    </>
                )}
            </ul>
        </nav>
    );
};