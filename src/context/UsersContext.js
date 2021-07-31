import React, { createContext, useReducer } from 'react';
import users from '../data/users';

const UsersContext = createContext({}); // Cria o contexto e passa ele vazio para inicializar
const initialSate = { users };

export const UsersProvider = props =>{

    function reducer(state, action) { ; // O objetivo é evoluir o estado inicial baseado no action, que irá evoluir o estado
        if(action.type === 'deleteUser'){
            const user = action.payload
            return {
                ...state,
                users: state.users.filter(u => u.id !== user.id) // se for diferente ele continua na lista, se for igual ele excluir da lista
            }
        };
        if(action.type === 'createUser'){
            const user = action.payload
            user.id = Math.random();
            return {
                ...state,
                users: [...state.users, user] // Adiciona mais um novo user com id random
            }
        };
        if(action.type === 'updateUser'){
            const user = action.payload
            return {
                ...state,
                users: state.users.map(u => u.id === user.id ? user: u) // Edita o usuário
            }
        };

        return state;
    }

    const [ state, dispatch ] = useReducer(reducer, initialSate) 

    return (
        <UsersContext.Provider //dentro do contexto foi usado um Provider que recebe uma lista de elementos (props.children), ou seja tudo passado no provider é realizado neste ponto.
            value={{ 
                state, dispatch // E estou disponibilizando um valor/objeto
            }}
        >
            {props.children} 
        </UsersContext.Provider>
    )
}

// A partir deste contexto, será possivel acessar o valor informado sem a necessidade de ficar importando em cada tela.

export default UsersContext