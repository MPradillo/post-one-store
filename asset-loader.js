window.POST_ASSET_META={"addons-hero.webp":[0,3568],"athlete.webp":[3568,2450],"everyday-scene.webp":[6018,1438],"fan-lifestyle.webp":[7456,3054],"fan.webp":[10510,2732],"gear-close.webp":[13242,1876],"home-hero.webp":[15118,3338],"line.webp":[18456,1764],"mat-lifestyle.webp":[20220,2434],"mat.webp":[22654,3468],"postone-lifestyle.webp":[26122,2252],"postone.webp":[28374,3390],"product-lifestyle-strip.webp":[31764,1248],"product-main.webp":[33012,2834],"setup-hero.webp":[35846,3338],"snap-life.webp":[39184,2018],"snap.webp":[41202,1764],"step1.webp":[42966,1372],"step2.webp":[44338,1178],"step3.webp":[45516,1314],"step4.webp":[46830,1140],"step5.webp":[47970,2386],"step6.webp":[50356,966],"step7.webp":[51322,2066],"step8.webp":[53388,1100],"wash-life.webp":[54488,624],"wash.webp":[55112,790]};
(async function(){
  try{
    const paths=Array.from({length:8},(_,i)=>`assets/chunk${String(i+1).padStart(2,"0")}.bin`);
    const buffers=await Promise.all(paths.map(p=>fetch(p,{cache:"force-cache"}).then(r=>{if(!r.ok)throw new Error(`${p}: ${r.status}`);return r.arrayBuffer();})));
    const total=buffers.reduce((n,b)=>n+b.byteLength,0);
    const all=new Uint8Array(total); let pos=0;
    for(const b of buffers){all.set(new Uint8Array(b),pos);pos+=b.byteLength;}
    const urls={};
    for(const [name,[off,len]] of Object.entries(window.POST_ASSET_META)){
      urls[name]=URL.createObjectURL(new Blob([all.slice(off,off+len)],{type:"image/webp"}));
    }
    window.POST_ASSET_URLS=urls;
    document.querySelectorAll("img[data-asset]").forEach(img=>{const u=urls[img.dataset.asset];if(u)img.src=u;});
    document.querySelectorAll("[data-gallery]").forEach(el=>{const v=el.dataset.gallery||"";if(v.startsWith("assets/")){const u=urls[v.slice(7)];if(u)el.dataset.gallery=u;}});
  }catch(e){console.error("POST ONE assets failed to load",e);}
})();