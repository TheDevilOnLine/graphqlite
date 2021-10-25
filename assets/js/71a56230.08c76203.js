"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5235],{473:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var n=o(87462),r=o(63366),i=(o(67294),o(3905)),s=["components"],a={id:"troubleshooting",title:"Troubleshooting",sidebar_label:"Troubleshooting",original_id:"troubleshooting"},l=void 0,u={unversionedId:"troubleshooting",id:"version-4.1/troubleshooting",isDocsHomePage:!1,title:"Troubleshooting",description:"Error: Maximum function nesting level of '100' reached",source:"@site/versioned_docs/version-4.1/troubleshooting.md",sourceDirName:".",slug:"/troubleshooting",permalink:"/docs/4.1/troubleshooting",editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.1/troubleshooting.md",tags:[],version:"4.1",lastUpdatedBy:"Jacob Thomason",lastUpdatedAt:1635195013,formattedLastUpdatedAt:"10/25/2021",frontMatter:{id:"troubleshooting",title:"Troubleshooting",sidebar_label:"Troubleshooting",original_id:"troubleshooting"},sidebar:"version-4.1/docs",previous:{title:"Internals",permalink:"/docs/4.1/internals"},next:{title:"Migrating",permalink:"/docs/4.1/migrating"}},c=[],p={toc:c};function d(e){var t=e.components,o=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Error: Maximum function nesting level of '100' reached")),(0,i.kt)("p",null,"Webonyx's GraphQL library tends to use a very deep stack.\nThis error does not necessarily mean your code is going into an infinite loop.\nSimply try to increase the maximum allowed nesting level in your XDebug conf:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"xdebug.max_nesting_level=500\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},'Cannot autowire service "',(0,i.kt)("em",{parentName:"strong"},"[some input type]"),'": argument "$..." of method "..." is type-hinted "...", you should configure its value explicitly.')),(0,i.kt)("p",null,"The message says that Symfony is trying to instantiate an input type as a service. This can happen if you put your\nGraphQLite controllers in the Symfony controller namespace (",(0,i.kt)("inlineCode",{parentName:"p"},"App\\Controller")," by default). Symfony will assume that any\nobject type-hinted in a method of a controller is a service (",(0,i.kt)("a",{parentName:"p",href:"https://symfony.com/doc/current/service_container/3.3-di-changes.html#controllers-are-registered-as-services"},'because all controllers are tagged with the "controller.service_arguments" tag'),")"),(0,i.kt)("p",null,"To fix this issue, do not put your GraphQLite controller in the same namespace as the Symfony controllers and\nreconfigure your ",(0,i.kt)("inlineCode",{parentName:"p"},"config/graphqlite.yml")," file to point to your new namespace."))}d.isMDXComponent=!0}}]);