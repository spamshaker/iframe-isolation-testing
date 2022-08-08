import { connectToChild } from 'penpal';
import { methods } from './parent-methods';
import { ChildHeaders } from '../child/child-headers';
import { iframe } from './parent-create-iframe';

const connection = connectToChild<ChildHeaders>({
  iframe,
  methods
});
export const parentApi = connection.promise;
export const destroy = connection.destroy;
