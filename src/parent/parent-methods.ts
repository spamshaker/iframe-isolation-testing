import { ParentHeaders } from './parent-headers';

export const methods: ParentHeaders = {
  divide: (a, b) => Promise.resolve(a / b),
  multiply: (a, b) => Promise.resolve(a * b)
};
