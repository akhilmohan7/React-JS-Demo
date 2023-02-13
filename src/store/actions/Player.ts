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

import * as actionTypes from './actionTypes';

export const addPlayer = (data: any) => {

    return {
        type: actionTypes.ADD_PLAYER,
        data: data
    };
}