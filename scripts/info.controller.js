/**
 * Created by rotemr on 5/27/2016.
 */
app.controller('infoController', ['$scope', '$http', function ($scope, $http) {

    // todo: receive an id from a query string (?) and trying to filter the information by it

    $scope.infos = [];

    $http.get("info.json").then(function (response) {
        $scope.infos = response.data.query_result.data.rows;
    });
}]);


// fixme: http://data.obudget.org/api/queries/497/results/134030.json?api_key=5SbTE9eOrV2oqfAI0ybXyNvBaYiVdoCzDO4EpEVK