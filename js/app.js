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
    option.textContent = `${data.label} — ${data.direction}`;
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
}

function renderFilaChart(fila, direction) {
  if (filaChartInstance) filaChartInstance.destroy();

  const ctx = document.getElementById('fila-chart').getContext('2d');

  filaChartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: fila.rows.map(r => r.hora),
      datasets: [{
        label: `Fila Máx — ${direction}`,
        data: fila.rows.map(r => r.value),
        backgroundColor: 'rgba(224, 90, 0, 0.7)',
        borderColor: '#e05a00',
        borderWidth: 1,
        borderRadius: 4
      }]
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

function render(simKey) {
  const data = SIMULATION_DATA[simKey];
  renderAtrasoTable(data.atraso);
  renderAtrasoChart(data.atraso, data.direction);
  renderFilaTable(data.fila);
  renderFilaChart(data.fila, data.direction);
}

document.addEventListener('DOMContentLoaded', function() {
  populateSelector();
  const selector = document.getElementById('sim-selector');
  selector.addEventListener('change', function() {
    render(this.value);
  });
  render(selector.value);
});
