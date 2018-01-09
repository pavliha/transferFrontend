export default class Directions extends google.maps.DirectionsService {
    async drive({origin, destination}) {
        return await this.route({
            origin,
            destination,
            travelMode: google.maps.TravelMode.DRIVING,
        })
    }

    route(request) {
        return new Promise((resolve, reject) => {
            super.route(request, (result, status) => {
                if (status === google.maps.DirectionsStatus.OK) {
                    resolve(result)
                } else {
                    reject(`error fetching directions ${result}`);
                }
            });
        })
    }
}