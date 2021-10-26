"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8110],{58215:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(87462),r=n(67294),l=n(72389),i=n(79443);var o=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=n(83039),s=n(86010),p="tabItem_1uMI";function c(e){var t,n,a,l=e.lazy,i=e.block,c=e.defaultValue,d=e.values,h=e.groupId,m=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=d?d:f.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),k=(0,u.lx)(y,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===c?c:null!=(t=null!=c?c:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=f[0])?void 0:a.props.value;if(null!==g&&!y.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=o(),v=b.tabGroupChoices,T=b.setTabGroupChoices,w=(0,r.useState)(g),N=w[0],Q=w[1],q=[],C=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var L=v[h];null!=L&&L!==N&&y.some((function(e){return e.value===L}))&&Q(L)}var P=function(e){var t=e.currentTarget,n=q.indexOf(t),a=y[n].value;a!==N&&(C(t),Q(a),null!=h&&T(h,a))},G=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=q.indexOf(e.currentTarget)+1;n=q[a]||q[0];break;case"ArrowLeft":var r=q.indexOf(e.currentTarget)-1;n=q[r]||q[q.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":i},m)},y.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,s.Z)("tabs__item",p,{"tabs__item--active":N===t}),key:t,ref:function(e){return q.push(e)},onKeyDown:G,onFocus:P,onClick:P},null!=n?n:t)}))),l?(0,r.cloneElement)(f.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function d(e){var t=(0,l.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},27682:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return m}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=n(55064),o=n(58215),u=["components"],s={id:"queries",title:"Queries",sidebar_label:"Queries"},p=void 0,c={unversionedId:"queries",id:"version-4.3/queries",isDocsHomePage:!1,title:"Queries",description:"In GraphQLite, GraphQL queries are created by writing methods in controller classes.",source:"@site/versioned_docs/version-4.3/queries.mdx",sourceDirName:".",slug:"/queries",permalink:"/docs/4.3/queries",editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.3/queries.mdx",tags:[],version:"4.3",lastUpdatedBy:"Andre Eckardt",lastUpdatedAt:1635221823,formattedLastUpdatedAt:"10/26/2021",frontMatter:{id:"queries",title:"Queries",sidebar_label:"Queries"},sidebar:"version-4.3/docs",previous:{title:"Other frameworks / No framework",permalink:"/docs/4.3/other-frameworks"},next:{title:"Mutations",permalink:"/docs/4.3/mutations"}},d=[{value:"Simple query",id:"simple-query",children:[],level:2},{value:"About annotations / attributes",id:"about-annotations--attributes",children:[],level:2},{value:"Testing the query",id:"testing-the-query",children:[],level:2},{value:"Query with a type",id:"query-with-a-type",children:[],level:2}],h={toc:d};function m(e){var t=e.components,s=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"In GraphQLite, GraphQL queries are created by writing methods in ",(0,l.kt)("em",{parentName:"p"},"controller")," classes."),(0,l.kt)("p",null,"Those classes must be in the controllers namespaces which has been defined when you configured GraphQLite.\nFor instance, in Symfony, the controllers namespace is ",(0,l.kt)("inlineCode",{parentName:"p"},"App\\Controller")," by default."),(0,l.kt)("h2",{id:"simple-query"},"Simple query"),(0,l.kt)("p",null,"In a controller class, each query method must be annotated with the ",(0,l.kt)("inlineCode",{parentName:"p"},"@Query")," annotation. For instance:"),(0,l.kt)(i.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"php8",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Controller;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Query;\n\nclass MyController\n{\n    #[Query]\n    public function hello(string $name): string\n    {\n        return 'Hello ' . $name;\n    }\n}\n"))),(0,l.kt)(o.Z,{value:"php7",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Controller;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Query;\n\nclass MyController\n{\n    /**\n     * @Query\n     */\n    public function hello(string $name): string\n    {\n        return 'Hello ' . $name;\n    }\n}\n")))),(0,l.kt)("p",null,"This query is equivalent to the following ",(0,l.kt)("a",{parentName:"p",href:"https://graphql.org/learn/schema/#type-language"},"GraphQL type language"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"Type Query {\n    hello(name: String!): String!\n}\n")),(0,l.kt)("p",null,"As you can see, GraphQLite will automatically do the mapping between PHP types and GraphQL types."),(0,l.kt)("div",{class:"alert alert--warning"},(0,l.kt)("strong",null,"Heads up!")," If you are not using a framework with an autowiring container (like Symfony or Laravel), please be aware that the ",(0,l.kt)("code",null,"MyController")," class must exist in the container of your application. Furthermore, the identifier of the controller in the container MUST be the fully qualified class name of controller."),(0,l.kt)("h2",{id:"about-annotations--attributes"},"About annotations / attributes"),(0,l.kt)("p",null,"GraphQLite relies a lot on annotations (we call them attributes since PHP 8)."),(0,l.kt)("p",null,'It supports both the old "Doctrine annotations" style (',(0,l.kt)("inlineCode",{parentName:"p"},"@Query"),") and the new PHP 8 attributes (",(0,l.kt)("inlineCode",{parentName:"p"},"#[Query]"),")."),(0,l.kt)("p",null,"Read the ",(0,l.kt)("a",{parentName:"p",href:"/docs/4.3/doctrine-annotations-attributes"},"Doctrine annotations VS attributes")," documentation if you are not familiar with this concept."),(0,l.kt)("h2",{id:"testing-the-query"},"Testing the query"),(0,l.kt)("p",null,"The default GraphQL endpoint is ",(0,l.kt)("inlineCode",{parentName:"p"},"/graphql"),"."),(0,l.kt)("p",null,"The easiest way to test a GraphQL endpoint is to use ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/graphql/graphiql"},"GraphiQL")," or\n",(0,l.kt)("a",{parentName:"p",href:"https://altair.sirmuel.design/"},"Altair")," clients (they are available as Chrome or Firefox plugins)"),(0,l.kt)("div",{class:"alert alert--info"},"If you are using the Symfony bundle, GraphiQL is also directly embedded.",(0,l.kt)("br",null),"Simply head to ",(0,l.kt)("code",null,"http://[path-to-my-app]/graphiql")),(0,l.kt)("p",null,"Here a query using our simple ",(0,l.kt)("em",{parentName:"p"},"Hello World")," example:"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(46637).Z})),(0,l.kt)("h2",{id:"query-with-a-type"},"Query with a type"),(0,l.kt)("p",null,"So far, we simply declared a query. But we did not yet declare a type."),(0,l.kt)("p",null,"Let's assume you want to return a product:"),(0,l.kt)(i.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"php8",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Controller;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Query;\n\nclass ProductController\n{\n    #[Query]\n    public function product(string $id): Product\n    {\n        // Some code that looks for a product and returns it.\n    }\n}\n"))),(0,l.kt)(o.Z,{value:"php7",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Controller;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Query;\n\nclass ProductController\n{\n    /**\n     * @Query\n     */\n    public function product(string $id): Product\n    {\n        // Some code that looks for a product and returns it.\n    }\n}\n")))),(0,l.kt)("p",null,"As the ",(0,l.kt)("inlineCode",{parentName:"p"},"Product")," class is not a scalar type, you must tell GraphQLite how to handle it:"),(0,l.kt)(i.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"php8",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Entities;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Field;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Type;\n\n#[Type]\nclass Product\n{\n    // ...\n\n    #[Field]\n    public function getName(): string\n    {\n        return $this->name;\n    }\n\n    #[Field]\n    public function getPrice(): ?float\n    {\n        return $this->price;\n    }\n}\n"))),(0,l.kt)(o.Z,{value:"php7",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Entities;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Field;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Type;\n\n/**\n * @Type()\n */\nclass Product\n{\n    // ...\n\n    /**\n     * @Field()\n     */\n    public function getName(): string\n    {\n        return $this->name;\n    }\n\n    /**\n     * @Field()\n     */\n    public function getPrice(): ?float\n    {\n        return $this->price;\n    }\n}\n")))),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"@Type")," annotation is used to inform GraphQLite that the ",(0,l.kt)("inlineCode",{parentName:"p"},"Product")," class is a GraphQL type."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"@Field")," annotation is used to define the GraphQL fields. This annotation must be put on a ",(0,l.kt)("strong",{parentName:"p"},"public method"),"."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Product")," class must be in one of the ",(0,l.kt)("em",{parentName:"p"},"types")," namespaces. As for ",(0,l.kt)("em",{parentName:"p"},"controller")," classes, you configured this namespace when you installed\nGraphQLite. By default, in Symfony, the allowed types namespaces are ",(0,l.kt)("inlineCode",{parentName:"p"},"App\\Entity")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"App\\Types"),"."),(0,l.kt)("p",null,"This query is equivalent to the following ",(0,l.kt)("a",{parentName:"p",href:"https://graphql.org/learn/schema/#type-language"},"GraphQL type language"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"Type Product {\n    name: String!\n    price: Float\n}\n")),(0,l.kt)("div",{class:"alert alert--info"},(0,l.kt)("p",null,"If you are used to  ",(0,l.kt)("a",{href:"https://en.wikipedia.org/wiki/Domain-driven_design"},"Domain driven design"),", you probably realize that the ",(0,l.kt)("code",null,"Product")," class is part of your ",(0,l.kt)("i",null,"domain"),"."),(0,l.kt)("p",null,"GraphQL annotations are adding some serialization logic that is out of scope of the domain. These are ",(0,l.kt)("i",null,"just")," annotations and for most project, this is the fastest and easiest route."),(0,l.kt)("p",null,"If you feel that GraphQL annotations do not belong to the domain, or if you cannot modify the class directly (maybe because it is part of a third party library), there is another way to create types without annotating the domain class. We will explore that in the next chapter.")))}m.isMDXComponent=!0},46637:function(e,t,n){t.Z=n.p+"assets/images/query1-5a22bbe2398efcc725ea571a07ff2c9b.png"}}]);