app.controller('GridMenuController', function(){
    this.tiles = girdMenu;
});

function GridMenuDataService($q) {
 var gridMenu = [
    {
    name : '',
    link : '/about',
    image : "./assets/TEST/Images/about.jpg"
},{
    name : '',
    link : '/library',
    image : "./assets/TEST/Images/Library.jpg"
},{
    name : 'ROLLER SHADES',
    link : '/rollershades',
    image : "./assets/TEST/Images/RollerShades.jpg"
},{
    name : 'BEDDING',
    link : '/bedding',
    image : "./assets/TEST/Images/Bedding.jpg"
},{
    name : 'FABRIC COLLECTIONS',
    link : '/fabriccollections',
    image : "./assets/TEST/Images/FabricCollections.jpg"
},{
    name : 'WEAVEUP',
    link : '/weaveup',
    image : "./assets/TEST/Images/WeaveUp.jpg"
},{
    name : 'MEDIA',
    link : '/media',
    image : "./assets/TEST/Images/Media.jpg"
},{
    name : 'CONTACT',
    link : '/contact',
    image : "./assets/TEST/Images/Contact.jpg"
}];

  // Promise-based API
  return {
    loadAllGridMenu: function() {
      // Simulate async nature of real remote calls
      return $q.when(gridMenu);
    }
  };
}

export default ['$q', GridMenuDataService];

