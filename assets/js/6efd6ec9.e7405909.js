"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7870],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,p=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(t),d=r,h=m["".concat(l,".").concat(d)]||m[d]||c[d]||p;return t?a.createElement(h,i(i({ref:n},u),{},{components:t})):a.createElement(h,i({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var p=t.length,i=new Array(p);i[0]=m;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<p;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},35380:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var a=t(87462),r=t(63366),p=(t(67294),t(3905)),i=["components"],o={id:"type_mapping",title:"Type mapping",sidebar_label:"Type mapping",original_id:"type_mapping"},l=void 0,s={unversionedId:"type_mapping",id:"version-4.0/type_mapping",title:"Type mapping",description:"As explained in the queries section, the job of GraphQLite is to create GraphQL types from PHP types.",source:"@site/versioned_docs/version-4.0/type_mapping.mdx",sourceDirName:".",slug:"/type_mapping",permalink:"/docs/4.0/type_mapping",editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.0/type_mapping.mdx",tags:[],version:"4.0",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1647893690,formattedLastUpdatedAt:"3/21/2022",frontMatter:{id:"type_mapping",title:"Type mapping",sidebar_label:"Type mapping",original_id:"type_mapping"},sidebar:"version-4.0/docs",previous:{title:"Mutations",permalink:"/docs/4.0/mutations"},next:{title:"Autowiring services",permalink:"/docs/4.0/autowiring"}},u=[{value:"Scalar mapping",id:"scalar-mapping",children:[],level:2},{value:"Class mapping",id:"class-mapping",children:[],level:2},{value:"Array mapping",id:"array-mapping",children:[],level:2},{value:"ID mapping",id:"id-mapping",children:[{value:"Force the outputType",id:"force-the-outputtype",children:[],level:3},{value:"ID class",id:"id-class",children:[],level:3}],level:2},{value:"Date mapping",id:"date-mapping",children:[],level:2},{value:"Union types",id:"union-types",children:[],level:2},{value:"Enum types",id:"enum-types",children:[],level:2},{value:"More scalar types",id:"more-scalar-types",children:[],level:2}],c={toc:u};function m(e){var n=e.components,t=(0,r.Z)(e,i);return(0,p.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"As explained in the ",(0,p.kt)("a",{parentName:"p",href:"/docs/4.0/queries"},"queries")," section, the job of GraphQLite is to create GraphQL types from PHP types."),(0,p.kt)("h2",{id:"scalar-mapping"},"Scalar mapping"),(0,p.kt)("p",null,"Scalar PHP types can be type-hinted to the corresponding GraphQL types:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"string")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"int")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"bool")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"float"))),(0,p.kt)("p",null,"For instance:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Controller;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Query;\n\nclass MyController\n{\n    /**\n     * @Query\n     */\n    public function hello(string $name): string\n    {\n        return 'Hello ' . $name;\n    }\n}\n")),(0,p.kt)("h2",{id:"class-mapping"},"Class mapping"),(0,p.kt)("p",null,"When returning a PHP class in a query, you must annotate this class using ",(0,p.kt)("inlineCode",{parentName:"p"},"@Type")," and ",(0,p.kt)("inlineCode",{parentName:"p"},"@Field")," annotations:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Entities;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Field;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Type;\n\n/**\n * @Type()\n */\nclass Product\n{\n    // ...\n\n    /**\n     * @Field()\n     */\n    public function getName(): string\n    {\n        return $this->name;\n    }\n\n    /**\n     * @Field()\n     */\n    public function getPrice(): ?float\n    {\n        return $this->price;\n    }\n}\n")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Note:")," The GraphQL output type name generated by GraphQLite is equal to the class name of the PHP class. So if your\nPHP class is ",(0,p.kt)("inlineCode",{parentName:"p"},"App\\Entities\\Product"),', then the GraphQL type will be named "Product".'),(0,p.kt)("p",null,'In case you have several types with the same class name in different namespaces, you will face a naming collision.\nHopefully, you can force the name of the GraphQL output type using the "name" attribute:'),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * @Type(name="MyProduct")\n */\nclass Product { /* ... */ }\n')),(0,p.kt)("div",{class:"alert alert--info"},"You can also put a ",(0,p.kt)("a",{href:"inheritance-interfaces#mapping-interfaces"},(0,p.kt)("code",null,"@Type")," annotation on a PHP interface to map your code to a GraphQL interface"),"."),(0,p.kt)("h2",{id:"array-mapping"},"Array mapping"),(0,p.kt)("p",null,"You can type-hint against arrays (or iterators) as long as you add a detailed ",(0,p.kt)("inlineCode",{parentName:"p"},"@return")," statement in the PHPDoc."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * @Query\n * @return User[] <=== we specify that the array is an array of User objects.\n */\npublic function users(int $limit, int $offset): array\n{\n    // Some code that returns an array of "users".\n}\n')),(0,p.kt)("h2",{id:"id-mapping"},"ID mapping"),(0,p.kt)("p",null,"GraphQL comes with a native ",(0,p.kt)("inlineCode",{parentName:"p"},"ID")," type. PHP has no such type."),(0,p.kt)("p",null,"There are two ways with GraphQLite to handle such type."),(0,p.kt)("h3",{id:"force-the-outputtype"},"Force the outputType"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * @Field(outputType="ID")\n */\npublic function getId(): string\n{\n    // ...\n}\n')),(0,p.kt)("p",null,"Using the ",(0,p.kt)("inlineCode",{parentName:"p"},"outputType")," attribute of the ",(0,p.kt)("inlineCode",{parentName:"p"},"@Field")," annotation, you can force the output type to ",(0,p.kt)("inlineCode",{parentName:"p"},"ID"),"."),(0,p.kt)("p",null,"You can learn more about forcing output types in the ",(0,p.kt)("a",{parentName:"p",href:"/docs/4.0/custom-types"},"custom types section"),"."),(0,p.kt)("h3",{id:"id-class"},"ID class"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\GraphQLite\\Types\\ID;\n\n/**\n * @Field\n */\npublic function getId(): ID\n{\n    // ...\n}\n")),(0,p.kt)("p",null,"Note that you can also use the ",(0,p.kt)("inlineCode",{parentName:"p"},"ID")," class as an input type:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\GraphQLite\\Types\\ID;\n\n/**\n * @Mutation\n */\npublic function save(ID $id, string $name): Product\n{\n    // ...\n}\n")),(0,p.kt)("h2",{id:"date-mapping"},"Date mapping"),(0,p.kt)("p",null,"Out of the box, GraphQL does not have a ",(0,p.kt)("inlineCode",{parentName:"p"},"DateTime")," type, but we took the liberty to add one, with sensible defaults."),(0,p.kt)("p",null,"When used as an output type, ",(0,p.kt)("inlineCode",{parentName:"p"},"DateTimeImmutable")," or ",(0,p.kt)("inlineCode",{parentName:"p"},"DateTimeInterface")," PHP classes are\nautomatically mapped to this ",(0,p.kt)("inlineCode",{parentName:"p"},"DateTime")," GraphQL type."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * @Field\n */\npublic function getDate(): \\DateTimeInterface\n{\n    return $this->date;\n}\n")),(0,p.kt)("p",null,"The ",(0,p.kt)("inlineCode",{parentName:"p"},"date")," field will be of type ",(0,p.kt)("inlineCode",{parentName:"p"},"DateTime"),". In the returned JSON response to a query, the date is formatted as a string\nin the ",(0,p.kt)("strong",{parentName:"p"},"ISO8601")," format (aka ATOM format)."),(0,p.kt)("div",{class:"alert alert--danger"},"PHP ",(0,p.kt)("code",null,"DateTime")," type is not supported."),(0,p.kt)("h2",{id:"union-types"},"Union types"),(0,p.kt)("p",null,"You can create a GraphQL union type ",(0,p.kt)("em",{parentName:"p"},"on the fly")," using the pipe ",(0,p.kt)("inlineCode",{parentName:"p"},"|")," operator in the PHPDoc:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * @Query\n * @return Company|Contact <== can return a company OR a contact.\n */\npublic function companyOrContact(int $id)\n{\n    // Some code that returns a company or a contact.\n}\n")),(0,p.kt)("h2",{id:"enum-types"},"Enum types"),(0,p.kt)("small",null,"Available in GraphQLite 4.0+"),(0,p.kt)("p",null,"PHP has no native support for enum types. Hopefully, there are a number of PHP libraries that emulate enums in PHP.\nThe most commonly used library is ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/myclabs/php-enum"},"myclabs/php-enum")," and GraphQLite comes with\nnative support for it."),(0,p.kt)("p",null,"You will first need to install ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/myclabs/php-enum"},"myclabs/php-enum"),":"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"$ composer require myclabs/php-enum\n")),(0,p.kt)("p",null,"Now, any class extending the ",(0,p.kt)("inlineCode",{parentName:"p"},"MyCLabs\\Enum\\Enum")," class will be mapped to a GraphQL enum:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},"use MyCLabs\\Enum\\Enum;\n\nclass StatusEnum extends Enum\n{\n    private const ON = 'on';\n    private const OFF = 'off';\n    private const PENDING = 'pending';\n}\n")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * @Query\n * @return User[]\n */\npublic function users(StatusEnum $status): array\n{\n    if ($status == StatusEnum::ON()) {\n        // Note that the "magic" ON() method returns an instance of the StatusEnum class.\n        // Also, note that we are comparing this instance using "==" (using "===" would fail as we have 2 different instances here)\n        // ...\n    }\n    // ...\n}\n')),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"query users($status: StatusEnum!) {}\n    users(status: $status) {\n        id\n    }\n}\n")),(0,p.kt)("p",null,"By default, the name of the GraphQL enum type will be the name of the class. If you have a naming conflict (two classes\nthat live in different namespaces with the same class name), you can solve it using the ",(0,p.kt)("inlineCode",{parentName:"p"},"@EnumType")," annotation:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},'use TheCodingMachine\\GraphQLite\\Annotations\\EnumType;\n\n/**\n * @EnumType(name="UserStatus")\n */\nclass StatusEnum extends Enum\n{\n    // ...\n}\n')),(0,p.kt)("div",{class:"alert alert--info"},'There are many enumeration library in PHP and you might be using another library. If you want to add support for your own library, this is not extremely difficult to do. You need to register a custom "RootTypeMapper" with GraphQLite. You can learn more about ',(0,p.kt)("em",null,"type mappers")," in the ",(0,p.kt)("a",{href:"internals"},'"internals" documentation'),"and ",(0,p.kt)("a",{href:"https://github.com/thecodingmachine/graphqlite/blob/master/src/Mappers/Root/MyCLabsEnumTypeMapper.php"},"copy/paste and adapt the root type mapper used for myclabs/php-enum"),"."),(0,p.kt)("h2",{id:"more-scalar-types"},"More scalar types"),(0,p.kt)("small",null,"Available in GraphQLite 4.0+"),(0,p.kt)("p",null,'GraphQL supports "custom" scalar types. GraphQLite supports adding more GraphQL scalar types.'),(0,p.kt)("p",null,"If you need more types, you can check the ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/thecodingmachine/graphqlite-misc-types"},"GraphQLite Misc. Types library"),".\nIt adds support for more scalar types out of the box in GraphQLite."),(0,p.kt)("p",null,"Or if you have some special needs, ",(0,p.kt)("a",{parentName:"p",href:"custom-types#registering-a-custom-scalar-type-advanced"},"you can develop your own scalar types"),"."))}m.isMDXComponent=!0}}]);