(this["webpackJsonpny-boutique"]=this["webpackJsonpny-boutique"]||[]).push([[5],{78:function(t,e,n){"use strict";var c=n(3),r=(n(2),n(15)),a=n(34);e.a=Object(r.b)(null,(function(t){return{addItem:function(e){return t(Object(a.a)(e))}}}))((function(t){var e=t.item,n=e.name,r=e.price,a=e.imageUrl,s=t.addItem;return console.log(t),Object(c.jsx)("div",{children:Object(c.jsxs)("div",{className:"flex flex-col justify-center items-center max-w-sm mx-auto my-8",children:[Object(c.jsx)("div",{style:{backgroundImage:"url(".concat(a)},className:"bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center"}),Object(c.jsxs)("div",{className:"w-56 md:w-64 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden",children:[Object(c.jsx)("div",{className:"py-2 text-center font-bold uppercase tracking-wide text-gray-800",children:n}),Object(c.jsxs)("div",{className:"flex items-center justify-between py-2 px-3 bg-gray-300",children:[Object(c.jsxs)("h1",{className:"text-gray-800 font-bold ",children:["$",r]}),Object(c.jsx)("button",{onClick:function(){s(t.item)},className:"bg-gray-700 text-xs text-white px-2 py-1 font-semibold rounded uppercase hover:bg-gray-700",children:"Add to cart"})]})]})]})})}))},79:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var c=n(19),r=n.n(c),a=n(27),s=n(26),i=function(){return function(t){s.c.collection("collections").onSnapshot(function(){var e=Object(a.a)(r.a.mark((function e(n){var c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=n.docs.map((function(t){return t.data()})),t({type:"SET_SHOP_DATA",payload:c}),t({type:"FETCH_SHOP_DATA_SUCCESS"});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}},82:function(t,e,n){"use strict";n.r(e);var c=n(30),r=n(31),a=n(33),s=n(32),i=n(3),o=n(2),u=n.n(o),l=n(10),d=n(15),p=n(78),b=n(79),m=n(43),f=function(t){Object(a.a)(n,t);var e=Object(s.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.props.FetchShopDataAsync()}},{key:"render",value:function(){var t=this;return Object(i.jsx)("div",{children:this.props.isLoading?Object(i.jsx)(m.a,{size:28}):Object(i.jsx)("div",{className:"mx-auto text-center mt-32 ",children:Object(i.jsx)("div",{className:"grid flex lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 px-7",children:this.props.SHOP_DATA.map((function(e){return e.routeName===t.props.match.params.category?e.items.map((function(t){return Object(i.jsx)(p.a,{item:t})})):null}))})})})}}]),n}(u.a.Component);e.default=Object(l.f)(Object(d.b)((function(t){var e=t.shop;return{SHOP_DATA:e.SHOP_DATA,isLoading:e.isLoading}}),(function(t){return{FetchShopDataAsync:function(){return t(Object(b.a)())}}}))(f))}}]);
//# sourceMappingURL=5.0154b832.chunk.js.map