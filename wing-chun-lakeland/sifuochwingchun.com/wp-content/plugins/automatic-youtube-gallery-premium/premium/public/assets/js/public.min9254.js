!function(a){"use strict";function i(){a(".ayg-theme-inline").each(function(){var i,t,e,l,n,r,o,d;i=a(this),++ayg_public.gallery_index,i.addClass("ayg-theme-initialized"),t=i.data("params"),e=i.find(".ayg-item").eq(0),l=null,n="ayg-player-"+ayg_public.gallery_index,r=i.find(".ayg-pagination"),o=null,d="none",r.length>0&&(d=(o=r.find(".ayg-pagination-next-btn")).data("type")),i.on("click",".ayg-item",function(){l&&(l.destroy(),l=null),e=a(this),i.find(".ayg-active").removeClass("ayg-active"),e.addClass("ayg-active");var r=e.find(".ayg-thumbnail").data("id");e.find(".ayg-thumbnail-image-wrapper").append('<iframe id="'+n+'" class="ayg-player-iframe" width="100%" height="100%" src="about:blank" data-id="'+r+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'),l=ayg_init_player(n,{custom:{params:t,image:e.find(".ayg-thumbnail-image").attr("src")},events:{onStateChange:function(a){if(a.data==YT.PlayerState.PLAYING&&ayg_pause_other_players(n),a.data==YT.PlayerState.ENDED){if(1==t.autoadvance){if(l.stop(),e.is(":last-child")){if("more"==d||"none"==d)1==t.loop&&i.find(".ayg-item").eq(0).trigger("click");else if(o.is(":visible")){o.trigger("click");var r=setInterval(function(){0==i.find(".ayg-pagination.ayg-loading").length&&(clearInterval(r),i.find(".ayg-item").eq(0).trigger("click"))},1e3)}}else e.next(".ayg-item").trigger("click")}else 1==t.loop?l.play():l.stop()}}}});var s=e.find(".ayg-thumbnail").data("url");""!=s&&window.history.replaceState(null,null,s),1==t.autoadvance&&"more"==d&&e.is(":last-child")&&o.is(":visible")&&o.trigger("click")}),r.length>0&&ayg_init_pagination(r)}),a(".ayg-theme-playlist").each(function(){(function i(t){++ayg_public.gallery_index,t.addClass("ayg-theme-initialized");var e=t.data("params"),l=t.find(".ayg-item").eq(0),n="ayg-player-"+ayg_public.gallery_index;t.find(".ayg-player-iframe").attr("id",n);var r=ayg_init_player(n,{custom:{params:e,image:l.find(".ayg-thumbnail-image").attr("src")},events:{onStateChange:function(a){a.data==YT.PlayerState.PLAYING&&ayg_pause_other_players(n),a.data==YT.PlayerState.ENDED&&(1==e.autoadvance?(r.stop(),l.is(":last-child")?1==e.loop&&t.find(".ayg-item").eq(0).trigger("click"):l.next(".ayg-item").trigger("click")):1==e.loop&&r.play())}}});t.on("click",".ayg-item",function(){if(l=a(this),t.find(".ayg-active").removeClass("ayg-active"),l.addClass("ayg-active"),r.change({id:l.find(".ayg-thumbnail").data("id"),image:l.find(".ayg-thumbnail-image").attr("src")}),1==e.player_title){var i=l.find(".ayg-thumbnail").data("title");t.find(".ayg-player-title").html(i)}if(1==e.player_description){var n=l.find(".ayg-thumbnail-description").html();t.find(".ayg-player-description").html(n)}var o=l.find(".ayg-thumbnail").data("url");""!=o&&window.history.replaceState(null,null,o)})})(a(this))}),a(".ayg-theme-popup").each(function(){var i,t,e,l,n,r,o,d,s,c,g,p,y,f;i=a(this),++ayg_public.gallery_index,i.addClass("ayg-theme-initialized"),t=i.data("params"),e=null,l=0,n=i.find(".ayg-item").length,r=null,o="ayg-player-"+ayg_public.gallery_index,d=null,s=i.find(".ayg-pagination"),c=null,g="none",s.length>0&&(g=(c=s.find(".ayg-pagination-next-btn")).data("type")),p=function(a){if(e=i.find(".ayg-item").eq(a),r.change({id:e.find(".ayg-thumbnail").data("id"),image:e.find(".ayg-thumbnail-image").attr("src")}),1==t.player_title){var l=e.find(".ayg-thumbnail").data("title");d.contentContainer.find(".mfp-title").html(l)}if(1==t.player_description){var n=e.find(".ayg-thumbnail-description").html();d.contentContainer.find(".mfp-description").html(n)}var o=e.find(".ayg-thumbnail").data("url");""!=o&&window.history.replaceState(null,null,o),y()},y=function(){1==t.autoadvance&&"more"==g&&e.is(":last-child")&&c.is(":visible")&&c.trigger("click")},f='<div class="mfp-title-bar"><div class="mfp-close"></div></div><div class="mfp-iframe-scaler" style="padding-top:'+parseFloat(t.player_ratio)+'%;" ><iframe id="'+o+'" class="mfp-iframe" frameborder="0" scrolling="no" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>',(1==t.player_title||1==t.player_description)&&(f+='<div class="mfp-bottom-bar"><div class="ayg-popup-content"><h2 class="mfp-title"></h2><div class="mfp-description ayg-player-description"></div></div></div>'),i.magnificPopup({delegate:".ayg-item",type:"iframe",closeOnBgClick:!1,mainClass:"ayg-popup-wrapper",iframe:{markup:f},callbacks:{beforeOpen:function(){l=(d=a.magnificPopup.instance).index,(e=i.find(".ayg-item").eq(l)).attr("data-mfp-src","about:blank")},beforeAppend:function(){var a=e.find(".ayg-thumbnail").data("id");this.content.find("iframe").attr("data-id",a)},markupParse:function(a,i,e){1==t.player_title&&(i.title=e.el.find(".ayg-thumbnail").data("title")),1==t.player_description&&(i.description=e.el.find(".ayg-thumbnail-description").html())},open:function(){r=ayg_init_player(o,{custom:{params:t,image:e.find(".ayg-thumbnail-image").attr("src")},events:{onStateChange:function(a){if(a.data==YT.PlayerState.PLAYING&&ayg_pause_other_players(o),a.data==YT.PlayerState.ENDED){if(1==t.autoadvance){if(r.stop(),e.is(":last-child")){if("more"==g||"none"==g)1==t.loop&&d.next();else if(c.is(":visible")){c.trigger("click");var n=setInterval(function(){0==i.find(".ayg-pagination.ayg-loading").length&&(clearInterval(n),p(l=0))},1e3)}}else d.next()}else 1==t.loop?r.play():r.stop()}}}}),a.magnificPopup.instance.next=function(){++l>=(n=i.find(".ayg-item").length)&&(l=0),p(l)},a.magnificPopup.instance.prev=function(){--l<0&&(l=n-1),p(l)};var s=e.find(".ayg-thumbnail").data("url");""!=s&&window.history.replaceState(null,null,s),y()},close:function(){window.history.replaceState(null,null,ayg_public.current_url)}},gallery:{enabled:!0}}),s.length>0&&ayg_init_pagination(s),""!=ayg_public.gallery_id&&t.uid==ayg_public.gallery_id&&i.magnificPopup("open")}),a(".ayg-theme-slider").each(function(){var i=a(this);i.hasClass("ayg-theme-slider-popup")?e(i):i.hasClass("ayg-theme-slider-inline")?l(i):t(i)})}function t(i){++ayg_public.gallery_index,i.addClass("ayg-theme-initialized");var t=i.data("params"),e=i.find(".ayg-gallery"),l=i.find(".ayg-item").eq(0),n="top: "+t.arrow_top_offset+"; width: "+t.arrow_size+"; height: "+t.arrow_size+"; background: "+t.arrow_bg_color+"; border-radius: "+t.arrow_radius+"; font-size: "+t.arrow_icon_size+"; color: "+t.arrow_icon_color+"; line-height: "+t.arrow_size+";",r="ayg-player-"+ayg_public.gallery_index;i.find(".ayg-player-iframe").attr("id",r);var o=ayg_init_player(r,{custom:{params:t,image:l.find(".ayg-thumbnail-image").attr("src")},events:{onStateChange:function(a){a.data==YT.PlayerState.PLAYING&&ayg_pause_other_players(r),a.data==YT.PlayerState.ENDED&&(1==t.autoadvance?(o.stop(),l.is(":last-child")?1==t.loop&&i.find(".ayg-item").eq(0).trigger("click"):l.next(".ayg-item").trigger("click")):1==t.loop&&o.play())}}});i.on("click",".ayg-item",function(n){if(n.preventDefault(),l=a(this),i.find(".ayg-active").removeClass("ayg-active"),l.addClass("ayg-active"),o.change({id:l.find(".ayg-thumbnail").data("id"),image:l.find(".ayg-thumbnail-image").attr("src")}),1==t.player_title){var r=l.find(".ayg-thumbnail").data("title");i.find(".ayg-player-title").html(r)}if(1==t.player_description){var d=l.find(".ayg-thumbnail-description").html();i.find(".ayg-player-description").html(d)}var s=l.data("slick-index");e.slick("slickGoTo",s),a("html, body").animate({scrollTop:i.offset().top-ayg_public.top_offset},500,function(){var a=l.find(".ayg-thumbnail").data("url");""!=a&&window.history.replaceState(null,null,a)})}),e.on("init",function(a,t){l=i.find(".slick-slide.slick-current")}).slick({rtl:!!parseInt(t.is_rtl),prevArrow:'<div class="ayg-slick-prev" style="left: '+t.arrow_left_offset+"; "+n+'" role="button">&#10094;</div>',nextArrow:'<div class="ayg-slick-next" style="right: '+t.arrow_right_offset+"; "+n+'" role="button">&#10095;</div>',dotsClass:"ayg-slick-dots",customPaging:function(a,i){return'<div class="ayg-slick-dot" style="color: '+t.dot_color+"; font-size: "+t.dot_size+'" role="button">&#9679;</div>'}})}function e(i){++ayg_public.gallery_index,i.addClass("ayg-theme-initialized");var t=i.data("params"),e=i.find(".ayg-gallery"),l=null,n=0,r=i.find(".ayg-item").length,o=null,d="ayg-player-"+ayg_public.gallery_index,s=null,c="top: "+t.arrow_top_offset+"; width: "+t.arrow_size+"; height: "+t.arrow_size+"; background: "+t.arrow_bg_color+"; border-radius: "+t.arrow_radius+"; font-size: "+t.arrow_icon_size+"; color: "+t.arrow_icon_color+"; line-height: "+t.arrow_size+";",g=function(a){if(l=i.find(".ayg-item").eq(a),o.change({id:l.find(".ayg-thumbnail").data("id"),image:l.find(".ayg-thumbnail-image").attr("src")}),1==t.player_title){var e=l.find(".ayg-thumbnail").data("title");s.contentContainer.find(".mfp-title").html(e)}if(1==t.player_description){var n=l.find(".ayg-thumbnail-description").html();s.contentContainer.find(".mfp-description").html(n)}var r=l.find(".ayg-thumbnail").data("url");""!=r&&window.history.replaceState(null,null,r)},p='<div class="mfp-title-bar"><div class="mfp-close"></div></div><div class="mfp-iframe-scaler" style="padding-top:'+parseFloat(t.player_ratio)+'%;" ><iframe id="'+d+'" class="mfp-iframe" frameborder="0" scrolling="no" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>';(1==t.player_title||1==t.player_description)&&(p+='<div class="mfp-bottom-bar"><div class="ayg-popup-content"><h2 class="mfp-title"></h2><div class="mfp-description ayg-player-description"></div></div></div>'),e.magnificPopup({delegate:".ayg-item",type:"iframe",closeOnBgClick:!1,mainClass:"ayg-popup-wrapper",iframe:{markup:p},callbacks:{beforeOpen:function(){n=(s=a.magnificPopup.instance).index,(l=i.find(".ayg-item").eq(n)).attr("data-mfp-src","about:blank")},beforeAppend:function(){var a=l.find(".ayg-thumbnail").data("id");this.content.find("iframe").attr("data-id",a)},markupParse:function(a,i,e){1==t.player_title&&(i.title=e.el.find(".ayg-thumbnail").data("title")),1==t.player_description&&(i.description=e.el.find(".ayg-thumbnail-description").html())},open:function(){o=ayg_init_player(d,{custom:{params:t,image:l.find(".ayg-thumbnail-image").attr("src")},events:{onStateChange:function(a){a.data==YT.PlayerState.PLAYING&&ayg_pause_other_players(d),a.data==YT.PlayerState.ENDED&&(1==t.autoadvance?(o.stop(),l.is(":last-child")?1==t.loop&&s.next():s.next()):1==t.loop&&o.play())}}}),a.magnificPopup.instance.next=function(){++n>=(r=i.find(".ayg-item").length)&&(n=0),g(n)},a.magnificPopup.instance.prev=function(){--n<0&&(n=r-1),g(n)};var e=l.find(".ayg-thumbnail").data("url");""!=e&&window.history.replaceState(null,null,e)},close:function(){window.history.replaceState(null,null,ayg_public.current_url)}},gallery:{enabled:!0}}),e.slick({rtl:!!parseInt(t.is_rtl),prevArrow:'<div class="ayg-slick-prev" style="left: '+t.arrow_left_offset+"; "+c+'" role="button">&#10094;</div>',nextArrow:'<div class="ayg-slick-next" style="right: '+t.arrow_right_offset+"; "+c+'" role="button">&#10095;</div>',dotsClass:"ayg-slick-dots",customPaging:function(a,i){return'<div class="ayg-slick-dot" style="color: '+t.dot_color+"; font-size: "+t.dot_size+'" role="button">&#9679;</div>'}}),""!=ayg_public.gallery_id&&t.uid==ayg_public.gallery_id&&e.magnificPopup("open")}function l(i){++ayg_public.gallery_index,i.addClass("ayg-theme-initialized");var t=i.data("params"),e=i.find(".ayg-gallery"),l=i.find(".ayg-item").eq(0),n=null,r="ayg-player-"+ayg_public.gallery_index,o="top: "+t.arrow_top_offset+"; width: "+t.arrow_size+"; height: "+t.arrow_size+"; background: "+t.arrow_bg_color+"; border-radius: "+t.arrow_radius+"; font-size: "+t.arrow_icon_size+"; color: "+t.arrow_icon_color+"; line-height: "+t.arrow_size+";";i.on("click",".ayg-item",function(){n&&(n.destroy(),n=null),l=a(this),i.find(".ayg-active").removeClass("ayg-active"),l.addClass("ayg-active");var o=l.find(".ayg-thumbnail").data("id");l.find(".ayg-thumbnail-image-wrapper").append('<iframe id="'+r+'" class="ayg-player-iframe" width="100%" height="100%" src="about:blank" data-id="'+o+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'),n=ayg_init_player(r,{custom:{params:t,image:l.find(".ayg-thumbnail-image").attr("src")},events:{onStateChange:function(a){a.data==YT.PlayerState.PLAYING&&ayg_pause_other_players(r),a.data==YT.PlayerState.ENDED&&(1==t.autoadvance?(n.stop(),l.is(":last-child")?1==t.loop&&i.find(".ayg-item").eq(0).trigger("click"):l.next(".ayg-item").trigger("click")):1==t.loop&&n.play())}}});var d=l.data("slick-index");e.slick("slickGoTo",Math.max(0,d-1));var s=l.find(".ayg-thumbnail").data("url");""!=s&&window.history.replaceState(null,null,s)}),e.slick({rtl:!!parseInt(t.is_rtl),prevArrow:'<div class="ayg-slick-prev" style="left: '+t.arrow_left_offset+"; "+o+'" role="button">&#10094;</div>',nextArrow:'<div class="ayg-slick-next" style="right: '+t.arrow_right_offset+"; "+o+'" role="button">&#10095;</div>',dotsClass:"ayg-slick-dots",customPaging:function(a,i){return'<div class="ayg-slick-dot" style="color: '+t.dot_color+"; font-size: "+t.dot_size+'" role="button">&#9679;</div>'}})}a(function(){if(!0==window.ayg_is_ready?i():a(document).on("ayg.ready",function(){i()}),a(document).on("click",".ayg-popup-wrapper",function(){a.magnificPopup.close()}),a(document).on("click",".ayg-popup-wrapper a, .ayg-popup-wrapper button",function(a){a.stopPropagation()}),"undefined"!=typeof wp&&void 0!==wp.hooks){var n,r;wp.hooks.addFilter("ayg_block_init","automatic-youtube-gallery/block",function(i){return("slider"==i.theme||"slider-popup"==i.theme||"slider-inline"==i.theme)&&(r>0&&clearInterval(n),r=0,n=setInterval(function(){r++;var i=a(".ayg-theme-slider:not(.ayg-theme-initialized)");(i.length>0||r>=10)&&(clearInterval(n),r=0,i.each(function(){var i=a(this);i.hasClass("ayg-theme-slider-popup")?e(i):i.hasClass("ayg-theme-slider-inline")?l(i):t(i)}))},1e3)),i})}})}(jQuery);
