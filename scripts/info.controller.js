/**
 * Created by rotemr on 5/27/2016.
 */
app.controller('infoController', ['$scope', '$http', function ($scope, $http) {

    $scope.info = {};
	$scope.calc = {};
	var mk_id = 952 ; // יעל כהן פארן"
	// read from query string

	//$http.get('http://data.obudget.org/api/queries/528/results/135177.json?api_key=5SbTE9eOrV2oqfAI0ybXyNvBaYiVdoCzDO4EpEVK')
	$http.get('data/135177.json')
		.success(function(data) {
			 //$scope.zipCodes = data;
			 // filter by mk_id
			 //$scope.info.votes = data.query_result.data.rows[1].time_calc;
			 $scope.info_rows = data.query_result.data.rows;//[1].time_calc;
			 var rawData = data.query_result.data.rows;
			 angular.forEach(rawData, function (value) {
				 
				 if (value.mk_id != mk_id) {
					 return;
				 }
				 console.log(value.category);
				 console.log(value.time_calc);
				 $scope.calc[value.category] = value.time_calc;
				 console.log($scope.calc[value.category]);
			 });
			
			 
		})
		.error(function(error, status, headers, config) {
			 console.log(status);
			 console.log("Error occured");
		});

		/*
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
*/

}]);
