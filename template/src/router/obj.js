import routeData from 'src/router';

const routerObj = {};

for (let key in routeData) {
    let item = routeData[key];
    routerObj[item.name] = key;
}
export default routerObj;
