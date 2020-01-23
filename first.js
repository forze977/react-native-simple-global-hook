import React, { PureComponent, useContext } from 'react';
import { View, Text, Button, TextInput } from 'react-native'
import { GlobalContext } from './GlobalState'

export default First = (props) => {
	const { global, update } = useContext(GlobalContext)
	return (
		<View>
			<Text>{global}</Text>
			<TextInput value={global} onChangeText={(text) => update(text)}/>
			<Button title={'to second'} onPress={() => props.navigation.navigate('Second')}/>
		</View>
	)
}