
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
  
      var myDebouncedFunction = _.debounce( function(event) { scaleVw(name, vw); }, 700);
      jQuery(window).on( "resize.mymethod", myDebouncedFunction);
  
      scaleVw(name, vw);
    };
  
    var scaleVw = function(name, vw) {
  
      var scrWidth = jQuery(document).width();
      var px = (scrWidth * vw) / 100;
      var fontSize = jQuery(name).css( 'font-size', px + "px" );
  };
  
  }
  
      
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
  
  
    $( '.imgrect' ).css( "left", "0" );
        
    enquire.register("(min-width : 1px) and (max-width: 381px)", {
        match : function() {
            /* li elements (list stuff) can't have left adjusted without inline or js styling, not even jQuery will. */
            document.getElementById("firstHeaderListItems").style.left="-50%",
            document.getElementById("ListItemsA1").style.width="100%",
            $('.vwLargerWindow-h3').css('font-size', '27px'),
            $('.vwLargerWindow-p').css('font-size', '19px'),
            $(".vwLargerWindow-li").css("font-size","19px"),
            $(".title").css("font-size","29px"),
            $(".subtitle").css("font-size","24px"),
            $(".pCaption").css("font-size","19px"),
            $('.paddingPush').css('padding-top', '199px').css('padding-bottom', '99px');
            
        }
    });
    
    
    enquire.register("(min-width : 382px) and (max-width: 598px)", {
        match : function() {
            /* li elements (list stuff) can't have left adjusted without inline or js styling, not even jQuery will. */
            document.getElementById("firstHeaderListItems").style.left="0",
            document.getElementById("ListItemsA1").style.width="auto",
            $('.vwLargerWindow-h3').css('font-size', '27px'),
            $('.vwLargerWindow-p').css('font-size', '19px'),
            $(".vwLargerWindow-li").css("font-size","19px"),
            $(".title").css("font-size","29px"),
            $(".subtitle").css("font-size","24px"),
            $(".pCaption").css("font-size","19px"),
            $('.paddingPush').css('padding-top', '149px').css('padding-bottom', '99px');
        }
    });
    
    
    
    
    
    enquire.register("(min-width: 1427px)", {
        match : function() {
          // Init object
    
          var supportVhVw = new SupportVhVw();
          supportVhVw.setVw(".vwLargerWindow-h3", 2.4);
          supportVhVw.setVw(".vwLargerWindow-p", 1.9);
          supportVhVw.setVw(".vwLargerWindow-li", 1.9);
          supportVhVw.setVw(".pCaption", 1.717);
          supportVhVw.setVw(".title", 2.9);
          supportVhVw.setVw(".subtitle", 2.2);
          $('.paddingPush').css('padding-top', '99px').css('padding-bottom', '99px');
          document.getElementById("ListItemsA1").style.width = "100%";
        }, 
        unmatch : function() {
          $(window).off( "resize.mymethod" );
        }
    });
    
    
    enquire.register("(min-width : 599px) and (max-width: 736px)", {
      match : function() {
        // Init object
        $(window).off( "resize.mymethod" );
        $('.vwLargerWindow-h3').css('font-size', '27px'),
        $('.vwLargerWindow-p').css('font-size', '19px'),
        $(".vwLargerWindow-li").css("font-size","19px"),
        $(".pCaption").css("font-size","19px"),
        $(".title").css("font-size","37px"),
        $(".subtitle").css("font-size","32px"),
        $('.paddingPush').css('padding-top', '99px').css('padding-bottom', '99px'),
        document.getElementById("ListItemsA1").style.width = "100%",
        document.getElementById("firstHeaderListItems").style.left="0";
      }
    });
          
    
    
        enquire.register("(min-width : 737px) and (max-width: 1426px)", {
          match : function() {
            // Init object
            $(window).off( "resize.mymethod" ),
            $('.vwLargerWindow-h3').css('font-size', '31px'),
            $('.vwLargerWindow-p').css('font-size', '22px'),
            $(".vwLargerWindow-li").css("font-size","22px"),
            $(".pCaption").css("font-size","19px"),
            $(".title").css("font-size","49px"),
            $(".subtitle").css("font-size","33px"),
            $('.paddingPush').css('padding-top', '99px').css('padding-bottom', '99px'),
            document.getElementById("firstHeaderListItems").style.left="0",
            document.getElementById("ListItemsA1").style.width = "100%";
          }
        });
  
  
  
  
  
  
  
    setInterval(function(){
      var onWidthChange1 = _.once(function() {
        


      $('.noIMGUTIL').remove();
      $('.imgrect>img').remove();
  

      $( '.imgrect>img' ).css( "position", "static" );
      $( '.imgrect' ).css( "position", "relative" );
      $( '.imgrect' ).css( "overflow", "visible" );
      $( '.imgrect>img' ).css( "display", "block" );
      $( '.imgrect>img' ).css( "position", "absolute" );
      $imgrectEls.refreshImgContainRect();
        
    });

    onWidthChange1();
      if($("img.afterIMGRECTonly").length==0) {
        $( ".actualContentRow" ).before( "<img class='afterIMGRECTonly' style='vertical-align: top; width:1px; position:absolute; visibility: hidden;' src='http://saving.love/empty.gif'>" );
        $( ".actualContentRow" ).before( "<img class='widthCheck' style='vertical-align: top; width:1px; position:absolute; visibility: hidden;' src='http://saving.love/empty.gif'>" );
      }

              var onWidthChange5 = _.once(function() {
                /* removes added linebreak classes */
                $("div[class*='lineBreakSection-']").each(function () {
                    $(this).removeClass(function (index, css) {
                        return (css.match(/(^|\s)lineBreakSection-\S+/g) || []).join(' ');
                    });
                });
  
              });
              onWidthChange5();
              var onWidthChange6 = _.once(function() {
                $("div[class*='lineBreakSectionContainingOnlyIMGRECT-']").each(function () {
                    $(this).removeClass(function (index, css) {
                        return (css.match(/(^|\s)lineBreakSectionContainingOnlyIMGRECT-\S+/g) || []).join(' ');
                    });
                });
    
              });
              onWidthChange6();
    
              var onWidthChange = _.once(function() {
    
                var onWidthChange7 = _.once(function() {
  
                  var targets = $(".actualContentCell");
    
        
                    // Get the first offset to start a comparison
                    var divOffset = targets.first().offset().top;
    
                    // Loop throught each .child to add a row is not the same offset.
                    var rows = 0;
                    var div_per_row = [];
                    var rowNum = 0;
                    
                    var onWidthChange8 = _.once(function() {
                      targets.each(function(){
                        if($(this).offset().top >= divOffset+1){
                          divOffset = $(this).offset().top;
                          rows++;
                        }
                        var onWidthChange9 = _.once(function() {
                          div_per_row[rows] = div_per_row[rows]+1 || 1;
                        });
                        onWidthChange9();
                      });
                    });
                    onWidthChange8();
                    
                    // Now you have a exact div per row count in an array. The variable that has the exact div per row count is div_per_row[rowNumber].
    
    
                    // Making fun with it. You could do whatever from this point.
                    var onWidthChange9 = _.once(function() {
  
                      var countz = 0;
                      for(i=0;i<div_per_row.length;i++){
                        for(k=0;k<div_per_row[i];k++){
                          var onWidthChange10 = _.once(function() {
                            rowNum = i+1;
                            $( targets ).eq(countz).addClass( 'lineBreakSection-'+rowNum );
                            countz++;
                            var onWidthChange11 = _.once(function() {
                            $( ".actualContentCell" ).each(function () {
                        
                        
         
                        $( '.lineBreakSection-' + rowNum ).has( '.imgrect, .imageCaptionContainer' ).each(function(){
                          
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
                    });
                    onWidthChange11();
                    });
                    onWidthChange10();
                        }
                      }
                  });
                  onWidthChange9();
    
    
    
    
    
    
    
    
 
    
                  var onWidthChangeCaptions = _.once(function() {
                    $( '.imageCaptionContainer' ).each(function(){





                      $( this ).height($(this).closest( '.actualContentCell').height());

                      $( this ).find( '.imgrectCaptionChild, .imageCaptionRowAbove' ).height(0);
                      var neededHeight = $( this ).find('.imageCaptionTBODY').height() - $( this ).find('.pCaption').height();
                      var neededWidth = $( this ).find( '.imageCaptionTBODY' ).width();


                        $( this ).find( '.imgrectCaptionChild, .imageCaptionRowAbove' ).height(neededHeight);
                        $( this ).find( '.imgrectCaption' ).width( neededWidth );


                      var nWidth = $( this ).find('.imgrectCaption').find( '.imgCaption' ).naturalWidth();
                      var nHeight = $( this ).find('.imgrectCaption').find( '.imgCaption' ).naturalHeight();
                      var containerWidth = $( this ).width();
                      var containerHeight = $( this ).find('.imgrectCaptionChild').height();
                      var widthCheck = $( '.widthCheck' ).height();
                      var imgRatio = nHeight/nWidth;
                      var containerRatio = containerHeight/containerWidth;
                        /* When alone, the width should always be a % and height should be auto. */
                        if ( ( imgRatio > containerRatio ) && (( (widthCheck > 5 && widthCheck < 13) && (!$(this).find('.imgrectCaptionChild').hasClass('col-xs-alone') ) ) || ( (widthCheck > 14 && widthCheck < 24) && (!$(this).find('.imgrectCaptionChild').hasClass('col-sm-alone') ) ) || ( (widthCheck > 25 && widthCheck < 35) && (!$(this).find('.imgrectCaptionChild').hasClass('col-md-alone') ) ) || ( (widthCheck > 36 && widthCheck < 45) && (!$(this).find('.imgrectCaptionChild').hasClass('col-lg-alone') ) ) )) {
                          $( this ).find('.imgrectCaption').find( '.imgrectCaptionChild>img' ).css('height', '100%').css('width', 'auto').css('position', 'relative').css('left', '-100%');
                        }
                        if ( ( imgRatio < containerRatio ) && (( (widthCheck > 5 && widthCheck < 13) && (!$(this).find('.imgrectCaptionChild').hasClass('col-xs-alone') ) ) || ( (widthCheck > 14 && widthCheck < 24) && (!$(this).find('.imgrectCaptionChild').hasClass('col-sm-alone') ) ) || ( (widthCheck > 25 && widthCheck < 35) && (!$(this).find('.imgrectCaptionChild').hasClass('col-md-alone') ) ) || ( (widthCheck > 36 && widthCheck < 45) && (!$(this).find('.imgrectCaptionChild').hasClass('col-lg-alone') ) ) )) {
                          $( this ).find('.imgrectCaption').find( '.imgrectCaptionChild>img' ).css('left', '-100%');
                          
                          if (widthCheck > 6 && widthCheck < 18) {
                            
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
                          if (widthCheck > 18 && widthCheck < 28) {
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
                          if (widthCheck > 28 && widthCheck < 38) {
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
                          if (widthCheck > 36 && widthCheck < 42) {
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
                        }






                        
                        if ( ( $(this).find('.imgrectCaptionChild').hasClass('col-xs-alone') && (widthCheck > 6 && widthCheck < 18) ) ) {

                          $( this ).find('.imgrectCaption').find( '.imgrectCaptionChild>img' ).css('left', '-100%');
                          $( this ).find('.imgrectCaption').css('left', 'auto');

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
                          $( this ).find('.imgrectCaption').find( '.imgrectCaptionChild>img' ).css('height', 'auto').css('position', 'relative').css('top', ($(this).find('.imageCaptionRowAbove').height()) - ($(this).find( '.imgrectCaptionChild>img' ).height()));
                          
                          $(this).find('.imgrectCaptionChild>img').css('position', 'relative');
                          $(this).find('.imgrectCaption').height($(this).find('.imgrectCaptionChild>img').height());
                          $(this).find('.imageCaptionRowAbove').height($(this).find('.imgrectCaptionChild>img').height());
                          
                          $(this).css('height', 'auto');
                          $(this).find('.imageCaptionContainer').css('height', 'auto');
                        }

                        if ( ( $(this).find('.imgrectCaptionChild').hasClass('col-sm-alone') && (widthCheck > 18 && widthCheck < 28) ) ) {
                          $( this ).find('.imgrectCaption').find( '.imgrectCaptionChild>img' ).css('left', '-100%');
                          $( this ).find('.imgrectCaption').css('left', 'auto');

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
                          $( this ).find('.imgrectCaption').find( '.imgrectCaptionChild>img' ).css('height', 'auto').css('position', 'relative').css('top', ($(this).find('.imageCaptionRowAbove').height()) - ($(this).find( '.imgrectCaptionChild>img' ).height()));
                          
                          $(this).find('.imgrectCaptionChild>img').css('position', 'relative');
                          $(this).find('.imgrectCaption').height($(this).find('.imgrectCaptionChild>img').height());
                          $(this).find('.imageCaptionRowAbove').height($(this).find('.imgrectCaptionChild>img').height());
                          $(this).css('height', 'auto');
                        }

                        if ( $(this).find('.imgrectCaptionChild').hasClass('col-md-alone') && (widthCheck > 28 && widthCheck < 38) ) {
                          $( this ).find('.imgrectCaption').find( '.imgrectCaptionChild>img' ).css('left', '-100%');
                          $( this ).find('.imgrectCaption').css('left', 'auto');
                          
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
                          $( this ).find('.imgrectCaption').find( '.imgrectCaptionChild>img' ).css('height', 'auto').css('position', 'relative').css('top', ($(this).find('.imageCaptionRowAbove').height()) - ($(this).find( '.imgrectCaptionChild>img' ).height()));
                          
                          $(this).find('.imgrectCaptionChild>img').css('position', 'relative');
                          $(this).find('.imgrectCaption').height($(this).find('.imgrectCaptionChild>img').height());
                          $(this).find('.imageCaptionRowAbove').height($(this).find('.imgrectCaptionChild>img').height());
                          $(this).css('height', 'auto');
                        }

                        if ( $(this).find('.imgrectCaptionChild').hasClass('col-lg-alone') && (widthCheck > 36 && widthCheck < 42) ) {
                          $( this ).find('.imgrectCaption').find( '.imgrectCaptionChild>img' ).css('left', '-100%');
                          $( this ).find('.imgrectCaption').css('left', 'auto');

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
                          $( this ).find('.imgrectCaption').find( '.imgrectCaptionChild>img' ).css('height', 'auto').css('position', 'relative').css('top', ($(this).find('.imageCaptionRowAbove').height()) - ($(this).find( '.imgrectCaptionChild>img' ).height()));
                          
                          $(this).find('.imgrectCaptionChild>img').css('position', 'relative');
                          $(this).find('.imgrectCaption').height($(this).find('.imgrectCaptionChild>img').height());
                          $(this).find('.imageCaptionRowAbove').height($(this).find('.imgrectCaptionChild>img').height());
                          $(this).css('height', 'auto');
                        }
                      
                        $( this ).find('.imgrectCaption').find( '.imgrectCaptionChild>img' ).css('position', 'relative').css('top', ($(this).find('.imageCaptionRowAbove').height()) - ($(this).find( '.imgrectCaptionChild>img' ).height()));
                        $( '.imgrectCaption' ).find( '.imgrectCaptionChild' ).show();
                        $('.imgrectCaption').find( '.imgrectCaptionChild>img' ).show();
                        $('.imgCaptionRowAbove').show();
                        $('.imgrectCaption').show();
                      
                
                    });
                  });

                  onWidthChangeCaptions();
    
    
    
    
    
    
                  var onWidthChange13 = _.once(function() {
                    
                  var rowNumTrue = rowNum+1;
    
                  for (var i = 0; i < rowNumTrue; i++) {
                    var onWidthChange14 = _.once(function() {
                      (function(ct){
                        var onWidthChange15 = _.once(function() {
                          var linkz = ".lineBreakSection-" + ct;
                          var imgrectCheck = 'lineBreakSectionContainingOnlyIMGRECT-'+ct;
                          var imgrectCheckForClass = '.lineBreakSectionContainingOnlyIMGRECT-'+ct;
                          $( linkz ).each(function(){
                            
                            $( this ).has('.imgrect').addClass( imgrectCheck );
                              var onWidthChange16 = _.once(function() {
                                  var flag = true;
    
  
                                  $(linkz).each(function(){
                                        if(!$(this).hasClass(imgrectCheck)) {
                                          flag = false;
                                        };
                                  });
                                    var onWidthChange17 = _.once(function() {
                                      $(imgrectCheckForClass).find('.imgrect>img').each(function(){
    
                                          srcOkay = $(this).prop('src');
    
                                          currentWidth = $( this ).closest('.imgrect').width();
                                          var onWidthChange18 = _.once(function() {
                                                $.imgUtil.calcNaturalWH(srcOkay).done(function(wh){
                                                  var onWidthChange19 = _.once(function() {
                                                      var imgrectHeightOverWidth = wh.height/wh.width;
                                                      var correctIMGRECTheight = imgrectHeightOverWidth*currentWidth;
          
                                                      if (flag) {
                                                        $( imgrectCheckForClass ).css('height', correctIMGRECTheight);
                                                        $( imgrectCheckForClass ).find('.imgrect').css('height', correctIMGRECTheight);
          
                                                      } else {
                                                        
                                                      };
                                                  });
                                                  onWidthChange19();
                                                });
                                          });
                                          onWidthChange18();
                                      });
                                    });
                                    onWidthChange17();
                                  });
                                  onWidthChange16();
                            });
    
                          });
                          onWidthChange15();
    
                      })(i);
                    });
                    onWidthChange14();
                  };
                  
                });
                onWidthChange13();

                
                });
                onWidthChange7();
  
                  var onWidthChangeLast = _.once(function() {
                    $( '.actualContentCell' ).css('height', 'auto');
                    $("img.afterIMGRECTonly").height( 0 );
                    $("img.afterIMGRECTonly").each(function(){
                      $(this).height( $(document).height() - $( this ).offset().top + $( this ).outerHeight());
                    });

                  });
                  onWidthChangeLast();
    
                });
  
          onWidthChange();
          var myDebouncedFunction = _.debounce( function(event) {
                onWidthChange();
          }, 1717);
    }, 100);
  
  };
  
  });