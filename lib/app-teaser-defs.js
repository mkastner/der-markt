module.exports = {
  tagesgeld: {
    title: 'Die besten Tagesgeld-Angebote %%month%%/%%year%% für',
    url: 'https://tagesgeld.der-markt.com/rechner/dermarkt/schnellcheck.aspx',
    params: [
      {
        label: 'Anlagesumme',
        key: 'AB',
        options: [
          {
            value: 10000,
            label: '10.000 Euro',
            active: true,
          },
          {
            value: 25000,
            label: '25.000 Euro',
            active: false,
          },
        ],
      },
      {
        label: 'Anlagezeitraum',
        key: 'AD',
        options: [
          {
            value: 3,
            label: '3 Monate',
            active: false,
          },
          {
            value: 6,
            label: '6 Monate',
            active: true,
          },
        ],
      },
    ],
  },
  festgeld: {
    title: 'Die besten Festgeld-Angebote %%month%%/%%year%% für',
    url: 'https://festgeld.fmh.de/rechner/fmh2/schnellcheck.aspx',
    params: [
      {
        label: 'Anlagebetrag',
        key: 'AB',
        options: [
          {
            value: 5000,
            label: '5.000 Euro',
            active: false,
          },
          {
            value: 25000,
            label: '25.000 Euro',
            active: true,
          },
        ],
      },
      {
        key: 'AD',
        label: 'Anlagezeitraum',
        options: [
          {
            value: 12,
            label: '12 Monate',
            active: true,
          },
          {
            value: 36,
            label: '3 Jahre',
            active: false,
          },
        ],
      },
    ],
  },
  hypothek: {
    title: 'Die besten Baugeld-Zinsen %%month%%/%%year%% für',
    url: 'https://hypotheken.fmh.de/rechner/fmh2/default.aspx',
    params: [
      {
        label: 'Darlehensbetrag',
        key: 'KB',
        options: [
          {
            value: 250000,
            label: '250.000 Euro',
            active: false,
          },
          {
            value: 400000,
            label: '400.000 Euro',
            active: true,
          },
        ],
      },
      {
        label: 'Zinsbindung',
        key: 'SZB',
        options: [
          {
            value: '10',
            label: '10 Jahre',
            active: true,
          },
          {
            value: '20',
            label: '20 Jahre',
            active: false,
          },
        ],
      },
    ],
  },
  bausparen: {
    title: 'Die besten Bauspar-Angebote %%month%%/%%year%% für',
    url: 'https://bausparvergleich.fmh.de/fmh/schnellcheck.aspx',
    params: [
      {
        label: 'Bausparsumme',
        key: 'BS',
        options: [
          {
            value: 50000,
            label: '50.000 Euro',
            active: false,
          },
          {
            value: 100000,
            label: '100.000 Euro',
            active: true,
          },
        ],
      },
      {
        label: 'Anspardauer',
        key: 'BD',
        options: [
          {
            value: 10,
            label: '10 Jahre',
            active: true,
          },
          {
            value: 15,
            label: '15 Jahre',
            active: false,
          },
        ],
      },
    ],
  },

  /*
  bausparen: {
    title: 'Die besten Bauspar-Angebote für',
    upperLabel: 'Bausparsumme',
    upperButtons: [
      {
        value: 50000,
        label: '50.000 Euro',
        active: false 
      }, {
        value: 100000,
        label: '100.000 Euro',
        active: true 
      }
    ],  
    lowerLabel: 'Anspardauer',
    lowerButtons: [
      {
        value: 10,
        label: '10 Jahre',
        active: true
      }, {
        value: 15,
        label: '15 Jahre',
        active: false
      }
    ],
    url({upperValue, lowerValue}) {
      return `https://bausparvergleich.fmh.de/fmh/schnellcheck.aspx?BS=${upperValue}&BD=${lowerValue}`;
    }
  },
  */
  /* 
  geschaeftskonten: {
    title: 'Die besten Angebote für Geschäftskonten per App',
    upperLabel: 'Geldeingang',
    upperButtons: [
      {
        value: '3000',
        label: '3.000 Euro',
        active: true
      },
      {
        value: '5000',
        label: '5000 Euro',
        active: false
      }
    ],  
    lowerLabel: 'Guthaben',
    lowerButtons: [
      {
        value: '3000',
        label: '3000 Euro',
        active: false
      },
      {
        value: '5000',
        label: '5000 Euro',
        active: true 
      }
    ],  
    url({upperValue, middleValue, lowerValue}) {
      return `https://www.fmh.de/zinsen-vergleiche/girokonto-dispozinsen/geschaeftskonto-vergleich?geldeingang=${encodeURIComponent(upperValue)}&guthaben=${encodeURIComponent(lowerValue)}`;
    }
  }, 
  kreditkarten: {
    title: 'Die besten Kreditkarten-Angebote',
    upperLabel: 'Nur Gebührenfrei',
    upperButtons: [
      {
        value: '',
        label: 'Unwichtig',
        active: true
      },
      {
        value: 'Ja',
        label: 'Ja',
        active: false
      }
    ],  
    middleLabel: 'inkl. Girokonto',
    middleButtons: [
      {
        value: '',
        label: 'Unwichtig',
        active: true 
      },
      {
        value: 'Ja',
        label: 'Ja',
        active: false 
      }
    ],  
    lowerLabel: 'Kostenlose Bargeldabhebung',
    lowerButtons: [
      {
        value: '',
        label: 'Unwichtig',
        active: true 
      },
      {
        value: 'Inland und Ausland',
        label: 'In- und Ausland',
        active: false
      }
    ],
    url({upperValue, middleValue, lowerValue}) {
      return `https://kreditkarten.fmh.de?gebuehren_frei=${encodeURIComponent(upperValue)}&inkl_girokonto=${encodeURIComponent(middleValue)}&kostenlos_bargeld=${encodeURIComponent(lowerValue)}`;
    }
  },
  riester: {
    title: 'Die besten Riester-Angebote für',
    upperLabel: 'Objektgesamtkosten',
    upperButtons: [
      {
        value: 300000,
        label: '300.000 Euro',
        active: true
      }, {
        value: 450000,
        label: '450.000 Euro',
        active: false
      }
    ],  
    lowerLabel: 'Sollzinsbindung',
    lowerButtons: [
      {
        value: 10,
        label: '10 Jahre',
        active: false 
      }, {
        value: 15,
        label: '15 Jahre',
        active: true 
      }
    ],
    url({upperValue, lowerValue}) {
      return `https://riesterdarlehen.fmh.de/fmh2/default.aspx?KB=${upperValue}&SZB=${lowerValue}`;
    }
  },
  // Sparbuch: https://sparbuch.fmh.de/fmh/schnellcheck.aspx?ABE=25000&ABM=100
  // ABE = Anlagebetrag einmalig in Euro
  // ABM = Anlagebetrag monatlich in Euro
  sparbuch: {
    title: 'Die besten Sparbuchzinsen für',
    upperLabel: 'Einmalanlage',
    upperButtons: [
      {
        value: 0,
        label: '0 Euro',
        active: false 
      }, {
        value: 5000,
        label: '5.000 Euro',
        active: true 
      }
    ],  
    lowerLabel: 'Monatliche Sparrate',
    lowerButtons: [
      {
        value: 50,
        label: '50 Euro',
        active: true
      }, {
        value: 100,
        label: '100 Euro',
        active: false
      }
    ],
    url({upperValue, lowerValue}) {
      return `https://sparbuch.fmh.de/fmh/schnellcheck.aspx?ABE=${upperValue}&ABM=${lowerValue}`;
    }
  },
  ratenkredit: {
    title: 'Die besten Ratenkredite für',
    upperLabel: 'Kreditbetrag',
    upperButtons: [
      {
        value: 10000,
        label: '10.000 Euro',
        active: false 
      }, {
        value: 15000,
        label: '15.000 Euro',
        active: true 
      }
    ],  
    lowerLabel: 'Laufzeit',
    lowerButtons: [
      {
        value: 36,
        label: '36 Monate',
        active: false 
      }, {
        value: 60,
        label: '60 Monate',
        active: true 
      }
    ],
    url({upperValue, lowerValue}) {
      return `https://ratenkredit.fmh.de/fmh/schnellcheck.aspx?KB=${upperValue}&KL=${lowerValue}`;
    }
  },
  forward: {
    title: 'Die besten Forward-Darlehen für',
    upperLabel: 'Darlehensbetrag',
    upperButtons: [
      {
        value: 100000,
        label: '100.000 Euro',
        active: false 
      }, {
        value: 300000,
        label: '300.000 Euro',
        active: true 
      }
    ],  
    lowerLabel: 'Vorlaufzeit',
    lowerButtons: [
      {
        value: 24,
        label: '24 Monate',
        active: true
      }, {
        value: 36,
        label: '36 Monate',
        active: false
      }
    ],
    url({upperValue, lowerValue}) {
      return `https://forward.fmh.de/rechner/fmh2/schnellcheck.aspx?KB=${upperValue}&VZ=${lowerValue}`;
    },
  },
  giro: {
    title: 'Die besten Giro-Konten für',
    upperLabel: 'Gehaltseingang',
    upperButtons: [
      {
        value: 1500,
        label: 'bis 1.500 Euro',
        active: false, 
      }, {
        value: 3000,
        label: 'bis 3.000 Euro',
        active: true 
      }
    ],  
    lowerLabel: 'Konto-Nutzung',
    lowerButtons: [
      {
        value: 1,
        label: 'Online',
        active: true
      }, {
        value: 3,
        label: 'Filiale',
        active: false
      }
    ],
    url({upperValue, lowerValue}) {
      return `https://girokonto.fmh.de/rechner/fmh2/schnellcheck.aspx?GE=${upperValue}&KF=${lowerValue}`;
    }
  },
  immobilienkredit: {
    title: 'Die besten Immobilienkredit-Zinsen für',
    upperLabel: 'Darlehensbetrag',
    upperButtons: [
      {
        value: 250000,
        label: '250.000 Euro',
        active: false 
      }, {
        value: 400000,
        label: '400.000 Euro',
        active: true 
      }
    ],  
    lowerLabel: 'Zinsbindung',
    lowerButtons: [
      {
        value: '10',
        label: '10 Jahre',
        active: true
      }, {
        value: '20',
        label: '20 Jahre',
        active: false
      }
    ],
    url({upperValue, lowerValue}) {
      //return `https://hypotheken.fmh.de/rechner/fmh2/schnellcheck.aspx?KB=${upperValue}&SZB=${lowerValue}`;
      //return `https://hypotheken.fmh.de/rechner/fmh2/default.aspx?KB=${upperValue}&SZB=${lowerValue}`;
      return `/zinsen-vergleiche/immobilienkredit-vergleich?KB=${upperValue}&SZB=${lowerValue}`;
    }
  },
  hypothek: {
    title: 'Die besten Baugeld-Zinsen für',
    upperLabel: 'Darlehensbetrag',
    upperButtons: [
      {
        value: 250000,
        label: '250.000 Euro',
        active: false 
      }, {
        value: 400000,
        label: '400.000 Euro',
        active: true 
      }
    ],  
    lowerLabel: 'Zinsbindung',
    lowerButtons: [
      {
        value: '10',
        label: '10 Jahre',
        active: true
      }, {
        value: '20',
        label: '20 Jahre',
        active: false
      }
    ],
    url({upperValue, lowerValue}) {
      //return `https://hypotheken.fmh.de/rechner/fmh2/schnellcheck.aspx?KB=${upperValue}&SZB=${lowerValue}`;
      return `https://hypotheken.fmh.de/rechner/fmh2/default.aspx?KB=${upperValue}&SZB=${lowerValue}`;
      //return `https://www.fmh.de/zinsen-vergleiche/immobilienkredit-vergleich?KB=${upperValue}&SZB=${lowerValue}`;
    }
  },
  depotbank: {
    title: 'Die besten Depotbank-Angebote für',
    upperLabel: 'Durchschnittliches Ordervolumen',
    upperButtons: [
      {
        value: 500,
        label: '500 Euro',
        active: true
      }, {
        value: 2000,
        label: '2.000 Euro',
        active: false
      }
    ],
    lowerLabel: 'Anzahl der Order pro Jahr',
    lowerButtons: [
      {
        value: 6,
        label: '6 Stück',
        active: true
      }, {
        value: 10,
        label: '10 Stück',
        active: false
      }
    ],
    url({upperValue, lowerValue}) {
      return `https://wertpapier.fmh.de/rechner/fmh2/schnellcheck.aspx?OV=${upperValue}&AO=${lowerValue}`;
    }
  },
  ansparplan: {
    title: 'Die besten Angebote für Ansparpläne',
    upperLabel: 'Ansparbetrag',
    upperButtons: [
      {
        value: 50,
        label: '50 Euro',
        active: true
      }, {
        value: 100,
        label: '100 Euro',
        active: false
      }
    ],  
    lowerLabel: 'Sparzeit',
    lowerButtons: [
      {
        value: 7,
        label: '7 Jahre',
        active: true
      }, {
        value: 15,
        label: '15 Jahre',
        active: false
      }
    ],
    url({upperValue, lowerValue}) {
      return `https://ansparplan.fmh.de/fmh/schnellcheck.aspx?AB=${upperValue}&AD=${lowerValue}`;
    }
  },
  zuwachssparen: {
    title: 'Die besten Angebote für Zuwachssparen',
    upperLabel: 'Ansparbetrag',
    upperButtons: [
      {
        value: 2500,
        label: '2.500 Euro',
        active: true
      }, {
        value: 10000,
        label: '10.000 Euro',
        active: false
      }
    ],  
    lowerLabel: 'Anlagedauer',
    lowerButtons: [
      {
        value: 5,
        label: '5 Jahre',
        active: true
      }, {
        value: 7,
        label: '7 Jahre',
        active: false
      }
    ],
    url({upperValue, lowerValue}) {
      return `https://zuwachssparen.fmh.de/rechner/fmh2/schnellcheck.aspx?AB=${upperValue}&AD=${lowerValue}`;
    }
  }
  */
};
