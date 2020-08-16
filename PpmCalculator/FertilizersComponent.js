import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TextInput } from 'react-native';
import { Card, ButtonGroup, Divider } from 'react-native-elements';
import FertilizerComponent from './FertilizerComponent';

export default function FertilizersComponent(props) {
    
    const [__fertilizers, __setFertilizers] = useState({});


    const updateFertilizersParent = (id, value) => {
        props.onChangeCallback({
            "fertilizers": {...__fertilizers, [id] : value}
        })
    }
    

    return (
        <Card containerStyle={{ maxHeight: 300, padding: 10 }}>
            <View style={{ flexDirection: 'row', marginBottom: 5, marginTop: 0 }}>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <Text h1 style={{ fontSize: 20 }}>
                        Fertilizers
                    </Text>
                </View>
            </View>

            <Divider style={{ backgroundColor: '#e1e8ee' }} />
            <ScrollView style={{ flexDirection: 'column', marginTop: 10, marginBottom: 30 }}>
                {
                    props.fertilizers.map((f, i) => (
                        <FertilizerComponent key={f.id} id={f.id} name={f.name} size={__fertilizers[f.id] ? __fertilizers[f.id] : 0}  onChangeCallback={(id, value) => {
                            __setFertilizers((prevState) => ({...prevState, [id] : value})); 
                            updateFertilizersParent(id, value);
                        }}  />
                    ))
                }
            </ScrollView>
        </Card>
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
