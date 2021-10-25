"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9360],{99222:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var o=n(87462),r=n(63366),i=(n(67294),n(3905)),a=["components"],s={id:"troubleshooting",title:"Troubleshooting",sidebar_label:"Troubleshooting"},l=void 0,u={unversionedId:"troubleshooting",id:"troubleshooting",isDocsHomePage:!1,title:"Troubleshooting",description:"Error: Maximum function nesting level of '100' reached",source:"@site/docs/troubleshooting.md",sourceDirName:".",slug:"/troubleshooting",permalink:"/docs/next/troubleshooting",editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/docs/troubleshooting.md",tags:[],version:"current",lastUpdatedBy:"Jacob Thomason",lastUpdatedAt:1635195013,formattedLastUpdatedAt:"10/25/2021",frontMatter:{id:"troubleshooting",title:"Troubleshooting",sidebar_label:"Troubleshooting"},sidebar:"docs",previous:{title:"Internals",permalink:"/docs/next/internals"},next:{title:"Migrating",permalink:"/docs/next/migrating"}},c=[],p={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Error: Maximum function nesting level of '100' reached")),(0,i.kt)("p",null,"Webonyx's GraphQL library tends to use a very deep stack.\nThis error does not necessarily mean your code is going into an infinite loop.\nSimply try to increase the maximum allowed nesting level in your XDebug conf:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"xdebug.max_nesting_level=500\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},'Cannot autowire service "',(0,i.kt)("em",{parentName:"strong"},"[some input type]"),'": argument "$..." of method "..." is type-hinted "...", you should configure its value explicitly.')),(0,i.kt)("p",null,"The message says that Symfony is trying to instantiate an input type as a service. This can happen if you put your\nGraphQLite controllers in the Symfony controller namespace (",(0,i.kt)("inlineCode",{parentName:"p"},"App\\Controller")," by default). Symfony will assume that any\nobject type-hinted in a method of a controller is a service (",(0,i.kt)("a",{parentName:"p",href:"https://symfony.com/doc/current/service_container/3.3-di-changes.html#controllers-are-registered-as-services"},'because all controllers are tagged with the "controller.service_arguments" tag'),")"),(0,i.kt)("p",null,"To fix this issue, do not put your GraphQLite controller in the same namespace as the Symfony controllers and\nreconfigure your ",(0,i.kt)("inlineCode",{parentName:"p"},"config/graphqlite.yml")," file to point to your new namespace."))}m.isMDXComponent=!0}}]);