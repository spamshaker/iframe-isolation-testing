import { connectToParent } from 'penpal';
import { methods } from './child-methods';
import { ParentHeaders } from '../parent/parent-headers';

const connection = connectToParent<ParentHeaders>({
  // debug: true,
  methods
});
export const childApi = connection.promise;
export const destroy = connection.destroy;
