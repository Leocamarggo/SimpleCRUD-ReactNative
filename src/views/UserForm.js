import React, { useState, useContext } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import UsersContext from '../context/UsersContext';
import { TextInput } from 'react-native-paper';

export default ({route, navigation}) =>{
    const [user, setUser] = useState(route.params ? route.params : {}); //Se o valor de "route.params" existir ele preenche o useState, se não existir ele deixa vazio
    
    const { state, dispatch } = useContext(UsersContext);
    
    return(
        <View style={style.form}>

            <TextInput
                label='Nome completo'
                style={style.input}
                onChangeText={name => setUser({...user, name})} // Ele pega todos os valores de usuário e sobrescreve o nome
                value={user.name}
                mode='outlined'
            />

            <TextInput
                label='Email'
                style={style.input}
                onChangeText={email => setUser({...user, email})} // Ele pega todos os valores de usuário e sobrescreve o nome
                value={user.email}
                mode='outlined'
            />

            <TextInput
                label='URL da imagem'
                style={style.input}
                onChangeText={avatarUrl => setUser({...user, avatarUrl})} // Ele pega todos os valores de usuário e sobrescreve o nome
                value={user.avatarUrl}
                mode='outlined'
            />

            <Button 
                title="Salvar"
                onPress={()=> {
                    navigation.goBack();
                    dispatch({
                        type: user.id ? 'updateUser' : 'createUser',
                        payload: user
                    })
                }}
                color='#6200ee'
            />
        </View>
    )
}

const style = StyleSheet.create({
    form: {
        padding:  12
    }, 
    input:{
        marginBottom: 20
    },
})