const SIMULATION_DATA = {
  sim1: {
    label: "Simula\u00e7\u00e3o n\u00ba 1",
    direction: "Sentido Leste",
    info: {
      rodovia: "BR-277 (Dia 13/04/26)",
      kmInicial: "Km 74",
      kmFinal: "Km 74,5",
      pista: "Leste",
      faixaInterrompida: "Faixa 1",
      horario: "7h \u00e0s 17h"
    },
    atraso: {
      rows: [
        { hora: "7h",  display: "00:02:25", seconds: 145 },
        { hora: "8h",  display: "00:02:33", seconds: 153 },
        { hora: "9h",  display: "00:02:05", seconds: 125 },
        { hora: "10h", display: "00:02:27", seconds: 147 },
        { hora: "11h", display: "00:02:23", seconds: 143 },
        { hora: "12h", display: "00:02:33", seconds: 153 },
        { hora: "13h", display: "00:01:59", seconds: 119 },
        { hora: "14h", display: "00:01:58", seconds: 118 },
        { hora: "15h", display: "00:02:10", seconds: 130 },
        { hora: "16h", display: "00:02:36", seconds: 156 },
        { hora: "17h", display: "00:02:07", seconds: 127 }
      ],
      media: { display: "00:02:17", seconds: 137 }
    },
    fila: {
      rows: [
        { hora: "7h - 8h",   value: 188 },
        { hora: "8h - 9h",   value: 201 },
        { hora: "9h - 10h",  value: 508 },
        { hora: "10h - 11h", value: 531 },
        { hora: "11h - 12h", value: 532 },
        { hora: "12h - 13h", value: 710 },
        { hora: "13h - 14h", value: 755 },
        { hora: "14h - 15h", value: 805 },
        { hora: "15h - 16h", value: 811 },
        { hora: "16h - 17h", value: 756 }
      ],
      media: 580
    }
  },

  sim2: {
    label: "Simula\u00e7\u00e3o n\u00ba 2",
    direction: "Sentido Oeste",
    info: {
      rodovia: "BR-277",
      kmInicial: "Km 42",
      kmFinal: "Km 42,150",
      pista: "Leste",
      faixaInterrompida: "Faixa 1",
      horario: "8h \u00e0s 18h"
    },
    atraso: {
      rows: [
        { hora: "8h",  display: "00:08:46", seconds: 526 },
        { hora: "9h",  display: "00:09:06", seconds: 546 },
        { hora: "10h", display: "00:09:04", seconds: 544 },
        { hora: "11h", display: "00:10:48", seconds: 648 },
        { hora: "12h", display: "00:11:07", seconds: 667 },
        { hora: "13h", display: "00:10:36", seconds: 636 },
        { hora: "14h", display: "00:10:52", seconds: 652 },
        { hora: "15h", display: "00:10:32", seconds: 632 },
        { hora: "16h", display: "00:10:50", seconds: 650 },
        { hora: "17h", display: "00:10:07", seconds: 607 },
        { hora: "18h", display: "00:09:57", seconds: 597 }
      ],
      media: { display: "00:10:10", seconds: 610 }
    },
    fila: {
      rows: [
        { hora: "8h - 9h",  value: 1883 },
        { hora: "9h - 10h",  value: 1923 },
        { hora: "10h - 11h", value: 2090 },
        { hora: "11h - 12h", value: 2118 },
        { hora: "12h - 13h", value: 2041 },
        { hora: "13h - 14h", value: 1932 },
        { hora: "14h - 15h", value: 1956 },
        { hora: "15h - 16h", value: 1992 },
        { hora: "16h - 17h", value: 1976 },
        { hora: "17h - 18h", value: 1931 }
      ],
      media: 1984
    }
  },


  
};
