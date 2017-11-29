import { AbstractControl } from '@angular/forms';

export class PasswordValidator
{
    static MatchPassword(ac: AbstractControl)
    {
        let p = ac.get("password").value;
        let pc = ac.get("passwordConfirmation").value;

        if(p != pc)
            ac.get("passwordConfirmation").setErrors({ matchPassword: true });
        else
            return null;
    }
}