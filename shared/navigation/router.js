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

    // 2. Conmutador auténtico de rol en el avatar/perfil del Header
    // Si estamos en modo comprador, el icono de perfil permite cambiar a Modo Comerciante y viceversa
    const isCustomerView = window.location.pathname.includes('mauricio_chinchayhuara') ||
                           window.location.pathname.includes('closet_guardados_historial') ||
                           window.location.pathname.includes('explorar_tendencias');

    const profileIcon = document.querySelector('header a[data-path="perfil-comercio"], header button[aria-label="Perfil"], header .w-8.h-8.rounded-full');
    if (profileIcon) {
      profileIcon.style.cursor = 'pointer';
      profileIcon.title = isCustomerView ? "Cambiar a Modo Comerciante (Merchant Hub)" : "Ir a Gobernanza del Negocio";
      profileIcon.addEventListener('click', (e) => {
        e.preventDefault();
        if (isCustomerView) {
          navigateTo(ROUTES['inicio']);
        } else {
          navigateTo(ROUTES['perfil-comercio']);
        }
      });
    }

    // 3. Botones y enlaces contextuales
    document.querySelectorAll('button, a, article, div').forEach(el => {
      const text = (el.innerText || '').trim();

      // Botón Alta Rápida de Inventario (Módulo 4)
      if (text.includes('Agregar Producto Estrella') || text.includes('+ Agregar Producto')) {
        el.style.cursor = 'pointer';
        el.addEventListener('click', (e) => {
          e.preventDefault();
          navigateTo('ingesta-producto');
        });
      }

      // Configuración de Pauta (Módulo 5)
      else if (text.includes('Configura tu Pauta') || text.includes('Crear Campaña') || (text.includes('Destacar') && el.tagName === 'BUTTON')) {
        el.style.cursor = 'pointer';
        el.addEventListener('click', (e) => {
          e.preventDefault();
          navigateTo('configurar-pauta');
        });
      }

      // Suscripción SaaS / Planes (Módulo 5)
      else if (text.includes('Elige el plan') || text.includes('Ver planes') || text.includes('Mejorar Plan') || text.includes('Gestionar Suscripción')) {
        el.style.cursor = 'pointer';
        el.addEventListener('click', (e) => {
          e.preventDefault();
          navigateTo('planes-suscripcion');
        });
      }

      // Volver a Catálogo / Vitrina
      else if (text.includes('Volver al Catálogo') || text.includes('Volver a la Vitrina')) {
        el.style.cursor = 'pointer';
        el.addEventListener('click', (e) => {
          e.preventDefault();
          navigateTo('vitrina');
        });
      }

      // Volver a Beneficios Publicidad
      else if (text.includes('Volver a Beneficios de Publicidad')) {
        el.style.cursor = 'pointer';
        el.addEventListener('click', (e) => {
          e.preventDefault();
          navigateTo('publicidad');
        });
      }

      // Volver a Beneficios Suscripción
      else if (text.includes('Volver a Beneficios') && !text.includes('Publicidad')) {
        el.style.cursor = 'pointer';
        el.addEventListener('click', (e) => {
          e.preventDefault();
          navigateTo('suscripcion');
        });
      }

      // Navegador GPS 3D desde Explorar
      else if (text.includes('Navegador GPS Interior 3D') || text.includes('Ver en Mapa 3D')) {
        el.style.cursor = 'pointer';
        el.addEventListener('click', (e) => {
          e.preventDefault();
          navigateTo('mapa-gps');
        });
      }

      // Navegador Peatonal Callejero 2D
      else if (text.includes('Pasos en la calle') || text.includes('GPS Peatonal Calle')) {
        el.style.cursor = 'pointer';
        el.addEventListener('click', (e) => {
          e.preventDefault();
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
      else if (text.includes('Exportar') || text.includes('Informes Ejecutivos') || text.includes('Exportar Reporte')) {
        el.style.cursor = 'pointer';
        el.addEventListener('click', (e) => {
          e.preventDefault();
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
