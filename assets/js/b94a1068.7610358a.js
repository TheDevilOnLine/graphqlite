"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1886],{64170:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return o},default:function(){return m}});var a=t(87462),i=t(63366),r=(t(67294),t(3905)),l=["components"],s={id:"inheritance-interfaces",title:"Inheritance and interfaces",sidebar_label:"Inheritance and interfaces",original_id:"inheritance-interfaces"},p=void 0,c={unversionedId:"inheritance-interfaces",id:"version-4.0/inheritance-interfaces",isDocsHomePage:!1,title:"Inheritance and interfaces",description:"Modeling inheritance",source:"@site/versioned_docs/version-4.0/inheritance-interfaces.mdx",sourceDirName:".",slug:"/inheritance-interfaces",permalink:"/docs/4.0/inheritance-interfaces",editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.0/inheritance-interfaces.mdx",tags:[],version:"4.0",lastUpdatedBy:"Jacob Thomason",lastUpdatedAt:1635195013,formattedLastUpdatedAt:"10/25/2021",frontMatter:{id:"inheritance-interfaces",title:"Inheritance and interfaces",sidebar_label:"Inheritance and interfaces",original_id:"inheritance-interfaces"},sidebar:"version-4.0/docs",previous:{title:"Input types",permalink:"/docs/4.0/input-types"},next:{title:"Error handling",permalink:"/docs/4.0/error-handling"}},o=[{value:"Modeling inheritance",id:"modeling-inheritance",children:[],level:2},{value:"Mapping interfaces",id:"mapping-interfaces",children:[{value:"Implementing interfaces",id:"implementing-interfaces",children:[],level:3},{value:"Interfaces without an explicit implementing type",id:"interfaces-without-an-explicit-implementing-type",children:[],level:3}],level:2}],d={toc:o};function m(e){var n=e.components,t=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"modeling-inheritance"},"Modeling inheritance"),(0,r.kt)("p",null,"Some of your entities may extend other entities. GraphQLite will do its best to represent this hierarchy of objects in GraphQL using interfaces."),(0,r.kt)("p",null,"Let's say you have two classes, ",(0,r.kt)("inlineCode",{parentName:"p"},"Contact")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," (which extends ",(0,r.kt)("inlineCode",{parentName:"p"},"Contact"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * @Type\n */\nclass Contact\n{\n    // ...\n}\n\n/**\n * @Type\n */\nclass User extends Contact\n{\n    // ...\n}\n")),(0,r.kt)("p",null,"Now, let's assume you have a query that returns a contact:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"class ContactController\n{\n    /**\n     * @Query()\n     */\n    public function getContact(): Contact\n    {\n        // ...\n    }\n}\n")),(0,r.kt)("p",null,"When writing your GraphQL query, you are able to use fragments to retrieve fields from the ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"contact {\n    name\n    ... User {\n       email\n    }\n}\n")),(0,r.kt)("p",null,"Written in ",(0,r.kt)("a",{parentName:"p",href:"https://graphql.org/learn/schema/#type-language"},"GraphQL type language"),", the representation of types\nwould look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"interface ContactInterface {\n    // List of fields declared in Contact class\n}\n\ntype Contact implements ContactInterface {\n    // List of fields declared in Contact class\n}\n\ntype User implements ContactInterface {\n    // List of fields declared in Contact and User classes\n}\n")),(0,r.kt)("p",null,"Behind the scene, GraphQLite will detect that the ",(0,r.kt)("inlineCode",{parentName:"p"},"Contact")," class is extended by the ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," class.\nBecause the class is extended, a GraphQL ",(0,r.kt)("inlineCode",{parentName:"p"},"ContactInterface")," interface is created dynamically."),(0,r.kt)("p",null,"The GraphQL ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," type will also automatically implement this ",(0,r.kt)("inlineCode",{parentName:"p"},"ContactInterface"),". The interface contains all the fields\navailable in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Contact")," type."),(0,r.kt)("h2",{id:"mapping-interfaces"},"Mapping interfaces"),(0,r.kt)("p",null,"If you want to create a pure GraphQL interface, you can also add a ",(0,r.kt)("inlineCode",{parentName:"p"},"@Type")," annotation on a PHP interface."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * @Type\n */\ninterface UserInterface\n{\n    /**\n     * @Field\n     */\n    public function getUserName(): string;\n}\n")),(0,r.kt)("p",null,"This will automatically create a GraphQL interface whose description is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"interface UserInterface {\n    userName: String!\n}\n")),(0,r.kt)("h3",{id:"implementing-interfaces"},"Implementing interfaces"),(0,r.kt)("p",null,'You don\'t have to do anything special to implement an interface in your GraphQL types.\nSimply "implement" the interface in PHP and you are done!'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * @Type\n */\nclass User implements UserInterface\n{\n    public function getUserName(): string;\n}\n")),(0,r.kt)("p",null,"This will translate in GraphQL schema as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"interface UserInterface {\n    userName: String!\n}\n\ntype User implements UserInterface {\n    userName: String!\n}\n")),(0,r.kt)("p",null,"Please note that you do not need to put the ",(0,r.kt)("inlineCode",{parentName:"p"},"@Field")," annotation again in the implementing class."),(0,r.kt)("h3",{id:"interfaces-without-an-explicit-implementing-type"},"Interfaces without an explicit implementing type"),(0,r.kt)("p",null,"You don't have to explicitly put a ",(0,r.kt)("inlineCode",{parentName:"p"},"@Type")," annotation on the class implementing the interface (though this\nis usually a good idea)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * Look, this class has no @Type annotation\n */\nclass User implements UserInterface\n{\n    public function getUserName(): string;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"class UserController\n{\n    /**\n     * @Query()\n     */\n    public function getUser(): UserInterface // This will work!\n    {\n        // ...\n    }\n}\n")),(0,r.kt)("div",{class:"alert alert--info"},'If GraphQLite cannot find a proper GraphQL Object type implementing an interface, it will create an object type "on the fly".'),(0,r.kt)("p",null,"In the example above, because the ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," class has no ",(0,r.kt)("inlineCode",{parentName:"p"},"@Type")," annotations, GraphQLite will\ncreate a ",(0,r.kt)("inlineCode",{parentName:"p"},"UserImpl")," type that implements ",(0,r.kt)("inlineCode",{parentName:"p"},"UserInterface"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"interface UserInterface {\n    userName: String!\n}\n\ntype UserImpl implements UserInterface {\n    userName: String!\n}\n")))}m.isMDXComponent=!0}}]);