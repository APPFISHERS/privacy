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
             $('.btcsupply').html($.round(data.BTC.supply).toLocaleString('en'));
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
              $('.ethsupply').html($.round(data.ETH.supply).toLocaleString('en'));
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
              $('.xrpsupply').html($.round(data.XRP.supply).toLocaleString('en'));
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
              $('.bchsupply').html($.round(data.BCH.supply).toLocaleString('en'));
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
              $('.ltcsupply').html($.round(data.LTC.supply).toLocaleString('en'));
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
              $('.dashsupply').html($.round(data.DASH.supply).toLocaleString('en'));
              $('.marketcapDASH').html ('&#8358;'+marketcapFormatter(data.DASH.cap_ngn, 2));
              $('.marketcapDASH').attr("data-order",data.DASH.cap_ngn);}
   
          /*EOS*/    
          var fiatpriceEOSNGN = ('₦'+$.round(data.NGN.LUNO.eosngn).toLocaleString('en'));
          var fiatpricelbcEOSNGN = ('₦'+$.round(data.NGN.LOCALBITCOIN.eosngn).toLocaleString('en'));
          var fiatpriceEOSUSD = ('$'+$.round(data.EOS.usd).toLocaleString('en'));
          var fiatpriceEOSGBP = ('£'+$.round(data.EOS.gbp).toLocaleString('en'));
          var fiatpriceEOSEUR = ('€'+$.round(data.EOS.eur).toLocaleString('en'));
          if ((data.NGN.LUNO.eosngn) == '0.00'){$('.fiatpriceEOSNGN').html ('...');}else{
              $('.fiatpriceEOSNGN').html (fiatpriceEOSNGN);
              $('.fiatpriceEOSNGN').attr('title', 'Luno:'+fiatpriceEOSNGN+'\nLBC:'+fiatpricelbcEOSNGN);}
          if ((data.EOS.usd) == '0.00'){$('.fiatpriceEOSUSD').html ('...');}else{
              $('.fiatpriceEOSUSD').html (fiatpriceEOSUSD);}
          if ((data.EOS.gbp) == '0.00'){$('.fiatpriceEOSGBP').html ('...');}else{
              $('.fiatpriceEOSGBP').html (fiatpriceEOSGBP);}
          if ((data.EOS.eur) == '0.00'){$('.fiatpriceEOSEUR').html ('...');}else{
              $('.fiatpriceEOSEUR').html (fiatpriceEOSEUR);}
          if ((data.EOS.DailyChange) == '0.00'){$('.dailychangeEOS').html ('0.00');}else{$('.dailychangeEOS').html(data.EOS.DailyChange+'%');}
          if ((data.EOS.DailyChange) < '0'){$('tr.eos').addClass("coin--red");$('tr.eos').removeClass("coin--green");}else{$('tr.eos').addClass("coin--green");$('tr.eos').removeClass("coin--red");}            
          if ((data.EOS.cap_ngn) == '0.00'){$('.marketcapEOS').html ('...');}else{
              $('.marketcapEOS').attr('title', 'Supply: '+data.EOS.supply);
              $('.eossupply').html($.round(data.EOS.supply).toLocaleString('en'));
              $('.marketcapEOS').html ('&#8358;'+marketcapFormatter(data.EOS.cap_ngn, 2));
              $('.marketcapEOS').attr("data-order",data.EOS.cap_ngn);}
        
          /*XLM*/    
          var fiatpriceXLMNGN = ('₦'+$.round(data.NGN.LUNO.xlmngn).toLocaleString('en'));
          var fiatpricelbcXLMNGN = ('₦'+$.round(data.NGN.LOCALBITCOIN.xlmngn).toLocaleString('en'));
          var fiatpriceXLMUSD = ('$'+$.round(data.XLM.usd).toLocaleString('en'));
          var fiatpriceXLMGBP = ('£'+$.round(data.XLM.gbp).toLocaleString('en'));
          var fiatpriceXLMEUR = ('€'+$.round(data.XLM.eur).toLocaleString('en'));
          if ((data.NGN.LUNO.xlmngn) == '0.00'){$('.fiatpriceXLMNGN').html ('...');}else{
              $('.fiatpriceXLMNGN').html (fiatpriceXLMNGN);
              $('.fiatpriceXLMNGN').attr('title', 'Luno:'+fiatpriceXLMNGN+'\nLBC:'+fiatpricelbcXLMNGN);}
          if ((data.XLM.usd) == '0.00'){$('.fiatpriceXLMUSD').html ('...');}else{
              $('.fiatpriceXLMUSD').html (fiatpriceXLMUSD);}
          if ((data.XLM.gbp) == '0.00'){$('.fiatpriceXLMGBP').html ('...');}else{
              $('.fiatpriceXLMGBP').html (fiatpriceXLMGBP);}
          if ((data.XLM.eur) == '0.00'){$('.fiatpriceXLMEUR').html ('...');}else{
              $('.fiatpriceXLMEUR').html (fiatpriceXLMEUR);}
          if ((data.XLM.DailyChange) == '0.00'){$('.dailychangeXLM').html ('0.00');}else{$('.dailychangeXLM').html(data.XLM.DailyChange+'%');}
          if ((data.XLM.DailyChange) < '0'){$('tr.xlm').addClass("coin--red");$('tr.xlm').removeClass("coin--green");}else{$('tr.xlm').addClass("coin--green");$('tr.xlm').removeClass("coin--red");}            
          if ((data.XLM.cap_ngn) == '0.00'){$('.marketcapXLM').html ('...');}else{
              $('.marketcapXLM').attr('title', 'Supply: '+data.XLM.supply);
              $('.xlmsupply').html($.round(data.XLM.supply).toLocaleString('en'));
              $('.marketcapXLM').html ('&#8358;'+marketcapFormatter(data.XLM.cap_ngn, 2));
              $('.marketcapXLM').attr("data-order",data.XLM.cap_ngn);}
        
              /*USDT*/    
          var fiatpriceUSDTNGN = ('₦'+$.round(data.NGN.LUNO.usdtngn).toLocaleString('en'));
          var fiatpricelbcUSDTNGN = ('₦'+$.round(data.NGN.LOCALBITCOIN.usdtngn).toLocaleString('en'));
          var fiatpriceUSDTUSD = ('$'+$.round(data.USDT.usd).toLocaleString('en'));
          var fiatpriceUSDTGBP = ('£'+$.round(data.USDT.gbp).toLocaleString('en'));
          var fiatpriceUSDTEUR = ('€'+$.round(data.USDT.eur).toLocaleString('en'));
          if ((data.NGN.LUNO.usdtngn) == '0.00'){$('.fiatpriceUSDTNGN').html ('...');}else{
              $('.fiatpriceUSDTNGN').html (fiatpriceUSDTNGN);
              $('.fiatpriceUSDTNGN').attr('title', 'Luno:'+fiatpriceUSDTNGN+'\nLBC:'+fiatpricelbcUSDTNGN);}
          if ((data.USDT.usd) == '0.00'){$('.fiatpriceUSDTUSD').html ('...');}else{
              $('.fiatpriceUSDTUSD').html (fiatpriceUSDTUSD);}
          if ((data.USDT.gbp) == '0.00'){$('.fiatpriceUSDTGBP').html ('...');}else{
              $('.fiatpriceUSDTGBP').html (fiatpriceUSDTGBP);}
          if ((data.USDT.eur) == '0.00'){$('.fiatpriceUSDTEUR').html ('...');}else{
              $('.fiatpriceUSDTEUR').html (fiatpriceUSDTEUR);}
          if ((data.USDT.DailyChange) == '0.00'){$('.dailychangeUSDT').html ('0.00');}else{$('.dailychangeUSDT').html(data.USDT.DailyChange+'%');}
          if ((data.USDT.DailyChange) < '0'){$('tr.usdt').addClass("coin--red");$('tr.usdt').removeClass("coin--green");}else{$('tr.usdt').addClass("coin--green");$('tr.usdt').removeClass("coin--red");}            
          if ((data.USDT.cap_ngn) == '0.00'){$('.marketcapUSDT').html ('...');}else{
              $('.marketcapUSDT').attr('title', 'Supply: '+data.USDT.supply);
              $('.usdtsupply').html($.round(data.USDT.supply).toLocaleString('en'));
              $('.marketcapUSDT').html ('&#8358;'+marketcapFormatter(data.USDT.cap_ngn, 2));
              $('.marketcapUSDT').attr("data-order",data.USDT.cap_ngn);}
        
          /*ADA*/    
          var fiatpriceADANGN = ('₦'+$.round(data.NGN.LUNO.adangn).toLocaleString('en'));
          var fiatpricelbcADANGN = ('₦'+$.round(data.NGN.LOCALBITCOIN.adangn).toLocaleString('en'));
          var fiatpriceADAUSD = ('$'+$.round(data.ADA.usd).toLocaleString('en'));
          var fiatpriceADAGBP = ('£'+$.round(data.ADA.gbp).toLocaleString('en'));
          var fiatpriceADAEUR = ('€'+$.round(data.ADA.eur).toLocaleString('en'));
          if ((data.NGN.LUNO.adangn) == '0.00'){$('.fiatpriceADANGN').html ('...');}else{
              $('.fiatpriceADANGN').html (fiatpriceADANGN);
              $('.fiatpriceADANGN').attr('title', 'Luno:'+fiatpriceADANGN+'\nLBC:'+fiatpricelbcADANGN);}
          if ((data.ADA.usd) == '0.00'){$('.fiatpriceADAUSD').html ('...');}else{
              $('.fiatpriceADAUSD').html (fiatpriceADAUSD);}
          if ((data.ADA.gbp) == '0.00'){$('.fiatpriceADAGBP').html ('...');}else{
              $('.fiatpriceADAGBP').html (fiatpriceADAGBP);}
          if ((data.ADA.eur) == '0.00'){$('.fiatpriceADAEUR').html ('...');}else{
              $('.fiatpriceADAEUR').html (fiatpriceADAEUR);}
          if ((data.ADA.DailyChange) == '0.00'){$('.dailychangeADA').html ('0.00');}else{$('.dailychangeADA').html(data.ADA.DailyChange+'%');}
          if ((data.ADA.DailyChange) < '0'){$('tr.ada').addClass("coin--red");$('tr.ada').removeClass("coin--green");}else{$('tr.ada').addClass("coin--green");$('tr.ada').removeClass("coin--red");}            
          if ((data.ADA.cap_ngn) == '0.00'){$('.marketcapADA').html ('...');}else{
              $('.marketcapADA').attr('title', 'Supply: '+data.ADA.supply);
              $('.adasupply').html($.round(data.ADA.supply).toLocaleString('en'));
              $('.marketcapADA').html ('&#8358;'+marketcapFormatter(data.ADA.cap_ngn, 2));
              $('.marketcapADA').attr("data-order",data.ADA.cap_ngn);}
                
          /*XMR*/    
          var fiatpriceXMRNGN = ('₦'+$.round(data.NGN.LUNO.xmrngn).toLocaleString('en'));
          var fiatpricelbcXMRNGN = ('₦'+$.round(data.NGN.LOCALBITCOIN.xmrngn).toLocaleString('en'));
          var fiatpriceXMRUSD = ('$'+$.round(data.XMR.usd).toLocaleString('en'));
          var fiatpriceXMRGBP = ('£'+$.round(data.XMR.gbp).toLocaleString('en'));
          var fiatpriceXMREUR = ('€'+$.round(data.XMR.eur).toLocaleString('en'));
          if ((data.NGN.LUNO.xmrngn) == '0.00'){$('.fiatpriceXMRNGN').html ('...');}else{
              $('.fiatpriceXMRNGN').html (fiatpriceXMRNGN);
              $('.fiatpriceXMRNGN').attr('title', 'Luno:'+fiatpriceXMRNGN+'\nLBC:'+fiatpricelbcXMRNGN);}
          if ((data.XMR.usd) == '0.00'){$('.fiatpriceXMRUSD').html ('...');}else{
              $('.fiatpriceXMRUSD').html (fiatpriceXMRUSD);}
          if ((data.XMR.gbp) == '0.00'){$('.fiatpriceXMRGBP').html ('...');}else{
              $('.fiatpriceXMRGBP').html (fiatpriceXMRGBP);}
          if ((data.XMR.eur) == '0.00'){$('.fiatpriceXMREUR').html ('...');}else{
              $('.fiatpriceXMREUR').html (fiatpriceXMREUR);}
          if ((data.XMR.DailyChange) == '0.00'){$('.dailychangeXMR').html ('0.00');}else{$('.dailychangeXMR').html(data.XMR.DailyChange+'%');}
          if ((data.XMR.DailyChange) < '0'){$('tr.xmr').addClass("coin--red");$('tr.xmr').removeClass("coin--green");}else{$('tr.xmr').addClass("coin--green");$('tr.xmr').removeClass("coin--red");}            
          if ((data.XMR.cap_ngn) == '0.00'){$('.marketcapXMR').html ('...');}else{
              $('.marketcapXMR').attr('title', 'Supply: '+data.XMR.supply);
              $('.xmrsupply').html($.round(data.XMR.supply).toLocaleString('en'));
              $('.marketcapXMR').html ('&#8358;'+marketcapFormatter(data.XMR.cap_ngn, 2));
              $('.marketcapXMR').attr("data-order",data.XMR.cap_ngn);}
        
          /*TRX*/    
          var fiatpriceTRXNGN = ('₦'+$.round(data.NGN.LUNO.trxngn).toLocaleString('en'));
          var fiatpricelbcTRXNGN = ('₦'+$.round(data.NGN.LOCALBITCOIN.trxngn).toLocaleString('en'));
          var fiatpriceTRXUSD = ('$'+$.round(data.TRX.usd).toLocaleString('en'));
          var fiatpriceTRXGBP = ('£'+$.round(data.TRX.gbp).toLocaleString('en'));
          var fiatpriceTRXEUR = ('€'+$.round(data.TRX.eur).toLocaleString('en'));
          if ((data.NGN.LUNO.trxngn) == '0.00'){$('.fiatpriceTRXNGN').html ('...');}else{
              $('.fiatpriceTRXNGN').html (fiatpriceTRXNGN);
              $('.fiatpriceTRXNGN').attr('title', 'Luno:'+fiatpriceTRXNGN+'\nLBC:'+fiatpricelbcTRXNGN);}
          if ((data.TRX.usd) == '0.00'){$('.fiatpriceTRXUSD').html ('...');}else{
              $('.fiatpriceTRXUSD').html (fiatpriceTRXUSD);}
          if ((data.TRX.gbp) == '0.00'){$('.fiatpriceTRXGBP').html ('...');}else{
              $('.fiatpriceTRXGBP').html (fiatpriceTRXGBP);}
          if ((data.TRX.eur) == '0.00'){$('.fiatpriceTRXEUR').html ('...');}else{
              $('.fiatpriceTRXEUR').html (fiatpriceTRXEUR);}
          if ((data.TRX.DailyChange) == '0.00'){$('.dailychangeTRX').html ('0.00');}else{$('.dailychangeTRX').html(data.TRX.DailyChange+'%');}
          if ((data.TRX.DailyChange) < '0'){$('tr.trx').addClass("coin--red");$('tr.trx').removeClass("coin--green");}else{$('tr.trx').addClass("coin--green");$('tr.trx').removeClass("coin--red");}            
          if ((data.TRX.cap_ngn) == '0.00'){$('.marketcapTRX').html ('...');}else{
              $('.marketcapTRX').attr('title', 'Supply: '+data.TRX.supply);
              $('.trxsupply').html($.round(data.TRX.supply).toLocaleString('en'));
              $('.marketcapTRX').html ('&#8358;'+marketcapFormatter(data.TRX.cap_ngn, 2));
              $('.marketcapTRX').attr("data-order",data.TRX.cap_ngn);}
        
          /*IOTA*/    
          var fiatpriceIOTANGN = ('₦'+$.round(data.NGN.LUNO.iotangn).toLocaleString('en'));
          var fiatpricelbcIOTANGN = ('₦'+$.round(data.NGN.LOCALBITCOIN.iotangn).toLocaleString('en'));
          var fiatpriceIOTAUSD = ('$'+$.round(data.IOTA.usd).toLocaleString('en'));
          var fiatpriceIOTAGBP = ('£'+$.round(data.IOTA.gbp).toLocaleString('en'));
          var fiatpriceIOTAEUR = ('€'+$.round(data.IOTA.eur).toLocaleString('en'));
          if ((data.NGN.LUNO.iotangn) == '0.00'){$('.fiatpriceIOTANGN').html ('...');}else{
              $('.fiatpriceIOTANGN').html (fiatpriceIOTANGN);
              $('.fiatpriceIOTANGN').attr('title', 'Luno:'+fiatpriceIOTANGN+'\nLBC:'+fiatpricelbcIOTANGN);}
          if ((data.IOTA.usd) == '0.00'){$('.fiatpriceIOTAUSD').html ('...');}else{
              $('.fiatpriceIOTAUSD').html (fiatpriceIOTAUSD);}
          if ((data.IOTA.gbp) == '0.00'){$('.fiatpriceIOTAGBP').html ('...');}else{
              $('.fiatpriceIOTAGBP').html (fiatpriceIOTAGBP);}
          if ((data.IOTA.eur) == '0.00'){$('.fiatpriceIOTAEUR').html ('...');}else{
              $('.fiatpriceIOTAEUR').html (fiatpriceIOTAEUR);}
          if ((data.IOTA.DailyChange) == '0.00'){$('.dailychangeIOTA').html ('0.00');}else{$('.dailychangeIOTA').html(data.IOTA.DailyChange+'%');}
          if ((data.IOTA.DailyChange) < '0'){$('tr.iota').addClass("coin--red");$('tr.iota').removeClass("coin--green");}else{$('tr.iota').addClass("coin--green");$('tr.iota').removeClass("coin--red");}            
          if ((data.IOTA.cap_ngn) == '0.00'){$('.marketcapIOTA').html ('...');}else{
              $('.marketcapIOTA').attr('title', 'Supply: '+data.IOTA.supply);
              $('.iotasupply').html($.round(data.IOTA.supply).toLocaleString('en'));
              $('.marketcapIOTA').html ('&#8358;'+marketcapFormatter(data.IOTA.cap_ngn, 2));
              $('.marketcapIOTA').attr("data-order",data.IOTA.cap_ngn);}
        
          /*BNB*/    
          var fiatpriceBNBNGN = ('₦'+$.round(data.NGN.LUNO.bnbngn).toLocaleString('en'));
          var fiatpricelbcBNBNGN = ('₦'+$.round(data.NGN.LOCALBITCOIN.bnbngn).toLocaleString('en'));
          var fiatpriceBNBUSD = ('$'+$.round(data.BNB.usd).toLocaleString('en'));
          var fiatpriceBNBGBP = ('£'+$.round(data.BNB.gbp).toLocaleString('en'));
          var fiatpriceBNBEUR = ('€'+$.round(data.BNB.eur).toLocaleString('en'));
          if ((data.NGN.LUNO.bnbngn) == '0.00'){$('.fiatpriceBNBNGN').html ('...');}else{
              $('.fiatpriceBNBNGN').html (fiatpriceBNBNGN);
              $('.fiatpriceBNBNGN').attr('title', 'Luno:'+fiatpriceBNBNGN+'\nLBC:'+fiatpricelbcBNBNGN);}
          if ((data.BNB.usd) == '0.00'){$('.fiatpriceBNBUSD').html ('...');}else{
              $('.fiatpriceBNBUSD').html (fiatpriceBNBUSD);}
          if ((data.BNB.gbp) == '0.00'){$('.fiatpriceBNBGBP').html ('...');}else{
              $('.fiatpriceBNBGBP').html (fiatpriceBNBGBP);}
          if ((data.BNB.eur) == '0.00'){$('.fiatpriceBNBEUR').html ('...');}else{
              $('.fiatpriceBNBEUR').html (fiatpriceBNBEUR);}
          if ((data.BNB.DailyChange) == '0.00'){$('.dailychangeBNB').html ('0.00');}else{$('.dailychangeBNB').html(data.BNB.DailyChange+'%');}
          if ((data.BNB.DailyChange) < '0'){$('tr.bnb').addClass("coin--red");$('tr.bnb').removeClass("coin--green");}else{$('tr.bnb').addClass("coin--green");$('tr.bnb').removeClass("coin--red");}            
          if ((data.BNB.cap_ngn) == '0.00'){$('.marketcapBNB').html ('...');}else{
              $('.marketcapBNB').attr('title', 'Supply: '+data.BNB.supply);
              $('.bnbsupply').html($.round(data.BNB.supply).toLocaleString('en'));
              $('.marketcapBNB').html ('&#8358;'+marketcapFormatter(data.BNB.cap_ngn, 2));
              $('.marketcapBNB').attr("data-order",data.BNB.cap_ngn);}
        
          /*NEO*/    
          var fiatpriceNEONGN = ('₦'+$.round(data.NGN.LUNO.neongn).toLocaleString('en'));
          var fiatpricelbcNEONGN = ('₦'+$.round(data.NGN.LOCALBITCOIN.neongn).toLocaleString('en'));
          var fiatpriceNEOUSD = ('$'+$.round(data.NEO.usd).toLocaleString('en'));
          var fiatpriceNEOGBP = ('£'+$.round(data.NEO.gbp).toLocaleString('en'));
          var fiatpriceNEOEUR = ('€'+$.round(data.NEO.eur).toLocaleString('en'));
          if ((data.NGN.LUNO.neongn) == '0.00'){$('.fiatpriceNEONGN').html ('...');}else{
              $('.fiatpriceNEONGN').html (fiatpriceNEONGN);
              $('.fiatpriceNEONGN').attr('title', 'Luno:'+fiatpriceNEONGN+'\nLBC:'+fiatpricelbcNEONGN);}
          if ((data.NEO.usd) == '0.00'){$('.fiatpriceNEOUSD').html ('...');}else{
              $('.fiatpriceNEOUSD').html (fiatpriceNEOUSD);}
          if ((data.NEO.gbp) == '0.00'){$('.fiatpriceNEOGBP').html ('...');}else{
              $('.fiatpriceNEOGBP').html (fiatpriceNEOGBP);}
          if ((data.NEO.eur) == '0.00'){$('.fiatpriceNEOEUR').html ('...');}else{
              $('.fiatpriceNEOEUR').html (fiatpriceNEOEUR);}
          if ((data.NEO.DailyChange) == '0.00'){$('.dailychangeNEO').html ('0.00');}else{$('.dailychangeNEO').html(data.NEO.DailyChange+'%');}
          if ((data.NEO.DailyChange) < '0'){$('tr.neo').addClass("coin--red");$('tr.neo').removeClass("coin--green");}else{$('tr.neo').addClass("coin--green");$('tr.neo').removeClass("coin--red");}            
          if ((data.NEO.cap_ngn) == '0.00'){$('.marketcapNEO').html ('...');}else{
              $('.marketcapNEO').attr('title', 'Supply: '+data.NEO.supply);
              $('.neosupply').html($.round(data.NEO.supply).toLocaleString('en'));
              $('.marketcapNEO').html ('&#8358;'+marketcapFormatter(data.NEO.cap_ngn, 2));
              $('.marketcapNEO').attr("data-order",data.NEO.cap_ngn);}
        
          /*ETC*/    
          var fiatpriceETCNGN = ('₦'+$.round(data.NGN.LUNO.etcngn).toLocaleString('en'));
          var fiatpricelbcETCNGN = ('₦'+$.round(data.NGN.LOCALBITCOIN.etcngn).toLocaleString('en'));
          var fiatpriceETCUSD = ('$'+$.round(data.ETC.usd).toLocaleString('en'));
          var fiatpriceETCGBP = ('£'+$.round(data.ETC.gbp).toLocaleString('en'));
          var fiatpriceETCEUR = ('€'+$.round(data.ETC.eur).toLocaleString('en'));
          if ((data.NGN.LUNO.etcngn) == '0.00'){$('.fiatpriceETCNGN').html ('...');}else{
              $('.fiatpriceETCNGN').html (fiatpriceETCNGN);
              $('.fiatpriceETCNGN').attr('title', 'Luno:'+fiatpriceETCNGN+'\nLBC:'+fiatpricelbcETCNGN);}
          if ((data.ETC.usd) == '0.00'){$('.fiatpriceETCUSD').html ('...');}else{
              $('.fiatpriceETCUSD').html (fiatpriceETCUSD);}
          if ((data.ETC.gbp) == '0.00'){$('.fiatpriceETCGBP').html ('...');}else{
              $('.fiatpriceETCGBP').html (fiatpriceETCGBP);}
          if ((data.ETC.eur) == '0.00'){$('.fiatpriceETCEUR').html ('...');}else{
              $('.fiatpriceETCEUR').html (fiatpriceETCEUR);}
          if ((data.ETC.DailyChange) == '0.00'){$('.dailychangeETC').html ('0.00');}else{$('.dailychangeETC').html(data.ETC.DailyChange+'%');}
          if ((data.ETC.DailyChange) < '0'){$('tr.etc').addClass("coin--red");$('tr.etc').removeClass("coin--green");}else{$('tr.etc').addClass("coin--green");$('tr.etc').removeClass("coin--red");}            
          if ((data.ETC.cap_ngn) == '0.00'){$('.marketcapETC').html ('...');}else{
              $('.marketcapETC').attr('title', 'Supply: '+data.ETC.supply);
              $('.etcsupply').html($.round(data.ETC.supply).toLocaleString('en'));
              $('.marketcapETC').html ('&#8358;'+marketcapFormatter(data.ETC.cap_ngn, 2));
              $('.marketcapETC').attr("data-order",data.ETC.cap_ngn);}
        
          /*XTZ*/    
          var fiatpriceXTZNGN = ('₦'+$.round(data.NGN.LUNO.xtzngn).toLocaleString('en'));
          var fiatpricelbcXTZNGN = ('₦'+$.round(data.NGN.LOCALBITCOIN.xtzngn).toLocaleString('en'));
          var fiatpriceXTZUSD = ('$'+$.round(data.XTZ.usd).toLocaleString('en'));
          var fiatpriceXTZGBP = ('£'+$.round(data.XTZ.gbp).toLocaleString('en'));
          var fiatpriceXTZEUR = ('€'+$.round(data.XTZ.eur).toLocaleString('en'));
          if ((data.NGN.LUNO.xtzngn) == '0.00'){$('.fiatpriceXTZNGN').html ('...');}else{
              $('.fiatpriceXTZNGN').html (fiatpriceXTZNGN);
              $('.fiatpriceXTZNGN').attr('title', 'Luno:'+fiatpriceXTZNGN+'\nLBC:'+fiatpricelbcXTZNGN);}
          if ((data.XTZ.usd) == '0.00'){$('.fiatpriceXTZUSD').html ('...');}else{
              $('.fiatpriceXTZUSD').html (fiatpriceXTZUSD);}
          if ((data.XTZ.gbp) == '0.00'){$('.fiatpriceXTZGBP').html ('...');}else{
              $('.fiatpriceXTZGBP').html (fiatpriceXTZGBP);}
          if ((data.XTZ.eur) == '0.00'){$('.fiatpriceXTZEUR').html ('...');}else{
              $('.fiatpriceXTZEUR').html (fiatpriceXTZEUR);}
          if ((data.XTZ.DailyChange) == '0.00'){$('.dailychangeXTZ').html ('0.00');}else{$('.dailychangeXTZ').html(data.XTZ.DailyChange+'%');}
          if ((data.XTZ.DailyChange) < '0'){$('tr.xtz').addClass("coin--red");$('tr.xtz').removeClass("coin--green");}else{$('tr.xtz').addClass("coin--green");$('tr.xtz').removeClass("coin--red");}            
          if ((data.XTZ.cap_ngn) == '0.00'){$('.markxtzapXTZ').html ('...');}else{
              $('.markxtzapXTZ').attr('title', 'Supply: '+data.XTZ.supply);
              $('.xtzsupply').html($.round(data.XTZ.supply).toLocaleString('en'));
              $('.markxtzapXTZ').html ('&#8358;'+markxtzapFormatter(data.XTZ.cap_ngn, 2));
              $('.markxtzapXTZ').attr("data-order",data.XTZ.cap_ngn);}
        
          /*XEM*/    
          var fiatpriceXEMNGN = ('₦'+$.round(data.NGN.LUNO.xemngn).toLocaleString('en'));
          var fiatpricelbcXEMNGN = ('₦'+$.round(data.NGN.LOCALBITCOIN.xemngn).toLocaleString('en'));
          var fiatpriceXEMUSD = ('$'+$.round(data.XEM.usd).toLocaleString('en'));
          var fiatpriceXEMGBP = ('£'+$.round(data.XEM.gbp).toLocaleString('en'));
          var fiatpriceXEMEUR = ('€'+$.round(data.XEM.eur).toLocaleString('en'));
          if ((data.NGN.LUNO.xemngn) == '0.00'){$('.fiatpriceXEMNGN').html ('...');}else{
              $('.fiatpriceXEMNGN').html (fiatpriceXEMNGN);
              $('.fiatpriceXEMNGN').attr('title', 'Luno:'+fiatpriceXEMNGN+'\nLBC:'+fiatpricelbcXEMNGN);}
          if ((data.XEM.usd) == '0.00'){$('.fiatpriceXEMUSD').html ('...');}else{
              $('.fiatpriceXEMUSD').html (fiatpriceXEMUSD);}
          if ((data.XEM.gbp) == '0.00'){$('.fiatpriceXEMGBP').html ('...');}else{
              $('.fiatpriceXEMGBP').html (fiatpriceXEMGBP);}
          if ((data.XEM.eur) == '0.00'){$('.fiatpriceXEMEUR').html ('...');}else{
              $('.fiatpriceXEMEUR').html (fiatpriceXEMEUR);}
          if ((data.XEM.DailyChange) == '0.00'){$('.dailychangeXEM').html ('0.00');}else{$('.dailychangeXEM').html(data.XEM.DailyChange+'%');}
          if ((data.XEM.DailyChange) < '0'){$('tr.xem').addClass("coin--red");$('tr.xem').removeClass("coin--green");}else{$('tr.xem').addClass("coin--green");$('tr.xem').removeClass("coin--red");}            
          if ((data.XEM.cap_ngn) == '0.00'){$('.markxemapXEM').html ('...');}else{
              $('.markxemapXEM').attr('title', 'Supply: '+data.XEM.supply);
              $('.xemsupply').html($.round(data.XEM.supply).toLocaleString('en'));
              $('.markxemapXEM').html ('&#8358;'+markxemapFormatter(data.XEM.cap_ngn, 2));
              $('.markxemapXEM').attr("data-order",data.XEM.cap_ngn);}
        
          /*VET*/    
          var fiatpriceVETNGN = ('₦'+$.round(data.NGN.LUNO.vetngn).toLocaleString('en'));
          var fiatpricelbcVETNGN = ('₦'+$.round(data.NGN.LOCALBITCOIN.vetngn).toLocaleString('en'));
          var fiatpriceVETUSD = ('$'+$.round(data.VET.usd).toLocaleString('en'));
          var fiatpriceVETGBP = ('£'+$.round(data.VET.gbp).toLocaleString('en'));
          var fiatpriceVETEUR = ('€'+$.round(data.VET.eur).toLocaleString('en'));
          if ((data.NGN.LUNO.vetngn) == '0.00'){$('.fiatpriceVETNGN').html ('...');}else{
              $('.fiatpriceVETNGN').html (fiatpriceVETNGN);
              $('.fiatpriceVETNGN').attr('title', 'Luno:'+fiatpriceVETNGN+'\nLBC:'+fiatpricelbcVETNGN);}
          if ((data.VET.usd) == '0.00'){$('.fiatpriceVETUSD').html ('...');}else{
              $('.fiatpriceVETUSD').html (fiatpriceVETUSD);}
          if ((data.VET.gbp) == '0.00'){$('.fiatpriceVETGBP').html ('...');}else{
              $('.fiatpriceVETGBP').html (fiatpriceVETGBP);}
          if ((data.VET.eur) == '0.00'){$('.fiatpriceVETEUR').html ('...');}else{
              $('.fiatpriceVETEUR').html (fiatpriceVETEUR);}
          if ((data.VET.DailyChange) == '0.00'){$('.dailychangeVET').html ('0.00');}else{$('.dailychangeVET').html(data.VET.DailyChange+'%');}
          if ((data.VET.DailyChange) < '0'){$('tr.vet').addClass("coin--red");$('tr.vet').removeClass("coin--green");}else{$('tr.vet').addClass("coin--green");$('tr.vet').removeClass("coin--red");}            
          if ((data.VET.cap_ngn) == '0.00'){$('.markvetapVET').html ('...');}else{
              $('.markvetapVET').attr('title', 'Supply: '+data.VET.supply);
              $('.vetsupply').html($.round(data.VET.supply).toLocaleString('en'));
              $('.markvetapVET').html ('&#8358;'+markvetapFormatter(data.VET.cap_ngn, 2));
              $('.markvetapVET').attr("data-order",data.VET.cap_ngn);}
        
          /*DOGE*/    
          var fiatpriceDOGENGN = ('₦'+$.round(data.NGN.LUNO.dogengn).toLocaleString('en'));
          var fiatpricelbcDOGENGN = ('₦'+$.round(data.NGN.LOCALBITCOIN.dogengn).toLocaleString('en'));
          var fiatpriceDOGEUSD = ('$'+$.round(data.DOGE.usd).toLocaleString('en'));
          var fiatpriceDOGEGBP = ('£'+$.round(data.DOGE.gbp).toLocaleString('en'));
          var fiatpriceDOGEEUR = ('€'+$.round(data.DOGE.eur).toLocaleString('en'));
          if ((data.NGN.LUNO.dogengn) == '0.00'){$('.fiatpriceDOGENGN').html ('...');}else{
              $('.fiatpriceDOGENGN').html (fiatpriceDOGENGN);
              $('.fiatpriceDOGENGN').attr('title', 'Luno:'+fiatpriceDOGENGN+'\nLBC:'+fiatpricelbcDOGENGN);}
          if ((data.DOGE.usd) == '0.00'){$('.fiatpriceDOGEUSD').html ('...');}else{
              $('.fiatpriceDOGEUSD').html (fiatpriceDOGEUSD);}
          if ((data.DOGE.gbp) == '0.00'){$('.fiatpriceDOGEGBP').html ('...');}else{
              $('.fiatpriceDOGEGBP').html (fiatpriceDOGEGBP);}
          if ((data.DOGE.eur) == '0.00'){$('.fiatpriceDOGEEUR').html ('...');}else{
              $('.fiatpriceDOGEEUR').html (fiatpriceDOGEEUR);}
          if ((data.DOGE.DailyChange) == '0.00'){$('.dailychangeDOGE').html ('0.00');}else{$('.dailychangeDOGE').html(data.DOGE.DailyChange+'%');}
          if ((data.DOGE.DailyChange) < '0'){$('tr.doge').addClass("coin--red");$('tr.doge').removeClass("coin--green");}else{$('tr.doge').addClass("coin--green");$('tr.doge').removeClass("coin--red");}            
          if ((data.DOGE.cap_ngn) == '0.00'){$('.markdogeapDOGE').html ('...');}else{
              $('.markdogeapDOGE').attr('title', 'Supply: '+data.DOGE.supply);
              $('.dogesupply').html($.round(data.DOGE.supply).toLocaleString('en'));
              $('.markdogeapDOGE').html ('&#8358;'+markdogeapFormatter(data.DOGE.cap_ngn, 2));
              $('.markdogeapDOGE').attr("data-order",data.DOGE.cap_ngn);}
        
          /*ZEC*/    
          var fiatpriceZECNGN = ('₦'+$.round(data.NGN.LUNO.zecngn).toLocaleString('en'));
          var fiatpricelbcZECNGN = ('₦'+$.round(data.NGN.LOCALBITCOIN.zecngn).toLocaleString('en'));
          var fiatpriceZECUSD = ('$'+$.round(data.ZEC.usd).toLocaleString('en'));
          var fiatpriceZECGBP = ('£'+$.round(data.ZEC.gbp).toLocaleString('en'));
          var fiatpriceZECEUR = ('€'+$.round(data.ZEC.eur).toLocaleString('en'));
          if ((data.NGN.LUNO.zecngn) == '0.00'){$('.fiatpriceZECNGN').html ('...');}else{
              $('.fiatpriceZECNGN').html (fiatpriceZECNGN);
              $('.fiatpriceZECNGN').attr('title', 'Luno:'+fiatpriceZECNGN+'\nLBC:'+fiatpricelbcZECNGN);}
          if ((data.ZEC.usd) == '0.00'){$('.fiatpriceZECUSD').html ('...');}else{
              $('.fiatpriceZECUSD').html (fiatpriceZECUSD);}
          if ((data.ZEC.gbp) == '0.00'){$('.fiatpriceZECGBP').html ('...');}else{
              $('.fiatpriceZECGBP').html (fiatpriceZECGBP);}
          if ((data.ZEC.eur) == '0.00'){$('.fiatpriceZECEUR').html ('...');}else{
              $('.fiatpriceZECEUR').html (fiatpriceZECEUR);}
          if ((data.ZEC.DailyChange) == '0.00'){$('.dailychangeZEC').html ('0.00');}else{$('.dailychangeZEC').html(data.ZEC.DailyChange+'%');}
          if ((data.ZEC.DailyChange) < '0'){$('tr.zec').addClass("coin--red");$('tr.zec').removeClass("coin--green");}else{$('tr.zec').addClass("coin--green");$('tr.zec').removeClass("coin--red");}            
          if ((data.ZEC.cap_ngn) == '0.00'){$('.markzecapZEC').html ('...');}else{
              $('.markzecapZEC').attr('title', 'Supply: '+data.ZEC.supply);
              $('.zecsupply').html($.round(data.ZEC.supply).toLocaleString('en'));
              $('.markzecapZEC').html ('&#8358;'+markzecapFormatter(data.ZEC.cap_ngn, 2));
              $('.markzecapZEC').attr("data-order",data.ZEC.cap_ngn);}
                
                
                                
                                        
                                            
         //Update Exchanges and Static Crypto Pages Data
         if ((data.NGN.LUNO.total24hrVolume) == '0.00'){$('#exchanges').find('.luno .coin-symbol.24hrvolume').html ('...');$('#cryptopagetable').find('.luno-btcngn .coin-symbol.24hrvolume').html ('...');}else{
              $('#exchanges').find('.luno .coin-symbol.24hrvolume').html ('&#8358;'+marketcapFormatter(data.NGN.LUNO.total24hrVolume, 2));
              $('#exchanges').find('.luno .coin-symbol.24hrvolume').attr("data-order",data.NGN.LUNO.total24hrVolume);
              $('#cryptopagetable').find('.luno-btcngn .coin-symbol.24hrvolume').html ('&#8358;'+marketcapFormatter(data.NGN.LUNO.btcngn24hrVolume, 2));
              $('#cryptopagetable').find('.luno-btcngn .coin-symbol.24hrvolume').attr("data-order",data.NGN.LUNO.btcngn24hrVolume);
         }
         if ((data.NGN.BITSSA.total24hrVolume) == '0.00'){$('#exchanges').find('.bitssa .coin-symbol.24hrvolume').html ('...');$('#cryptopagetable').find('.bitssa-btcngn .coin-symbol.24hrvolume').html ('...');}else{
             $('#exchanges').find('.bitssa .coin-symbol.24hrvolume').html ('&#8358;'+marketcapFormatter(data.NGN.BITSSA.total24hrVolume, 2));
             $('#exchanges').find('.bitssa .coin-symbol.24hrvolume').attr("data-order",data.NGN.BITSSA.total24hrVolume);
             $('#cryptopagetable').find('.bitssa-btcngn .coin-symbol.24hrvolume').html ('&#8358;'+marketcapFormatter(data.NGN.BITSSA.btcngn24hrVolume, 2));
             $('#cryptopagetable').find('.bitssa-btcngn .coin-symbol.24hrvolume').attr("data-order",data.NGN.BITSSA.btcngn24hrVolume);
         }
         if ((data.NGN.LOCALBITCOIN.total24hrVolume) == '0.00'){$('#exchanges').find('.localbitcoin .coin-symbol.24hrvolume').html ('...');$('#cryptopagetable').find('.localbitcoin-btcngn .coin-symbol.24hrvolume').html ('...');}else{
              $('#exchanges').find('.localbitcoin .coin-symbol.24hrvolume').html ('&#8358;'+marketcapFormatter(data.NGN.LOCALBITCOIN.total24hrVolume, 2));
             $('#exchanges').find('.localbitcoin .coin-symbol.24hrvolume').attr("data-order",data.NGN.LOCALBITCOIN.total24hrVolume);
         $('#cryptopagetable').find('.localbitcoin-btcngn .coin-symbol.24hrvolume').html ('&#8358;'+marketcapFormatter(data.NGN.LOCALBITCOIN.btcngn24hrVolume, 2));
             $('#cryptopagetable').find('.localbitcoin-btcngn .coin-symbol.24hrvolume').attr("data-order",data.NGN.LOCALBITCOIN.btcngn24hrVolume);
          }
        if ((data.NGN.REMITANO.total24hrVolume) == '0.00'){$('#exchanges').find('.remitano .coin-symbol.24hrvolume').html ('...');$('#cryptopagetable').find('.remitano-btcngn .coin-symbol.24hrvolume').html ('...');}else{
          $('#exchanges').find('.remitano .coin-symbol.24hrvolume').html ('&#8358;'+marketcapFormatter(data.NGN.REMITANO.total24hrVolume, 2));
             $('#exchanges').find('.remitano .coin-symbol.24hrvolume').attr("data-order",data.NGN.REMITANO.total24hrVolume);    
             $('#cryptopagetable').find('.remitano-btcngn .coin-symbol.24hrvolume').html ('&#8358;'+marketcapFormatter(data.NGN.REMITANO.btcngn24hrVolume, 2));
             $('#cryptopagetable').find('.remitano-btcngn .coin-symbol.24hrvolume').attr("data-order",data.NGN.REMITANO.btcngn24hrVolume);
          }  
             
             
             //Total BTCNGN 24hour volume for all exchanges
             $('.totalBTCNGN24hrvolume').html('&#8358;'+(parseInt(data.NGN.LUNO.btcngn24hrVolume) + parseInt(data.NGN.BITSSA.btcngn24hrVolume) + parseInt(data.NGN.LOCALBITCOIN.btcngn24hrVolume) + parseInt(data.NGN.REMITANO.btcngn24hrVolume)).toLocaleString('en'));
             //Total ETHNGN 24hour volume for all exchanges
             $('.totalETHNGN24hrvolume').html('&#8358;'+(parseInt(data.NGN.REMITANO.ethngn24hrVolume)).toLocaleString('en'));

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
    //Market Table  Starts
    if( $('#marketTable').length ) {// Check if the div exists before running the code
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
     };   
    //Market Table  Stops
     
     
            //DataTable destroy to get new data 
     //  $('#exchangetable').dataTable().fnDestroy();   
      
       //Exchanges Table  Starts
    if( $('#exchangetable').length ) {// Check if the div exists before running the code
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
    	, order: [[ 0, 'asc' ]] // data is pre-sorted to descending 24H volume. 'asc' for ascending, 'desc' for descending.
    	
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
        };
       //Exchanges Table  Stops
        
      //Crypto Static Page Starts
      if( $('#cryptopagetable').length ) {// Check if the div exists before running the code
      $('#cryptopagetable').dataTable().fnDestroy();   
      $('#cryptopagetable').on('init.dt', function (){
     // This is the code for numbering DataTable dynamically after default settings
      var t = $('#cryptopagetable').DataTable();
        t.column(0, {search:'applied', order:'applied'}).nodes().each( function (cell, i) { cell.innerHTML = i+1;t.rows().invalidate(); });
      }).DataTable( {
         paging: true
        //	, pageLength: 6
     	, pagingType: 'simple_numbers'
    	, lengthChange: true
    	, autoWidth: false // must be true for responsive designs when scrolling is enabled
    	//, scrollY: 371 // comment out to remove fixed header
    	, scrollCollapse: false
     	, searching: true
    	, order: [[ 4, 'desc' ]] // data is pre-sorted to descending 24H volume. 'asc' for ascending, 'desc' for descending.
    	
        ,"ordering": true,
        columnDefs: [
            {orderable: false, targets: "no-sort"}]
        }); 
      };
        //Crypto Static Page Stops
        
    }) 
  
}

//Use Luno Rates Data on default
lunoRates();



//Cookie code to make Cookie.get work
!function(e){var n=!1;if("function"==typeof define&&define.amd&&(define(e),n=!0),"object"==typeof exports&&(module.exports=e(),n=!0),!n){var o=window.Cookies,t=window.Cookies=e();t.noConflict=function(){return window.Cookies=o,t}}}(function(){function e(){for(var e=0,n={};e<arguments.length;e++){var o=arguments[e];for(var t in o)n[t]=o[t]}return n}function n(o){function t(n,r,i){var c;if("undefined"!=typeof document){if(arguments.length>1){if(i=e({path:"/"},t.defaults,i),"number"==typeof i.expires){var a=new Date;a.setMilliseconds(a.getMilliseconds()+864e5*i.expires),i.expires=a}i.expires=i.expires?i.expires.toUTCString():"";try{c=JSON.stringify(r),/^[\{\[]/.test(c)&&(r=c)}catch(e){}r=o.write?o.write(r,n):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),n=encodeURIComponent(String(n)),n=n.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent),n=n.replace(/[\(\)]/g,escape);var f="";for(var s in i)i[s]&&(f+="; "+s,i[s]!==!0&&(f+="="+i[s]));return document.cookie=n+"="+r+f}n||(c={});for(var p=document.cookie?document.cookie.split("; "):[],d=0;d<p.length;d++){var u=p[d].split("="),l=u.slice(1).join("=");'"'===l.charAt(0)&&(l=l.slice(1,-1));try{var g=u[0].replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent);if(l=o.read?o.read(l,g):o(l,g)||l.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent),this.json)try{l=JSON.parse(l)}catch(e){}if(n===g){c=l;break}n||(c[g]=l)}catch(e){}}return c}}return t.set=t,t.get=function(e){return t.call(t,e)},t.getJSON=function(){return t.apply({json:!0},[].slice.call(arguments))},t.defaults={},t.remove=function(n,o){t(n,"",e(o,{expires:-1}))},t.withConverter=n,t}return n(function(){})});



//Night Mode on
function NightMode(){
$(".hometitle").css("background", "#2c2c2c");
$(".hometitle").css("color", "#fff");
$(".bg-primary").css("background", "#2c2c2c");
$(".dropdown-menu").css("background", "#2c2c2c");
$(".header").css("background", "#2c2c2c");
$(".navbar-nav").css("background", "#2c2c2c");
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
$(".navbar-nav").removeAttr("style");
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
