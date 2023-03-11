import {NetworkSelectionService} from './NetworkSelectionService';
import {BestNetworkStation, Device, NetworkStation} from "../types";

describe('NetworkSelectionService', () => {

    describe('Add network stations ', () => {
        it('adds a network station successfully', async () => {
            const service = new NetworkSelectionService();
            service.addNetworkStation({locationX: 0, locationY: 0, reach: 9} as NetworkStation)
        })
    })

    describe('Testing main functions ', () => {

        const service = new NetworkSelectionService();

        beforeEach(() => {
            service.addNetworkStation({name: 'Station 1', locationX: 0, locationY: 0, reach: 9})
            service.addNetworkStation({name: 'Station 2', locationX: 20, locationY: 20, reach: 6})
            service.addNetworkStation({name: 'Station 3',locationX: 10, locationY: 0, reach: 12})
            service.addNetworkStation({name: 'Station 4',locationX: 5, locationY: 5, reach: 13})
            service.addNetworkStation({name: 'Station 5',locationX: 99, locationY: 25, reach: 2})
        })

        it('returns undefined when network station is unreachable', async () => {
            const device = {
                name: 'Alex´s working computer',
                locationX: 150,
                locationY: 150
            } as Device

            expect(service.getBestNetworkStation(device)).toBeUndefined()
        })

        it('finds best network station', async () => {
            const device = {
                name: 'Alex´s working computer',
                locationX: 15,
                locationY: 10
            } as Device

            expect(service.getBestNetworkStation(device)).toMatchObject({networkStation: {name: 'Station 3'} } as BestNetworkStation)
        })
    })

})