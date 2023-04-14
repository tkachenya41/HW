declare module 'str-utils' {
  type StringUtil = (input: string) => string;

  export const stringReverse: StringUtil;
  export const stringToLower: StringUtil;
  export const stringToUpper: StringUtil;
  export const stringRandomize: StringUtil;
  export const stringInvertCase: StringUtil;
}
