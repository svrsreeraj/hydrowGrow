import React, { useState } from 'react';
import { Button, Card, ListItem } from 'react-native-elements';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
var RNFS = require('react-native-fs');
import FertlizersArr from './lib/hydro/fertilizers';
import IconTypes from './iconTypes'

export default function SubstanceManager(props) {

    const collectAllSubstances = () => {
        // var path = RNFS.DocumentDirectoryPath + '/test.txt';
        // RNFS.writeFile(path, 'Lorem ipsum dolor sit amet', 'utf8')
        //   .then((success) => {
        //     console.log('FILE WRITTEN!');

        //     RNFS.readFile(path, 'utf8').then((contents) => {
        //       console.log(contents);
        //     })

        //   })
        //   .catch((err) => {
        //     console.log(err.message);
        //   });
    }

    const Item = ({ id, name }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{name}</Text>
        </View>
    );

    const EditIcon = IconTypes('material-community');
    const ToggleIcon = IconTypes('font-awesome');

    const RightElementItem = (props) => {
        return (
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity onPress={() => console.log("heee")} delayLongPress={0}>
                    <EditIcon name="pencil" size={25} color="grey" style={{ marginRight: 10 }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log("heee")} style={{ marginRight: 10 }} delayLongPress={0} >
                    <EditIcon name="delete" size={25} color="grey" />
                </TouchableOpacity>

                {props.item.enabled ?
                    <TouchableOpacity onPress={() => console.log("heee")} delayLongPress={0}><ToggleIcon name="toggle-on" size={23} color="green" /></TouchableOpacity>
                    :
                    <TouchableOpacity onPress={() => console.log("heee")} delayLongPress={0}><ToggleIcon name="toggle-off" size={23} color="grey" /></TouchableOpacity>
                }
            </View>
        )
    }
    const renderItem = ({ item }) => (

        <ListItem title={item.name} id={item.id} rightElement={<RightElementItem item={item}></RightElementItem>} />
    );




    return (

        <View>
            <FlatList style={{ marginTop: 10 }} data={FertlizersArr} renderItem={renderItem} keyExtractor={item => item.id}



            >

            </FlatList>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 0
    },
    item: {
        backgroundColor: 'white',
        padding: 5,
        marginHorizontal: 0,
        paddingLeft: 10
    },
    title: {
        fontSize: 18
    },
});