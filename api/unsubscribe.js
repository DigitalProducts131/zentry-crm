// Single-owner beta bridge. The upstream verifies HMAC and spreadsheet ownership.
const ENDPOINT='https://script.google.com/macros/s/AKfycbzrWGwdXq7WcKUncC_vLuvu61Ha0vt-vQGy0dGHH_l0i7FkGZsDZ6mMHbjDLO9cD9a8tw/exec';
module.exports=async function handler(req,res){
 res.setHeader('Cache-Control','no-store');res.setHeader('Referrer-Policy','no-referrer');
 if(req.method!=='POST'){res.setHeader('Allow','POST');return res.status(405).json({success:false});}
 const token=req.body&&req.body.token;
 if(typeof token!=='string'||token.length>2048||! /^[A-Za-z0-9_-]+\.[A-Za-z0-9_-]{43}$/.test(token))return res.status(400).json({success:false});
 try{
  const response=await fetch(ENDPOINT,{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:new URLSearchParams({token,format:'json'}),signal:AbortSignal.timeout(15000)});
  const result=await response.json();
  if(!response.ok||result.success!==true||result.action!=='unsubscribe')return res.status(400).json({success:false});
  return res.status(200).json({success:true});
 }catch(e){return res.status(503).json({success:false});}
};
