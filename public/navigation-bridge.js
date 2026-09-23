// GamarraChain Prototype Interactive Navigation Bridge
(function () {
  const ROUTE_MAP = {
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

  function navigate(targetPath) {
    if (!targetPath) return;
    const resolvedUrl = ROUTE_MAP[targetPath] || targetPath;
    if (window.parent && window.parent !== window) {
      window.parent.postMessage({ type: 'PROTOTYPE_NAVIGATE', url: resolvedUrl, path: targetPath }, '*');
    } else {
      window.location.href = resolvedUrl;
    }
  }

  function setupInteractivity() {
    // 1. Data-path links
    document.querySelectorAll('[data-path]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        const path = el.getAttribute('data-path');
        navigate(path);
      });
    });

    // 2. Button and element heuristics
    document.querySelectorAll('button, a, article, div').forEach(el => {
      const text = el.innerText ? el.innerText.trim() : '';

      // Ingesta (+ Agregar Producto)
      if (text.includes('Agregar Producto Estrella') || text.includes('+ Agregar Producto')) {
        el.style.cursor = 'pointer';
        el.addEventListener('click', (e) => {
          e.preventDefault();
          navigate('ingesta-producto');
        });
      }

      // Configurar Pauta
      else if (text.includes('Configura tu Pauta') || text.includes('Crear Campaña') || (text.includes('Destacar') && el.tagName === 'BUTTON')) {
        el.style.cursor = 'pointer';
        el.addEventListener('click', (e) => {
          e.preventDefault();
          navigate('configurar-pauta');
        });
      }

      // Suscripción / Planes
      else if (text.includes('Elige el plan') || text.includes('Ver planes') || text.includes('Mejorar Plan')) {
        el.style.cursor = 'pointer';
        el.addEventListener('click', (e) => {
          e.preventDefault();
          navigate('planes-suscripcion');
        });
      }

      // Volver a Catálogo
      else if (text.includes('Volver al Catálogo') || text.includes('Volver a la Vitrina')) {
        el.style.cursor = 'pointer';
        el.addEventListener('click', (e) => {
          e.preventDefault();
          navigate('vitrina');
        });
      }

      // Volver a Beneficios Publicidad
      else if (text.includes('Volver a Beneficios de Publicidad')) {
        el.style.cursor = 'pointer';
        el.addEventListener('click', (e) => {
          e.preventDefault();
          navigate('publicidad');
        });
      }

      // Volver a Beneficios Suscripción
      else if (text.includes('Volver a Beneficios') && !text.includes('Publicidad')) {
        el.style.cursor = 'pointer';
        el.addEventListener('click', (e) => {
          e.preventDefault();
          navigate('suscripcion');
        });
      }

      // GPS 3D desde Explorar
      else if (text.includes('Navegador GPS Interior 3D') || text.includes('Ver en Mapa 3D')) {
        el.style.cursor = 'pointer';
        el.addEventListener('click', (e) => {
          e.preventDefault();
          navigate('mapa-gps');
        });
      }

      // Navegador Callejero 2D
      else if (text.includes('Pasos en la calle') || text.includes('GPS Peatonal Calle')) {
        el.style.cursor = 'pointer';
        el.addEventListener('click', (e) => {
          e.preventDefault();
          navigate('mapa-calle');
        });
      }

      // Ir a Stand desde mapa GPS
      else if (text.includes('Stand B-204') && (el.tagName === 'BUTTON' || el.tagName === 'A' || el.classList.contains('cursor-pointer'))) {
        el.addEventListener('click', (e) => {
          e.preventDefault();
          navigate('vitrina');
        });
      }

      // Exportación de Analítica
      else if (text.includes('Exportar') || text.includes('Informes Ejecutivos')) {
        el.style.cursor = 'pointer';
        el.addEventListener('click', (e) => {
          e.preventDefault();
          navigate('exportacion-analytics');
        });
      }
    });

    // 3. Product Cards click -> Detalle de Producto
    document.querySelectorAll('article').forEach(card => {
      // If card has product title
      const title = card.querySelector('h2, h3, h4');
      if (title && (title.innerText.includes('Casaca') || title.innerText.includes('Polos') || title.innerText.includes('Polera'))) {
        card.style.cursor = 'pointer';
        card.addEventListener('click', (e) => {
          // If not clicked on a specific button inside
          if (!e.target.closest('button')) {
            navigate('detalle-producto');
          }
        });
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupInteractivity);
  } else {
    setupInteractivity();
  }
})();
