var t=Object.defineProperty,e=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,a=(e,o,s)=>o in e?t(e,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[o]=s,l=(t,l)=>{for(var i in l||(l={}))o.call(l,i)&&a(t,i,l[i]);if(e)for(var i of e(l))s.call(l,i)&&a(t,i,l[i]);return t};import{_ as i}from"./topModal.71064da8.js";import{r as d,o as r,c,f as n,k as p,F as u,i as h,I as m,J as g,t as f,g as b}from"./vendor.b56b0b3d.js";import"./modal.06a721ec.js";import"./ckeditor.9a7beadb.js";const w={data:()=>({isLoading:!1,products:[],url:"https://api.news-age.tw",tempProduct:{imagesUrl:[]},isNew:!1}),methods:{getTopList(){this.isLoading=!0,this.$http(`${this.url}/getData/front/台中腔`).then((t=>{setTimeout((()=>{this.isLoading=!1}),1e3),this.products=t.data,this.products.length=10,console.log(this.products)})).catch((t=>{console.log(t)}))},openModal(t,e){"add"===t?(this.tempProduct={chId:3,chStatus:1},this.isNew=!0,this.$refs.productModal.openModal()):"edit"===t&&(this.tempProduct=l({},e),this.isNew=!1,this.$refs.productModal.openModal())},delItem(t){this.tempProduct=l({},t);let e=`https://api.news-age.tw/chBn/delete/${this.tempProduct.id}`;confirm(`下架（${this.tempProduct.title}）?`)?(this.tempProduct.deleteStatus=1,this.$http.put(e,this.tempProduct).then((t=>{console.log("回傳",t.data),alert("刪除文章成功"),this.getTopList()}))):alert("你按了取消按鈕")}},components:{ProductModal:i},mounted(){this.getTopList()}},y=n("div",{class:"text-center mt-3 mb-3"},[n("h2",null,"台中腔-大版頭列表")],-1),P={class:"container-fluid"},v={class:"text-end mt-4"},M=b(" 建立新的文章 "),L={class:"table"},j=n("thead",null,[n("tr",null,[n("th",{scope:"col",class:"text-center"},"ID"),n("th",{scope:"col"},"圖片"),n("th",{scope:"col"},"標題"),n("th",{scope:"col"})])],-1),k={scope:"row",class:"text-center"},$={width:"350"},I={width:"50"},O=b("編輯"),x={width:"50"},C=b("刪除");w.render=function(t,e,o,s,a,l){const i=d("Loading"),b=d("el-button"),w=d("product-modal");return r(),c("div",null,[n(i,{active:a.isLoading},null,8,["active"]),y,n("div",P,[n("div",v,[n(b,{type:"primary",onClick:e[1]||(e[1]=t=>l.openModal("add"))},{default:p((()=>[M])),_:1})]),n("table",L,[j,n("tbody",null,[(r(!0),c(u,null,h(a.products,(t=>m((r(),c("tr",{key:t.id},[n("th",k,f(t.id),1),n("td",$,[n("img",{src:t.chFront,class:"img-fluid"},null,8,["src"])]),n("td",null,f(t.title),1),n("td",I,[n(b,{plain:"",type:"primary",onClick:e=>l.openModal("edit",t)},{default:p((()=>[O])),_:2},1032,["onClick"])]),n("td",x,[n(b,{plain:"",type:"danger",onClick:e=>l.delItem(t)},{default:p((()=>[C])),_:2},1032,["onClick"])])],512)),[[g,null!==t.chFront]]))),128))])])]),n(w,{ref:"productModal",product:a.tempProduct,"is-new":a.isNew,onGetData:l.getTopList},null,8,["product","is-new","onGetData"])])};export default w;
