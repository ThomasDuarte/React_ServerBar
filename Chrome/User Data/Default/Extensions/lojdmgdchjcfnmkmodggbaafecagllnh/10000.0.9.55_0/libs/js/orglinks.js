/* ORGanizer for Salesforce - v10000.0.9.53 
 * Author: Enrico Murru (https://organizer.solutions/)
 * Copyright 2016-2024
 */
!function(exports,global){require(["jquery","global","constants","crypto","lz-string","popup-utils","justgage","salesforce-client","jquery-ui","bootstrap-modal"],function(jQuery,$G,$C,CryptoJS,LZString,PopupUtils,JustGage,$SalesforceClient){"use strict";var chrome=$G.chrome,window=$G.window,$=jQuery.noConflict();window&&window._gaq&&window._gaq.push(["_trackPageview"]),PopupUtils.getConfigParameterLocal([PopupUtils.StorageParamNameBetaFeatures],function(err,params){params&&params[PopupUtils.StorageParamNameBetaFeatures]&&params[PopupUtils.StorageParamNameBetaFeatures].DARK_MODE||$("body").removeClass("bnsn-dark")}),PopupUtils.handleCSSImageReferences(),$("#quicklinksHelp").attr("href",$C.Endpoints.FAQPage+"#quicklinks");var getSobjectLinks=function(oid,apiLevel,callback){var isLex="1"===PopupUtils.getURLParameter("lex");PopupUtils.getActiveSessions(null,"0",function(err,sessions){if(err)return callback&&callback(new Error("No valid session found"));var domainAPI=(sessions[oid]||{}).domainAPI||null,sid=(sessions[oid]||{}).sid||null;if(!domainAPI||!sid)return callback&&callback(new Error("No valid session found"));var $client=new $SalesforceClient.Client("https://"+domainAPI,sid,apiLevel||$C.SF_API.LEVEL),_orgDescribes={};$client.globalDescribe(function(err,rslt){if(err)return callback&&callback(err);var layoutables=[];for(var key in rslt){var descr=rslt[key];descr.layoutable&&layoutables.push(key)}_orgDescribes[oid]={describe:rslt};var query="select+id,DurableId,QualifiedApiName,developername,NamespacePrefix,KeyPrefix+from+EntityDefinition+where+qualifiedapiname+IN+('"+layoutables.join("','")+"')";$client.toolingAPIQuery(query,function(err,rslt){if(err||!rslt)return callback&&callback(err);_orgDescribes[oid].objectQuicklinks=[];for(var i=0;i<rslt.records.length;i++){var obj=rslt.records[i];_orgDescribes[oid].describe[obj.QualifiedApiName].DurableId=obj.DurableId,_orgDescribes[oid].describe[obj.QualifiedApiName].NamespacePrefix=obj.NamespacePrefix}for(key in _orgDescribes[oid].describe){var descr=_orgDescribes[oid].describe[key];if(descr.layoutable&&descr.DurableId)for(var ui=0;ui<$C.ObjectQuickLinks.length;ui++){var objUrl=$C.ObjectQuickLinks[ui];objUrl.onlyCustom&&!descr.custom||objUrl.onlyStandard&&descr.custom||objUrl.onlyCreatable&&!descr.createable||_orgDescribes[oid].objectQuicklinks.push({l:objUrl.label.replace("{DurableId}",descr.DurableId).replace("{QualifiedApiName}",descr.name).replace("{Label}",descr.label).replace("{NamespacePrefix}",descr.NamespacePrefix?"<small>("+descr.NamespacePrefix+")</small>":"").replace("{KeyPrefix}",descr.keyPrefix),n:objUrl.label.replace("{DurableId}",descr.DurableId).replace("{QualifiedApiName}",descr.name).replace("{Label}",descr.label).replace("{NamespacePrefix}",descr.NamespacePrefix?"<small>("+descr.NamespacePrefix+")</small>":"").replace("{KeyPrefix}",descr.keyPrefix),p:(objUrl.urlLex&&isLex?objUrl.urlLex:objUrl.url||objUrl.urlLex).replace("{DurableId}",descr.DurableId).replace("{QualifiedApiName}",descr.name).replace("{Label}",descr.label).replace("{KeyPrefix}",descr.keyPrefix)})}}return callback&&callback(null,_orgDescribes[oid].objectQuicklinks)})})})};$(".ui-page-loading").show(),$(".ui-page-content").hide(),PopupUtils.getConfigParameterLocal([PopupUtils.StorageParamNameOrgs,PopupUtils.StorageParamNameApiLevel],function(err,params){if(!err){var oid=PopupUtils.getURLParameter("oid"),isLex="1"===PopupUtils.getURLParameter("lex");oid&&oid.length>15&&(oid=oid.substring(0,15));for(var orgsSettings=params[PopupUtils.StorageParamNameOrgs]||[],apiLevel=params[PopupUtils.StorageParamNameApiLevel]||$C.SF_API.LEVEL,org=null,i=0;i<orgsSettings.length;i++)if(oid&&orgsSettings[i].oid&&(oid===orgsSettings[i].oid||0===orgsSettings[i].oid.indexOf(oid))){org=orgsSettings[i];break}org||(org={oid:oid}),getSobjectLinks(oid,apiLevel,function(err,sobjectLinks){var quicklinksFile=isLex?"/resources/setup_lex.json":"/resources/setup_classic.json";$.getJSON(chrome.runtime.getURL(quicklinksFile),function(settings){for(var i=0;i<settings.length;i++)settings[i].p=settings[i].p.replace("{OrgId}",oid);settings=settings.concat($C.OtherQuickLinks);for(var quickLinksStandard=settings||[],quickLinksCustom=PopupUtils.mergeAndSortQuickLinks(JSON.parse(org.ql||"[]"),null),quickLinksSobjects=sobjectLinks?PopupUtils.mergeAndSortQuickLinks(sobjectLinks,null):[],table=$(".ui-standard-links-table"),tbody=table.find("tbody"),i=0;i<quickLinksStandard.length;i++){var newTr=$("<tr/>"),tdLabel=$("<td/>"),tdPath=$("<td/>");tdLabel.html(quickLinksStandard[i].l),tdPath.html(quickLinksStandard[i].p),newTr.append(tdLabel).append(tdPath),tbody.append(newTr)}if(quickLinksCustom&&quickLinksCustom.length){table=$(".ui-custom-links-table"),tbody=table.find("tbody");for(var i=0;i<quickLinksCustom.length;i++){var newTr=$("<tr/>"),tdLabel=$("<td/>"),tdPath=$("<td/>");tdLabel.html(quickLinksCustom[i].l),tdPath.html(quickLinksCustom[i].p),newTr.append(tdLabel).append(tdPath),tbody.append(newTr)}}else $(".ui-custom-no-link").show(),$(".ui-custom-links-table").hide();if(quickLinksSobjects&&quickLinksSobjects.length){table=$(".ui-sobjects-links-table"),tbody=table.find("tbody");for(var i=0;i<quickLinksSobjects.length;i++){var newTr=$("<tr/>"),tdLabel=$("<td/>"),tdPath=$("<td/>");tdLabel.html(quickLinksSobjects[i].l),tdPath.html(quickLinksSobjects[i].p),newTr.append(tdLabel).append(tdPath),tbody.append(newTr)}}else $(".ui-sobjects-no-session").show(),$(".ui-sobjects-links-table").hide();$(".ui-page-loading").hide(),$(".ui-page-content").show()})})}})}),global.true=exports}({},function(){return this}());