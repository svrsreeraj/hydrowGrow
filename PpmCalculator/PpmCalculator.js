import React, { useState } from 'react';
import { Button, Card } from 'react-native-elements';
import { View, Text, ScrollView } from 'react-native';
import FertilizersComponent from './FertilizersComponent';
import PpmList from './PpmList';
import NumericInput from 'react-native-numeric-input';
import FertlizersArr from '../lib/hydro/fertilizers';
import FertilizerFactory from '../lib/hydro/fertilizerFactory';
import Solution from '../lib/hydro/solution';
import { Actions } from 'react-native-router-flux';
var RNFS = require('react-native-fs');

const SIZE_IN_MG = "Mg"
const SIZE_IN_G = "G"
const defaultSolutionSize = 10

const _fertlisers = FertlizersArr.map((fertilizer) => {
  return {
    id: fertilizer.id,
    name: fertilizer.name,
    size: 0
  }
})

export default function PpmCalculator(props) {

  const [__solutionSize, __setSolutionSize] = useState(defaultSolutionSize);
  const [__solutionObj, __setSolutionObj] = useState(new Solution(defaultSolutionSize));
  const [__fertilzersInfo, __setFertilzersInfo] = useState({});

  const fertilizersChanges = (fertilzersInfo) => {
    calcultePpms(fertilzersInfo, __solutionSize)
    __setFertilzersInfo(fertilzersInfo);

  }

  const solutionSizeChange = (sizeInLiter) => {
    __setSolutionSize(sizeInLiter)
    calcultePpms(__fertilzersInfo, sizeInLiter)
  }

  const calcultePpms = (fertilzersInfo, solutionSize) => {
    let fertilizers = fertilzersInfo.fertilizers
    let solutionObj = getPPMVlaues(solutionSize, fertilizers);
    __setSolutionObj(solutionObj);
  }

  return (

    <ScrollView>



      <Card containerStyle={{ height: 60 }}>
        <View style={{ flexDirection: 'column', paddingTop: 0 }}>
          <View style={{ flexDirection: 'row' }}>
            <Text h1 style={{ width: 150, height: 50, paddingTop: 5 }}>Solution Volume (ltr)</Text>
            <NumericInput extraTextInputProps={{ "maxLength": 3 }} rounded={true} totalWidth={150} minValue={1} maxValue={1000} totalHeight={30} value={__solutionSize} onChange={value => solutionSizeChange(value)} />
          </View>
        </View>
      </Card>


      <PpmList nutrientsList={__solutionObj.nutrientPPM ? __solutionObj.nutrientPPM : {}} />


      <FertilizersComponent fertilizers={_fertlisers} onChangeCallback={fertilizersChanges} />



      <View style={{ flex: 1, alignItems: 'center', marginTop: 20 }}>
        <Button title=" Clear " onPress={() => {

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
          Actions.pop(); Actions.npmCalculator();
        }} />
      </View>

    </ScrollView>
  );
}

const getPPMVlaues = (solutionSize, fertilizers) => {
  let solutionObj = new Solution(solutionSize);
  if (!(solutionSize > 0)) {
    return solutionObj;
  }
  let sizeMultiPlyFactor = 1;

  console.log(fertilizers)

  for (const fertilizerId in fertilizers) {
    if (fertilizers.hasOwnProperty(fertilizerId)) {
      let fertilizerSize = fertilizers[fertilizerId];
      fertilizerSize = fertilizerSize * sizeMultiPlyFactor;
      if (fertilizerSize > 0) {
        let fertilizerObj = FertilizerFactory(fertilizerId);
        solutionObj.addFertilizer(fertilizerObj, fertilizerSize)
      }
    }
  }
  return solutionObj;
}
