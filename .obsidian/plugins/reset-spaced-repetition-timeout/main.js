/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var c=Object.defineProperty;var h=Object.getOwnPropertyDescriptor;var d=Object.getOwnPropertyNames;var g=Object.prototype.hasOwnProperty;var f=(t,s)=>{for(var a in s)c(t,a,{get:s[a],enumerable:!0})},p=(t,s,a,n)=>{if(s&&typeof s=="object"||typeof s=="function")for(let i of d(s))!g.call(t,i)&&i!==a&&c(t,i,{get:()=>s[i],enumerable:!(n=h(s,i))||n.enumerable});return t};var u=t=>p(c({},"__esModule",{value:!0}),t);var P={};f(P,{default:()=>r});module.exports=u(P);var e=require("obsidian");async function l(t,s){let a=t.getFiles();for(let n of a){let o=(await t.read(n)).replace(/<!--SR:.*?-->/g,"");await t.modify(n,o)}}var w={flashcardPath:"."},r=class extends e.Plugin{async onload(){await this.loadSettings();let a=this.settings.flashcardPath;this.addRibbonIcon("clock","Reset Flashcards",async n=>{try{await l(this.app.vault,a),new e.Notice("Flashcards reset!")}catch(i){new e.Notice(i)}}),this.addCommand({id:"reset-flashcards",name:"Reset Flashcards",callback:async()=>{try{await l(this.app.vault,a),new e.Notice("Flashcards reset!")}catch(n){new e.Notice(`Error resetting flashcards: ${n}`)}}})}async loadSettings(){this.settings=Object.assign({},w,await this.loadData())}async saveSettings(){await this.saveData(this.settings)}};