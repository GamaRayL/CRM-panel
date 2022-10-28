import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { Element, NavElementsState } from "types";

const initialState: NavElementsState = {
  navElements: [
    {
      id: 1,
      name: "Главная",
      img: "images/main.svg",
      selected: true,
    },
    {
      id: 2,
      name: "Поиск адресов",
      img: "images/search.svg",
      selected: false,
    },
    {
      id: 3,
      name: "Таблицы",
      img: "images/tables.svg",
      selected: false,
    },
    {
      id: 4,
      name: "Календарь",
      img: "images/calendar.svg",
      selected: false,
    },
    {
      id: 5,
      name: "Карты",
      img: "images/marker.svg",
      selected: false,
    },
    {
      id: 6,
      name: "Виджеты",
      img: "images/widget.svg",
      selected: false,
    },
    {
      id: 7,
      name: "Настройки",
      img: "images/settings.svg",
      selected: false,
      expansion: [
        {
          id: 9,
          name: "Настройки профиля",
          img: "images/profile.svg",
        },
        {
          id: 10,
         name: "Управление финансами",
         img: "images/finance.svg",
        }
      ]
    },
    {
      id: 8,
      name: "Выход",
      img: "images/out.svg",
      selected: false,
    },
  ],
};

const navSlice = createSlice({
  name: "navElements",
  initialState,
  reducers: {
    toggleSelect(state, action: PayloadAction<string>) {
      state.navElements = state.navElements.map(
        (item: Element) => item.name === action.payload
        ? {...item, selected: true}
        : {...item, selected: false}
      );
    }
  },
});

export const { toggleSelect } = navSlice.actions;

export default navSlice.reducer;
