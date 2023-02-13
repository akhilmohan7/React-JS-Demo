/**
 * Created Date: Wednesday February 8th 2023
 * Author: Akhil Mohan
 * -----
 * Last Modified: Wed Feb 08 2023
 * Modified By: Akhil Mohan
 * @packageDocumentation
 */


import { combineReducers } from 'redux';
import playerReducer from './reducers/Player';

// Redux: Combine Reducers
const appReducer = combineReducers({
    player: playerReducer,
})

const rootReducer = ( state: any, action: any ) => {

    return appReducer( state, action );
};

export default rootReducer;
