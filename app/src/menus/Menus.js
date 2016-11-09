// Load the custom app ES6 modules

import MenuDataService from 'src/menus/services/MenuDataService';

import MenuList from 'src/menus/components/list/MenuList';

//import GridMenuDetails from 'src/menus/components/details/MenuDetails';

/*
import GirdMenuDataService from 'src/menus/services/GridMenuDataService';

import GirdMenuList from 'src/menus/components/list/UsersList';
import GridMenuDetails from 'src/menus/components/details/UserDetails';
*/

// Define the Angular 'menus' module

export default angular
  .module("menus", ['ngMaterial'])

  .component(MenuList.name, MenuList.config)
  //.component(GridMenuDetails.name, GridMenuDetails.config)

  .service("MenuDataService", MenuDataService);
