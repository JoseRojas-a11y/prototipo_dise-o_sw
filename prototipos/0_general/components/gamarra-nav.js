// GamarraChain - Componente de Barra de Navegación Inferior (Bottom Nav)
import { ROUTES, navigateTo } from '../layouts/navigation.js';

class GamarraNav extends HTMLElement {
  connectedCallback() {
    const mode = this.getAttribute('mode') || 'cliente'; // 'cliente' | 'vendedor'
    const active = this.getAttribute('active') || '';

    if (mode === 'cliente') {
      const items = [
        { id: 'explorar', label: 'Explorar', icon: 'storefront' },
        { id: 'mapa-gps', label: 'Mapa GPS', icon: 'near_me' },
        { id: 'closet', label: 'Closet', icon: 'checkroom' }
      ];

      this.innerHTML = `
        <nav class="app-bottom-nav pb-safe">
          <div class="flex items-center justify-around h-16 px-4">
            ${items.map(item => {
              const isActive = active === item.id;
              return `
                <a href="#" data-nav-target="${item.id}" class="flex flex-col items-center justify-center gap-1 w-20 h-12 transition-colors ${isActive ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-primary'}">
                  <span class="material-symbols-outlined text-[24px]" style="${isActive ? "font-variation-settings: 'FILL' 1;" : ''}">${item.icon}</span>
                  <span class="text-[11px]">${item.label}</span>
                </a>
              `;
            }).join('')}
          </div>
        </nav>
      `;
    } else {
      // Modo Vendedor (Merchant Hub)
      const items = [
        { id: 'inicio', label: 'Inicio', icon: 'storefront' },
        { id: 'vitrina', label: 'Vitrina', icon: 'grid_view' },
        { id: 'publicidad', label: 'Publicidad', icon: 'campaign' },
        { id: 'suscripcion', label: 'Suscripción', icon: 'workspace_premium' }
      ];

      this.innerHTML = `
        <nav class="app-bottom-nav pb-safe">
          <div class="flex items-center justify-around h-16 px-2">
            ${items.map(item => {
              const isActive = active === item.id;
              return `
                <a href="#" data-nav-target="${item.id}" class="flex flex-col items-center justify-center min-w-[64px] h-12 gap-1 transition-colors ${isActive ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-primary'}">
                  <span class="material-symbols-outlined text-[22px]" style="${isActive ? "font-variation-settings: 'FILL' 1;" : ''}">${item.icon}</span>
                  <span class="text-[11px]">${item.label}</span>
                </a>
              `;
            }).join('')}
          </div>
        </nav>
      `;
    }

    // Eventos de clic
    this.querySelectorAll('[data-nav-target]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = link.getAttribute('data-nav-target');
        navigateTo(target);
      });
    });
  }
}

customElements.define('gamarra-nav', GamarraNav);
