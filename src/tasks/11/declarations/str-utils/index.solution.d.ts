declare module 'str-utils' {
  type StringUtil = (input: string) => string;

  export const strReverse: StringUtil;
  export const strToLower: StringUtil;
  export const strToUpper: StringUtil;
  export const strRandomize: StringUtil;
  export const strInvertCase: StringUtil;
}
