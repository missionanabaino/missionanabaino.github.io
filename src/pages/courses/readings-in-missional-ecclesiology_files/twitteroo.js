/*------------------------------------------------------------------------------
  jQuery Twitteroo Plugin v0.3
  Copyright (c) 2013 Church Plant Media
------------------------------------------------------------------------------*/

(function($){

  $.fn.twitteroo = function(user, options) {

    var box      = this,
    d        = new Date(),
    now      = d.getTime(),
    html     = '';

    settings = jQuery.extend({
      tweets : 1,
      months : ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    }, options);
	
	$.getJSON('/ajax/tweets', { count:settings.tweets, screen_name:user }, function(data){
	    display(data);
    })

    function display(data){   
      for(var i in data){
        html += '<div class="tweet-feed">';
        html += '<p class="tweet">'+_parseTweets(data[i].text);
        
        var created_at = data[i].created_at,
        post_time      = new Date(created_at).getTime(),         
        diff_ms        = Math.abs(now - post_time),
        one_hour       = 1000 * 60 * 60,
        milli          = Math.floor(diff_ms/one_hour),
        date_display   = milli > 1 ? milli+' hour'+(milli >=2 ? 's' : '')+' ago' : milli+' minutes ago';
        
        html += '</div>';
      }

      var twitlink = 'https://twitter.com/'+user

      box.append(html);
      $('.follow-btn').attr("href", twitlink)
    }
    
    function _parseTweets(str) {

      // Parses for links
      str = str.replace( /[A-Za-z]+:\/\/[A-Za-z0-9-_]+\.[A-Za-z0-9-_:%&\?\/.=]+/, function(url) {
        return url.link(url);
      });
      
      // Parses for @twitter_users
      str = str.replace( /[@]+[A-Za-z0-9-_]+/, function(u) {
        var username = u.replace('@','');
        return u.link('http://www.twitter.com/' + username);
      });
      
      // Parses for hashtags
      str = str.replace( /[#]+[A-Za-z0-9-_]+/, function(t) {
        var tag = t.replace('#','%23');
        return t.link('https://search.twitter.com/search?q=' + tag);
      });
      
      return str;
    }
    
  }

})(jQuery);