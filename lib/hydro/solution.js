import Nutrients from './nutrients'

export default class Solution {
    /**
     * 
     * @param {Number} volume is the liter of total solution
     */
    constructor(volume = 1) {
        this.volume = volume;
        this.nutrientPPM = {};
        this.fertilizers = {};
        this.initialize();

    }

    initialize() {
        for (var nCode in Nutrients) {
            this.nutrientPPM[nCode] = 0;
        }
    }

    /**
     * 
     * @param {Fertilizer} fertilizer Object
     * @param {Number} size in mg
     */
    addFertilizer(fertilizer, size = 0) {
        if (!parseInt(size) > 0) {
            throw "invalid Size"
        }
        let nutrients = fertilizer.getNutrients();
        for (var nCode in nutrients) {
            let ppm = this.getPPMByMass(fertilizer.getNutrientMass(nCode, size));
            this._incrementPPM(nCode, ppm);
            this._incerementFertilizerSize(fertilizer, size);
        }
    }

    /**
     * 
     * @param {Fertilizer} fertilizer Object
     * @param {Number} size in mg
     */
    removeFertilizer(fertilizer, size = 0) {
        if (!parseInt(size) > 0) {
            throw "invalid Size"
        }
        let currentFertilizerSize =  this.fertilizers[fertilizer.id];
        if((currentFertilizerSize - size) < 0) {
            throw "Cant reduce than exisisting size"
        }
        let nutrients = fertilizer.getNutrients();
        for (var nCode in nutrients) {
            let ppm = this.getPPMByMass(fertilizer.getNutrientMass(nCode, size));
            this._decrementPPM(nCode, ppm);
            this._decrementFertilizerSize(fertilizer, size)
        }
    }

    /**
    * 
    * @param {Number} elementMass in mg
    */
    getPPMByMass(elementMass) {
        return (elementMass / this.volume)
    }

    getMassByPPM(ppm) {
        return ppm * this.volume
    }

    _incerementFertilizerSize(fertilizer, size) {
        if (!this.fertilizers[fertilizer.id]) {
            this.fertilizers[fertilizer.id] = 0
        }
        this.fertilizers[fertilizer.id] = this.fertilizers[fertilizer.id] + size;
    }

    _decrementFertilizerSize(fertilizer, size) {
        if (!this.fertilizers[fertilizer.id]) {
            this.fertilizers[fertilizer.id] = 0
        }
        this.fertilizers[fertilizer.id] = this.fertilizers[fertilizer.id] - size;
    }


    _incrementPPM(nCOde, ppm) {
        this.nutrientPPM[nCOde] = this.nutrientPPM[nCOde] + ppm;
    }


    _decrementPPM(nCOde, ppm) {
        this.nutrientPPM[nCOde] = this.nutrientPPM[nCOde] - ppm;
    }
}