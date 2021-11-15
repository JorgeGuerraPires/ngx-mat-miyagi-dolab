# Miyagi-Do lab


## Euler's method

Working on a better documention, for now, see: https://github.com/JorgeGuerraPires/Miyagi-Do-lab/blob/version_1_0_1_unittesting/src/app/components/sandbox1/model1/model1.component.ts

Just replace:

```
import { Linear } from 'src/app/mathematics/utils/functions/linear';
import { Euler } from 'src/app/mathematics/utils/integrators/euler';
```


by:

```
//Public library from Miyagi-Do lab
import { Euler, Linear } from 'ngx-mat-miyagi-dolab';
```


The app should work just fine, but now you are using a public library!

Should you create a simple example, just send me!

### Import the package
Just go to your component, that you wants to use numerical integration:

```
//Public library from Miyagi-Do lab
import { Euler, Linear } from 'ngx-mat-miyagi-dolab';
```

### Use the Euler's integrator
Quite simple actually!

```
      //create the linear derivative function
      const derivative = new Linear();
      const x0 = 4;//initial condition

      //creating the object
      const euler = new Euler(derivative, [x0])

      //2 time span step forward
      euler.forward(2);
     
    //get the state, saved on the object
     euler.getcurrentState()[0]
```


### Can I create my own function
Sure thing! Should you create, please let me know!
See an example here: https://github.com/JorgeGuerraPires/Miyagi-Do-lab/blob/version_1_0_1_unittesting/src/app/mathematics/utils/functions/linear.ts

####  Cameleon function

Cameleon is a generic function, that uses mathjs. Working to make it even better. 
For now, it can be heady to create your own function! 
I have already tested with the integrator, see the specs!


```
//From our public package
import { Cameleon } from 'ngx-mat-miyagi-dolab';

.....
    
    const arg: string = '"a":4, "b":3';
    const model = "x ^ a +b  ";
    const cameleon = new Cameleon(model, arg);


    cameleon.calculate(1);//print if you will
.....


```

### Can I create my own integrator
Sure thing! Should you create, please let me know!
See an example here: https://github.com/JorgeGuerraPires/Miyagi-Do-lab/blob/version_1_0_1_unittesting/src/app/mathematics/utils/integrators/euler.ts




## Unit testing
Unit testing? Got you covered! Glad I had implemented!
On the moment of deploy: 


```
10 specs, 0 failures

Euler
Testing the internal methods
Testing the Cameleon function: two step forward
Simulation time should be equal real time when they are multiples
two step forward
One step forward
should create an instance
Testing methods
Testing the superclass method
Linear
should return values in a straight line with inclination equal to alfa
should create an instance from given parameter to constructor, and store the parameter
should create an instance
Cameleon should be created
should create an instance
```










