import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import NumericInput from 'react-native-numeric-input';

export default function FertilizerComponent(props) {
    return (
        <View style={{ flexDirection: 'row', paddingBottom: 20 }}>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start' }}>
                <Text h1 style={{ paddingTop: 5 }}>
                    {props.name}
                </Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                <NumericInput totalWidth={130} extraTextInputProps={{ "maxLength": 6 }}
                    totalHeight={30} onChange={value => props.onChangeCallback(props.id, value ? value : 0)} 
                    value={props.size} step={1} minValue={0} maxValue={999999} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
