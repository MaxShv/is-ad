const { isAd } = require('./is-ad.js');

// wait 500sec until it is loaded
setTimeout(() => {
  const t1 = isAd('youtube.com', '');
  const t2 = isAd('https://s0.2mdn.net/ads/richmedia/studio/pv2/60200866/20170525155431200/index.html?e=69&renderingType=2&leftOffset=0&topOffset=0&c=Nke4Lq3zq1&t=1', 'google.com');

  console.log('isAd = false Actual: ', t1);
  console.log('isAd = true  Actual: ', t2);
}, 500);
