// Notice that we do not have a controller since this component does not
// have any specialized logic.

export default {
  name : 'gridMenuList',
  config : {
    bindings         : {  gridMenu: '<', selected : '<', showDetails : '&onSelected' },
    templateUrl      : 'src/menus/components/list/GridMenuList.html'
  }
};
