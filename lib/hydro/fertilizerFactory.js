import FertlizersArr from './fertilizers'
import Fertlizer from './fertilizer'

const fertlizersMap = {}
FertlizersArr.forEach((fertilizer) => {
    fertlizersMap[fertilizer.id] = fertilizer
})
export default FertilizerFactory = (id) => {
    let fertilizerData = fertlizersMap[id];
    return new Fertlizer(fertilizerData.id, fertilizerData.name, fertilizerData.formula, fertilizerData.nutrients)
}