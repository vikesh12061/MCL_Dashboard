import { AbstractControl, Validator } from '@angular/forms';

export function ValidatePassword(control: AbstractControl) {
    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,20}/.test(control.value)) {
        return { password: true };
    }
    return null;
}

export function ValidateCnfPassword(control: AbstractControl) {

    if(control && control.value){
        const cnfPassValue=control.value; 
        
        const passControl = control.root.get('password');
        if(passControl){
            const passValue = passControl.value;
            if( passValue != cnfPassValue){
                return { 
                    cnfpassword: true 
                };
            }
        }
    }
    return null;
}
