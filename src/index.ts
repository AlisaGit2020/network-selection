import {NetworkSelectionService} from "./services/NetworkSelectionService";
import {devices, networkStations} from "../config";

const service = new NetworkSelectionService();

networkStations.map((networkStation) => {
    service.addNetworkStation(networkStation)
})

devices.map((device)=> {
    const bestStation = service.getBestNetworkStation(device)

    if (bestStation) {
        console.log(`Best network station for point ${device.locationX},${device.locationY} is ${bestStation.networkStation.locationX},${bestStation.networkStation.locationY} with speed ${bestStation.speed}`)
    } else {
        console.log (`No network station within reach for point ${device.locationX},${device.locationY}`)
    }
})




