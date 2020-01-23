import React, { PureComponent, useContext } from 'react';
import { View, Text } from 'react-native'
import { GlobalContext } from './GlobalState'

export default Second = () => {
	const { global } = useContext(GlobalContext)
	return(
		<View><Text>{global}</Text></View>
	)
}