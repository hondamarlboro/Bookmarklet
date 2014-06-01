javascript:(function(){
	var d=document;
	var el=d.getElementsByTagName('link');
	for(i=0;i<el.length;i++){
		if(el%5Bi%5D.getAttribute('rel').indexOf('alternate')!=-1){
			ty=el[i].getAttribute('type');
			if(ty&&(ty.indexOf('application/rss+xml')!=-1||ty.indexOf('text/xml')!=-1||ty.indexOf('application/atom+xml')!=-1)){
				h=el[i].getAttribute('href');
				if(h.substring(0,1)=='/'){
					h='feed://'+location.host+h;
				}else{
					h=h.replace(/http/,'feed');
				}
			location.href=h;
			return;
			}
		}
	}
	alert('Could not find RSS/Atom Feed');
})();
