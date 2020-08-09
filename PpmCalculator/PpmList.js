import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

export default function PpmList(props) {
    const nutrientsList = JSON.parse(JSON.stringify(props.nutrientsList))
    for (const key in nutrientsList) {

        if (nutrientsList.hasOwnProperty(key)) {
            nutrientsList[key] = nutrientsList[key] ? nutrientsList[key].toFixed(3) : 0;
        }
    }
    return (
        <View style={{ margin: 15, marginBottom: 5 }}>

            <View style={{ flex: 1, backgroundColor: '#fff', marginBottom: 15 }}>
                <Table borderStyle={styles.tableBorder}>
                    <Row data={['N', 'P', 'K', 'Ca', 'Mg', 'S']} style={styles.tableHead} textStyle={{ margin: 6, textAlign: 'center' }} />
                    <Rows data={[[nutrientsList["N"], nutrientsList["P"], nutrientsList["K"], nutrientsList["Ca"], nutrientsList["Mg"], nutrientsList["S"]]]} textStyle={{ margin: 4, textAlign: 'center' }} />
                </Table>
            </View>

            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <Table borderStyle={styles.tableBorder}>
                    <Row data={['Fe', 'B', 'Cu', 'Mn', 'Zn', 'Mo']} style={styles.tableHead} textStyle={{ margin: 6, textAlign: 'center' }} />
                    <Rows data={[[nutrientsList["Fe"], nutrientsList["B"], nutrientsList["Cu"], nutrientsList["Mn"], nutrientsList["Zn"], nutrientsList["Mo"]]]} textStyle={{ margin: 4, textAlign: 'center' }} />
                </Table>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    tableBorder: {
        borderWidth: 2, borderColor: '#e1e8ee'
    },
    tableHead: { height: 40, backgroundColor: '#f1f8ff' }
});
