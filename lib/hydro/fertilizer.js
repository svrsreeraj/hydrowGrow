export default class Fertilizer {
    constructor(id, name, formula = null, nutrients = {}) {
        this.id = id;
        this.name = name;
        this.formula = formula;
        this.nutrients = nutrients
    }

    addNutrient(nCode, percentage) {
        if (!Nutrients[nCode]) {
            throw "Nutrient not found"
        }
        this.nutrients[nCode] = percentage
    }

    getNutrients() {
        return this.nutrients;
    }

    hasNutrient(nCode) {
        return this.nutrients[nCode] !== undefined
    }

    getNutrientPercentage(nCode) {
        if (this.hasNutrient(nCode)) {
            return this.nutrients[nCode];
        }
        return null;
    }

    /**
     * 
     * @param {String} nCode 
     * @param {Number} size in mg
     */
    getNutrientMass(nCode, size = 0) {
        let percentage = this.getNutrientPercentage(nCode);
        if (!percentage) {
            throw "Invalid nCode"
        }
        if (!parseInt(size) > 0) {
            throw "invalid Size"
        }
        return elementMass = (size * percentage) / 100;
    }

    getFertilizerSizeByNutrientMass(nCode, mass) {
        let percentage = this.getNutrientPercentage(nCode);
        if (!percentage) {
            throw "Invalid nCode"
        }
        if (!parseInt(mass) > 0) {
            throw "invalid Mass"
        }
        return fertlizerSize = (mass * 100) / percentage
    }

}