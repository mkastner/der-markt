const AppTeaserDefs = require('../lib/app-teaser-defs.js'); 

function doubleDigitMonth(month) {
  return ('0' + (month + 1)).slice(-2);
}

module.exports = {
  fillIn(text) {
    if (!text) {
      return text; 
    }
    const date = new Date();
    const month = doubleDigitMonth(date.getMonth());
    return text.replace(/%%year%%/, date.getFullYear())
      .replace(/%%month%%/, month); 
  },
  checked(active) {
    return active ? 'checked=\'true\'' : '';
  },
  eachAppTeaser(options) {
    const result = []; 
    console.log('options', options.fn); 

    for (const [key, teaserDef] of Object.entries(AppTeaserDefs)) { 
      result.push(options.fn({key, item: teaserDef}));
    }
    return result.join(''); 
  },
};
