angular.module("app",[]).controller("AppCtrl",function(p){p.tweets=[],p.searchTerm="",p.safeApply=function(p){var t=this.$root.$$phase;"$apply"==t||"$digest"==t?p&&p():this.$apply(p)}});