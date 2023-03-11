import {Device, NetworkStation} from "./src/types";

export const devices :Device[] = [
    {name: 'Device 1', locationX: 0, locationY: 0},
    {name: 'Device 2', locationX: 100, locationY: 100},
    {name: 'Device 3', locationX: 15, locationY: 10},
    {name: 'Device 4', locationX: 18, locationY: 18},
    {name: 'Device 5', locationX: 13, locationY: 13},
    {name: 'Device 6', locationX: 25, locationY: 99}
]
export const networkStations: NetworkStation[] = [
    {name: 'Station 1', locationX: 0, locationY: 0, reach: 9},
    {name: 'Station 2', locationX: 20, locationY: 20, reach: 6},
    {name: 'Station 3', locationX: 10, locationY: 0, reach: 12},
    {name: 'Station 4', locationX: 5, locationY: 5, reach: 13},
    {name: 'Station 5', locationX: 99, locationY: 25, reach: 2}
]