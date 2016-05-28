/**
 * Created by rotemr on 5/27/2016.
 */
app.controller('infoController', ['$scope', '$http', function ($scope, $http) {

    $scope.info = {};

    $http.get("info.json").then(function (response) {
        $scope.info = response.data.query_result.data.rows[0];
    });


}]);