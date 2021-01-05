

$( document ).ready(function() {







  /* jQuery plugin to only run code if selector finds an existing match */
  $.fn.extend({
    'ifExists': function (callback) {
        if (this.length > 0) {
            return callback($(this));
        }
    }
  });
  
      
      
      
      
      
      
      
  
  function SupportVhVw() {
  
    this.setVw = function(name, vw) {
  
      var myDebouncedFunction = function(event) { scaleVw(name, vw); };
      jQuery(window).on( "resize.mymethod", myDebouncedFunction);
  
      scaleVw(name, vw);
    }
  
    var scaleVw = function(name, vw) {
  
      var scrWidth = jQuery(document).width();
      var px = (scrWidth * vw) / 100;
      var fontSize = jQuery(name).css( 'font-size', px + "px" );
  }
  
  };
  
      
  var $imgrectEls = $( '.imgrect' );
    
    $imgrectEls.imgContainRect({
      
      overrideImgPut: function($container, $img) {
        $container.empty();
        $container.append($img);
      }
  
    });
      
      
      
      
      
      
         
      
  
  function SupportVhVw() {
  
    this.setVw = function(name, vw) {
  
      var myDebouncedFunction = _.debounce( function(event) { scaleVw(name, vw); }, 700)
      jQuery(window).on( "resize.mymethod", myDebouncedFunction);
  
      scaleVw(name, vw);
    }
  
    var scaleVw = function(name, vw) {
  
      var scrWidth = jQuery(document).width();
      var px = (scrWidth * vw) / 100;
      var fontSize = jQuery(name).css( 'font-size', px + "px" );
  }
  
  };
  
      
  var $imgrectEls = $( '.imgrect' );

    $imgrectEls.imgContainRect({
      
      overrideImgPut: function($container, $img) {
        $container.empty();
        $container.append($img);
      }
  
    });
      
      
      
    (function($){
      var
      props = ['Width', 'Height'],
      prop;
    
      while (prop = props.pop()) {
      (function (natural, prop) {
        $.fn[natural] = (natural in new Image()) ? 
        function () {
        return this[0][natural];
        } : 
        function () {
        var 
        node = this[0],
        img,
        value;
    
        if (node.tagName.toLowerCase() === 'img') {
          img = new Image();
          img.src = node.src,
          value = img[prop];
        }
        return value;
        };
      }('natural' + prop, prop.toLowerCase()));
      }
    }(jQuery));
      
      
      
      
      
  
  
      
      
  
  window.onload = function() {
  
  

  
  
    setInterval(function(){
      $('.imgrectCaption').find( '.imgrectCaptionChild>img' ).hide();
      $('.imgCaptionRowAbove').hide();
      $( '.imgrectCaption' ).find( '.imgrectCaptionChild' ).hide();

      $( '.imgrect' ).css( "position", "relative" );
      $( '.imgrect' ).css( "overflow", "visible" );
      $imgrectEls.refreshImgContainRect();


      if($("img.afterIMGRECTonly").length==0) {
        $( ".actualContentRow" ).before( "<img class='afterIMGRECTonly' style='vertical-align: top; width:1px; position:absolute; visibility: hidden;' src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'>" );
        $( ".actualContentRow" ).before( "<img class='widthCheck' style='vertical-align: top; width:1px; position:absolute; visibility: hidden;' src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'>" );
      };
  
              var onWidthChange = _.once(function() {
  
  
  
                /* removes added linebreak classes */
                $("div[class*='lineBreakSection-']").each(function () {
                    $(this).removeClass(function (index, css) {
                        return (css.match(/(^|\s)lineBreakSection-\S+/g) || []).join(' ');
                    });
                });
  
                $("div[class*='lineBreakSectionContainingOnlyIMGRECT-']").each(function () {
                    $(this).removeClass(function (index, css) {
                        return (css.match(/(^|\s)lineBreakSectionContainingOnlyIMGRECT-\S+/g) || []).join(' ');
                    });
                });
  
  
  
  
  
                  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
                var targets = $(".actualContentCell");
        
            
        // Get the first offset to start a comparison
        var divOffset = targets.first().offset().top;
  
        // Loop throught each .child to add a row is not the same offset.
        var rows = 0;
        var div_per_row = [];
        var rowNum = 0;
  
        targets.each(function(){
          if($(this).offset().top >= divOffset+1){
            divOffset = $(this).offset().top;
            rows++;
          }
          div_per_row[rows] = div_per_row[rows]+1 || 1;
        });
  
        // Now you have a exact div per row count in an array. The variable that has the exact div per row count is div_per_row[rowNumber].
  
  
        // Making fun with it. You could do whatever from this point.
        var countz = 0;
        for(i=0;i<div_per_row.length;i++){
          for(k=0;k<div_per_row[i];k++){
  
            rowNum = i+1;
            $( targets ).eq(countz).addClass( 'lineBreakSection-'+rowNum );
            countz++;
  
            $( ".actualContentCell" ).each(function () {
        
        
  
        $( '.lineBreakSection-' + rowNum ).has( '.imgrect, .imageCaptionContainer' ).each(function () {
  
          var maxHeight = 0;
  
          $( '.lineBreakSection-' + rowNum ).not(":has(.imgrect)").not(":has(.imageCaptionContainer)").each(function(){
            if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
          });
  
          if ( maxHeight > 0 ) {
            $( this ).height( maxHeight );
            $( this ).find( '.imgrect' ).height( maxHeight );
          }
          if ( maxHeight < 1 ) {
            $( this ).css('height', 'auto');
          }
  
        });
  
  
  
        /* Now we need to adjust .imgrect (width 50% for col-md-6 for example) and height auto for the tallest aspect ratio if the linebreak section is totaled 0 height. */
        
  
      });
  
          }
        }
  
  
  
  
  
  
  
        var onWidthChangeCaptions = _.once(function() {
          $( '.imageCaptionContainer' ).each(function(){
            


            $( this ).find( '.imgrectCaptionChild' ).css('height', $( this ).find('.imgrectCaptionRowAbove').outerHeight());

            var nWidth = $( this ).find('.imgrectCaption').find( '.imgCaption' ).naturalWidth();
            var nHeight = $( this ).find('.imgrectCaption').find( '.imgCaption' ).naturalHeight();
            var containerWidth = $( this ).find('.imgrectCaption').width();
            var containerHeight = $( this ).find('.imgrectCaption').height();
            var widthCheck = $( '.widthCheck' ).height();

            var imgRatio = nHeight/nWidth;
            var containerRatio = containerHeight/containerWidth;

            if ( ( imgRatio > containerRatio ) && (( (widthCheck > 5 && widthCheck < 13) && (!$(this).find('.imgrectCaptionChild').hasClass('col-xs-alone') ) ) || ( (widthCheck > 14 && widthCheck < 24) && (!$(this).find('.imgrectCaptionChild').hasClass('col-sm-alone') ) ) || ( (widthCheck > 25 && widthCheck < 35) && (!$(this).find('.imgrectCaptionChild').hasClass('col-md-alone') ) ) || ( (widthCheck > 36 && widthCheck < 45) && (!$(this).find('.imgrectCaptionChild').hasClass('col-lg-alone') ) ) )) {
              $( this ).find('.imgrectCaption').find( '.imgrectCaptionChild>img' ).css('height', '100%');
              $( this ).find('.imgrectCaption').find( '.imgrectCaptionChild>img' ).css('width', 'auto');
            }
            if ( ( imgRatio < containerRatio ) && (( (widthCheck > 5 && widthCheck < 13) && (!$(this).find('.imgrectCaptionChild').hasClass('col-xs-alone') ) ) || ( (widthCheck > 14 && widthCheck < 24) && (!$(this).find('.imgrectCaptionChild').hasClass('col-sm-alone') ) ) || ( (widthCheck > 25 && widthCheck < 35) && (!$(this).find('.imgrectCaptionChild').hasClass('col-md-alone') ) ) || ( (widthCheck > 36 && widthCheck < 45) && (!$(this).find('.imgrectCaptionChild').hasClass('col-lg-alone') ) ) )) {
              $( this ).find('.imgrectCaption').find( '.imgrectCaptionChild>img' ).css('height', 'auto');
              $( this ).find('.imgrectCaption').find( '.imgrectCaptionChild>img' ).css('width', '100%');
            }
                        /* When alone, the width should always be a % and height should be auto. */
                        if ( ( $(this).find('.imgrectCaptionChild').hasClass('col-xs-alone') && (widthCheck > 6 && widthCheck < 18) ) ) {
                          $(this).find('.imgrectCaptionChild>img.col-xs-12').css('width', '99.9%').css('height', 'auto');
                          $(this).find('.imgrectCaptionChild>img.col-xs-11').css('width', '88%').css('height', 'auto');
                          $(this).find('.imgrectCaptionChild>img.col-xs-10').css('width', '80%').css('height', 'auto');
                          $(this).find('.imgrectCaptionChild>img.col-xs-9').css('width', '72%').css('height', 'auto');
                          $(this).find('.imgrectCaptionChild>img.col-xs-8').css('width', '64%').css('height', 'auto');
                          $(this).find('.imgrectCaptionChild>img.col-xs-7').css('width', '56%').css('height', 'auto');
                          $(this).find('.imgrectCaptionChild>img.col-xs-6').css('width', '48%').css('height', 'auto');
                          $(this).find('.imgrectCaptionChild>img.col-xs-5').css('width', '40%').css('height', 'auto');
                          $(this).find('.imgrectCaptionChild>img.col-xs-4').css('width', '32%').css('height', 'auto');
                          $(this).find('.imgrectCaptionChild>img.col-xs-3').css('width', '24%').css('height', 'auto');
                          $(this).find('.imgrectCaptionChild>img.col-xs-2').css('width', '16%').css('height', 'auto');
                          $(this).find('.imgrectCaptionChild>img.col-xs-1').css('width', '8%').css('height', 'auto');
                        }

                        if ( ( $(this).find('.imgrectCaptionChild').hasClass('col-sm-alone') && (widthCheck > 18 && widthCheck < 28) ) ) {
                          $(this).find('.imgrectCaptionChild>img.col-sm-12').css('width', '99.9%').css('height', 'auto');
                          $(this).find('.imgrectCaptionChild>img.col-sm-11').css('width', '88%').css('height', 'auto');
                          $(this).find('.imgrectCaptionChild>img.col-sm-10').css('width', '80%').css('height', 'auto');
                          $(this).find('.imgrectCaptionChild>img.col-sm-9').css('width', '72%').css('height', 'auto');
                          $(this).find('.imgrectCaptionChild>img.col-sm-8').css('width', '64%').css('height', 'auto');
                          $(this).find('.imgrectCaptionChild>img.col-sm-7').css('width', '56%').css('height', 'auto');
                          $(this).find('.imgrectCaptionChild>img.col-sm-6').css('width', '48%').css('height', 'auto');
                          $(this).find('.imgrectCaptionChild>img.col-sm-5').css('width', '40%').css('height', 'auto');
                          $(this).find('.imgrectCaptionChild>img.col-sm-4').css('width', '32%').css('height', 'auto');
                          $(this).find('.imgrectCaptionChild>img.col-sm-3').css('width', '24%').css('height', 'auto');
                          $(this).find('.imgrectCaptionChild>img.col-sm-2').css('width', '16%').css('height', 'auto');
                          $(this).find('.imgrectCaptionChild>img.col-sm-1').css('width', '8%').css('height', 'auto');
                        }

                        if ( $(this).find('.imgrectCaptionChild').hasClass('col-md-alone') && (widthCheck > 28 && widthCheck < 38) ) {
                          $(this).find('.imgrectCaptionChild>img.col-md-12').css('width', '99.9%').css('height', 'auto');
                          $(this).find('.imgrectCaptionChild>img.col-md-11').css('width', '88%').css('height', 'auto');
                          $(this).find('.imgrectCaptionChild>img.col-md-10').css('width', '80%').css('height', 'auto');
                          $(this).find('.imgrectCaptionChild>img.col-md-9').css('width', '72%').css('height', 'auto');
                          $(this).find('.imgrectCaptionChild>img.col-md-8').css('width', '64%').css('height', 'auto');
                          $(this).find('.imgrectCaptionChild>img.col-md-7').css('width', '56%').css('height', 'auto');
                          $(this).find('.imgrectCaptionChild>img.col-md-6').css('width', '48%').css('height', 'auto');
                          $(this).find('.imgrectCaptionChild>img.col-md-5').css('width', '40%').css('height', 'auto');
                          $(this).find('.imgrectCaptionChild>img.col-md-4').css('width', '32%').css('height', 'auto');
                          $(this).find('.imgrectCaptionChild>img.col-md-3').css('width', '24%').css('height', 'auto');
                          $(this).find('.imgrectCaptionChild>img.col-md-2').css('width', '16%').css('height', 'auto');
                          $(this).find('.imgrectCaptionChild>img.col-md-1').css('width', '8%').css('height', 'auto');
                        }

                        if ( $(this).find('.imgrectCaptionChild').hasClass('col-lg-alone') && (widthCheck > 36 && widthCheck < 42) ) {
                          $(this).find('.imgrectCaptionChild>img.col-lg-12').css('width', '99.9%').css('height', 'auto');
                          $(this).find('.imgrectCaptionChild>img.col-lg-11').css('width', '88%').css('height', 'auto');
                          $(this).find('.imgrectCaptionChild>img.col-lg-10').css('width', '80%').css('height', 'auto');
                          $(this).find('.imgrectCaptionChild>img.col-lg-9').css('width', '72%').css('height', 'auto');
                          $(this).find('.imgrectCaptionChild>img.col-lg-8').css('width', '64%').css('height', 'auto');
                          $(this).find('.imgrectCaptionChild>img.col-lg-7').css('width', '56%').css('height', 'auto');
                          $(this).find('.imgrectCaptionChild>img.col-lg-6').css('width', '48%').css('height', 'auto');
                          $(this).find('.imgrectCaptionChild>img.col-lg-5').css('width', '40%').css('height', 'auto');
                          $(this).find('.imgrectCaptionChild>img.col-lg-4').css('width', '32%').css('height', 'auto');
                          $(this).find('.imgrectCaptionChild>img.col-lg-3').css('width', '24%').css('height', 'auto');
                          $(this).find('.imgrectCaptionChild>img.col-lg-2').css('width', '16%').css('height', 'auto');
                          $(this).find('.imgrectCaptionChild>img.col-lg-1').css('width', '8%').css('height', 'auto');
                        }
            $( '.imgrectCaption' ).find( '.imgrectCaptionChild' ).show();
            $('.imgrectCaption').find( '.imgrectCaptionChild>img' ).show();
            $('.imgCaptionRowAbove').show();
      
          });
        });

        onWidthChangeCaptions();
  
  





      var rowNumTrue = rowNum+1;
  
      for (var i = 0; i < rowNumTrue; i++) {
          (function(ct){
  
              var linkz = ".lineBreakSection-" + ct;
              var imgrectCheck = 'lineBreakSectionContainingOnlyIMGRECT-'+ct;
              var imgrectCheckForClass = '.lineBreakSectionContainingOnlyIMGRECT-'+ct;
              $( linkz ).each(function(){
  
                $( this ).has('.imgrect').addClass( imgrectCheck );
  
                      var flag = true;
  
                      $(linkz).each(function(){
                            if(!$(this).hasClass(imgrectCheck)) {
                              flag = false;
                            };
                      });
  
                          $(imgrectCheckForClass).find('.imgrect>img').each(function(){
  
                              srcOkay = $(this).prop('src');
  
                              currentWidth = $( this ).closest('.imgrect').width();
  
                              $.imgUtil.calcNaturalWH(srcOkay).done(function(wh){
  
                                    var imgrectHeightOverWidth = wh.height/wh.width;
                                    var correctIMGRECTheight = imgrectHeightOverWidth*currentWidth;
  
                                    if (flag) {
                                      $( imgrectCheckForClass ).css('height', correctIMGRECTheight);
                                      $( imgrectCheckForClass ).find('.imgrect').css('height', correctIMGRECTheight);
  
                                    } else {
                                      
                                    };
  
                              });
                        });
                });
  
  
  
          })(i);
      };

      

  
              });

  
          onWidthChange();
          var myDebouncedFunction = _.debounce( function(event) {
                onWidthChange();
          }, 1717);


          var onWidthChangeLast = _.once(function() {

            $("img.afterIMGRECTonly").height( 0 );
            $("img.afterIMGRECTonly").each(function(){
                $(this).height( $(document).height() - $( this ).offset().top + $( this ).outerHeight()-1);
            });
    
          });
          onWidthChangeLast();
  
  
  
  
  
  
          
  
  
      jQuery(window).on( "resize.mymethodtwo", myDebouncedFunction);
  
  
  
    }, 100);
  
  };
  
  });