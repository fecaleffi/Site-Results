const PASSWORD_HASH = 'af35b82222c41c619025082a51e5228c94f6469cf888b1202a4517fa8f1b335a';

async function sha256(text) {
  const data = new TextEncoder().encode(text);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

async function tryLogin() {
  const input = document.getElementById('password-input').value;
  const hash = await sha256(input);
  if (hash === PASSWORD_HASH) {
    sessionStorage.setItem('authenticated', 'true');
    showApp();
  } else {
    document.getElementById('login-error').hidden = false;
    document.getElementById('password-input').value = '';
    document.getElementById('password-input').focus();
  }
}

function initLogin() {
  if (sessionStorage.getItem('authenticated') === 'true') {
    showApp();
    return;
  }

  document.getElementById('login-btn').addEventListener('click', tryLogin);

  document.getElementById('password-input').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') tryLogin();
  });

  document.getElementById('toggle-password').addEventListener('click', function() {
    const input = document.getElementById('password-input');
    const eyeOn = document.getElementById('eye-icon');
    const eyeOff = document.getElementById('eye-off-icon');
    if (input.type === 'password') {
      input.type = 'text';
      eyeOn.style.display = 'none';
      eyeOff.style.display = 'block';
    } else {
      input.type = 'password';
      eyeOn.style.display = 'block';
      eyeOff.style.display = 'none';
    }
  });
}

function showApp() {
  document.getElementById('login-screen').remove();
  document.getElementById('app-content').hidden = false;
  initApp();
}

let atrasoChartInstance = null;
let filaChartInstance = null;

function formatSeconds(value) {
  const min = Math.floor(value / 60);
  const sec = Math.round(value % 60);
  return `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
}

function populateSelector() {
  const selector = document.getElementById('sim-selector');
  for (const [key, data] of Object.entries(SIMULATION_DATA)) {
    const option = document.createElement('option');
    option.value = key;
    option.textContent = data.label;
    selector.appendChild(option);
  }
}

function hexToRgba(hex, alpha) {
  const h = hex.replace('#', '');
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function renderAtrasoTable(atraso) {
  const table = document.getElementById('atraso-table');

  if (atraso.series) {
    table.innerHTML = `
      <thead><tr><th>Hora</th>${atraso.series.map(s =>
        `<th>${s.name}</th>`).join('')}</tr></thead>
      <tbody>${atraso.rows.map((r, i) =>
        `<tr><td>${r.hora}</td>${atraso.series.map(s =>
          `<td>${s.data[i].display}</td>`).join('')}</tr>`
      ).join('')}</tbody>`;

    document.getElementById('atraso-media').innerHTML =
      atraso.series.map(s =>
        `<span class="media-item" style="color:${s.color}">${s.name}: ${s.media.display}</span>`
      ).join('');
    return;
  }

  table.innerHTML = `
    <thead><tr><th>Hora</th><th>Atraso</th></tr></thead>
    <tbody>${atraso.rows.map(r =>
      `<tr><td>${r.hora}</td><td>${r.display}</td></tr>`
    ).join('')}</tbody>`;

  document.getElementById('atraso-media').textContent =
    `Média: ${atraso.media.display}`;
}

function renderAtrasoChart(atraso, direction) {
  if (atrasoChartInstance) atrasoChartInstance.destroy();

  const ctx = document.getElementById('atraso-chart').getContext('2d');
  const labels = atraso.rows.map(r => r.hora);

  let datasets;
  const chartType = atraso.series ? 'line' : 'bar';
  if (atraso.series) {
    datasets = atraso.series.map(s => ({
      label: s.name,
      data: s.data.map(d => d.seconds),
      backgroundColor: hexToRgba(s.color, 0.15),
      borderColor: s.color,
      borderWidth: 2,
      pointRadius: 3,
      pointBackgroundColor: s.color,
      tension: 0.3,
      fill: false
    }));
  } else {
    datasets = [
      {
        label: `Atraso — ${direction}`,
        data: atraso.rows.map(r => r.seconds),
        backgroundColor: 'rgba(26, 86, 219, 0.7)',
        borderColor: '#1a56db',
        borderWidth: 1,
        borderRadius: 4
      },
      {
        label: `Média (${atraso.media.display})`,
        data: atraso.rows.map(() => atraso.media.seconds),
        type: 'line',
        borderColor: '#f59e0b',
        borderWidth: 2,
        borderDash: [6, 4],
        pointRadius: 0,
        fill: false
      }
    ];
  }

  atrasoChartInstance = new Chart(ctx, {
    type: chartType,
    data: {
      labels,
      datasets
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: 'bottom' },
        tooltip: {
          callbacks: {
            label: function(ctx) {
              return `${ctx.dataset.label}: ${formatSeconds(ctx.raw)}`;
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function(value) { return formatSeconds(value); }
          },
          title: { display: true, text: 'Atraso (mm:ss)' }
        }
      }
    }
  });
}

function fmtMeters(v) {
  return v.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function renderFilaTable(fila) {
  const table = document.getElementById('fila-table');

  if (fila.series) {
    table.innerHTML = `
      <thead><tr><th>Hora</th>${fila.series.map(s =>
        `<th>${s.name}</th>`).join('')}</tr></thead>
      <tbody>${fila.rows.map((r, i) =>
        `<tr><td>${r.hora}</td>${fila.series.map(s =>
          `<td>${fmtMeters(s.data[i])}</td>`).join('')}</tr>`
      ).join('')}</tbody>`;

    document.getElementById('fila-media').innerHTML =
      fila.series.map(s =>
        `<span class="media-item" style="color:${s.color}">${s.name}: ${fmtMeters(s.media)} m</span>`
      ).join('');
    return;
  }

  table.innerHTML = `
    <thead><tr><th>Hora</th><th>Fila Máx (metros)</th></tr></thead>
    <tbody>${fila.rows.map(r =>
      `<tr><td>${r.hora}</td><td>${fmtMeters(r.value)}</td></tr>`
    ).join('')}</tbody>`;

  document.getElementById('fila-media').textContent =
    `Média: ${fmtMeters(fila.media)} m`;
}

function renderFilaChart(fila, direction) {
  if (filaChartInstance) filaChartInstance.destroy();

  const ctx = document.getElementById('fila-chart').getContext('2d');

  let datasets;
  const chartType = fila.series ? 'line' : 'bar';
  if (fila.series) {
    datasets = fila.series.map(s => ({
      label: s.name,
      data: s.data,
      backgroundColor: hexToRgba(s.color, 0.15),
      borderColor: s.color,
      borderWidth: 2,
      pointRadius: 2,
      pointBackgroundColor: s.color,
      tension: 0.3,
      fill: false
    }));
  } else {
    datasets = [
      {
        label: `Fila Máx — ${direction}`,
        data: fila.rows.map(r => r.value),
        backgroundColor: 'rgba(124, 58, 237, 0.7)',
        borderColor: '#7c3aed',
        borderWidth: 1,
        borderRadius: 4
      },
      {
        label: `Média (${fila.media.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} m)`,
        data: fila.rows.map(() => fila.media),
        type: 'line',
        borderColor: '#f59e0b',
        borderWidth: 2,
        borderDash: [6, 4],
        pointRadius: 0,
        fill: false
      }
    ];
  }

  filaChartInstance = new Chart(ctx, {
    type: chartType,
    data: {
      labels: fila.rows.map(r => r.hora),
      datasets
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: 'bottom' },
        tooltip: {
          callbacks: {
            label: function(ctx) {
              return `${ctx.dataset.label}: ${ctx.raw.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} m`;
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function(value) {
              return value.toLocaleString('pt-BR') + ' m';
            }
          },
          title: { display: true, text: 'Fila Máxima (metros)' }
        }
      }
    }
  });
}

function renderSimInfo(info) {
  const card = document.getElementById('sim-info');
  const items = [
    { label: 'Rodovia', value: info.rodovia },
    { label: 'Trecho Interrompido', value: `${info.kmInicial} — ${info.kmFinal}` },
    { label: 'Pista', value: info.pista },
    { label: 'Faixa Interrompida', value: info.faixaInterrompida },
    { label: 'Horário', value: info.horario }
  ];
  card.innerHTML = items.map(i =>
    `<div class="info-item"><span class="info-label">${i.label}</span><span class="info-value">${i.value}</span></div>`
  ).join('');
}

const ROAD_END_KM = 84;
const TRECHO_TOTAL = 8;

function parseKm(str) {
  return parseInt(str.replace(/[^\d]/g, ''), 10);
}

function renderTrechoDiagrama(info) {
  const kmIni = parseKm(info.kmInicial);
  const kmFim = parseKm(info.kmFinal);
  const interrupted = kmFim - kmIni;
  const freeAfter = ROAD_END_KM - kmFim;
  const freeBefore = TRECHO_TOTAL - interrupted - freeAfter;

  const container = document.getElementById('trecho-info');
  let segments = '';

  if (freeBefore > 0) {
    segments += `<div class="trecho-segmento trecho-livre" style="flex:${freeBefore}">
      <span class="trecho-dist">${freeBefore} km</span>
      <span class="trecho-label">Fluxo livre</span>
    </div>`;
  }

  segments += `<div class="trecho-segmento trecho-interrompido" style="flex:${interrupted}">
    <span class="trecho-dist">${interrupted} km</span>
    <span class="trecho-label">Faixa interrompida</span>
  </div>`;

  if (freeAfter > 0) {
    segments += `<div class="trecho-segmento trecho-livre" style="flex:${freeAfter}">
      <span class="trecho-dist">${freeAfter} km</span>
      <span class="trecho-label">Fluxo livre</span>
    </div>`;
  }

  container.innerHTML = `
    <p class="trecho-titulo">O atraso no tempo de viagem é medido para um trecho de <strong>${TRECHO_TOTAL} km</strong></p>
    <div class="trecho-diagrama">${segments}</div>
    <div class="trecho-total"><span>Km ${kmIni - freeBefore} ao Km ${ROAD_END_KM} — Total: ${TRECHO_TOTAL} km</span></div>`;
}

function render(simKey) {
  const data = SIMULATION_DATA[simKey];
  renderSimInfo(data.info);
  renderAtrasoTable(data.atraso);
  renderAtrasoChart(data.atraso, data.direction);
  renderFilaTable(data.fila);
  renderFilaChart(data.fila, data.direction);
}

function initApp() {
  populateSelector();
  const selector = document.getElementById('sim-selector');
  selector.addEventListener('change', function() {
    render(this.value);
  });
  render(selector.value);
}

document.addEventListener('DOMContentLoaded', initLogin);
