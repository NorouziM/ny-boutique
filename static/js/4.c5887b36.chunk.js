(this["webpackJsonpny-boutique"]=this["webpackJsonpny-boutique"]||[]).push([[4],{78:function(t,e,n){"use strict";var c=n(3),r=(n(2),n(15)),i=n(34);e.a=Object(r.b)(null,(function(t){return{addItem:function(e){return t(Object(i.a)(e))}}}))((function(t){var e=t.item,n=e.name,r=e.price,i=e.imageUrl,a=t.addItem;return Object(c.jsx)("div",{children:Object(c.jsxs)("div",{className:"flex flex-col justify-center items-center max-w-sm mx-auto my-8",children:[Object(c.jsx)("div",{style:{backgroundImage:"url(".concat(i)},className:"bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center"}),Object(c.jsxs)("div",{className:"w-56 md:w-64 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden",children:[Object(c.jsx)("div",{className:"py-2 text-center font-bold uppercase tracking-wide text-gray-800",children:n}),Object(c.jsxs)("div",{className:"flex items-center justify-between py-2 px-3 bg-gray-300",children:[Object(c.jsxs)("h1",{className:"text-gray-800 font-bold ",children:["$",r]}),Object(c.jsx)("button",{onClick:function(){a(t.item)},className:"bg-gray-700 text-xs text-white px-2 py-1 font-semibold rounded uppercase hover:bg-gray-700",children:"Add to cart"})]})]})]})})}))},79:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var c=n(19),r=n.n(c),i=n(27),a=n(26),s=function(){return function(t){a.c.collection("collections").onSnapshot(function(){var e=Object(i.a)(r.a.mark((function e(n){var c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=n.docs.map((function(t){return t.data()})),t({type:"SET_SHOP_DATA",payload:c}),t({type:"FETCH_SHOP_DATA_SUCCESS"});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}},80:function(t,e,n){"use strict";var c=n(3),r=(n(2),n(78)),i=n(20);e.a=function(t){var e=t.title,n=t.items,a=t.routeName;return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"mx-auto text-center mt-32 ",children:Object(c.jsx)(i.b,{to:"/ny-boutique"+"/shop/".concat(a),children:Object(c.jsx)("h1",{className:"text-4xl mb-12 mt-4",children:e})})}),Object(c.jsx)("div",{className:"grid flex lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 px-7",children:n.filter((function(t,e){return e<4})).map((function(t){return Object(c.jsx)(r.a,{item:t})}))})]})}},81:function(t,e,n){"use strict";n.r(e);var c=n(30),r=n(31),i=n(33),a=n(32),s=n(3),o=n(2),u=n.n(o),l=n(80),d=n(15),b=n(79),j=n(43),m=function(t){Object(i.a)(n,t);var e=Object(a.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.props.FetchShopDataAsync()}},{key:"render",value:function(){return Object(s.jsx)("div",{children:this.props.isLoading?Object(s.jsx)(j.a,{size:28}):this.props.SHOP_DATA.map((function(t){var e=t.title,n=t.items,c=t.id,r=t.routeName;return Object(s.jsx)(l.a,{title:e,routeName:r,items:n},c)}))})}}]),n}(u.a.Component);e.default=Object(d.b)((function(t){var e=t.shop;return{SHOP_DATA:e.SHOP_DATA,isLoading:e.isLoading}}),(function(t){return{FetchShopDataAsync:function(){return t(Object(b.a)())}}}))(m)}}]);
//# sourceMappingURL=4.c5887b36.chunk.js.map