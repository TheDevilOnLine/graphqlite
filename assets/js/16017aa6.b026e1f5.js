"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5207],{58215:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:l},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(87462),l=n(67294),i=n(72389),r=n(79443);var o=function(){var e=(0,l.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=n(83039),p=n(86010),s="tabItem_vU9c";function c(e){var t,n,a,i=e.lazy,r=e.block,c=e.defaultValue,d=e.values,m=e.groupId,h=e.className,f=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=d?d:f.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),g=(0,u.lx)(y,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===c?c:null!=(t=null!=c?c:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=f[0])?void 0:a.props.value;if(null!==k&&!y.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=o(),v=b.tabGroupChoices,I=b.setTabGroupChoices,T=(0,l.useState)(k),P=T[0],$=T[1],N=[],w=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var C=v[m];null!=C&&C!==P&&y.some((function(e){return e.value===C}))&&$(C)}var L=function(e){var t=e.currentTarget,n=N.indexOf(t),a=y[n].value;a!==P&&(w(t),$(a),null!=m&&I(m,a))},F=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=N.indexOf(e.currentTarget)+1;n=N[a]||N[0];break;case"ArrowLeft":var l=N.indexOf(e.currentTarget)-1;n=N[l]||N[N.length-1]}null==(t=n)||t.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":r},h)},y.map((function(e){var t=e.value,n=e.label;return l.createElement("li",{role:"tab",tabIndex:P===t?0:-1,"aria-selected":P===t,className:(0,p.Z)("tabs__item",s,{"tabs__item--active":P===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:F,onFocus:L,onClick:L},null!=n?n:t)}))),i?(0,l.cloneElement)(f.filter((function(e){return e.props.value===P}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==P})}))))}function d(e){var t=(0,i.Z)();return l.createElement(c,(0,a.Z)({key:String(t)},e))}},57194:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return h}});var a=n(87462),l=n(63366),i=(n(67294),n(3905)),r=n(55064),o=n(58215),u=["components"],p={id:"input-types",title:"Input types",sidebar_label:"Input types"},s=void 0,c={unversionedId:"input-types",id:"version-4.3/input-types",isDocsHomePage:!1,title:"Input types",description:"Let's assume you are developing an API that returns a list of cities around a location.",source:"@site/versioned_docs/version-4.3/input-types.mdx",sourceDirName:".",slug:"/input-types",permalink:"/docs/4.3/input-types",editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.3/input-types.mdx",tags:[],version:"4.3",lastUpdatedBy:"Jacob Thomason",lastUpdatedAt:1645552852,formattedLastUpdatedAt:"2/22/2022",frontMatter:{id:"input-types",title:"Input types",sidebar_label:"Input types"},sidebar:"version-4.3/docs",previous:{title:"External type declaration",permalink:"/docs/4.3/external-type-declaration"},next:{title:"Inheritance and interfaces",permalink:"/docs/4.3/inheritance-interfaces"}},d=[{value:"Factory",id:"factory",children:[{value:"Specifying the input type name",id:"specifying-the-input-type-name",children:[],level:3},{value:"Forcing an input type",id:"forcing-an-input-type",children:[],level:3},{value:"Declaring several input types for the same PHP class",id:"declaring-several-input-types-for-the-same-php-class",children:[],level:3},{value:"Ignoring some parameters",id:"ignoring-some-parameters",children:[],level:3}],level:2},{value:"@Input Annotation",id:"input-annotation",children:[{value:"Multiple input types per one class",id:"multiple-input-types-per-one-class",children:[],level:3}],level:2}],m={toc:d};function h(e){var t=e.components,n=(0,l.Z)(e,u);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Let's assume you are developing an API that returns a list of cities around a location."),(0,i.kt)("p",null,"Your GraphQL query might look like this:"),(0,i.kt)(r.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"php8",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"class MyController\n{\n    /**\n     * @return City[]\n     */\n    #[Query]\n    public function getCities(Location $location, float $radius): array\n    {\n        // Some code that returns an array of cities.\n    }\n}\n\n// Class Location is a simple value-object.\nclass Location\n{\n    private $latitude;\n    private $longitude;\n\n    public function __construct(float $latitude, float $longitude)\n    {\n        $this->latitude = $latitude;\n        $this->longitude = $longitude;\n    }\n\n    public function getLatitude(): float\n    {\n        return $this->latitude;\n    }\n\n    public function getLongitude(): float\n    {\n        return $this->longitude;\n    }\n}\n"))),(0,i.kt)(o.Z,{value:"php7",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"class MyController\n{\n    /**\n     * @Query\n     * @return City[]\n     */\n    public function getCities(Location $location, float $radius): array\n    {\n        // Some code that returns an array of cities.\n    }\n}\n\n// Class Location is a simple value-object.\nclass Location\n{\n    private $latitude;\n    private $longitude;\n\n    public function __construct(float $latitude, float $longitude)\n    {\n        $this->latitude = $latitude;\n        $this->longitude = $longitude;\n    }\n\n    public function getLatitude(): float\n    {\n        return $this->latitude;\n    }\n\n    public function getLongitude(): float\n    {\n        return $this->longitude;\n    }\n}\n")))),(0,i.kt)("p",null,"If you try to run this code, you will get the following error:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'CannotMapTypeException: cannot map class "Location" to a known GraphQL input type. Check your TypeMapper configuration.\n')),(0,i.kt)("p",null,"You are running into this error because GraphQLite does not know how to handle the ",(0,i.kt)("inlineCode",{parentName:"p"},"Location")," object."),(0,i.kt)("p",null,"In GraphQL, an object passed in parameter of a query or mutation (or any field) is called an ",(0,i.kt)("strong",{parentName:"p"},"Input Type"),"."),(0,i.kt)("p",null,"There are two ways for declaring that type, in GraphQLite: using ",(0,i.kt)("strong",{parentName:"p"},"Factory")," or annotating the class with ",(0,i.kt)("inlineCode",{parentName:"p"},"@Input"),"."),(0,i.kt)("h2",{id:"factory"},"Factory"),(0,i.kt)("p",null,"A ",(0,i.kt)("strong",{parentName:"p"},"Factory")," is a method that takes in parameter all the fields of the input type and return an object."),(0,i.kt)("p",null,"Here is an example of factory:"),(0,i.kt)(r.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"php8",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"class MyFactory\n{\n    /**\n     * The Factory annotation will create automatically a LocationInput input type in GraphQL.\n     */\n    #[Factory]\n    public function createLocation(float $latitude, float $longitude): Location\n    {\n        return new Location($latitude, $longitude);\n    }\n}\n"))),(0,i.kt)(o.Z,{value:"php7",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"class MyFactory\n{\n    /**\n     * The Factory annotation will create automatically a LocationInput input type in GraphQL.\n     *\n     * @Factory()\n     */\n    public function createLocation(float $latitude, float $longitude): Location\n    {\n        return new Location($latitude, $longitude);\n    }\n}\n")))),(0,i.kt)("p",null,"and now, you can run query like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"query {\n  getCities(location: {\n              latitude: 45.0,\n              longitude: 0.0,\n            },\n            radius: 42)\n  {\n    id,\n    name\n  }\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Factories must be declared with the ",(0,i.kt)("strong",{parentName:"li"},"@Factory")," annotation."),(0,i.kt)("li",{parentName:"ul"},"The parameters of the factories are the field of the GraphQL input type")),(0,i.kt)("p",null,"A few important things to notice:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The container MUST contain the factory class. The identifier of the factory MUST be the fully qualified class name of the class that contains the factory.\nThis is usually already the case if you are using a container with auto-wiring capabilities"),(0,i.kt)("li",{parentName:"ul"},"We recommend that you put the factories in the same directories as the types.")),(0,i.kt)("h3",{id:"specifying-the-input-type-name"},"Specifying the input type name"),(0,i.kt)("p",null,"The GraphQL input type name is derived from the return type of the factory."),(0,i.kt)("p",null,'Given the factory below, the return type is "Location", therefore, the GraphQL input type will be named "LocationInput".'),(0,i.kt)(r.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"php8",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"#[Factory]\npublic function createLocation(float $latitude, float $longitude): Location\n{\n    return new Location($latitude, $longitude);\n}\n"))),(0,i.kt)(o.Z,{value:"php7",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * @Factory()\n */\npublic function createLocation(float $latitude, float $longitude): Location\n{\n    return new Location($latitude, $longitude);\n}\n")))),(0,i.kt)("p",null,'In case you want to override the input type name, you can use the "name" attribute of the @Factory annotation:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * @Factory(name="MyNewInputName", default=true)\n */\n')),(0,i.kt)("p",null,'Note that you need to add the "default" attribute is you want your factory to be used by default (more on this in\nthe next chapter).'),(0,i.kt)("p",null,"Unless you want to have several factories for the same PHP class, the input type name will be completely transparent\nto you, so there is no real reason to customize it."),(0,i.kt)("h3",{id:"forcing-an-input-type"},"Forcing an input type"),(0,i.kt)("p",null,"You can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"@UseInputType")," annotation to force an input type of a parameter."),(0,i.kt)("p",null,'Let\'s say you want to force a parameter to be of type "ID", you can use this:'),(0,i.kt)(r.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"php8",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'#[Factory]\n#[UseInputType(for: "$id", inputType:"ID!")]\npublic function getProductById(string $id): Product\n{\n    return $this->productRepository->findById($id);\n}\n'))),(0,i.kt)(o.Z,{value:"php7",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * @Factory()\n * @UseInputType(for="$id", inputType="ID!")\n */\npublic function getProductById(string $id): Product\n{\n    return $this->productRepository->findById($id);\n}\n')))),(0,i.kt)("h3",{id:"declaring-several-input-types-for-the-same-php-class"},"Declaring several input types for the same PHP class"),(0,i.kt)("small",null,"Available in GraphQLite 4.0+"),(0,i.kt)("p",null,"There are situations where a given PHP class might use one factory or another depending on the context."),(0,i.kt)("p",null,"This is often the case when your objects map database entities.\nIn these cases, you can use combine the use of ",(0,i.kt)("inlineCode",{parentName:"p"},"@UseInputType")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"@Factory")," annotation to achieve your goal."),(0,i.kt)("p",null,"Here is an annotated sample:"),(0,i.kt)(r.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"php8",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * This class contains 2 factories to create Product objects.\n * The "getProduct" method is used by default to map "Product" classes.\n * The "createProduct" method will generate another input type named "CreateProductInput"\n */\nclass ProductFactory\n{\n    // ...\n\n    /**\n     * This factory will be used by default to map "Product" classes.\n     */\n    #[Factory(name: "ProductRefInput", default: true)]\n    public function getProduct(string $id): Product\n    {\n        return $this->productRepository->findById($id);\n    }\n    /**\n     * We specify a name for this input type explicitly.\n     */\n    #[Factory(name: "CreateProductInput", default: false)]\n    public function createProduct(string $name, string $type): Product\n    {\n        return new Product($name, $type);\n    }\n}\n\nclass ProductController\n{\n    /**\n     * The "createProduct" factory will be used for this mutation.\n     */\n    #[Mutation]\n    #[UseInputType(for: "$product", inputType: "CreateProductInput!")]\n    public function saveProduct(Product $product): Product\n    {\n        // ...\n    }\n\n    /**\n     * The default "getProduct" factory will be used for this query.\n     *\n     * @return Color[]\n     */\n    #[Query]\n    public function availableColors(Product $product): array\n    {\n        // ...\n    }\n}\n'))),(0,i.kt)(o.Z,{value:"php7",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * This class contains 2 factories to create Product objects.\n * The "getProduct" method is used by default to map "Product" classes.\n * The "createProduct" method will generate another input type named "CreateProductInput"\n */\nclass ProductFactory\n{\n    // ...\n\n    /**\n     * This factory will be used by default to map "Product" classes.\n     * @Factory(name="ProductRefInput", default=true)\n     */\n    public function getProduct(string $id): Product\n    {\n        return $this->productRepository->findById($id);\n    }\n    /**\n     * We specify a name for this input type explicitly.\n     * @Factory(name="CreateProductInput", default=false)\n     */\n    public function createProduct(string $name, string $type): Product\n    {\n        return new Product($name, $type);\n    }\n}\n\nclass ProductController\n{\n    /**\n     * The "createProduct" factory will be used for this mutation.\n     *\n     * @Mutation\n     * @UseInputType(for="$product", inputType="CreateProductInput!")\n     */\n    public function saveProduct(Product $product): Product\n    {\n        // ...\n    }\n\n    /**\n     * The default "getProduct" factory will be used for this query.\n     *\n     * @Query\n     * @return Color[]\n     */\n    public function availableColors(Product $product): array\n    {\n        // ...\n    }\n}\n')))),(0,i.kt)("h3",{id:"ignoring-some-parameters"},"Ignoring some parameters"),(0,i.kt)("small",null,"Available in GraphQLite 4.0+"),(0,i.kt)("p",null,"GraphQLite will automatically map all your parameters to an input type.\nBut sometimes, you might want to avoid exposing some of those parameters."),(0,i.kt)("p",null,"Image your ",(0,i.kt)("inlineCode",{parentName:"p"},"getProductById")," has an additional ",(0,i.kt)("inlineCode",{parentName:"p"},"lazyLoad")," parameter. This parameter is interesting when you call\ndirectly the function in PHP because you can have some level of optimisation on your code. But it is not something that\nyou want to expose in the GraphQL API. Let's hide it!"),(0,i.kt)(r.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"php8",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"#[Factory]\npublic function getProductById(\n        string $id,\n        #[HideParameter]\n        bool $lazyLoad = true\n    ): Product\n{\n    return $this->productRepository->findById($id, $lazyLoad);\n}\n"))),(0,i.kt)(o.Z,{value:"php7",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * @Factory()\n * @HideParameter(for="$lazyLoad")\n */\npublic function getProductById(string $id, bool $lazyLoad = true): Product\n{\n    return $this->productRepository->findById($id, $lazyLoad);\n}\n')))),(0,i.kt)("p",null,"With the ",(0,i.kt)("inlineCode",{parentName:"p"},"@HideParameter")," annotation, you can choose to remove from the GraphQL schema any argument."),(0,i.kt)("p",null,"To be able to hide an argument, the argument must have a default value."),(0,i.kt)("h2",{id:"input-annotation"},"@Input Annotation"),(0,i.kt)("p",null,"Let's transform ",(0,i.kt)("inlineCode",{parentName:"p"},"Location")," class into an input type by adding ",(0,i.kt)("inlineCode",{parentName:"p"},"@Input")," annotation to it and ",(0,i.kt)("inlineCode",{parentName:"p"},"@Field")," annotation to corresponding properties:"),(0,i.kt)(r.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"php8",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"#[Input]\nclass Location\n{\n\n    #[Field]\n    private float $latitude;\n\n    #[Field]\n    private float $longitude;\n\n    public function __construct(float $latitude, float $longitude)\n    {\n        $this->latitude = $latitude;\n        $this->longitude = $longitude;\n    }\n\n    public function getLatitude(): float\n    {\n        return $this->latitude;\n    }\n\n    public function getLongitude(): float\n    {\n        return $this->longitude;\n    }\n}\n"))),(0,i.kt)(o.Z,{value:"php7",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * @Input\n */\nclass Location\n{\n\n    /**\n     * @Field\n     * @var float\n     */\n    private $latitude;\n\n    /**\n     * @Field\n     * @var float\n     */\n    private $longitude;\n\n    public function __construct(float $latitude, float $longitude)\n    {\n        $this->latitude = $latitude;\n        $this->longitude = $longitude;\n    }\n\n    public function getLatitude(): float\n    {\n        return $this->latitude;\n    }\n\n    public function getLongitude(): float\n    {\n        return $this->longitude;\n    }\n}\n")))),(0,i.kt)("p",null,"Now if you call ",(0,i.kt)("inlineCode",{parentName:"p"},"getCities()")," query you can pass the location input in the same way as with factories.\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"Location")," object will be automatically instantiated with provided ",(0,i.kt)("inlineCode",{parentName:"p"},"latitude")," / ",(0,i.kt)("inlineCode",{parentName:"p"},"longitude")," and passed to the controller as a parameter."),(0,i.kt)("p",null,"There are some important things to notice:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@Field")," annotation is recognized only on properties for Input Type."),(0,i.kt)("li",{parentName:"ul"},"There are 3 ways for fields to be resolved:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Via constructor if corresponding properties are mentioned as parameters with the same names - exactly as in the example above."),(0,i.kt)("li",{parentName:"ul"},"If properties are public, they will be just set without any additional effort."),(0,i.kt)("li",{parentName:"ul"},"For private or protected properties implemented public setter is required (if they are not set via constructor). For example ",(0,i.kt)("inlineCode",{parentName:"li"},"setLatitude(float $latitude)"),".")))),(0,i.kt)("h3",{id:"multiple-input-types-per-one-class"},"Multiple input types per one class"),(0,i.kt)("p",null,"Simple usage of ",(0,i.kt)("inlineCode",{parentName:"p"},"@Input"),' annotation on a class creates an GraphQl input named by class name + "Input" suffix if a class name does not end with it already.\nYou can add multiple ',(0,i.kt)("inlineCode",{parentName:"p"},"@Input")," annotations to the same class, give them different names and link different fields.\nConsider the following example:"),(0,i.kt)(r.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"php8",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"#[Input(name: 'CreateUserInput', default: true)]\n#[Input(name: 'UpdateUserInput', update: true)]\nclass UserInput\n{\n\n    #[Field]\n    public string $username;\n\n    #[Field(for: 'CreateUserInput')]\n    public string $email;\n\n    #[Field(for: 'CreateUserInput', inputType: 'String!')]\n    #[Field(for: 'UpdateUserInput', inputType: 'String')]\n    public string $password;\n\n    #[Field]\n    public ?int $age;\n}\n"))),(0,i.kt)(o.Z,{value:"php7",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * @Input(name="CreateUserInput", default=true)\n * @Input(name="UpdateUserInput", update=true)\n */\nclass UserInput\n{\n\n    /**\n     * @Field()\n     * @var string\n     */\n    public $username;\n\n    /**\n     * @Field(for="CreateUserInput")\n     * @var string\n     */\n    public string $email;\n\n    /**\n     * @Field(for="CreateUserInput", inputType="String!")\n     * @Field(for="UpdateUserInput", inputType="String")\n     * @var string|null\n     */\n    public $password;\n\n    /**\n     * @Field()\n     * @var int|null\n     */\n    public $age;\n}\n')))),(0,i.kt)("p",null,"There are 2 input types created for just one class: ",(0,i.kt)("inlineCode",{parentName:"p"},"CreateUserInput")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"UpdateUserInput"),". A few notes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CreateUserInput")," input will be used by default for this class."),(0,i.kt)("li",{parentName:"ul"},"Field ",(0,i.kt)("inlineCode",{parentName:"li"},"username")," is created for both input types, and it is required because the property type is not nullable."),(0,i.kt)("li",{parentName:"ul"},"Field ",(0,i.kt)("inlineCode",{parentName:"li"},"email")," will appear only for ",(0,i.kt)("inlineCode",{parentName:"li"},"CreateUserInput")," input."),(0,i.kt)("li",{parentName:"ul"},"Field ",(0,i.kt)("inlineCode",{parentName:"li"},"password")," will appear for both. For ",(0,i.kt)("inlineCode",{parentName:"li"},"CreateUserInput")," it'll be the required field and for ",(0,i.kt)("inlineCode",{parentName:"li"},"UpdateUserInput")," optional."),(0,i.kt)("li",{parentName:"ul"},"Field ",(0,i.kt)("inlineCode",{parentName:"li"},"age")," is optional for both input types.")),(0,i.kt)("p",null,"Note that ",(0,i.kt)("inlineCode",{parentName:"p"},"update: true")," argument for ",(0,i.kt)("inlineCode",{parentName:"p"},"UpdateUserInput"),". It should be used when input type is used for a partial update,\nIt makes all fields optional and removes all default values from thus prevents setting default values via setters or directly to public properties.\nIn example above if you use the class as ",(0,i.kt)("inlineCode",{parentName:"p"},"UpdateUserInput")," and set only ",(0,i.kt)("inlineCode",{parentName:"p"},"username")," the other ones will be ignored.\nIn PHP 7 they will be set to ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),", while in PHP 8 they will be in not initialized state - this can be used as a trick\nto check if user actually passed a value for a certain field."))}h.isMDXComponent=!0}}]);