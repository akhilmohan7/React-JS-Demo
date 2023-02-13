/**
 * File: Player.ts
 * -----
 * Created Date: Wednesday February 8th 2023
 * Author: Akhil Mohan
 * -----
 * Last Modified: Sat Feb 11 2023
 * Modified By: Akhil Mohan
 * @packageDocumentation
 */

import { updateObject } from '../../shared/shared';
import * as actionTypes from '../actions/actionTypes';

// STATE (initial)
const initialState = {
    playerList: []
}

// REDUCER
const playerReducer = ( state: any = initialState, action: any ) => {

    switch ( action.type ) {
        
        case actionTypes.ADD_PLAYER: 
            return updateObject( state, { playerList: action.data } );
            
        default:
            return state;
    }
}

export default playerReducer;
 