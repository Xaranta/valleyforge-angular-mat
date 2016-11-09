// Notice that we do not have a controller since this component does not
// have any specialized logic.

export default {
  name : 'menuList',
  config : {
    bindings         : {  menu: '<', selected : '<', showDetails : '&onSelected' },
    templateUrl      : 'src/menus/components/list/MenuList.html'
  }
};
