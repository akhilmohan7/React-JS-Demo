/**
 * File: Home.tsx
 * -----
 * Created Date: Wednesday February 8th 2023
 * Author: Akhil Mohan
 * -----
 * Last Modified: Mon Feb 13 2023
 * Modified By: Akhil Mohan
 * @packageDocumentation
 */

import { produce } from 'immer';
import { useState } from 'react';
import { connect } from 'react-redux';
import { checkValidity } from '../shared/shared';
import FormList from '../components/form/FormList';
import { addPlayer } from '../store/actions/Player';
import FormPlayer from '../components/form/FormPlayer';

export function Home(props: any) {

    const [form, setForm] = useState(
        {
            name: {
                elementType: 'input',
                elementConfig: {
                    help: '',
                    type: 'text',
                    label: 'Name',
                    variant: 'outlined',
                    placeholder: 'Name',
                    warning: 'Invalid name',
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },            
            age: {
                elementType: 'input',
                elementConfig: {
                    help: '',
                    label: 'Age',
                    type: 'number',
                    placeholder: 'Age',
                    variant: 'outlined',
                    warning: 'Invalid age',
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },            
            role: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { text: 'Batsman', value: 'Batsman' }
                    ],
                    label: 'Role',
                    variant: 'outlined',
                    warning: 'Select a role',
                    placeholder: 'Select Role',
                },
                validation: {
                    string: true,
                    required: true,
                },
                value: '',
                valid: true,
                touched: false,
            },     
        }
    )

    const [list, setList] = useState(false)
    const [formIsValid, setFormIsValid] = useState(false)
    const [initialState, setInitialState] = useState(form)

    let onInputChangeHandler = ( event: any, name: any ) => {

        let updatedForm: any = null;
        updatedForm = produce( form, ( controlName: any ) => {

            controlName[name].touched = true;
            controlName[name].value = event.target.value;
            controlName[name].valid = checkValidity( event.target.value, controlName[name].validation );
        } )        
        
        let formIsValid = true;
        for ( let formControl in updatedForm ) {
            formIsValid = checkValidity( updatedForm[ formControl ].value ? updatedForm[ formControl ].value.toString() : '', updatedForm[ formControl ].validation ) && formIsValid 
        }

        setFormIsValid(formIsValid)
        setForm( updatedForm )
    }

    let onAddHandler = () => {

        if(formIsValid){

            let data = props.player
            let dataObj = {
                name: form.name.value,
                age: form.age.value,
                role: form.role.value,
            }
    
            data.push(dataObj)
    
            props.initAddPlayer(data)

            setList(true)
        }
        else{
            
            let updatedForm: any = null;
            updatedForm = produce( form, ( controlName: any ) => {

                controlName['age'].touched = true;
                controlName['name'].touched = true;
                controlName['role'].touched = true;                
                
                controlName['age'].valid = checkValidity( form.age.value, controlName['age'].validation );
                controlName['name'].valid = checkValidity( form.name.value, controlName['name'].validation );
                controlName['role'].valid = checkValidity( form.role.value, controlName['role'].validation );
            } )        
            
            let formIsValid = true;
            for ( let formControl in updatedForm ) {
                formIsValid = checkValidity( updatedForm[ formControl ].value ? updatedForm[ formControl ].value.toString() : '', updatedForm[ formControl ].validation ) && formIsValid 
            }

            setForm( updatedForm )
        }
    }

    let onCancelHandler = () =>{
        
        setList(true)
        setForm(initialState)
    }

    let addPlayerHandler = () =>{
        
        setList(false)
        setForm(initialState)
    }

    let deleteHandler = (data: any) =>{
        
        props.initAddPlayer( props.player.filter((item: any)=>item!==data) )
    }    

    return (
        list
        ?
        <FormList
            playerList={props.player}
            deleteHandler={deleteHandler}
            addPlayerHandler={addPlayerHandler}
        />
        :
        <FormPlayer 
            form={form}
            onAddHandler={onAddHandler}
            onChange={onInputChangeHandler}
            onCancelHandler={onCancelHandler}
        />
    )
}

const mapStateToProps = ( state: any ) => {

    return {
        player: state.player.playerList,
    };
};

const mapDispatchToProps = ( dispatch: any ) => {

    return {
        initAddPlayer: (data: any) => dispatch( addPlayer(data) )    
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);