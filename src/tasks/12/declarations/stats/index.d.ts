declare module 'stats' {
  type Comparator = <T>(a: T, b: T) => number;
  type IndexSearcher = <T>(input: T[], comparator: Comparator<T>) => number;
  type ElementSearcher = <T>(input: T[], comparator: Comparator<T>) => T | null;

  export const getMaxIndex: IndexSearcher;
  export const getMinIndex: IndexSearcher;
  export const getMedianIndex: IndexSearcher;
  export const getMaxElement: ElementSearcher;
  export const getMinElement: ElementSearcher;
  export const getMedianElement: ElementSearcher;
  export const getAverageValue: <T, TGetter extends (item: T) => T[keyof T]>(
    input: T[],
    getValue: TGetter
  ) => ReturnType<TGetter>;
}
