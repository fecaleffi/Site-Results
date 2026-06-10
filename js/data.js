const SIMULATION_DATA = {
  sim1: {
    label: "Simulação nº 1",
    direction: "Sentido Leste",
    info: {
      rodovia: "BR-277 (Dia 13/04/26)",
      kmInicial: "Km 74,5",
      kmFinal: "Km 75",
      pista: "Leste",
      faixaInterrompida: "Faixa 1",
      horario: "7h às 17h"
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
        { hora: "7h - 8h",   value: 588 },
        { hora: "8h - 9h",   value: 501 },
        { hora: "9h - 10h",  value: 508 },
        { hora: "10h - 11h", value: 531 },
        { hora: "11h - 12h", value: 532 },
        { hora: "12h - 13h", value: 710 },
        { hora: "13h - 14h", value: 755 },
        { hora: "14h - 15h", value: 805 },
        { hora: "15h - 16h", value: 811 },
        { hora: "16h - 17h", value: 756 }
      ],
      media: 651
    }
  },

  sim2: {
    label: "Simulação nº 2",
    direction: "Sentido Oeste",
    info: {
      rodovia: "BR-277",
      kmInicial: "Km 42",
      kmFinal: "Km 42,150",
      pista: "Leste",
      faixaInterrompida: "Faixa 1",
      horario: "8h às 18h"
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

  sim3: {
    label: "Simulação nº 3",
    direction: "Comparação por tempo de bloqueio",
    info: {
      rodovia: "BR-277",
      kmInicial: "Km 71",
      kmFinal: "Km 71",
      pista: "Leste",
      faixaInterrompida: "Bloqueio Total",
      horario: "10h"
    },
    atraso: {
      rows: [
        { hora: "09:00-09:15" }, { hora: "09:15-09:30" }, { hora: "09:30-09:45" }, { hora: "09:45-10:00" }, { hora: "10:00-10:15" }, { hora: "10:15-10:30" }, { hora: "10:30-10:45" }, { hora: "10:45-11:00" }
      ],
      series: [
        {
          name: "Bloqueio 10 min",
          color: "#1a56db",
          data: [
            { display: "00:00:24", seconds: 24 }, // 09:00-09:15
            { display: "00:00:29", seconds: 29 }, // 09:15-09:30
            { display: "00:00:33", seconds: 33 }, // 09:30-09:45
            { display: "00:00:27", seconds: 27 }, // 09:45-10:00
            { display: "00:08:42", seconds: 522 }, // 10:00-10:15
            { display: "00:03:06", seconds: 186 }, // 10:15-10:30
            { display: "00:00:35", seconds: 35 }, // 10:30-10:45
            { display: "00:00:32", seconds: 32 } // 10:45-11:00
          ],
          media: { display: "00:01:51", seconds: 111 }
        },
        {
          name: "Bloqueio 15 min",
          color: "#059669",
          data: [
            { display: "00:00:24", seconds: 24 }, // 09:00-09:15
            { display: "00:00:29", seconds: 29 }, // 09:15-09:30
            { display: "00:00:33", seconds: 33 }, // 09:30-09:45
            { display: "00:00:27", seconds: 27 }, // 09:45-10:00
            { display: "00:10:27", seconds: 627 }, // 10:00-10:15
            { display: "00:02:27", seconds: 147 }, // 10:15-10:30
            { display: "00:00:32", seconds: 32 }, // 10:30-10:45
            { display: "00:00:31", seconds: 31 } // 10:45-11:00
          ],
          media: { display: "00:01:59", seconds: 119 }
        },
        {
          name: "Bloqueio 30 min",
          color: "#7c3aed",
          data: [
            { display: "00:00:24", seconds: 24 }, // 09:00-09:15
            { display: "00:00:29", seconds: 29 }, // 09:15-09:30
            { display: "00:00:33", seconds: 33 }, // 09:30-09:45
            { display: "00:00:27", seconds: 27 }, // 09:45-10:00
            { display: "00:25:28", seconds: 1528 }, // 10:00-10:15
            { display: "00:17:18", seconds: 1038 }, // 10:15-10:30
            { display: "00:08:59", seconds: 539 }, // 10:30-10:45
            { display: "00:02:15", seconds: 135 } // 10:45-11:00
          ],
          media: { display: "00:06:45", seconds: 405 }
        }
      ]
    },
    fila: {
      rows: [
        { hora: "09:05" }, { hora: "09:10" }, { hora: "09:15" }, { hora: "09:20" }, { hora: "09:25" }, { hora: "09:30" },
        { hora: "09:35" }, { hora: "09:40" }, { hora: "09:45" }, { hora: "09:50" }, { hora: "09:55" }, { hora: "10:00" },
        { hora: "10:05" }, { hora: "10:10" }, { hora: "10:15" }, { hora: "10:20" }, { hora: "10:25" }, { hora: "10:30" },
        { hora: "10:35" }, { hora: "10:40" }, { hora: "10:45" }, { hora: "10:50" }, { hora: "10:55" }, { hora: "11:00" },
        { hora: "11:05" }, { hora: "11:10" }, { hora: "11:15" }, { hora: "11:20" }, { hora: "11:25" }, { hora: "11:30" }
      ],
      series: [
        {
          name: "Bloqueio 10 min",
          color: "#1a56db",
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 662.6, 1330.48, 2061.62, 2549.85, 77.53, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          Máxima: 2549
        },
        {
          name: "Bloqueio 15 min",
          color: "#059669",
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 662.6, 1330.48, 2061.62, 2834.91, 3502.68, 4035.12, 54.23, 73.14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          Máxima: 4035
        },
        {
          name: "Bloqueio 30 min",
          color: "#7c3aed",
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 662.6, 1330.48, 2061.62, 2834.91, 3503.19, 4418.58, 5134.49, 6138.96, 6966.88, 7685.94, 8524.2, 9249.09, 9314.04, 8079.79, 7291.29, 7175.68, 7176.01, 7060.84],
          Máxima: 9314
        }
      ]
    }
  }

};
