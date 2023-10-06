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



//Using Quidax for Rates Data
function quidaxRates() {
$usdngn = $('.usdngnnav');
$gbpngn = $('.gbpngnnav');
$eurngn = $('.eurngnnav');
$cnyngn = $('.cnyngnnav');
$.round = Math.round;
var baseurl = 'https://bn-nodejs.vercel.app/v1/rates/';
$.get(baseurl)
    .then(function (data) {
          //update market cap (Always checks if data is 0 before parsing) 
       function formatCurrency(n) {
      return parseFloat(n).toLocaleString('en-US', { style: 'currency', currency: 'NGN', minimumFractionDigits: 2 });
       }
       if (data.marketcap_ngn == '0.00') {$('.marketcap').html('...');$('.marketcapbottom').html('...');
      } else {
          $('.marketcap').html('&#8358;' + marketcapFormatter(data.marketcap_ngn, 2));
          $('.marketcapbottom').html(formatCurrency(data.marketcap_ngn));
          $('.marketcapfetch').html('Fetched: ' + new Date().toString("MMMM dd yyyy, hh:mm:ss tt"));
        }
          //Navbar cryptorates
          if ((data.NGN.QUIDAX.btcngn) == '0.00'){$('#btcngnField').val ('...');}else{
          $('#btcngnField').val ($.round(data.NGN.QUIDAX.btcngn).toLocaleString('en'));}
          if ((data.NGN.QUIDAX.ethngn) == '0.00'){$('#ethngnField').val ('...');}else{
          $('#ethngnField').val ($.round(data.NGN.QUIDAX.ethngn).toLocaleString('en'));} 
          if ((data.NGN.QUIDAX.bchngn) == '0.00'){$('#bchngnField').val ('...');}else{
          $('#bchngnField').val ($.round(data.NGN.QUIDAX.bchngn).toLocaleString('en'));} 
          if ((data.NGN.QUIDAX.ltcngn) == '0.00'){$('#ltcngnField').val ('...');}else{
          $('#ltcngnField').val ($.round(data.NGN.QUIDAX.ltcngn).toLocaleString('en'));} 
          if ((data.NGN.QUIDAX.dashngn) == '0.00'){$('#dashngnField').val ('...');}else{
          $('#dashngnField').val ($.round(data.NGN.QUIDAX.dashngn).toLocaleString('en'));} 
          if ((data.NGN.QUIDAX.xrpngn) == '0.00'){$('#xrpngnField').val ('...');}else{
          $('#xrpngnField').val ($.round(data.NGN.QUIDAX.xrpngn).toLocaleString('en'));} 
          if ((data.NGN.QUIDAX.eosngn) == '0.00'){$('#eosngnField').val ('...');}else{
          $('#eosngnField').val ($.round(data.NGN.QUIDAX.eosngn).toLocaleString('en'));}
          if ((data.NGN.QUIDAX.xlmngn) == '0.00'){$('#xlmngnField').val ('...');}else{
          $('#xlmngnField').val ($.round(data.NGN.QUIDAX.xlmngn).toLocaleString('en'));}          
          if ((data.NGN.QUIDAX.usdtngn) == '0.00'){$('#usdtngnField').val ('...');}else{
          $('#usdtngnField').val ($.round(data.NGN.QUIDAX.usdtngn).toLocaleString('en'));}           
          if ((data.NGN.QUIDAX.adangn) == '0.00'){$('#adangnField').val ('...');}else{
          $('#adangnField').val ($.round(data.NGN.QUIDAX.adangn).toLocaleString('en'));}           
          if ((data.NGN.QUIDAX.xmrngn) == '0.00'){$('#xmrngnField').val ('...');}else{
          $('#xmrngnField').val ($.round(data.NGN.QUIDAX.xmrngn).toLocaleString('en'));}           
          if ((data.NGN.QUIDAX.trxngn) == '0.00'){$('#trxngnField').val ('...');}else{
          $('#trxngnField').val ($.round(data.NGN.QUIDAX.trxngn).toLocaleString('en'));}           
          if ((data.NGN.QUIDAX.iotangn) == '0.00'){$('#iotangnField').val ('...');}else{
          $('#iotangnField').val ($.round(data.NGN.QUIDAX.iotangn).toLocaleString('en'));}           
          if ((data.NGN.QUIDAX.bnbngn) == '0.00'){$('#bnbngnField').val ('...');}else{
          $('#bnbngnField').val ($.round(data.NGN.QUIDAX.bnbngn).toLocaleString('en'));}           
          if ((data.NGN.QUIDAX.neongn) == '0.00'){$('#neongnField').val ('...');}else{
          $('#neongnField').val ($.round(data.NGN.QUIDAX.neongn).toLocaleString('en'));}           
          if ((data.NGN.QUIDAX.etcngn) == '0.00'){$('#etcngnField').val ('...');}else{
          $('#etcngnField').val ($.round(data.NGN.QUIDAX.etcngn).toLocaleString('en'));}           
          if ((data.NGN.QUIDAX.xtzngn) == '0.00'){$('#xtzngnField').val ('...');}else{
          $('#xtzngnField').val ($.round(data.NGN.QUIDAX.xtzngn).toLocaleString('en'));}           
          if ((data.NGN.QUIDAX.xemngn) == '0.00'){$('#xemngnField').val ('...');}else{
          $('#xemngnField').val ($.round(data.NGN.QUIDAX.xemngn).toLocaleString('en'));}           
          if ((data.NGN.QUIDAX.vetngn) == '0.00'){$('#vetngnField').val ('...');}else{
          $('#vetngnField').val ($.round(data.NGN.QUIDAX.vetngn).toLocaleString('en'));}           
          if ((data.NGN.QUIDAX.dogengn) == '0.00'){$('#dogengnField').val ('...');}else{
          $('#dogengnField').val ($.round(data.NGN.QUIDAX.dogengn).toLocaleString('en'));}           
          if ((data.NGN.QUIDAX.wavesngn) == '0.00'){$('#wavesngnField').val ('...');}else{
          $('#wavesngnField').val ($.round(data.NGN.QUIDAX.wavesngn).toLocaleString('en'));}           
          if ((data.NGN.QUIDAX.zecngn) == '0.00'){$('#zecngnField').val ('...');}else{
          $('#zecngnField').val ($.round(data.NGN.QUIDAX.zecngn).toLocaleString('en'));}           
          
          
          //Navbar exchange rates 
          if ((data.NGN.QUIDAX.usdngn) == '0.00'){$usdngn.html ('...');}else{
          $usdngn.html ('&#8358;'+$.round(data.NGN.QUIDAX.usdngn)+'/$');}//&#8358; for Naira html entity
          if ((data.NGN.QUIDAX.gbpngn) == '0.00'){$gbpngn.html ('...');}else{
          $gbpngn.html ('&#8358;'+$.round(data.NGN.QUIDAX.gbpngn)+'/&#163;');}//&#163; for gbp html entity
          if ((data.NGN.QUIDAX.eurngn) == '0.00'){$eurngn.html ('...');}else{
          $eurngn.html ('&#8358;'+$.round(data.NGN.QUIDAX.eurngn)+'/&#8364;');}//&#8364; for eur html entity
          if ((data.NGN.QUIDAX.cnyngn) == '0.00'){$cnyngn.html ('...');}else{
          $cnyngn.html ('&#8358;'+$.round(data.NGN.QUIDAX.cnyngn)+'/&#165;');}//&#165; for cny html entity          
          //update Navbar ticker directions
          if ($.round(data.NGN.QUIDAX.usdngn) >= $.round(data.NGN.QUIDAX.ystClose_usdngn)){$('.usdngnnavticker').addClass("coin-change-green");$('.usdngnnavticker').removeClass("coin-change-red");}else{$('.usdngnnavticker').removeClass("coin-change-green"); $('.usdngnnavticker').addClass("coin-change-red");}
          if ($.round(data.NGN.QUIDAX.gbpngn) >= $.round(data.NGN.QUIDAX.ystClose_gbpngn)){$('.gbpngnnavticker').addClass("coin-change-green");$('.gbpngnnavticker').removeClass("coin-change-red");}else{$('.gbpngnnavticker').removeClass("coin-change-green"); $('.gbpngnnavticker').addClass("coin-change-red");}
          if ($.round(data.NGN.QUIDAX.eurngn) >= $.round(data.NGN.QUIDAX.ystClose_eurngn)){$('.eurngnnavticker').addClass("coin-change-green");$('.eurngnnavticker').removeClass("coin-change-red");}else{$('.eurngnnavticker').removeClass("coin-change-green"); $('.eurngnnavticker').addClass("coin-change-red");}
          if ($.round(data.NGN.QUIDAX.cnyngn) >= $.round(data.NGN.QUIDAX.ystClose_cnyngn)){$('.cnyngnnavticker').addClass("coin-change-green");$('.cnyngnnavticker').removeClass("coin-change-red");}else{$('.cnyngnnavticker').removeClass("coin-change-green"); $('.cnyngnnavticker').addClass("coin-change-red");}          
   
            //Exchanges page 24 hour volume      
          var quidax24hrVolume = ('₦'+$.round(data.NGN.QUIDAX.total24hrVolume).toLocaleString('en'));   
          var lbc24hrVolume = ('₦'+$.round(data.NGN.LOCALBITCOIN.total24hrVolume).toLocaleString('en'));   
       //   var bitssa24hrVolume = ('₦'+$.round(data.NGN.BITSSA.total24hrVolume).toLocaleString('en'));   
          var remitano24hrVolume = ('₦'+$.round(data.NGN.REMITANO.total24hrVolume).toLocaleString('en'));   

          if ((data.NGN.QUIDAX.total24hrVolume) == '0.00'){$('.quidax24hrVolume').html ('...');}else{$('.quidax24hrVolume').html (quidax24hrVolume);}
          if ((data.NGN.LOCALBITCOIN.total24hrVolume) == '0.00'){$('.lbc24hrVolume').html ('...');}else{$('.lbc24hrVolume').html (lbc24hrVolume);}
     //     if ((data.NGN.BITSSA.total24hrVolume) == '0.00'){$('.bitssa24hrVolume').html ('...');}else{$('.bitssa24hrVolume').html (bitssa24hrVolume);}
          if ((data.NGN.REMITANO.total24hrVolume) == '0.00'){$('.remitano24hrVolume').html ('...');}else{$('.remitano24hrVolume').html (remitano24hrVolume);}
          
          
          //Update Market and Cryptocoins Data
          /*BTC*/
          var btcexplorerlink = 'https://www.blockchain.com/explorer';
          $('.btcexplorerlink').attr('href',btcexplorerlink); 
          var btcexplorerlink2 = 'https://live.blockcypher.com/btc/';
          $('.btcexplorerlink2').attr('href',btcexplorerlink2); 
          var btcwebsitelink = 'https://www.bitcoin.org';
          $('.btcwebsitelink').attr('href',btcwebsitelink);    
          var btcwalletlink1 = 'https://www.blockchain.com';
          $('.btcwalletlink1').attr('href',btcwalletlink1); 
          $('.btcwalletlink1').html('Blockchain Wallet'); 
          var btcwalletlink2 = 'https://www.coinomi.com/downloads/';
          $('.btcwalletlink2').attr('href',btcwalletlink2); 
          $('.btcwalletlink2').html('Coinomi Android Wallet');           
          //Cryptocurrency page Markets
          var fiatpricequidaxBTCNGN = ('₦'+$.round(data.NGN.QUIDAX.btcngn).toLocaleString('en'));
          var fiatpricelbcBTCNGN = ('₦'+$.round(data.NGN.LOCALBITCOIN.btcngn).toLocaleString('en'));
     //     var fiatpricebitssaBTCNGN = ('₦'+$.round(data.NGN.BITSSA.btcngn).toLocaleString('en'));
          var fiatpriceremitanoBTCNGN = ('₦'+$.round(data.NGN.REMITANO.btcngn).toLocaleString('en'));
          var fiatpricebtcnairaBTCNGN = ('₦'+$.round((parseInt(data.NGN.BTCNAIRA.BTC.buyrate) + parseInt(data.NGN.BTCNAIRA.BTC.sellrate)) / 2).toLocaleString('en'));
          var fiatpriceBTCUSD = ('$'+$.round(data.BTC.usd).toLocaleString('en'));
          var fiatpriceBTCGBP = ('£'+$.round(data.BTC.gbp).toLocaleString('en'));
          var fiatpriceBTCEUR = ('€'+$.round(data.BTC.eur).toLocaleString('en'));
          if ((data.NGN.QUIDAX.btcngn) == '0.00'){$('.fiatpriceBTCNGN').html ('...');}else{
              $('.fiatpriceBTCNGN').html (fiatpricequidaxBTCNGN);
              $('.fiatpricequidaxBTCNGN').html (fiatpricequidaxBTCNGN);
              $('.fiatpricelbcBTCNGN').html (fiatpricelbcBTCNGN);
      //        $('.fiatpricebitssaBTCNGN').html (fiatpricebitssaBTCNGN);
              $('.fiatpriceremitanoBTCNGN').html (fiatpriceremitanoBTCNGN);
              $('.fiatpricebtcnairaBTCNGN').html (fiatpricebtcnairaBTCNGN);
              $('.fiatpriceBTCNGN').attr('title', 'Quidax:'+fiatpricequidaxBTCNGN+'\nLBC:'+fiatpricelbcBTCNGN);}
          if ((data.BTC.usd) == '0.00'){$('.fiatpriceBTCUSD').html ('...');}else{
              $('.fiatpriceBTCUSD').html (fiatpriceBTCUSD);}
          if ((data.BTC.gbp) == '0.00'){$('.fiatpriceBTCGBP').html ('...');}else{
              $('.fiatpriceBTCGBP').html (fiatpriceBTCGBP);}
          if ((data.BTC.eur) == '0.00'){$('.fiatpriceBTCEUR').html ('...');}else{
              $('.fiatpriceBTCEUR').html (fiatpriceBTCEUR);}
          if ((data.BTC.DailyChange) == '0.00'){$('.dailychangeBTC').html ('0.00');}else{
              $('.dailychangeBTC').html (data.BTC.DailyChange+'%');}
          if ((data.BTC.DailyChange) < '0'){$('tr.btc').addClass("coin--red");$('tr.btc').removeClass("coin--green");}else{$('tr.btc').addClass("coin--green");$('tr.btc').removeClass("coin--red");}            
          if ((data.CRYPTO.BTC.cap_ngn) == '0.00'){$('.marketcapBTC').html ('...');}else{
             $('.marketcapBTC').attr('title', 'Supply: '+data.BTC.supply);
             $('.btcsupply').html($.round(data.BTC.supply).toLocaleString('en'));
             $('.marketcapBTC').html ('&#8358;'+marketcapFormatter(data.BTC.cap_ngn, 2));$('.marketcapBTC').attr("data-order",data.BTC.cap_ngn);}

          /*ETH*/
          var ethexplorerlink = 'https://etherscan.io';
          $('.ethexplorerlink').attr('href',ethexplorerlink); 
          var ethexplorerlink2 = 'https://ethplorer.io';
          $('.ethexplorerlink2').attr('href',ethexplorerlink2); 
          var ethwebsitelink = 'https://www.ethereum.org';
          $('.ethwebsitelink').attr('href',ethwebsitelink);    
          //Cryptocurrency page Markets
          var fiatpricequidaxETHNGN = ('₦'+$.round(data.NGN.QUIDAX.ethngn).toLocaleString('en'));
          var fiatpricelbcETHNGN = ('₦'+$.round(data.NGN.LOCALBITCOIN.ethngn).toLocaleString('en'));
   //       var fiatpricebitssaETHNGN = ('₦'+$.round(data.NGN.BITSSA.ethngn).toLocaleString('en'));
          var fiatpriceremitanoETHNGN = ('₦'+$.round(data.NGN.REMITANO.ethngn).toLocaleString('en'));
          var fiatpricebtcnairaETHNGN = ('₦'+$.round((parseInt(data.NGN.BTCNAIRA.ETH.buyrate) + parseInt(data.NGN.BTCNAIRA.ETH.sellrate)) / 2).toLocaleString('en'));          
          var fiatpriceETHUSD = ('$'+$.round(data.ETH.usd).toLocaleString('en'));
          var fiatpriceETHGBP = ('£'+$.round(data.ETH.gbp).toLocaleString('en'));
          var fiatpriceETHEUR = ('€'+$.round(data.ETH.eur).toLocaleString('en'));
          if ((data.NGN.QUIDAX.ethngn) == '0.00'){$('.fiatpriceETHNGN').html ('...');}else{
              $('.fiatpriceETHNGN').html (fiatpricequidaxETHNGN);
              $('.fiatpricequidaxETHNGN').html (fiatpricequidaxETHNGN);
              $('.fiatpricelbcETHNGN').html (fiatpricelbcETHNGN);
   //           $('.fiatpricebitssaETHNGN').html (fiatpricebitssaETHNGN);
              $('.fiatpriceremitanoETHNGN').html (fiatpriceremitanoETHNGN);
              $('.fiatpricebtcnairaETHNGN').html (fiatpricebtcnairaETHNGN);              
              $('.fiatpriceETHNGN').attr('title', 'Quidax:'+fiatpricequidaxETHNGN+'\nLBC:'+fiatpricelbcETHNGN);}
          if ((data.ETH.usd) == '0.00'){$('.fiatpriceETHUSD').html ('...');}else{
              $('.fiatpriceETHUSD').html (fiatpriceETHUSD);}
          if ((data.ETH.gbp) == '0.00'){$('.fiatpriceETHGBP').html ('...');}else{
              $('.fiatpriceETHGBP').html (fiatpriceETHGBP);}
          if ((data.ETH.eur) == '0.00'){$('.fiatpriceETHEUR').html ('...');}else{
              $('.fiatpriceETHEUR').html (fiatpriceETHEUR);}
          if ((data.ETH.DailyChange) == '0.00'){$('.dailychangeETH').html ('0.00');}else{$('.dailychangeETH').html(data.ETH.DailyChange+'%');}
          if ((data.ETH.DailyChange) < '0'){$('tr.eth').addClass("coin--red");$('tr.eth').removeClass("coin--green");}else{$('tr.eth').addClass("coin--green");$('tr.eth').removeClass("coin--red");}            
          if ((data.CRYPTO.ETH.cap_ngn) == '0.00'){$('.marketcapETH').html ('...');}else{
              $('.marketcapETH').attr('title', 'Supply: '+data.ETH.supply);
              $('.ethsupply').html($.round(data.ETH.supply).toLocaleString('en'));
              $('.marketcapETH').html ('&#8358;'+marketcapFormatter(data.ETH.cap_ngn, 2));$('.marketcapETH').attr("data-order",data.ETH.cap_ngn);}

              
          /*XRP*/    
          var xrpexplorerlink = 'https://bithomp.com/explorer/';
          $('.xrpexplorerlink').attr('href',xrpexplorerlink); 
          var xrpexplorerlink2 = 'https://xrpcharts.ripple.com/#/graph/';
          $('.xrpexplorerlink2').attr('href',xrpexplorerlink2); 
          var xrpwebsitelink = 'https://ripple.com/xrp/';
          $('.xrpwebsitelink').attr('href',xrpwebsitelink);    
          //Cryptocurrency page Markets
          var fiatpricequidaxXRPNGN = ('₦'+$.round(data.NGN.QUIDAX.xrpngn).toLocaleString('en'));
          var fiatpricelbcXRPNGN = ('₦'+$.round(data.NGN.LOCALBITCOIN.xrpngn).toLocaleString('en'));
   //       var fiatpricebitssaXRPNGN = ('₦'+$.round(data.NGN.BITSSA.xrpngn).toLocaleString('en'));
          var fiatpriceremitanoXRPNGN = ('₦'+$.round(data.NGN.REMITANO.xrpngn).toLocaleString('en'));
          var fiatpricebtcnairaXRPNGN = ('₦'+$.round((parseInt(data.NGN.BTCNAIRA.XRP.buyrate) + parseInt(data.NGN.BTCNAIRA.XRP.sellrate)) / 2).toLocaleString('en'));           
          var fiatpriceXRPUSD = ('$'+(data.XRP.usd).toLocaleString(undefined, {minimumFractionDigits: 2,maximumFractionDigits: 2}));
          var fiatpriceXRPGBP = ('£'+(data.XRP.gbp).toLocaleString(undefined, {minimumFractionDigits: 2,maximumFractionDigits: 2}));
          var fiatpriceXRPEUR = ('€'+(data.XRP.eur).toLocaleString(undefined, {minimumFractionDigits: 2,maximumFractionDigits: 2}));
          if ((data.NGN.QUIDAX.xrpngn) == '0.00'){$('.fiatpriceXRPNGN').html ('...');}else{
              $('.fiatpriceXRPNGN').html (fiatpricequidaxXRPNGN);
              $('.fiatpricequidaxXRPNGN').html (fiatpricequidaxXRPNGN);
              $('.fiatpricelbcXRPNGN').html (fiatpricelbcXRPNGN);
   //           $('.fiatpricebitssaXRPNGN').html (fiatpricebitssaXRPNGN);
              $('.fiatpriceremitanoXRPNGN').html (fiatpriceremitanoXRPNGN);
              $('.fiatpricebtcnairaXRPNGN').html (fiatpricebtcnairaXRPNGN);                
              $('.fiatpriceXRPNGN').attr('title', 'Quidax:'+fiatpricequidaxXRPNGN+'\nLBC:'+fiatpricelbcXRPNGN);}
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
          var fiatpricequidaxBCHNGN = ('₦'+$.round(data.NGN.QUIDAX.bchngn).toLocaleString('en'));
          var fiatpricelbcBCHNGN = ('₦'+$.round(data.NGN.LOCALBITCOIN.bchngn).toLocaleString('en'));
 //         var fiatpricebitssaBCHNGN = ('₦'+$.round(data.NGN.BITSSA.bchngn).toLocaleString('en'));
          var fiatpriceremitanoBCHNGN = ('₦'+$.round(data.NGN.REMITANO.bchngn).toLocaleString('en'));
          var fiatpricebtcnairaBCHNGN = ('₦'+$.round((parseInt(data.NGN.BTCNAIRA.BCH.buyrate) + parseInt(data.NGN.BTCNAIRA.BCH.sellrate)) / 2).toLocaleString('en'));          
          var fiatpriceBCHUSD = ('$'+$.round(data.BCH.usd).toLocaleString('en'));
          var fiatpriceBCHGBP = ('£'+$.round(data.BCH.gbp).toLocaleString('en'));
          var fiatpriceBCHEUR = ('€'+$.round(data.BCH.eur).toLocaleString('en'));
          if ((data.NGN.QUIDAX.bchngn) == '0.00'){$('.fiatpriceBCHNGN').html ('...');}else{
              $('.fiatpriceBCHNGN').html (fiatpricequidaxBCHNGN);
   //           $('.fiatpricebitssaBCHNGN').html (fiatpricebitssaBCHNGN);
              $('.fiatpricebtcnairaBCHNGN').html (fiatpricebtcnairaBCHNGN);                
              $('.fiatpriceBCHNGN').attr('title', 'Quidax:'+fiatpricequidaxBCHNGN+'\nLBC:'+fiatpricelbcBCHNGN);}
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
          var fiatpricequidaxLTCNGN = ('₦'+$.round(data.NGN.QUIDAX.ltcngn).toLocaleString('en'));
          var fiatpricelbcLTCNGN = ('₦'+$.round(data.NGN.LOCALBITCOIN.ltcngn).toLocaleString('en'));
  //        var fiatpricebitssaLTCNGN = ('₦'+$.round(data.NGN.BITSSA.ltcngn).toLocaleString('en'));
          var fiatpriceremitanoLTCNGN = ('₦'+$.round(data.NGN.REMITANO.ltcngn).toLocaleString('en'));
          var fiatpricebtcnairaLTCNGN = ('₦'+$.round((parseInt(data.NGN.BTCNAIRA.LTC.buyrate) + parseInt(data.NGN.BTCNAIRA.LTC.sellrate)) / 2).toLocaleString('en'));          
          var fiatpriceLTCUSD = ('$'+$.round(data.LTC.usd).toLocaleString('en'));
          var fiatpriceLTCGBP = ('£'+$.round(data.LTC.gbp).toLocaleString('en'));
          var fiatpriceLTCEUR = ('€'+$.round(data.LTC.eur).toLocaleString('en'));
          if ((data.NGN.QUIDAX.ltcngn) == '0.00'){$('.fiatpriceLTCNGN').html ('...');}else{
              $('.fiatpriceLTCNGN').html (fiatpricequidaxLTCNGN);
   //           $('.fiatpricebitssaLTCNGN').html (fiatpricebitssaLTCNGN);
              $('.fiatpricebtcnairaLTCNGN').html (fiatpricebtcnairaLTCNGN);               
              $('.fiatpriceLTCNGN').attr('title', 'Quidax:'+fiatpricequidaxLTCNGN+'\nLBC:'+fiatpricelbcLTCNGN);}
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
          var fiatpricequidaxDASHNGN = ('₦'+$.round(data.NGN.QUIDAX.dashngn).toLocaleString('en'));
          var fiatpricelbcDASHNGN = ('₦'+$.round(data.NGN.LOCALBITCOIN.dashngn).toLocaleString('en'));
  //        var fiatpricebitssaDASHNGN = ('₦'+$.round(data.NGN.BITSSA.dashngn).toLocaleString('en'));
          var fiatpriceremitanoDASHNGN = ('₦'+$.round(data.NGN.REMITANO.dashngn).toLocaleString('en'));
          var fiatpricebtcnairaDASHNGN = ('₦'+$.round((parseInt(data.NGN.BTCNAIRA.DASH.buyrate) + parseInt(data.NGN.BTCNAIRA.DASH.sellrate)) / 2).toLocaleString('en'));          
          var fiatpriceDASHUSD = ('$'+$.round(data.DASH.usd).toLocaleString('en'));
          var fiatpriceDASHGBP = ('£'+$.round(data.DASH.gbp).toLocaleString('en'));
          var fiatpriceDASHEUR = ('€'+$.round(data.DASH.eur).toLocaleString('en'));
          if ((data.NGN.QUIDAX.dashngn) == '0.00'){$('.fiatpriceDASHNGN').html ('...');}else{
              $('.fiatpriceDASHNGN').html (fiatpricequidaxDASHNGN);
   //           $('.fiatpricebitssaDASHNGN').html (fiatpricebitssaDASHNGN);
              $('.fiatpricebtcnairaDASHNGN').html (fiatpricebtcnairaDASHNGN);                
              $('.fiatpriceDASHNGN').attr('title', 'Quidax:'+fiatpricequidaxDASHNGN+'\nLBC:'+fiatpricelbcDASHNGN);}
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
          var fiatpricequidaxEOSNGN = ('₦'+$.round(data.NGN.QUIDAX.eosngn).toLocaleString('en'));
          var fiatpricelbcEOSNGN = ('₦'+$.round(data.NGN.LOCALBITCOIN.eosngn).toLocaleString('en'));
          var fiatpriceEOSUSD = ('$'+parseFloat(data.EOS.usd).toFixed(2));
          var fiatpriceEOSGBP = ('£'+parseFloat(data.EOS.gbp).toFixed(2));
          var fiatpriceEOSEUR = ('€'+parseFloat(data.EOS.eur).toFixed(2));
          if ((data.NGN.QUIDAX.eosngn) == '0.00'){$('.fiatpriceEOSNGN').html ('...');}else{
              $('.fiatpriceEOSNGN').html (fiatpricequidaxEOSNGN);
              $('.fiatpriceEOSNGN').attr('title', 'Quidax:'+fiatpricequidaxEOSNGN+'\nLBC:'+fiatpricelbcEOSNGN);}
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
          var fiatpricequidaxXLMNGN = ('₦'+$.round(data.NGN.QUIDAX.xlmngn).toLocaleString('en'));
          var fiatpricelbcXLMNGN = ('₦'+$.round(data.NGN.LOCALBITCOIN.xlmngn).toLocaleString('en'));
          var fiatpriceXLMUSD = ('$'+parseFloat(data.XLM.usd).toFixed(2));
          var fiatpriceXLMGBP = ('£'+parseFloat(data.XLM.gbp).toFixed(2));
          var fiatpriceXLMEUR = ('€'+parseFloat(data.XLM.eur).toFixed(2));
          if ((data.NGN.QUIDAX.xlmngn) == '0.00'){$('.fiatpriceXLMNGN').html ('...');}else{
              $('.fiatpriceXLMNGN').html (fiatpricequidaxXLMNGN);
              $('.fiatpriceXLMNGN').attr('title', 'Quidax:'+fiatpricequidaxXLMNGN+'\nLBC:'+fiatpricelbcXLMNGN);}
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
          var fiatpricequidaxUSDTNGN = ('₦'+$.round(data.NGN.QUIDAX.usdtngn).toLocaleString('en'));
          var fiatpricelbcUSDTNGN = ('₦'+$.round(data.NGN.LOCALBITCOIN.usdtngn).toLocaleString('en'));
          var fiatpriceUSDTUSD = ('$'+parseFloat(data.USDT.usd).toFixed(2));
          var fiatpriceUSDTGBP = ('£'+parseFloat(data.USDT.gbp).toFixed(2));
          var fiatpriceUSDTEUR = ('€'+parseFloat(data.USDT.eur).toFixed(2));
          if ((data.NGN.QUIDAX.usdtngn) == '0.00'){$('.fiatpriceUSDTNGN').html ('...');}else{
              $('.fiatpriceUSDTNGN').html (fiatpricequidaxUSDTNGN);
              $('.fiatpriceUSDTNGN').attr('title', 'Quidax:'+fiatpricequidaxUSDTNGN+'\nLBC:'+fiatpricelbcUSDTNGN);}
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
          var fiatpricequidaxADANGN = ('₦'+$.round(data.NGN.QUIDAX.adangn).toLocaleString('en'));
          var fiatpricelbcADANGN = ('₦'+$.round(data.NGN.LOCALBITCOIN.adangn).toLocaleString('en'));
          var fiatpriceADAUSD = ('$'+parseFloat(data.ADA.usd).toFixed(2));
          var fiatpriceADAGBP = ('£'+parseFloat(data.ADA.gbp).toFixed(2));
          var fiatpriceADAEUR = ('€'+parseFloat(data.ADA.eur).toFixed(2));
          if ((data.NGN.QUIDAX.adangn) == '0.00'){$('.fiatpriceADANGN').html ('...');}else{
              $('.fiatpriceADANGN').html (fiatpricequidaxADANGN);
              $('.fiatpriceADANGN').attr('title', 'Quidax:'+fiatpricequidaxADANGN+'\nLBC:'+fiatpricelbcADANGN);}
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
          var fiatpricequidaxXMRNGN = ('₦'+$.round(data.NGN.QUIDAX.xmrngn).toLocaleString('en'));
          var fiatpricelbcXMRNGN = ('₦'+$.round(data.NGN.LOCALBITCOIN.xmrngn).toLocaleString('en'));
          var fiatpriceXMRUSD = ('$'+$.round(data.XMR.usd).toLocaleString('en'));
          var fiatpriceXMRGBP = ('£'+$.round(data.XMR.gbp).toLocaleString('en'));
          var fiatpriceXMREUR = ('€'+$.round(data.XMR.eur).toLocaleString('en'));
          if ((data.NGN.QUIDAX.xmrngn) == '0.00'){$('.fiatpriceXMRNGN').html ('...');}else{
              $('.fiatpriceXMRNGN').html (fiatpricequidaxXMRNGN);
              $('.fiatpriceXMRNGN').attr('title', 'Quidax:'+fiatpricequidaxXMRNGN+'\nLBC:'+fiatpricelbcXMRNGN);}
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
          var fiatpricequidaxTRXNGN = ('₦'+parseFloat(data.NGN.QUIDAX.trxngn).toFixed(2));
          var fiatpricelbcTRXNGN = ('₦'+parseFloat(data.NGN.LOCALBITCOIN.trxngn).toFixed(2));
          var fiatpriceTRXUSD = ('$'+parseFloat(data.TRX.usd).toFixed(3));
          var fiatpriceTRXGBP = ('£'+parseFloat(data.TRX.gbp).toFixed(3));
          var fiatpriceTRXEUR = ('€'+parseFloat(data.TRX.eur).toFixed(3));
          if ((data.NGN.QUIDAX.trxngn) == '0.00'){$('.fiatpriceTRXNGN').html ('...');}else{
              $('.fiatpriceTRXNGN').html (fiatpricequidaxTRXNGN);
              $('.fiatpriceTRXNGN').attr('title', 'Quidax:'+fiatpricequidaxTRXNGN+'\nLBC:'+fiatpricelbcTRXNGN);}
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
          var fiatpricequidaxIOTANGN = ('₦'+$.round(data.NGN.QUIDAX.iotangn).toLocaleString('en'));
          var fiatpricelbcIOTANGN = ('₦'+$.round(data.NGN.LOCALBITCOIN.iotangn).toLocaleString('en'));
          var fiatpriceIOTAUSD = ('$'+parseFloat(data.IOTA.usd).toFixed(2));
          var fiatpriceIOTAGBP = ('£'+parseFloat(data.IOTA.gbp).toFixed(2));
          var fiatpriceIOTAEUR = ('€'+parseFloat(data.IOTA.eur).toFixed(2));
          if ((data.NGN.QUIDAX.iotangn) == '0.00'){$('.fiatpriceIOTANGN').html ('...');}else{
              $('.fiatpriceIOTANGN').html (fiatpricequidaxIOTANGN);
              $('.fiatpriceIOTANGN').attr('title', 'Quidax:'+fiatpricequidaxIOTANGN+'\nLBC:'+fiatpricelbcIOTANGN);}
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
          var fiatpricequidaxBNBNGN = ('₦'+$.round(data.NGN.QUIDAX.bnbngn).toLocaleString('en'));
          var fiatpricelbcBNBNGN = ('₦'+$.round(data.NGN.LOCALBITCOIN.bnbngn).toLocaleString('en'));
          var fiatpriceBNBUSD = ('$'+parseFloat(data.BNB.usd).toFixed(2));
          var fiatpriceBNBGBP = ('£'+parseFloat(data.BNB.gbp).toFixed(2));
          var fiatpriceBNBEUR = ('€'+parseFloat(data.BNB.eur).toFixed(2));
          if ((data.NGN.QUIDAX.bnbngn) == '0.00'){$('.fiatpriceBNBNGN').html ('...');}else{
              $('.fiatpriceBNBNGN').html (fiatpricequidaxBNBNGN);
              $('.fiatpriceBNBNGN').attr('title', 'Quidax:'+fiatpricequidaxBNBNGN+'\nLBC:'+fiatpricelbcBNBNGN);}
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
          var fiatpricequidaxNEONGN = ('₦'+$.round(data.NGN.QUIDAX.neongn).toLocaleString('en'));
          var fiatpricelbcNEONGN = ('₦'+$.round(data.NGN.LOCALBITCOIN.neongn).toLocaleString('en'));
          var fiatpriceNEOUSD = ('$'+$.round(data.NEO.usd).toLocaleString('en'));
          var fiatpriceNEOGBP = ('£'+$.round(data.NEO.gbp).toLocaleString('en'));
          var fiatpriceNEOEUR = ('€'+$.round(data.NEO.eur).toLocaleString('en'));
          if ((data.NGN.QUIDAX.neongn) == '0.00'){$('.fiatpriceNEONGN').html ('...');}else{
              $('.fiatpriceNEONGN').html (fiatpricequidaxNEONGN);
              $('.fiatpriceNEONGN').attr('title', 'Quidax:'+fiatpricequidaxNEONGN+'\nLBC:'+fiatpricelbcNEONGN);}
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
          var fiatpricequidaxETCNGN = ('₦'+$.round(data.NGN.QUIDAX.etcngn).toLocaleString('en'));
          var fiatpricelbcETCNGN = ('₦'+$.round(data.NGN.LOCALBITCOIN.etcngn).toLocaleString('en'));
          var fiatpriceETCUSD = ('$'+parseFloat(data.ETC.usd).toFixed(2));
          var fiatpriceETCGBP = ('£'+parseFloat(data.ETC.gbp).toFixed(2));
          var fiatpriceETCEUR = ('€'+parseFloat(data.ETC.eur).toFixed(2));
          if ((data.NGN.QUIDAX.etcngn) == '0.00'){$('.fiatpriceETCNGN').html ('...');}else{
              $('.fiatpriceETCNGN').html (fiatpricequidaxETCNGN);
              $('.fiatpriceETCNGN').attr('title', 'Quidax:'+fiatpricequidaxETCNGN+'\nLBC:'+fiatpricelbcETCNGN);}
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
          var fiatpricequidaxXTZNGN = ('₦'+$.round(data.NGN.QUIDAX.xtzngn).toLocaleString('en'));
          var fiatpricelbcXTZNGN = ('₦'+$.round(data.NGN.LOCALBITCOIN.xtzngn).toLocaleString('en'));
          var fiatpriceXTZUSD = ('$'+parseFloat(data.XTZ.usd).toFixed(2));
          var fiatpriceXTZGBP = ('£'+parseFloat(data.XTZ.gbp).toFixed(2));
          var fiatpriceXTZEUR = ('€'+parseFloat(data.XTZ.eur).toFixed(2));
          if ((data.NGN.QUIDAX.xtzngn) == '0.00'){$('.fiatpriceXTZNGN').html ('...');}else{
              $('.fiatpriceXTZNGN').html (fiatpricequidaxXTZNGN);
              $('.fiatpriceXTZNGN').attr('title', 'Quidax:'+fiatpricequidaxXTZNGN+'\nLBC:'+fiatpricelbcXTZNGN);}
          if ((data.XTZ.usd) == '0.00'){$('.fiatpriceXTZUSD').html ('...');}else{
              $('.fiatpriceXTZUSD').html (fiatpriceXTZUSD);}
          if ((data.XTZ.gbp) == '0.00'){$('.fiatpriceXTZGBP').html ('...');}else{
              $('.fiatpriceXTZGBP').html (fiatpriceXTZGBP);}
          if ((data.XTZ.eur) == '0.00'){$('.fiatpriceXTZEUR').html ('...');}else{
              $('.fiatpriceXTZEUR').html (fiatpriceXTZEUR);}
          if ((data.XTZ.DailyChange) == '0.00'){$('.dailychangeXTZ').html ('0.00');}else{$('.dailychangeXTZ').html(data.XTZ.DailyChange+'%');}
          if ((data.XTZ.DailyChange) < '0'){$('tr.xtz').addClass("coin--red");$('tr.xtz').removeClass("coin--green");}else{$('tr.xtz').addClass("coin--green");$('tr.xtz').removeClass("coin--red");}            
          if ((data.XTZ.cap_ngn) == '0.00'){$('.marketcapXTZ').html ('...');}else{
              $('.marketcapXTZ').attr('title', 'Supply: '+data.XTZ.supply);
              $('.xtzsupply').html($.round(data.XTZ.supply).toLocaleString('en'));
              $('.marketcapXTZ').html ('&#8358;'+marketcapFormatter(data.XTZ.cap_ngn, 2));
              $('.marketcapXTZ').attr("data-order",data.XTZ.cap_ngn);}
        
          /*XEM*/    
          var fiatpricequidaxXEMNGN = ('₦'+$.round(data.NGN.QUIDAX.xemngn).toLocaleString('en'));
          var fiatpricelbcXEMNGN = ('₦'+$.round(data.NGN.LOCALBITCOIN.xemngn).toLocaleString('en'));
          var fiatpriceXEMUSD = ('$'+parseFloat(data.XEM.usd).toFixed(2));
          var fiatpriceXEMGBP = ('£'+parseFloat(data.XEM.gbp).toFixed(2));
          var fiatpriceXEMEUR = ('€'+parseFloat(data.XEM.eur).toFixed(2));
          if ((data.NGN.QUIDAX.xemngn) == '0.00'){$('.fiatpriceXEMNGN').html ('...');}else{
              $('.fiatpriceXEMNGN').html (fiatpricequidaxXEMNGN);
              $('.fiatpriceXEMNGN').attr('title', 'Quidax:'+fiatpricequidaxXEMNGN+'\nLBC:'+fiatpricelbcXEMNGN);}
          if ((data.XEM.usd) == '0.00'){$('.fiatpriceXEMUSD').html ('...');}else{
              $('.fiatpriceXEMUSD').html (fiatpriceXEMUSD);}
          if ((data.XEM.gbp) == '0.00'){$('.fiatpriceXEMGBP').html ('...');}else{
              $('.fiatpriceXEMGBP').html (fiatpriceXEMGBP);}
          if ((data.XEM.eur) == '0.00'){$('.fiatpriceXEMEUR').html ('...');}else{
              $('.fiatpriceXEMEUR').html (fiatpriceXEMEUR);}
          if ((data.XEM.DailyChange) == '0.00'){$('.dailychangeXEM').html ('0.00');}else{$('.dailychangeXEM').html(data.XEM.DailyChange+'%');}
          if ((data.XEM.DailyChange) < '0'){$('tr.xem').addClass("coin--red");$('tr.xem').removeClass("coin--green");}else{$('tr.xem').addClass("coin--green");$('tr.xem').removeClass("coin--red");}            
          if ((data.XEM.cap_ngn) == '0.00'){$('.marketcapXEM').html ('...');}else{
              $('.marketcapXEM').attr('title', 'Supply: '+data.XEM.supply);
              $('.xemsupply').html($.round(data.XEM.supply).toLocaleString('en'));
              $('.marketcapXEM').html ('&#8358;'+marketcapFormatter(data.XEM.cap_ngn, 2));
              $('.marketcapXEM').attr("data-order",data.XEM.cap_ngn);}
        
          /*VET*/    
          var fiatpricequidaxVETNGN = ('₦'+parseFloat(data.NGN.QUIDAX.vetngn).toFixed(2));
          var fiatpricelbcVETNGN = ('₦'+parseFloat(data.NGN.LOCALBITCOIN.vetngn).toFixed(2));
          var fiatpriceVETUSD = ('$'+parseFloat(data.VET.usd).toFixed(3));
          var fiatpriceVETGBP = ('£'+parseFloat(data.VET.gbp).toFixed(3));
          var fiatpriceVETEUR = ('€'+parseFloat(data.VET.eur).toFixed(3));
          if ((data.NGN.QUIDAX.vetngn) == '0.00'){$('.fiatpriceVETNGN').html ('...');}else{
              $('.fiatpriceVETNGN').html (fiatpricequidaxVETNGN);
              $('.fiatpriceVETNGN').attr('title', 'Quidax:'+fiatpricequidaxVETNGN+'\nLBC:'+fiatpricelbcVETNGN);}
          if ((data.VET.usd) == '0.00'){$('.fiatpriceVETUSD').html ('...');}else{
              $('.fiatpriceVETUSD').html (fiatpriceVETUSD);}
          if ((data.VET.gbp) == '0.00'){$('.fiatpriceVETGBP').html ('...');}else{
              $('.fiatpriceVETGBP').html (fiatpriceVETGBP);}
          if ((data.VET.eur) == '0.00'){$('.fiatpriceVETEUR').html ('...');}else{
              $('.fiatpriceVETEUR').html (fiatpriceVETEUR);}
          if ((data.VET.DailyChange) == '0.00'){$('.dailychangeVET').html ('0.00');}else{$('.dailychangeVET').html(data.VET.DailyChange+'%');}
          if ((data.VET.DailyChange) < '0'){$('tr.vet').addClass("coin--red");$('tr.vet').removeClass("coin--green");}else{$('tr.vet').addClass("coin--green");$('tr.vet').removeClass("coin--red");}            
          if ((data.VET.cap_ngn) == '0.00'){$('.marketcapVET').html ('...');}else{
              $('.marketcapVET').attr('title', 'Supply: '+data.VET.supply);
              $('.vetsupply').html($.round(data.VET.supply).toLocaleString('en'));
              $('.marketcapVET').html ('&#8358;'+marketcapFormatter(data.VET.cap_ngn, 2));
              $('.marketcapVET').attr("data-order",data.VET.cap_ngn);}
        
          /*DOGE*/    
          var fiatpricequidaxDOGENGN = ('₦'+parseFloat(data.NGN.QUIDAX.dogengn).toFixed(2));
          var fiatpricelbcDOGENGN = ('₦'+parseFloat(data.NGN.LOCALBITCOIN.dogengn).toFixed(2));
          var fiatpriceDOGEUSD = ('$'+parseFloat(data.DOGE.usd).toFixed(3));
          var fiatpriceDOGEGBP = ('£'+parseFloat(data.DOGE.gbp).toFixed(3));
          var fiatpriceDOGEEUR = ('€'+parseFloat(data.DOGE.eur).toFixed(3));
          if ((data.NGN.QUIDAX.dogengn) == '0.00'){$('.fiatpriceDOGENGN').html ('...');}else{
              $('.fiatpriceDOGENGN').html (fiatpricequidaxDOGENGN);
              $('.fiatpriceDOGENGN').attr('title', 'Quidax:'+fiatpricequidaxDOGENGN+'\nLBC:'+fiatpricelbcDOGENGN);}
          if ((data.DOGE.usd) == '0.00'){$('.fiatpriceDOGEUSD').html ('...');}else{
              $('.fiatpriceDOGEUSD').html (fiatpriceDOGEUSD);}
          if ((data.DOGE.gbp) == '0.00'){$('.fiatpriceDOGEGBP').html ('...');}else{
              $('.fiatpriceDOGEGBP').html (fiatpriceDOGEGBP);}
          if ((data.DOGE.eur) == '0.00'){$('.fiatpriceDOGEEUR').html ('...');}else{
              $('.fiatpriceDOGEEUR').html (fiatpriceDOGEEUR);}
          if ((data.DOGE.DailyChange) == '0.00'){$('.dailychangeDOGE').html ('0.00');}else{$('.dailychangeDOGE').html(data.DOGE.DailyChange+'%');}
          if ((data.DOGE.DailyChange) < '0'){$('tr.doge').addClass("coin--red");$('tr.doge').removeClass("coin--green");}else{$('tr.doge').addClass("coin--green");$('tr.doge').removeClass("coin--red");}            
          if ((data.DOGE.cap_ngn) == '0.00'){$('.marketcapDOGE').html ('...');}else{
              $('.marketcapDOGE').attr('title', 'Supply: '+data.DOGE.supply);
              $('.dogesupply').html($.round(data.DOGE.supply).toLocaleString('en'));
              $('.marketcapDOGE').html ('&#8358;'+marketcapFormatter(data.DOGE.cap_ngn, 2));
              $('.marketcapDOGE').attr("data-order",data.DOGE.cap_ngn);}
        
          /*WAVES*/    
          var fiatpricequidaxWAVESNGN = ('₦'+parseFloat(data.NGN.QUIDAX.wavesngn).toFixed(2));
          var fiatpricelbcWAVESNGN = ('₦'+parseFloat(data.NGN.LOCALBITCOIN.wavesngn).toFixed(2));
          var fiatpriceWAVESUSD = ('$'+parseFloat(data.WAVES.usd).toFixed(3));
          var fiatpriceWAVESGBP = ('£'+parseFloat(data.WAVES.gbp).toFixed(3));
          var fiatpriceWAVESEUR = ('€'+parseFloat(data.WAVES.eur).toFixed(3));
          if ((data.NGN.QUIDAX.wavesngn) == '0.00'){$('.fiatpriceWAVESNGN').html ('...');}else{
              $('.fiatpriceWAVESNGN').html (fiatpricequidaxWAVESNGN);
              $('.fiatpriceWAVESNGN').attr('title', 'Quidax:'+fiatpricequidaxWAVESNGN+'\nLBC:'+fiatpricelbcWAVESNGN);}
          if ((data.WAVES.usd) == '0.00'){$('.fiatpriceWAVESUSD').html ('...');}else{
              $('.fiatpriceWAVESUSD').html (fiatpriceWAVESUSD);}
          if ((data.WAVES.gbp) == '0.00'){$('.fiatpriceWAVESGBP').html ('...');}else{
              $('.fiatpriceWAVESGBP').html (fiatpriceWAVESGBP);}
          if ((data.WAVES.eur) == '0.00'){$('.fiatpriceWAVESEUR').html ('...');}else{
              $('.fiatpriceWAVESEUR').html (fiatpriceWAVESEUR);}
          if ((data.WAVES.DailyChange) == '0.00'){$('.dailychangeWAVES').html ('0.00');}else{$('.dailychangeWAVES').html(data.WAVES.DailyChange+'%');}
          if ((data.WAVES.DailyChange) < '0'){$('tr.waves').addClass("coin--red");$('tr.waves').removeClass("coin--green");}else{$('tr.waves').addClass("coin--green");$('tr.waves').removeClass("coin--red");}            
          if ((data.WAVES.cap_ngn) == '0.00'){$('.marketcapWAVES').html ('...');}else{
              $('.marketcapWAVES').attr('title', 'Supply: '+data.WAVES.supply);
              $('.wavessupply').html($.round(data.WAVES.supply).toLocaleString('en'));
              $('.marketcapWAVES').html ('&#8358;'+marketcapFormatter(data.WAVES.cap_ngn, 2));
              $('.marketcapWAVES').attr("data-order",data.WAVES.cap_ngn);}
              
          /*ZEC*/    
          var fiatpricequidaxZECNGN = ('₦'+$.round(data.NGN.QUIDAX.zecngn).toLocaleString('en'));
          var fiatpricelbcZECNGN = ('₦'+$.round(data.NGN.LOCALBITCOIN.zecngn).toLocaleString('en'));
          var fiatpriceZECUSD = ('$'+$.round(data.ZEC.usd).toLocaleString('en'));
          var fiatpriceZECGBP = ('£'+$.round(data.ZEC.gbp).toLocaleString('en'));
          var fiatpriceZECEUR = ('€'+$.round(data.ZEC.eur).toLocaleString('en'));
          if ((data.NGN.QUIDAX.zecngn) == '0.00'){$('.fiatpriceZECNGN').html ('...');}else{
              $('.fiatpriceZECNGN').html (fiatpricequidaxZECNGN);
              $('.fiatpriceZECNGN').attr('title', 'Quidax:'+fiatpricequidaxZECNGN+'\nLBC:'+fiatpricelbcZECNGN);}
          if ((data.ZEC.usd) == '0.00'){$('.fiatpriceZECUSD').html ('...');}else{
              $('.fiatpriceZECUSD').html (fiatpriceZECUSD);}
          if ((data.ZEC.gbp) == '0.00'){$('.fiatpriceZECGBP').html ('...');}else{
              $('.fiatpriceZECGBP').html (fiatpriceZECGBP);}
          if ((data.ZEC.eur) == '0.00'){$('.fiatpriceZECEUR').html ('...');}else{
              $('.fiatpriceZECEUR').html (fiatpriceZECEUR);}
          if ((data.ZEC.DailyChange) == '0.00'){$('.dailychangeZEC').html ('0.00');}else{$('.dailychangeZEC').html(data.ZEC.DailyChange+'%');}
          if ((data.ZEC.DailyChange) < '0'){$('tr.zec').addClass("coin--red");$('tr.zec').removeClass("coin--green");}else{$('tr.zec').addClass("coin--green");$('tr.zec').removeClass("coin--red");}            
          if ((data.ZEC.cap_ngn) == '0.00'){$('.marketcapZEC').html ('...');}else{
              $('.marketcapZEC').attr('title', 'Supply: '+data.ZEC.supply);
              $('.zecsupply').html($.round(data.ZEC.supply).toLocaleString('en'));
              $('.marketcapZEC').html ('&#8358;'+marketcapFormatter(data.ZEC.cap_ngn, 2));
              $('.marketcapZEC').attr("data-order",data.ZEC.cap_ngn);}
                
        //Update BTCNaira Fee
          var btcnairabtcngnbuyfee = data.NGN.BTCNAIRA.BTC.volatilityBuyFee; //FOR BUY FEE
              $('.btcnairabtcngnbuyfee').html (btcnairabtcngnbuyfee);
          var btcnairabtcngnsellfee = data.NGN.BTCNAIRA.BTC.volatilitySellFee; //FOR SELL FEE
              $('.btcnairabtcngnsellfee').html (btcnairabtcngnsellfee);     
                 
                                        
                                            
         //Update Exchanges and Static Crypto Pages Data
         if ((data.NGN.QUIDAX.total24hrVolume) == '0.00'){$('#exchanges').find('.quidax .coin-symbol.24hrvolume').html ('...');$('#cryptopagetable').find('.quidax-btcngn .coin-symbol.24hrvolume').html ('...');}else{
              $('#exchanges').find('.quidax .coin-symbol.24hrvolume').html ('&#8358;'+marketcapFormatter(data.NGN.QUIDAX.total24hrVolume, 2));
              $('#exchanges').find('.quidax .coin-symbol.24hrvolume').attr("data-order",data.NGN.QUIDAX.total24hrVolume);
              $('#cryptopagetable').find('.quidax-btcngn .coin-symbol.24hrvolume').html ('&#8358;'+marketcapFormatter(data.NGN.QUIDAX.btcngn24hrVolume, 2));
              $('#cryptopagetable').find('.quidax-btcngn .coin-symbol.24hrvolume').attr("data-order",data.NGN.QUIDAX.btcngn24hrVolume);
         }
  /*       if ((data.NGN.BITSSA.total24hrVolume) == '0.00'){$('#exchanges').find('.bitssa .coin-symbol.24hrvolume').html ('...');$('#cryptopagetable').find('.bitssa-btcngn .coin-symbol.24hrvolume').html ('...');}else{
             $('#exchanges').find('.bitssa .coin-symbol.24hrvolume').html ('&#8358;'+marketcapFormatter(data.NGN.BITSSA.total24hrVolume, 2));
             $('#exchanges').find('.bitssa .coin-symbol.24hrvolume').attr("data-order",data.NGN.BITSSA.total24hrVolume);
             $('#cryptopagetable').find('.bitssa-btcngn .coin-symbol.24hrvolume').html ('&#8358;'+marketcapFormatter(data.NGN.BITSSA.btcngn24hrVolume, 2));
             $('#cryptopagetable').find('.bitssa-btcngn .coin-symbol.24hrvolume').attr("data-order",data.NGN.BITSSA.btcngn24hrVolume);
         } */
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
             $('.totalBTCNGN24hrvolume').html('&#8358;'+(parseInt(data.NGN.QUIDAX.btcngn24hrVolume)/* + parseInt(data.NGN.BITSSA.btcngn24hrVolume) */+ parseInt(data.NGN.LOCALBITCOIN.btcngn24hrVolume) + parseInt(data.NGN.REMITANO.btcngn24hrVolume)).toLocaleString('en'));
             //Total ETHNGN 24hour volume for all exchanges
             $('.totalETHNGN24hrvolume').html('&#8358;'+(parseInt(data.NGN.QUIDAX.ethngn24hrVolume) + parseInt(data.NGN.REMITANO.ethngn24hrVolume)).toLocaleString('en'));
 
 
   //////////DataTable Sorting Code/////////////   
        
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
        pageLength: 25,
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
       WPac.init({widget: 'ReviewCount', id: 14539, html: '<span style="color: #ff9800;" data-order="{{=it.rating}}">{{=it.stars}} {{=it.rating}}</span>'});
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

//Use Quidax Rates Data on default
setInterval(quidaxRates, 60000)
quidaxRates();


//BTCNaira website Data
var bnConverterbuyselllink = document.location.origin+'/p/buy.html';
var btcnairabuylink = document.location.origin+'/p/buy.html';
var btcnairaselllink = document.location.origin+'/p/sell.html';
var btcnairaminerlink = document.location.origin+'/p/miner.html';
$('.bnConverterbuysell').attr('href',bnConverterbuyselllink);  
$('.btcnairabuylink').attr('href',btcnairabuylink);  
$('.btcnairaselllink').attr('href',btcnairaselllink);  
$('.btcnairaminerlink').attr('href',btcnairaminerlink);  

//Cryptocurrency Page Links
var btcpagelink = document.location.origin+'/2018/10/bitcoin.html';
var ethpagelink = document.location.origin+'/2018/10/ethereum.html';
var xrppagelink = document.location.origin+'/2018/10/ripple.html';
var bchpagelink = document.location.origin+'/2018/10/bitcoin-cash.html';
var eospagelink = document.location.origin+'/2018/10/eos.html';
var xlmpagelink = document.location.origin+'/2018/10/stellar.html';
var ltcpagelink = document.location.origin+'/2018/10/litecoin.html';
var usdtpagelink = document.location.origin+'/2018/10/tether.html';
var adapagelink = document.location.origin+'/2018/10/cardano.html';
var xmrpagelink = document.location.origin+'/2018/10/monero.html';
var trxpagelink = document.location.origin+'/2018/10/tron.html';
var iotapagelink = document.location.origin+'/2018/10/iota.html';
var dashpagelink = document.location.origin+'/2018/10/dashcoin.html';
var bnbpagelink = document.location.origin+'/2018/10/quidax-coin.html';
var neopagelink = document.location.origin+'/2018/10/neo.html';
var etcpagelink = document.location.origin+'/2018/10/ethereum-classic.html';
var xempagelink = document.location.origin+'/2018/10/nem.html';
var xtzpagelink = document.location.origin+'/2018/10/tezos.html';
var vetpagelink = document.location.origin+'/2018/10/vechain.html';
var zecpagelink = document.location.origin+'/2018/10/zcash.html';
var dogepagelink = document.location.origin+'/2018/10/dogecoin.html';
var wavespagelink = document.location.origin+'/2017/01/waves.html';


$('.btcpagelink').attr('href',btcpagelink); 
$('.ethpagelink').attr('href',ethpagelink); 
$('.xrppagelink').attr('href',xrppagelink); 
$('.bchpagelink').attr('href',bchpagelink); 
$('.eospagelink').attr('href',eospagelink); 
$('.xlmpagelink').attr('href',xlmpagelink); 
$('.ltcpagelink').attr('href',ltcpagelink); 
$('.usdtpagelink').attr('href',usdtpagelink); 
$('.adapagelink').attr('href',adapagelink); 
$('.xmrpagelink').attr('href',xmrpagelink); 
$('.trxpagelink').attr('href',trxpagelink); 
$('.iotapagelink').attr('href',iotapagelink); 
$('.dashpagelink').attr('href',dashpagelink); 
$('.bnbpagelink').attr('href',bnbpagelink); 
$('.neopagelink').attr('href',neopagelink); 
$('.etcpagelink').attr('href',etcpagelink); 
$('.xempagelink').attr('href',xempagelink); 
$('.xtzpagelink').attr('href',xtzpagelink); 
$('.vetpagelink').attr('href',vetpagelink); 
$('.zecpagelink').attr('href',zecpagelink); 
$('.dogepagelink').attr('href',dogepagelink); 
$('.wavespagelink').attr('href',wavespagelink); 

//Exchanges Logo Links
var bitkoinafricalogolink = 'https://2.bp.blogspot.com/-FpMsOQmfc6w/W8zMBp6ddlI/AAAAAAAABOA/Yin1xX4pr2MBaRdNbwmcK-yRv7MzfxEaQCLcBGAs/s320/bitkoinAfrica.png';
//var bitssalogolink = 'https://1.bp.blogspot.com/-eVz_tc0MWeQ/W8zLpXIdZ1I/AAAAAAAABN4/H1tV6Qxf8m0fDq0j-deaw5Jj2djH6IRkgCLcBGAs/s1600/bitssa.png';
var bitpesalogolink = 'https://2.bp.blogspot.com/-8px9GKn-pLs/W8zSAPyWBQI/AAAAAAAABOU/ejtGXg7f7fAR7yVkrgEDDki1dvtQU_mOgCLcBGAs/s1600/bitpesa.png';
var btcnairalogolink = 'https://3.bp.blogspot.com/-IVHHFsuPiQY/W5fszzbftKI/AAAAAAAABM4/gxULtyHzWsUxAPqenrr_xPzFC9OtaBj4QCLcBGAs/s1600/btcnaira-logo.png';
var localbitcoinlogolink = 'https://4.bp.blogspot.com/-kmbqHrhUYSk/W8zMSnMOKOI/AAAAAAAABOI/ZN8Rqz8m4KUQkJm53IWGEuM5cCpni1ajgCLcBGAs/s1600/localbitcoin.png';
var quidaxlogolink = 'https://1.bp.blogspot.com/-fdhqxmsGGXU/W5a-IzVJZbI/AAAAAAAABMs/5V4TPhxJmAMrBYlAeXQg-zBH2lNljnu9QCLcBGAs/s1600/quidax.png';
var nairaexlogolink = 'https://2.bp.blogspot.com/-8d9QjYiXsDU/W8zK0f2hV-I/AAAAAAAABNo/E3m_q9jIaLYwGhE2ruDd9MzqITR1ckGCgCLcBGAs/s1600/nairaex.png';
var remitanologolink = 'https://2.bp.blogspot.com/-qLJa-Gv3STo/W8zLMnMOu7I/AAAAAAAABNw/EaezEJ4zxV8CL2p316PdocpYYa7OEO_pgCLcBGAs/s1600/remitano.png';
var changellylogolink = 'https://1.bp.blogspot.com/-X4W34KpGJ8k/W89TPsuCdVI/AAAAAAAACC4/EWXA3jUkISY0uw-2XDUoS8t-KRoVQMg-wCLcBGAs/s1600/changelly.png';
$('.bitkoinafricalogolink').attr('src',bitkoinafricalogolink);  
//$('.bitssalogolink').attr('src',bitssalogolink); 
$('.bitpesalogolink').attr('src',bitpesalogolink); 
$('.btcnairalogolink').attr('src',btcnairalogolink);  
$('.localbitcoinlogolink').attr('src',localbitcoinlogolink);  
$('.quidaxlogolink').attr('src',quidaxlogolink);  
$('.nairaexlogolink').attr('src',nairaexlogolink);  
$('.remitanologolink').attr('src',remitanologolink);  
$('.changellylogolink').attr('src',changellylogolink);  


//Exchanges Page Links
var bitkoinafricapagelink = document.location.origin+'/p/bitkoinafrica.html';
//var bitssapagelink = document.location.origin+'/p/bitssa.html';
var bitpesapagelink = document.location.origin+'/p/bitpesa.html';
var btcnairapagelink = document.location.origin+'/p/btcnaira.html';
var localbitcoinpagelink = document.location.origin+'/p/localbitcoin.html';
var quidaxpagelink = document.location.origin+'/p/quidax.html';
var nairaexpagelink = document.location.origin+'/p/nairaex.html';
var remitanopagelink = document.location.origin+'/p/remitano.html';
$('.bitkoinafricapagelink').attr('href',bitkoinafricapagelink);  
//$('.bitssapagelink').attr('href',bitssapagelink);  
$('.bitpesapagelink').attr('href',bitpesapagelink);  
$('.btcnairapagelink').attr('href',btcnairapagelink);  
$('.localbitcoinpagelink').attr('href',localbitcoinpagelink);  
$('.quidaxpagelink').attr('href',quidaxpagelink);  
$('.nairaexpagelink').attr('href',nairaexpagelink);  
$('.remitanopagelink').attr('href',remitanopagelink);  

//Exchanges Page Review Links
var bitkoinafricareviewlink = document.location.origin+'/p/bitkoinafrica.html#reviews';
//var bitssareviewlink = document.location.origin+'/p/bitssa.html#reviews';
var bitpesareviewlink = document.location.origin+'/p/bitpesa.html#reviews';
var btcnairareviewlink = document.location.origin+'/p/btcnaira.html#reviews';
var localbitcoinreviewlink = document.location.origin+'/p/localbitcoin.html#reviews';
var quidaxreviewlink = document.location.origin+'/p/quidax.html#reviews';
var nairaexreviewlink = document.location.origin+'/p/nairaex.html#reviews';
var remitanoreviewlink = document.location.origin+'/p/remitano.html#reviews';
$('.bitkoinafricareviewlink').attr('href',bitkoinafricareviewlink);  
//$('.bitssareviewlink').attr('href',bitssareviewlink);  
$('.bitpesareviewlink').attr('href',bitpesareviewlink);  
$('.btcnairareviewlink').attr('href',btcnairareviewlink);  
$('.localbitcoinreviewlink').attr('href',localbitcoinreviewlink);  
$('.quidaxreviewlink').attr('href',quidaxreviewlink);  
$('.nairaexreviewlink').attr('href',nairaexreviewlink);  
$('.remitanoreviewlink').attr('href',remitanoreviewlink); 

//Exchanges Website Links
var bitkoinafricawebsitelink = 'https://bitkoin.africa';
//var bitssawebsitelink = 'https://www.bitssa.com';
var bitpesawebsitelink = 'https://www.bitpesa.co';
var btcnairawebsitelink = 'https://www.btcnaira.com.ng';
var localbitcoinwebsitelink = 'https://localbitcoins.com/?ch=am9k';
var quidaxwebsitelink = 'https://www.quidax.com';
var nairaexwebsitelink = 'https://www.nairaex.com';
var remitanowebsitelink = 'https://www.remitano.com';
$('.bitkoinafricawebsitelink').attr('href',bitkoinafricawebsitelink);  
//$('.bitssawebsitelink').attr('href',bitssawebsitelink); 
$('.bitpesawebsitelink').attr('href',bitpesawebsitelink);  
$('.btcnairawebsitelink').attr('href',btcnairawebsitelink);  
$('.localbitcoinwebsitelink').attr('href',localbitcoinwebsitelink);  
$('.quidaxwebsitelink').attr('href',quidaxwebsitelink);  
$('.nairaexwebsitelink').attr('href',nairaexwebsitelink);  
$('.remitanowebsitelink').attr('href',remitanowebsitelink);  


//Cookie code to make Cookie.get work for Night Mode
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
//Night Mode Default Selection by Cookie
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
