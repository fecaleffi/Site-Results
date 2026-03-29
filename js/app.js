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

function renderAtrasoTable(atraso) {
  const table = document.getElementById('atraso-table');
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
  const values = atraso.rows.map(r => r.seconds);
  const mediaLine = atraso.rows.map(() => atraso.media.seconds);

  atrasoChartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels,
      datasets: [
        {
          label: `Atraso — ${direction}`,
          data: values,
          backgroundColor: 'rgba(26, 86, 219, 0.7)',
          borderColor: '#1a56db',
          borderWidth: 1,
          borderRadius: 4
        },
        {
          label: `Média (${atraso.media.display})`,
          data: mediaLine,
          type: 'line',
          borderColor: '#f59e0b',
          borderWidth: 2,
          borderDash: [6, 4],
          pointRadius: 0,
          fill: false
        }
      ]
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

function renderFilaTable(fila) {
  const table = document.getElementById('fila-table');
  table.innerHTML = `
    <thead><tr><th>Hora</th><th>Fila Máx (metros)</th></tr></thead>
    <tbody>${fila.rows.map(r =>
      `<tr><td>${r.hora}</td><td>${r.value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td></tr>`
    ).join('')}</tbody>`;

  document.getElementById('fila-media').textContent =
    `Média: ${fila.media.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} m`;
}

function renderFilaChart(fila, direction) {
  if (filaChartInstance) filaChartInstance.destroy();

  const ctx = document.getElementById('fila-chart').getContext('2d');

  filaChartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: fila.rows.map(r => r.hora),
      datasets: [
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
      ]
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
