// GamarraChain - Componente de Pestañas de Analítica Espacial (Spatial Analytics)
import { ROUTES, navigateTo } from '../layouts/navigation.js';

class AnalyticsTabs extends HTMLElement {
  connectedCallback() {
    const active = this.getAttribute('active') || 'mapa-de-calor';

    const tabs = [
      { id: 'mapa-de-calor', label: 'Mapa de Calor', icon: 'local_fire_department' },
      { id: 'ocupacion-de-stands', label: 'Ocupación de Stands', icon: 'storefront' },
      { id: 'tendencias-de-trafico', label: 'Tendencias y Demanda', icon: 'trending_up' },
      { id: 'exportacion-analytics', label: 'Exportación Ejecutiva', icon: 'file_download' }
    ];

    this.innerHTML = `
      <div class="w-full bg-surface-container-low border-b border-outline-variant/30 px-6 py-2">
        <div class="flex items-center gap-2 overflow-x-auto no-scrollbar">
          ${tabs.map(tab => {
            const isActive = active === tab.id;
            return `
              <button data-tab-id="${tab.id}" class="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold shrink-0 transition-all ${isActive ? 'bg-primary text-on-primary shadow-sm' : 'bg-surface-container text-on-surface-variant hover:text-primary hover:bg-surface-container-high'}">
                <span class="material-symbols-outlined text-[18px]">${tab.icon}</span>
                <span>${tab.label}</span>
              </button>
            `;
          }).join('')}
        </div>
      </div>
    `;

    this.querySelectorAll('[data-tab-id]').forEach(btn => {
      btn.addEventListener('click', () => {
        const tabId = btn.getAttribute('data-tab-id');
        navigateTo(tabId);
      });
    });
  }
}

customElements.define('analytics-tabs', AnalyticsTabs);
