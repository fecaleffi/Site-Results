const SIMULATION_DATA = {
  sim5: {
    label: "Simulação n\u00ba 5",
    direction: "Sentido Leste",
    info: {
      rodovia: "BR-277",
      kmInicial: "Km 80",
      kmFinal: "Km 82",
      pista: "Leste",
      faixaInterrompida: "Faixa 2",
      horario: "7h às 17h"
    },
    atraso: {
      rows: [
        { hora: "7h",  display: "00:05:45", seconds: 345 },
        { hora: "8h",  display: "00:08:58", seconds: 538 },
        { hora: "9h",  display: "00:09:28", seconds: 568 },
        { hora: "10h", display: "00:09:52", seconds: 592 },
        { hora: "11h", display: "00:08:49", seconds: 529 },
        { hora: "12h", display: "00:08:55", seconds: 535 },
        { hora: "13h", display: "00:09:26", seconds: 566 },
        { hora: "14h", display: "00:09:26", seconds: 566 },
        { hora: "15h", display: "00:09:35", seconds: 575 },
        { hora: "16h", display: "00:09:03", seconds: 543 },
        { hora: "17h", display: "00:07:28", seconds: 448 }
      ],
      media: { display: "00:08:57", seconds: 537 }
    },
    fila: {
      rows: [
        { hora: "7h - 8h",   value: 1845.00 },
        { hora: "8h - 9h",   value: 1847.33 },
        { hora: "9h - 10h",  value: 1847.37 },
        { hora: "10h - 11h", value: 1847.37 },
        { hora: "11h - 12h", value: 1847.39 },
        { hora: "12h - 13h", value: 1847.32 },
        { hora: "13h - 14h", value: 1847.34 },
        { hora: "14h - 15h", value: 1847.37 },
        { hora: "15h - 16h", value: 1847.38 },
        { hora: "16h - 17h", value: 1847.39 }
      ],
      media: 1847.12
    }
  },
  sim6: {
    label: "Simulação n\u00ba 6",
    direction: "Sentido Oeste",
    info: {
      rodovia: "BR-277",
      kmInicial: "Km 80",
      kmFinal: "Km 82",
      pista: "Oeste",
      faixaInterrompida: "Faixa 2",
      horario: "9h às 18h"
    },
    atraso: {
      rows: [
        { hora: "9h",  display: "00:03:10", seconds: 190 },
        { hora: "10h", display: "00:09:57", seconds: 597 },
        { hora: "11h", display: "00:14:22", seconds: 862 },
        { hora: "12h", display: "00:15:01", seconds: 901 },
        { hora: "13h", display: "00:14:43", seconds: 883 },
        { hora: "14h", display: "00:14:06", seconds: 846 },
        { hora: "15h", display: "00:14:12", seconds: 852 },
        { hora: "16h", display: "00:15:13", seconds: 913 },
        { hora: "17h", display: "00:14:44", seconds: 884 },
        { hora: "18h", display: "00:13:23", seconds: 803 }
      ],
      media: { display: "00:12:54", seconds: 774 }
    },
    fila: {
      rows: [
        { hora: "9h - 10h",  value: 1738.72 },
        { hora: "10h - 11h", value: 3542.58 },
        { hora: "11h - 12h", value: 4788.61 },
        { hora: "12h - 13h", value: 4790.11 },
        { hora: "13h - 14h", value: 4790.19 },
        { hora: "14h - 15h", value: 4789.84 },
        { hora: "15h - 16h", value: 4790.20 },
        { hora: "16h - 17h", value: 4790.11 },
        { hora: "17h - 18h", value: 4789.94 }
      ],
      media: 4312.26
    }
  }
};
