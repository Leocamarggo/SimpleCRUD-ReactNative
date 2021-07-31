import React, { useContext } from 'react';
import { View, FlatList, Alert } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements'
import UsersContext from '../context/UsersContext';

export default props =>{

    const { state, dispatch } = useContext(UsersContext);

    
    const confirmUserDelete = (user) =>
        Alert.alert('Excluir usuário', 'Deseja excluir o usuário?', [
            {
                text: 'Sim',
                onPress() {
                    dispatch({
                        type: 'deleteUser',
                        payload: user
                    })
                }
            },
            {
                text: 'Não'
            }
    ])
    
    function getUserItem({item: user}) {
        return (
            <ListItem 
                key={user.id} 
                bottomDivider 
                onPress={() => props.navigation.navigate('UserForm')}
            >
                <Avatar source={{uri: user.avatarUrl}} />
                <ListItem.Content>
                    <ListItem.Title>
                        {user.name}
                    </ListItem.Title>
                    <ListItem.Subtitle>
                        {user.email}
                    </ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron 
                    onPress={() => props.navigation.navigate('UserForm', user)}
                    name="edit"
                    color="orange"
                    size={25}
                />
                <ListItem.Chevron 
                    onPress={() => confirmUserDelete(user)}
                    name="delete"
                    color="red"
                    size={25}
                />
            </ListItem>
        )
    }

    return(
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={state.users}
                renderItem={getUserItem}
            />
        </View>
    )
}