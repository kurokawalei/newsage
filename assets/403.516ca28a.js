import{e as r,p as a,a as e,r as s,o,c as t,f as c,w as l,g as n}from"./vendor.b56b0b3d.js";const d={name:"404",setup(){const a=r();return{goBack:()=>{a.go(-1)}}}},i=l();a("data-v-63e25879");const p={class:"error-page"},u=c("div",{class:"error-code"},[n("4"),c("span",null,"0"),n("3")],-1),g=c("div",{class:"error-desc"},"啊哦~ 你沒有權限訪問該頁面哦",-1),v={class:"error-handle"},f=n("返回首頁"),b=n("返回上一頁");e();const k=i(((r,a,e,l,n,d)=>{const k=s("el-button"),m=s("router-link");return o(),t("div",p,[u,g,c("div",v,[c(m,{to:"/"},{default:i((()=>[c(k,{type:"primary",size:"large"},{default:i((()=>[f])),_:1})])),_:1}),c(k,{class:"error-btn",type:"primary",size:"large",onClick:l.goBack},{default:i((()=>[b])),_:1},8,["onClick"])])])}));d.render=k,d.__scopeId="data-v-63e25879";export default d;