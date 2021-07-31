import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserList from './src/views/UserList';
import UserForm from './src/views/UserForm';
import { UsersProvider } from './src/context/UsersContext';


const Stack = createStackNavigator();

export default props =>{
    return(
        <UsersProvider>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="UserList"
                    screenOptions={screenOptions}
                >
                    <Stack.Screen
                        name="UserList"
                        component={UserList}
                        options={() => {
                            return{
                                title: "Lista de Usuários"
                            }
                        }}
                    />
                    <Stack.Screen
                        name="UserForm"
                        component={UserForm}
                        options={{
                            title: "Formulário de Usuários"
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </UsersProvider>
    )
}

const screenOptions = {
    headerStyle: {
        backgroundColor: '#6200ee'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: 'center'
    }
}