/* ORGanizer for Salesforce - v10000.0.9.53 
 * Author: Enrico Murru (https://organizer.solutions/)
 * Copyright 2016-2024
 */
!function(exports,global){define("constants",["global"],function($G){"use sctrict";var chrome=$G.chrome,consts={Chrome_Prod_Id:"lojdmgdchjcfnmkmodggbaafecagllnh",Debug:{Active:!1},Analytics:{AccountId:"UA-57169562-5",EVENTS:{CONTENT_ACTION:{name:"Content Action",Actions:{SHOW_CONSOLE:{name:"show-console",trackActions:!1},SHOW_QUICKLINKS:{name:"show-quicklinks",trackActions:!0},SHOW_GROOTANIZER:{name:"show-grootanier",trackActions:!1},HOME_SHORTCUT:{name:"home-shortcut",trackActions:!1},DEVCONSOLE_SHORTCUT:{name:"devconsole-shortcut",trackActions:!1},SETUP_SHORTCUT:{name:"setup-shortcut",trackActions:!1},SHOW_PROFILE_CHAMBER:{name:"show-profile-chamber",trackActions:!0},SHOW_ORG_BUTTON_MENU:{name:"show-org-button-menu",trackActions:!1},OPEN_CHANGESET_HELPER:{name:"open-changeset-helper",trackActions:!1},SHOW_COVERAGE:{name:"show-coverage",trackActions:!0}}},POPUP_ACTION:{name:"Popup Action",Actions:{ACTION_FAVORITE:{name:"action-favorite",trackActions:!1},ACTION_TAB:{name:"action-tab",trackActions:!0},ACTION_DEVCONSOLE:{name:"action-devconsole",trackActions:!0},ACTION_WINDOW:{name:"action-window",trackActions:!0},ACTION_INCOGNITO:{name:"action-incognito",trackActions:!0},ACTION_PASSWORD:{name:"action-password",trackActions:!0},ORGANIZER_SETTING_ICON:{name:"ogzr-setting-icon",trackActions:!1},MESSAGE_TAB_HEADER:{name:"#messagesTabHeader",trackActions:!1},FILTER_FAVORITE_BTN:{name:"#filterFavoriteBtn",trackActions:!1},NEW_ACCOUNT_BTN:{name:"#newAccountBtn",trackActions:!0}}},CONTENT_SPONSOR:{name:"Content Sponsor",Actions:{}},POPUP_SPONSOR:{name:"Popup Sponsor",Actions:{DONATE_LINK:{name:"donate-link",trackActions:!1},SUBSCRIBE_LINK:{name:"subscribe-link",trackActions:!1},SPONSORSHIP_TEXT:{name:"SPONSORSHIP-TEXT",trackActions:!1},GORPO_TEST:{name:"GOPRO-TEXT",trackActions:!1}}},QUICKCONSOLE_ACTION:{name:"Quickconsole Action",Actions:{TAB_QUICK_QUERY:{name:"tab-quick-query-execute",trackActions:!0},TAB_EXECUTE_ANON:{name:"tab-execute-anonymous-execute",trackActions:!0},TAB_EXECUTE_DESCRIBE:{name:"tab-execute-describe",trackActions:!0},TAB_GET_USER_INFO:{name:"tab-get-user-info",trackActions:!0},TAB_GET_ORG_INFO:{name:"tab-get-org-info",trackActions:!0},TAB_GET_ORG_LIMITS:{name:"tab-get-org-limits",trackActions:!0},TAB_GET_ORG_COVERAGE:{name:"tab-get-org-coverage",trackActions:!0},TAB_GET_SOBJECT_FIELDS:{name:"tab-get-sobject-fields",trackActions:!0},TAB_LOGIN_AS_SEARCH:{name:"tab-login-as-search",trackActions:!0}}},BACKGROUND_ACTION:{name:"Background Action",Actions:{ACTIONS_LIMIT_HIT:{name:"ACTIONS_LIMIT_HIT",trackActions:!1}}}}},ActionsThold:{Console:parseInt("25")||20,Popup:parseInt("10")||10},Limits:{Beta:{MAX_SF_ACCOUNTS:parseInt("20")||20,MAX_SF_SINCHED_ACCOUNTS:parseInt("5")||15,ENABLE_ACTIONS_LIMIT_FREEZE:!1,DRIVE_SYNC:!1,BACKUP_CONNECTOR:!1},Trial:{MAX_SF_ACCOUNTS:parseInt("20")||20,MAX_SF_SINCHED_ACCOUNTS:parseInt("5")||15,ENABLE_ACTIONS_LIMIT_FREEZE:!1,GDRIVE_SYNC:!1,BACKUP_CONNECTOR:!1},Lite:{MAX_SF_ACCOUNTS:parseInt("100")||50,MAX_SF_SINCHED_ACCOUNTS:parseInt("50")||25,ENABLE_ACTIONS_LIMIT_FREEZE:!1,GDRIVE_SYNC:!0,BACKUP_CONNECTOR:!1},Full:{MAX_SF_ACCOUNTS:parseInt("2000")||2e3,MAX_SF_SINCHED_ACCOUNTS:parseInt("1000")||1e3,ENABLE_ACTIONS_LIMIT_FREEZE:!1,GDRIVE_SYNC:!0,BACKUP_CONNECTOR:!0}},PurchasedProducts_Refresh:864e5,Sponsors_Refresh:864e5,News_Refresh:864e5,ActionsCounterTimeThreashold:432e6,BackgroundBackupSyncPeriod:7,BackgroundLicenseCheckSyncPeriod:13,DescribeSessionCachingLimit:18e5,ContentScriptOrgParamsRefresh:1e4,InAppPurchases:{NO_AD_PRODUCT_CODE:"organizer_no_ad_",LITE_PRODUCT_CODE:"organizer_lite_"},PromoCodes:{CUSTOM_REGEX:/[a-zA-Z0-9]{8}\-[a-zA-Z0-9]{4}\-[a-zA-Z0-9]{4}\-[a-zA-Z0-9]{4}\-[a-zA-Z0-9]{12}/,GUMROAD_REGEX:/[A-Z0-9]{8}\-[A-Z0-9]{8}\-[A-Z0-9]{8}\-[A-Z0-9]{8}/,CUSTOM_PROMO_TYPE:"Custom promo code",GUMROAD_PROMO_TYPE:"Gumroad license",EMAIL_REGEX:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/},OAuthSettings:{ClientId:"479769510625-sjthuj7s6gorbhk74oqv0f012kdal426.apps.googleusercontent.com",ClientId_DEV:"713742253570-s1bmob1o18hjt8v7jsagtqflricrk16s.apps.googleusercontent.com",Scopes:["https://www.googleapis.com/auth/userinfo.profile","https://www.googleapis.com/auth/userinfo.email","https://www.googleapis.com/auth/drive.appdata","https://www.googleapis.com/auth/drive.file"]},Endpoints:{GoogleOAuthUrl:"https://accounts.google.com/o/oauth2/v2/auth",GoogleProfileUrl:"https://www.googleapis.com/oauth2/v3/userinfo?access_token=",GoogleRevokeTokenUrl:"https://oauth2.googleapis.com/revoke?token=",GoogleDriveListFilesUrl:"https://www.googleapis.com/drive/v3/files",GoogleDriveUploadFileUrl:"https://www.googleapis.com/upload/drive/v3/files",OAuthTokenUrl:"https://api.organizer.solutions/api/public/v1/oauth/token",OAuthTokenUrl_DEV:"https://api-dev.organizer.solutions/api/public/v1/oauth/token",BackupApp:{EchoUrl:"/services/apexrest/orgnz_backupper/api/v1.0/backup-management/echo",GetBackupsUrl:"/services/apexrest/orgnz_backupper/api/v1.0/backup-management/backups"},News_Dev:"https://dev-site.organizer.solutions/news/news.json",News:"https://organizer.solutions/news/news.json",ChangeLog:"https://organizer.solutions/changelog.html",FAQPage:"https://organizer.solutions/faq.html",Donate:"https://organizer.solutions/donate.html",Subscribe:"http://organizer.solutions/subscribe.html",GoPro:"https://organizer.solutions/gopro.html",Sponsors:"https://organizer.solutions/s/main.json",ActionsLimitLandingPage:"https://organizer.solutions/landingads.html",Sponsors_DEV:"https://dev-site.organizer.solutions/s/main.json",BannersFolder:"https://cdn.organizer.solutions/organizer-solutions/s/b/",BannersFolder_DEV:"https://cdn.organizer.solutions/organizer-solutions/s/b/",SponsorshipProgramLink:"https://organizer.solutions/sponsorship.html?campaign=organizer",PromoCodeValidationEndpoint:"https://api.organizer.solutions/api/public/v1/promo",PromoCodeValidationEndpoint_DEV:"https://api-dev.organizer.solutions/api/public/v1/promo"},SF_API:{LEVEL:"50.0",CONSUMER_KEY_DEV:"3MVG9HxRZv05HarQvJJgVEWTLFR0sG2YydtV6PoeY3fYWDzZalDME6GxlQ1V4xi0IgHxBVT3sV3tmTVgZ0ry5",CONSUMER_KEY:"3MVG9HxRZv05HarQvJJgVEWTLFbluP5p_vW1ZCgVppz7b71arjXKJ_CZpaRn8pf6W.NkvoNoXvyqHP_fZgrNA"},Plugins:{$SFORG_PLUGIN_00000:"000-00000",$SFORG_PLUGIN_00001:"000-00001",$SFORG_PLUGIN_00002:"000-00002",$SFORG_PLUGIN_00003:"000-00003",$SFORG_PLUGIN_00004:"000-00004",$SFORG_PLUGIN_00005:"000-00005",$SFORG_PLUGIN_00006:"000-00006",$SFORG_PLUGIN_CHANGE_SET:"000-0000CS",$SFORG_PLUGIN_00007:"000-00007",$SFORG_PLUGIN_00008:"000-00008",$SFORG_PLUGIN_PROFILE_CHAMBER:"000-0000PC"},QuickLinksSetup:[],OtherQuickLinks:[{n:"Aura Documentation",l:"Aura Documentation",p:"/auradocs"},{n:"Component Library",l:"Component Library",p:"/docs/component-library"},{n:"Dev Hub",l:"Dev Hub",p:"/lightning/setup/DevHub/home","no-classic":!0},{n:"Dev Hub",l:"Dev Hub",p:"/ui/setup/sfdx/SomaSetupPage","no-lex":!0},{n:"Company Settings > Manage Currencies",l:"Company Settings > Manage Currencies","no-classic":!0,p:"/lightning/setup/CompanyCurrency/home"}],QuickLinks:[],ObjectQuickLinks:[{label:"{NamespacePrefix} {Label}",onlyCustom:!0,noLex:!0,url:"/{DurableId}"},{label:"{NamespacePrefix} {Label}",onlyLex:!0,urlLex:"/lightning/setup/ObjectManager/{DurableId}/Details/view"},{label:"{NamespacePrefix} {Label}: Fields",url:"/p/setup/layout/LayoutFieldList?type={DurableId}",urlLex:"/lightning/setup/ObjectManager/{DurableId}/FieldsAndRelationships/view"},{label:"{NamespacePrefix} {Label}: Related Lookup Filters",url:"/_ui/common/config/entity/RelatedLookupFiltersListUI/d?tableEnumOrId={DurableId}",urlLex:"/lightning/setup/ObjectManager/{DurableId}/RelatedLookupFilters/view"},{label:"{NamespacePrefix} {Label}: Validation Rules",url:"/_ui/common/config/entity/ValidationFormulaListUI/d?tableEnumOrId={DurableId}",urlLex:"/lightning/setup/ObjectManager/{DurableId}/ValidationRules/view"},{label:"{NamespacePrefix} {Label}: Triggers",url:"/p/setup/layout/ApexTriggerList?type={DurableId}",urlLex:"/lightning/setup/ObjectManager/{DurableId}/ApexTriggers/view"},{label:"{NamespacePrefix} {Label}: Search Layouts",url:"/ui/setup/layout/ListLayouts?type={DurableId}&setupid=CaseSearchLayouts",urlLex:"/lightning/setup/ObjectManager/{DurableId}/SearchLayouts/view"},{label:"{NamespacePrefix} {Label}: Page Layouts",url:"/ui/setup/layout/PageLayouts?type={DurableId}",urlLex:"/lightning/setup/ObjectManager/{DurableId}/PageLayouts/view"},{label:"{NamespacePrefix} {Label}: Lightning Record Pages",onlyLex:!0,urlLex:"/lightning/setup/ObjectManager/{DurableId}/LightningPages/view"},{label:"{NamespacePrefix} {Label}: Field Sets",url:"/_ui/common/config/entity/FieldSetListUI/d?tableEnumOrId={DurableId}",noLex:!0},{label:"{NamespacePrefix} {Label}: Compact Layouts",url:"/_ui/common/config/compactlayout/CompactLayoutListUi/d?type={DurableId}",urlLex:"/lightning/setup/ObjectManager/{DurableId}/CompactLayouts/view"},{label:"{NamespacePrefix} {Label}: Buttons, Links, and Actions",onlyStandard:!0,url:"/p/setup/link/ActionButtonLinkList?pageName={QualifiedApiName}&type={DurableId}",urlLex:"/lightning/setup/ObjectManager/{DurableId}/ButtonsLinksActions/view"},{label:"{NamespacePrefix} {Label}: Record Types",url:"/ui/setup/rectype/RecordTypes?type={DurableId}",urlLex:"/lightning/setup/ObjectManager/{DurableId}/RecordTypes/view"},{label:"{NamespacePrefix} {Label}: Limits",url:"/p/setup/custent/EntityLimits?type={DurableId}",urlLex:"/lightning/setup/object/{DurableId}/Limits/view"},{label:"New {Label} {NamespacePrefix}",onlyCreatable:!0,url:"/{KeyPrefix}/e",noLex:!0},{label:"List {Label} {NamespacePrefix}",url:"/{KeyPrefix}/o",urlLex:"/lightning/o/{QualifiedApiName}/list"}],ChangeSetQueryCriteria:[{name:"QuickActionDefinition",label:"Action",method:"Tooling",with:"DeveloperName",query:"Select Id,DeveloperName,SobjectType,LastModifiedDate,LastModifiedBy.Name From QuickActionDefinition",outputFields:"DeveloperName,SobjectType,LastModifiedDate,LastModifiedBy.Name"},{name:"ActionLinkGroupTemplate",label:"Action Link Group Template",method:"Metadata",outputFields:"name,lastModifiedByName,lastModifiedDate"},{name:"ApexClass",label:"Apex Class",method:"Metadata",outputFields:"fullName,lastModifiedByName,lastModifiedDate"},{name:"CustomShareRowCause",label:"Apex Sharing Reason",method:"Metadata",api:"SharingReason",outputFields:"Name,Parent,lastModifiedByName,lastModifiedDate",splitParentField:"fullName"},{name:"ApexTrigger",label:"Apex Trigger",method:"Metadata",outputFields:"fullName,lastModifiedByName,lastModifiedDate"},{name:"TabSet",label:"App",method:"Metadata",api:"CustomApplication",outputFields:"fullName,lastModifiedByName,lastModifiedDate"},{name:"ProcessDefinition",label:"Approval Process",method:"Metadata",api:"ApprovalProcess",splitParentField:"fullName",outputFields:"Name,Parent,lastModifiedByName,lastModifiedDate"},{name:"ContentAsset",label:"Asset File",method:"Metadata",outputFields:"fullName,fileName,lastModifiedByName,lastModifiedDate"},{name:"AssignmentRule",label:"Assignment Rule",method:"Tooling",with:"Name",outputFields:"Name,LastModifiedDate,LastModifiedBy.Name",ignoreNS:!0},{name:"AuthProvider",label:"Auth. Provider",method:"Metadata",outputFields:"DeveloperName,lastModifiedByName,lastModifiedDate"},{name:"AutoResponseRule",label:"Auto-Response Rule",method:"Tooling",with:"Name",query:"Select Id,Name,EntityDefinitionId,LastModifiedDate,LastModifiedBy.Name From AutoResponseRule",outputFields:"Name,Parent,ParentApiName,LastModifiedDate,LastModifiedBy.Name",ignoreNS:!0},{name:"WebLink",label:"Button or Link",method:"Tooling",with:"MasterLabel",query:"Select Id,MasterLabel,EntityDefinitionId,LastModifiedDate,LastModifiedBy.Name From WebLink",outputFields:"MasterLabel,Parent,ParentApiName,LastModifiedDate,LastModifiedBy.Name"},{name:"CorsWhitelistEntry",label:"CORS Whitelist Origin",method:"SOQL",with:"DeveloperName",outputFields:"DeveloperName,LastModifiedDate,LastModifiedBy.Name"},{name:"CallCenter",label:"Call Center",method:"Metadata",outputFields:"displayName,lastModifiedByName,lastModifiedDate"},{name:"ChatterExtension",label:"Chatter Extension",method:"Metadata",api:"ChatterExtensions",outputFields:"extensionName,lastModifiedByName,lastModifiedDate"},{name:"CommChannelLayout",label:"Communication Channel Layout",method:"NO"},{name:"CompactLayout",label:"Compact Layout",method:"Tooling",with:"DeveloperName",query:"Select Id,DeveloperName,MasterLabel,SobjectType,LastModifiedDate,LastModifiedBy.Name From CompactLayout",outputFields:"MasterLabel,SobjectType,LastModifiedDate,LastModifiedBy.Name"},{name:"CspTrustedSite",label:"Content Security Policy Trusted Site",method:"Tooling",with:"DeveloperName",outputFields:"DeveloperName,LastModifiedDate,LastModifiedBy.Name"},{name:"CustomConsoleComponent",label:"Custom Console Component",method:"Metadata",api:"CustomApplicationComponent",outputFields:"fullName,lastModifiedByName,lastModifiedDate"},{name:"CustomFieldDefinition",label:"Custom Field",method:"Metadata",api:"CustomField",outputFields:"Name,Parent,lastModifiedByName,lastModifiedDate",splitParentField:"fullName"},{name:"ExternalString",label:"Custom Label",method:"Tooling",with:"Name",query:"Select Id,Name,MasterLabel,LastModifiedDate,LastModifiedBy.Name From ExternalString",outputFields:"Name,MasterLabel,LastModifiedDate,LastModifiedBy.Name"},{name:"Custom Metadata Type",label:"Custom Metadata Type",method:"Metadata",api:"CustomObject",details:"only with __mdt, describe",manual:!0,outputFields:"label,fullName"},{name:"CustomEntityDefinition",label:"Custom Object",method:"Metadata",api:"CustomObject",manual:!0,outputFields:"label,fullName,lastModifiedByName,lastModifiedDate"},{name:"Article Type",label:"Article Type",method:"Metadata",api:"CustomObject",manual:!0,outputFields:"label,fullName,lastModifiedByName,lastModifiedDate"},{name:"CustomPermission",label:"Custom Permission",method:"Metadata",outputFields:"fullName,lastModifiedByName,lastModifiedDate"},{name:"CustomReportType",label:"Custom Report Type",method:"Metadata",api:"ReportType",outputFields:"label,fullName,baseObject,lastModifiedByName,lastModifiedDate"},{name:"Custom Settings",label:"Custom Setting",method:"Metadata",api:"CustomObject",details:"describe",manual:!0,outputFields:"label,fullName,lastModifiedByName,lastModifiedDate"},{name:"Dashboard",label:"Dashboard",method:"SOQL",with:"DeveloperName",query:"Select Id, Title,DeveloperName,FolderName,LastModifiedDate,LastModifiedBy.Name From Dashboard",outputFields:"Title,DeveloperName,FolderName,LastModifiedDate,LastModifiedBy.Name"},{name:"CleanDataService",label:"Data Service",method:"Tooling",with:"DeveloperName",outputFields:"DeveloperName,LastModifiedDate,LastModifiedBy.Name"},{name:"Document",label:"Document",method:"Tooling",with:"DeveloperName",query:"Select ID,Name,DeveloperName,LastModifiedDate,LastModifiedBy.Name From Document",outputFields:"Name,DeveloperName,LastModifiedDate,LastModifiedBy.Name"},{name:"DuplicateRule",label:"Duplicate Rule",method:"Metadata",splitParentField:"fullName",outputFields:"Name,Parent,lastModifiedByName,lastModifiedDate"},{name:"EclairNgMapGeoJson",label:"EclairNG Map GeoJson",method:"NO"},{name:"EmailTemplate",label:"Email Template",method:"SOQL",with:"DeveloperName",query:"Select Id,Name,DeveloperName,LastModifiedDate,LastModifiedBy.Name From EmailTemplate",outputFields:"Name,DeveloperName,LastModifiedDate,LastModifiedBy.Name"},{name:"EntitlementTemplate",label:"Entitlement Template",method:"Metadata",outputFields:"fullName,lastModifiedByName,lastModifiedDate"},{name:"SlaProcess",label:"Entitlement Process",method:"Metadata",api:"EntitlementProcess",outputFields:"fullName,lastModifiedByName,lastModifiedDate"},{name:"EscalationRule",label:"Escalation Rule",method:"NO"},{name:"ExternalDataSource",label:"External Data Source",method:"SOQL",with:"DeveloperName",outputFields:"DeveloperName,LastModifiedDate,LastModifiedBy.Name"},{name:"ExternalServiceRegistration",label:"External Service Registration",method:"Tooling",with:"DeveloperName",outputFields:"DeveloperName,LastModifiedDate,LastModifiedBy.Name"},{name:"FeedFilterDefinition",label:"Feed Filter",method:"Metadata",api:"CustomFeedFilter",outputFields:"label,lastModifiedByName,lastModifiedDate"},{name:"FieldMapping",label:"Field Mapping",method:"Tooling",with:"DeveloperName",query:"Select Id,DeveloperName,SobjectType,LastModifiedDate,LastModifiedBy.Name From FieldMapping",outputFields:"DeveloperName,SobjectType,LastModifiedDate,LastModifiedBy.Name",ignoreNS:!0},{name:"FieldSet",label:"Field Set",method:"Tooling",with:"DeveloperName",outputFields:"DeveloperName,LastModifiedDate,LastModifiedBy.Name"},{name:"FlowDefinition",label:"Flow Definition",method:"Tooling",with:"DeveloperName",query:"Select Id,LatestVersionId, DeveloperName,LastModifiedDate,LastModifiedBy.Name From FlowDefinition",outputFields:"DeveloperName,LastModifiedDate,LastModifiedBy.Name"},{name:"Folder",label:"Folder",method:"SOQL",with:"DeveloperName",details:"exclude empty dev names",outputFields:"DeveloperName,LastModifiedDate,LastModifiedBy.Name"},{name:"SharedPicklistDefinition",label:"Global Value Set",method:"Metadata",api:"GlobalValueSet",outputFields:"fullName,lastModifiedByName,lastModifiedDate"},{name:"Group",label:"Group",method:"Metadata",outputFields:"fullName,lastModifiedByName,lastModifiedDate"},{name:"PageComponent",label:"Home Page Component",method:"Metadata",api:"HomePageComponent",outputFields:"fullName,lastModifiedByName,lastModifiedDate"},{name:"CustomPage",label:"Home Page Layout",method:"Metadata",api:"HomePageLayout",outputFields:"fullName,lastModifiedByName,lastModifiedDate"},{name:"ActionKnowledgeSubmit",label:"Knowledge Action",method:"NO"},{name:"Translation",label:"Language Translation",method:"Metadata",api:"Translations",details:"get name vs language name",outputFields:"fullName,DeveloperName,lastModifiedByName,lastModifiedDate"},{name:"BrandTemplate",label:"Letterhead",method:"Metadata",api:"Letterhead",outputFields:"fullName,lastModifiedByName,lastModifiedDate"},{name:"CommunityTemplateDefinition",label:"Lightning Bolt Solution",method:"Tooling",with:"DeveloperName",outputFields:"DeveloperName,LastModifiedDate,LastModifiedBy.Name"},{name:"AuraDefinitionBundle",label:"Lightning Component Bundle",method:"Tooling",with:"DeveloperName",outputFields:"DeveloperName,LastModifiedDate,LastModifiedBy.Name"},{name:"FlexiPage",label:"Lightning Page",method:"Tooling",with:"DeveloperName",query:"SELECT Id, DeveloperName, LastModifiedDate From FlexiPage",outputFields:"DeveloperName,LastModifiedDate"},{name:"ListView",label:"List View",method:"Metadata",splitParentField:"fullName",outputFields:"Label,Name,Parent,lastModifiedByName,lastModifiedDate"},{name:"MatchingRule",label:"Matching Rule",method:"Metadata",splitParentField:"fullName",outputFields:"Name,Parent,lastModifiedByName,lastModifiedDate"},{name:"MailAppOwaWhitelist",label:"Microsoft® Outlook® Web App Domain",method:"NO"},{name:"MilestoneType",label:"Milestone",method:"SOQL",with:"Name",query:"Select Id, Name,LastModifiedDate,LastModifiedBy.Name From MilestoneType ",outputFields:"Name,LastModifiedDate,LastModifiedBy.Name",ignoreNS:!0},{name:"NamedCredential",label:"Named Credential",method:"SOQL",with:"DeveloperName",outputFields:"DeveloperName,LastModifiedDate,LastModifiedBy.Name"},{name:"Network",label:"Network",method:"SOQL",with:"Name",outputFields:"Name,LastModifiedDate,LastModifiedBy.Name",ignoreNS:!0},{name:"Layout",label:"Page Layout",method:"Tooling",with:"Name",query:"Select Id,Name,TableEnumOrId,LastModifiedDate,LastModifiedBy.Name From Layout",outputFields:"Name,Parent,ParentApiName,LastModifiedDate,LastModifiedBy.Name"},{name:"PathAssistant",label:"Path Assistant",method:"Tooling",with:"DeveloperName",query:"Select Id,DeveloperName,SobjectType,LastModifiedDate,LastModifiedBy.Name From PathAssistant",outputFields:"DeveloperName,SobjectType,LastModifiedDate,LastModifiedBy.Name"},{name:"PermissionSet",label:"Permission Set",method:"Tooling",with:"Name",query:"Select Id,Name,LastModifiedDate,LastModifiedBy.Name From PermissionSet Where IsOwnedByProfile = false and IsCustom = true",outputFields:"Name,LastModifiedDate,LastModifiedBy.Name"},{name:"PlatformCachePartition",label:"Platform Cache Partition",method:"Tooling",with:"DeveloperName",outputFields:"DeveloperName,LastModifiedDate,LastModifiedBy.Name"},{name:"FeedPostTemplate",label:"Post Template",method:"Metadata",api:"PostTemplate",splitParentField:"fullName",outputFields:"Name,Parent,lastModifiedByName,lastModifiedDate"},{name:"Queues",label:"Queue",method:"Metadata",api:"Queue",outputFields:"fullName,lastModifiedByName,lastModifiedDate"},{name:"RecordType",label:"Record Type",method:"SOQL",with:"DeveloperName",details:"get SobjectType",query:"Select Id,DeveloperName,Name,SObjectType,LastModifiedDate,LastModifiedBy.Name From RecordType",outputFields:"Name,DeveloperName,SobjectType,LastModifiedDate,LastModifiedBy.Name"},{name:"RemoteProxy",label:"Remote Site",method:"Metadata",api:"RemoteSiteSetting",outputFields:"fullName,lastModifiedByName,lastModifiedDate"},{name:"Report",label:"Report",method:"SOQL",query:"Select Id,Name,DeveloperName,FolderName,LastModifiedDate,LastModifiedBy.Name From Report",outputFields:"Name,DeveloperName,FolderName,LastModifiedDate,LastModifiedBy.Name"},{name:"ReportJob",label:"Reporting Snapshot",method:"Metadata",api:"AnalyticSnapshot",outputFields:"fullName,lastModifiedByName,lastModifiedDate"},{name:"UserRole",label:"Role",method:"SOQL",query:"SELECT Id,Name,LastModifiedDate,LastModifiedBy.Name From UserRole where portaltype = 'None'",outputFields:"Name,LastModifiedDate,LastModifiedBy.Name",ignoreNS:!0},{name:"Scontrol",label:"S-Control",method:"Tooling",with:"Name",outputFields:"Name,LastModifiedDate,LastModifiedBy.Name"},{name:"SecurityCustomBaseline",label:"Security Custom Baseline",method:"NO"},{name:"ActionSend",label:"Send Action",method:"NO"},{name:"CustomObjectCriteriaSharingRule",label:"Sharing Criteria Rule",method:"NO"},{name:"CustomObjectOwnerSharingRule",label:"Sharing Owner Rule",method:"NO"},{name:"SharingSet",label:"Sharing Set",method:"Metadata",outputFields:"fullName,lastModifiedByName,lastModifiedDate"},{name:"Site",label:"Site.com",method:"Metadata",api:"SiteDotCom",outputFields:"fullName,lastModifiedByName,lastModifiedDate"},{name:"StaticResource",label:"Static Resource",method:"Tooling",with:"Name",outputFields:"Name,LastModifiedDate,LastModifiedBy.Name"},{name:"CustomTabDefinition",label:"Tab",method:"Metadata",api:"CustomTab",outputFields:"fullName,lastModifiedByName,lastModifiedDate"},{name:"TransactionSecurityPolicy",label:"Transaction Security Policy",method:"Tooling",with:"DeveloperName",outputFields:"DeveloperName,LastModifiedDate,LastModifiedBy.Name"},{name:"UserProvisioningConfig",label:"User Provisioning Config",method:"Tooling",with:"DeveloperName",outputFields:"DeveloperName,LastModifiedDate,LastModifiedBy.Name"},{name:"ValidationFormula",label:"Validation Rule",method:"Tooling",api:"ValidationRule",with:"ValidationName",details:"get EntityDefinitionId and describe parent",query:"Select Id,ValidationName,EntityDefinitionId,LastModifiedDate,LastModifiedBy.Name From ValidationRule",outputFields:"ValidationName,Parent,ParentApiName,LastModifiedDate,LastModifiedBy.Name"},{name:"ApexComponent",label:"Visualforce Component",method:"Metadata",outputFields:"fullName,lastModifiedByName,lastModifiedDate"},{name:"ApexPage",label:"Visualforce Page",method:"Metadata",outputFields:"fullName,lastModifiedByName,lastModifiedDate"},{name:"CspFrameAncestor",label:"Whitelisted Site",method:"Metadata",api:"CspTrustedSite",outputFields:"fullName,lastModifiedByName,lastModifiedDate"},{name:"ActionEmail",label:"Workflow Email Alert",method:"Metadata",api:"WorkflowAlert",splitParentField:"fullName",outputFields:"Name,Parent,lastModifiedByName,lastModifiedDate"},{name:"ActionFieldUpdate",label:"Workflow Field Update",method:"Metadata",api:"WorkflowFieldUpdate",splitParentField:"fullName",outputFields:"Name,Parent,lastModifiedByName,lastModifiedDate"},{name:"ActionOutboundMessage",label:"Workflow Outbound Message",method:"Metadata",api:"WorkflowOutboundMessage",splitParentField:"fullName",outputFields:"Name,Parent,lastModifiedByName,lastModifiedDate"},{name:"WorkflowRule",label:"Workflow Rule",method:"Tooling",query:"Select Id,Name,TableEnumOrId,LastModifiedDate,LastModifiedBy.Name From WorkflowRule",outputFields:"Name,Parent,ParentApiName,LastModifiedDate,LastModifiedBy.Name"},{name:"ActionTask",label:"Workflow Task",method:"Metadata",api:"WorkflowTask",splitParentField:"fullName",outputFields:"Name,Parent,lastModifiedByName,lastModifiedDate"},{name:"Community",label:"Zone",method:"Metadata",api:"Community",outputFields:"fullName,lastModifiedByName,lastModifiedDate"}]};for(var i in consts.QuickLinks){var ql=consts.QuickLinks[i];ql.l=chrome.i18n.getMessage(ql.n)||ql.n}return $G.getConfigParameterLocal("localhost",function(err,params){params.localhost&&(consts.Endpoints.OAuthTokenUrl_DEV="http://localhost:5001/api/public/v1/oauth/token",consts.Endpoints.PromoCodeValidationEndpoint_DEV="http://localhost:5001/api/public/v1/promo")}),consts}),global.true=exports}({},function(){return this}());