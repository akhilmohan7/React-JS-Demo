/**
 * File: Input.tsx
 * -----
 * Created Date: Wednesday February 8th 2023
 * Author: Akhil Mohan
 * -----
 * Last Modified: Mon Feb 13 2023
 * Modified By: Akhil Mohan
 * @packageDocumentation
 */

import { InputAdornment, MenuItem, Select, TextField } from '@material-ui/core';

export default function Input( props: any ) {
    
    let inputElement = null;
  
    switch ( props.config.elementType ){
        case ( 'input' ):
            inputElement = (
                <TextField 
                    value={ props.config.value } 
                    fullWidth={ props.fullWidth }
                    type={ props.config.elementConfig.type } 
                    label={ props.config.elementConfig.label } 
                    error={ props.config.elementConfig.error }
                    variant={ props.config.elementConfig.variant }
                    placeholder={ props.config.elementConfig.placeholder }
                    onChange={ (event: any) => props.onChange(event, props.name) }
                    InputProps={{
                        endAdornment: (
                            props.icon
                            ?
                            <InputAdornment position="end">
                                { props.icon }
                            </InputAdornment>
                            :
                            null
                        )}
                    }
                />
            );
            break;

        case ( 'select' ):

            inputElement = (
                <Select
                    defaultValue={0}
                    value={ props.config.elementConfig.value } 
                    variant={ props.config.elementConfig.variant }
                    onChange={ (event: any) => props.onChange(event, props.name) }
                >
                    <MenuItem value={0}>{props.config.elementConfig.placeholder}</MenuItem>
                    {
                        props.config.elementConfig.options.map((item: any, key: any)=>(
                            
                            <MenuItem key={key} value={item.value}>{item.text}</MenuItem>
                        ))
                    }
                </Select>
            )
            break;            
        default:
            inputElement = (
                <input onChange={ (event: any) => props.onChange(event, props.name) }/>
            );
    }

    let inputWarningMsgJSX: any;
    if ( (!props.config.valid && props.config.touched) && props.config.elementConfig.warning.trim( ).length > 0 ) {
        inputWarningMsgJSX = (
            <div style={{ marginBottom: '10px', color: '#FD5E53' }}>
                { props.config.elementConfig.warning }
            </div>
        );
    }

    return (
        <div style={{ margin: '10px', display: 'flex', flexDirection: 'column' }}>
            { inputElement }
            { inputWarningMsgJSX }
        </div>
    );
}
