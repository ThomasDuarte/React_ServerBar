/* ORGanizer for Salesforce - v10000.0.9.53 
 * Author: Enrico Murru (https://organizer.solutions/)
 * Copyright 2016-2024
 */
!function(exports,global){define("ui-utils",["global","constants","jquery"],function($G,$C,$){var _ids=[];return{getUniqueId:function(){for(var _id;;)if(_id=Math.random().toString().replace(".",""),!$("#"+_id).length&&_ids.indexOf(_id)<0)return _ids.push(_id),_id}}}),global.true=exports}({},function(){return this}());