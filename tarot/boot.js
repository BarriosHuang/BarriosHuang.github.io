(function(){
  function dec(s){
    var bin=atob(s), arr=new Uint8Array(bin.length);
    for (var i=0;i<bin.length;i++) arr[i]=bin.charCodeAt(i);
    return new TextDecoder('utf-8').decode(arr);
  }
  if (!window.__WOD) { document.body.textContent = 'Missing payload.'; return; }
  var html=dec(window.__WOD);
  document.open();
  document.write(html);
  document.close();
})();
