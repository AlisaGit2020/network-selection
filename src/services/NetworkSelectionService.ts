import {BestNetworkStation, Device, NetworkStation} from "../types";
import {getDistance} from "../lib/functions";

export class NetworkSelectionService {
    private networkStations: NetworkStation[] = []

     public addNetworkStation(networkStation: NetworkStation) {
        this.networkStations.push(networkStation)
    }

    private getSpeed(station: NetworkStation, device: Device): number {
        const distance = getDistance(station.locationX, station.locationY, device.locationX, device.locationY);
        if (distance > station.reach) {
            return 0;
        }
        return (station.reach - distance) ** 2;
    }

    public getBestNetworkStation(device: Device): BestNetworkStation | undefined {

        let bestSpeed = 0;

        for (const station of this.networkStations) {
            const speed = this.getSpeed(station, device)
            if (speed > bestSpeed) {
                return {
                    networkStation : station,
                    speed : speed
                }
            }
        }

        return undefined
    }
}