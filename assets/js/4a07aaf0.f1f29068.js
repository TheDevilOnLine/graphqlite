"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6596],{58215:function(e,n,t){var a=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},55064:function(e,n,t){t.d(n,{Z:function(){return d}});var a=t(87462),r=t(67294),l=t(72389),o=t(79443);var u=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=t(83039),s=t(86010),p="tabItem_1uMI";function c(e){var n,t,a,l=e.lazy,o=e.block,c=e.defaultValue,d=e.values,f=e.groupId,h=e.className,m=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:m.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),y=(0,i.lx)(v,(function(e,n){return e.value===n.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===c?c:null!=(n=null!=c?c:null==(t=m.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(a=m[0])?void 0:a.props.value;if(null!==b&&!v.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=u(),w=k.tabGroupChoices,g=k.setTabGroupChoices,q=(0,r.useState)(b),N=q[0],I=q[1],T=[],x=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var L=w[f];null!=L&&L!==N&&v.some((function(e){return e.value===L}))&&I(L)}var Q=function(e){var n=e.currentTarget,t=T.indexOf(n),a=v[t].value;a!==N&&(x(n),I(a),null!=f&&g(f,a))},E=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;t=T[a]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.currentTarget)-1;t=T[r]||T[T.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":o},h)},v.map((function(e){var n=e.value,t=e.label;return r.createElement("li",{role:"tab",tabIndex:N===n?0:-1,"aria-selected":N===n,className:(0,s.Z)("tabs__item",p,{"tabs__item--active":N===n}),key:n,ref:function(e){return T.push(e)},onKeyDown:E,onFocus:Q,onClick:Q},null!=t?t:n)}))),l?(0,r.cloneElement)(m.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},m.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==N})}))))}function d(e){var n=(0,l.Z)();return r.createElement(c,(0,a.Z)({key:String(n)},e))}},64750:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return h}});var a=t(87462),r=t(63366),l=(t(67294),t(3905)),o=t(55064),u=t(58215),i=["components"],s={id:"query-plan",title:"Query plan",sidebar_label:"Query plan"},p=void 0,c={unversionedId:"query-plan",id:"version-3.0/query-plan",isDocsHomePage:!1,title:"Query plan",description:"The problem",source:"@site/versioned_docs/version-3.0/query_plan.mdx",sourceDirName:".",slug:"/query-plan",permalink:"/docs/3.0/query-plan",editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-3.0/query_plan.mdx",tags:[],version:"3.0",lastUpdatedBy:"Jacob Thomason",lastUpdatedAt:1635195013,formattedLastUpdatedAt:"10/25/2021",frontMatter:{id:"query-plan",title:"Query plan",sidebar_label:"Query plan"}},d=[{value:"The problem",id:"the-problem",children:[],level:2},{value:"Fetching the query plan",id:"fetching-the-query-plan",children:[],level:2}],f={toc:d};function h(e){var n=e.components,t=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"the-problem"},"The problem"),(0,l.kt)("p",null,'GraphQL naive implementations often suffer from the "N+1" problem.'),(0,l.kt)("p",null,"Let's have a look at the following query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"{\n    products {\n        name\n        manufacturer {\n            name\n        }\n    }\n}\n")),(0,l.kt)("p",null,"A naive implementation will do this:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"1 query to fetch the list of products"),(0,l.kt)("li",{parentName:"ul"},"1 query per product to fetch the manufacturer")),(0,l.kt)("p",null,'Assuming we have "N" products, we will make "N+1" queries.'),(0,l.kt)("p",null,'There are several ways to fix this problem. Assuming you are using a relational database, one solution is to try to look\nahead and perform only one query with a JOIN between "products" and "manufacturers".'),(0,l.kt)("p",null,'But how do I know if I should make the JOIN between "products" and "manufacturers" or not? I need to know ahead\nof time.'),(0,l.kt)("p",null,"With GraphQLite, you can answer this question by tapping into the ",(0,l.kt)("inlineCode",{parentName:"p"},"ResolveInfo")," object."),(0,l.kt)("h2",{id:"fetching-the-query-plan"},"Fetching the query plan"),(0,l.kt)("small",null,"Available in GraphQLite 4.0+"),(0,l.kt)(o.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"php8",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"use GraphQL\\Type\\Definition\\ResolveInfo;\n\nclass ProductsController\n{\n    /**\n     * @return Product[]\n     */\n    #[Query]\n    public function products(ResolveInfo $info): array\n    {\n        if (isset($info->getFieldSelection()['manufacturer']) {\n            // Let's perform a request with a JOIN on manufacturer\n        } else {\n            // Let's perform a request without a JOIN on manufacturer\n        }\n        // ...\n    }\n}\n"))),(0,l.kt)(u.Z,{value:"php7",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"use GraphQL\\Type\\Definition\\ResolveInfo;\n\nclass ProductsController\n{\n    /**\n     * @Query\n     * @return Product[]\n     */\n    public function products(ResolveInfo $info): array\n    {\n        if (isset($info->getFieldSelection()['manufacturer']) {\n            // Let's perform a request with a JOIN on manufacturer\n        } else {\n            // Let's perform a request without a JOIN on manufacturer\n        }\n        // ...\n    }\n}\n")))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ResolveInfo")," is a class provided by Webonyx/GraphQL-PHP (the low-level GraphQL library used by GraphQLite).\nIt contains info about the query and what fields are requested. Using ",(0,l.kt)("inlineCode",{parentName:"p"},"ResolveInfo::getFieldSelection"),' you can analyze the query\nand decide whether you should perform additional "JOINS" in your query or not.'),(0,l.kt)("div",{class:"alert alert--info"},"As of the writing of this documentation, the ",(0,l.kt)("code",null,"ResolveInfo")," class is useful but somewhat limited. The ",(0,l.kt)("a",{href:"https://github.com/webonyx/graphql-php/pull/436"},'next version of Webonyx/GraphQL-PHP will add a "query plan"'),"that allows a deeper analysis of the query."))}h.isMDXComponent=!0}}]);