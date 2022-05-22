"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5244],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,h=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},26396:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(87462),r=n(67294),o=n(72389),i=n(79443);var l=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=n(63616),s=n(86010),p="tabItem_vU9c";function c(e){var t,n,o,i=e.lazy,c=e.block,d=e.defaultValue,m=e.values,h=e.groupId,g=e.className,y=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=m?m:y.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,u.lx)(f,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===d?d:null!=(t=null!=d?d:null==(n=y.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=y[0])?void 0:o.props.value;if(null!==v&&!f.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=l(),N=b.tabGroupChoices,T=b.setTabGroupChoices,P=(0,r.useState)(v),S=P[0],x=P[1],C=[],w=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var I=N[h];null!=I&&I!==S&&f.some((function(e){return e.value===I}))&&x(I)}var O=function(e){var t=e.currentTarget,n=C.indexOf(t),a=f[n].value;a!==S&&(w(t),x(a),null!=h&&T(h,a))},_=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=C.indexOf(e.currentTarget)+1;n=C[a]||C[0];break;case"ArrowLeft":var r=C.indexOf(e.currentTarget)-1;n=C[r]||C[C.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":c},g)},f.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,key:t,ref:function(e){return C.push(e)},onKeyDown:_,onFocus:O,onClick:O},o,{className:(0,s.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":S===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(y.filter((function(e){return e.props.value===S}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==S})}))))}function d(e){var t=(0,o.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},95796:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=n(26396),l=n(58215),u=["components"],s={id:"fine-grained-security",title:"Fine grained security",sidebar_label:"Fine grained security"},p=void 0,c={unversionedId:"fine-grained-security",id:"fine-grained-security",title:"Fine grained security",description:"If the @Logged and @Right annotations are not",source:"@site/docs/fine-grained-security.mdx",sourceDirName:".",slug:"/fine-grained-security",permalink:"/docs/next/fine-grained-security",editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/docs/fine-grained-security.mdx",tags:[],version:"current",lastUpdatedBy:"asrar",lastUpdatedAt:1653185331,formattedLastUpdatedAt:"5/22/2022",frontMatter:{id:"fine-grained-security",title:"Fine grained security",sidebar_label:"Fine grained security"},sidebar:"docs",previous:{title:"Authentication and authorization",permalink:"/docs/next/authentication-authorization"},next:{title:"Connecting security to your framework",permalink:"/docs/next/implementing-security"}},d=[{value:"Using the @Security annotation",id:"using-the-security-annotation",children:[],level:2},{value:"The <code>is_granted</code> function",id:"the-is_granted-function",children:[],level:2},{value:"Accessing method parameters",id:"accessing-method-parameters",children:[],level:2},{value:"Setting HTTP code and error message",id:"setting-http-code-and-error-message",children:[],level:2},{value:"Setting a default value",id:"setting-a-default-value",children:[],level:2},{value:"Accessing the user",id:"accessing-the-user",children:[],level:2},{value:"Accessing the current object",id:"accessing-the-current-object",children:[],level:2},{value:"Available scope",id:"available-scope",children:[],level:2},{value:"How to restrict access to a given resource",id:"how-to-restrict-access-to-a-given-resource",children:[],level:2}],m={toc:d};function h(e){var t=e.components,n=(0,r.Z)(e,u);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If the ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/authentication-authorization#logged-and-right-annotations"},(0,o.kt)("inlineCode",{parentName:"a"},"@Logged")," and ",(0,o.kt)("inlineCode",{parentName:"a"},"@Right")," annotations")," are not\ngranular enough for your needs, you can use the advanced ",(0,o.kt)("inlineCode",{parentName:"p"},"@Security")," annotation."),(0,o.kt)("p",null,"Using the ",(0,o.kt)("inlineCode",{parentName:"p"},"@Security")," annotation, you can write an ",(0,o.kt)("em",{parentName:"p"},"expression")," that can contain custom logic. For instance:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Check that a user can access a given resource"),(0,o.kt)("li",{parentName:"ul"},"Check that a user has one right or another right"),(0,o.kt)("li",{parentName:"ul"},"...")),(0,o.kt)("h2",{id:"using-the-security-annotation"},"Using the @Security annotation"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"@Security")," annotation is very flexible: it allows you to pass an expression that can contains custom logic:"),(0,o.kt)(i.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"php8",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\GraphQLite\\Annotations\\Security;\n\n// ...\n\n#[Query]\n#[Security(\"is_granted('ROLE_ADMIN') or is_granted('POST_SHOW', post)\")]\npublic function getPost(Post $post): array\n{\n    // ...\n}\n"))),(0,o.kt)(l.Z,{value:"php7",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\GraphQLite\\Annotations\\Security;\n\n// ...\n\n/**\n * @Query\n * @Security(\"is_granted('ROLE_ADMIN') or is_granted('POST_SHOW', post)\")\n */\npublic function getPost(Post $post): array\n{\n    // ...\n}\n")))),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"expression")," defined in the ",(0,o.kt)("inlineCode",{parentName:"p"},"@Security")," annotation must conform to ",(0,o.kt)("a",{parentName:"p",href:"https://symfony.com/doc/4.4/components/expression_language/syntax.html"},"Symfony's Expression Language syntax")),(0,o.kt)("div",{class:"alert alert--info"},"If you are a Symfony user, you might already be used to the ",(0,o.kt)("code",null,"@Security")," annotation. Most of the inspiration of this annotation comes from Symfony. Warning though! GraphQLite's ",(0,o.kt)("code",null,"@Security")," annotation and Symfony's ",(0,o.kt)("code",null,"@Security")," annotation are slightly different. Especially, the two annotations do not live in the same namespace!"),(0,o.kt)("h2",{id:"the-is_granted-function"},"The ",(0,o.kt)("inlineCode",{parentName:"h2"},"is_granted")," function"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"is_granted")," function to check if a user has a special right."),(0,o.kt)(i.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"php8",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"#[Security(\"is_granted('ROLE_ADMIN')\")]\n"))),(0,o.kt)(l.Z,{value:"php7",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"@Security(\"is_granted('ROLE_ADMIN')\")\n")))),(0,o.kt)("p",null,"is similar to"),(0,o.kt)(i.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"php8",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'#[Right("ROLE_ADMIN")]\n'))),(0,o.kt)(l.Z,{value:"php7",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'@Right("ROLE_ADMIN")\n')))),(0,o.kt)("p",null,"In addition, the ",(0,o.kt)("inlineCode",{parentName:"p"},"is_granted"),' function accepts a second optional parameter: the "scope" of the right.'),(0,o.kt)(i.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"php8",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"#[Query]\n#[Security(\"is_granted('POST_SHOW', post)\")]\npublic function getPost(Post $post): array\n{\n    // ...\n}\n"))),(0,o.kt)(l.Z,{value:"php7",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * @Query\n * @Security(\"is_granted('POST_SHOW', post)\")\n */\npublic function getPost(Post $post): array\n{\n    // ...\n}\n")))),(0,o.kt)("p",null,"In the example above, the ",(0,o.kt)("inlineCode",{parentName:"p"},"getPost")," method can be called only if the logged user has the 'POST_SHOW' permission on the\n",(0,o.kt)("inlineCode",{parentName:"p"},"$post")," object. You can notice that the ",(0,o.kt)("inlineCode",{parentName:"p"},"$post")," object comes from the parameters."),(0,o.kt)("h2",{id:"accessing-method-parameters"},"Accessing method parameters"),(0,o.kt)("p",null,"All parameters passed to the method can be accessed in the ",(0,o.kt)("inlineCode",{parentName:"p"},"@Security")," expression."),(0,o.kt)(i.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"php8",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'#[Query]\n#[Security(expression: "startDate < endDate", statusCode: 400, message: "End date must be after start date")]\npublic function getPosts(DateTimeImmutable $startDate, DateTimeImmutable $endDate): array\n{\n    // ...\n}\n'))),(0,o.kt)(l.Z,{value:"php7",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * @Query\n * @Security("startDate < endDate", statusCode=400, message="End date must be after start date")\n */\npublic function getPosts(DateTimeImmutable $startDate, DateTimeImmutable $endDate): array\n{\n    // ...\n}\n')))),(0,o.kt)("p",null,"In the example above, we tweak a bit the Security annotation purpose to do simple input validation."),(0,o.kt)("h2",{id:"setting-http-code-and-error-message"},"Setting HTTP code and error message"),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"statusCode")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"message")," attributes to set the HTTP code and GraphQL error message."),(0,o.kt)(i.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"php8",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'#[Query]\n#[Security(expression: "is_granted(\'POST_SHOW\', post)", statusCode: 404, message: "Post not found (let\'s pretend the post does not exists!)")]\npublic function getPost(Post $post): array\n{\n    // ...\n}\n'))),(0,o.kt)(l.Z,{value:"php7",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * @Query\n * @Security("is_granted(\'POST_SHOW\', post)", statusCode=404, message="Post not found (let\'s pretend the post does not exists!)")\n */\npublic function getPost(Post $post): array\n{\n    // ...\n}\n')))),(0,o.kt)("p",null,"Note: since a single GraphQL call contain many errors, 2 errors might have conflicting HTTP status code.\nThe resulting status code is up to the GraphQL middleware you use. Most of the time, the status code with the\nhigher error code will be returned."),(0,o.kt)("h2",{id:"setting-a-default-value"},"Setting a default value"),(0,o.kt)("p",null,"If you do not want an error to be thrown when the security condition is not met, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"failWith")," attribute\nto set a default value."),(0,o.kt)(i.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"php8",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"#[Query]\n#[Security(expression: \"is_granted('CAN_SEE_MARGIN', this)\", failWith: null)]\npublic function getMargin(): float\n{\n    // ...\n}\n"))),(0,o.kt)(l.Z,{value:"php7",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * @Field\n * @Security(\"is_granted('CAN_SEE_MARGIN', this)\", failWith=null)\n */\npublic function getMargin(): float\n{\n    // ...\n}\n")))),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"failWith")," attribute behaves just like the ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/authentication-authorization#not-throwing-errors"},(0,o.kt)("inlineCode",{parentName:"a"},"@FailWith")," annotation"),"\nbut for a given ",(0,o.kt)("inlineCode",{parentName:"p"},"@Security")," annotation."),(0,o.kt)("p",null,"You cannot use the ",(0,o.kt)("inlineCode",{parentName:"p"},"failWith")," attribute along ",(0,o.kt)("inlineCode",{parentName:"p"},"statusCode")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"message")," attributes."),(0,o.kt)("h2",{id:"accessing-the-user"},"Accessing the user"),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"user")," variable to access the currently logged user.\nYou can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"is_logged()")," function to check if a user is logged or not."),(0,o.kt)(i.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"php8",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'#[Query]\n#[Security("is_logged() && user.age > 18")]\npublic function getNSFWImages(): array\n{\n    // ...\n}\n'))),(0,o.kt)(l.Z,{value:"php7",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * @Query\n * @Security("is_logged() && user.age > 18")\n */\npublic function getNSFWImages(): array\n{\n    // ...\n}\n')))),(0,o.kt)("h2",{id:"accessing-the-current-object"},"Accessing the current object"),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," variable to access any (public) property / method of the current class."),(0,o.kt)(i.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"php8",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'class Post {\n    #[Field]\n    #[Security("this.canAccessBody(user)")]\n    public function getBody(): array\n    {\n        // ...\n    }\n\n    public function canAccessBody(User $user): bool\n    {\n        // Some custom logic here\n    }\n}\n'))),(0,o.kt)(l.Z,{value:"php7",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'class Post {\n    /**\n     * @Field\n     * @Security("this.canAccessBody(user)")\n     */\n    public function getBody(): array\n    {\n        // ...\n    }\n\n    public function canAccessBody(User $user): bool\n    {\n        // Some custom logic here\n    }\n}\n')))),(0,o.kt)("h2",{id:"available-scope"},"Available scope"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"@Security")," annotation can be used in any query, mutation or field, so anywhere you have a ",(0,o.kt)("inlineCode",{parentName:"p"},"@Query"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"@Mutation"),"\nor ",(0,o.kt)("inlineCode",{parentName:"p"},"@Field")," annotation."),(0,o.kt)("h2",{id:"how-to-restrict-access-to-a-given-resource"},"How to restrict access to a given resource"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"is_granted")," method can be used to restrict access to a specific resource."),(0,o.kt)(i.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"php8",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"#[Security(\"is_granted('POST_SHOW', post)\")]\n"))),(0,o.kt)(l.Z,{value:"php7",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"@Security(\"is_granted('POST_SHOW', post)\")\n")))),(0,o.kt)("p",null,"If you are wondering how to configure these fine-grained permissions, this is not something that GraphQLite handles\nitself. Instead, this depends on the framework you are using."),(0,o.kt)("p",null,"If you are using Symfony, you will ",(0,o.kt)("a",{parentName:"p",href:"https://symfony.com/doc/current/security/voters.html"},"create a custom voter"),"."),(0,o.kt)("p",null,"If you are using Laravel, you will ",(0,o.kt)("a",{parentName:"p",href:"https://laravel.com/docs/6.x/authorization"},"create a Gate or a Policy"),"."),(0,o.kt)("p",null,"If you are using another framework, you need to know that the ",(0,o.kt)("inlineCode",{parentName:"p"},"is_granted")," function simply forwards the call to\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"isAllowed")," method of the configured ",(0,o.kt)("inlineCode",{parentName:"p"},"AuthorizationSerice"),". See ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/implementing-security"},"Connecting GraphQLite to your framework's security module\n")," for more details"))}h.isMDXComponent=!0}}]);