import { ValidatorFn, AbstractControl, ValidationErrors, FormArray, FormControl } from '@angular/forms';
export class validators {


    static number(formControl: FormControl): ValidationErrors | null {

        if (!formControl.value)
            return null
        //check if it contains only numbers
        if (parseInt(formControl.value) && parseInt(formControl.value).toString() === formControl.value)
            return null
        return { number: true }

    }
}