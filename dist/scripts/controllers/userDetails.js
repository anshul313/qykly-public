"use strict";angular.module("sbAdminApp").controller("userDetailCtrl",function($scope,$position,$location,$http,$stateParams){var userId=$stateParams.userId;$stateParams.userId||($scope.alerts=[{msg:"userId is missing",type:"error"}]),$http.get("api/userdetail/"+$stateParams.id).then(function(response){$scope.user=response.data.data,$scope.userDeviceInfo=response.data.data.DeviceInfo[0]},function(response){$scope.alerts=[{msg:response.data.userMessage||"Server error! Are you connected to the internet?.",type:"error"}]}),$http.get("api/findblacklistedshortcodes/"+userId).then(function(response){$scope.BlackListed=response.data.data.blacklisted},function(response){$scope.alerts=[{msg:response.data.userMessage||"Server error! Are you connected to the internet?.",type:"error"}]}),$http.get("api/findunprocessedshortcodes/"+userId).then(function(response){$scope.Unknown=response.data.data.unprocessed},function(response){$scope.alerts=[{msg:response.data.userMessage||"Server error! Are you connected to the internet?.",type:"error"}]}),$http.get("api/findprocessedshortcodes/"+userId).then(function(response){$scope.UserCodes=response.data.data.processed},function(response){$scope.alerts=[{msg:response.data.userMessage||"Server error! Are you connected to the internet?.",type:"error"}]}),$scope.getProcessed=function(code){$http.post("api/userprocessed",{UserId:userId,Sender:code}).then(function(response){$scope.show=!0,$scope.Code="Sms code :"+code,$scope.messages=response.data.data},function(response){$scope.alerts=[{msg:response.data.userMessage||"Server error! Are you connected to the internet?.",type:"error"}]})},$scope.getunProcessed=function(code){$http.post("api/userunprocessed",{UserId:userId,Sender:code}).then(function(response){$scope.show=!0,$scope.Code="Sms code: "+code,$scope.messages=response.data.data},function(response){$scope.alerts=[{msg:response.data.userMessage||"Server error! Are you connected to the internet?.",type:"error"}]})},$scope.show=!0,$scope.showBlacklisted=function(){$scope.show=!1},$scope.selectAllToBlacklist=function(){$scope.checkbox=!0;var checkboxes=document.getElementsByName("blockme");if($scope.bulkCode)for(var j=0;j<checkboxes.length;j++)checkboxes[j].checked=!1;else for(var i=0;i<checkboxes.length;i++)checkboxes[i].checked=!0},$scope.blacklistTest=function(){for(var arr=[],checkboxes=document.getElementsByName("blockme"),i=0;i<checkboxes.length;i++)checkboxes[i].checked&&arr.push(checkboxes[i].value);console.log(arr),$http.post("api/flag/mod",{smsCode:arr}).then(function(response){$scope.smsUnprocess=[],$scope.alerts=[{msg:response.data.userMessage,type:"error"}],$scope.length=$scope.length-arr.length,angular.forEach(arr,function(value,key){var index=$scope.codeIndex(value);$scope.shortCodeList.splice(index,1)}),$scope.checkbox=!1},function(response){$scope.alerts=[{msg:response.data.userMessage||"Server error! Are you connected to the internet?.",type:"error"}]})}});