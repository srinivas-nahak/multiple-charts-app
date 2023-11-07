export type ChartSingleValueType<T> = {
  name: T;
  value: number;
};

export type ChartMultipleValueType<T> = {
  name: T;
  inValue: number;
  outValue: number;
};
