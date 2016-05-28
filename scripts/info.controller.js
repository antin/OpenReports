/**
 * Created by rotemr on 5/27/2016.
 */
app.controller('infoController', ['$scope', '$http', function ($scope, $http) {

    $scope.info = {};

    $http.get("http://data.obudget.org/api/queries/497/results/134030.json?api_key=5SbTE9eOrV2oqfAI0ybXyNvBaYiVdoCzDO4EpEVK").then(function (response) {

        var votes =0;
        var committees=0;
        var conferences=0;
        var preparebill=0;
        var plenum=0;
        var public_help=0;
        var start = response.data.query_result.data;
        for(var i=0;i<start.rows.length;i++)
        {
            votes+=start.rows[i].votes;
            committees+=start.rows[i].committees;
            conferences+=start.rows[i].conferences;
            preparebill+=start.rows[i].preparebill;
            plenum+=start.rows[i].plenum;
            public_help+=start.rows[i].public_help;
        }

        var end = start.rows[0];
        end.votes=votes;
        end.committees=committees;
        end.conferences=conferences;
        end.preparebill=preparebill;
        end.plenum=plenum;
        end.public_help=public_help;

        $scope.info = end;
    });


}]);