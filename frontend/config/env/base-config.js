module.exports = {
  logLevel: 'info';
  import: {
    topZinsen: [
      { 
        url: 'https://ansparplan.fmh.de/fmh/xml/top-zinsen.json',
        file: '/public/top-zinsen/ansparplan.json'
      },
      { 
        url: 'https://wertpapier.fmh.de/rechner/fmh2/xml/top-zinsen.json',
        file: '/public/top-zinsen/depotbank.json
      },
      { 
        url: 'https://festgeld.fmh.de/rechner/fmh2/xml/top-zinsen.json',
        file: '/public/top-zinsen/festgeld.json
      },
      {
        url: 'https://forward.fmh.de/rechner/fmh2/xml/top-zinsen.json',
        file: '/public/top-zinsen/forward.json 
      },
      { 
        url: 'https://girokonto.fmh.de/rechner/fmh2/xml/top-zinsen.json',
        file: '/public/top-zinsen/girokonto.json 
      { 
        url:  'https://hypotheken.fmh.de/rechner/fmh2/xml/top-zinsen.json',
        file: '/public/top-zinsen/hypotheken.json 
      },
      {
        url:  'https://ratenkredit.fmh.de/fmh/xml/top-zinsen1.json',
        file: '/public/top-zinsen/ratenkredit.json 
      },
      {
        url: 'https://sparbrief.fmh.de/rechner2/fmh2/xml/top-zinsen.json',
        file: '/public/top-zinsen/sparbrief.json 
      },
      { 
        url: 'https://sparbuch.fmh.de/fmh/xml/top-zinsen.json',
        file: '/public/top-zinsen/sparbuch.json  
      },
      { 
        url: 'https://tagesgeld.fmh.de/rechner/fmh2/xml/top-zinsen.json',
        file: '/public/top-zinsen/tagesgeld.json  
      },
      { 
        url: 'https://zuwachssparen.fmh.de/rechner/fmh2/xml/top-zinsen.json',
        file: '/public/top-zinsen/zuwachssparen.json  
      }
    ] 
  }
};
