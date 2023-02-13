/**
 * Created Date: Wednesday February 8th 2023
 * Author: Akhil Mohan
 * -----
 * Last Modified: Mon Feb 13 2023
 * Modified By: Akhil Mohan
 * @packageDocumentation
 */

export const checkValidity = ( value: any, rules: any ) => {

    let isValid = true;

    if ( !rules ) {
        return true;
    }

    if( rules.isEmail ) {
        const pattern = RegExp(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
        isValid = pattern.test(value) && isValid;
    }

    if ( rules.required ) {
        isValid = value.trim() !== '' && isValid;
    }

    if ( rules.number ) {
        isValid = value >= 0 && isValid;
    }

    if ( rules.string ) {
        isValid = typeof value === 'string' && isValid;
    }

    if ( rules.minValue ) {
        isValid = value >= rules.minValue && isValid;
    }

    if ( rules.minLength ) {
        isValid = value.trim().length >= rules.minLength && isValid;
    }

    if ( rules.maxLength ) {
        isValid = value.trim().length <= rules.maxLength && isValid;
    }

    if( rules.mobile ){
        let pattern = RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)
        isValid = pattern.test(value) && isValid;
    }

    if( rules.mobileoremail ){
        let pattern: any;
        if(value.includes('@')) {
            pattern = RegExp(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
        } else {
            pattern = RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)
        }
        
        isValid = pattern.test(value) && isValid;
    }
    
    if( rules.map ){
        let pattern = new RegExp('^-?([1-8]?[1-9]|[1-9]0)\\.{1}\\d{1,6}');
        isValid = pattern.test(value) && isValid;
    }    

    return isValid;
}

export const updateObject = ( oldObject: any, updatedValues: any ) => {

    return {
        ...oldObject,
        ...updatedValues
    }
}