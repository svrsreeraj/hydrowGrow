import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { StyleSheet, View, Text } from 'react-native';
import Main from './Main';
import PpmCalculator from './PpmCalculator/PpmCalculator';
import SubstanceManager from './SubstanceManager';

export default class AppRouter extends Component {
    render() {
        return (
            <Router hideNavBar="true" navigationBarStyle={{ backgroundColor: '#2089dc' }} titleStyle={styles.navTitle}>
                <Scene key="root">
                    <Scene key="mainOage" component={Main} title="Home" initial={true} />
                    <Scene key="npmCalculator" component={PpmCalculator} title="PPM Calculator" />
                    <Scene key="substanceManager" component={SubstanceManager} title="Substance Manager" />
                </Scene>
            </Router>
        )
    }
}


const styles = StyleSheet.create({
    navTitle: {
        "color": "white",
        "fontWeight" : "normal",
        "fontFamily" : "monospace"
    },
});
