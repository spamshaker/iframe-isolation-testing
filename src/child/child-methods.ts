import { ChildHeaders } from './child-headers';

export const methods: ChildHeaders= {
  sum: (a, b) => Promise.resolve(a + b),
  subtract: (a, b) => Promise.resolve(a - b)
}
