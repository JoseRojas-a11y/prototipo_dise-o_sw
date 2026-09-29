// GamarraChain - Componente de Encabezado Superior (Header)
import { ROUTES, navigateTo } from '../layouts/navigation.js';

class GamarraHeader extends HTMLElement {
  connectedCallback() {
    const role = this.getAttribute('role') || 'cliente'; // 'cliente' | 'vendedor' | 'analytics'
    const title = this.getAttribute('title') || 'GamarraChain';
    const subtitle = this.getAttribute('subtitle') || (role === 'cliente' ? 'Explorar' : 'Comercio');
    const back = this.getAttribute('back'); // target route or 'true'

    const isCliente = role === 'cliente';
    const isAnalytics = role === 'analytics';

    if (isAnalytics) {
      this.innerHTML = `
        <header class="dashboard-header pt-safe">
          <div class="h-16 px-6 flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="w-9 h-9 rounded-lg bg-primary text-on-primary flex items-center justify-center font-bold text-sm shadow-sm">
                GC
              </div>
              <div class="flex flex-col">
                <span class="text-xs font-bold text-secondary uppercase tracking-wider">GamarraChain</span>
                <h1 class="text-base font-bold text-primary leading-tight">Spatial Analytics B2B</h1>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <span class="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800">
                <span class="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span> Sensores IoT en vivo
              </span>
              <button id="btn-switch-hub" class="h-9 px-3 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary text-xs font-semibold flex items-center gap-1 transition-colors" title="Volver al Panel de Comerciante">
                <span class="material-symbols-outlined text-[18px]">storefront</span>
                <span class="hidden sm:inline">Panel Puesto</span>
              </button>
            </div>
          </div>
        </header>
      `;

      this.querySelector('#btn-switch-hub')?.addEventListener('click', () => {
        navigateTo('inicio');
      });
      return;
    }

    // Mobile Header (Cliente o Vendedor)
    this.innerHTML = `
      <header class="app-header pt-safe">
        <div class="h-16 px-4 flex items-center justify-between">
          <div class="flex items-center gap-2.5">
            ${back ? `
              <button id="header-back-btn" class="w-10 h-10 -ml-1 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary active:bg-surface-container transition-colors" aria-label="Volver">
                <span class="material-symbols-outlined text-[22px]">arrow_back</span>
              </button>
            ` : `
              <div class="w-9 h-9 rounded-lg ${isCliente ? 'bg-primary-container text-secondary' : 'bg-primary text-on-primary'} flex items-center justify-center shadow-sm">
                <span class="material-symbols-outlined text-[20px]">${isCliente ? 'token' : 'storefront'}</span>
              </div>
            `}
            <div class="flex flex-col">
              <span class="text-[11px] font-bold uppercase tracking-wider text-secondary leading-none">GamarraChain</span>
              <h1 class="font-headline font-bold text-base text-primary tracking-tight leading-tight">${title}</h1>
            </div>
          </div>

          <div class="flex items-center gap-1">
            <button aria-label="Notificaciones" class="relative w-10 h-10 flex items-center justify-center rounded-full text-on-surface-variant hover:text-primary active:bg-surface-container transition-colors">
              <span class="material-symbols-outlined text-[22px]">notifications</span>
              <span class="absolute top-2 right-2 w-2 h-2 bg-secondary rounded-full ring-2 ring-surface"></span>
            </button>
            
            <!-- Botón Conmutador de Perfil y Modo -->
            <button id="header-profile-btn" aria-label="Perfil y Modo" class="w-9 h-9 rounded-full ${isCliente ? 'bg-primary text-on-primary' : 'bg-secondary text-on-secondary'} flex items-center justify-center shadow-sm active:scale-95 transition-all" title="${isCliente ? 'Ir a Modo Vendedor (Merchant Hub)' : 'Ir a Modo Cliente (Explorar)'}">
              <span class="material-symbols-outlined text-[18px]">${isCliente ? 'person' : 'store'}</span>
            </button>
          </div>
        </div>
      </header>
    `;

    // Eventos
    const backBtn = this.querySelector('#header-back-btn');
    if (backBtn) {
      backBtn.addEventListener('click', () => {
        if (back !== 'true') {
          navigateTo(back);
        } else {
          window.history.back();
        }
      });
    }

    const profileBtn = this.querySelector('#header-profile-btn');
    if (profileBtn) {
      profileBtn.addEventListener('click', () => {
        navigateTo('perfil');
      });
    }
  }
}

customElements.define('gamarra-header', GamarraHeader);
