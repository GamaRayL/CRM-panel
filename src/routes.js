import { News, AddressSearch } from "./Pages";
import { NEWS_ROUTE, ADDRESS_SEARCH_ROUTE } from "./utils/const";

export const routes = [
  {
    path: NEWS_ROUTE,
    page: <News />,
  },
  {
    path: ADDRESS_SEARCH_ROUTE,
    page: <AddressSearch />,
  },
];
