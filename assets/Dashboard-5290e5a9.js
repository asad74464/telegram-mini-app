import{c as l,u as n,j as e,y as d}from"./index-13e0f7b6.js";import{C as i,a as o,b as h,c as x}from"./card-b65bbf34.js";/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=l("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=l("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),f=()=>{const{balance:c,hideBalance:s,setHideBalance:t,canClaim:a,claimRewards:r}=n();return e.jsx(e.Fragment,{children:e.jsxs(i,{className:"w-full",children:[e.jsx(o,{children:e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx(h,{children:"Dashboard"}),e.jsx("button",{onClick:()=>t(!s),className:"p-2 rounded-full hover:bg-gray-100",children:s?e.jsx(m,{size:20}):e.jsx(y,{size:20})})]})}),e.jsx(x,{children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{children:"Balance:"}),e.jsx("span",{className:"text-xl font-bold",children:s?"****":`${c} TOKENS`})]}),e.jsx("p",{className:"mt-2",children:"Claim tokens every 24 hours."}),e.jsx("button",{onClick:()=>{r()&&d.success("Claimed successfully!",{position:"top-left"})},disabled:!a(),className:`w-full p-3 rounded-lg ${a()?"bg-blue-600 text-white":"bg-gray-300"}`,children:"Claim Daily Rewards"})]})})]})})};export{f as default};
