var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-57169562-5' /*'UA-57169562-10'*/]);
//_gaq.push(['_trackPageview']);

(function() {
  //this works only on Chrome
  var isChrome = /Chrome\/([0-9.]+)/gi.test(navigator.userAgent);
  if(isChrome){
    //change with new analytics: TODO: https://developer.chrome.com/docs/extensions/mv3/tut_analytics/
  }
})();

//this works with Firefox
//https://blog.mozilla.org/addons/2016/05/31/using-google-analytics-in-extensions/
require(["jquery","global","constants", "popup-utils"], 
    function(jQuery,$G,$C,PopupUtils){
    var chrome = $G.chrome;
    var window = $G.window;   
    if($G.isFirefox){
      //PopupUtils.trackAnalyticsPageView();
    } 
});