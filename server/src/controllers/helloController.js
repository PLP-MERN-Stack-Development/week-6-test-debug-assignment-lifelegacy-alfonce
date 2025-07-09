import { sayHello } from '../../src/controllers/helloController';

describe('sayHello', () => {
  it('should return a greeting message', () => {
    const result = sayHello('Alfonce');
    expect(result).toBe('Hello, Alfonce!');
  });
});
