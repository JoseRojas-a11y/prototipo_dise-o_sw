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
        <div class="h-16 px-4 flex items-center justify-between relative">
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
            <button id="header-notif-btn" aria-label="Notificaciones" class="relative w-10 h-10 flex items-center justify-center rounded-full text-on-surface-variant hover:text-primary active:bg-surface-container transition-colors" title="Ver Notificaciones">
              <span class="material-symbols-outlined text-[22px]">notifications</span>
              <span class="absolute top-2 right-2 w-2 h-2 bg-secondary rounded-full ring-2 ring-surface"></span>
            </button>
            
            <!-- Botón Disparador del Menú Desplegable de Perfil -->
            <div class="relative">
              <button id="header-profile-btn" aria-expanded="false" aria-label="Menú de Perfil y Rol" class="w-9 h-9 rounded-full ${isCliente ? 'bg-primary text-on-primary' : 'bg-secondary text-on-secondary'} flex items-center justify-center shadow-sm active:scale-95 transition-all focus:outline-none ring-2 ring-white/60 hover:ring-secondary cursor-pointer" title="Menú de Usuario y Cambio de Rol">
                <span class="material-symbols-outlined text-[18px]">${isCliente ? 'person' : 'store'}</span>
              </button>

              <!-- COMPONENTE DESPLEGABLE (DROPDOWN) FLOTANTE -->
              <div id="header-profile-dropdown" class="hidden absolute right-0 top-12 w-72 bg-surface-container-lowest rounded-2xl shadow-2xl border border-outline-variant/30 py-3 px-3 z-50 text-on-surface transition-all transform origin-top-right animate-[fadeIn_0.15s_ease-out]">
                
                <!-- Encabezado de Usuario Activo -->
                <div class="flex items-center gap-3 pb-3 border-b border-outline-variant/20 px-1">
                  <div class="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shadow">
                    JR
                  </div>
                  <div class="flex flex-col min-w-0 flex-1">
                    <div class="flex items-center gap-1">
                      <span class="font-headline font-bold text-xs text-primary truncate">José Martín Rojas</span>
                      <span class="material-symbols-outlined text-secondary text-[14px]">verified</span>
                    </div>
                    <span class="text-[10px] text-on-surface-variant truncate">jose.rojas@gamarrachain.pe</span>
                    <span class="mt-0.5 inline-flex items-center gap-1 text-[9px] font-bold text-secondary bg-secondary/10 px-2 py-0.2 rounded-full w-fit">
                      ${isCliente ? 'Modo Comprador / Validador' : 'Modo Comerciante (Damero A)'}
                    </span>
                  </div>
                </div>

                <!-- Selector de Roles / Conmutador Rápido -->
                <div class="pt-2 pb-1">
                  <span class="text-[10px] uppercase font-bold tracking-wider text-on-surface-variant px-1 mb-1 block">Cambiar Rol / Vista</span>
                  
                  <div class="flex flex-col gap-1">
                    <!-- Rol 1: Comprador -->
                    <button type="button" data-dropdown-role="cliente" class="w-full flex items-center justify-between p-2 rounded-xl text-left transition-colors ${isCliente ? 'bg-secondary/10 text-secondary font-bold' : 'hover:bg-surface-container-high text-on-surface'}">
                      <div class="flex items-center gap-2">
                        <span class="material-symbols-outlined text-[18px]">person</span>
                        <div class="flex flex-col">
                          <span class="text-xs">Comprador & Validador</span>
                          <span class="text-[9px] text-on-surface-variant font-normal">Explorar, cupones y GPS 3D</span>
                        </div>
                      </div>
                      ${isCliente ? '<span class="material-symbols-outlined text-[16px] text-secondary">check</span>' : ''}
                    </button>

                    <!-- Rol 2: Comerciante -->
                    <button type="button" data-dropdown-role="vendedor" class="w-full flex items-center justify-between p-2 rounded-xl text-left transition-colors ${!isCliente && role === 'vendedor' ? 'bg-secondary/10 text-secondary font-bold' : 'hover:bg-surface-container-high text-on-surface'}">
                      <div class="flex items-center gap-2">
                        <span class="material-symbols-outlined text-[18px]">storefront</span>
                        <div class="flex flex-col">
                          <span class="text-xs">Comerciante de Gamarra</span>
                          <span class="text-[9px] text-on-surface-variant font-normal">Stand B-204 · Métricas & Ventas</span>
                        </div>
                      </div>
                      ${!isCliente && role === 'vendedor' ? '<span class="material-symbols-outlined text-[16px] text-secondary">check</span>' : ''}
                    </button>

                    <!-- Rol 3: Administrador del Sistema -->
                    <button type="button" data-dropdown-role="admin" class="w-full flex items-center justify-between p-2 rounded-xl text-left hover:bg-primary/5 text-primary transition-colors">
                      <div class="flex items-center gap-2">
                        <span class="material-symbols-outlined text-[18px]">admin_panel_settings</span>
                        <div class="flex flex-col">
                          <span class="text-xs font-semibold">Administrador General</span>
                          <span class="text-[9px] text-on-surface-variant font-normal">Gobernanza central (Módulo 7)</span>
                        </div>
                      </div>
                      <span class="material-symbols-outlined text-[14px] text-on-surface-variant">arrow_forward</span>
                    </button>
                  </div>
                </div>

                <!-- Enlaces rápidos y opciones -->
                <div class="pt-2 mt-1 border-t border-outline-variant/20 flex flex-col gap-0.5">
                  <button type="button" id="dropdown-goto-profile" class="w-full flex items-center gap-2.5 px-2 py-1.5 rounded-lg text-xs text-on-surface hover:bg-surface-container-high transition-colors">
                    <span class="material-symbols-outlined text-[17px] text-on-surface-variant">account_circle</span>
                    <span>Ver Perfil Completo & Ajustes</span>
                  </button>
                  <button type="button" id="dropdown-logout" class="w-full flex items-center gap-2.5 px-2 py-1.5 rounded-lg text-xs text-error hover:bg-error-container/30 transition-colors font-medium">
                    <span class="material-symbols-outlined text-[17px]">logout</span>
                    <span>Cerrar Sesión</span>
                  </button>
                </div>

              </div>
            </div>
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

    const notifBtn = this.querySelector('#header-notif-btn');
    if (notifBtn) {
      notifBtn.addEventListener('click', () => {
        const roleParam = isCliente ? '?role=cliente' : '?role=vendedor';
        navigateTo(`notificaciones${roleParam}`);
      });
    }

    // LÓGICA DEL MENÚ DESPLEGABLE (DROPDOWN)
    const profileBtn = this.querySelector('#header-profile-btn');
    const profileDropdown = this.querySelector('#header-profile-dropdown');

    if (profileBtn && profileDropdown) {
      const toggleDropdown = (e) => {
        e.stopPropagation();
        const isOpen = !profileDropdown.classList.contains('hidden');
        if (isOpen) {
          profileDropdown.classList.add('hidden');
          profileBtn.setAttribute('aria-expanded', 'false');
        } else {
          profileDropdown.classList.remove('hidden');
          profileBtn.setAttribute('aria-expanded', 'true');
        }
      };

      profileBtn.addEventListener('click', toggleDropdown);

      // Cerrar al hacer clic fuera
      const handleOutsideClick = (e) => {
        if (!this.contains(e.target)) {
          profileDropdown.classList.add('hidden');
          profileBtn.setAttribute('aria-expanded', 'false');
        }
      };
      document.addEventListener('click', handleOutsideClick);

      // Acciones dentro del desplegable
      this.querySelectorAll('[data-dropdown-role]').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          profileDropdown.classList.add('hidden');
          const targetRole = btn.getAttribute('data-dropdown-role');
          if (targetRole === 'cliente') {
            navigateTo('explorar');
          } else if (targetRole === 'vendedor') {
            navigateTo('inicio');
          } else if (targetRole === 'admin') {
            navigateTo('admin-sistema');
          }
        });
      });

      this.querySelector('#dropdown-goto-profile')?.addEventListener('click', (e) => {
        e.stopPropagation();
        profileDropdown.classList.add('hidden');
        navigateTo('perfil');
      });

      this.querySelector('#dropdown-logout')?.addEventListener('click', (e) => {
        e.stopPropagation();
        profileDropdown.classList.add('hidden');
        if (confirm('¿Deseas cerrar tu sesión en GamarraChain?')) {
          navigateTo('explorar');
        }
      });
    }
  }
}

customElements.define('gamarra-header', GamarraHeader);
