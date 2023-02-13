/**
 * File: FormPlayer.tsx
 * -----
 * Created Date: Wednesday February 8th 2023
 * Author: Akhil Mohan
 * -----
 * Last Modified: Mon Feb 13 2023
 * Modified By: Akhil Mohan
 * @packageDocumentation
 */

import Input from '../ui/input/Input';
import SportsCricketTwoToneIcon from '@material-ui/icons/SportsCricketTwoTone';

import classes from './FormPlayer.module.css'

export default function FormHome( props: any ) {

  let formElementArray: any[ ] = [ ];

  for ( let [key, value] of Object.entries(props.form) ) {

    formElementArray.push( {name: key, config: value} );
  }

  let formControlsJSX = formElementArray.map( (item: any) => {

    return(
      <Input
        key = { item.name }
        name = { item.name }
        config = { item.config }
        onChange = { props.onChange }/>
    );
  });

  return (
    <div className={classes.container}>
      <div className={classes.formContainer}>
        <div className={classes.icon}>
          <SportsCricketTwoToneIcon fontSize='inherit' htmlColor='#674188'/>
        </div>
        { formControlsJSX }
        <div className={classes.btnContainer}>
          <div className={classes.cancelBtn} onClick={props.onCancelHandler}>
            Cancel
          </div>
          <div className={classes.addBtn} onClick={props.onAddHandler}>
            Add
          </div>
        </div>
      </div>
    </div>
  )
}
