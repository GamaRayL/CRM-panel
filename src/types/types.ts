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

export interface FetchOptions {
  method: "GET" | "POST";
  headers: HeadersInit;
  body: string;
  mode: "cors" | "no-cors" | "same-origin";
}

export interface Suggestion {
  data: any;
  value: string;
  unrestricted_value: string;
}

export interface IAddresses {
  suggestions: Suggestion[];
}

export interface IAddressesProps {
  arrayAddresses: IAddresses | undefined;
}