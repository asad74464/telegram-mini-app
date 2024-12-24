import{b as n,r as i,j as e}from"./index-13e0f7b6.js";const c=()=>{const r="https://telegram.app/referral-code",{theme:l}=n(),t=l==="dark",[s,o]=i.useState([{id:1,name:"Mohammad Reza",date:"2023-12-01"},{id:2,name:"John Doe",date:"2024-12-01"},{id:3,name:"Jane Smith",date:"2024-12-02"}]),d=()=>{alert(`Forward the referral link: ${r}`)};return e.jsxs("div",{className:`p-4 shadow rounded mb-4 ${t?"bg-gray-800 text-white":"bg-white text-black"}`,children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Referral System"}),e.jsx("p",{className:"mt-2",children:"Share your referral link:"}),e.jsx("input",{type:"text",value:r,readOnly:!0,className:`border p-2 w-full rounded mt-2 ${t?"bg-gray-700 text-white border-gray-600":"border-gray-300"}`}),e.jsxs("div",{className:"flex space-x-2 mt-2",children:[e.jsx("button",{className:`px-4 py-2 rounded ${t?"bg-green-600 text-white":"bg-green-500 text-white"}`,onClick:()=>navigator.clipboard.writeText(r),children:"Copy Link"}),e.jsx("button",{className:`px-4 py-2 rounded ${t?"bg-blue-600 text-white":"bg-blue-500 text-white"}`,onClick:d,children:"Forward Link"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Referral List"}),s.length===0?e.jsx("p",{className:"mt-2 text-sm",children:"No referrals yet. Share your link to get started!"}):e.jsx("ul",{className:"mt-2 space-y-2",children:s.map(a=>e.jsxs("li",{className:`p-2 rounded ${t?"bg-gray-700 text-white border-gray-600":"bg-gray-100 border-gray-300"} border`,children:[e.jsx("p",{className:"text-sm font-medium",children:a.name}),e.jsxs("p",{className:"text-xs",children:["Joined on: ",a.date]})]},a.id))})]})]})};export{c as default};
