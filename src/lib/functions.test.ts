import {getDistance} from "./functions";


describe('functions', () => {
    it('should calculate distance', async () => {
        expect(getDistance(10,10,6,6)).toBe(5.656854249492381)
    })

    it('work also with zeroes', async () => {
        expect(getDistance(0,0,0,0)).toBe(0)
    })
})