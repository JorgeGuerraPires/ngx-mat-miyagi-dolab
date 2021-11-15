// import { Function } from 'projects/ngx-mat-miyagi-dolab/src/public-api';

import { evaluate } from 'mathjs';
import { Function } from '../abstractclasses/function';

/**Initially, I wanted to keep this function as vectorial. Decided to keep things simple for now
 * It seems that a dynamical system will require more work than I though, or can picture now as a generic solution
 * Let's play humble for now, and leave the challenges for the goods!
 *  * 
 */
export class Cameleon extends Function {

    //this what we are going to feed to mathjs
    function: any;
    // expression: string = "f(x) = x ^ a +b";

    private _parameters = {};
    private _model: string = "";

    constructor(expression: string, parameters: string) {
        super();
        this.parameters = `{${parameters}}`;
        this.model = expression;
    }

    //Setters and getters
    public set parameters(expression: string) {
        this._parameters = JSON.parse(expression);
    }

    public set model(model: string) {
        this._model = `f(x)=${model}`;
    }


    calculate(x: number): number {
        this.function = evaluate(this._model, this._parameters);

        return this.function(x);
    }


}
