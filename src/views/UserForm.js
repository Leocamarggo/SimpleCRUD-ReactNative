import React, { useState, useContext } from 'react';
import { Text, View, TextInput, StyleSheet, Button } from 'react-native';
import UsersContext from '../context/UsersContext';

export default ({route, navigation}) =>{
    const [user, setUser] = useState(route.params ? route.params : {}); //Se o valor de "route.params" existir ele preenche o useState, se não existir ele deixa vazio
    
    const { state, dispatch } = useContext(UsersContext);
    
    return(
        <View style={style.form}>
            <Text>Name</Text>
            <TextInput
                style={style.input}
                onChangeText={name => setUser({...user, name})} // Ele pega todos os valores de usuário e sobrescreve o nome
                placeholder="Informe o Nome"
                value={user.name}
            />

            <Text>Email</Text>
            <TextInput
                style={style.input}
                onChangeText={email => setUser({...user, email})} // Ele pega todos os valores de usuário e sobrescreve o nome
                placeholder="Informe o Email"
                value={user.email}
            />

            <Text>URL do Avatar</Text>
            <TextInput
                style={style.input}
                onChangeText={avatarUrl => setUser({...user, avatarUrl})} // Ele pega todos os valores de usuário e sobrescreve o nome
                placeholder="Informe a URL"
                value={user.avatarUrl}
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
            />
        </View>
    )
}

const style = StyleSheet.create({
    form: {
        padding:  12
    }, 
    input:{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10
    }
})