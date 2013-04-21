function Music(){// Chia sẻ bởi nhacf.com, an toàn & ổn định (Google project hosting)
	Array.prototype.indexof = function(x){for(i=0;i<this.length;i++)if(this[i]==x){return i;break}return -1};
	this.sen = function(x,c,s){var f = new Date();f.setDate(f.getDate()+s);document.cookie = x+'='+c+';expires='+f.toGMTString()};
	this.gen = function(x){var c = document.cookie;if(c.length>0){var f = c.indexOf(x+'=');if(f!=-1){f = f+x.length+1;var e = c.indexOf(';',f);if(e==-1)e = c.length;return c.substring(f,e)}}return ''};
	var pip = ['nhacf.com','ya76oo.com','quediem.com'],mis = dos = dae = tim = loa = sec = hot = 0;
	this.lie = function(x){
		var arr = new Array();
		for(i=0;i<x.length;i++){
			var stt = x[i][0],casi = x[i][1],ten = x[i][2],click = x[i][3],rate = x[i][4],src = hot>0?'href="'+this.hot(3,'',stt,(x[i][2]+'-'+x[i][1]),'')+'"':'onclick="M.pay('+stt+')"';
			if((ten+casi).length>36){if(casi.match(' -'))casi = casi.split(' -')[0];if(ten.length>36-casi.length)ten = ten.slice(0,36-casi.length)+'..'}
			arr.push('<ul><li>'+
				'<a class="ten" '+src+'>'+ten.slice(0,1).toUpperCase()+ten.slice(1,ten.length)+
				'</a><a class="csi" onclick="Ae(this)">'+casi.replace(/\s-\s/,'</a>- <a class="csi" onclick="Ae(this)">')+'</a>'+
				(M.rat(rate)>0?('<a class="rat">'+M.rat(rate)+'</a>'):'')+'<a class="cik" onclick="M.pay('+stt+')">'+click+'</a>'+
				'</li><li><p class="show" id="'+stt+'" lang="'+ten+'~'+casi+'" onmouseover="M.cov(this,1);if(dag>0)M.cek(this)" onmousedown="M.cek(this)" onmouseout="M.cov(this)"></p></li></ul>')
		}return arr.join('')
	};
	this.all = function(x,c){
		var p = x.getElementsByTagName('p'),s = ghi[this.ghi()].split('.'),k = '';
		for(j=0;j<p.length;j++){
			if(c==0&&s.indexof(p[j].id)<0)M.cek(p[j]);
			else if(c==1)M.cek(p[j]);
			else if(c==2&&s.indexof(p[j].id)>-1)M.cek(p[j])
		}
};
this.pag = function(s,x,y,c,d){
	var min = x - 10,max = x + 10,pag = Math.ceil(c/y),arr = new Array();
	for(j=min;j<max&j<pag;j++)
		if(j>=0)arr.push('<li><a '+(x==j?'class="on"':'')+' onclick="M.'+d+'(\''+s+'\','+j+','+y+')">'+(x==j?((j+1)+'/'+pag):(j+1))+'</a></li>');
	else max++;
	return '<p>'+(x>0?'<a class="pre" onclick="M.'+d+'(\''+s+'\','+(x-1)+','+y+')"></a>':'')+(x<pag-1?'<a class="nex" onclick="M.'+d+'(\''+s+'\','+(x+1)+','+y+')" title="'+(y*x+y)+'/'+c+'"></a>':'')+'</p>'+arr.join('')
};
var nec = '';
this.sow = function(sql,page){
	var k,s = this.gen('sql');if(s.match('M=')&&s.match('/')){s = s.split('/');for(i=0;i<s.length;i++)if(s[i].match('M=')){if(sql==0&&page==0){k = s[i].split('=')[1].split('~');sql = k[0];page = parseInt(k[1])}s[i] = 'M='+sql+'~'+page}s = s.join('/')}else s = s+'M='+sql+'~'+page+'/';
	if(!isNaN(sql)){if(sql<0){nec = sql%1==0?-sql+'.':'';sql = 0}}else nec = '';
	this.sql('kid=1&json=1&sql='+nec+sql+'&page='+page,function(){
		if(Nson.length>0){M.sen('sql',s,1);
		if(isNaN(sql))sec = 'music';else sec = sec.toString().replace(/music/mg,'');
		M.sub('musics',sql,page);
		$('lis').innerHTML = M.lie(M.zip(Nson));M.cfo();
		$('pms').innerHTML = M.pag(sql,page,30,Nol,'sow')
	}else M.non('không thấy nhạc..')
})
};
var tec = '';
this.tol = function(sql,page){
	var k,s = this.gen('sql');if(s.match('T=')&&s.match('/')){s = s.split('/');for(i=0;i<s.length;i++)if(s[i].match('T=')){if(sql==0&&page==0){k = s[i].split('=')[1].split('~');sql = k[0];page = parseInt(k[1])}s[i] = 'T='+sql+'~'+page}s = s.join('/')}else s = s+'T='+sql+'~'+page+'/';
	if(!isNaN(sql)){if(sql<0){tec = sql%1==0?-sql+'.':'';sql = 0}}else tec = '';
	this.sql('kid=1&json=6&sql='+tec+sql+'&page='+page,function(){
		if(Tson.length>0){M.sen('sql',s,1);
		if(isNaN(sql))sec = sec+'total';else sec = sec.toString().replace(/total/mg,'');
		$('toal').innerHTML = M.bie(M.zip(Tson),1);M.sub('totals',sql,page);$('tms').innerHTML = M.pag(sql,page,30,Tol,'tol')
	}else M.non('không thấy total..')
})
};
this.bie = function(x,y){
	var ar = [],as = [];
	for(i=0;i<x.length;i++){
		var stt = x[i][0],url = x[i][1],loai = x[i][2],ten = x[i][3],click = x[i][4],rate = x[i][5],src = hot>0?'href="'+this.hot(y,loai,url,ten,stt)+'"':'onclick="M.sie('+i+','+y+')"';
		if(!ten.match('-'))ten = ten.replace(/\s\(/,'-(').replace(/\s\[/,'-[');
			ten = ten.replace(/^v\s-\sa\s-\s|^v\s-\sa\s/,'').replace(/vs/g,'&').replace(/-\s([0-9a-z]{1})\s-/g,'- $1. ').replace(/\s-\s([0-9a-z]{1,3})$/,'. $1').replace(/\((.+)-(.+)\)/g,'($1&$2)');
			ten = ten.substring(0,1).toUpperCase()+ten.substring(1,5).replace(/\s-\s/g,'. ')+ten.substring(5,47).toLowerCase().replace(/–/g,'-').replace(/(\s-\s|\s-|-\s|-)/,'</a><a class="csi" onclick="Ae(this)">').replace(/(\s-\s|\s-|-\s|-)/g,' - ');
			var c = '<li><p class="a">'+(M.rat(rate)>0?('<a class="rat">'+this.rat(rate)+'</a>'):'')+'<a class="clik" onclick="M.sie('+i+','+y+')">'+click+'</a></p><p class="b"><a class="ten" '+src+'>'+ten+'</a></p></li>';
			i%2==0?ar.push(c):as.push(c)
		}return '<table id="cgi"><tr><td><ul id="bum">'+ar.join('')+'</ul></td><td class="ogi"><ul id="bum">'+as.join('')+'</ul></td></tr></table>'
	};
	var bec = '';
	this.bum = function(sql,page){
		var k,s = this.gen('sql');if(s.match('A=')&&s.match('/')){s = s.split('/');for(i=0;i<s.length;i++)if(s[i].match('A=')){if(sql==0&&page==0){k = s[i].split('=')[1].split('~');sql = k[0];page = parseInt(k[1])}s[i] = 'A='+sql+'~'+page}s = s.join('/')}else s = s+'A='+sql+'~'+page+'/';
		if(!isNaN(sql)){if(sql<0){bec = sql%1==0?-sql+'.':'';sql = 0}}else bec = '';
		this.sql('kid=1&json=3&sql='+bec+sql+'&page='+page,function(){
			if(Ason.length>0){M.sen('sql',s,1);
			if(isNaN(sql))sec = sec+'album';else sec = sec.toString().replace(/album/mg,'');
			$('abum').innerHTML = M.bie(M.zip(Ason),0);M.sub('albums',sql,page);$('ams').innerHTML = M.pag(sql,page,30,Aol,'bum');
		}else M.non('không thấy album..')
	})
	};
	this.sie = function(x,y){
		this.sto();var g = y;if(y>0)y = 'total';else y = 'album';
		if(x<0)var lh = location.href.split('&'),ls = lh[2].split('=')[1].split('-'),stt = parseInt(ls[0]),url=lh[1].split(y+'=')[1],loai=parseInt(ls[1]),ten=decodeURIComponent(lh[0].split('nhacf=')[1]).replace(/\+/g,' ').replace(/-/g,' - '),click='',rate='';
		else{
			if(g>0)var z = this.zip(Tson);else var z = this.zip(Ason);
			var stt = z[x][0],url = z[x][1],loai = z[x][2],ten = z[x][3],click = z[x][4],rate = z[x][5]
		}
		ato = setInterval('M.aha(\''+y+'\',\'click\',0,'+stt+')',150000);
		var s = $(y).lang.split(',');setTimeout("M.sro('"+y+"')",1200);
		$(y).innerHTML = '<table><tr><td id="urle" align="center" colspan="5"></td></tr><tr>'+
		'<td width="30"><input style="width:30px" type="button" onclick="M.sto()" value="'+s[0]+'"></td>'+
		'<td width="127" id="rate" align="center"></td>'+
		'<td width="67"><a id="fav" onclick="M.aha(\''+y+'\',\'fav\',0,'+stt+')">'+s[1]+'</a></td><td width="67"><a id="error" onclick="M.aha(\''+y+'\',\'error\',0,'+stt+')">'+s[2]+'</a></td>'+
		'<td align="right"><a href="'+(hot>0?this.hot(g,loai,url,ten,stt):'?nhacf='+ten.replace(/\s-\s|\s\s/g,'-').replace(/\s/g,'+')+'&'+y+'='+url+'&tim='+stt+'-'+loai)+'">'+ten+'</a></td></tr></table>';M.rte(rate,y,stt);this.ure(parseInt(loai),url,'urle')
	};
	this.xem = function(x){
		this.sto();
		if(x<0)var lh = location.href.split('?')[1].split('&'),stt = lh[2].split('=')[1],url = lh[1].split('video=')[1],ten = decodeURIComponent(lh[0].split('nhacf=')[1]).replace(/\+/g,' ').replace(/-/g,' - '),eng = 150,click = '',rate = '';
		else var z = this.zip(Vson),stt = z[x][0],url = z[x][1],ten = z[x][2],eng = z[x][3],click = z[x][4],rate = z[x][5];
		ato = setTimeout('M.aha(\'video\',\'click\',0,'+stt+')',eng*777);
		var s = $('video').lang.split(',');setTimeout("M.sro('video')",1200);
		$('video').innerHTML = '<table><tr><td colspan="5"><div style="position:absolute;width:658px;height:68px;background:url(http://1.bp.blogspot.com/-RxlGvgCHLNA/TqqUOSUPvCI/AAAAAAAAARU/bMOFPOkd24I/s72/dot.gif)"></div>'+
		'<div style="width:658px;height:486px;overflow:hidden"><p id="viem"></p></div></td></tr>'+
		'<tr><td width="30"><input style="width:30px" type="button" onclick="M.sto()" value="'+s[0]+'"></td>'+
		'<td width="127" id="rate" align="center"></td>'+
		'<td width="67"><a id="fav" onclick="M.aha(\'video\',\'fav\',0,'+stt+')">'+s[1]+'</a></td><td width="67"><a id="error" onclick="M.aha(\'video\',\'error\',0,'+stt+')">'+s[2]+'</a></td>'+
		'<td align="right"><a href="'+(hot>0?this.hot(2,'',url,ten,stt):'?nhacf='+ten.replace(/\s-\s|\s\s/g,'-').replace(/\s/g,'+')+'&video='+url+'&tim='+stt)+'">'+ten+'</a></td></tr></table>';M.rte(rate,'video',stt);
		swfobject.embedSWF('http://www.youtube.com/v/'+url+'?version=3&controls=1&modestbranding=1&theme=light&color=white&cc_load_policy=0&use_tablet_controls=0&use_native_controls=false&allow_embed=0&autoplay=1&autohide=0&showsearch=0&rel=0&egm=0&fs=1&hl=vi&hd=1&showinfo=0&iv_load_policy=3&playerapiid=viem&border=0&loop=1','viem','100%',515,'9.0.0',null,null,{allowScriptAccess:'always',menu:'false',wmode:'transparent',allowfullscreen:'true'},null)
	};
	this.vie = function(x){
		var arr = [];
		for(i=0;i<x.length;i++){
			var stt = x[i][0],url = x[i][1],ten = x[i][2],eng = x[i][3],click = x[i][4],rate = x[i][5],src = hot>0?"location.href='"+this.hot(2,'',url,ten,stt)+"'":'M.xem('+i+')';
			arr.push((i%5==0?'<tr>':'')+'<td onclick="'+src+'"><div style="background-image:url(http://i2.ytimg.com/vi/'+url+'/default.jpg)">'+(rate.length>7?'<a>'+this.rat(rate)+'</a>':'')+(click>0?'<p>'+click+'</p>':'')+'</div><a href="'+(hot>0?this.hot(2,'',url,ten,stt):'?nhacf='+ten.replace(/\s-\s|\s\s/g,'-').replace(/\s/g,'+')+'&video='+url+'&tim='+stt)+'">'+ten.replace(/-/g,' - ').replace(/(\s\s)/g,' ').replace(/vs/g,'&')+'</a></td>');
		}return '<table>'+arr.join('')+'</tr></table>'
	};
	var dec = '';
	this.deo = function(sql,page){
		var k,s = this.gen('sql');if(s.match('V=')&&s.match('/')){s = s.split('/');for(i=0;i<s.length;i++)if(s[i].match('V=')){if(sql==0&&page==0){k = s[i].split('=')[1].split('~');sql = k[0];page = parseInt(k[1])}s[i] = 'V='+sql+'~'+page}s = s.join('/')}else s = s+'V='+sql+'~'+page+'/';
		if(!isNaN(sql)){if(sql<0){dec = sql%1==0?-sql+'.':'';sql = 0}}else dec = '';
		this.sql('kid=1&json=2&sql='+dec+sql+'&page='+page,function(){
			if(Vson.length>0){M.sen('sql',s,1);
			if(isNaN(sql))sec = sec+'video';else sec = sec.toString().replace(/video/mg,'');
			$('vdeo').innerHTML = M.vie(M.zip(Vson));M.sub('videos',sql,page);$('vms').innerHTML = M.pag(sql,page,25,Vol,'deo');
		}else M.non('không thấy video..')
	})
	};
	var ghi = [];this.gen('ghi').match(',')?ghi=this.gen('ghi').split(','):ghi.push(this.gen('ghi'));
	this.tab = function(x){
		Nsoa = '';cek = [];if(x>=ghi.length)ghi.push('');$('tabs').innerHTML = '';
		var arr = [];
		for(i=0;i<ghi.length;i++)
			arr.push('<p id="p'+i+'">'+(ghi[i].split('.').length-1)+'</p><input onclick="M.tab('+i+')" type="radio" name="tab"'+(i==x?' checked="checked"':'')+'/>');
		$('tab').innerHTML = arr.join('')+'<a title="'+$('tab').lang+'" onclick="M.tab('+ghi.length+')"></a>';
		if(ghi[x].length>0)M.sql('kid=1&json=4&sql='+ghi[x].substring(0,ghi[x].length-1)+'&page=0&line=30',function(){if(Nsoa.length>7)M.cek(-1)});else this.cfo()
	};
	this.xoa = function(x){
		if(x==1){ghi.splice(this.ghi(),1);this.sen('ghi',ghi,27)}
		else if(x==2){ghi = [];this.sen('ghi','',0)}
		this.tab(0)
	};
	this.cek = function(x){
		var i = this.ghi(),k = ghi[i].split('.');
		if(x<0){
			var n = this.zip(Nsoa),ar = [];
			for(j=0;j<n.length;j++)ar.push(n[j][0]);
				for(j=0;j<n.length;j++){
					var c = ar.indexof(k[j]),stt = n[c][0],loai = n[c][1],casi = n[c][2],ten = n[c][3];
					cek[j] = '<li><a class="x" id="'+stt+'" onclick="M.cek(this)">✖</a><a class="t" onclick="M.pay('+stt+')">'+(ten.substring(0,1).toUpperCase()+ten.substring(1,ten.length))+'</a><a class="c" onclick="Ae(this)">'+casi.replace(/\s-\s/,'</a> - <a class="c" onclick="Ae(this)">')+'</a></li>'
				}
			}else{
				var c = k.indexof(x.id),t = x.lang.split('~');
				if(c<0){
					if(k.length<31){
						cek.push('<li><a class="x" id="'+x.id+'" onclick="M.cek(this)">✖</a><a class="t" onclick="M.pay('+x.id+')">'+(t[0].substring(0,1).toUpperCase()+t[0].substring(1,t[0].length))+'</a><a class="c" onclick="Ae(this)">'+t[1].replace(/\s-\s/,'</a> - <a class="c" onclick="Ae(this)">')+'</a></li>');
						ghi[i] = ghi[i]+x.id+'.'
					}else this.non('Tối đa 30 bài trong 1 tab, nhấn dấu cộng bên trên để tạo tab mới!')
				}else{cek.splice(c,1);k.splice(c,1);ghi[i] = k.join('.')}
				this.sen('ghi',ghi,27);
				$('p'+i).innerHTML = cek.length
			}
			$('tabs').innerHTML = cek.join('');M.cfo()
		};
		this.rae = function(x){var r = $('rate').getElementsByTagName('a');for(i=0;i<5;i++)if(i<=x)r[i].className = 'c';else r[i].className = ''};
		this.rte = function(x,a,t){
			if(x.length>7){var c = x.split('111111');c = ' - '+parseFloat(c[1])+' lần đánh giá, điểm trung bình '+(parseInt(c[0].slice(0,1))+1)+', tổng '+parseFloat(c[0].slice(1,c[0].length))+', tỉ lệ '+Math.round(parseFloat(c[0].slice(1,c[0].length))/parseFloat(c[1])*10)+'%'}else c = '';	
			var f = function(s,i){return '<a class="'+s+'" title="'+((i+1)*2)+' điểm ('+(i==0?'dở':i==1?'hơi dở':i==2?'bình thường':i==3?'hay':'rất hay')+')'+c+'" onclick="M.aha(\''+a+'\',\'rate\','+((i+1)*2)+','+t+')" onmouseover="M.rae('+i+')"></a>'};
			var ar = [],s = M.rat(x);
			for(i=0;i<5;i++){
				if(i<Math.ceil(s)){
					if(i<Math.floor(s))
						ar.push(f('a',i));
					else ar.push(f('b',i))
				}else ar.push(f('',i))
		}$('rate').innerHTML = '<span onmouseout="if(isNaN($(\'rate\').innerHTML))M.rte(\''+x+'\',\''+a+'\','+t+')">'+ar.join('')+'</span>'
	};
	var ato = ala = 0;
	this.pay = function(x){
		this.sto();
		this.sql('kid=1&json=5&sql='+x+'&page=0&line=1',function(){
			var z = M.zip(Nsob),stt = z[0][0],url = z[0][1],nhacsi = z[0][2],casi = z[0][3],ten = z[0][4],size = z[0][5],eng = z[0][6],rate = z[0][7];
			ato = setTimeout('M.ato()',eng*1000+3000);ala = setTimeout('M.aha(\'music\',\'click\',0,'+x+')',eng*777);
			var obj = '<embed id="'+x+'" width="642" height="27" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" quality="best" flashvars="audioUrl=http://sites.google.com/'+url+'&autoPlay=true" wmode="transparent" src="http://www.google.com/reader/ui/3523697345-audio-player.swf"></embed>';
			var s = $('nhac').lang.split(',');setTimeout("M.sro('nhac')",777);
			$('nhac').innerHTML = '<div><table><tr><td colspan="6">'+obj+'</td></tr><tr>'+
			'<td width="79"><input style="width:37px" type="button" onclick="M.sto()" value="'+s[4]+'">'+
			'<input style="width:42px" type="button" onclick="M.ato()" value="'+s[5]+'"></td>'+
			'<td width="105" id="rate" align="center"></td>'+
			'<td width="67"><a id="fav" onclick="M.aha(\'music\',\'fav\',0,'+x+')">'+s[6]+	'</a></td><td width="67"><a id="error" onclick="M.aha(\'music\',\'error\',0,'+x+')">'+s[7]+'</a></td>'+
			'<td width="257"><a class="t" href="'+(hot>0?M.hot(3,'',stt,ten+'-'+casi):'?nhacf='+(ten+'-'+casi).replace(/\s-\s|\s\s/g,'-').replace(/\s/g,'+')+'&music='+stt)+'">'+(ten.substring(0,1).toUpperCase()+ten.substring(1,ten.length))+	'</a><a class="g" onclick="Ae(this)">'+casi+'</a></td>'+
			'<td width="45"><ul><li>'+(Math.round(size/100)/10)+' M</li><li>'+Math.round(8*1024/1000*size/eng)+' Kbits</li></ul></td>'+
			'</tr></table></div>';M.rte(rate,'music',x)
		})
};
this.loc = function(x){return x.toLowerCase().replace(/(^\-+|\-+$|^\s+|\s+$|<|>|\*|\$|\[.*?\]|\s(http:|www\.).*?$|\.\w{3}$)/g,'').replace(/'|"|\&quot\;/g,'′').replace(/\&amp\;|\&|\s\s\&\s\s|\s\s\&\s|\s\&\s\s/g,' vs ').replace(/(\_|\.|\;|\:|\s-|-\s|-|-\s\s-|-\s-|\sft\s|\sft.\s|\|)/g,' - ').replace(/,|\s\s,\s\s|\s\s,\s|\s,\s\s|,\s\s/g,', ').replace(/\(/g,' (').replace(/\(\s\s|\(\s/g,'(').replace(/\)/g,') ').replace(/\s\s\)|\s\)/g,')').replace(/\[/g,' [').replace(/\[\s\s|\[\s/g,'[').replace(/\]/g,'] ').replace(/\s\s\]|\s\]/g,']').replace(/\s\s/g,' ').replace(/-\s-|\s+$|\s-\s$/g,'')};
this.you = function(){
	var d = tube.getDuration(),t = this.loc(document.add.ten.value),i = this.bat();
	if(t.length>3&&i.length==11&&d>9){
		this.sql('kid=2&json=1&ten='+encodeURIComponent(t)+'&url='+i+'&eng='+d,function(){$('button').disabled = true;tube = 0});
		document.add.ten.value = '';document.add.code.value = ''
	}
};
this.ten = function(){
	var t = this.loc(document.add.ten.value),i = this.bat();
	$('view').innerHTML = '<p class="b">Hiển thị:<a class="t">'+t.replace(/-/,'</a><a class="c">')+'</a>'+(t.match(/-/)?'<a class="d" onclick="M.dao()">[đảo]</a>':'')+'</p><div id="viu"></div>';
	if(i.length>0){
		if(i.match('&url=')){i = i.split('&url=');$('viu').innerHTML = M.swi(parseInt(i[0]),i[1])}
		else swfobject.embedSWF('http://www.youtube.com/v/'+i+'?version=3&modestbranding=1&use_tablet_controls=0&use_native_controls=false&allow_embed=1&autoplay=1&autohide=1&showsearch=0&rel=0&fs=1&showinfo=1&iv_load_policy=3&playerapiid=viu&border=0','viu','100%',486,'9.0.0',null,null,{allowScriptAccess:'no'});
		$('button').disabled = false
	}
};
this.add = function(x){
	var e = 0,t = this.loc(x.form.ten.value);
	if(t.match(' ')){var ar = t.split(' ');for(j=0;j<ar.length;j++)if(ar[j].length>18)e = 1}else if(t.length>18)e = 1;
	if(t.match(/địt|đụ |dâm|nứng|cặc|dái|buồi|lồn |đù |đú |đéo|đĩ |điếm|vãi|tổ cha|tổ mẹ|cố nội|dit me|du ma |du me|deo me|di me|lon me|suc cac|suc lon|bu cac|bu lon|ma cha|ma me|thang cha|cho de/i))e = 2;
	switch(e){
		case 1:alert('Tên có từ độ dài trên 18 ký tự.');break;
		case 2:alert('Trong tên có chứa từ nhạy cảm.');break
	}if(e==0){
		var i = this.bat();
		if(!i.match('url=')&&i.length==11)
			swfobject.embedSWF('http://www.youtube.com/v/'+i+'?version=3&modestbranding=1&use_tablet_controls=0&use_native_controls=false&allow_embed=1&autoplay=1&autohide=1&showsearch=0&rel=0&fs=1&showinfo=1&iv_load_policy=3&enablejsapi=1&playerapiid=viu&border=0','viu','100%',486,'9.0.0',null,null,{allowScriptAccess:'always'});
		else this.sql('kid=2&json=2&ten='+encodeURIComponent(t)+'&loai='+i,function(){x.form.ten.value='';x.form.code.value='';$('button').disabled = true})
	}
};
this.bat = function(){
	var c = document.add.code.value,f = '';
	if(c.match(/youtube.com|youtu.be/)){
		if(c.match('v='))f = c.split('v=')[1].split('&')[0];
		else if(c.match('/v/'))f = c.split('/v/')[1].split('?')[0];
		else if(c.match('/embed/'))f = c.split('/embed/')[1].split('?')[0];
		else if(c.match('.be/'))f = c.split('.be/')[1];
		f = f.replace(/(#|@|!|$|%|\^|\*)/mg,'&').split('&')[0];f = f.slice(0,11)
	}
	else{
		var ar = new Array('mp3.zing.vn','nhaccuatui.com','nhac.vui.vn','nghenhac.info','amnhac.yume.vn','mixi.vn','musik.soha.vn','.mp3','nhacso.net');
		if(c.match(ar[0])){
			if(c.match('/album-xml/'))f = '0&url='+c.split('/album-xml/')[1].split('&')[0];
			else if(c.match('/video-xml/'))f = '50&url='+c.split('/video-xml/')[1].split('&')[0];
			else if(c.match('/blog\\?'))f = '51&url='+c.split('/blog?')[1].split('"')[0];
			else if(c.match('/bai-hat/'))f = '62&url='+c.split('/bai-hat/')[1].split('/')[1].split('.')[0]}
				else if(c.match(ar[1])){
					if(c.match('nghe\\?L|/l/'))f = '1&url='+c.replace(/nghe\?L=/,'/l/').split('/l/')[1].replace(/$|\[/g,'"').split('"')[0];
					else if(c.match('/xem-clip/'))f = '52&url='+c.split('/xem-clip/')[1].replace(/"|\[/g,'/').split('/')[0];
					else if(c.match('nghe\\?M|/m/')){
						if(c.match('"640"'))f = '53&url='+c.split('/m/')[1].split('"')[0];
						else f = '54&url='+c.replace(/nghe\?M=/,'/m/').split('/m/')[1].replace(/$|\[/g,'"').split('"')[0]}}
							else if(c.match(ar[2])){f = c.replace(/id%3D/g,'-m').replace(/&amp;|\[\//g,'.htm').split('.htm')[0].split('-');f = f[f.length-1];if(f.match(/m\d*/g))f = '55&url='+f.match(/m\d*/g);else f = '2&url='+f.match(/a\d*/g)}
						else if(c.match(ar[3])){
							if(c.match('albumid=|info/a/')){
								if(c.match('albumid='))f = '3&url='+c.split('albumid=')[1].split('&')[0];
								else{f = c.split('/');f = '3&url='+f[f.length-3]}}
								else{
									if(c.match('songid='))f = '56&url='+c.split('songid=')[1].split('&')[0];
									else{f = c.split('/');f = '56&url='+f[f.length-4]}}}
									else if(c.match(ar[6])){
										if(c.match('/album/')){f = c.split('/album/')[1].split('/')[0];f = '6&url='+f.slice(1,f.length)}
										else if(c.match('/mp3/|/track/')){f = c.replace(/\/track\//,'/mp3/d').split('/mp3/')[1].replace(/'|\[\//g,'/').split('/')[0];f = '57&url='+f.slice(1,f.length)}
										else if(c.match('/clip/|/video/')){f = c.replace(/\/video\//,'/clip/d').split('/clip/')[1].replace(/'|\[\//g,'/').split('/')[0];f = '58&url='+f.slice(1,f.length)}}
										else if(c.match(ar[7])){f = '59&url='+c.split('http://')[1].replace(/(^\s+|\s+$)/g,'')}
											else if(c.match(ar[8])){
												if(c.match('nghe-album|nghe-playlist|/album/|/playlist/')){
													if(c.match('/album/|/playlist/'))f = c.split(',')[1];
													else{f = c.split('.');f = f[f.length-2]};f = '8&url='+f}
													else if(c.match('nghe-nhac|/song/')){
														if(c.match('/song/'))f = c.split('/id/')[1].split('&')[0];
														else{f = c.split('.');f = f[f.length-2]};f = '60&url='+f}
														else if(c.match('xem-video|/video/')){
															if(c.match('/video/'))f = c.split('/id/')[1].split('&')[0];
															else{f = c.split('.');f = f[f.length-2]};f = '61&url='+f}}
														}return f
													};
													this.fas = function(a,c,w,h,s,f){
														return '<div style="margin:0;padding:0;width:'+w+';height:'+c+'px;overflow:hidden"><div style="margin:-'+a+'px 0 0 0;padding:0">'+
														'<object width="'+w+'" height="'+h+'" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000">'+
														'<param value="'+s+'" name="movie"><param value="'+f+'" name="flashvars"><param value="high" name="quality"><param value="100" name="volume"><param value="full" name="uiMode"><param value="1" name="autostart"><param value="transparent" name="wmode"><param value="1" name="fullScreen"><param value="true" name="allowfullscreen">'+
														'<embed width="'+w+'" height="'+h+'" src="'+s+'" flashvars="'+f+'" type="application/x-shockwave-flash" wmode="transparent" allowfullscreen="true" volume="-1" autostart="true"></object></div></div>'
													};
													this.fae = function(w,h,s){var rae = '<iframe width="'+w+'" height="'+h+'" src="'+s+'" scrolling="no" frameborder="0" allowtransparency="true"></iframe>';if(w+h<3)return '<div style="width:0;height:0">'+rae+'</div>';else return rae};
													this.ure = function(x,u,d){
														if(x==50||x==51||x==52||x==53||x==54||x==55||x==57||x==58||x==60||x==61||x==62){
															this.sql('kid=3&int='+x+'&url='+u,function(){
																if(ure&&ure.length>0){
																	if(ure.slice(ure.length-3,ure.length)=='mp3')cao = 20;else cao = 486;
																	$(d).innerHTML = M.fas(0,cao,'100%',cao,'http://mp3.socbay.com/public/flashplay/mediaplayer.swf','width=643&height='+cao+'&file='+ure+'&image=http://2.bp.blogspot.com/-F4tTeYLxU1o/Tr1sZuu-reI/AAAAAAAAASI/1UjK6Wyo7Ps/s643/nhacf.png&displaywidth=643&autostart=true&repeat=false');    
																}else $(d).innerHTML = M.swi(x,u);
															});
														}else $(d).innerHTML = this.swi(x,u);
													};
													this.swi = function(x,u){
														switch(x){
															case 0:return this.fas(332,316,'100%',657,'http://static.mp3.zing.vn/skins/mp3_main/flash/mp3playlist.swf','songID=0&autoplay=true&xmlURL=http://mp3.zing.vn/xml/playlist/'+u);break;
															case 1:return this.fas(50,150,'100%',200,'http://www.nhaccuatui.com/l/'+u,'&autostart=true');break;
															case 2:return this.fas(0,377,'100%',377,'http://hcm.nhac.vui.vn/upload/nhacvui-player.swf','playlistfile=http%253A%2F%2Fhcm.nhac.vui.vn%2Fasx2.php%253Ftype%253D3%2526id%253D'+u.substring(1,u.length)+'&frontcolor=1717f7&lightcolor=ff4a4a&screencolor=000000&bufferlength=10&item=0&volume=100&playlistsize=292&autostart=true&repeat=always&controlbar=bottom&dock=false&plugins=http://hcm.nhac.vui.vn/upload/players/spectrumvisualizer-1.swf&spectrumvisualizer.effect=reflection'+(u.match('a')?'&playlist=bottom':''));break;
															case 3:return this.fas(19,260,'100%',280,'http://nghenhac.info/AudioPlayer/AudioPlayer_Multi.swf','xmlPath=http://nghenhac.info/AudioPlayer/PlayList.aspx?albumid='+u+'&themeID=1&timeOut=25&autoPlay=1&volume=1&repeat=0&expandingMode=0');break;
															case 6:return this.fas(0,322,'100%',322,'http://musik.soha.vn/Flash/playerAlbum5.swf','file=http://musik.soha.vn/Handlers/XmlAlbum.ashx?key='+u+'&autostart=true&playlistsize=280&repeat=always');break;
															case 8:return this.fas(25,242,'100%',267,'http://st.nhacso.net/flash/v59/embedPlaylistjs.swf','xmlPath=http://nhacso.net/flash/playlist/xnl/1/uid/X1lWW0NabwIBAw==,'+u+'&colorAux=0xff4a4a&colorBorder=0x078939&typePlayer=playlist&mAuto=true');break;
															case 50:return this.fas(40,479,'100%',520,'http://static.mp3.zing.vn/skins/mp3_main/flash/player_mp3zing_embed_v1.0.swf?file=http://mp3.zing.vn/xml/video-clip/'+u+'&autostart=true&zoomsizeon=false&wmode=transparent&1','');break;
															case 51:return this.fas(0,92,'100%',92,'http://static.mp3.zing.vn/skins/mp3_main/flash/player/mp3Player_skin7.swf','xmlurl=http://mp3.zing.vn/blog?'+u);break;
															case 52:return this.fas(0,479,'100%',479,'http://www.nhaccuatui.com/mv/xem-clip/'+u,'&autostart=true');break;
															case 53:return this.fas(0,479,'100%',479,'http://www.nhaccuatui.com/m/'+u,'&autostart=true');break;
															case 54:return this.fas(0,50,'100%',50,'http://www.nhaccuatui.com/m/'+u,'&autostart=true');break;
															case 55:return this.fas(0,107,'100%',127,'http://hn.nhac.vui.vn/upload/nhacvui-player.swf','playlistfile=http://hn.nhac.vui.vn/asx2.php%3Ftype%3D1%26id%3D'+u.substring(1,u.length)+'&frontcolor=1717f7&lightcolor=ff4a4a&screencolor=000000&bufferlength=10&volume=100&playlist=bottom&playlistsize=60&autostart=true&repeat=no&controlbar=bottom&dock=false&plugins=http://hn.nhac.vui.vn/upload/players/spectrumvisualizer-1.swf&spectrumvisualizer.effect=reflection');break;
															case 56:return this.fas(45,157,'100%',216,'http://nghenhac.info/AudioPlayer/AudioPlayer_Single.swf','xmlPath=http://nghenhac.info/AudioPlayer/PlayList.aspx?songid='+u+'&themeID=1&timeOut=5&autoPlay=1&repeat=0&expandingMode=0');break;
															case 57:return this.fas(0,42,'100%',42,'http://musik.soha.vn/share/k14/track/'+u,'&amp;autostart=true');break;
															case 58:return this.fas(0,479,'100%',479,'http://musik.soha.vn/share/video/'+u,'&autostart=true');break;
															case 59:return this.fas(0,20,'100%',20,'http://mp3.socbay.com/public/flashplay/mediaplayer.swf','width=658&height=20&file=http://'+u+'&image=http://mp3.socbay.com/public/img/mp3.gif&displaywidth=300&autostart=true&repeat=false');break;
															case 60:return this.fas(25,30,'100%',60,'http://st.nhacso.net/flash/v61/embedPlaylistjs.swf','xmlPath=http://nhacso.net/flash/song/xnl/1/id/'+u+'&adsLink=&colorAux=0xff4a4a&colorMain=0xeffcfc&colorBorder=0x078939&typePlayer=single&mAuto=true');break;
															case 61:return this.fas(0,480,'100%',480,'http://st.nhacso.net/flash/v61/videoEmbed.swf','xmlPath=http://nhacso.net/flash/video/xnl/1/id/'+u+'&colorAux=0x0099ff&colorMain=0x000000&colorBorder=0xcccccc&mAuto=true&typePlayer=single');break;
															case 62:return this.ure(x,u,'viu');break;
														}
													};
													var kea = sea = 0;
													this.kea = function(x){kea = x};
													this.sea = function(x){
														clearTimeout(sea);
														var key = M.noo(x).replace(/(\s-\s|\s-|-\s)/mg,',').replace(/(\?|!|"|'|\(|\))/mg,'').replace(/(;|:|\+|\||&|#|>|<|\/)/mg,',').replace(/(_|\s\s)/mg,' ').replace(/0/mg,'khong').replace(/1/mg,'mot').replace(/2/mg,'hai').replace(/3/mg,'ba').replace(/4/mg,'bon').replace(/5/mg,'nam').replace(/6/mg,'sau').replace(/7/mg,'bay').replace(/8/mg,'tam').replace(/9/mg,'chin');
														if(kea==0||kea==13||(kea==32&&key.length>27))tip = 0;else if((kea>=65&&kea<=90)||(kea>=96&&kea<=105)){if(key.length>12&&key.match(' '))tip = 2700;else if(key.length>9)tip = 3600;else if(key.length>5)tip = 4500;else tip = 5700}else tip = 7700;
														if(key.length>2)sea = setTimeout(function(){sec='';if($('msic'))M.sow(key,0);setTimeout(function(){if($('album'))M.bum(key,0);	setTimeout(function(){if($('video'))M.deo(key,0);setTimeout(function(){if($('total'))M.tol(key,0);iput.search.value=''},360)},360)},360)},tip)
													};
													var aha = oho = ihi = 0;
													this.aha = function(j,f,p,x){
														clearTimeout(aha);clearInterval(oho);
														if(sec.toString().match(j)&&f=='click')p = 2;
														if(!location.href.match('\\?')||!document.referrer.match('w.google.c|w.bing.c|h.yahoo.c')){
															if(j=='album'&&f=='click')M.sql('kid=2&aha='+j+'&for='+f+'&pot='+p+'&stt='+x,function(){});
															else if(!this.gen(j).match(x+'.')){
																var h = dae>ihi?Math.round((new Date().getTime()-dae)/1000):0,t = 0;
																var s = function(){if(t>0){$(f).innerHTML = t;oho = setInterval("if(parseInt($('"+f+"').innerHTML)>0)$('"+f+"').innerHTML=parseInt($('"+f+"').innerHTML)-1;else clearInterval(oho)",1000)}};
																switch(f){
																	case 'rate':t = 60-h;s();break;
																	case 'fav':t = 60-h;s();break;
																	case 'error':t = 30-h;s();break;
																	case 'dload':t = 90-h;s();break
																}aha = setTimeout("M.sql('kid=2&aha="+j+"&for="+f+"&pot="+p+"&stt="+x+"',function(){})",t*1000);this.sen(j,this.gen(j)+x+'.',7);ihi = new Date().getTime()
															}}
														};
														this.sro = function(x){if((obj = document.getElementById(x))&&obj!=null)window.scrollTo(0,obj.offsetTop)};
														this.sbj = function(x){var s = x.name,o = x.options[x.selectedIndex].value;if(this.gen('sbj').length>0){var sb = this.gen('sbj').split('.'),ob = this.gen('obj').split('.');if(sb.length==ob.length){var i = sb.indexof(s);if(i<0){this.sen('sbj',this.gen('sbj')+s+'.',27);this.sen('obj',this.gen('obj')+o+'.',27)}else{ob[i] = o;this.sen('obj',ob.join('.'),27)}}}else{this.sen('sbj',s+'.',27);this.sen('obj',o+'.',27)}var k = this.gen('sbj');k = k.slice(0,k.length-1).split('.').sort(function(a,b){return a-b});if(k.length==9)location.reload(0);else{var obj = $('obj').getElementsByTagName('select');if(k.length>1){for(i=0;i<k.length;i++){obj[parseInt(k[i])].style.color = '#2e2e27';if(parseInt(k[i])+1!=k[i+1])obj[(parseInt(k[i])+1)].style.color = '#ff4a4a'}}else{if(parseInt(k[0])!=0)obj[0].style.color = '#ff4a4a';else obj[1].style.color = '#ff4a4a'}}};
														this.obj = function(){if(this.gen('obj').length>0){var ob = this.gen('obj').split('.');if(ob[ob.length-1].length<1)ob.pop();if(ob.length==9)return ob.sort(function(a,b){return a-b}).join('.');else return 0}else return 0};
														this.tif = function(x){this.sen('tif',x.id,27);location.reload(0)};
														this.buf = function(x){if(x.innerHTML==x.lang.split(',')[0])this.sen('buf','',0);else this.sen('buf',x.id,27);location.reload(0)};
														this.non = function(x){location.href = '#'+x;setTimeout('location.href = "#"',1500)};
														this.sub = function(x,s,p){var ar = $('msic').lang.split(',');$(x).innerHTML = $(x).lang+' '+(isNaN(s)?' - '+s:ar[s])+(p>0?' - '+(p+1):'')};
														this.mis = function(x,d){mis = x;dos = d;dae = new Date().getTime();switch(tim){case 0:if($('musics')){M.sow(0,0);break}case 1:if($('albums')){M.bum(0,0);break}case 2:if($('videos')){M.deo(0,0);break}case 3:if($('totals')){M.tol(0,0);break}case 4:if($('tab')){M.gen('ghi').match(',')?M.tab(M.gen('ghi').split(',').length-1):M.tab(0);break}}++tim;iput.search.style.background = ''};
														this.sql = function(url,alo){iput.search.style.background = 'url(http://1.bp.blogspot.com/-b7GuNKjpQ4o/TbcK19wYymI/AAAAAAAAAK0/idHzFBZp7NY/s400/loading.gif) '+(iput.search.value.length<7?'center':'right')+' no-repeat';var end = Math.round((new Date().getTime()-dae)/1000),lod = document.documentElement.firstChild,nod = document.createElement('script');if(nod.addEventListener)nod.addEventListener('load',function(){alo();lod.removeChild(nod);nod = null},false);else nod.onreadystatechange = function(){if(this.readyState=='loaded'||this.readyState=='complete'){alo.call(this);lod.removeChild(nod);nod = null}};nod.src = 'http://sql.'+pip[this.gen('load').length>0?this.gen('load'):0]+'?'+url+'&tif='+(this.gen('tif').length>0?this.gen('tif'):0)+'&buf='+(this.gen('buf').length>0?this.gen('buf'):0)+'&obj='+this.obj()+'&cw='+document.documentElement.clientWidth+'&ch='+document.documentElement.clientHeight+'&ddos='+(mis+end)+'&dos='+dos+'&end='+end;lod.appendChild(nod)};
														this.fic = function(){if($('view'))$('view').innerHTML = this.fae(1,1,'http://sql.'+pip[pip.length-1]+'/traffic.php?nghe='+(Math.floor(Math.random()*3600)*9))};
														this.zip = function(x){var a = [],z = x.split('  ');z.pop();for(i=0;i<z.length;i++)a.push(z[i].split(' '));return a};
														this.dao = function(){var t = this.loc(document.add.ten.value);t = t.replace(/-/,'--').split('--');document.add.ten.value = t[1].replace(/^\s+|\s+$/g,'')+' - '+t[0].replace(/^\s+|\s+$/g,'');this.ten()};
														this.sto = function(x){clearTimeout(ato);clearInterval(ato);clearTimeout(ala);clearTimeout(aha);clearInterval(oho);if($('nhac'))$('nhac').innerHTML='';if($('total'))$('total').innerHTML='';if($('video'))$('video').innerHTML='';if($('album'))$('album').innerHTML='';if($('view'))$('view').innerHTML='';if($('film'))$('film').innerHTML = ''};
														this.ato = function(){if(ghi[this.ghi()].length>0){var ar = ghi[this.ghi()].split('.');ar.pop();var g = $('nhac').innerHTML.length>0?ar.indexof($('nhac').getElementsByTagName('embed')[0].id):-1;this.pay(ar[g+1<ar.length?g+1:0])}};
														this.noo = function(x){return x.toString().toLowerCase().replace(/(á|à|ả|ã|ạ|â|ấ|ầ|ẩ|ẫ|ậ|ă|ắ|ằ|ẳ|ẵ|ặ)/mg,'a').replace(/(é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ)/mg,'e').replace(/(ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự)/mg,'u').replace(/(ý|ỳ|ỷ|ỹ|ỵ)/mg,'y').replace(/(í|ì|ỉ|ĩ|ị)/mg,'i').replace(/(ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|Ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ)/mg,'o').replace(/(á|à|ả|ã|ạ|â|ấ|ầ|ẩ|ẫ|ậ|ă|ắ|ằ|ẳ|ẵ|ặ)/mg,'a').replace(/(é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ)/mg,'e').replace(/(ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự)/mg,'u').replace(/(ý|ỳ|ỷ|ỹ|ỵ)/mg,'y').replace(/(í|ì|ỉ|ĩ|ị)/mg,'i').replace(/(ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ)/mg,'o').replace(/(á|à|ả|ã|ạ)/mg,'a').replace(/(é|è|ẻ|ẽ|ẹ)/mg,'e').replace(/(ú|ù|ủ|ũ|ụ)/mg,'u').replace(/(ý|ỳ|ỷ|ỹ|ỵ)/mg,'y').replace(/(í|ì|ỉ|ĩ|ị)/mg,'i').replace(/(ó|ò|ỏ|õ|ọ)/mg,'o').replace(/(đ)/mg,'d')};
														this.cfo = function(){var i = this.ghi();i=i?i:0;var c = $('lis').getElementsByTagName('p');for(a=0;a<c.length;a++)if(ghi[i].split('.').indexof(c[a].id)>-1)c[a].className = 'down';else c[a].className = 'show'};
														this.ghi = function(){if(document.forms['tap'].elements['tab']){var tab = !document.forms['tap'].elements['tab']?document.forms['tap'].tab:document.forms['tap'].elements['tab'];	for(i=0;i<tab.length||i<1;i++)if(tab.checked==true||tab[i].checked==true){return i;break}}};
														this.cov = function(x,c){if(c){if(x.className=='show')x.className='over';else x.className='odow'}else{if(x.className=='over')x.className='show';else if(x.className=='odow')x.className='down'}};
														this.sip = function(x){return new Date(parseFloat(x.slice(0,4)),parseFloat(x.slice(5,7))-1,parseFloat(x.slice(8,10)),parseFloat(x.slice(11,13)),parseFloat(x.slice(14,16)),parseFloat(x.slice(17,19))).getTime()};
														this.rat = function(x){var s=x.split('111111');var t=parseFloat(s[0].substring(1,s[0].length))/parseFloat(s[1])/2;if(t>4.5)t=5;else if(t>4)t=4.5;else if(t>3.5)t=4;else if(t>3)t=3.5;else if(t>2.5)t=3;else if(t>2)t=2.5;else if(t>1.5)t=2;else if(t>1)t=1.5;else if(t>=0.5)t=1;else t=0;return t};
														this.hot = function(x,l,u,t,s){t = this.loc(t).replace(/(^\-+|\-+$|^\s+|\s+$|\(|\)|,|′)/g,'').replace(/(\s-\s|\s–\s|\s\s)/g,'-');var r = this.noo(t.replace(/(\s|\/)/g,'-'))+'.html?nhacf='+encodeURIComponent(t).replace(/%20|%2F/g,'+')+'&';switch(x){case 0:r = r+'album='+u+'&tim='+s+'-'+l;break;case 1:r = r+'total='+u+'&tim='+s+'-'+l;break;case 2:r = r+'video='+u+'&tim='+s;break;case 3:r = r+'music='+u;break}return r};
														this.xet = function(){if(document.getElementsByTagName('script').codef){var src = document.getElementsByTagName('script').codef.src;if(src.match('\\?')&&src.match('&')){src = src.split('?')[1].split('&');for(k=0;k<src.length;k++){if(src[k]=='host=p')hot = 1;if(src[k]=='solo=r'&&this.gen('buf').length<1)this.sen('buf','f',27);if(src[k].match('show=')&&this.gen('tif').length<1)this.sen('tif',src[k].split('=')[1],27)}}}};this.xet();
														this.loa = function(){var log = this.gen('load'),run = parseInt(log.length>0?log:0)+1,run = run<pip.length?run:0,ws = screen.width,wh = screen.height,cw = document.documentElement.clientWidth,ch = document.documentElement.clientHeight;if(wh>555&&ws>777&&cw+ch>999){loa = setTimeout('M.sen("load",'+run+',1);M.loa()',3600);this.sql('kid=0&lh='+location.host+'&ws='+ws+'&wh='+wh+'&fr='+document.referrer,function(){clearTimeout(loa);iput.search.focus();if($('tif')){var tif = $('tif').getElementsByTagName('a'),buf = M.gen('buf'),gif = M.gen('tif');for(i=0;i<tif.length;i++){if(buf.length>0&&tif[i].id==buf&&buf=='f')tif[i].innerHTML = tif[i].lang.split(',')[0];if(gif.length>0){if(tif[i].id==gif)tif[i].className = 'on';else tif[i].className = ''}}}if($('obj')){var con = 0,obj = 'o'+M.gen('obj').replace(/\./g,'o'),sbj = 'o'+M.gen('sbj').replace(/\./g,'o'),arr = [],ten = ['Thể Loại','Nhạc Điệu','Độ Tuổi','Tính Cách','Màu Sắc','Khẩu Vị','Nhóm Máu','Giới Tính','Ngày Sinh'],tec = [5,5,4,2,7,3,5,3,12],loai = ['Nhạc Việt','Nhạc Hoa','Nhạc Hàn','Quốc Tế','Không Lời','Êm Dịu','Buồn','Vui','Giật Gân','Đọc Ráp','Thiếu Nhi','Tuổi Teen','Thanh Niên','Người Lớn','Hướng Nội','Hướng Ngoại','#FFFFFF-Trắng','#0000FF-Xanh','#000000-Đen','#FF0000-Đỏ','#FF4500-Cam','#FFFF00-Vàng','#8A2BE2-Tím','Mặn','Ngọt','Nhạt','O','A','B','AB','Khác','Nam','Nữ','Khác','22/12 - 20/01','21/01 - 19/02','20/02 - 20/03','21/03 - 20/04','21/04 - 21/05','22/05 - 21/06','22/06 - 23/07','24/07 - 23/08','24/08 - 23/09','24/09 - 23/10','24/10 - 22/11','23/11 - 21/12'];for(i=0;i<ten.length;i++){var str = '',stc = '';str += "<p class='s"+i+"'><select "+(sbj.length>7&&!sbj.match('o'+i+'o')?"style='color:#ff4a4a'":'')+" name='"+i+"' size='1' onmouseover='this.focus()' onchange='M.sbj(this)'><option style='display:none'>"+ten[i]+"</option>";for(k=0;k<tec[i];k++){stc += "<option value='"+con+"' "+(obj.match('o'+con+'o')?"selected='selected'":'')+(loai[0].slice(0,1)=='#'?(" style='background:"+loai[0].split('-')[0]+";color:#6495ED'>Màu "+loai[0].split('-')[1]):(">"+loai[0]))+"</option>";con++;loai.shift()}arr.push(str+stc+'</select></p>')}$('obj').innerHTML = arr.join('')}if(location.href.match('\\?')&&location.href.match('nhacf=')){var lh = location.href;lh = lh.split('?')[1];if(lh.match('music=')){lh = parseInt(lh.split('music=')[1]);M.pay(lh)}if(lh.match('total='))M.sie(-1,1);if(lh.match('album='))M.sie(-1,0);if(lh.match('video='))M.xem(-1)}})}else this.fic()};this.loa();
													}
													var $ = function(x){return document.getElementById(x)},iput = document.getElementsByTagName('input'),M = new Music(),dag = tube = 0,swfobject = function(){var b="undefined",Q="object",n="Shockwave Flash",p="ShockwaveFlash.ShockwaveFlash",P="application/x-shockwave-flash",m="SWFObjectExprInst",j=window,K=document,T=navigator,o=[],N=[],i=[],d=[],J,Z=null,M=null,l=null,e=false,A=false;var h=function(){var v=typeof K.getElementById!=b&&typeof K.getElementsByTagName!=b&&typeof K.createElement!=b,AC=[0,0,0],x=null;if(typeof T.plugins!=b&&typeof T.plugins[n]==Q){x=T.plugins[n].description;if(x&&!(typeof T.mimeTypes!=b&&T.mimeTypes[P]&&!T.mimeTypes[P].enabledPlugin)){x=x.replace(/^.*\s+(\S+\s+\S+$)/,"$1");AC[0]=parseInt(x.replace(/^(.*)\..*$/,"$1"),10);AC[1]=parseInt(x.replace(/^.*\.(.*)\s.*$/,"$1"),10);AC[2]=/r/.test(x)?parseInt(x.replace(/^.*r(.*)$/,"$1"),10):0}}else{if(typeof j.ActiveXObject!=b){var y=null,AB=false;try{y=new ActiveXObject(p+".7")}catch(t){try{y=new ActiveXObject(p+".6");AC=[6,0,21];y.AllowScriptAccess="always"}catch(t){if(AC[0]==6){AB=true}}if(!AB){try{y=new ActiveXObject(p)}catch(t){}}}if(!AB&&y){try{x=y.GetVariable("$version");if(x){x=x.split(" ")[1].split(",");AC=[parseInt(x[0],10),parseInt(x[1],10),parseInt(x[2],10)]}}catch(t){}}}}var AD=T.userAgent.toLowerCase(),r=T.platform.toLowerCase(),AA=/webkit/.test(AD)?parseFloat(AD.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,q=false,z=r?/win/.test(r):/win/.test(AD),w=r?/mac/.test(r):/mac/.test(AD);/*@cc_on q=true;@if(@_win32)z=true;@elif(@_mac)w=true;@end@*/return{w3cdom:v,pv:AC,webkit:AA,ie:q,win:z,mac:w}}();var L=function(){if(!h.w3cdom){return }f(H);if(h.ie&&h.win){try{K.write("<script id=__ie_ondomload defer=true src=//:><\/script>");J=C("__ie_ondomload");if(J){I(J,"onreadystatechange",S)}}catch(q){}}if(h.webkit&&typeof K.readyState!=b){Z=setInterval(function(){if(/loaded|complete/.test(K.readyState)){E()}},10)}if(typeof K.addEventListener!=b){K.addEventListener("DOMContentLoaded",E,null)}R(E)}();function S(){if(J.readyState=="complete"){J.parentNode.removeChild(J);E()}}function E(){if(e){return }if(h.ie&&h.win){var v=a("span");try{var u=K.getElementsByTagName("body")[0].appendChild(v);u.parentNode.removeChild(u)}catch(w){return }}e=true;if(Z){clearInterval(Z);Z=null}var q=o.length;for(var r=0;r<q;r++){o[r]()}}function f(q){if(e){q()}else{o[o.length]=q}}function R(r){if(typeof j.addEventListener!=b){j.addEventListener("load",r,false)}else{if(typeof K.addEventListener!=b){K.addEventListener("load",r,false)}else{if(typeof j.attachEvent!=b){I(j,"onload",r)}else{if(typeof j.onload=="function"){var q=j.onload;j.onload=function(){q();r()}}else{j.onload=r}}}}}function H(){var t=N.length;for(var q=0;q<t;q++){var u=N[q].id;if(h.pv[0]>0){var r=C(u);if(r){N[q].width=r.getAttribute("width")?r.getAttribute("width"):"0";N[q].height=r.getAttribute("height")?r.getAttribute("height"):"0";if(c(N[q].swfVersion)){if(h.webkit&&h.webkit<312){Y(r)}W(u,true)}else{if(N[q].expressInstall&&!A&&c("6.0.65")&&(h.win||h.mac)){k(N[q])}else{O(r)}}}}else{W(u,true)}}}function Y(t){var q=t.getElementsByTagName(Q)[0];if(q){var w=a("embed"),y=q.attributes;if(y){var v=y.length;for(var u=0;u<v;u++){if(y[u].nodeName=="DATA"){w.setAttribute("src",y[u].nodeValue)}else{w.setAttribute(y[u].nodeName,y[u].nodeValue)}}}var x=q.childNodes;if(x){var z=x.length;for(var r=0;r<z;r++){if(x[r].nodeType==1&&x[r].nodeName=="PARAM"){w.setAttribute(x[r].getAttribute("name"),x[r].getAttribute("value"))}}}t.parentNode.replaceChild(w,t)}}function k(w){A=true;var u=C(w.id);if(u){if(w.altContentId){var y=C(w.altContentId);if(y){M=y;l=w.altContentId}}else{M=G(u)}if(!(/%$/.test(w.width))&&parseInt(w.width,10)<310){w.width="310"}if(!(/%$/.test(w.height))&&parseInt(w.height,10)<137){w.height="137"}K.title=K.title.slice(0,47)+" - Flash Player Installation";var z=h.ie&&h.win?"ActiveX":"PlugIn",q=K.title,r="MMredirectURL="+j.location+"&MMplayerType="+z+"&MMdoctitle="+q,x=w.id;if(h.ie&&h.win&&u.readyState!=4){var t=a("div");x+="SWFObjectNew";t.setAttribute("id",x);u.parentNode.insertBefore(t,u);u.style.display="none";var v=function(){u.parentNode.removeChild(u)};I(j,"onload",v)}U({data:w.expressInstall,id:m,width:w.width,height:w.height},{flashvars:r},x)}}function O(t){if(h.ie&&h.win&&t.readyState!=4){var r=a("div");t.parentNode.insertBefore(r,t);r.parentNode.replaceChild(G(t),r);t.style.display="none";var q=function(){t.parentNode.removeChild(t)};I(j,"onload",q)}else{t.parentNode.replaceChild(G(t),t)}}function G(v){var u=a("div");if(h.win&&h.ie){u.innerHTML=v.innerHTML}else{var r=v.getElementsByTagName(Q)[0];if(r){var w=r.childNodes;if(w){var q=w.length;for(var t=0;t<q;t++){if(!(w[t].nodeType==1&&w[t].nodeName=="PARAM")&&!(w[t].nodeType==8)){u.appendChild(w[t].cloneNode(true))}}}}}return u}function U(AG,AE,t){var q,v=C(t);if(v){if(typeof AG.id==b){AG.id=t}if(h.ie&&h.win){var AF="";for(var AB in AG){if(AG[AB]!=Object.prototype[AB]){if(AB.toLowerCase()=="data"){AE.movie=AG[AB]}else{if(AB.toLowerCase()=="styleclass"){AF+=' class="'+AG[AB]+'"'}else{if(AB.toLowerCase()!="classid"){AF+=" "+AB+'="'+AG[AB]+'"'}}}}}var AD="";for(var AA in AE){if(AE[AA]!=Object.prototype[AA]){AD+='<param name="'+AA+'" value="'+AE[AA]+'" />'}}v.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+AF+">"+AD+"</object>";i[i.length]=AG.id;q=C(AG.id)}else{if(h.webkit&&h.webkit<312){var AC=a("embed");AC.setAttribute("type",P);for(var z in AG){if(AG[z]!=Object.prototype[z]){if(z.toLowerCase()=="data"){AC.setAttribute("src",AG[z])}else{if(z.toLowerCase()=="styleclass"){AC.setAttribute("class",AG[z])}else{if(z.toLowerCase()!="classid"){AC.setAttribute(z,AG[z])}}}}}for(var y in AE){if(AE[y]!=Object.prototype[y]){if(y.toLowerCase()!="movie"){AC.setAttribute(y,AE[y])}}}v.parentNode.replaceChild(AC,v);q=AC}else{var u=a(Q);u.setAttribute("type",P);for(var x in AG){if(AG[x]!=Object.prototype[x]){if(x.toLowerCase()=="styleclass"){u.setAttribute("class",AG[x])}else{if(x.toLowerCase()!="classid"){u.setAttribute(x,AG[x])}}}}for(var w in AE){if(AE[w]!=Object.prototype[w]&&w.toLowerCase()!="movie"){F(u,w,AE[w])}}v.parentNode.replaceChild(u,v);q=u}}}return q}function F(t,q,r){var u=a("param");u.setAttribute("name",q);u.setAttribute("value",r);t.appendChild(u)}function X(r){var q=C(r);if(q&&(q.nodeName=="OBJECT"||q.nodeName=="EMBED")){if(h.ie&&h.win){if(q.readyState==4){B(r)}else{j.attachEvent("onload",function(){B(r)})}}else{q.parentNode.removeChild(q)}}}function B(t){var r=C(t);if(r){for(var q in r){if(typeof r[q]=="function"){r[q]=null}}r.parentNode.removeChild(r)}}function C(t){var q=null;try{q=K.getElementById(t)}catch(r){}return q}function a(q){return K.createElement(q)}function I(t,q,r){t.attachEvent(q,r);d[d.length]=[t,q,r]}function c(t){var r=h.pv,q=t.split(".");q[0]=parseInt(q[0],10);q[1]=parseInt(q[1],10)||0;q[2]=parseInt(q[2],10)||0;return(r[0]>q[0]||(r[0]==q[0]&&r[1]>q[1])||(r[0]==q[0]&&r[1]==q[1]&&r[2]>=q[2]))?true:false}function V(v,r){if(h.ie&&h.mac){return }var u=K.getElementsByTagName("head")[0],t=a("style");t.setAttribute("type","text/css");t.setAttribute("media","screen");if(!(h.ie&&h.win)&&typeof K.createTextNode!=b){t.appendChild(K.createTextNode(v+" {"+r+"}"))}u.appendChild(t);if(h.ie&&h.win&&typeof K.styleSheets!=b&&K.styleSheets.length>0){var q=K.styleSheets[K.styleSheets.length-1];if(typeof q.addRule==Q){q.addRule(v,r)}}}function W(t,q){var r=q?"visible":"hidden";if(e&&C(t)){C(t).style.visibility=r}else{V("#"+t,"visibility:"+r)}}function g(s){var r=/[\\\"<>\.;]/;var q=r.exec(s)!=null;return q?encodeURIComponent(s):s}var D=function(){if(h.ie&&h.win){window.attachEvent("onunload",function(){var w=d.length;for(var v=0;v<w;v++){d[v][0].detachEvent(d[v][1],d[v][2])}var t=i.length;for(var u=0;u<t;u++){X(i[u])}for(var r in h){h[r]=null}h=null;for(var q in swfobject){swfobject[q]=null}swfobject=null})}}();return{registerObject:function(u,q,t){if(!h.w3cdom||!u||!q){return }var r={};r.id=u;r.swfVersion=q;r.expressInstall=t?t:false;N[N.length]=r;W(u,false)},getObjectById:function(v){var q=null;if(h.w3cdom){var t=C(v);if(t){var u=t.getElementsByTagName(Q)[0];if(!u||(u&&typeof t.SetVariable!=b)){q=t}else{if(typeof u.SetVariable!=b){q=u}}}}return q},embedSWF:function(x,AE,AB,AD,q,w,r,z,AC){if(!h.w3cdom||!x||!AE||!AB||!AD||!q){return }AB+="";AD+="";if(c(q)){W(AE,false);var AA={};if(AC&&typeof AC===Q){for(var v in AC){if(AC[v]!=Object.prototype[v]){AA[v]=AC[v]}}}AA.data=x;AA.width=AB;AA.height=AD;var y={};if(z&&typeof z===Q){for(var u in z){if(z[u]!=Object.prototype[u]){y[u]=z[u]}}}if(r&&typeof r===Q){for(var t in r){if(r[t]!=Object.prototype[t]){if(typeof y.flashvars!=b){y.flashvars+="&"+t+"="+r[t]}else{y.flashvars=t+"="+r[t]}}}}f(function(){U(AA,y,AE);if(AA.id==AE){W(AE,true)}})}else{if(w&&!A&&c("6.0.65")&&(h.win||h.mac)){A=true;W(AE,false);f(function(){var AF={};AF.id=AF.altContentId=AE;AF.width=AB;AF.height=AD;AF.expressInstall=w;k(AF)})}}},getFlashPlayerVersion:function(){return{major:h.pv[0],minor:h.pv[1],release:h.pv[2]}},hasFlashPlayerVersion:c,createSWF:function(t,r,q){if(h.w3cdom){return U(t,r,q)}else{return undefined}},removeSWF:function(q){if(h.w3cdom){X(q)}},createCSS:function(r,q){if(h.w3cdom){V(r,q)}},addDomLoadEvent:f,addLoadEvent:R,getQueryParamValue:function(v){var u=K.location.search||K.location.hash;if(v==null){return g(u)}if(u){var t=u.substring(1).split("&");for(var r=0;r<t.length;r++){if(t[r].substring(0,t[r].indexOf("="))==v){return g(t[r].substring((t[r].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(A&&M){var q=C(m);if(q){q.parentNode.replaceChild(M,q);if(l){W(l,true);if(h.ie&&h.win){M.style.display="block"}}M=null;l=null;A=false}}}}}();
													function onYouTubePlayerReady(id){tube=tube||$(id);tube.addEventListener('onStateChange','M.you')}function Ae(x){M.sea(x.innerHTML);document.getElementsByTagName('input').search.value = M.noo(x.innerHTML)}
													document.onmouseup = function(){dag=0};document.onmousedown = function(){dag=1};$('search').onkeydown = function(e){var e = window.event||e;M.kea(e.keyCode)}