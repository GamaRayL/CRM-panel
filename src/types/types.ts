export interface Element {
    id: number;
    name: string;
    img: string;
    selected?: boolean;
    expansion?: Element[];
}

  export interface NavElementsState {
    navElements: Element[];
}
  