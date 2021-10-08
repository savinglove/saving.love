
$( document ).ready(function() {

$('.hoverEffect-1').remove();

/* jQuery plugin to make data-links clickable too */
$(document).ready(function() {
  $("[data-link]").click(function() {
    window.location.href = $(this).attr("data-link");
    return false;
  });
});

  $.ifixpng('/blank.gif');

/* jQuery plugin to force redraw an element. Use after the page has loaded and all jquery has ran. Use it like this: $('.theElement').repaint(); */
  $.fn.repaint = function() {
    var display = this.css('display');
    this.css('display', 'none');
    this.css('display', display);
  };

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
    
        
    var $imgrectEls = $( '.imgrect, .imgrectagain' );


      $imgrectEls.imgContainRect({
        
        overrideImgPut: function($container, $img) {
          $container.empty();
          $container.append($img);
        }
    
      });
        
        
        
        
        
        
        
    
    
        
        
    

    
    
        
    


    enquire.register("(min-width : 1px) and (max-width: 709px)", {
        match : function() {
            /* li elements (list stuff) can't have left adjusted without inline or js styling, not even jQuery will. */
            document.getElementById("firstHeaderListItems").style.left="-50%",
            document.getElementById("listItemsA1").style.width="100%",
            $('.vwLargerWindow-h3').css('font-size', '27px'),
            $('.vwLargerWindow-p').css('font-size', '19px'),
            $(".vwLargerWindow-li").css("font-size","19px"),
            $(".title").css("font-size","29px"),
            $(".subtitle").css("font-size","24px"),
            $(".pCaption").css("font-size","19px");
            $('.paddingPush').css('padding-top', '199px').css('padding-bottom', '99px');
        }
    });
    
    
    enquire.register("(min-width : 710px) and (max-width: 777px)", {
        match : function() {
            /* li elements (list stuff) can't have left adjusted without inline or js styling, not even jQuery will. */
            document.getElementById("firstHeaderListItems").style.left="-50%",
            document.getElementById("listItemsA1").style.width="auto",
            $('.vwLargerWindow-h3').css('font-size', '27px'),
            $('.vwLargerWindow-p').css('font-size', '19px'),
            $(".vwLargerWindow-li").css("font-size","19px"),
            $(".title").css("font-size","29px"),
            $(".subtitle").css("font-size","24px"),
            $(".pCaption").css("font-size","19px");
            $('.paddingPush').css('padding-top', '149px').css('padding-bottom', '99px');
        }
    });
    
    
    
    
    
    enquire.register("(min-width: 1399px)", {
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
          document.getElementById("listItemsA1").style.width = "100%";
    
        }, 
        unmatch : function() {
          $(window).off( "resize.mymethod" );
        }
    });
    
    
    enquire.register("(min-width : 778px) and (max-width: 1188px)", {
      match : function() {
        // Init object
        $(window).off( "resize.mymethod" );
        $('.vwLargerWindow-h3').css('font-size', '27px'),
        $('.vwLargerWindow-p').css('font-size', '19px'),
        $(".vwLargerWindow-li").css("font-size","19px"),
        $(".title").css("font-size","37px"),
        $(".subtitle").css("font-size","32px"),
        $('.paddingPush').css('padding-top', '99px').css('padding-bottom', '99px');
        document.getElementById("listItemsA1").style.width = "100%",
        document.getElementById("firstHeaderListItems").style.left="-50%";
        
      }
    });
          
    
    
        enquire.register("(min-width : 1189px) and (max-width: 1398px)", {
          match : function() {
            // Init object
            $(window).off( "resize.mymethod" ),
            $('.vwLargerWindow-h3').css('font-size', '31px'),
            $('.vwLargerWindow-p').css('font-size', '22px'),
            $(".vwLargerWindow-li").css("font-size","22px"),
            $(".pCaption").css("font-size","19px"),
            $(".title").css("font-size","49px"),
            $(".subtitle").css("font-size","33px"),
            $('.paddingPush').css('padding-top', '99px').css('padding-bottom', '99px');
            document.getElementById("firstHeaderListItems").style.left="0",
            document.getElementById("listItemsA1").style.width = "100%";
          }
        });
  
  
  
  
  








      var onWidthChange3 = _.once(function() {
        if($("img.afterIMGRECTonly").length==0) {
            $( ".actualContentRow" ).before( "<img class='afterIMGRECTonly' style='vertical-align: top; width:1px; position:absolute; visibility: hidden;' src='empty.gif'>" );
            $( ".actualContentRow" ).before( "<img class='widthCheck' style='vertical-align: top; width:1px; position:absolute; visibility: hidden;' src='empty.gif'>" );
          };
      });

      onWidthChange3();



              var onWidthChange = _.once(function() {

                
  



                var onWidthChange4 = _.once(function() {
                  $( "div[class*='lineBreakSectionContainingOnlyIMGRECT-']" ).css( 'height', '0' );
                  $( '.imgrect' ).css( 'height', '0' );
                });
                onWidthChange4();

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


                      $(this).find('.textCaptionRow, .textCaptionRow>div').height($(this).find('.pCaption'));
                      $(this).find('.imageCaptionRowAbove').css('width', '100%');
                      $(this).find('.imgrectCaptionChild, .imgrectCaption, .imageCaptionRowAbove').height(($(this).closest('.actualContentCell').height()) - ($(this).find('.pCaption').height()));
                      $(this).find('.imgrectagain>img').css('top', 'auto').css('bottom', '0').css('position', 'absolute');
                      
                      var imageWidth = $(this).find('.imgrectagain>img').width();
                      var imageHeight = $(this).find('.imgrectagain>img').height();

                      var imageRatio = imageHeight/imageWidth;

                      var widthCheck = $( '.widthCheck' ).height();





                      if ((widthCheck > 6 && widthCheck < 18) && (!$(this).find('.imgrectCaptionChild').hasClass('col-lg-alone'))) {
                        $(this).find('.imgrectCaptionChild.ie-xs-36').css('width', '100%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-xs-35').css('width', '97.22222222%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-xs-34').css('width', '94.44444444%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-xs-33').css('width', '91.66666667%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-xs-32').css('width', '88.88888889%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-xs-31').css('width', '86.11111111%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-xs-30').css('width', '83.33333333%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-xs-29').css('width', '80.55555556%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-xs-28').css('width', '77.77777778%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-xs-27').css('width', '75%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-xs-26').css('width', '72.22222222%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-xs-25').css('width', '69.44444444%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-xs-24').css('width', '66.66666667%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-xs-23').css('width', '63.88888889%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-xs-22').css('width', '61.11111111%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-xs-21').css('width', '58.33333333%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-xs-20').css('width', '55.55555556%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-xs-19').css('width', '52.77777778%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-xs-18').css('width', '50%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-xs-17').css('width', '47.22222222%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-xs-16').css('width', '44.44444444%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-xs-15').css('width', '41.66666667%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-xs-14').css('width', '38.88888889%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-xs-13').css('width', '36.11111111%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-xs-12').css('width', '33.33333333%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-xs-11').css('width', '30.55555556%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-xs-10').css('width', '27.77777778%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-xs-9').css('width', '25%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-xs-8').css('width', '22.22222222%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-xs-7').css('width', '19.44444444%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-xs-6').css('width', '16.66666667%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-xs-5').css('width', '13.88888889%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-xs-4').css('width', '11.11111111%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-xs-3').css('width', '8.33333333%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-xs-2').css('width', '5.55555556%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-xs-1').css('width', '2.77777778%').css('height', 'auto');  
                      
                      }
                      if ((widthCheck > 18 && widthCheck < 28) && (!$(this).find('.imgrectCaptionChild').hasClass('col-sm-alone'))) {
                        $(this).find('.imgrectCaptionChild.ie-sm-36').css('width', '100%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-sm-35').css('width', '97.22222222%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-sm-34').css('width', '94.44444444%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-sm-33').css('width', '91.66666667%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-sm-32').css('width', '88.88888889%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-sm-31').css('width', '86.11111111%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-sm-30').css('width', '83.33333333%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-sm-29').css('width', '80.55555556%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-sm-28').css('width', '77.77777778%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-sm-27').css('width', '75%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-sm-26').css('width', '72.22222222%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-sm-25').css('width', '69.44444444%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-sm-24').css('width', '66.66666667%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-sm-23').css('width', '63.88888889%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-sm-22').css('width', '61.11111111%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-sm-21').css('width', '58.33333333%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-sm-20').css('width', '55.55555556%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-sm-19').css('width', '52.77777778%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-sm-18').css('width', '50%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-sm-17').css('width', '47.22222222%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-sm-16').css('width', '44.44444444%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-sm-15').css('width', '41.66666667%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-sm-14').css('width', '38.88888889%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-sm-13').css('width', '36.11111111%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-sm-12').css('width', '33.33333333%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-sm-11').css('width', '30.55555556%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-sm-10').css('width', '27.77777778%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-sm-9').css('width', '25%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-sm-8').css('width', '22.22222222%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-sm-7').css('width', '19.44444444%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-sm-6').css('width', '16.66666667%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-sm-5').css('width', '13.88888889%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-sm-4').css('width', '11.11111111%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-sm-3').css('width', '8.33333333%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-sm-2').css('width', '5.55555556%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-sm-1').css('width', '2.77777778%').css('height', 'auto');  
                      
                      }
                      if ((widthCheck > 28 && widthCheck < 38) && (!$(this).find('.imgrectCaptionChild').hasClass('col-md-alone'))) {
                        $(this).find('.imgrectCaptionChild.ie-md-36').css('width', '100%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-md-35').css('width', '97.22222222%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-md-34').css('width', '94.44444444%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-md-33').css('width', '91.66666667%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-md-32').css('width', '88.88888889%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-md-31').css('width', '86.11111111%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-md-30').css('width', '83.33333333%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-md-29').css('width', '80.55555556%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-md-28').css('width', '77.77777778%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-md-27').css('width', '75%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-md-26').css('width', '72.22222222%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-md-25').css('width', '69.44444444%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-md-24').css('width', '66.66666667%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-md-23').css('width', '63.88888889%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-md-22').css('width', '61.11111111%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-md-21').css('width', '58.33333333%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-md-20').css('width', '55.55555556%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-md-19').css('width', '52.77777778%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-md-18').css('width', '50%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-md-17').css('width', '47.22222222%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-md-16').css('width', '44.44444444%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-md-15').css('width', '41.66666667%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-md-14').css('width', '38.88888889%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-md-13').css('width', '36.11111111%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-md-12').css('width', '33.33333333%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-md-11').css('width', '30.55555556%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-md-10').css('width', '27.77777778%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-md-9').css('width', '25%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-md-8').css('width', '22.22222222%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-md-7').css('width', '19.44444444%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-md-6').css('width', '16.66666667%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-md-5').css('width', '13.88888889%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-md-4').css('width', '11.11111111%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-md-3').css('width', '8.33333333%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-md-2').css('width', '5.55555556%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-md-1').css('width', '2.77777778%').css('height', 'auto');  
                      
                      }
                      if ((widthCheck > 36 && widthCheck < 42) && (!$(this).find('.imgrectCaptionChild').hasClass('col-lg-alone'))) {
                        $(this).find('.imgrectCaptionChild.ie-lg-36').css('width', '100%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-lg-35').css('width', '97.22222222%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-lg-34').css('width', '94.44444444%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-lg-33').css('width', '91.66666667%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-lg-32').css('width', '88.88888889%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-lg-31').css('width', '86.11111111%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-lg-30').css('width', '83.33333333%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-lg-29').css('width', '80.55555556%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-lg-28').css('width', '77.77777778%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-lg-27').css('width', '75%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-lg-26').css('width', '72.22222222%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-lg-25').css('width', '69.44444444%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-lg-24').css('width', '66.66666667%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-lg-23').css('width', '63.88888889%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-lg-22').css('width', '61.11111111%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-lg-21').css('width', '58.33333333%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-lg-20').css('width', '55.55555556%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-lg-19').css('width', '52.77777778%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-lg-18').css('width', '50%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-lg-17').css('width', '47.22222222%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-lg-16').css('width', '44.44444444%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-lg-15').css('width', '41.66666667%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-lg-14').css('width', '38.88888889%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-lg-13').css('width', '36.11111111%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-lg-12').css('width', '33.33333333%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-lg-11').css('width', '30.55555556%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-lg-10').css('width', '27.77777778%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-lg-9').css('width', '25%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-lg-8').css('width', '22.22222222%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-lg-7').css('width', '19.44444444%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-lg-6').css('width', '16.66666667%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-lg-5').css('width', '13.88888889%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-lg-4').css('width', '11.11111111%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-lg-3').css('width', '8.33333333%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-lg-2').css('width', '5.55555556%').css('height', 'auto');
                        $(this).find('.imgrectCaptionChild.ie-lg-1').css('width', '2.77777778%').css('height', 'auto'); 
                      
                      }













                      if ( ( (widthCheck > 6) && (widthCheck < 13) ) && ($(this).find('.imgrectCaptionChild').hasClass('col-xs-alone')) ) {
                        $(this).find('.imgrectCaptionChild.ie-xs-36').parent().css('width', '100%');
                        $(this).find('.imgrectCaptionChild.ie-xs-35').parent().css('width', '97.22222222%');
                        $(this).find('.imgrectCaptionChild.ie-xs-34').parent().css('width', '94.44444444%');
                        $(this).find('.imgrectCaptionChild.ie-xs-33').parent().css('width', '91.66666667%');
                        $(this).find('.imgrectCaptionChild.ie-xs-32').parent().css('width', '88.88888889%');
                        $(this).find('.imgrectCaptionChild.ie-xs-31').parent().css('width', '86.11111111%');
                        $(this).find('.imgrectCaptionChild.ie-xs-30').parent().css('width', '83.33333333%');
                        $(this).find('.imgrectCaptionChild.ie-xs-29').parent().css('width', '80.55555556%');
                        $(this).find('.imgrectCaptionChild.ie-xs-28').parent().css('width', '77.77777778%');
                        $(this).find('.imgrectCaptionChild.ie-xs-27').parent().css('width', '75%');
                        $(this).find('.imgrectCaptionChild.ie-xs-26').parent().css('width', '72.22222222%');
                        $(this).find('.imgrectCaptionChild.ie-xs-25').parent().css('width', '69.44444444%');
                        $(this).find('.imgrectCaptionChild.ie-xs-24').parent().css('width', '66.66666667%');
                        $(this).find('.imgrectCaptionChild.ie-xs-23').parent().css('width', '63.88888889%');
                        $(this).find('.imgrectCaptionChild.ie-xs-22').parent().css('width', '61.11111111%');
                        $(this).find('.imgrectCaptionChild.ie-xs-21').parent().css('width', '58.33333333%');
                        $(this).find('.imgrectCaptionChild.ie-xs-20').parent().css('width', '55.55555556%');
                        $(this).find('.imgrectCaptionChild.ie-xs-19').parent().css('width', '52.77777778%');
                        $(this).find('.imgrectCaptionChild.ie-xs-18').parent().css('width', '50%');
                        $(this).find('.imgrectCaptionChild.ie-xs-17').parent().css('width', '47.22222222%');
                        $(this).find('.imgrectCaptionChild.ie-xs-16').parent().css('width', '44.44444444%');
                        $(this).find('.imgrectCaptionChild.ie-xs-15').parent().css('width', '41.66666667%');
                        $(this).find('.imgrectCaptionChild.ie-xs-14').parent().css('width', '38.88888889%');
                        $(this).find('.imgrectCaptionChild.ie-xs-13').parent().css('width', '36.11111111%');
                        $(this).find('.imgrectCaptionChild.ie-xs-12').parent().css('width', '33.33333333%');
                        $(this).find('.imgrectCaptionChild.ie-xs-11').parent().css('width', '30.55555556%');
                        $(this).find('.imgrectCaptionChild.ie-xs-10').parent().css('width', '27.77777778%');
                        $(this).find('.imgrectCaptionChild.ie-xs-9').parent().css('width', '25%');
                        $(this).find('.imgrectCaptionChild.ie-xs-8').parent().css('width', '22.22222222%');
                        $(this).find('.imgrectCaptionChild.ie-xs-7').parent().css('width', '19.44444444%');
                        $(this).find('.imgrectCaptionChild.ie-xs-6').parent().css('width', '16.66666667%');
                        $(this).find('.imgrectCaptionChild.ie-xs-5').parent().css('width', '13.88888889%');
                        $(this).find('.imgrectCaptionChild.ie-xs-4').parent().css('width', '11.11111111%');
                        $(this).find('.imgrectCaptionChild.ie-xs-3').parent().css('width', '8.33333333%');
                        $(this).find('.imgrectCaptionChild.ie-xs-2').parent().css('width', '5.55555556%');
                        $(this).find('.imgrectCaptionChild.ie-xs-1').parent().css('width', '2.77777778%');
                        
                        $(this).find('.imgrectagain').find('img').css('width', '100%');
                        
                        
                      var containerWidth = $(this).find('.imgrectCaptionChild').width();

                      var neededHeight = imageRatio * containerWidth;

                  


                        $(this).find('.imgrectCaptionChild, .imgrectCaption, .imageCaptionRowAbove').css('height', neededHeight);
                      }

                      if ( ( (widthCheck > 13) && (widthCheck < 28) ) && ($(this).find('.imgrectCaptionChild').hasClass('col-sm-alone')) ) {

                        $(this).find('.imgrectCaptionChild.ie-sm-36').parent().css('width', '100%');
                        $(this).find('.imgrectCaptionChild.ie-sm-35').parent().css('width', '97.22222222%');
                        $(this).find('.imgrectCaptionChild.ie-sm-34').parent().css('width', '94.44444444%');
                        $(this).find('.imgrectCaptionChild.ie-sm-33').parent().css('width', '91.66666667%');
                        $(this).find('.imgrectCaptionChild.ie-sm-32').parent().css('width', '88.88888889%');
                        $(this).find('.imgrectCaptionChild.ie-sm-31').parent().css('width', '86.11111111%');
                        $(this).find('.imgrectCaptionChild.ie-sm-30').parent().css('width', '83.33333333%');
                        $(this).find('.imgrectCaptionChild.ie-sm-29').parent().css('width', '80.55555556%');
                        $(this).find('.imgrectCaptionChild.ie-sm-28').parent().css('width', '77.77777778%');
                        $(this).find('.imgrectCaptionChild.ie-sm-27').parent().css('width', '75%');
                        $(this).find('.imgrectCaptionChild.ie-sm-26').parent().css('width', '72.22222222%');
                        $(this).find('.imgrectCaptionChild.ie-sm-25').parent().css('width', '69.44444444%');
                        $(this).find('.imgrectCaptionChild.ie-sm-24').parent().css('width', '66.66666667%');
                        $(this).find('.imgrectCaptionChild.ie-sm-23').parent().css('width', '63.88888889%');
                        $(this).find('.imgrectCaptionChild.ie-sm-22').parent().css('width', '61.11111111%');
                        $(this).find('.imgrectCaptionChild.ie-sm-21').parent().css('width', '58.33333333%');
                        $(this).find('.imgrectCaptionChild.ie-sm-20').parent().css('width', '55.55555556%');
                        $(this).find('.imgrectCaptionChild.ie-sm-19').parent().css('width', '52.77777778%');
                        $(this).find('.imgrectCaptionChild.ie-sm-18').parent().css('width', '50%');
                        $(this).find('.imgrectCaptionChild.ie-sm-17').parent().css('width', '47.22222222%');
                        $(this).find('.imgrectCaptionChild.ie-sm-16').parent().css('width', '44.44444444%');
                        $(this).find('.imgrectCaptionChild.ie-sm-15').parent().css('width', '41.66666667%');
                        $(this).find('.imgrectCaptionChild.ie-sm-14').parent().css('width', '38.88888889%');
                        $(this).find('.imgrectCaptionChild.ie-sm-13').parent().css('width', '36.11111111%');
                        $(this).find('.imgrectCaptionChild.ie-sm-12').parent().css('width', '33.33333333%');
                        $(this).find('.imgrectCaptionChild.ie-sm-11').parent().css('width', '30.55555556%');
                        $(this).find('.imgrectCaptionChild.ie-sm-10').parent().css('width', '27.77777778%');
                        $(this).find('.imgrectCaptionChild.ie-sm-9').parent().css('width', '25%');
                        $(this).find('.imgrectCaptionChild.ie-sm-8').parent().css('width', '22.22222222%');
                        $(this).find('.imgrectCaptionChild.ie-sm-7').parent().css('width', '19.44444444%');
                        $(this).find('.imgrectCaptionChild.ie-sm-6').parent().css('width', '16.66666667%');
                        $(this).find('.imgrectCaptionChild.ie-sm-5').parent().css('width', '13.88888889%');
                        $(this).find('.imgrectCaptionChild.ie-sm-4').parent().css('width', '11.11111111%');
                        $(this).find('.imgrectCaptionChild.ie-sm-3').parent().css('width', '8.33333333%');
                        $(this).find('.imgrectCaptionChild.ie-sm-2').parent().css('width', '5.55555556%');
                        $(this).find('.imgrectCaptionChild.ie-sm-1').parent().css('width', '2.77777778%');
                        
                        $(this).find('.imgrectagain').find('img').css('width', '100%');
                        
                        
                      var containerWidth = $(this).find('.imgrectCaptionChild').width();

                      var neededHeight = imageRatio * containerWidth;

                
                        $(this).find('.imgrectCaptionChild, .imgrectCaption, .imageCaptionRowAbove').css('height', neededHeight);


                    }
                    if ( ( (widthCheck > 23) && (widthCheck < 38) ) && ($(this).find('.imgrectCaptionChild').hasClass('col-md-alone')) ) {

                      $(this).find('.imgrectCaptionChild.ie-md-36').parent().css('width', '100%');
                      $(this).find('.imgrectCaptionChild.ie-md-35').parent().css('width', '97.22222222%');
                      $(this).find('.imgrectCaptionChild.ie-md-34').parent().css('width', '94.44444444%');
                      $(this).find('.imgrectCaptionChild.ie-md-33').parent().css('width', '91.66666667%');
                      $(this).find('.imgrectCaptionChild.ie-md-32').parent().css('width', '88.88888889%');
                      $(this).find('.imgrectCaptionChild.ie-md-31').parent().css('width', '86.11111111%');
                      $(this).find('.imgrectCaptionChild.ie-md-30').parent().css('width', '83.33333333%');
                      $(this).find('.imgrectCaptionChild.ie-md-29').parent().css('width', '80.55555556%');
                      $(this).find('.imgrectCaptionChild.ie-md-28').parent().css('width', '77.77777778%');
                      $(this).find('.imgrectCaptionChild.ie-md-27').parent().css('width', '75%');
                      $(this).find('.imgrectCaptionChild.ie-md-26').parent().css('width', '72.22222222%');
                      $(this).find('.imgrectCaptionChild.ie-md-25').parent().css('width', '69.44444444%');
                      $(this).find('.imgrectCaptionChild.ie-md-24').parent().css('width', '66.66666667%');
                      $(this).find('.imgrectCaptionChild.ie-md-23').parent().css('width', '63.88888889%');
                      $(this).find('.imgrectCaptionChild.ie-md-22').parent().css('width', '61.11111111%');
                      $(this).find('.imgrectCaptionChild.ie-md-21').parent().css('width', '58.33333333%');
                      $(this).find('.imgrectCaptionChild.ie-md-20').parent().css('width', '55.55555556%');
                      $(this).find('.imgrectCaptionChild.ie-md-19').parent().css('width', '52.77777778%');
                      $(this).find('.imgrectCaptionChild.ie-md-18').parent().css('width', '50%');
                      $(this).find('.imgrectCaptionChild.ie-md-17').parent().css('width', '47.22222222%');
                      $(this).find('.imgrectCaptionChild.ie-md-16').parent().css('width', '44.44444444%');
                      $(this).find('.imgrectCaptionChild.ie-md-15').parent().css('width', '41.66666667%');
                      $(this).find('.imgrectCaptionChild.ie-md-14').parent().css('width', '38.88888889%');
                      $(this).find('.imgrectCaptionChild.ie-md-13').parent().css('width', '36.11111111%');
                      $(this).find('.imgrectCaptionChild.ie-md-12').parent().css('width', '33.33333333%');
                      $(this).find('.imgrectCaptionChild.ie-md-11').parent().css('width', '30.55555556%');
                      $(this).find('.imgrectCaptionChild.ie-md-10').parent().css('width', '27.77777778%');
                      $(this).find('.imgrectCaptionChild.ie-md-9').parent().css('width', '25%');
                      $(this).find('.imgrectCaptionChild.ie-md-8').parent().css('width', '22.22222222%');
                      $(this).find('.imgrectCaptionChild.ie-md-7').parent().css('width', '19.44444444%');
                      $(this).find('.imgrectCaptionChild.ie-md-6').parent().css('width', '16.66666667%');
                      $(this).find('.imgrectCaptionChild.ie-md-5').parent().css('width', '13.88888889%');
                      $(this).find('.imgrectCaptionChild.ie-md-4').parent().css('width', '11.11111111%');
                      $(this).find('.imgrectCaptionChild.ie-md-3').parent().css('width', '8.33333333%');
                      $(this).find('.imgrectCaptionChild.ie-md-2').parent().css('width', '5.55555556%');
                      $(this).find('.imgrectCaptionChild.ie-md-1').parent().css('width', '2.77777778%');
                      
                      $(this).find('.imgrectagain').find('img').css('width', '100%');
                      
                      
                      
                    var containerWidth = $(this).find('.imgrectCaptionChild').width();

                    var neededHeight = imageRatio * containerWidth;



                      $(this).find('.imgrectCaptionChild, .imgrectCaption, .imageCaptionRowAbove').css('height', neededHeight);


                  }
                  if ( ( (widthCheck > 31) && (widthCheck < 50) ) && ($(this).find('.imgrectCaptionChild').hasClass('col-lg-alone')) ) {

                    $(this).find('.imgrectCaptionChild.ie-lg-36').parent().css('width', '100%');
                    $(this).find('.imgrectCaptionChild.ie-lg-35').parent().css('width', '97.22222222%');
                    $(this).find('.imgrectCaptionChild.ie-lg-34').parent().css('width', '94.44444444%');
                    $(this).find('.imgrectCaptionChild.ie-lg-33').parent().css('width', '91.66666667%');
                    $(this).find('.imgrectCaptionChild.ie-lg-32').parent().css('width', '88.88888889%');
                    $(this).find('.imgrectCaptionChild.ie-lg-31').parent().css('width', '86.11111111%');
                    $(this).find('.imgrectCaptionChild.ie-lg-30').parent().css('width', '83.33333333%');
                    $(this).find('.imgrectCaptionChild.ie-lg-29').parent().css('width', '80.55555556%');
                    $(this).find('.imgrectCaptionChild.ie-lg-28').parent().css('width', '77.77777778%');
                    $(this).find('.imgrectCaptionChild.ie-lg-27').parent().css('width', '75%');
                    $(this).find('.imgrectCaptionChild.ie-lg-26').parent().css('width', '72.22222222%');
                    $(this).find('.imgrectCaptionChild.ie-lg-25').parent().css('width', '69.44444444%');
                    $(this).find('.imgrectCaptionChild.ie-lg-24').parent().css('width', '66.66666667%');
                    $(this).find('.imgrectCaptionChild.ie-lg-23').parent().css('width', '63.88888889%');
                    $(this).find('.imgrectCaptionChild.ie-lg-22').parent().css('width', '61.11111111%');
                    $(this).find('.imgrectCaptionChild.ie-lg-21').parent().css('width', '58.33333333%');
                    $(this).find('.imgrectCaptionChild.ie-lg-20').parent().css('width', '55.55555556%');
                    $(this).find('.imgrectCaptionChild.ie-lg-19').parent().css('width', '52.77777778%');
                    $(this).find('.imgrectCaptionChild.ie-lg-18').parent().css('width', '50%');
                    $(this).find('.imgrectCaptionChild.ie-lg-17').parent().css('width', '47.22222222%');
                    $(this).find('.imgrectCaptionChild.ie-lg-16').parent().css('width', '44.44444444%');
                    $(this).find('.imgrectCaptionChild.ie-lg-15').parent().css('width', '41.66666667%');
                    $(this).find('.imgrectCaptionChild.ie-lg-14').parent().css('width', '38.88888889%');
                    $(this).find('.imgrectCaptionChild.ie-lg-13').parent().css('width', '36.11111111%');
                    $(this).find('.imgrectCaptionChild.ie-lg-12').parent().css('width', '33.33333333%');
                    $(this).find('.imgrectCaptionChild.ie-lg-11').parent().css('width', '30.55555556%');
                    $(this).find('.imgrectCaptionChild.ie-lg-10').parent().css('width', '27.77777778%');
                    $(this).find('.imgrectCaptionChild.ie-lg-9').parent().css('width', '25%');
                    $(this).find('.imgrectCaptionChild.ie-lg-8').parent().css('width', '22.22222222%');
                    $(this).find('.imgrectCaptionChild.ie-lg-7').parent().css('width', '19.44444444%');
                    $(this).find('.imgrectCaptionChild.ie-lg-6').parent().css('width', '16.66666667%');
                    $(this).find('.imgrectCaptionChild.ie-lg-5').parent().css('width', '13.88888889%');
                    $(this).find('.imgrectCaptionChild.ie-lg-4').parent().css('width', '11.11111111%');
                    $(this).find('.imgrectCaptionChild.ie-lg-3').parent().css('width', '8.33333333%');
                    $(this).find('.imgrectCaptionChild.ie-lg-2').parent().css('width', '5.55555556%');
                    $(this).find('.imgrectCaptionChild.ie-lg-1').parent().css('width', '2.77777778%');
                    
                    $(this).find('.imgrectagain').find('img').css('width', '100%');
                    
                    
                    
                  var containerWidth = $(this).find('.imgrectCaptionChild').width();

                  var neededHeight = imageRatio * containerWidth;

               


                    $(this).find('.imgrectCaptionChild, .imgrectCaption, .imageCaptionRowAbove').css('height', neededHeight);


                }
                
                $(this).find('.imageCaptionTBODY .imageCaptionRowAbove, .imgrectCaptionChild').height($(this).find('.imgrectCaptionChild>img'));
                
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
  
                setInterval(function(){
                  var onWidthChangeLast = _.once(function() {
                    $("img.afterIMGRECTonly").height( 0 );
                    $("img.afterIMGRECTonly").each(function(){
                      $(this).height( $(document).height() - $( this ).offset().top + $( this ).outerHeight());
                    });

                  });
                  onWidthChangeLast();
                }, 100);



                  
                });
  

                  onWidthChange();
    
    setInterval(function(){
                      var onWidthChange1 = _.once(function() {

        $('.noIMGUTIL').remove();
        $('.imgrect>img').remove();
        $('.imgrectagain>img').remove();

        $( '.imgrect, .imgrectagain' ).css( "position", "relative" );
        $( '.imgrect, .imgrectagain' ).css( "overflow", "visible" );
        
        $imgrectEls.refreshImgContainRect();
  
        $( '.imgrect>img, .imgrectagain>img' ).css( "position", "static" );
        $( '.imgrect>img, .imgrectagain>img' ).css( "display", "block" );
        $( '.imgrect>img, .imgrectagain>img' ).css( "position", "absolute" );



      });

      onWidthChange1();

                var onWidthChangeBefore2 = _.once(function() {

                  $('img').each(function(){
                      $(this).ifixpng();
                  });
                  $('.imgrectagain>img').css('top', 'auto').css('bottom', '0').css('position', 'absolute');
                });

                onWidthChangeBefore2();
                



    }, 100);


          var myDebouncedFunction = _.debounce( function(event) {



                onWidthChange();



          }, 5717);



  
  });