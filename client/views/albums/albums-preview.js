'use strict';

angular.module('photoAlbums')
.controller('AlbumsPreviewCtrl', function($rootScope, $scope, $state, Album, $window, $firebaseArray){


  var currentProfileKey = Object.keys($scope.afUser.albums[$state.params.album])[0];
  var profileInfo = $scope.afUser.albums[$state.params.album][currentProfileKey];
  console.log(profileInfo);

  // var currentProfPicKey = Object.keys($scope.afUser.albums[$state.params.album].photos)[0];
  $scope.profPic = $scope.afUser.albums[$state.params.album].photos[Object.keys($scope.afUser.albums[$state.params.album].photos)[0]];


  // $scope.profPic = profPic;
  // debugger;

  $scope.name = $state.params.album;
  $scope.dob = profileInfo.date;
  $scope.email = profileInfo.email;
  $scope.facebook = profileInfo.facebook;
  $scope.twitter = profileInfo.twitter;
  $scope.url = profileInfo.url;
  $scope.phone = profileInfo.phone;

  $scope.goBack = function(){
    $state.go('albums.list');
  };

});
