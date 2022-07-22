import { Injectable } from '@nestjs/common';

@Injectable()
export class TestPlaygroundService {}

const add = (num1: number, num2: number): number => {
  return num1 + num2;
};

const isNull = (): null => {
  return null;
};

const beDefined = (x: string): string => {
  return undefined;
};

const beThrow = () => {
  throw new Error('something error, throw!');
};

export { add, isNull, beDefined, beThrow };
