import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { Element, NavElementsState } from "types";

const initialState: NavElementsState = {
  navElements: [
    {
      id: 1,
      name: "Главная",
      svg: "images/sprite.svg#main",
      selected: false,
    },
    {
      id: 2,
      name: "Поиск адресов",
      svg: "images/sprite.svg#search",
      selected: false,
    },
    {
      id: 3,
      name: "Таблицы",
      svg: "images/sprite.svg#tables",
      selected: false,
    },
    {
      id: 4,
      name: "Календарь",
      svg: "images/sprite.svg#calendar",
      selected: false,
    },
    {
      id: 5,
      name: "Карты",
      svg: "images/sprite.svg#marker",
      selected: false,
    },
    {
      id: 6,
      name: "Виджеты",
      svg: "images/sprite.svg#widget",
      selected: false,
    },
    {
      id: 7,
      name: "Настройки",
      svg: "images/sprite.svg#settings",
      selected: false,
      expansion: [
        {
          id: 9,
          name: "Настройки профиля",
          svg: "images/sprite.svg#profile",
        },
        {
          id: 10,
          name: "Управление финансами",
          svg: "images/sprite.svg#finance",
        }
      ]
    },
    {
      id: 8,
      name: "Выход",
      svg: "images/sprite.svg#out",
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
