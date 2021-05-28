(this["webpackJsonpny-boutique"]=this["webpackJsonpny-boutique"]||[]).push([[3],{78:function(e,t,n){"use strict";var r=n(3),c=(n(2),n(15)),i=n(34);t.a=Object(c.b)(null,(function(e){return{addItem:function(t){return e(Object(i.a)(t))}}}))((function(e){var t=e.item,n=t.name,c=t.price,i=t.imageUrl,s=e.addItem;return Object(r.jsx)("div",{children:Object(r.jsxs)("div",{className:"flex flex-col justify-center items-center max-w-sm mx-auto my-8",children:[Object(r.jsx)("div",{style:{backgroundImage:"url(".concat(i)},className:"bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center"}),Object(r.jsxs)("div",{className:"w-56 md:w-64 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden",children:[Object(r.jsx)("div",{className:"py-2 text-center font-bold uppercase tracking-wide text-gray-800",children:n}),Object(r.jsxs)("div",{className:"flex items-center justify-between py-2 px-3 bg-gray-300",children:[Object(r.jsxs)("h1",{className:"text-gray-800 font-bold ",children:["$",c]}),Object(r.jsx)("button",{onClick:function(){s(e.item)},className:"bg-gray-700 text-xs text-white px-2 py-1 font-semibold rounded uppercase hover:bg-gray-700",children:"Add to cart"})]})]})]})})}))},79:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(19),c=n.n(r),i=n(27),s=n(26),a=function(){return function(e){s.c.collection("collections").onSnapshot(function(){var t=Object(i.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=n.docs.map((function(e){return e.data()})),e({type:"SET_SHOP_DATA",payload:r}),e({type:"FETCH_SHOP_DATA_SUCCESS"});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}}},80:function(e,t,n){"use strict";var r=n(3),c=(n(2),n(78)),i=n(20);t.a=function(e){var t=e.title,n=e.items,s=e.routeName;return Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"mx-auto text-center mt-32 ",children:Object(r.jsx)(i.b,{to:"/ny-boutique"+"/shop/".concat(s),children:Object(r.jsx)("h1",{className:"text-4xl mb-12 mt-4",children:t})})}),Object(r.jsx)("div",{className:"grid flex lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 px-7",children:n.filter((function(e,t){return t<4})).map((function(e){return Object(r.jsx)(c.a,{item:e})}))})]})}},83:function(e,t,n){"use strict";n.r(t);var r=n(3),c=n(2),i=n.n(c),s=n(21),a=n(20);function o(e){var t=e.size,n=e.title,c=e.imageUrl,i=e.linkUrl,o="mx-3 md:ml-3 border-2 rounded-md shadow-lg mb-3 ";return o+="large"===t?"col-span-6":"col-span-4",Object(r.jsx)("div",{className:o,children:Object(r.jsxs)(s.CardBody,{style:{padding:"0px"},className:"justify-center flex items-center overflow-hidden",children:[Object(r.jsx)("div",{style:{filter:"grayscale(30%)",opacity:"0.92",height:"25rem",backgroundImage:"url(".concat(c,")")},className:" group w-full h-full bg-cover bg-gray-900 bg-opacity-50 bg-no-repeat bg-center transform rounded-md"}),Object(r.jsxs)("div",{className:"flex flex-col justify-center rounded-md items-center w-64 h-32 absolute",children:[Object(r.jsx)("h1",{className:"text-5xl mb-1 font-bold text-white",children:n.toUpperCase()}),Object(r.jsx)(a.b,{to:"/ny-boutique"+"/".concat(i),children:Object(r.jsx)("span",{className:"text-lg text-white",children:"SHOP NOW"})})]})]})})}var l=n(15),u=Object(l.b)((function(e){return{menu_items:e.directory.sections}}))((function(e){var t=e.menu_items;return Object(r.jsx)("div",{className:"flex flex-col flex-shrink-0 md:grid md:grid-cols-12 gap-2 w-full mt-32 h-64 px-8",children:t.map((function(e){var t=e.size,n=e.title,c=e.imageUrl,i=e.id,s=e.linkUrl;return Object(r.jsx)(o,{size:t,title:n,imageUrl:c,linkUrl:s},i)}))})})),d=n(30),m=n(31),b=n(33),j=n(32),x=n(80),f=n(79),h=n(43),p=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.props.FetchShopDataAsync()}},{key:"render",value:function(){return Object(r.jsx)("div",{style:{marginTop:"42rem"},children:this.props.isLoading?Object(r.jsx)(h.a,{size:28}):this.props.SHOP_DATA.filter((function(e,t){return t<2})).map((function(e){var t=e.title,n=e.items,c=e.id,i=e.routeName;return Object(r.jsx)(x.a,{title:t,routeName:i,items:n},c)}))})}}]),n}(i.a.Component),g=Object(l.b)((function(e){var t=e.shop;return{SHOP_DATA:t.SHOP_DATA,isLoading:t.isLoading}}),(function(e){return{FetchShopDataAsync:function(){return e(Object(f.a)())}}}))(p);t.default=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(u,{}),Object(r.jsx)(g,{})]})}}}]);
//# sourceMappingURL=3.357a27ed.chunk.js.map