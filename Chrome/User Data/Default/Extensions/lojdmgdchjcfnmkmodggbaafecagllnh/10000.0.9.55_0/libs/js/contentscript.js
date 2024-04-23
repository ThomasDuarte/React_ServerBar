/* ORGanizer for Salesforce - v10000.0.9.53 
 * Author: Enrico Murru (https://organizer.solutions/)
 * Copyright 2016-2024
 */
!function(exports,global){require(["jquery","global","constants","popup-utils","quicklink","quicklogin","developer-console","change-set","ui-application","ui-domwidget","grootanizer","checkbox-utils","field-history","formula-editor","organizer-apis","code-coverage","whitelist-all-ips","licensing-utils","jquery-ui"],function(jQuery,$G,$C,PopupUtils,QuickLink,QuickLogin,$SFDevConsole,ChangeSetHelper,$UIApplication,$UIDOMWidget,Grootanizer,CheckboxUtils,FieldHistoryUtils,FormulaEditor,$ExtAPI,$CodeCoverage,$IPWhitelistPlugin,$LicUtils){"use-strict";var document=$G.window.document,window=$G.window,chrome=$G.chrome,IS_IN_CONSOLE=window.location.href.toLowerCase().indexOf(PopupUtils.DevConsolePage.toLowerCase())>0,debug=PopupUtils.newDebugger("ORGanizer: content");debug.log("Initialized, isContent? "+PopupUtils.isRunningContent()),window&&window._gaq&&window._gaq.push(["_trackPageview"]);var sendAnalyticsEvent=function(action,category){PopupUtils.sendAnalyticsEventToBackground(action,category)},_ctrlPressed=!1,_cmdPressed=!1;jQuery(document).ready(function(){function resetFormatting(v){return $("<span/>").html($("<span/>").text(v).html().replace(/\[_b_\]/gi,"<b>").replace(/\[_\/b_\]/gi,"</b>")).html()}PopupUtils.handleCSSImageReferences();var $=jQuery.noConflict(),loadFonts=function(){var bsFont=document.createElement("style");bsFont.type="text/css",bsFont.textContent='@font-face { font-family: Glyphicons Halflings; src: url("'+chrome.runtime.getURL("libs/bootstrap/fonts/glyphicons-halflings-regular.woff")+'"); }',document.head.appendChild(bsFont);var fa=document.createElement("style");fa.type="text/css",fa.textContent='@font-face { font-family: FontAwesome; src: url("'+chrome.runtime.getURL("libs/fontawesome/fonts/fontawesome-webfont.woff")+'"); }',document.head.appendChild(fa)},triggerQuickLink=function(){if(_quickLinks){var onSelectCallback=(PopupUtils.LEX_PATH_PREFIX,function(suggestion,mouseEvt){mouseEvt=mouseEvt||{},debug.log("mouseEvt",mouseEvt),suggestion.isAd?overlayCallback():suggestion.isAccount?PopupUtils.getLocalPassphrase(function(err,pwd){err||PopupUtils.createFormLoginAction(!suggestion.openSameWindow||_ctrlPressed||_cmdPressed||1==mouseEvt.button?"_blank":"_self",suggestion.r,suggestion.u,suggestion.p,suggestion.t,suggestion.lp,suggestion.lt,suggestion.lo,pwd||null,!0)()}):!suggestion.openSameWindow||_ctrlPressed||_cmdPressed||1==mouseEvt.button?IS_LEX&&!suggestion.noHash?window.open(suggestion.plex||suggestion.p,"_blank"):window.open(suggestion.p,"_blank"):IS_LEX&&!suggestion.noHash?window.location=suggestion.plex||suggestion.p:window.location=suggestion.p}),quickLinksOptions={quickLinks:_quickLinks,historyLinks:_historyLinks,objectQuicklinks:_objectQuickLinks,accounts:_accounts,isLex:IS_LEX,oid:_oid,serverName:_serverName,pinConfiguration:null,onSelectCallback:onSelectCallback,sid:_sid,domainAPI:_domainAPI,apiLevel:_apiLevel,darkMode:(_betaFeatures||{}).DARK_MODE,commandChar:_shortcuts.quickLinkCommand||PopupUtils.DefaultShortcuts.quickLinkCommand,actionsLimitHit:_actionsLimitHit};PopupUtils.getLocalPassphrase(function(err,pwd){err&&console.error("Unexpected exception: ",err),PopupUtils.getConfigParameterLocal([PopupUtils.StorageParamNamePin,PopupUtils.StorageParamNameBetaFeatures,PopupUtils.StorageParamNameCurrentQuicklinkCommand,PopupUtils.StorageParamNameCurrentQuicklinkSubCommand],function(err,params){var _pinConfiguration=(params||{})[PopupUtils.StorageParamNamePin],_pluginConfiguration=((params||{})[PopupUtils.StorageParamNameBetaFeatures]||{}).QUICKLINKS_OPTIONS;quickLinksOptions.pluginConfiguration=_pluginConfiguration,pwd&&PopupUtils.pinEnabled(_pinConfiguration)&&PopupUtils.pinExpired(_pinConfiguration)&&(quickLinksOptions.pinConfiguration=_pinConfiguration);var quicklinksFile=IS_LEX?"/resources/setup_lex.json":"/resources/setup_classic.json";$.getJSON(chrome.runtime.getURL(quicklinksFile),function(settings){for(var i=0;i<settings.length;i++)settings[i].p=settings[i].p.replace("{OrgId}",_oid);settings=settings.concat($C.OtherQuickLinks),quickLinksOptions.quickLinks=PopupUtils.mergeAndSortQuickLinks(quickLinksOptions.quickLinks||[],settings||[]),debug.log("quickLinksOptions.quickLinks",quickLinksOptions.quickLinks),quickLinksOptions.myDomain=_myDomain,quickLinksOptions.currentCommand=(params||{})[PopupUtils.StorageParamNameCurrentQuicklinkCommand],quickLinksOptions.currentSubcommand=(params||{})[PopupUtils.StorageParamNameCurrentQuicklinkSubCommand],QuickLink.render(quickLinksOptions),sendAnalyticsEvent($C.Analytics.EVENTS.CONTENT_ACTION.Actions.SHOW_QUICKLINKS.name,$C.Analytics.EVENTS.CONTENT_ACTION.name)})})})}},_bannersPlaced={},createQuickConsole=function(){_devConsole=new $SFDevConsole(_oid,_sid,"https://"+_domainAPI,_domain,resetFormatting(_tabTitle),_tabColor,_shortcuts,_apiLevel,_incognitoSupported,IS_LEX,(_betaFeatures||{}).DARK_MODE,_myDomain);var consoleFooterSponsors=_devConsole.getFooterSponsorContainer(),consoleHeaderSponsors=_devConsole.getHeaderSponsorContainer();_actionsLimitHit&&handleUIFreeze(!0),PopupUtils.getSponsors({location:"console",products:_purchasedProducts},function(err,results){for(var i=0;i<results.length;i++){var el,banner=results[i],bannerId="orgnz-banner-"+banner.index,container=isNaN(parseInt(banner.index))||0!==parseInt(banner.index)?consoleHeaderSponsors:consoleFooterSponsors,bannerFolder=$C.Endpoints.BannersFolder;0===bannerFolder.indexOf("@@")&&(bannerFolder=$C.Endpoints.BannersFolder_DEV),"banner"===banner.type?el=$("<img/>").addClass("ui-popup-banner-image").attr("title",banner.description||banner.tagline).attr("alt",banner.description||banner.tagline).attr("src",bannerFolder+banner.bannerUrl):"text"===banner.type&&(el=$("<div/>").addClass("ui-popup-banner-text").attr("title",banner.description||"").append("<span>"+banner.tagline+"</span>")),el&&(el.attr("data-href",banner.companyUrl).attr("data-banner-id",banner.id).click(function(){sendAnalyticsEvent($(this).attr("data-banner-id"),$C.Analytics.EVENTS.CONTENT_SPONSOR.name),window.open($(this).attr("data-href"))}),container.find("#"+bannerId).empty().append(el),_bannersPlaced[bannerId]=banner.id)}_devConsole.isVisible()&&(_bannersPlaced={})})},triggerQuickConsole=function(){if(_devConsole||createQuickConsole(),!_devConsole.isVisible()){sendAnalyticsEvent($C.Analytics.EVENTS.CONTENT_ACTION.Actions.SHOW_CONSOLE.name,$C.Analytics.EVENTS.CONTENT_ACTION.name);for(var key in _bannersPlaced);_bannersPlaced={}}_devConsole.toggle()},changeTab=function(request){var image=new Image;image.crossOrigin="Anonymous";var color=request.color.replace("#","");image.onload=function(){var iconLink=jQuery('link[rel~="icon"]');0===iconLink.length&&($("head").append($('<link rel="shortcut icon" href="" />')),iconLink=jQuery('link[rel~="icon"]')),iconLink.each(function(){var r=parseInt("0x"+color.substring(0,2)),g=parseInt("0x"+color.substring(2,4)),b=parseInt("0x"+color.substring(4,6));jQuery(this).attr("href",PopupUtils.recolorImage(image,r,g,b)).attr("type","image/png")})},image.src=PopupUtils.IconBase64},overlayCallback=function(){$LicUtils.getOverlayAction()},handleUIFreeze=function(actionsLimitHit){if(_actionsLimitHit=actionsLimitHit,_devConsole.hideOverlay(),actionsLimitHit){var overlayContentDiv=_devConsole.showOverlay(),overlayEl=$LicUtils.createOverlayContent(overlayCallback);overlayContentDiv.append(overlayEl)}};loadFonts();var _oldTitle=null,_oid=null,_myDomain=null,_serverName=null,_originalIconSrc=null,_links=null,_shortcuts=null,_historyLinks=null,_quickLinks=(PopupUtils.isOSX(),null),_accounts=null,_sid=null,_domain=null,_domainAPI=null,_devConsole=null,_tabColor=null,_tabTitle=null,_betaFeatures=null,IS_LEX=PopupUtils.isLEX(),_magicButton=null,_apiLevel=null,_incognitoSupported=!1,_purchasedProducts=null,_formulaApplied=!1,checkPluginsShortCut=function(e,checkActions){if(!(checkActions||_shortcuts.scPlugins&&_shortcuts.scPlugins.length))return null;if(checkActions&&(!_shortcuts.scPluginsAction||!_shortcuts.scPluginsAction.length))return null;for(var arr=checkActions?_shortcuts.scPluginsAction:_shortcuts.scPlugins,i=0;i<arr.length;i++){var sc=arr[i];if(!(checkActions&&sc.actite||!!sc.alt!=!!e.altKey||!!sc.ctrl!=!!e.ctrlKey||!!sc.cmd!=!!e.metaKey||!!sc.shift!=!!e.shiftKey||sc.key!==e.keyCode))return i+1}return null},checkShortcuts=function(e){if(_ctrlPressed=e.ctrlKey,_cmdPressed=e.metaKey,!IS_IN_CONSOLE&&_shortcuts&&_links&&_sid){e.ctrlKey&&e.metaKey&&e.altKey&&e.shiftKey&&71===e.keyCode;var pluginsIndex=checkPluginsShortCut(e,!1),pluginsActionIndex=checkPluginsShortCut(e,!0);if(!!_shortcuts.sc4.alt==!!e.altKey&&!!_shortcuts.sc4.ctrl==!!e.ctrlKey&&!!_shortcuts.sc4.cmd==!!e.metaKey&&!!_shortcuts.sc4.shift==!!e.shiftKey&&_shortcuts.sc4.key===e.keyCode){if(!_links.home)return;e.preventDefault&&"function"==typeof e.preventDefault&&e.preventDefault(),sendAnalyticsEvent($C.Analytics.EVENTS.CONTENT_ACTION.Actions.HOME_SHORTCUT.name,$C.Analytics.EVENTS.CONTENT_ACTION.name),window.open(_links.home,"_blank")}else if(!!_shortcuts.sc6.alt==!!e.altKey&&!!_shortcuts.sc6.ctrl==!!e.ctrlKey&&!!_shortcuts.sc6.cmd==!!e.metaKey&&!!_shortcuts.sc6.shift==!!e.shiftKey&&_shortcuts.sc6.key===e.keyCode){if(!_links.devConsole)return;e.preventDefault&&"function"==typeof e.preventDefault&&e.preventDefault(),sendAnalyticsEvent($C.Analytics.EVENTS.CONTENT_ACTION.Actions.DEVCONSOLE_SHORTCUT.name,$C.Analytics.EVENTS.CONTENT_ACTION.name),window.open(_links.devConsole,"_blank")}else if(!!_shortcuts.sc5.alt==!!e.altKey&&!!_shortcuts.sc5.ctrl==!!e.ctrlKey&&!!_shortcuts.sc5.cmd==!!e.metaKey&&!!_shortcuts.sc5.shift==!!e.shiftKey&&_shortcuts.sc5.key===e.keyCode){if(!_links.setup)return;e.preventDefault&&"function"==typeof e.preventDefault&&e.preventDefault(),sendAnalyticsEvent($C.Analytics.EVENTS.CONTENT_ACTION.Actions.SETUP_SHORTCUT.name,$C.Analytics.EVENTS.CONTENT_ACTION.name),window.open(_links.setup,"_blank")}else if(!!_shortcuts.sc7.alt==!!e.altKey&&!!_shortcuts.sc7.ctrl==!!e.ctrlKey&&!!_shortcuts.sc7.cmd==!!e.metaKey&&!!_shortcuts.sc7.shift==!!e.shiftKey&&_shortcuts.sc7.key===e.keyCode){if(!_quickLinks)return;e.preventDefault&&"function"==typeof e.preventDefault&&e.preventDefault(),triggerQuickLink()}else if(_shortcuts.sc8&&!!_shortcuts.sc8.alt==!!e.altKey&&!!_shortcuts.sc8.ctrl==!!e.ctrlKey&&!!_shortcuts.sc8.cmd==!!e.metaKey&&!!_shortcuts.sc8.shift==!!e.shiftKey&&_shortcuts.sc8.key===e.keyCode){if(_betaFeatures&&!_betaFeatures.QUICK_CONSOLE)return;e.preventDefault&&"function"==typeof e.preventDefault&&e.preventDefault(),triggerQuickConsole()}else if(pluginsIndex||pluginsActionIndex){if(_betaFeatures&&!_betaFeatures.QUICK_CONSOLE)return;var keyCode=pluginsIndex||pluginsActionIndex;_devConsole?_devConsole.moveToBottom():createQuickConsole(),e.preventDefault&&"function"==typeof e.preventDefault&&e.preventDefault(),pluginsActionIndex?_devConsole.triggerTabAction(keyCode):_devConsole.isVisible()?_devConsole.openTab(keyCode):(triggerQuickConsole(),setTimeout(function(){_devConsole.openTab(keyCode)},500))}}},enableQuicklogin=function(){PopupUtils.getLocalPassphrase(function(err,pwd){PopupUtils.getConfigParameterLocal(PopupUtils.StorageParamNameAccounts,function(err,params){var accounts=params[PopupUtils.StorageParamNameAccounts]||[];PopupUtils.getConfigParameterLocal(PopupUtils.StorageParamNamePin,function(err,params){function doLogin(){_releaseLoginSubmission=!0,_loginBtn.click()}var _pinConfiguration=(params||{})[PopupUtils.StorageParamNamePin],options={accounts:accounts,pinConfiguration:null,onSelectCallback:function(suggestion,component){var logPwd=suggestion.p;if(pwd)logPwd=PopupUtils.decryptText(suggestion.p,pwd);else{var tmp=suggestion.p;logPwd=PopupUtils.deobfuscate(suggestion.p),logPwd||(logPwd=tmp)}component.typeahead("val",suggestion.u),logPwd?($('input.password[name="pw"]#password').val(logPwd),$("input#Login").focus()[0].click()):$('input.password[name="pw"]#password').focus()}};pwd&&PopupUtils.pinEnabled(_pinConfiguration)&&PopupUtils.pinExpired(_pinConfiguration)&&(options.pinConfiguration=_pinConfiguration);var _loginBtn,_releaseLoginSubmission=!1;_loginBtn=$("input#Login").click(function(evt){if(_releaseLoginSubmission)return!0;var found=!1,currentUsername=$('input.username[name="username"]#username').val()||"",currentPassword=$('input.password[name="pw"]#password').val();if(!currentPassword||!currentUsername)return!0;if($.each(accounts||[],function(i,acc){if(currentUsername.toLowerCase()==(acc.u||"").toLowerCase())return found=!0,doLogin(),!1}),!found){var newAccount={r:"https://"+window.location.hostname,u:currentUsername,n:currentUsername,p:currentPassword,g:"Default",s:!1,lt:!1,lo:!1,lp:0,t:null};PopupUtils.getConfigParameterLocal([PopupUtils.StorageParamNameAccounts],function(err,params){if(err)return PopupUtils.logError(err),alert("ORGanizer unexpected error: "+err),doLogin();var _accounts=(params||{})[PopupUtils.StorageParamNameAccounts]||[];return _pinConfiguration&&PopupUtils.pinEnabled(_pinConfiguration)&&PopupUtils.pinExpired(_pinConfiguration)?void PopupUtils.openConfirmModal("ORGanizer",chrome.i18n.getMessage("content_quicklink_pin_expired")+": "+chrome.i18n.getMessage("content_quicklink_pin_expired_message")+'<br/> Cannot save login info. <br/><strong>Do you want to login in ayway?</strong><br/><small class="text-muted">Jump to option page to disable this feature.</small>',_loginBtn.position().left,_loginBtn.position().top,function(rslt){rslt&&doLogin()}):void PopupUtils.openConfirmModal("ORGanizer",'Do you want to save this login info?<br/><small class="text-muted">Jump to option page to disable this feature.</small>',_loginBtn.position().left,_loginBtn.position().top,function(rslt){return rslt?(pwd?newAccount.p=PopupUtils.encryptText(newAccount.p,pwd):newAccount.p=PopupUtils.obfuscate(newAccount.p),_accounts.push(newAccount),void PopupUtils.checkLocalQuota(_accounts,function(err){return err?(PopupUtils.logError(err),alert("ORGanizer unexpected error: "+err),doLogin()):void PopupUtils.setConfigParameterLocal(PopupUtils.StorageParamNameAccounts,_accounts,function(err){return err?(PopupUtils.logError(err),alert("ORGanizer unexpected error: "+err),doLogin()):void PopupUtils.syncData({noQuotaCheck:!0},function(err){return err?(PopupUtils.logError(err),alert("ORGanizer unexpected error: "+err),doLogin()):doLogin()})})})):doLogin()})})}return!1}),QuickLogin.render(options)})})})};$('form[name="login"]').length&&$('input[type="email"].username[name="username"]#username').length&&$('input[type="password"].password[name="pw"]#password').length&&$('input[type="submit"]#Login').length&&PopupUtils.getConfigParameterLocal(PopupUtils.StorageParamNameBetaFeatures,function(err,params){var options=(params||{})[PopupUtils.StorageParamNameBetaFeatures]||null;options&&!options.QUICKLOGIN||enableQuicklogin()});var _devConsoleMoved=!1,_getOrgParamsMessage=null;chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){if("CNT-ACTIONS-LIMIT-CHANGE"===request.action&&!IS_IN_CONSOLE)return debug.log("Limit Hit! "+request.actionsLimitHit),handleUIFreeze(request.actionsLimitHit),sendResponse&&sendResponse();if("CNT-KEYDOWN"===request.action&&!IS_IN_CONSOLE)return checkShortcuts(request.evt);if("CNT-SCRIPT-LOADED"===request.action)return sendResponse({confirm:!0});if("GET-ORG-PARAMS-FOR-IFRAME"===request.action)return sendResponse&&sendResponse(_getOrgParamsMessage);if("CNT-SET-ORG-PARAMS"===request.action){if(_oid||"BKG"!==request.from||(_oid=request.oid,_serverName=request.domain.split(".")[0],_myDomain=request.myDomain),debug.log("Received org: ",_oid,_myDomain,_serverName,request),!_oid)return;if(_oid!==request.oid)return;if(!_originalIconSrc){var linkIcon=document.querySelector("link[rel~='icon']");linkIcon&&(_originalIconSrc=linkIcon.getAttribute("href"))}if(_oldTitle&&(document.title=document.title.replace("["+_oldTitle+"] ","")),request.title){_oldTitle=request.title,document.title="["+request.title+"] "+document.title;var color=(request.color||"").replace("#","");color||(color="black"),color="#"+color;var globalActionsUL=$("ul.slds-global-actions");if(globalActionsUL.length){globalActionsUL.find("li.orgz-global-actions-org-title").length&&globalActionsUL.find("li.orgz-global-actions-org-title").remove();var ltnxTitle=$("<li/>").addClass("orgz-global-actions-org-title").css({color:color}).attr("title","ORGanizer for Salesforce ©"+(new Date).getFullYear()).text(request.title);$("ul.slds-global-actions").prepend(ltnxTitle)}if(globalActionsUL=$("div.navLinks .linkElements"),globalActionsUL.length){globalActionsUL.find("div.orgz-global-actions-org-title").length&&globalActionsUL.find("div.orgz-global-actions-org-title").remove();var ltnxTitle=$("<div/>").addClass("orgz-global-actions-org-title").css({color:color}).attr("title","ORGanizer for Salesforce ©"+(new Date).getFullYear()).text(request.title);$("div.navLinks .linkElements").prepend(ltnxTitle)}}if(request.color)$("#oneHeader").css({"border-top":"4px solid #"+request.color.replace("#",""),"padding-bottom":"4px"}),$("body").css({"border-top":"4px solid #"+request.color.replace("#","")}),changeTab(request);else{0===$('link[rel~="icon"]').length&&$("head").append($('<link rel="shortcut icon" href="" />'));var oldLink=document.querySelector("link[rel~='icon']");oldLink.setAttribute("href",_originalIconSrc),_originalIconSrc||oldLink.setAttribute("href",PopupUtils.IconBase64)}if(!request.sid)return sendResponse&&sendResponse();_getOrgParamsMessage=request,_sid=request.sid,_links=request.links,_historyLinks=request.historyLinks,_shortcuts=request.shortcuts,_quickLinks=request.quickLinks||[],_objectQuickLinks=request.objectQuicklinks||[],_accounts=request.accounts,_domain=request.domain,_domainAPI=request.domainAPI,_tabColor=request.color,_tabTitle=resetFormatting(request.title),_betaFeatures=request.betaFeatures,_apiLevel=request.apiLevel,_incognitoSupported=request.incognitoSupported,_purchasedProducts=request.products,_actionsLimitHit=request.actionsLimitHit,_formulaApplied||_betaFeatures&&!_betaFeatures.FORMULA_EDITOR||(_formulaApplied=!0,setTimeout(function(){FormulaEditor.apply(_betaFeatures.FORMULA_EDITOR_OPTIONS)},500)),!IS_LEX&&_betaFeatures.CHANGESET_HELPER&&(_betaFeatures.CHANGESET_HELPER!==!0&&"V1"!==_betaFeatures.CHANGESET_HELPER||ChangeSetHelper.isAllowed(IS_LEX)&&ChangeSetHelper.render(_sid,_oid,_domainAPI,IS_LEX,_apiLevel,function(){}));var _magibButtonVisible=!1;if(!IS_IN_CONSOLE&&(!_betaFeatures||_betaFeatures.MAGIC_BUTTON))if(_magicButton)_devConsole&&!_devConsoleMoved&&(_devConsole.moveToBottom(),_devConsoleMoved=!0);else{var btnOrientation=_betaFeatures.MAGIC_BUTTON_OPTIONS&&_betaFeatures.MAGIC_BUTTON_OPTIONS.orientation;_magicButton=PopupUtils.createMagicButton(btnOrientation,IS_LEX,_betaFeatures.DARK_MODE);var position=_betaFeatures.MAGIC_BUTTON_OPTIONS&&_betaFeatures.MAGIC_BUTTON_OPTIONS.position||"0",dismissMagicButton=function(){_magicButton.find(".ui-magic-button-click-target").click()};_magicButton.find(".ui-magic-button-quicklink-link").attr("title",PopupUtils.shortcutToString(_shortcuts.sc7,!0)).click(function(){triggerQuickLink(),dismissMagicButton()}),_magicButton.find(".ui-magic-button-profiles-manager-link").click(function(){var url=chrome.runtime.getURL("profiles.html")+"?oid="+encodeURIComponent(_oid);window.open(url),sendAnalyticsEvent($C.Analytics.EVENTS.CONTENT_ACTION.Actions.SHOW_PROFILE_CHAMBER.name,$C.Analytics.EVENTS.CONTENT_ACTION.name),dismissMagicButton()}),_magicButton.find(".ui-magic-button-quickconsole-link").attr("title",PopupUtils.shortcutToString(_shortcuts.sc8,!0)).click(function(){triggerQuickConsole(),dismissMagicButton()}),_magicButton.find(".ui-magic-button-options-link").click(function(){window.open(chrome.runtime.getURL("options.html")),dismissMagicButton()}),_magicButton.find(".ui-magic-button-options-hide").click(function(){_magicButton.remove()}),_devConsole?_devConsole.moveToBottom():createQuickConsole();for(var ti in _devConsole.getTabs()){var tab=_devConsole.getTabs()[ti],link=$('<div class="ui-magic-button-link ui-magic-button-quickconsole-plugin-link"></div>');_magicButton.find(".ui-magic-button-quickconsole-links").append(link),link.html(tab.title).attr("data-tab-index",tab.key);var shortCut=_shortcuts.scPlugins[ti],actionShortCut=_shortcuts.scPluginsAction[ti];link.attr("title","Show/Hide: ["+PopupUtils.shortcutToString(shortCut)+"] "+(tab.hasMainAction?"\nAction: ["+PopupUtils.shortcutToString(actionShortCut)+"]":"")),link.click(function(){var tabIndex=$(this).attr("data-tab-index");_devConsole.isVisible()?_devConsole.openTab(tabIndex):(_devConsole.toggle(),setTimeout(function(){_devConsole.openTab(tabIndex)},200)),dismissMagicButton()})}var _selectedSponsor=null;PopupUtils.getSponsors({location:"button",products:_purchasedProducts},function(err,results){if(err&&(debug.log("Sponsors",err,results),results=[]),_magicButton.find(".ui-magic-button-sponsors").hide(),results&&results.length){var bannerFolder=$C.Endpoints.BannersFolder;0===bannerFolder.indexOf("@@")&&(bannerFolder=$C.Endpoints.BannersFolder_DEV);var el,banner=results[0];"banner"===banner.type?el=$("<img/>").addClass("ui-popup-banner-image").attr("title",banner.description||banner.tagline).attr("alt",banner.description||banner.tagline).attr("src",bannerFolder+banner.bannerUrl):"text"===banner.type&&(el=$("<div/>").addClass("ui-popup-banner-text").attr("title",banner.description||"").append("<span>"+banner.tagline+"</span>")),el?(_magicButton.find(".ui-magic-button-sponsors").show().empty().append(el).attr("title",results[0].description||"").attr("data-href",results[0].companyUrl).attr("data-banner-id",results[0].id).click(function(){sendAnalyticsEvent($(this).attr("data-banner-id"),$C.Analytics.EVENTS.CONTENT_SPONSOR.name),window.open($(this).attr("data-href"))}),_selectedSponsor=banner):_magicButton.find(".ui-magic-button-sponsors").hide()}}),$("body").append(_magicButton),_magicButton.find(".ui-magic-button-click-target").on("click",function(evt){if("vertical"!=btnOrientation){var btnLinkContainer=_magicButton.find(".ui-magic-button-links-container"),heightDiff=IS_LEX?370:330;btnLinkContainer.height()<heightDiff?(_magibButtonVisible=!0,sendAnalyticsEvent($C.Analytics.EVENTS.CONTENT_ACTION.Actions.SHOW_ORG_BUTTON_MENU.name,$C.Analytics.EVENTS.CONTENT_ACTION.name),_selectedSponsor&&(_selectedSponsor=null),btnLinkContainer.animate({height:heightDiff},250)):(_magibButtonVisible=!1,btnLinkContainer.animate({height:0},250))}else{var btnRoot=_magicButton;btnRoot.hasClass("mb-shown")?(_magibButtonVisible=!1,btnRoot.removeClass("mb-shown",250)):(_magibButtonVisible=!0,sendAnalyticsEvent($C.Analytics.EVENTS.CONTENT_ACTION.Actions.SHOW_ORG_BUTTON_MENU.name,$C.Analytics.EVENTS.CONTENT_ACTION.name),_selectedSponsor&&(_selectedSponsor=null),btnRoot.addClass("mb-shown",250))}});var setButtonPosition=function(){var container=_magicButton.find(".ui-magic-button-links-container");if("vertical"===btnOrientation){var pos=parseInt($(window).height()/100*parseFloat(position))-container.height();pos+container.height()>=$(window).height()&&(pos=$(window).height()-container.height()-30),pos<0&&(pos=0),_magicButton.css({top:pos+"px"})}else{var pos=parseInt($(window).width()/100*parseFloat(position))-container.width();pos+container.width()>=$(window).width()&&(pos=$(window).width()-container.width()-30),pos<0&&(pos=0),_magicButton.css({left:pos+"px"})}};$(window).resize(function(){setButtonPosition()}),setButtonPosition()}return CheckboxUtils.render(),_betaFeatures&&_betaFeatures.FIELD_HISTORY===!1||FieldHistoryUtils.render(IS_LEX,_domainAPI,_sid,_apiLevel),$CodeCoverage.init(IS_LEX,_domainAPI,_sid,_apiLevel),$IPWhitelistPlugin.render(_sid),sendResponse&&sendResponse()}});var _intervalCounterLimit=0,_mainBackgroundInterval=setInterval(function(){if(!_getOrgParamsMessage){var promise=chrome.runtime.sendMessage({action:"BKG-GET-ORG-PARAMS",isLex:IS_LEX});promise.then(function(){debug.log("sent BKG-GET-ORG-PARAMS ("+_intervalCounterLimit+")"),_intervalCounterLimit++,_intervalCounterLimit>=2&&clearInterval(_mainBackgroundInterval)})}},$C.ContentScriptOrgParamsRefresh);setTimeout(function(){var promise=chrome.runtime.sendMessage({action:"BKG-GET-ORG-PARAMS",isLex:IS_LEX});promise.then(function(){debug.log("sent BKG-GET-ORG-PARAMS (FIRST LOAD)")})},1e3),setInterval(function(){_oldTitle&&(document.title=document.title.replace("["+_oldTitle+"] ","")),_tabTitle&&(document.title="["+_tabTitle+"] "+document.title)},2e3),$(window).on("keydown",function(e){if(!IS_IN_CONSOLE)return checkShortcuts(e)})}),IS_IN_CONSOLE||$ExtAPI.initContentListener()}),global.true=exports}({},function(){return this}());