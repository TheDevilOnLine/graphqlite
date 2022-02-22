"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1471],{3148:function(e,r,i){i.r(r),i.d(r,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return h}});var t=i(87462),n=i(63366),a=(i(67294),i(3905)),o=["components"],s={id:"universal-service-providers",title:"Getting started with a framework compatible with container-interop/service-provider",sidebar_label:"Universal service providers"},p=void 0,l={unversionedId:"universal-service-providers",id:"version-4.3/universal-service-providers",isDocsHomePage:!1,title:"Getting started with a framework compatible with container-interop/service-provider",description:"container-interop/service-provider is an experimental project",source:"@site/versioned_docs/version-4.3/universal-service-providers.md",sourceDirName:".",slug:"/universal-service-providers",permalink:"/docs/4.3/universal-service-providers",editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.3/universal-service-providers.md",tags:[],version:"4.3",lastUpdatedBy:"Jacob Thomason",lastUpdatedAt:1645552852,formattedLastUpdatedAt:"2/22/2022",frontMatter:{id:"universal-service-providers",title:"Getting started with a framework compatible with container-interop/service-provider",sidebar_label:"Universal service providers"},sidebar:"version-4.3/docs",previous:{title:"Laravel package",permalink:"/docs/4.3/laravel-package"},next:{title:"Other frameworks / No framework",permalink:"/docs/4.3/other-frameworks"}},c=[{value:"Installation",id:"installation",children:[],level:2},{value:"Requirements",id:"requirements",children:[],level:2},{value:"Integration",id:"integration",children:[],level:2},{value:"Sample usage",id:"sample-usage",children:[],level:2}],d={toc:c};function h(e){var r=e.components,i=(0,n.Z)(e,o);return(0,a.kt)("wrapper",(0,t.Z)({},d,i,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/container-interop/service-provider/"},"container-interop/service-provider")," is an experimental project\naiming to bring interoperability between framework module systems."),(0,a.kt)("p",null,"If your framework is compatible with ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/container-interop/service-provider/"},"container-interop/service-provider"),",\nGraphQLite comes with a service provider that you can leverage."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Open a terminal in your current project directory and run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"$ composer require thecodingmachine/graphqlite-universal-service-provider\n")),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("p",null,"In order to bootstrap GraphQLite, you will need:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A PSR-16 cache")),(0,a.kt)("p",null,"Additionally, you will have to route the HTTP requests to the underlying GraphQL library."),(0,a.kt)("p",null,"GraphQLite relies on the ",(0,a.kt)("a",{parentName:"p",href:"http://webonyx.github.io/graphql-php/"},"webonyx/graphql-php")," library internally.\nThis library plays well with PSR-7 requests and we provide a ",(0,a.kt)("a",{parentName:"p",href:"/docs/4.3/other-frameworks"},"PSR-15 middleware"),"."),(0,a.kt)("h2",{id:"integration"},"Integration"),(0,a.kt)("p",null,"Webonyx/graphql-php library requires a ",(0,a.kt)("a",{parentName:"p",href:"https://webonyx.github.io/graphql-php/type-system/schema/"},"Schema")," in order to resolve\nGraphQL queries. The service provider provides this ",(0,a.kt)("inlineCode",{parentName:"p"},"Schema")," class."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/thecodingmachine/graphqlite-universal-service-provider"},"Checkout the the service-provider documentation")),(0,a.kt)("h2",{id:"sample-usage"},"Sample usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="composer.json"',title:'"composer.json"'},'{\n  "require": {\n    "mnapoli/simplex": "^0.5",\n    "thecodingmachine/graphqlite-universal-service-provider": "^3",\n    "thecodingmachine/symfony-cache-universal-module": "^1"\n  },\n  "minimum-stability": "dev",\n  "prefer-stable": true\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="index.php"',title:'"index.php"'},"<?php\nuse Simplex\\Container;\nuse TheCodingMachine\\GraphQLite\\Http\\Psr15GraphQLMiddlewareBuilder;\nuse TheCodingMachine\\GraphQLite\\Schema;\nuse TheCodingMachine\\SymfonyCacheServiceProvider;\nuse TheCodingMachine\\DoctrineAnnotationsServiceProvider;\nuse TheCodingMachine\\GraphQLiteServiceProvider;\n\n$container = new Container([\n    new SymfonyCacheServiceProvider(),\n    new DoctrineAnnotationsServiceProvider,\n    new GraphQLiteServiceProvider()]);\n$container->set('graphqlite.namespace.types', ['App\\\\Types']);\n$container->set('graphqlite.namespace.controllers', ['App\\\\Controllers']);\n\n$schema = $container->get(Schema::class);\n\n// or if you want the PSR-15 middleware:\n\n$middleware = $container->get(Psr15GraphQLMiddlewareBuilder::class);\n")))}h.isMDXComponent=!0}}]);