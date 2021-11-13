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


### Can I create my own integrator
Sure thing! Should you create, please let me know!
See an example here: https://github.com/JorgeGuerraPires/Miyagi-Do-lab/blob/version_1_0_1_unittesting/src/app/mathematics/utils/integrators/euler.ts


## Unit testing
Unit testing? Got you covered! Glad I had implemented!
On the moment of deploy: 

```
7 specs, 0 failures

Linear
should create an instance
should create an instance from given parameter to constructor, and store the parameter
should return values in a straight line with inclination equal to alfa
Euler
should create an instance
Testing the internal methods
One step forward
two step forward
Simulation time should be equal real time when they are multiples
```










