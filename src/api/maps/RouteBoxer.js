export default class RouteBoxer extends window.RouteBoxer {

    generateBoxes({directions, distance}) {
        // Box around the overview path of the first route
        const path = directions.routes[0].overview_path
        return this.box(path, distance)
    }
}