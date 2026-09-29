// GamarraChain - Rutas y Navegación General
export const ROUTES = {
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

  // Modo Administración y Gobernanza Centralizada (Módulo 7)
  'admin-sistema': '/prototipos/jose_rojas/modulo_7_gobernanza_admin/panel_administrador_sistema/index.html',

  // Modo Spatial Analytics B2B
  'mapa-de-calor': '/prototipos/alvaro_vera/modulo_6_inteligencia_mercado/mapa_calor_espacial/index.html',
  'ocupacion-de-stands': '/prototipos/alvaro_vera/modulo_6_inteligencia_mercado/ocupacion_stands/index.html',
  'tendencias-de-trafico': '/prototipos/alvaro_vera/modulo_6_inteligencia_mercado/analisis_demanda_modular/index.html',
  'exportacion-analytics': '/prototipos/alvaro_vera/modulo_6_inteligencia_mercado/exportacion_inteligencia_comercial/index.html'
};

export function navigateTo(target) {
  if (!target) return;
  const url = ROUTES[target] || target;
  window.location.href = url;
}

export function setupNavigationListeners() {
  document.querySelectorAll('[data-path]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const path = el.getAttribute('data-path');
      navigateTo(path);
    });
  });
}
