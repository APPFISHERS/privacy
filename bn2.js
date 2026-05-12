function bnEscapeHtml(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function bnFormatFiat(value, prefix) {
  var v = parseFloat(value);
  if (!isFinite(v) || v === 0) return '...';
  if (v >= 1) return prefix + Math.round(v).toLocaleString('en');
  return prefix + v.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 6 });
}

function populateCryptocoinsTable(data) {
  var crypto = (data && data.CRYPTO) || {};
  var $table = $('#marketTable');
  if (!$table.length) return;
  if ($.fn.DataTable && $.fn.DataTable.isDataTable('#marketTable')) {
    $table.DataTable().destroy();
  }
  var $tbody = $table.find('tbody');
  var rows = [];
  var coins = Object.keys(crypto)
    .map(function (k) { return crypto[k]; })
    .filter(function (c) { return c && typeof c === 'object' && c.symbol; });
  coins.sort(function (a, b) {
    var ra = parseFloat(a.rank);
    var rb = parseFloat(b.rank);
    if (!isFinite(ra)) ra = Infinity;
    if (!isFinite(rb)) rb = Infinity;
    return ra - rb;
  });
  coins.forEach(function (c) {
    var symbol = String(c.symbol).toUpperCase();
    var symLow = symbol.toLowerCase();
    var name = c.name || symbol;
    var rank = (c.rank != null) ? c.rank : '';
    var ngnVal = parseFloat(c.ngn);
    var usdVal = parseFloat(c.usd);
    var gbpVal = parseFloat(c.gbp);
    var eurVal = parseFloat(c.eur);
    var capVal = parseFloat(c.cap_ngn);
    var ngn = bnFormatFiat(c.ngn, '₦');
    var usd = bnFormatFiat(c.usd, '$');
    var gbp = bnFormatFiat(c.gbp, '£');
    var eur = bnFormatFiat(c.eur, '€');
    var changeRaw = (c.ngnChange != null) ? c.ngnChange : '0.00';
    var changeNum = parseFloat(changeRaw);
    var change = (isFinite(changeNum) ? changeRaw : '0.00') + '%';
    var changeClass = (isFinite(changeNum) && changeNum < 0) ? 'coin--red' : 'coin--green';
    var marketcap = (isFinite(capVal) && capVal > 0)
      ? ('₦' + marketcapFormatter(capVal, 2))
      : '...';
    var marketcapOrder = isFinite(capVal) ? capVal : 0;
    var mineableYes = String(c.mineable).toLowerCase() === 'yes';
    var mineIcon = mineableYes ? 'fa fa-check-circle' : 'fa fa-times-circle';
    var mineTitle = mineableYes ? 'Mineable' : 'Not Mineable';
    var mineOrder = mineableYes ? 'Mineable' : 'Not-Mineable';
    var tradeable = String(c.tradeable).toLowerCase() === 'yes';
    var pageHref = document.location.origin + '/p/coin.html?symbol=' + encodeURIComponent(symbol);
    var logoImg = c.logo
      ? "<img class='coin-logo' src='" + bnEscapeHtml(c.logo) + "' style='width:24px;height:24px;margin-right:6px;vertical-align:middle;'/>"
      : '';
    var tradeCell = tradeable
      ? ("<td class='coin-trade'>"
          + "<a class='badge internal sell buylink' data-placement='left' href='#' rel='tooltip' style='padding: 5px 15px 5px 15px;' symbol='" + bnEscapeHtml(symbol) + "' title='Click on the link to Buy " + bnEscapeHtml(symbol) + "'>Buy</a>"
          + " <a class='badge internal selllink' data-placement='left' href='#' rel='tooltip' style='padding: 5px 15px 5px 15px;margin-left:2px;' symbol='" + bnEscapeHtml(symbol) + "' title='Click on the link to Sell " + bnEscapeHtml(symbol) + "'>Sell</a>"
          + "</td>")
      : "<td class='coin-trade'/>";
    rows.push(
      "<tr class='" + bnEscapeHtml(symLow) + " coin " + changeClass + "' data-symbol='" + bnEscapeHtml(symbol) + "'>"
      + "<td data-order='" + bnEscapeHtml(rank) + "'>" + bnEscapeHtml(rank) + "</td>"
      + "<td class='coin-name'><a href='" + bnEscapeHtml(pageHref) + "'>" + logoImg + bnEscapeHtml(name) + "</a></td>"
      + "<td class='coin-symbol'><a href='" + bnEscapeHtml(pageHref) + "'>" + bnEscapeHtml(symbol) + "</a></td>"
      + "<td class='coin-price ngn' data-order='" + (isFinite(ngnVal) ? ngnVal : 0) + "'><span>" + ngn + "</span></td>"
      + "<td class='coin-change' style='display:none;'>" + bnEscapeHtml(change) + "</td>"
      + "<td class='coin-price cap' data-order='" + marketcapOrder + "'><span>" + marketcap + "</span></td>"
      + "<td class='coin-price usd' data-order='" + (isFinite(usdVal) ? usdVal : 0) + "'><span>" + usd + "</span></td>"
      + "<td class='coin-price gbp' data-order='" + (isFinite(gbpVal) ? gbpVal : 0) + "'><span>" + gbp + "</span></td>"
      + "<td class='coin-price eur' data-order='" + (isFinite(eurVal) ? eurVal : 0) + "'><span>" + eur + "</span></td>"
      + "<td class='coin-change'>" + bnEscapeHtml(change) + "</td>"
      + "<td class='coin-price cap' data-order='" + marketcapOrder + "'><span>" + marketcap + "</span></td>"
      + tradeCell
      + "<td class='coin-mine' data-order='" + mineOrder + "' title='" + mineTitle + "'><i class='" + mineIcon + "'/></td>"
      + "</tr>"
    );
    // Update homepage marquee / per-coin spans (.fiatpriceXNGN, .dailychangeX, .marketcapX, etc.)
    // Skip global per-symbol selectors when the lowercased symbol isn't a valid CSS
    // class identifier (e.g. starts with a digit) - those selectors would throw in
    // jQuery and abort the rest of the populate pass.
    var safeClass = /^[A-Za-z_-][\w-]*$/.test(symLow);
    if (safeClass) {
      $('.fiatprice' + symbol + 'NGN').html(ngn);
      $('.fiatprice' + symbol + 'USD').html(usd);
      $('.fiatprice' + symbol + 'GBP').html(gbp);
      $('.fiatprice' + symbol + 'EUR').html(eur);
      $('.dailychange' + symbol).html(change);
      var $tr = $('tr.' + symLow);
      if (isFinite(changeNum) && changeNum < 0) {
        $tr.addClass('coin--red').removeClass('coin--green');
      } else {
        $tr.addClass('coin--green').removeClass('coin--red');
      }
      var $cap = $('.marketcap' + symbol);
      if (isFinite(capVal) && capVal > 0) {
        $cap.html('&#8358;' + marketcapFormatter(capVal, 2));
        $cap.attr('data-order', capVal);
        if (c.supply != null) {
          $cap.attr('title', 'Supply: ' + c.supply);
          var supplyN = parseFloat(c.supply);
          if (isFinite(supplyN)) {
            $('.' + symLow + 'supply').html(Math.round(supplyN).toLocaleString('en'));
          }
        }
      } else {
        $cap.html('...');
      }
    }
  });
  $tbody.html(rows.join(''));

  // Initialize/re-initialize DataTable now that the tbody is in place so the
  // homepage cryptocoins table keeps its paging (pageLength: 25), length
  // selector, search, and market-cap sort.
  if ($.fn && $.fn.DataTable) {
    $table.DataTable({
      paging: true,
      pageLength: 25,
      pagingType: 'simple_numbers',
      lengthChange: true,
      autoWidth: false,
      scrollCollapse: false,
      searching: true,
      order: [[0, 'asc']],
      ordering: true,
      columnDefs: [
        { orderable: false, targets: 'no-sort' },
        { targets: [0, 5, 10], type: 'num' },
        { targets: [3, 6, 7, 8], type: 'formatted-num' }
      ]
    });
  }
}

function populateRatesMenu(data) {
  var crypto = (data && data.CRYPTO) || {};
  function ngnDisplay(c) {
    var v = parseFloat(c && c.ngn);
    return (isFinite(v) && v > 0) ? Math.round(v).toLocaleString('en') : '...';
  }
  if (crypto.BTC) { $('#btcngnField').val(ngnDisplay(crypto.BTC)); }
  if (crypto.ETH) { $('#ethngnField').val(ngnDisplay(crypto.ETH)); }
  var $menu = $('#rates-menu');
  if (!$menu.length) return;
  var coins = [];
  Object.keys(crypto).forEach(function (key) {
    var c = crypto[key];
    if (!c || typeof c !== 'object' || !c.symbol) return;
    var sym = String(c.symbol).toUpperCase();
    if (sym === 'BTC' || sym === 'ETH') return;
    coins.push(c);
  });
  coins.sort(function (a, b) {
    var ra = parseFloat(a.rank);
    var rb = parseFloat(b.rank);
    if (!isFinite(ra)) ra = Infinity;
    if (!isFinite(rb)) rb = Infinity;
    return ra - rb;
  });
  var items = coins.map(function (c) {
    var sym = String(c.symbol).toUpperCase();
    return "<li class='dropdown-item'><span style='float:left;color:#fff;'>"
      + bnEscapeHtml(sym) + " : &#8358;" + bnEscapeHtml(ngnDisplay(c))
      + "</span></li>";
  });
  $menu.html(items.join(''));
}

function populateNavbarFiat(data) {
  var p2p = data && data.FIAT && data.FIAT.NGN && data.FIAT.NGN.p2p && data.FIAT.NGN.p2p.Real;
  if (!p2p) return;
  function set(sel, value, suffix) {
    var v = parseFloat(value);
    if (!isFinite(v) || v === 0) {
      $(sel).html('...');
    } else {
      $(sel).html('&#8358;' + Math.round(v) + '/' + suffix);
    }
  }
  set('.usdngnnav', p2p.usd, '$');
  set('.gbpngnnav', p2p.gbp, '&#163;');
  set('.eurngnnav', p2p.eur, '&#8364;');
  set('.cnyngnnav', p2p.cny, '&#165;');
}

function populateCoinPage(data) {
  if (!$('.coinPriceNGN').length && !$('.marketcapcoin').length) return;
  var sym = (window.bnCoinPageSymbol ||
    ((typeof URLSearchParams !== 'undefined' && new URLSearchParams(window.location.search).get('symbol')) || 'BTC')
  ).toUpperCase();
  var c = data && data.CRYPTO && data.CRYPTO[sym];
  if (!c) return;
  var name = c.name || sym;
  $('.coinName').text(name);
  $('.coinSymbol').text(sym);
  $('.coinBuy, .coinSell').attr('symbol', sym);
  $('.coinBuy').attr('title', 'Click on the link to Buy ' + sym);
  $('.coinSell').attr('title', 'Click on the link to Sell ' + sym);
  if (c.logo) { $('.coinLogo').attr('src', c.logo); }
  $('.coinPriceNGN').html(bnFormatFiat(c.ngn, '₦'));
  $('.coinPriceUSD').html(bnFormatFiat(c.usd, '$'));
  $('.coinPriceGBP').html(bnFormatFiat(c.gbp, '£'));
  $('.coinPriceEUR').html(bnFormatFiat(c.eur, '€'));
  $('.coinPriceCNY').html(bnFormatFiat(c.cny, '¥'));
  var capVal = parseFloat(c.cap_ngn);
  $('.marketcapcoin').html((isFinite(capVal) && capVal > 0)
    ? ('₦' + marketcapFormatter(capVal, 2))
    : '...');
  if (c.supply != null) {
    var supplyNum = parseFloat(c.supply);
    if (isFinite(supplyNum)) {
      $('.coinsupply').html(Math.round(supplyNum).toLocaleString('en'));
    }
  }
  var mineable = String(c.mineable).toLowerCase() === 'yes';
  $('.coinMineable')
    .attr('title', mineable ? 'Mineable' : 'Not Mineable')
    .html("<i class=' fa " + (mineable ? 'fa-check-circle' : 'fa-times-circle') + "'/>"
      + (mineable ? 'Mineable' : 'Not Mineable')
      + (mineable
        ? " <a class='badge btcnairaminerlink coinMinerLink' style='font-size: 11px;color: #fff;border-radius: 4px;' title='Click on the Link to Buy Miner'>Buy Hosted Miner</a>"
        : ''));
  var explorerLink = c[sym.toLowerCase() + 'explorerlink'] || c.btcexplorerlink || '';
  if (explorerLink) {
    $('.coinExplorerLink').attr('href', explorerLink);
    $('.coinWebsiteLink').attr('href', explorerLink);
    $('.coinWalletLink').attr('href', explorerLink);
  }
  document.title = name + ' (' + sym + ') ' + bnFormatFiat(c.ngn, '₦') + ' - BTCNaira';

  // Load the Blogger label feed for this coin once per page load.
  // Label = coin name lowercased with spaces -> dashes (e.g. "Bitcoin Cash" -> "bitcoin-cash").
  if (!window.bnCoinNewsLoaded && c.name) {
    window.bnCoinNewsLoaded = true;
    var newsLabel = String(c.name).toLowerCase().replace(/\s+/g, '-');
    var s = document.createElement('script');
    s.src = 'https://www.btcnaira.com.ng/feeds/posts/default/-/'
      + encodeURIComponent(newsLabel)
      + '?orderby=published&alt=json-in-script&callback=showrpwiththumbs';
    (document.body || document.head).appendChild(s);
  }
}

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
$.round = Math.round;
var baseurl = 'https://api.btcnaira.com.ng/v1/rates/';
$.get(baseurl)
    .then(function (data) {
          //Auto-populate cryptocoins table and rates dropdown from data.CRYPTO
          window.bnRates = data;
          if (window.jQuery) { jQuery(document).trigger('bn:rates', [data]); }
          populateCryptocoinsTable(data);
          populateRatesMenu(data);
          populateNavbarFiat(data);
          populateCoinPage(data);
          //update market cap (Always checks if data is 0 before parsing)
      function formatWithCommas(n) {
    return parseFloat(n).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
         }
      if (data.marketcap_ngn == '0.00') {
          $('.marketcap').html('...');
         $('.marketcapbottom').html('...');
        } else {
    $('.marketcap').html('&#8358;' + marketcapFormatter(data.marketcap_ngn, 2));
    $('.marketcapbottom').html('&#8358;' + formatWithCommas(data.marketcap_ngn));
    $('.marketcapfetch').html('Fetched: ' + new Date().toString("MMMM dd yyyy, hh:mm:ss tt"));
       }
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
    //Market Table is now initialized inside populateCryptocoinsTable.

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

//Buy/Sell widget modal: open https://widget.btcnaira.com.ng/p/{buy|sell}.html?m=0#SYMBOL
$(document).on('click', '.buylink, .selllink', function (e) {
    var $el = $(this);
    var symbol = $el.attr('symbol');
    if (!symbol) return;
    var action = $el.hasClass('selllink') ? 'sell' : 'buy';
    var url = 'https://widget.btcnaira.com.ng/p/' + action + '.html?m=0#' + symbol;
    $('#trade-widget-title').text((action === 'sell' ? 'Sell ' : 'Buy ') + symbol);
    $('#trade-widget-iframe').attr('src', url);
    $('#trade-widget-modal').modal('show');
    e.preventDefault();
});
$(document).on('hidden.bs.modal', '#trade-widget-modal', function () {
    $('#trade-widget-iframe').attr('src', '');
});

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
