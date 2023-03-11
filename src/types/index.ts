export type LocationObject = {
    name: string
    locationX: number
    locationY: number
}
export type NetworkStation = LocationObject & {
    reach: number
}

export type BestNetworkStation = {
    networkStation: NetworkStation
    speed: number
}

export type Device = LocationObject
