export enum CustomerType {
  LARGE,
  SMALL,
}

export const CustomerTypes = new Map<number, string>([
  [CustomerType.LARGE, "Large"],
  [CustomerType.SMALL, "Small"],
]);
