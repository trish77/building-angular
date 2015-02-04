/**
 * Created by Trish on 2/4/2015.
 */
angular.module("modalApp", ["ui.router"]).config(function($stateProvider) {
  $stateProvider.state("Default", {});
  $stateProvider.state('Modal',{
    views:{
      'modal' : {
        templateURL : 'modal.html'
      }
    },

    onEnter:   ["$state", function($state) {
      $(document).on("keyup", function(e){
        if(e.keyCode == 27){
          $(document).off("keyup");
          $state.go("Default");
        }
      });

      $(document).on("click", ".Modal-backdrop, .Modal-holder", function(){
        $state.go("Default");
      });

      $(document).on("click", ".Modal-box, .Modal-box *", function(e){
        e.stopPropagation();
      });
    }],
    abstract: true
});

    $stateProvider.state("Modal.confirmAddToCart", {
      views: {
        "modal": {
          templateUrl: "modals/confirm.html"
        }
      }
    });
  });
