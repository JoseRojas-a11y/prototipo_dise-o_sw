// GamarraChain - Enrutador Nativo entre Pantallas y Módulos
(function () {
  const ROUTES = {
    // Modo Vendedor (Merchant Hub)
    'inicio': '/prototipos/alvaro_vera/modulo_5_publicidad_merchant/panel_comerciante_metricas/index.html',
    'vitrina': '/prototipos/renzo_chavarria/modulo_2_catalogo_busqueda/cat_logo_y_vitrina/index.html',
    'publicidad': '/prototipos/alvaro_vera/modulo_5_publicidad_merchant/storytelling_publicidad/index.html',
    'suscripcion': '/prototipos/alvaro_vera/modulo_5_publicidad_merchant/storytelling_suscripcion/index.html',
    'perfil-comercio': '/prototipos/jose_rojas/modulo_7_gobernanza_admin/gobernanza_gestion_negocio/index.html',
    'planes-suscripcion': '/prototipos/alvaro_vera/modulo_5_publicidad_merchant/planes_checkout_suscripcion/index.html',
    'configurar-pauta': '/prototipos/alvaro_vera/modulo_5_publicidad_merchant/configuracion_pago_campana/index.html',
    'ingesta-producto': '/prototipos/renzo_chavarria/modulo_4_ingesta_datos/alta_rapida_inventario/index.html',
    'detalle-producto': '/prototipos/renzo_chavarria/modulo_2_catalogo_busqueda/detalle_producto_comentarios/index.html',

    // Modo Cliente (App Comprador)
    'explorar': '/prototipos/mauricio_chinchayhuara/modulo_1_navegacion_core/explorar_tendencias/index.html',
    'mapa-gps': '/prototipos/mauricio_chinchayhuara/modulo_1_navegacion_core/navegador_gps_3d/index.html',
    'mapa-calle': '/prototipos/mauricio_chinchayhuara/modulo_1_navegacion_core/navegador_callejero_2d/index.html',
    'closet': '/prototipos/jose_rojas/modulo_3_incentivos_fidelizacion/closet_guardados_historial/index.html',
    'cupones': '/prototipos/jose_rojas/modulo_3_incentivos_fidelizacion/fidelizacion_cupones/index.html',
    'perfil': '/prototipos/jose_rojas/modulo_3_incentivos_fidelizacion/perfil_usuario/index.html',
    'notificaciones': '/prototipos/jose_rojas/modulo_3_incentivos_fidelizacion/centro_notificaciones/index.html',

    // Modo Administración y Gobernanza Centralizada (Módulo 7)
    'admin-sistema': '/prototipos/jose_rojas/modulo_7_gobernanza_admin/panel_administrador_sistema/index.html',

    // Modo Spatial Analytics B2B
    'mapa-de-calor': '/prototipos/alvaro_vera/modulo_6_inteligencia_mercado/mapa_calor_espacial/index.html',
    'ocupacion-de-stands': '/prototipos/alvaro_vera/modulo_6_inteligencia_mercado/ocupacion_stands/index.html',
    'tendencias-de-trafico': '/prototipos/alvaro_vera/modulo_6_inteligencia_mercado/analisis_demanda_modular/index.html',
    'exportacion-analytics': '/prototipos/alvaro_vera/modulo_6_inteligencia_mercado/exportacion_inteligencia_comercial/index.html'
  };

  function navigateTo(keyOrUrl) {
    if (!keyOrUrl) return;
    const dest = ROUTES[keyOrUrl] || keyOrUrl;
    window.location.href = dest;
  }

  function initAppNavigation() {
    // 1. Enlaces con data-path explícito
    document.querySelectorAll('[data-path]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        const path = el.getAttribute('data-path');
        navigateTo(path);
      });
    });

    // 2. Conmutador auténtico de rol y acceso a perfil en el avatar/perfil del Header
    const profileIcon = document.querySelector('header a[data-path="perfil-comercio"], header button[aria-label="Perfil y Modo"], header #header-profile-btn, header .w-8.h-8.rounded-full');
    if (profileIcon) {
      profileIcon.style.cursor = 'pointer';
      profileIcon.title = "Ver Perfil y Conmutador de Cuentas";
      profileIcon.addEventListener('click', (e) => {
        e.preventDefault();
        navigateTo(ROUTES['perfil']);
      });
    }

    // 2.1 Acceso al Centro de Notificaciones desde la Campana
    const notifBtn = document.querySelector('header button[aria-label="Notificaciones"], header #header-notif-btn');
    if (notifBtn) {
      notifBtn.style.cursor = 'pointer';
      notifBtn.title = "Ver Notificaciones y Alertas";
      notifBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const isMerchant = window.location.pathname.includes('modulo_5') || 
                           window.location.pathname.includes('modulo_6') || 
                           window.location.pathname.includes('gobernanza_gestion_negocio');
        const roleParam = isMerchant ? '?role=vendedor' : '?role=cliente';
        navigateTo(ROUTES['notificaciones'] + roleParam);
      });
    }

    // 3. Botones y enlaces contextuales
    // NOTA (fix Renzo M2/M4): los handlers por texto solo se atan a BUTTON/A.
    // Antes se ataban también a DIV/ARTICLE padres (su innerText incluye el de
    // los hijos) y cualquier clic burbujeaba hasta ellos y redirigía mal
    // (ej: en vitrina todo clic terminaba en ingesta-producto).
    document.querySelectorAll('button, a, article, div').forEach(el => {
      const text = (el.innerText || '').trim();
      const isClickableTag = el.tagName === 'BUTTON' || el.tagName === 'A';

      // Botón Alta Rápida de Inventario (Módulo 4)
      if ((text.includes('Agregar Producto Estrella') || text.includes('+ Agregar Producto')) && isClickableTag) {
        el.style.cursor = 'pointer';
        el.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          navigateTo('ingesta-producto');
        });
      }

      // Configuración de Pauta (Módulo 5)
      else if ((text.includes('Configura tu Pauta') || text.includes('Crear Campaña') || text.includes('Destacar')) && isClickableTag) {
        el.style.cursor = 'pointer';
        el.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          navigateTo('configurar-pauta');
        });
      }

      // Suscripción SaaS / Planes (Módulo 5)
      else if ((text.includes('Elige el plan') || text.includes('Ver planes') || text.includes('Mejorar Plan') || text.includes('Gestionar Suscripción')) && isClickableTag) {
        el.style.cursor = 'pointer';
        el.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          navigateTo('planes-suscripcion');
        });
      }

      // Volver a Catálogo / Vitrina
      else if ((text.includes('Volver al Catálogo') || text.includes('Volver a la Vitrina')) && isClickableTag) {
        el.style.cursor = 'pointer';
        el.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          navigateTo('vitrina');
        });
      }

      // Volver a Beneficios Publicidad
      else if (text.includes('Volver a Beneficios de Publicidad') && isClickableTag) {
        el.style.cursor = 'pointer';
        el.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          navigateTo('publicidad');
        });
      }

      // Volver a Beneficios Suscripción
      else if (text.includes('Volver a Beneficios') && !text.includes('Publicidad') && isClickableTag) {
        el.style.cursor = 'pointer';
        el.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          navigateTo('suscripcion');
        });
      }

      // Navegador GPS 3D desde Explorar
      else if ((text.includes('Navegador GPS Interior 3D') || text.includes('Ver en Mapa 3D')) && isClickableTag) {
        el.style.cursor = 'pointer';
        el.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          navigateTo('mapa-gps');
        });
      }

      // Navegador Peatonal Callejero 2D
      else if ((text.includes('Pasos en la calle') || text.includes('GPS Peatonal Calle')) && isClickableTag) {
        el.style.cursor = 'pointer';
        el.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          navigateTo('mapa-calle');
        });
      }

      // Ir a Stand Confecciones Los Andes desde Navegador 3D
      else if (text.includes('Stand B-204') && (el.tagName === 'BUTTON' || el.tagName === 'A' || el.classList.contains('cursor-pointer'))) {
        el.addEventListener('click', (e) => {
          e.preventDefault();
          navigateTo('vitrina');
        });
      }

      // Exportación de Inteligencia B2B
      else if ((text.includes('Exportar') || text.includes('Informes Ejecutivos') || text.includes('Exportar Reporte')) && isClickableTag) {
        el.style.cursor = 'pointer';
        el.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          navigateTo('exportacion-analytics');
        });
      }
    });

    // 4. Clics en tarjetas de productos para abrir la ficha de detalle (Módulo 2)
    document.querySelectorAll('article').forEach(card => {
      const title = card.querySelector('h2, h3, h4');
      if (title && (title.innerText.includes('Casaca') || title.innerText.includes('Polos') || title.innerText.includes('Polera'))) {
        card.style.cursor = 'pointer';
        card.addEventListener('click', (e) => {
          if (!e.target.closest('button')) {
            navigateTo('detalle-producto');
          }
        });
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAppNavigation);
  } else {
    initAppNavigation();
  }
})();
