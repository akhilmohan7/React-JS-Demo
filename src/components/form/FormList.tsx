/**
 * File: FormList.tsx
 * -----
 * Created Date: Monday February 13th 2023
 * Author: Akhil Mohan
 * -----
 * Last Modified: Mon Feb 13 2023
 * Modified By: Akhil Mohan
 * @packageDocumentation
 */

import { Divider } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

import classes from './FormList.module.css'

export default function FormList(props: any) {

    let playerListJSX = ( 
        
        <div className={classes.listItemContainer}>
            <div className={classes.listTitle}>Player List</div>
            {                
                props.playerList.map((item: any, key: any)=>(
                    <div className={classes.listItem}>
                        <div className={classes.itemId}>{key + 1}</div>
                        <Divider orientation='vertical' flexItem/>
                        <div className={classes.itemName}>{item.name}</div>
                        <div className={classes.itemAge}>{item.age} years old</div>
                        <div className={classes.itemRole}>{item.role}</div>
                        <div className={classes.itemDelete} onClick={()=>props.deleteHandler(item)}>
                            <DeleteIcon fontSize='inherit' color='error'/>
                        </div>
                    </div>
                ))
            }
        </div>       
    )

    return (
        <div className={classes.container}> 
            {playerListJSX}
            <div className={classes.fabAdd}>
                <Fab color="primary" onClick={props.addPlayerHandler}>
                    <AddIcon />
                </Fab>
            </div>
        </div>
    )
}
