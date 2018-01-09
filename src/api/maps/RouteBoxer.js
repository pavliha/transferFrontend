export default class RouteBoxer extends window.RouteBoxer {

    generateBoxes({direction, distance}) {
        // Box around the overview path of the first route
        const path = this.direction.routes[0].overview_path
        return this.routeBoxer.box(path, this.distance)
    }
}