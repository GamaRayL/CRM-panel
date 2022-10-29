export interface Element {
    id: number;
    name: string;
    svg: string;
    selected?: boolean;
    expansion?: Element[];
}

  export interface NavElementsState {
    navElements: Element[];
}
  