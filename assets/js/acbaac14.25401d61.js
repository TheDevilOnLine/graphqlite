"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7582],{58215:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(87462),r=n(67294),i=n(72389),o=n(79443);var l=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(83039),u=n(86010),p="tabItem_vU9c";function c(e){var t,n,a,i=e.lazy,o=e.block,c=e.defaultValue,d=e.values,h=e.groupId,m=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=d?d:g.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),k=(0,s.lx)(y,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var f=null===c?c:null!=(t=null!=c?c:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=g[0])?void 0:a.props.value;if(null!==f&&!y.some((function(e){return e.value===f})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=l(),b=v.tabGroupChoices,N=v.setTabGroupChoices,T=(0,r.useState)(f),P=T[0],S=T[1],x=[],C=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var _=b[h];null!=_&&_!==P&&y.some((function(e){return e.value===_}))&&S(_)}var I=function(e){var t=e.currentTarget,n=x.indexOf(t),a=y[n].value;a!==P&&(C(t),S(a),null!=h&&N(h,a))},w=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=x.indexOf(e.currentTarget)+1;n=x[a]||x[0];break;case"ArrowLeft":var r=x.indexOf(e.currentTarget)-1;n=x[r]||x[x.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":o},m)},y.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:P===t?0:-1,"aria-selected":P===t,className:(0,u.Z)("tabs__item",p,{"tabs__item--active":P===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:w,onFocus:I,onClick:I},null!=n?n:t)}))),i?(0,r.cloneElement)(g.filter((function(e){return e.props.value===P}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==P})}))))}function d(e){var t=(0,i.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},50047:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return m}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=n(55064),l=n(58215),s=["components"],u={id:"fine-grained-security",title:"Fine grained security",sidebar_label:"Fine grained security"},p=void 0,c={unversionedId:"fine-grained-security",id:"version-4.3/fine-grained-security",isDocsHomePage:!1,title:"Fine grained security",description:"If the @Logged and @Right annotations are not",source:"@site/versioned_docs/version-4.3/fine-grained-security.mdx",sourceDirName:".",slug:"/fine-grained-security",permalink:"/docs/4.3/fine-grained-security",editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.3/fine-grained-security.mdx",tags:[],version:"4.3",lastUpdatedBy:"Jacob Thomason",lastUpdatedAt:1645552852,formattedLastUpdatedAt:"2/22/2022",frontMatter:{id:"fine-grained-security",title:"Fine grained security",sidebar_label:"Fine grained security"},sidebar:"version-4.3/docs",previous:{title:"Authentication and authorization",permalink:"/docs/4.3/authentication-authorization"},next:{title:"Connecting security to your framework",permalink:"/docs/4.3/implementing-security"}},d=[{value:"Using the @Security annotation",id:"using-the-security-annotation",children:[],level:2},{value:"The <code>is_granted</code> function",id:"the-is_granted-function",children:[],level:2},{value:"Accessing method parameters",id:"accessing-method-parameters",children:[],level:2},{value:"Setting HTTP code and error message",id:"setting-http-code-and-error-message",children:[],level:2},{value:"Setting a default value",id:"setting-a-default-value",children:[],level:2},{value:"Accessing the user",id:"accessing-the-user",children:[],level:2},{value:"Accessing the current object",id:"accessing-the-current-object",children:[],level:2},{value:"Available scope",id:"available-scope",children:[],level:2},{value:"How to restrict access to a given resource",id:"how-to-restrict-access-to-a-given-resource",children:[],level:2}],h={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If the ",(0,i.kt)("a",{parentName:"p",href:"/docs/4.3/authentication-authorization#logged-and-right-annotations"},(0,i.kt)("inlineCode",{parentName:"a"},"@Logged")," and ",(0,i.kt)("inlineCode",{parentName:"a"},"@Right")," annotations")," are not\ngranular enough for your needs, you can use the advanced ",(0,i.kt)("inlineCode",{parentName:"p"},"@Security")," annotation."),(0,i.kt)("p",null,"Using the ",(0,i.kt)("inlineCode",{parentName:"p"},"@Security")," annotation, you can write an ",(0,i.kt)("em",{parentName:"p"},"expression")," that can contain custom logic. For instance:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Check that a user can access a given resource"),(0,i.kt)("li",{parentName:"ul"},"Check that a user has one right or another right"),(0,i.kt)("li",{parentName:"ul"},"...")),(0,i.kt)("h2",{id:"using-the-security-annotation"},"Using the @Security annotation"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"@Security")," annotation is very flexible: it allows you to pass an expression that can contains custom logic:"),(0,i.kt)(o.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"php8",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\GraphQLite\\Annotations\\Security;\n\n// ...\n\n#[Query]\n#[Security(\"is_granted('ROLE_ADMIN') or is_granted('POST_SHOW', post)\")]\npublic function getPost(Post $post): array\n{\n    // ...\n}\n"))),(0,i.kt)(l.Z,{value:"php7",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\GraphQLite\\Annotations\\Security;\n\n// ...\n\n/**\n * @Query\n * @Security(\"is_granted('ROLE_ADMIN') or is_granted('POST_SHOW', post)\")\n */\npublic function getPost(Post $post): array\n{\n    // ...\n}\n")))),(0,i.kt)("p",null,"The ",(0,i.kt)("em",{parentName:"p"},"expression")," defined in the ",(0,i.kt)("inlineCode",{parentName:"p"},"@Security")," annotation must conform to ",(0,i.kt)("a",{parentName:"p",href:"https://symfony.com/doc/4.4/components/expression_language/syntax.html"},"Symfony's Expression Language syntax")),(0,i.kt)("div",{class:"alert alert--info"},"If you are a Symfony user, you might already be used to the ",(0,i.kt)("code",null,"@Security")," annotation. Most of the inspiration of this annotation comes from Symfony. Warning though! GraphQLite's ",(0,i.kt)("code",null,"@Security")," annotation and Symfony's ",(0,i.kt)("code",null,"@Security")," annotation are slightly different. Especially, the two annotations do not live in the same namespace!"),(0,i.kt)("h2",{id:"the-is_granted-function"},"The ",(0,i.kt)("inlineCode",{parentName:"h2"},"is_granted")," function"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"is_granted")," function to check if a user has a special right."),(0,i.kt)(o.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"php8",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"#[Security(\"is_granted('ROLE_ADMIN')\")]\n"))),(0,i.kt)(l.Z,{value:"php7",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"@Security(\"is_granted('ROLE_ADMIN')\")\n")))),(0,i.kt)("p",null,"is similar to"),(0,i.kt)(o.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"php8",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'#[Right("ROLE_ADMIN")]\n'))),(0,i.kt)(l.Z,{value:"php7",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'@Right("ROLE_ADMIN")\n')))),(0,i.kt)("p",null,"In addition, the ",(0,i.kt)("inlineCode",{parentName:"p"},"is_granted"),' function accepts a second optional parameter: the "scope" of the right.'),(0,i.kt)(o.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"php8",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"#[Query]\n#[Security(\"is_granted('POST_SHOW', post)\")]\npublic function getPost(Post $post): array\n{\n    // ...\n}\n"))),(0,i.kt)(l.Z,{value:"php7",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * @Query\n * @Security(\"is_granted('POST_SHOW', post)\")\n */\npublic function getPost(Post $post): array\n{\n    // ...\n}\n")))),(0,i.kt)("p",null,"In the example above, the ",(0,i.kt)("inlineCode",{parentName:"p"},"getPost")," method can be called only if the logged user has the 'POST_SHOW' permission on the\n",(0,i.kt)("inlineCode",{parentName:"p"},"$post")," object. You can notice that the ",(0,i.kt)("inlineCode",{parentName:"p"},"$post")," object comes from the parameters."),(0,i.kt)("h2",{id:"accessing-method-parameters"},"Accessing method parameters"),(0,i.kt)("p",null,"All parameters passed to the method can be accessed in the ",(0,i.kt)("inlineCode",{parentName:"p"},"@Security")," expression."),(0,i.kt)(o.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"php8",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'#[Query]\n#[Security(expression: "startDate < endDate", statusCode: 400, message: "End date must be after start date")]\npublic function getPosts(DateTimeImmutable $startDate, DateTimeImmutable $endDate): array\n{\n    // ...\n}\n'))),(0,i.kt)(l.Z,{value:"php7",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * @Query\n * @Security("startDate < endDate", statusCode=400, message="End date must be after start date")\n */\npublic function getPosts(DateTimeImmutable $startDate, DateTimeImmutable $endDate): array\n{\n    // ...\n}\n')))),(0,i.kt)("p",null,"In the example above, we tweak a bit the Security annotation purpose to do simple input validation."),(0,i.kt)("h2",{id:"setting-http-code-and-error-message"},"Setting HTTP code and error message"),(0,i.kt)("p",null,"You can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"statusCode")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"message")," attributes to set the HTTP code and GraphQL error message."),(0,i.kt)(o.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"php8",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'#[Query]\n#[Security(expression: "is_granted(\'POST_SHOW\', post)", statusCode: 404, message: "Post not found (let\'s pretend the post does not exists!)")]\npublic function getPost(Post $post): array\n{\n    // ...\n}\n'))),(0,i.kt)(l.Z,{value:"php7",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * @Query\n * @Security("is_granted(\'POST_SHOW\', post)", statusCode=404, message="Post not found (let\'s pretend the post does not exists!)")\n */\npublic function getPost(Post $post): array\n{\n    // ...\n}\n')))),(0,i.kt)("p",null,"Note: since a single GraphQL call contain many errors, 2 errors might have conflicting HTTP status code.\nThe resulting status code is up to the GraphQL middleware you use. Most of the time, the status code with the\nhigher error code will be returned."),(0,i.kt)("h2",{id:"setting-a-default-value"},"Setting a default value"),(0,i.kt)("p",null,"If you do not want an error to be thrown when the security condition is not met, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"failWith")," attribute\nto set a default value."),(0,i.kt)(o.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"php8",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"#[Query]\n#[Security(expression: \"is_granted('CAN_SEE_MARGIN', this)\", failWith: null)]\npublic function getMargin(): float\n{\n    // ...\n}\n"))),(0,i.kt)(l.Z,{value:"php7",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * @Field\n * @Security(\"is_granted('CAN_SEE_MARGIN', this)\", failWith=null)\n */\npublic function getMargin(): float\n{\n    // ...\n}\n")))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"failWith")," attribute behaves just like the ",(0,i.kt)("a",{parentName:"p",href:"/docs/4.3/authentication-authorization#not-throwing-errors"},(0,i.kt)("inlineCode",{parentName:"a"},"@FailWith")," annotation"),"\nbut for a given ",(0,i.kt)("inlineCode",{parentName:"p"},"@Security")," annotation."),(0,i.kt)("p",null,"You cannot use the ",(0,i.kt)("inlineCode",{parentName:"p"},"failWith")," attribute along ",(0,i.kt)("inlineCode",{parentName:"p"},"statusCode")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"message")," attributes."),(0,i.kt)("h2",{id:"accessing-the-user"},"Accessing the user"),(0,i.kt)("p",null,"You can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"user")," variable to access the currently logged user.\nYou can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"is_logged()")," function to check if a user is logged or not."),(0,i.kt)(o.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"php8",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'#[Query]\n#[Security("is_logged() && user.age > 18")]\npublic function getNSFWImages(): array\n{\n    // ...\n}\n'))),(0,i.kt)(l.Z,{value:"php7",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * @Query\n * @Security("is_logged() && user.age > 18")\n */\npublic function getNSFWImages(): array\n{\n    // ...\n}\n')))),(0,i.kt)("h2",{id:"accessing-the-current-object"},"Accessing the current object"),(0,i.kt)("p",null,"You can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"this")," variable to access any (public) property / method of the current class."),(0,i.kt)(o.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"php8",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'class Post {\n    #[Field]\n    #[Security("this.canAccessBody(user)")]\n    public function getBody(): array\n    {\n        // ...\n    }\n\n    public function canAccessBody(User $user): bool\n    {\n        // Some custom logic here\n    }\n}\n'))),(0,i.kt)(l.Z,{value:"php7",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'class Post {\n    /**\n     * @Field\n     * @Security("this.canAccessBody(user)")\n     */\n    public function getBody(): array\n    {\n        // ...\n    }\n\n    public function canAccessBody(User $user): bool\n    {\n        // Some custom logic here\n    }\n}\n')))),(0,i.kt)("h2",{id:"available-scope"},"Available scope"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"@Security")," annotation can be used in any query, mutation or field, so anywhere you have a ",(0,i.kt)("inlineCode",{parentName:"p"},"@Query"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"@Mutation"),"\nor ",(0,i.kt)("inlineCode",{parentName:"p"},"@Field")," annotation."),(0,i.kt)("h2",{id:"how-to-restrict-access-to-a-given-resource"},"How to restrict access to a given resource"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"is_granted")," method can be used to restrict access to a specific resource."),(0,i.kt)(o.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"php8",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"#[Security(\"is_granted('POST_SHOW', post)\")]\n"))),(0,i.kt)(l.Z,{value:"php7",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"@Security(\"is_granted('POST_SHOW', post)\")\n")))),(0,i.kt)("p",null,"If you are wondering how to configure these fine-grained permissions, this is not something that GraphQLite handles\nitself. Instead, this depends on the framework you are using."),(0,i.kt)("p",null,"If you are using Symfony, you will ",(0,i.kt)("a",{parentName:"p",href:"https://symfony.com/doc/current/security/voters.html"},"create a custom voter"),"."),(0,i.kt)("p",null,"If you are using Laravel, you will ",(0,i.kt)("a",{parentName:"p",href:"https://laravel.com/docs/6.x/authorization"},"create a Gate or a Policy"),"."),(0,i.kt)("p",null,"If you are using another framework, you need to know that the ",(0,i.kt)("inlineCode",{parentName:"p"},"is_granted")," function simply forwards the call to\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"isAllowed")," method of the configured ",(0,i.kt)("inlineCode",{parentName:"p"},"AuthorizationSerice"),". See ",(0,i.kt)("a",{parentName:"p",href:"/docs/4.3/implementing-security"},"Connecting GraphQLite to your framework's security module\n")," for more details"))}m.isMDXComponent=!0}}]);