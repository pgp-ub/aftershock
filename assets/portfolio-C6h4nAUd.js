import{c}from"./index-aBNyiAq3.js";/**
 * @license lucide-react v1.54.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s={name:"plus",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]};s.node;const w=c(s),n="aftershock-portfolio-v1",e=[{t:"NVDA",w:20},{t:"TSLA",w:10},{t:"JPM",w:15},{t:"LLY",w:15},{t:"COST",w:10},{t:"XOM",w:10},{t:"PLTR",w:10},{t:"CAT",w:10}];function i(){try{const t=localStorage.getItem(n),o=t?JSON.parse(t):null;return Array.isArray(o)&&o.length?o:e}catch{return e}}function l(t){try{localStorage.setItem(n,JSON.stringify(t))}catch{}}function f(t,o=10){const r=i();r.some(a=>a.t===t)||l([...r,{t,w:o}])}function u(t){return t.split(/\n/).map(o=>o.trim()).filter(Boolean).map(o=>{const[r,a]=o.split(/[\s,;:\t]+/);return{t:(r??"").toUpperCase().replace(".","-"),w:a===void 0?1:Number(a)}})}export{e as E,w as P,f as a,u as p,i as r,l as w};
