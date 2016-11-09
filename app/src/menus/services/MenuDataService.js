function MenuDataService($q) {
 
//This will be the data structure for the side menu. 
//If the menu item has a link, an alert will show the url,
//if it instead has a submenu, that will expand. 
var menu = [{
    name : 'LIBRARY',
    link : '/library',
    submenu: []
},{
    name : 'PRODUCTS',
    link : '',
    submenu: [{
        name : 'FABRIC COLLECTIONS',
        link : '/fabriccollections',
    },{ 
        name : 'WEAVEUP',
        link : '/weaveup',
    },{
        name : 'ROLLER SHADES',
        link : '/rollershades',
    },{
        name : 'REVL',
        link : '/revl',
    },{
        name : 'TENCEL PLUS',
        link : '/tencelplus',
    },{
        name : 'FRESH',
        link : '/fresh',
    }]
},{ 
    name : 'MEDIA',
    link : '/media',
    submenu: []
},{
     name : 'CAREERS',
    link : '/careers',
    submenu: []
},{
     name : 'CONTACT',
    link : '/contact',
    submenu: []
}];

  // Promise-based API
  return {
    loadAllMenu: function() {
      // Simulate async nature of real remote calls
      return $q.when(menu);
    }
  };
}

export default ['$q', MenuDataService];

