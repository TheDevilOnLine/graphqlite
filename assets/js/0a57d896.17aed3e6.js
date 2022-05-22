"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3024],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=c(t),d=a,m=h["".concat(s,".").concat(d)]||h[d]||u[d]||o;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=h;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},58215:function(e,n,t){var r=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},26396:function(e,n,t){t.d(n,{Z:function(){return h}});var r=t(87462),a=t(67294),o=t(72389),i=t(79443);var l=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=t(63616),c=t(86010),p="tabItem_vU9c";function u(e){var n,t,o,i=e.lazy,u=e.block,h=e.defaultValue,d=e.values,m=e.groupId,f=e.className,g=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=d?d:g.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),v=(0,s.lx)(y,(function(e,n){return e.value===n.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var x=null===h?h:null!=(n=null!=h?h:null==(t=g.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(o=g[0])?void 0:o.props.value;if(null!==x&&!y.some((function(e){return e.value===x})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+x+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=l(),w=b.tabGroupChoices,k=b.setTabGroupChoices,E=(0,a.useState)(x),N=E[0],T=E[1],L=[],G=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var O=w[m];null!=O&&O!==N&&y.some((function(e){return e.value===O}))&&T(O)}var Q=function(e){var n=e.currentTarget,t=L.indexOf(n),r=y[t].value;r!==N&&(G(n),T(r),null!=m&&k(m,r))},C=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=L.indexOf(e.currentTarget)+1;t=L[r]||L[0];break;case"ArrowLeft":var a=L.indexOf(e.currentTarget)-1;t=L[a]||L[L.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":u},f)},y.map((function(e){var n=e.value,t=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===n?0:-1,"aria-selected":N===n,key:n,ref:function(e){return L.push(e)},onKeyDown:C,onFocus:Q,onClick:Q},o,{className:(0,c.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":N===n})}),null!=t?t:n)}))),i?(0,a.cloneElement)(g.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},g.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==N})}))))}function h(e){var n=(0,o.Z)();return a.createElement(u,(0,r.Z)({key:String(n)},e))}},51448:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return h}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=t(26396),l=t(58215),s=["components"],c={id:"error-handling",title:"Error handling",sidebar_label:"Error handling",original_id:"error-handling"},p=void 0,u={unversionedId:"error-handling",id:"version-4.1/error-handling",title:"Error handling",description:'In GraphQL, when an error occurs, the server must add an "error" entry in the response.',source:"@site/versioned_docs/version-4.1/error_handling.mdx",sourceDirName:".",slug:"/error-handling",permalink:"/docs/4.1/error-handling",editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.1/error_handling.mdx",tags:[],version:"4.1",lastUpdatedBy:"asrar",lastUpdatedAt:1653185331,formattedLastUpdatedAt:"5/22/2022",frontMatter:{id:"error-handling",title:"Error handling",sidebar_label:"Error handling",original_id:"error-handling"},sidebar:"version-4.1/docs",previous:{title:"Inheritance and interfaces",permalink:"/docs/4.1/inheritance-interfaces"},next:{title:"User input validation",permalink:"/docs/4.1/validation"}},h=[{value:"HTTP response code",id:"http-response-code",children:[],level:2},{value:"Customizing the category",id:"customizing-the-category",children:[],level:2},{value:"Customizing the extensions section",id:"customizing-the-extensions-section",children:[],level:2},{value:"Writing your own exceptions",id:"writing-your-own-exceptions",children:[],level:2},{value:"Many errors for one exception",id:"many-errors-for-one-exception",children:[],level:2},{value:"Webonyx exceptions",id:"webonyx-exceptions",children:[],level:2},{value:"Behaviour of exceptions that do not implement ClientAware",id:"behaviour-of-exceptions-that-do-not-implement-clientaware",children:[],level:2}],d={toc:h};function m(e){var n=e.components,t=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'In GraphQL, when an error occurs, the server must add an "error" entry in the response.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errors": [\n    {\n      "message": "Name for character with ID 1002 could not be fetched.",\n      "locations": [ { "line": 6, "column": 7 } ],\n      "path": [ "hero", "heroFriends", 1, "name" ],\n      "extensions": {\n        "category": "Exception"\n      }\n    }\n  ]\n}\n')),(0,o.kt)("p",null,"You can generate such errors with GraphQLite by throwing a ",(0,o.kt)("inlineCode",{parentName:"p"},"GraphQLException"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'use TheCodingMachine\\GraphQLite\\Exceptions\\GraphQLException;\n\nthrow new GraphQLException("Exception message");\n')),(0,o.kt)("h2",{id:"http-response-code"},"HTTP response code"),(0,o.kt)("p",null,"By default, when you throw a ",(0,o.kt)("inlineCode",{parentName:"p"},"GraphQLException"),", the HTTP status code will be 500."),(0,o.kt)("p",null,"If your exception code is in the 4xx - 5xx range, the exception code will be used as an HTTP status code."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'// This exception will generate a HTTP 404 status code\nthrow new GraphQLException("Not found", 404);\n')),(0,o.kt)("div",{class:"alert alert--info"},"GraphQL allows to have several errors for one request. If you have several",(0,o.kt)("code",null,"GraphQLException")," thrown for the same request, the HTTP status code used will be the highest one."),(0,o.kt)("h2",{id:"customizing-the-category"},"Customizing the category"),(0,o.kt)("p",null,'By default, GraphQLite adds a "category" entry in the "extensions section". You can customize the category with the\n4th parameter of the constructor:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'throw new GraphQLException("Not found", 404, null, "NOT_FOUND");\n')),(0,o.kt)("p",null,"will generate:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errors": [\n    {\n      "message": "Not found",\n      "extensions": {\n        "category": "NOT_FOUND"\n      }\n    }\n  ]\n}\n')),(0,o.kt)("h2",{id:"customizing-the-extensions-section"},"Customizing the extensions section"),(0,o.kt)("p",null,'You can customize the whole "extensions" section with the 5th parameter of the constructor:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"throw new GraphQLException(\"Field required\", 400, null, \"VALIDATION\", ['field' => 'name']);\n")),(0,o.kt)("p",null,"will generate:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errors": [\n    {\n      "message": "Field required",\n      "extensions": {\n        "category": "VALIDATION",\n        "field": "name"\n      }\n    }\n  ]\n}\n')),(0,o.kt)("h2",{id:"writing-your-own-exceptions"},"Writing your own exceptions"),(0,o.kt)("p",null,"Rather that throwing the base ",(0,o.kt)("inlineCode",{parentName:"p"},"GraphQLException"),", you should consider writing your own exception."),(0,o.kt)("p",null,"Any exception that implements interface ",(0,o.kt)("inlineCode",{parentName:"p"},"TheCodingMachine\\GraphQLite\\Exceptions\\GraphQLExceptionInterface"),' will be displayed\nin the GraphQL "errors" section.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'class ValidationException extends Exception implements GraphQLExceptionInterface\n{\n    /**\n     * Returns true when exception message is safe to be displayed to a client.\n     */\n    public function isClientSafe(): bool\n    {\n        return true;\n    }\n\n    /**\n     * Returns string describing a category of the error.\n     *\n     * Value "graphql" is reserved for errors produced by query parsing or validation, do not use it.\n     */\n    public function getCategory(): string\n    {\n        return \'VALIDATION\';\n    }\n\n    /**\n     * Returns the "extensions" object attached to the GraphQL error.\n     *\n     * @return array<string, mixed>\n     */\n    public function getExtensions(): array\n    {\n        return [];\n    }\n}\n')),(0,o.kt)("h2",{id:"many-errors-for-one-exception"},"Many errors for one exception"),(0,o.kt)("p",null,"Sometimes, you need to display several errors in the response. But of course, at any given point in your code, you can\nthrow only one exception."),(0,o.kt)("p",null,"If you want to display several exceptions, you can bundle these exceptions in a ",(0,o.kt)("inlineCode",{parentName:"p"},"GraphQLAggregateException")," that you can\nthrow."),(0,o.kt)(i.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"php8",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\GraphQLite\\Exceptions\\GraphQLAggregateException;\n\n#[Query]\npublic function createProduct(string $name, float $price): Product\n{\n    $exceptions = new GraphQLAggregateException();\n\n    if ($name === '') {\n        $exceptions->add(new GraphQLException('Name cannot be empty', 400, null, 'VALIDATION'));\n    }\n    if ($price <= 0) {\n        $exceptions->add(new GraphQLException('Price must be positive', 400, null, 'VALIDATION'));\n    }\n\n    if ($exceptions->hasExceptions()) {\n        throw $exceptions;\n    }\n}\n"))),(0,o.kt)(l.Z,{value:"php7",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\GraphQLite\\Exceptions\\GraphQLAggregateException;\n\n/**\n * @Query\n */\npublic function createProduct(string $name, float $price): Product\n{\n    $exceptions = new GraphQLAggregateException();\n\n    if ($name === '') {\n        $exceptions->add(new GraphQLException('Name cannot be empty', 400, null, 'VALIDATION'));\n    }\n    if ($price <= 0) {\n        $exceptions->add(new GraphQLException('Price must be positive', 400, null, 'VALIDATION'));\n    }\n\n    if ($exceptions->hasExceptions()) {\n        throw $exceptions;\n    }\n}\n")))),(0,o.kt)("h2",{id:"webonyx-exceptions"},"Webonyx exceptions"),(0,o.kt)("p",null,"GraphQLite is based on the wonderful webonyx/GraphQL-PHP library. Therefore, the Webonyx exception mechanism can\nalso be used in GraphQLite. This means you can throw a ",(0,o.kt)("inlineCode",{parentName:"p"},"GraphQL\\Error\\Error")," exception or any exception implementing\n",(0,o.kt)("a",{parentName:"p",href:"http://webonyx.github.io/graphql-php/error-handling/#errors-in-graphql"},(0,o.kt)("inlineCode",{parentName:"a"},"GraphQL\\Error\\ClientAware")," interface")),(0,o.kt)("p",null,"Actually, the ",(0,o.kt)("inlineCode",{parentName:"p"},"TheCodingMachine\\GraphQLite\\Exceptions\\GraphQLExceptionInterface")," extends Webonyx's ",(0,o.kt)("inlineCode",{parentName:"p"},"ClientAware")," interface."),(0,o.kt)("h2",{id:"behaviour-of-exceptions-that-do-not-implement-clientaware"},"Behaviour of exceptions that do not implement ClientAware"),(0,o.kt)("p",null,"If an exception that does not implement ",(0,o.kt)("inlineCode",{parentName:"p"},"ClientAware")," is thrown, by default, GraphQLite will not catch it."),(0,o.kt)("p",null,"The exception will propagate to your framework error handler/middleware that is in charge of displaying the classical error page."),(0,o.kt)("p",null,"You can ",(0,o.kt)("a",{parentName:"p",href:"http://webonyx.github.io/graphql-php/error-handling/#debugging-tools"},"change the underlying behaviour of Webonyx to catch any exception and turn them into GraphQL errors"),".\nThe way you adjust the error settings depends on the framework you are using (",(0,o.kt)("a",{parentName:"p",href:"/docs/4.1/symfony-bundle"},"Symfony"),", ",(0,o.kt)("a",{parentName:"p",href:"/docs/4.1/laravel-package"},"Laravel"),")."),(0,o.kt)("div",{class:"alert alert--info"},'To be clear: we strongly discourage changing this setting. We strongly believe that the default "RETHROW_UNSAFE_EXCEPTIONS" setting of Webonyx is the only sane setting (only putting in "errors" section exceptions designed for GraphQL).'))}m.isMDXComponent=!0}}]);