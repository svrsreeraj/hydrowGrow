import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';


export default function FertilizerComponent(props) {

    const getValueFromMg = () => {

    }

    const valInNum = (val) => {
        return parseInt(val) ? parseInt(val) : 0;
    }

    const setKgval = (val) => {
        val = val.replace(/[^0-9]/g, '');
        __setSizeKg(val);
        let sizeInMg = (valInNum(val) * 1000000) + (valInNum(__sizeG) * 1000) + (valInNum(__sizeMg));
        props.onChangeCallback(props.id, sizeInMg);
    }


    const setGval = (val) => {
        val = val.replace(/[^0-9]/g, '');
        __setSizeG(val);
        let sizeInMg = (valInNum(__sizeKg) * 1000000) + (valInNum(val) * 1000) + (valInNum(__sizeMg));
        props.onChangeCallback(props.id, sizeInMg);
    }


    const setMgval = (val) => {
        val = val.replace(/[^0-9]/g, '');
        __setSizeMg(val);
        let sizeInMg = (valInNum(__sizeKg) * 1000000) + (valInNum(__sizeG) * 1000) +  (valInNum(val));
        props.onChangeCallback(props.id, sizeInMg);
    }

    const [__sizeKg, __setSizeKg] = useState("");
    const [__sizeG, __setSizeG] = useState("");
    const [__sizeMg, __setSizeMg] = useState("");

    return (
        <View style={{ flexDirection: 'row', paddingBottom: 20 }}>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start' }}>
                <Text h1 style={{ paddingTop: 5 }}>
                    {props.name}
                </Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', marginRight: 10 }}>
                {/* <NumericInput totalWidth={130} extraTextInputProps={{ "maxLength": 6 }}
                    totalHeight={30} onChange={value => props.onChangeCallback(props.id, value ? value : 0)} 
                    value={props.size} step={1} minValue={0} maxValue={999999} /> */}

                <TextInput
                    style={{ height: 35, width: 50, borderWidth: 0, textAlign: "right", padding: 0 }}
                    placeholder="Kg"
                    maxLength={3}
                    keyboardType='numeric'
                    value={__sizeKg}
                    onChangeText={value => setKgval(value)}
                />

                <TextInput
                    style={{ height: 35, width: 50, borderWidth: 0, textAlign: "right", padding: 0 }}
                    placeholder="G"
                    maxLength={3}
                    keyboardType='numeric'
                    value={__sizeG}
                    onChangeText={value => setGval(value)}
                />

                <TextInput
                    style={{ height: 35, width: 50, borderWidth: 0, textAlign: "right", padding: 0 }}
                    placeholder="Mg"
                    maxLength={3}
                    keyboardType='numeric'
                    value={__sizeMg}
                    onChangeText={value => setMgval(value)}
                />

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
 