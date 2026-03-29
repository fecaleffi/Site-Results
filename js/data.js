const SIMULATION_DATA = {
  sim3: {
    label: "Simula\u00e7\u00e3o n\u00ba 3",
    direction: "Sentido Leste",
    info: {
      rodovia: "BR-277",
      kmInicial: "Km 76",
      kmFinal: "Km 78",
      pista: "Leste",
      faixaInterrompida: "Faixa 1",
      horario: "7h \u00e0s 17h"
    },
    atraso: {
      rows: [
        { hora: "7h",  display: "00:04:44", seconds: 284 },
        { hora: "8h",  display: "00:09:14", seconds: 554 },
        { hora: "9h",  display: "00:12:19", seconds: 739 },
        { hora: "10h", display: "00:11:59", seconds: 719 },
        { hora: "11h", display: "00:08:20", seconds: 500 },
        { hora: "12h", display: "00:10:14", seconds: 614 },
        { hora: "13h", display: "00:12:56", seconds: 776 },
        { hora: "14h", display: "00:14:30", seconds: 870 },
        { hora: "15h", display: "00:13:47", seconds: 827 },
        { hora: "16h", display: "00:13:59", seconds: 839 },
        { hora: "17h", display: "00:14:37", seconds: 877 }
      ],
      media: { display: "00:11:19", seconds: 679 }
    },
    fila: {
      rows: [
        { hora: "7h - 8h",   value: 2628.84 },
        { hora: "8h - 9h",   value: 3862.10 },
        { hora: "9h - 10h",  value: 3556.83 },
        { hora: "10h - 11h", value: 3520.70 },
        { hora: "11h - 12h", value: 2937.03 },
        { hora: "12h - 13h", value: 3818.96 },
        { hora: "13h - 14h", value: 4374.66 },
        { hora: "14h - 15h", value: 4376.29 },
        { hora: "15h - 16h", value: 4376.90 },
        { hora: "16h - 17h", value: 4377.00 }
      ],
      media: 3782.93
    }
  },
  sim4: {
    label: "Simula\u00e7\u00e3o n\u00ba 4",
    direction: "Sentido Oeste",
    info: {
      rodovia: "BR-277",
      kmInicial: "Km 76",
      kmFinal: "Km 78",
      pista: "Oeste",
      faixaInterrompida: "Faixa 1",
      horario: "9h \u00e0s 18h"
    },
    atraso: {
      rows: [
        { hora: "9h",  display: "00:06:52", seconds: 412 },
        { hora: "10h", display: "00:10:19", seconds: 619 },
        { hora: "11h", display: "00:09:24", seconds: 564 },
        { hora: "12h", display: "00:10:10", seconds: 610 },
        { hora: "13h", display: "00:10:41", seconds: 641 },
        { hora: "14h", display: "00:10:24", seconds: 624 },
        { hora: "15h", display: "00:10:12", seconds: 612 },
        { hora: "16h", display: "00:11:20", seconds: 680 },
        { hora: "17h", display: "00:10:33", seconds: 633 },
        { hora: "18h", display: "00:10:49", seconds: 649 }
      ],
      media: { display: "00:10:05", seconds: 605 }
    },
    fila: {
      rows: [
        { hora: "9h - 10h",  value: 1588.41 },
        { hora: "10h - 11h", value: 1588.42 },
        { hora: "11h - 12h", value: 1588.38 },
        { hora: "12h - 13h", value: 1588.40 },
        { hora: "13h - 14h", value: 1700.33 },
        { hora: "14h - 15h", value: 1588.35 },
        { hora: "15h - 16h", value: 1588.36 },
        { hora: "16h - 17h", value: 1588.39 },
        { hora: "17h - 18h", value: 1588.42 }
      ],
      media: 1600.83
    }
  },
  sim5: {
    label: "Simula\u00e7\u00e3o n\u00ba 5",
    direction: "Sentido Leste",
    info: {
      rodovia: "BR-277",
      kmInicial: "Km 80",
      kmFinal: "Km 82",
      pista: "Leste",
      faixaInterrompida: "Faixa 2",
      horario: "7h \u00e0s 17h"
    },
    atraso: {
      rows: [
        { hora: "7h",  display: "00:06:06", seconds: 366 },
        { hora: "8h",  display: "00:10:04", seconds: 604 },
        { hora: "9h",  display: "00:10:33", seconds: 633 },
        { hora: "10h", display: "00:11:00", seconds: 660 },
        { hora: "11h", display: "00:10:06", seconds: 606 },
        { hora: "12h", display: "00:10:16", seconds: 616 },
        { hora: "13h", display: "00:10:33", seconds: 633 },
        { hora: "14h", display: "00:10:35", seconds: 635 },
        { hora: "15h", display: "00:10:51", seconds: 651 },
        { hora: "16h", display: "00:10:08", seconds: 608 },
        { hora: "17h", display: "00:08:53", seconds: 533 }
      ],
      media: { display: "00:10:03", seconds: 603 }
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
    label: "Simula\u00e7\u00e3o n\u00ba 6",
    direction: "Sentido Oeste",
    info: {
      rodovia: "BR-277",
      kmInicial: "Km 80",
      kmFinal: "Km 82",
      pista: "Oeste",
      faixaInterrompida: "Faixa 2",
      horario: "9h \u00e0s 18h"
    },
    atraso: {
      rows: [
        { hora: "9h",  display: "00:03:05", seconds: 185 },
        { hora: "10h", display: "00:09:42", seconds: 582 },
        { hora: "11h", display: "00:17:39", seconds: 1059 },
        { hora: "12h", display: "00:23:13", seconds: 1393 },
        { hora: "13h", display: "00:23:40", seconds: 1420 },
        { hora: "14h", display: "00:21:05", seconds: 1265 },
        { hora: "15h", display: "00:23:35", seconds: 1415 },
        { hora: "16h", display: "00:23:52", seconds: 1432 },
        { hora: "17h", display: "00:23:53", seconds: 1433 },
        { hora: "18h", display: "00:19:48", seconds: 1188 }
      ],
      media: { display: "00:18:48", seconds: 1128 }
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
