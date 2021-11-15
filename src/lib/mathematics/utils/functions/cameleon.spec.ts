import { Cameleon } from './cameleon';

describe('Cameleon should be created', () => {
  it('should create an instance', () => {

    //Arrage
    const arg: string = '"a":4, "b":3';
    const model = "x ^ a +b  ";
    //act
    expect(new Cameleon(model, arg)).toBeTruthy();
  });

});

describe('Testing methods', () => {
  it('Testing the superclass method', () => {

    //Arrage
    const arg: string = '"a":4, "b":3';
    const model = "x ^ a +b  ";
    const cameleon = new Cameleon(model, arg);

    //act 
    const aux = cameleon.calculate(1);

    //assert
    expect(aux).toBe(4);

  });

});