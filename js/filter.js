angular.module('myApps', ['ngSanitize']).controller('appsCtrl', function($scope) {
	techEvents=[],nonTechEvents=[],workshops=[],apps=[];
	for(i=1;i<=9;i++){
		name=`Tech ${i}`,id=`Tech_${i}`;
		techEvents.push({name:name,id:id});
		apps.push({id:id,name:name,body:`Welcome to Tech Event ${name}`});
	}
	for(i=1;i<=9;i++){
		name=`Non Tech ${i}`,id=`Non_Tech_${i}`;
		nonTechEvents.push({name:name,id:id});
		apps.push({id:id,name:name,body:`Welcome to Non Tech Event ${name}`});
	}
	for(i=1;i<=9;i++){
		name=`Workshop ${i}`,id=`Workshop_${i}`;
		workshops.push({name:name,id:id});
		apps.push({id:id,name:name,body:`Welcome to Workshop ${name}`});
	}
	$scope.techEvents=techEvents;
	$scope.nonTechEvents=nonTechEvents;
	$scope.workshops=workshops;
	$scope.apps=apps;
	$scope.recents=[];
	__push=(appID)=>{
		closeApp(appID);
		$scope.recents.unshift({id:appID,html:$(`#${appID}`).html()});
		console.log('recents',$scope.recents);
	}
	find=(appID)=>{
		for(i=0;i<$scope.recents.length;i++){
			if($scope.recents[i].id==appID){return i;}
		}
		return -1;
	}
	closeApp=(appID)=>{
		console.log(appID)
		ind=find(appID);
		if(ind!=-1){$scope.recents.splice(ind,1);}
	}
	$scope.closeAll=()=>{
		$scope.recents=[];
	}
	$scope.__push=__push;
	$scope.closeApp=closeApp;
	$scope.showApp=(appID)=>{
		hideRecents();
		showApp(appID);
	}
	// __push('app_Tech_1');
	// __push('app_Tech_2');
	// __push('app_Tech_3');
	// __push('app_Tech_4');
	// __push('app_Tech_5');
	// __push('app_Tech_6');
});