 //product navbar dropdown

 $(function(){ /*
  $("#navbar .nav-link").hover(
    function() {
      $('#products-menu.dropdown-menu', this).show();
      $(this).toggleClass('open');
    },
    function() {
      $('#products-menu.dropdown-menu', this).hide();
      $(this).toggleClass('open');
    });
    */
   /* 
  $(".navbar .nav-rates-tab").hover(
    function() {
      $('#rates-menu.dropdown-menu', this).show();
      $(this).toggleClass('open');
    },
    function() {
      $('#rates-menu.dropdown-menu', this).hide();
      $(this).toggleClass('open');
    }); */

}); 
// Market cap formatting
function marketcapFormatter(num, digits) {
  var si = [
    { value: 1, symbol: "" },
   // { value: 1E3, symbol: "k" },
    { value: 1E6, symbol: " Million" },
    { value: 1E9, symbol: " Billion" },
    { value: 1E12, symbol: " Trillion" },
    { value: 1E15, symbol: " Quadrillion" },
    { value: 1E18, symbol: " Quintillion" }
  ];
  var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var i;
  for (i = si.length - 1; i > 0; i--) {
    if (num >= si[i].value) {
      break;
    }
  }
  return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
}



//Using Luno for Rates Data
function lunoRates() {
$usdngn = $('.usdngnnav');
$gbpngn = $('.gbpngnnav');
$eurngn = $('.eurngnnav');
$.round = Math.round;
var baseurl = 'https'+'://'+'api.'+'btc'+'na'+'ir'+'a'+'.com'+'.n'+'g'+'/'+'v1'+'/'+'rates/';
$.get(baseurl)
    .then(function (data) {
          //update market cap (Always checks if data is 0 before parsing) 
          if ((data.CRYPTO.marketcap_ngn) == '0.00'){$('.marketcap').html ('...');$('.marketcapbottom').html ('...');}else{
          $('.marketcap').html ('&#8358;'+marketcapFormatter(data.CRYPTO.marketcap_ngn, 2));$('.marketcapbottom').html ('&#8358;'+(data.CRYPTO.marketcap_ngn).toLocaleString('en'));$('.marketcapfetch').html ('Fetched: ' + new Date().toString("MMMM dd yyyy, hh:mm:ss tt"));}//&#8358; for Naira html entity
          //Navbar cryptorates
          if ((data.NGN.LUNO.btcngn) == '0.00'){$('#btcngnField').val ('...');}else{
          $('#btcngnField').val ($.round(data.NGN.LUNO.btcngn).toLocaleString('en'));}
          if ((data.NGN.LUNO.ethngn) == '0.00'){$('#ethngnField').val ('...');}else{
          $('#ethngnField').val ($.round(data.NGN.LUNO.ethngn).toLocaleString('en'));} 
          if ((data.NGN.LUNO.bchngn) == '0.00'){$('#bchngnField').val ('...');}else{
          $('#bchngnField').val ($.round(data.NGN.LUNO.bchngn).toLocaleString('en'));} 
          if ((data.NGN.LUNO.ltcngn) == '0.00'){$('#ltcngnField').val ('...');}else{
          $('#ltcngnField').val ($.round(data.NGN.LUNO.ltcngn).toLocaleString('en'));} 
          if ((data.NGN.LUNO.dashngn) == '0.00'){$('#dashngnField').val ('...');}else{
          $('#dashngnField').val ($.round(data.NGN.LUNO.dashngn).toLocaleString('en'));} 
          if ((data.NGN.LUNO.xrpngn) == '0.00'){$('#xrpngnField').val ('...');}else{
          $('#xrpngnField').val ($.round(data.NGN.LUNO.xrpngn).toLocaleString('en'));} 
          
          //Navbar exchange rates 
          if ((data.NGN.LUNO.usdngn) == '0.00'){$usdngn.html ('...');}else{
          $usdngn.html ('&#8358;'+$.round(data.NGN.LUNO.usdngn)+'/$');}//&#8358; for Naira html entity
          if ((data.NGN.LUNO.gbpngn) == '0.00'){$gbpngn.html ('...');}else{
          $gbpngn.html ('&#8358;'+$.round(data.NGN.LUNO.gbpngn)+'/&#163;');}//&#163; for gbp html entity
          if ((data.NGN.LUNO.eurngn) == '0.00'){$eurngn.html ('...');}else{
          $eurngn.html ('&#8358;'+$.round(data.NGN.LUNO.eurngn)+'/&#8364;');}//&#8364; for eur html entity
          //update Navbar ticker directions
          if ($.round(data.NGN.LUNO.usdngn) >= $.round(data.NGN.LUNO.ystClose_usdngn)){$('.usdngnnavticker').addClass("coin-change-green");$('.usdngnnavticker').removeClass("coin-change-red");}else{$('.usdngnnavticker').removeClass("coin-change-green"); $('.usdngnnavticker').addClass("coin-change-red");}
          if ($.round(data.NGN.LUNO.gbpngn) >= $.round(data.NGN.LUNO.ystClose_gbpngn)){$('.gbpngnnavticker').addClass("coin-change-green");$('.gbpngnnavticker').removeClass("coin-change-red");}else{$('.gbpngnnavticker').removeClass("coin-change-green"); $('.gbpngnnavticker').addClass("coin-change-red");}
          if ($.round(data.NGN.LUNO.eurngn) >= $.round(data.NGN.LUNO.ystClose_eurngn)){$('.eurngnnavticker').addClass("coin-change-green");$('.eurngnnavticker').removeClass("coin-change-red");}else{$('.eurngnnavticker').removeClass("coin-change-green"); $('.eurngnnavticker').addClass("coin-change-red");}
          
          //Update Market Data
          /*BTC*/
          var fiatpriceBTCNGN = ('₦'+$.round(data.NGN.LUNO.btcngn).toLocaleString('en'));
          var fiatpricelbcBTCNGN = ('₦'+$.round(data.NGN.LOCALBITCOIN.btcngn).toLocaleString('en'));
          var fiatpriceBTCUSD = ('$'+$.round(data.BTC.usd).toLocaleString('en'));
          var fiatpriceBTCGBP = ('£'+$.round(data.BTC.gbp).toLocaleString('en'));
          var fiatpriceBTCEUR = ('€'+$.round(data.BTC.eur).toLocaleString('en'));
          if ((data.NGN.LUNO.btcngn) == '0.00'){$('.fiatpriceBTCNGN').html ('...');}else{
              $('.fiatpriceBTCNGN').html (fiatpriceBTCNGN);
              $('.fiatpriceBTCNGN').attr('title', 'Luno:'+fiatpriceBTCNGN+'\nLBC:'+fiatpricelbcBTCNGN);}
          if ((data.BTC.usd) == '0.00'){$('.fiatpriceBTCUSD').html ('...');}else{
              $('.fiatpriceBTCUSD').html (fiatpriceBTCUSD);}
          if ((data.BTC.gbp) == '0.00'){$('.fiatpriceBTCGBP').html ('...');}else{
              $('.fiatpriceBTCGBP').html (fiatpriceBTCGBP);}
          if ((data.BTC.eur) == '0.00'){$('.fiatpriceBTCEUR').html ('...');}else{
              $('.fiatpriceBTCEUR').html (fiatpriceBTCEUR);}
          if ((data.BTC.DailyChange) == '0.00'){$('.dailychangeBTC').html ('0.00');}else{
              $('.dailychangeBTC').html (data.BTC.DailyChange+'%');}
          if ((data.BTC.DailyChange) < '0'){$('tr.btc').addClass("coin--red");$('tr.btc').removeClass("coin--green");}else{$('tr.btc').addClass("coin--green");$('tr.btc').removeClass("coin--red");}            
          if ((data.BTC.cap_ngn) == '0.00'){$('.marketcapBTC').html ('...');}else{
             $('.marketcapBTC').attr('title', 'Supply: '+data.BTC.supply);
             $('.marketcapBTC').html ('&#8358;'+marketcapFormatter(data.BTC.cap_ngn, 2));$('.marketcapBTC').attr("data-order",data.BTC.cap_ngn);}

          /*ETH*/
          var fiatpriceETHNGN = ('₦'+$.round(data.NGN.LUNO.ethngn).toLocaleString('en'));
          var fiatpricelbcETHNGN = ('₦'+$.round(data.NGN.LOCALBITCOIN.ethngn).toLocaleString('en'));
          var fiatpriceETHUSD = ('$'+$.round(data.ETH.usd).toLocaleString('en'));
          var fiatpriceETHGBP = ('£'+$.round(data.ETH.gbp).toLocaleString('en'));
          var fiatpriceETHEUR = ('€'+$.round(data.ETH.eur).toLocaleString('en'));
          if ((data.NGN.LUNO.ethngn) == '0.00'){$('.fiatpriceETHNGN').html ('...');}else{
              $('.fiatpriceETHNGN').html (fiatpriceETHNGN);
              $('.fiatpriceETHNGN').attr('title', 'Luno:'+fiatpriceETHNGN+'\nLBC:'+fiatpricelbcETHNGN);}
          if ((data.ETH.usd) == '0.00'){$('.fiatpriceETHUSD').html ('...');}else{
              $('.fiatpriceETHUSD').html (fiatpriceETHUSD);}
          if ((data.ETH.gbp) == '0.00'){$('.fiatpriceETHGBP').html ('...');}else{
              $('.fiatpriceETHGBP').html (fiatpriceETHGBP);}
          if ((data.ETH.eur) == '0.00'){$('.fiatpriceETHEUR').html ('...');}else{
              $('.fiatpriceETHEUR').html (fiatpriceETHEUR);}
          if ((data.ETH.DailyChange) == '0.00'){$('.dailychangeETH').html ('0.00');}else{$('.dailychangeETH').html(data.ETH.DailyChange+'%');}
          if ((data.ETH.DailyChange) < '0'){$('tr.eth').addClass("coin--red");$('tr.eth').removeClass("coin--green");}else{$('tr.eth').addClass("coin--green");$('tr.eth').removeClass("coin--red");}            
          if ((data.ETH.cap_ngn) == '0.00'){$('.marketcapETH').html ('...');}else{
              $('.marketcapETH').attr('title', 'Supply: '+data.ETH.supply);
              $('.marketcapETH').html ('&#8358;'+marketcapFormatter(data.ETH.cap_ngn, 2));$('.marketcapETH').attr("data-order",data.ETH.cap_ngn);}

              
          /*XRP*/    
          var fiatpriceXRPNGN = ('₦'+$.round(data.NGN.LUNO.xrpngn).toLocaleString('en'));
          var fiatpricelbcXRPNGN = ('₦'+$.round(data.NGN.LOCALBITCOIN.xrpngn).toLocaleString('en'));
          var fiatpriceXRPUSD = ('$'+(data.XRP.usd).toLocaleString(undefined, {minimumFractionDigits: 2,maximumFractionDigits: 2}));
          var fiatpriceXRPGBP = ('£'+(data.XRP.gbp).toLocaleString(undefined, {minimumFractionDigits: 2,maximumFractionDigits: 2}));
          var fiatpriceXRPEUR = ('€'+(data.XRP.eur).toLocaleString(undefined, {minimumFractionDigits: 2,maximumFractionDigits: 2}));
          if ((data.NGN.LUNO.xrpngn) == '0.00'){$('.fiatpriceXRPNGN').html ('...');}else{
              $('.fiatpriceXRPNGN').html (fiatpriceXRPNGN);
              $('.fiatpriceXRPNGN').attr('title', 'Luno:'+fiatpriceXRPNGN+'\nLBC:'+fiatpricelbcXRPNGN);}
          if ((data.XRP.usd) == '0.00'){$('.fiatpriceXRPUSD').html ('...');}else{
              $('.fiatpriceXRPUSD').html (fiatpriceXRPUSD);}
          if ((data.XRP.gbp) == '0.00'){$('.fiatpriceXRPGBP').html ('...');}else{
              $('.fiatpriceXRPGBP').html (fiatpriceXRPGBP);}
          if ((data.XRP.eur) == '0.00'){$('.fiatpriceXRPEUR').html ('...');}else{
              $('.fiatpriceXRPEUR').html (fiatpriceXRPEUR);}
          if ((data.XRP.DailyChange) == '0.00'){$('.dailychangeXRP').html ('0.00');}else{$('.dailychangeXRP').html(data.XRP.DailyChange+'%');}
          if ((data.XRP.DailyChange) < '0'){$('tr.xrp').addClass("coin--red");$('tr.xrp').removeClass("coin--green");}else{$('tr.xrp').addClass("coin--green");$('tr.xrp').removeClass("coin--red");}            
          if ((data.XRP.cap_ngn) == '0.00'){$('.marketcapXRP').html ('...');}else{
              $('.marketcapXRP').attr('title', 'Supply: '+data.XRP.supply);
              $('.marketcapXRP').html ('&#8358;'+marketcapFormatter(data.XRP.cap_ngn, 2));$('.marketcapXRP').attr("data-order",data.XRP.cap_ngn);}

          /*BCH*/    
          var fiatpriceBCHNGN = ('₦'+$.round(data.NGN.LUNO.bchngn).toLocaleString('en'));
          var fiatpricelbcBCHNGN = ('₦'+$.round(data.NGN.LOCALBITCOIN.bchngn).toLocaleString('en'));
          var fiatpriceBCHUSD = ('$'+$.round(data.BCH.usd).toLocaleString('en'));
          var fiatpriceBCHGBP = ('£'+$.round(data.BCH.gbp).toLocaleString('en'));
          var fiatpriceBCHEUR = ('€'+$.round(data.BCH.eur).toLocaleString('en'));
          if ((data.NGN.LUNO.bchngn) == '0.00'){$('.fiatpriceBCHNGN').html ('...');}else{
              $('.fiatpriceBCHNGN').html (fiatpriceBCHNGN);
              $('.fiatpriceBCHNGN').attr('title', 'Luno:'+fiatpriceBCHNGN+'\nLBC:'+fiatpricelbcBCHNGN);}
          if ((data.BCH.usd) == '0.00'){$('.fiatpriceBCHUSD').html ('...');}else{
              $('.fiatpriceBCHUSD').html (fiatpriceBCHUSD);}
          if ((data.BCH.gbp) == '0.00'){$('.fiatpriceBCHGBP').html ('...');}else{
              $('.fiatpriceBCHGBP').html (fiatpriceBCHGBP);}
          if ((data.BCH.eur) == '0.00'){$('.fiatpriceBCHEUR').html ('...');}else{
              $('.fiatpriceBCHEUR').html (fiatpriceBCHEUR);}
          if ((data.BCH.DailyChange) == '0.00'){$('.dailychangeBCH').html ('0.00');}else{$('.dailychangeBCH').html(data.BCH.DailyChange+'%');}
          if ((data.BCH.DailyChange) < '0'){$('tr.bch').addClass("coin--red");$('tr.bch').removeClass("coin--green");}else{$('tr.bch').addClass("coin--green");$('tr.bch').removeClass("coin--red");}            
          if ((data.BCH.cap_ngn) == '0.00'){$('.marketcapBCH').html ('...');}else{
              $('.marketcapBCH').attr('title', 'Supply: '+data.BCH.supply);
              $('.marketcapBCH').html ('&#8358;'+marketcapFormatter(data.BCH.cap_ngn, 2));$('.marketcapBCH').attr("data-order",data.BCH.cap_ngn);}

          /*LTC*/    
          var fiatpriceLTCNGN = ('₦'+$.round(data.NGN.LUNO.ltcngn).toLocaleString('en'));
          var fiatpricelbcLTCNGN = ('₦'+$.round(data.NGN.LOCALBITCOIN.ltcngn).toLocaleString('en'));
          var fiatpriceLTCUSD = ('$'+$.round(data.LTC.usd).toLocaleString('en'));
          var fiatpriceLTCGBP = ('£'+$.round(data.LTC.gbp).toLocaleString('en'));
          var fiatpriceLTCEUR = ('€'+$.round(data.LTC.eur).toLocaleString('en'));
          if ((data.NGN.LUNO.ltcngn) == '0.00'){$('.fiatpriceLTCNGN').html ('...');}else{
              $('.fiatpriceLTCNGN').html (fiatpriceLTCNGN);
              $('.fiatpriceLTCNGN').attr('title', 'Luno:'+fiatpriceLTCNGN+'\nLBC:'+fiatpricelbcLTCNGN);}
          if ((data.LTC.usd) == '0.00'){$('.fiatpriceLTCUSD').html ('...');}else{
              $('.fiatpriceLTCUSD').html (fiatpriceLTCUSD);}
          if ((data.LTC.gbp) == '0.00'){$('.fiatpriceLTCGBP').html ('...');}else{
              $('.fiatpriceLTCGBP').html (fiatpriceLTCGBP);}
          if ((data.LTC.eur) == '0.00'){$('.fiatpriceLTCEUR').html ('...');}else{
              $('.fiatpriceLTCEUR').html (fiatpriceLTCEUR);}
          if ((data.LTC.DailyChange) == '0.00'){$('.dailychangeLTC').html ('0.00');}else{$('.dailychangeLTC').html(data.LTC.DailyChange+'%');}
          if ((data.LTC.DailyChange) < '0'){$('tr.ltc').addClass("coin--red");$('tr.ltc').removeClass("coin--green");}else{$('tr.ltc').addClass("coin--green");$('tr.ltc').removeClass("coin--red");}            
          if ((data.LTC.cap_ngn) == '0.00'){$('.marketcapLTC').html ('...');}else{
              $('.marketcapLTC').attr('title', 'Supply: '+data.LTC.supply);
              $('.marketcapLTC').html ('&#8358;'+marketcapFormatter(data.LTC.cap_ngn, 2));$('.marketcapLTC').attr("data-order",data.LTC.cap_ngn);}

          /*DASH*/    
          var fiatpriceDASHNGN = ('₦'+$.round(data.NGN.LUNO.dashngn).toLocaleString('en'));
          var fiatpricelbcDASHNGN = ('₦'+$.round(data.NGN.LOCALBITCOIN.dashngn).toLocaleString('en'));
          var fiatpriceDASHUSD = ('$'+$.round(data.DASH.usd).toLocaleString('en'));
          var fiatpriceDASHGBP = ('£'+$.round(data.DASH.gbp).toLocaleString('en'));
          var fiatpriceDASHEUR = ('€'+$.round(data.DASH.eur).toLocaleString('en'));
          if ((data.NGN.LUNO.dashngn) == '0.00'){$('.fiatpriceDASHNGN').html ('...');}else{
              $('.fiatpriceDASHNGN').html (fiatpriceDASHNGN);
              $('.fiatpriceDASHNGN').attr('title', 'Luno:'+fiatpriceDASHNGN+'\nLBC:'+fiatpricelbcDASHNGN);}
          if ((data.DASH.usd) == '0.00'){$('.fiatpriceDASHUSD').html ('...');}else{
              $('.fiatpriceDASHUSD').html (fiatpriceDASHUSD);}
          if ((data.DASH.gbp) == '0.00'){$('.fiatpriceDASHGBP').html ('...');}else{
              $('.fiatpriceDASHGBP').html (fiatpriceDASHGBP);}
          if ((data.DASH.eur) == '0.00'){$('.fiatpriceDASHEUR').html ('...');}else{
              $('.fiatpriceDASHEUR').html (fiatpriceDASHEUR);}
          if ((data.DASH.DailyChange) == '0.00'){$('.dailychangeDASH').html ('0.00');}else{$('.dailychangeDASH').html(data.DASH.DailyChange+'%');}
          if ((data.DASH.DailyChange) < '0'){$('tr.dash').addClass("coin--red");$('tr.dash').removeClass("coin--green");}else{$('tr.dash').addClass("coin--green");$('tr.dash').removeClass("coin--red");}            
          if ((data.DASH.cap_ngn) == '0.00'){$('.marketcapDASH').html ('...');}else{
              $('.marketcapDASH').attr('title', 'Supply: '+data.DASH.supply);
              $('.marketcapDASH').html ('&#8358;'+marketcapFormatter(data.DASH.cap_ngn, 2));
              $('.marketcapDASH').attr("data-order",data.DASH.cap_ngn);}
        
         //Update Exchanges Data
         if ((data.NGN.LUNO.total24hrVolume) == '0.00'){$('#exchanges').find('.luno .coin-symbol.24hrvolume').html ('...');}else{
              $('#exchanges').find('.luno .coin-symbol.24hrvolume').html ('&#8358;'+marketcapFormatter(data.NGN.LUNO.total24hrVolume, 2));
              $('#exchanges').find('.luno .coin-symbol.24hrvolume').attr("data-order",data.NGN.LUNO.total24hrVolume);}
         if ((data.NGN.BITSSA.total24hrVolume) == '0.00'){$('#exchanges').find('.bitssa .coin-symbol.24hrvolume').html ('...');}else{
              $('#exchanges').find('.bitssa .coin-symbol.24hrvolume').html ('&#8358;'+marketcapFormatter(data.NGN.BITSSA.total24hrVolume, 2));
             $('#exchanges').find('.bitssa .coin-symbol.24hrvolume').attr("data-order",data.NGN.BITSSA.total24hrVolume);}
         if ((data.NGN.LOCALBITCOIN.total24hrVolume) == '0.00'){$('#exchanges').find('.localbitcoin .coin-symbol.24hrvolume').html ('...');}else{
              $('#exchanges').find('.localbitcoin .coin-symbol.24hrvolume').html ('&#8358;'+marketcapFormatter(data.NGN.LOCALBITCOIN.total24hrVolume, 2));
             $('#exchanges').find('.localbitcoin .coin-symbol.24hrvolume').attr("data-order",data.NGN.LOCALBITCOIN.total24hrVolume);}
        if ((data.NGN.REMITANO.total24hrVolume) == '0.00'){$('#exchanges').find('.remitano .coin-symbol.24hrvolume').html ('...');}else{
        $('#exchanges').find('.remitano .coin-symbol.24hrvolume').html ('&#8358;'+marketcapFormatter(data.NGN.REMITANO.total24hrVolume, 2));
             $('#exchanges').find('.remitano .coin-symbol.24hrvolume').attr("data-order",data.NGN.REMITANO.total24hrVolume);}    
              

        //DataTable Sorting Code    
        //Cryptocurrencies Table
     /*    $('#marketTable').DataTable({
         paging: true
        //	, pageLength: 6
     	, pagingType: 'simple_numbers'
    	, lengthChange: true
    	, autoWidth: false // must be true for responsive designs when scrolling is enabled
    	//, scrollY: 371 // comment out to remove fixed header
    	, scrollCollapse: false
     	, searching: true
    	, order: [[ 10, 'desc' ]] // data is pre-sorted to descending market cap. 'asc' for ascending, 'desc' for descending.
    	
        ,"ordering": true,
        columnDefs: [
            {orderable: false, targets: "no-sort"},
            {targets: 3, type: 'formatted-num'}]//Makes column with Naira sign sort correctly.
        }); 
    */
    
      //DataTable destroy each time to get new data
      $('#marketTable').dataTable().fnDestroy();
      
      
      $('#marketTable').on('init.dt', function (){
     // This is the code for numbering DataTable dynamically after default settings
      var t = $('#marketTable').DataTable();
        t.column(0, {search:'applied', order:'applied'}).nodes().each( function (cell, i) { cell.innerHTML = i+1;t.rows().invalidate(); });
      }).DataTable( {
        //DataTable Default Settings starts
        paging: true,
       // pageLength: 5,
        pagingType: 'simple_numbers',
        lengthChange: true,
        autoWidth: false, // must be true for responsive designs when scrolling is enabled
        //, scrollY: 371 // comment out to remove fixed header
        scrollCollapse: false,
        searching: true,
        order: [[ 10, 'desc' ]], // data is pre-sorted to descending market cap. 'asc' for ascending, 'desc' for descending.
        "ordering": true,
        "columnDefs": [ 
        {orderable: false, targets: "no-sort"},
        {targets: [3,6,7,8], type: 'formatted-num'}]
       
      });
        
            //DataTable destroy to get new data 
     //  $('#exchangetable').dataTable().fnDestroy();   
      
       //Exchanges Table  Starts
       function runExchange(){
       $('#exchangetable').DataTable({
         paging: true
        //	, pageLength: 6
     	, pagingType: 'simple_numbers'
    	, lengthChange: true
    	, autoWidth: false // must be true for responsive designs when scrolling is enabled
    	//, scrollY: 371 // comment out to remove fixed header
    	, scrollCollapse: false
     	, searching: true
    	, order: [] // data is pre-sorted
    	
        ,"ordering": true,
        columnDefs: [{orderable: false, targets: "no-sort"}]
        });
        }
        
       $(function() {
       //Only run exchange tab DataTable sort function when .wpac-review-count content changes.
       var observer = new MutationObserver(function(e) { 
           //DataTable destroy before getting new data that changes .wpac-review-count content.
           $('#exchangetable').dataTable().fnDestroy();
           //Get New Data for exchanges tab
           runExchange();
       });
       //Keep observing changes to .wpac-review-count content.
       observer.observe($('.wpac-review-count')[0], {characterData: true, childList: true});
       });
       
       //Update exchanges .wpac-review-count content and trigger runExchange(); observer
       function wpac_ajax_init() {
       WPac.init({widget: 'ReviewCount', id: 13549, html: '<span style="color: #ff9800;" data-order="{{=it.rating}}">{{=it.stars}} {{=it.rating}}</span>'});
        }
        $.getScript('https://embed.widgetpack.com/widget.js', function(){ 
           wpac_ajax_init();
         });
       //Exchanges Table  Stops
        
 
    }) 
  
}

//Use Luno Rates Data on default
lunoRates();



//Cookie code
!function(e){var n=!1;if("function"==typeof define&&define.amd&&(define(e),n=!0),"object"==typeof exports&&(module.exports=e(),n=!0),!n){var o=window.Cookies,t=window.Cookies=e();t.noConflict=function(){return window.Cookies=o,t}}}(function(){function e(){for(var e=0,n={};e<arguments.length;e++){var o=arguments[e];for(var t in o)n[t]=o[t]}return n}function n(o){function t(n,r,i){var c;if("undefined"!=typeof document){if(arguments.length>1){if(i=e({path:"/"},t.defaults,i),"number"==typeof i.expires){var a=new Date;a.setMilliseconds(a.getMilliseconds()+864e5*i.expires),i.expires=a}i.expires=i.expires?i.expires.toUTCString():"";try{c=JSON.stringify(r),/^[\{\[]/.test(c)&&(r=c)}catch(e){}r=o.write?o.write(r,n):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),n=encodeURIComponent(String(n)),n=n.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent),n=n.replace(/[\(\)]/g,escape);var f="";for(var s in i)i[s]&&(f+="; "+s,i[s]!==!0&&(f+="="+i[s]));return document.cookie=n+"="+r+f}n||(c={});for(var p=document.cookie?document.cookie.split("; "):[],d=0;d<p.length;d++){var u=p[d].split("="),l=u.slice(1).join("=");'"'===l.charAt(0)&&(l=l.slice(1,-1));try{var g=u[0].replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent);if(l=o.read?o.read(l,g):o(l,g)||l.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent),this.json)try{l=JSON.parse(l)}catch(e){}if(n===g){c=l;break}n||(c[g]=l)}catch(e){}}return c}}return t.set=t,t.get=function(e){return t.call(t,e)},t.getJSON=function(){return t.apply({json:!0},[].slice.call(arguments))},t.defaults={},t.remove=function(n,o){t(n,"",e(o,{expires:-1}))},t.withConverter=n,t}return n(function(){})});



//Night Mode on
function NightMode(){
$(".hometitle").css("background", "#2c2c2c");
$(".hometitle").css("color", "#fff");
$(".bg-primary").css("background", "#2c2c2c");
$(".dropdown-menu").css("background", "#2c2c2c");
$(".header").css("background", "#2c2c2c");
$(".section-coin-list").css("background", "#17181b");
$(".head-line").css("background", "#2c2c2c");
$(".separator-primary").css("background", "#888");
$(".col-12.alertDiv").css("background", "#17181b");
$(".alert-primary").css("background", "#2c2c2c");
$(".nav-tabs").addClass("nightmodenav");
$("#cryptocoins").css("cssText", "background:#2c2c2c;color:#fff");
$("#cryptocoins").addClass("nightmode");
$("#exchanges").css("cssText", "background:#2c2c2c;color:#fff");
$("#exchanges").addClass("nightmode");
$("#news").css("cssText", "background:#2c2c2c;color:#fff");
$("#news").addClass("nightmode");
$(".footer").css("background", "#2c2c2c");
Cookies.set("mode", 'night');
}
//Night Mode off
function LightMode(){
$(".hometitle").removeAttr("style");
$(".bg-primary").removeAttr("style");
$(".dropdown-menu").css("background", "#12326B");
$(".header").removeAttr("style");
$(".section-coin-list").removeAttr("style");
$(".head-line").css("background","#12326B");
$(".separator-primary").removeAttr("style");
$(".col-12.alertDiv").removeAttr("style");
$(".alert-primary").removeAttr("style");
$(".nav-tabs").removeClass("nightmodenav");
$("#cryptocoins").removeAttr("style");
$("#cryptocoins").removeClass("nightmode");
$("#exchanges").removeAttr("style");
$("#exchanges").removeClass("nightmode");
$("#news").removeAttr("style");
$("#news").removeClass("nightmode");
$(".footer").css("background", "#1a2c4e");
Cookies.set("mode", 'light');
}

$(function() {
    //selecting radio with existing cookie
     if(Cookies.get('mode')==null){//Do nothing if no mode is found in cookie
     }else if(Cookies.get('mode') == 'night'){
       $("#nightmode").prop("checked", true);
       NightMode();
     }else{ 
         $("#lightmode").prop("checked", true);
         LightMode();
        }
    });
