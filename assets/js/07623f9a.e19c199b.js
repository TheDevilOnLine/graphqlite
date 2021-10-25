"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4009],{94030:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var a=t(87462),r=t(63366),o=(t(67294),t(3905)),l=["components"],i={id:"symfony-bundle",title:"Getting started with Symfony",sidebar_label:"Symfony bundle",original_id:"symfony-bundle"},p=void 0,s={unversionedId:"symfony-bundle",id:"version-4.0/symfony-bundle",isDocsHomePage:!1,title:"Getting started with Symfony",description:"The GraphQLite bundle is compatible with Symfony 4.x and Symfony 5.x.",source:"@site/versioned_docs/version-4.0/symfony-bundle.md",sourceDirName:".",slug:"/symfony-bundle",permalink:"/docs/4.0/symfony-bundle",editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.0/symfony-bundle.md",tags:[],version:"4.0",lastUpdatedBy:"Jacob Thomason",lastUpdatedAt:1635195013,formattedLastUpdatedAt:"10/25/2021",frontMatter:{id:"symfony-bundle",title:"Getting started with Symfony",sidebar_label:"Symfony bundle",original_id:"symfony-bundle"},sidebar:"version-4.0/docs",previous:{title:"Getting Started",permalink:"/docs/4.0/getting-started"},next:{title:"Laravel package",permalink:"/docs/4.0/laravel-package"}},c=[{value:"Applications that use Symfony Flex",id:"applications-that-use-symfony-flex",children:[],level:2},{value:"Applications that don&#39;t use Symfony Flex",id:"applications-that-dont-use-symfony-flex",children:[],level:2},{value:"Advanced configuration",id:"advanced-configuration",children:[{value:"Customizing error handling",id:"customizing-error-handling",children:[],level:3}],level:2}],u={toc:c};function d(e){var n=e.components,t=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The GraphQLite bundle is compatible with ",(0,o.kt)("strong",{parentName:"p"},"Symfony 4.x")," and ",(0,o.kt)("strong",{parentName:"p"},"Symfony 5.x"),"."),(0,o.kt)("h2",{id:"applications-that-use-symfony-flex"},"Applications that use Symfony Flex"),(0,o.kt)("p",null,"Open a command console, enter your project directory and execute:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ composer require thecodingmachine/graphqlite-bundle\n")),(0,o.kt)("p",null,"Now, go to the ",(0,o.kt)("inlineCode",{parentName:"p"},"config/packages/graphqlite.yaml")," file and edit the namespaces to match your application."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"config/packages/graphqlite.yaml")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"graphqlite:\n    namespace:\n      # The namespace(s) that will store your GraphQLite controllers.\n      # It accept either a string or a list of strings.\n      controllers: App\\GraphQLController\\\n      # The namespace(s) that will store your GraphQL types and factories.\n      # It accept either a string or a list of strings.\n      types:\n      - App\\Types\\\n      - App\\Entity\\\n")),(0,o.kt)("p",null,"More advanced parameters are detailed in the ",(0,o.kt)("a",{parentName:"p",href:"#advanced-configuration"},'"advanced configuration" section')),(0,o.kt)("h2",{id:"applications-that-dont-use-symfony-flex"},"Applications that don't use Symfony Flex"),(0,o.kt)("p",null,"Open a terminal in your current project directory and run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ composer require thecodingmachine/graphqlite-bundle\n")),(0,o.kt)("p",null,"Enable the library by adding it to the list of registered bundles in the ",(0,o.kt)("inlineCode",{parentName:"p"},"app/AppKernel.php")," file:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"app/AppKernel.php")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nclass AppKernel extends Kernel\n{\n    public function registerBundles()\n    {\n        $bundles = array(\n            // other bundles...\n            new TheCodingMachine\\GraphQLite\\Bundle\\GraphQLiteBundle,\n        );\n    }\n}\n")),(0,o.kt)("p",null,'Now, enable the "graphql/" route by editing the ',(0,o.kt)("inlineCode",{parentName:"p"},"config/routes.yaml")," file:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"config/routes.yaml")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# Add these 2 lines to config/routes.yaml\ngraphqlite_bundle:\n  resource: '@GraphqliteBundle/Resources/config/routes.xml'\n")),(0,o.kt)("p",null,"Last but not least, create the configuration file at ",(0,o.kt)("inlineCode",{parentName:"p"},"config/packages/graphqlite.yaml"),":"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"config/packages/graphqlite.yaml")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"graphqlite:\n    namespace:\n      # The namespace(s) that will store your GraphQLite controllers.\n      # It accept either a string or a list of strings.\n      controllers: App\\GraphqlController\\\n      # The namespace(s) that will store your GraphQL types and factories.\n      # It accept either a string or a list of strings.\n      types:\n      - App\\Types\\\n      - App\\Entity\\\n")),(0,o.kt)("h2",{id:"advanced-configuration"},"Advanced configuration"),(0,o.kt)("h3",{id:"customizing-error-handling"},"Customizing error handling"),(0,o.kt)("p",null,'You can add a "debug" section in the ',(0,o.kt)("inlineCode",{parentName:"p"},"graphqlite.yaml")," file to customize the way errors are handled.\nBy default, GraphQLite configures the underlying Webonyx GraphQL library this way:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"All exceptions that implement the ",(0,o.kt)("inlineCode",{parentName:"li"},"ClientAware")," interface are caught by GraphQLite"),(0,o.kt)("li",{parentName:"ul"},"All other exceptions will bubble up and by caught by Symfony error handling mechanism")),(0,o.kt)("p",null,"We found out those settings to be quite convenient but you can override those to your preference."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"config/packages/graphqlite.yaml")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"graphqlite:\n    # ...\n    debug:\n      # Include exception messages in output when an error arises.\n      INCLUDE_DEBUG_MESSAGE: false\n      # Include stacktrace in output when an error arises.\n      INCLUDE_TRACE: false\n      # Exceptions are not caught by the engine and propagated to Symfony.\n      RETHROW_INTERNAL_EXCEPTIONS: false\n      # Exceptions that do not implement ClientAware interface are\n      # not caught by the engine and propagated to Symfony.\n      RETHROW_UNSAFE_EXCEPTIONS: true\n")),(0,o.kt)("p",null,"The debug parameters are detailed in the ",(0,o.kt)("a",{parentName:"p",href:"https://webonyx.github.io/graphql-php/error-handling/"},"documentation of the Webonyx GraphQL library"),"\nwhich is used internally by GraphQLite."),(0,o.kt)("div",{class:"alert alert--warning"},(0,o.kt)("strong",null,"Do not put your GraphQL controllers in the ",(0,o.kt)("code",null,"App\\Controller")," namespace"),"Symfony applies a particular compiler pass to classes in the ",(0,o.kt)("code",null,"App\\Controller")," namespace. This compiler pass will prevent you from using input types. Put your controllers in another namespace. We advise using ",(0,o.kt)("code",null,"App\\GraphqlController"),"."),(0,o.kt)("p",null,"The Symfony bundle come with a set of advanced features that are not described in this install documentation (like providing a login/logout mutation out of the box).\nJump to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/4.0/symfony-bundle-advanced"},'"Symfony specific features"')," documentation of GraphQLite if you want to learn more."))}d.isMDXComponent=!0}}]);