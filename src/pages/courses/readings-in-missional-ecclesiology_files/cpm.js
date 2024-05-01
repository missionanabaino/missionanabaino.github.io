// Cross browser spinner. fgnass.github.com/spin.js
(function(a,b,c){function O(a){H(arguments,function(b,d){a[b]===c&&(a[b]=d)});return a}function N(a){H(arguments,function(b,c){a[m][M(a,b)||b]=c});return a}function M(a,b){var d=a[m],f,g;if(d[b]!==c)return b;b=b.charAt(0).toUpperCase()+b.slice(1);for(g=0;g<E[e];g++){f=E[g]+b;if(d[f]!==c)return f}}function L(a,b){var c=[j,b,~~(a*100)].join("-"),d="{"+j+":"+a+"}",f;if(!F[c]){for(f=0;f<E[e];f++)try{K.insertRule("@"+(E[f]&&"-"+E[f].toLowerCase()+"-"||"")+"keyframes "+c+"{0%{"+j+":1}"+b+"%"+d+"to"+d+"}",K.cssRules[e])}catch(g){}F[c]=1}return c}function J(a,b,c){c&&!c[t]&&J(a,c),a.insertBefore(b,c||null);return a}function I(a){var c=b.createElement(a||"div");H(arguments,function(a,b){c[a]=b});return c}function H(a,b){var c=~~((a[e]-1)/2);for(var d=1;d<=c;d++)b(a[d*2-1],a[d*2])}var d="width",e="length",f="radius",g="lines",h="trail",i="color",j="opacity",k="speed",l="shadow",m="style",n="height",o="left",p="top",q="px",r="childNodes",s="firstChild",t="parentNode",u="position",v="relative",w="absolute",x="animation",y="transform",z="Origin",A="Timeout",B="coord",C="#000",D=m+"Sheets",E="webkit0Moz0ms0O".split(0),F={},G;J(b.getElementsByTagName("head")[0],I(m));var K=b[D][b[D][e]-1],P=function(a){this.opts=O(a||{},g,12,h,100,e,7,d,5,f,10,i,C,j,.25,k,1)},Q=P.prototype={spin:function(b){var c=this,d=c.el=c[g](c.opts);b&&J(b,N(d,o,~~(b.offsetWidth/2)+q,p,~~(b.offsetHeight/2)+q),b[s]);if(!G){var e=c.opts,f=0,i=20/e[k],l=(1-e[j])/(i*e[h]/100),m=i/e[g];(function n(){f++;for(var b=e[g];b;b--){var h=Math.max(1-(f+b*m)%i*l,e[j]);c[j](d,e[g]-b,h,e)}c[A]=c.el&&a["set"+A](n,50)})()}return c},stop:function(){var b=this,d=b.el;a["clear"+A](b[A]),d[t]&&d[t].removeChild(d),b.el=c;return b}};Q[g]=function(a){function s(b,c){return N(I(),u,w,d,a[e]+a[d]+q,n,a[d]+q,"background",b,"boxShadow",c,y+z,o,y,"rotate("+~~(360/a[g]*m)+"deg) translate("+a[f]+q+",0)","borderRadius","100em")}var b=N(I(),u,v),c=L(a[j],a[h]),m=0,r;for(;m<a[g];m++)r=N(I(),u,w,p,1+~(a[d]/2)+q,y,"translate3d(0,0,0)",x,c+" "+1/a[k]+"s linear infinite "+(1/a[g]/a[k]*m-1/a[k])+"s"),a[l]&&J(r,N(s(C,"0 0 4px "+C),p,2+q)),J(b,J(r,s(a[i],"0 0 1px rgba(0,0,0,.1)")));return b},Q[j]=function(a,b,c){a[r][b][m][j]=c};var R="behavior",S="url(#default#VML)",T="group0roundrect0fill0stroke".split(0);(function(){var a=N(I(T[0]),R,S),b;if(!M(a,y)&&a.adj){for(b=0;b<T[e];b++)K.addRule(T[b],R+":"+S);Q[g]=function(){function s(c,e,l){J(k,J(N(h(),"rotation",360/a[g]*c+"deg",o,~~e),J(N(I(T[1],"arcsize",1),d,b,n,a[d],o,a[f],p,-a[d]/2,"filter",l),I(T[2],i,a[i],j,a[j]),I(T[3],j,0))))}function h(){return N(I(T[0],B+"size",c+" "+c,B+z,-b+" "+ -b),d,c,n,c)}var a=this.opts,b=a[e]+a[d],c=2*b,k=h(),m=~(a[e]+a[f]+a[d])+q,r;if(a[l])for(r=1;r<=a[g];r++)s(r,-2,"progid:DXImage"+y+".Microsoft.Blur(pixel"+f+"=2,make"+l+"=1,"+l+j+"=.3)");for(r=1;r<=a[g];r++)s(r);return J(N(I(),"margin",m+" 0 0 "+m,u,v),k)},Q[j]=function(a,b,c,d){d=d[l]&&d[g]||0,a[s][r][b+d][s][s][j]=c}}else G=M(a,x)})(),a.Spinner=P})(window,document)

$(document).ready(function(){
   	$('a.watch, .sl_video a, .sl_watch a, #watch a, a.video, a[href$=".m4v"],a[href$=".mp4"],a[href$=".mov"]').live('click', playVideo);
   	$('#events-calendar caption a').live('click', switchCalendar);
   	$('a[href^="http://cpmassets.com/video"]').live('click', playVideo);
   	$('#nav a[href^="http"]').attr('target', '_blank');
	$('.external').attr('target', '_blank');		
	$('head').append('<link rel="stylesheet" type="text/css" href="//cpmlightsail2.com/modules/cpm.min.css" />');
	$('a[href$=".mp3"],a[href$=".m4a"],a[href$=".wav"],a[href^="/mediaPlayer/#sermonaudio"],a[href^="/mediaPlayer/#episodeaudio"]').live('click', openAudioPlayer);
    $('#cpm-page-password').bind({
        focus: function(){
            if(this.placeholder) $(this).data('placeholder', this.placeholder);
            if(!this.val) this.placeholder = '';
        },
        blur : function(){
            if(!this.value || this.value == ''){
                var me = $(this), ph = me.data('placeholder') || 'Enter password here';
                this.placeholder = ph;
            }
        }
    })
	galleryCheck();
	chmsCheck();
	typekitCheck();
});


function openAudioPlayer(){

    // Download link
    if(this.href.match(/download\.php/)) return true;
    
    //if($.inArray(site, allowed) != -1){
    var url, dims = 'width=638,height=550';
    if(this.href.match(/mediaPlayer/i)){
        if(this.href.match(/\?url/)){ // Standalone audio player
            dims = 'width=638,height=350';
            url = '/mediaPlayer/#audio/'+encodeURIComponent(this.href.split('?url=')[1]);
        } else {
            url = this.href;
        }
    } else {
        dims = 'width=638,height=350';
        if(this.href.match(/assets\.com\/audio/)){ // Standalone audio player
            url = '/mediaPlayer/#audio/'+encodeURIComponent(this.href.split('?audio=')[1]);
        } else {
            url = '/mediaPlayer/#audio/'+encodeURIComponent(this.href);
        }

    }
    window.open(url, 'audioPlayer', dims);
    return false;
}

function iPadVideo( url ){
    var id = url.split('/').pop(),
        ajaxURL = url.match(/sermon/) ? '/api/sermons/'+id : '/api/files/'+id;

    $.getJSON(ajaxURL, function( obj ){
        var file = url.match(/sermon/) ? obj.video : obj;
        if(file.type != 'Video') return;
        if(file.url == 'embed'){

            // Vimeo or Youtube video?
            var services = file.content.match(/src="(http:)?(\/\/)?(player\.|www\.)?(youtube|vimeo)\.com\/(video|embed)\/([a-zA-Z0-9_-]+)/);
            if(services){
                var vimeo = services[4] == 'vimeo' ? true : false
                var $vidurl = [
                    'http://',
                    (vimeo ? 'player.' : ''),
                    services[4],
                    '.com/',
                    vimeo ? 'video/' : 'embed/',
                    services[6]
                ].join('');

                var theUrl = $vidurl;
            } else {
                var theUrl = url;
            }
        } else {
            var theUrl = file.url;
        }
        window.location = theUrl;
    })
}

function playVideo(){
    var place, dims="width=638,height=550";

    var matches = this.href.match(/mediaplayer\/#(sermon|episode)?video/i);
    if(matches){
        place = this.href;
    } else if( this.href.match(/assets\.com\/video/)){
        var parts = this.href.split('?');
        if(parts.length > 1){
            var matches = parts[1].match(/video=([0-9]+)/);
            if(matches.length > 1){
                var id = parseInt(matches[1]);
                dims = 'width=638,height=455';
                place  = '/mediaPlayer/#video/'+id;
            }
        }
    } else {
        place = '/mediaPlayer/#video/'+encodeURIComponent(this.href);
    }

    if(window.navigator.userAgent.indexOf('iPad') != -1){
        iPadVideo( place );
        return false;
    }

	window.open(place, 'videoPlayer', dims);
	return false;
}

function switchCalendar(){
	var spinObj = {
        lines   : 12,
		length  : 7,
		width   : 3,
		radius  : 7.5,
		color   : '#000',
		speed   : 2,
		trail   : 60
	};
	var parts = $(this).attr('href').split('/');
	var month = parts.pop();
	var year  = parts.pop();
    var cal = $('div.calendar[data-type="calendar"]');
    if(cal.length){
    	cal.height(500);
    	var calSpin = new Spinner(spinObj);
    	calSpin.spin( cal[0] );
        var calOpts = {
            service : cal.attr('data-calservice'),
            year    : year,
            month   : month,
            dateWrap: cal.attr('data-datewrap'),
            prevNext: cal.attr('data-prevnext')
        };
        $.get('/ajax/calendar', calOpts, function(r){
        	calSpin.stop();
        	cal.removeAttr('style').html(r);
        })

    } else {

        $.get('/ajax/events/', { month:month, year:year }, function(data){
            var cal	= $('#events-calendar'),
                cat = $('#event-cat').val();
            cal.html(data);

            if(cat && cat !== '0') cal.find('li').not('.category_'+cat).hide();
        });
    }
	return false;
}

function galleryCheck(){
    var gals = $('.cpmGallery');
    if(gals.length){
        $.getScript('//cpmlightsail2.com/modules/gallery/jquery.easing.min.js', function(){
            $.getScript('//cpmlightsail2.com/modules/gallery/gallery.min.js', function(){
                $('head').append('<link rel="stylesheet" href="//cpmlightsail2.com/modules/gallery/cpmGallery.css" />');
                gals.cpmGallery();
            })
        })
    }
}

function getServiceOptions( $el )
{
    return opts = {
        type : $el.attr('data-type'),
        items: $el.attr('data-items'),
        title: $el.attr('data-title'),
        group: $el.attr('data-group'),
        type : $el.attr('data-type')
    };
};

function chmsCheck(){
	var spinObj = {
        lines   : 12,
		length  : 7,
		width   : 3,
		radius  : 7.5,
		color   : '#000',
		speed   : 2,
		trail   : 60
	};
		
    var cities = $('div[data-service="city"]');
    if(cities.length){
        cities.each(function(){
            var city = $(this);
            var opts = getServiceOptions( city );
            city.html('<p>Loading...</p>')
            $.get('/ajax/city', opts, function(r){
                city.html(r).addClass('loaded');
            });
        });
    }

    var ccb = $('div[data-service="ccb"]');
    if(ccb.length){
        ccb.each(function(){
            var $el = $(this);
            var opts= getServiceOptions( $el );
            $el.html('<p>Loading...</p>');
            $.get('/ajax/ccb', opts, function(r){
                $el.html(r).addClass('loaded');
            })
        })
    }
		    
    // Calendar
    var cal = $('div.calendar[data-type="calendar"]');
    if(cal.length){      
        $('a.category-btn,div.category-box').remove();     	
        var calOpts = {
            service : cal.attr('data-calservice'),
            year    : cal.attr('data-year'),
            month   : cal.attr('data-month'),
            dateWrap: cal.attr('data-datewrap'),
            prevNext: cal.attr('data-prevnext')
        };            

        cal.height(500);            
        var calSpinner = new Spinner(spinObj);
        calSpinner.spin(cal[0]);
		
        $.get('/ajax/calendar', calOpts, function(r){
        	calSpinner.stop();
            cal.removeAttr('style').html(r);
        });
    }
    
    // Eventlist
    $('*[data-type="eventlist"]').each(function(){
        var t = $(this)
        	,group 		= t.attr('data-group')
        	,groupby	= t.attr('data-groupby')
        	,con		= window.console
            ,listOpts = {
                service : t.attr('data-listservice'),
                start   : t.attr('data-startdate'),
                end     : t.attr('data-enddate'),
                limit   : t.attr('data-limit')
            }
            ,parent     = t.parent()
            ,templ      = parent.data('CPM.eventTemplate')

        if(group) listOpts['group']		= group;
        if(groupby) listOpts['groupby'] = groupby;
        
        // Check first if the parent has data called CPM.eventTemplate        
        if(templ){
            listOpts.template = typeof templ == 'object' ? JSON.stringify(templ) : templ;
        } else if(window.CPM){
            if(CPM.eventTemplate){                  	
                listOpts.template = typeof CPM.eventTemplate == 'object' ? JSON.stringify(CPM.eventTemplate) : CPM.eventTemplate;
            }
        }	        

		t.height(250);
		var listSpinner = new Spinner(spinObj);
		listSpinner.spin(t[0]);
		$.ajax({
			url : '/ajax/eventlist',
			type : 'get',
			data : listOpts,
			error:function(req, status,err){
				listSpinner.stop();
				t.removeAttr('style');
				t.html('<p>No events scheduled</p>');
			},
			success : function(r){
				listSpinner.stop();
				t.removeAttr('style').html(r);
			}
		});
    })

}

/**
 * Check if there are any HTML5 video inserts
 */
(function html5VideoCheck(){
    var vids = $('video.video-js');
    if(vids.length){
        $.getScript('https://vjs.zencdn.net/4.2.2/video.js', function(){
            $('head')
            	.append('<style type="text/css"> .videoinner * { padding:0 !important; }</style>')
				.append('<link rel="stylesheet" type="text/css" href="https://s3.amazonaws.com/churchplantmedia-cms/mediaplayer/inpagevideo.css" />');

            vids.each(function(){
	            var $video		= $(this);
				var $parent		= $video.parent().parent();
	            var dataWidth	= parseInt( $video.parent().attr('data-width') );				
                var parentWidth = $parent.width();
                var videoWidth;
				var videoHeight;
				
				if(dataWidth && dataWidth != 100){
					parentWidth	= parentWidth*(dataWidth/100);
					videoHeight = parentWidth*(9/16);
				} else {
					videoHeight = parentWidth*(9/16);
				}

                this.width  = parentWidth;
                this.height = videoHeight;

                var options = {
                    techOrder : ['html5','flash']
                };

                _V_(this, options,
                    function(){
                        var controls = $('.vjs-control-bar').addClass('vjs-fade-in');

                        this.on('mouseenter', function(){
                            controls.removeClass('vjs-fade-out').addClass('vjs-fade-in');
                        });
                        this.on('mouseleave', function(){
                            controls.removeClass('vjs-fade-in').addClass('vjs-fade-out');
                        });
                    }
                );
            })
        });
    }
})();

/**
 * Typekit async loading
 */
function typekitCheck(){
    // Check for script template
    var kitScript = $('script[data-typekit]'),
        config = { scriptTimeout:3000},
        h = $('html'),
        t = function(){
            setTimeout(function(){
                h.removeClass('wf-loading').addClass('wf-inactive');
            }, config.scriptTimeout)
        },
        d = false,
        tk;

    // If script, inject the typekit script and load the configuration values
    if(kitScript.length){
        config.kitId = kitScript.attr('data-typekit');
        h.addClass('wf-loading');

        tk = document.createElement('script');
        tk.src = '//use.typekit.net/'+config.kitId+'.js';
        tk.type = 'text/javascript';
        tk.async = 'true';
        tk.onload = tk.onreadystatechange = function() {
            var rs = this.readyState;
            if (d || rs && rs != 'complete' && rs != 'loaded') return;

            d = true;
            clearTimeout(t);
            try {
                Typekit.load(config);
            } catch (e) {}
        }
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(tk,s);
    }
};