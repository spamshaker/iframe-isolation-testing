/**
 * @jest-environment ./config/iframe-jest-jsdom-environment.js
 * @jest-environment-options {"url": "http://localhost:8080/child.html"}
 */
import { parentApi } from '../src/parent/parent-api';
import { childApi } from '../src/child/child-api';
import { ParentHeaders, ChildHeaders } from '../src';
import { AsyncMethodReturns } from 'penpal';

jest.mock('../src/parent/parent-create-iframe');

describe('given running in iFrame', () => {
  let parent: AsyncMethodReturns<ChildHeaders>;
  let child: AsyncMethodReturns<ParentHeaders>;

  beforeAll(async () => {
    child = await childApi;
    parent = await parentApi;
  });

  it('should be different than window.parent', () => expect(window!==window.parent).toBeTruthy());

  it('should be different than window.top', () => expect(window!==window.top).toBeTruthy());

  it('should have correct locations', () => {
    expect(window.location.href).toEqual('http://localhost:8080/child.html');
    expect(window.top?.location.href).toEqual('http://localhost:8080/');
  });

  it(`should call sum and subtract across parent and child`, () => expect(Promise.all([
    parent.sum(4, 2),
    parent.subtract(4, 2),
    child.multiply(4, 2),
    child.divide(4, 2)
  ])).resolves.toEqual([6, 2, 8, 2]));
});
