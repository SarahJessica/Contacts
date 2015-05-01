'use strict';

angular.module('photoAlbums')
.controller('AlbumsListCtrl', function($rootScope, $scope, $state, User, $firebaseArray, Album){
  $scope.afUser.$loaded(function(){
    $scope.albums = $scope.afUser.names ? $scope.afUser.names.split(',') : [];

  });

  $scope.goToEdit = function(album, $index){
    $state.go('albums.show');
  };

  $scope.removeAlbum = function(albumName, index){
    Album.removeAlbum(albumName, index);

    $scope.afUser.$loaded(function(){
      $scope.albums = $scope.afUser.names ? $scope.afUser.names.split(',') : [];
    });

  };
});
