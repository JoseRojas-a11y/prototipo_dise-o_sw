# GamarraChain — Arquitectura de Prototipos Modulares

> **Nota para Agentes de IA y Desarrolladores Externos:** Este archivo documenta de forma exhaustiva la arquitectura, estructura de archivos, diseño de componentes y lógica de navegación de GamarraChain. Utiliza esta guía para comprender el sistema, respetar las asignaciones modulares por integrante y realizar modificaciones futuras sin romper la interoperabilidad entre pantallas.

---

## 1. Visión General del Proyecto

**GamarraChain** es una plataforma tecnológica diseñada para digitalizar, organizar y potenciar el flujo comercial del emporio textil de **Gamarra (La Victoria, Lima, Perú)**.

El sistema resuelve tres problemáticas críticas:
1. **Pérdida de tiempo en navegación física:** Galerías complejas y desordenadas (Damero A y B).
2. **Desconexión entre talleres y compradores mayoristas:** Dificultad para comparar inventario en tiempo real.
3. **Falta de inteligencia de mercado B2B:** Falta de métricas sobre tráfico peatonal, demanda de telas y ocupación de stands.

### Modos de la Aplicación
El aplicativo funciona de forma unificada bajo dos modos de usuario principales y una suite de inteligencia de negocio:
- **Modo Cliente (Comprador):** Orientado a la experiencia móvil (UX/UI tipo Waze/Google Maps) con renderizado de mapas interiores 3D, geolocalización UWB, exploración de prendas en tendencia y clóset de favoritos/recompensas.
- **Modo Vendedor (Comerciante - Merchant Hub):** Panel operativo para micro y medianos talleres de confección (ej. *Confecciones Los Andes, Stand B-204*), catálogo comercial, ingesta rápida de inventario en 30 segundos, compra de pauta publicitaria geolocalizada y suscripciones SaaS.
- **Suite B2B (Spatial Analytics):** Panel de analítica espacial para holdings textiles e inversores inmobiliarios (mapas de calor por sensores IoT, tasas de ocupación, tendencias textiles y exportación ejecutiva).

---

## 2. Asignación de Módulos e Integrantes (Referencia: `3.1.0.md`)

El sistema se divide formalmente en 7 módulos funcionales asignados a 4 integrantes:

| Integrante | Módulos a Cargo | Rol Principal | Pantallas Asociadas |
| :--- | :--- | :--- | :--- |
| **Mauricio Miguel Chinchayhuara Pantoja** | **Módulo 1:** Navegación y UX (Core App) | Motor 3D de interiores, geolocalización UWB, cálculo de rutas peatonales en Damero A. | `explorar_tendencias`, `navegador_gps_3d`, `navegador_callejero_2d` |
| **Renzo Moises Chavarria Llamacponcca** | **Módulo 2:** Búsqueda y Catálogo Comercial<br>**Módulo 4:** Ingesta y Actualización de Datos | Catálogo digital de tienda, filtros por telas/precios, ficha de prenda y formulario de alta rápida de stock. | `cat_logo_y_vitrina`, `detalle_producto_comentarios`, `alta_rapida_inventario` |
| **Alvaro Martin Vera Palacios** | **Módulo 5:** Gestión de Publicidad (Merchant Panel)<br>**Módulo 6:** Inteligencia de Mercado (Data Analytics) | Panel de control del comerciante, compra y pago de pautas, suscripciones SaaS, mapas de calor y analítica B2B. | `panel_comerciante_metricas`, `storytelling_publicidad`, `configuracion_pago_campana`, `storytelling_suscripcion`, `planes_checkout_suscripcion`, `mapa_calor_espacial`, `ocupacion_stands`, `analisis_demanda_modular`, `exportacion_inteligencia_comercial` |
| **Jose Martin Rojas Sanchez** | **Módulo 3:** Gestión de Incentivos y Fidelización<br>**Módulo 7:** Administración y Gobernanza Centralizada | Sistema de fidelización (Mi Closet), puntos/gamificación, moderación de reportes/disputas y control operativo del negocio. | `closet_guardados_historial`, `gobernanza_gestion_negocio` |

---

## 3. Estructura de Directorios

```text
Momentaneo-Diseño/
├── README.md                                              # Documentación central para desarrolladores e IAs
├── 3.1.0.md                                               # Requisitos del sistema y asignación oficial
├── package.json                                           # Configuración de dependencias (Vite)
├── vite.config.js                                         # Configuración multi-página de Vite
├── index.html                                             # Entry point raíz (redirecciona a Explorar)
│
├── prototipos/                                            # CÓDIGO FUENTE DE LAS PANTALLAS MODULARES
│   ├── 0_general/                                           # GENERALIDADES Y COMPONENTES REUTILIZABLES
│   │   ├── css/
│   │   │   ├── theme.css                                  # Variables CSS y tokens de diseño
│   │   │   ├── layout.css                                 # Contenedores (.gamarrachain-app) y resets
│   │   │   └── components.css                             # Estilos compartidos de botones, chips y tarjetas
│   │   ├── layouts/
│   │   │   └── navigation.js                              # Diccionario de rutas y listeners de data-path
│   │   └── components/
│   │       ├── gamarra-header.js                          # Web component <gamarra-header>
│   │       ├── gamarra-nav.js                             # Web component <gamarra-nav>
│   │       └── analytics-tabs.js                          # Web component <analytics-tabs>
│   │
│   ├── 0_assets/                                            # Recursos estáticos (logos, planos, fotos)
│   │   ├── gamarrachain_logo.png
│   │   ├── mall_map_3d.png
│   │   ├── floorplan_blueprint.png
│   │   ├── denim_jackets.png
│   │   ├── pima_tshirts.png
│   │   └── fleece_hoodies.png
│   │
│   ├── 1_mauricio_chinchayhuara/
│   │   └── modulo_1_navegacion_core/
│   │       ├── explorar_tendencias/                       [index.html, styles.css, screen.png]
│   │       ├── navegador_gps_3d/                          [index.html, styles.css, screen.png]
│   │       └── navegador_callejero_2d/                    [index.html, styles.css, screen.png]
│   │
│   ├── 4_renzo_chavarria/
│   │   ├── modulo_2_catalogo_busqueda/
│   │   │   ├── cat_logo_y_vitrina/                        [index.html, styles.css, screen.png]
│   │   │   └── detalle_producto_comentarios/              [index.html, styles.css, screen.png]
│   │   └── modulo_4_ingesta_datos/
│   │       └── alta_rapida_inventario/                    [index.html, styles.css, screen.png]
│   │
│   ├── 3_alvaro_vera/
│   │   ├── modulo_5_publicidad_merchant/
│   │   │   ├── panel_comerciante_metricas/                [index.html, styles.css, screen.png]
│   │   │   ├── storytelling_publicidad/                   [index.html, styles.css, screen.png]
│   │   │   ├── configuracion_pago_campana/                [index.html, styles.css, screen.png]
│   │   │   ├── storytelling_suscripcion/                  [index.html, styles.css, screen.png]
│   │   │   └── planes_checkout_suscripcion/               [index.html, styles.css, screen.png]
│   │   └── modulo_6_inteligencia_mercado/
│   │       ├── mapa_calor_espacial/                       [index.html, styles.css, screen.png]
│   │       ├── ocupacion_stands/                          [index.html, styles.css, screen.png]
│   │       ├── analisis_demanda_modular/                  [index.html, styles.css, screen.png]
│   │       └── exportacion_inteligencia_comercial/        [index.html, styles.css, screen.png]
│   │
│   └── 2_jose_rojas/
│       ├── modulo_3_incentivos_fidelizacion/
│       │   └── closet_guardados_historial/                [index.html, styles.css, screen.png]
│       └── modulo_7_gobernanza_admin/
│           └── gobernanza_gestion_negocio/                [index.html, styles.css, screen.png]
│
├── shared/                                                # COMPATIBILIDAD Y HELPERS COMPARTIDOS
│   ├── theme/
│   │   └── tailwind-init.js                               # Inicialización de configuración Tailwind CDN
│   ├── navigation/
│   │   └── router.js                                      # Enrutador cliente secundario
│   └── styles/
│       ├── theme.css
│       └── app.css
│
└── stitch_remix_of_textile_merchant_mobile_dashboard/     # REPOSITORIO ORIGINAL INTACTO (Solo Lectura)
```

---

## 4. Sistema de Diseño y Tokens (Design Tokens)

El diseño visual está basado en las directrices de `DESIGN.md`:

### Paleta de Colores
- **Azul Primario (Navy):** `--color-primary: #091426;` (Header, tarjetas oscuras, botones principales).
- **Verde Secundario (Gamarra):** `--color-secondary: #006c49;` (Estados activos, insignias de éxito, precios por mayor).
- **Acento Verde Fluorescente:** `--color-secondary-container: #6cf8bb;` (Highlights, botones flotantes).
- **Fondo / Superficie:** `--color-surface: #f8f9ff;` (Fondo claro estándar).
- **Superficie Contenedores:** `--color-surface-container-low: #eff4ff;`, `--color-surface-container-lowest: #ffffff;`.
- **Textos:** `--color-on-surface: #0b1c30;`, `--color-on-surface-variant: #45474c;`.

### Tipografía
- **Titulares y Métricas:** `Plus Jakarta Sans` (pesos 600, 700, 800).
- **Cuerpo y Etiquetas:** `Inter` (pesos 400, 500, 600).
- **Iconografía:** `Material Symbols Outlined` (Google Fonts).

### Contenedores Responsivos
- **`.gamarrachain-app`**: Contenedor móvil natural (`max-width: 440px`), centrado con sombra suave en navegadores de escritorio para simular una PWA/aplicación móvil nativa sin bordes ni marcos falsos.
- **`.gamarrachain-dashboard`**: Contenedor extendido (`max-width: 1400px`) para las pantallas B2B de Analítica Espacial.

---

## 5. Web Components Reutilizables

Para evitar duplicar cabeceras y barras de navegación en los 17 archivos HTML, se crearon Web Components estándar:

### 1. `<gamarra-header>`
Renderiza el encabezado superior con logo, título y conmutador de perfil.
```html
<!-- Para modo cliente -->
<gamarra-header role="cliente" title="Explorar"></gamarra-header>

<!-- Con botón de retorno hacia una ruta específica -->
<gamarra-header role="cliente" title="Navegador GPS 3D" back="explorar"></gamarra-header>

<!-- Para modo vendedor -->
<gamarra-header role="vendedor" title="Vitrina Comercial"></gamarra-header>
```
*Atributos:*
- `role`: `"cliente"` | `"vendedor"` | `"analytics"`
- `title`: Texto del encabezado principal
- `back`: ID de ruta de retorno (opcional)

### 2. `<gamarra-nav>`
Renderiza la barra de navegación fija inferior según el modo activo.
```html
<!-- Barra inferior del comprador (Explorar, Mapa GPS, Closet) -->
<gamarra-nav mode="cliente" active="explorar"></gamarra-nav>

<!-- Barra inferior del comerciante (Inicio, Vitrina, Publicidad, Suscripción) -->
<gamarra-nav mode="vendedor" active="vitrina"></gamarra-nav>
```
*Atributos:*
- `mode`: `"cliente"` | `"vendedor"`
- `active`: `"explorar"` | `"mapa-gps"` | `"closet"` | `"inicio"` | `"vitrina"` | `"publicidad"` | `"suscripcion"`

### 3. `<analytics-tabs>`
Renderiza la barra de pestañas para las pantallas de Analítica Espacial B2B.
```html
<analytics-tabs active="mapa-de-calor"></analytics-tabs>
```
*Opciones de `active`:* `"mapa-de-calor"` | `"ocupacion-de-stands"` | `"tendencias-de-trafico"` | `"exportacion-analytics"`.

---

## 6. Lógica de Enrutamiento y Navegación

Todas las rutas están centralizadas en `prototipos/general/layouts/navigation.js`.

### Mapa de Rutas
```javascript
export const ROUTES = {
  // Modo Comerciante (Vendedor)
  'inicio': '/prototipos/alvaro_vera/modulo_5_publicidad_merchant/panel_comerciante_metricas/index.html',
  'vitrina': '/prototipos/renzo_chavarria/modulo_2_catalogo_busqueda/cat_logo_y_vitrina/index.html',
  'publicidad': '/prototipos/alvaro_vera/modulo_5_publicidad_merchant/storytelling_publicidad/index.html',
  'suscripcion': '/prototipos/alvaro_vera/modulo_5_publicidad_merchant/storytelling_suscripcion/index.html',
  'perfil-comercio': '/prototipos/jose_rojas/modulo_7_gobernanza_admin/gobernanza_gestion_negocio/index.html',
  'planes-suscripcion': '/prototipos/alvaro_vera/modulo_5_publicidad_merchant/planes_checkout_suscripcion/index.html',
  'configurar-pauta': '/prototipos/alvaro_vera/modulo_5_publicidad_merchant/configuracion_pago_campana/index.html',
  'ingesta-producto': '/prototipos/renzo_chavarria/modulo_4_ingesta_datos/alta_rapida_inventario/index.html',
  'detalle-producto': '/prototipos/renzo_chavarria/modulo_2_catalogo_busqueda/detalle_producto_comentarios/index.html',

  // Modo Comprador (Cliente)
  'explorar': '/prototipos/mauricio_chinchayhuara/modulo_1_navegacion_core/explorar_tendencias/index.html',
  'mapa-gps': '/prototipos/mauricio_chinchayhuara/modulo_1_navegacion_core/navegador_gps_3d/index.html',
  'mapa-calle': '/prototipos/mauricio_chinchayhuara/modulo_1_navegacion_core/navegador_callejero_2d/index.html',
  'closet': '/prototipos/jose_rojas/modulo_3_incentivos_fidelizacion/closet_guardados_historial/index.html',

  // Suite B2B Analytics
  'mapa-de-calor': '/prototipos/alvaro_vera/modulo_6_inteligencia_mercado/mapa_calor_espacial/index.html',
  'ocupacion-de-stands': '/prototipos/alvaro_vera/modulo_6_inteligencia_mercado/ocupacion_stands/index.html',
  'tendencias-de-trafico': '/prototipos/alvaro_vera/modulo_6_inteligencia_mercado/analisis_demanda_modular/index.html',
  'exportacion-analytics': '/prototipos/alvaro_vera/modulo_6_inteligencia_mercado/exportacion_inteligencia_comercial/index.html'
};
```

### Conexiones e Interacciones Clave:
1. **Conmutador de Modo (Header Avatar):**
   - Si el usuario está en el flujo del comprador, hacer clic en el avatar conmuta a `inicio` (Panel Comerciante).
   - Si está en el flujo del comerciante, conmuta a `explorar` (App Comprador).
2. **Navegación de Producto:**
   - Hacer clic en cualquier tarjeta de prenda navega a `detalle-producto` (Módulo 2).
   - Hacer clic en "Volver al Catálogo" regresa a `vitrina`.
3. **Flujo de Ingesta Rápida (Módulo 4):**
   - El botón hero `+ Agregar Producto Estrella` en la vitrina navega directamente a `ingesta-producto`.
4. **Flujo de Pauta y Suscripciones (Módulo 5):**
   - El botón `Configura tu Pauta` navega a `configurar-pauta` y procesa la activación.
   - El botón `Elegir Plan` navega a `planes-suscripcion`.
5. **Navegación Espacial 3D (Módulo 1):**
   - En `explorar`, el botón `Abrir Mapa` lleva a `mapa-gps`.
   - Desde `mapa-gps`, hacer clic en el Stand B-204 abre la vitrina del puesto en `vitrina`.

---

## 7. Instrucciones de Ejecución y Desarrollo

### Requisitos Previos
- **Node.js**: v18.0 o superior (validado en v22.16.0).
- **npm**: v9.0 o superior (validado en v10.9.2).

### Comandos de Ejecución
```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo con Vite
npm run dev

# 3. Compilar para producción (Multi-Page Bundle)
npm run build

# 4. Previsualizar bundle de producción
npm run preview
```

El servidor iniciará en:
`http://localhost:5173/` (que redirige automáticamente a la pantalla de inicio de GamarraChain).

---

## 8. Guía para IAs y Desarrolladores que Realicen Cambios Futuros

Al extender o modificar este repositorio, sigue estrictamente estas directrices:

1. **Ubicación de Nuevas Pantallas:**
   - Colócalas siempre dentro de la subcarpeta del integrante correspondiente bajo `prototipos/<integrante>/<modulo_x>/<pantalla>/`.
   - Cada pantalla debe tener su propio `index.html` y su `styles.css`.
2. **Uso de Clases y Estilos:**
   - **No uses estilos en línea gigantes ni Tailwind inline configs:** Coloca las clases y contenedores propios de la vista dentro del archivo local `styles.css`.
   - Los estilos globales deben referenciar las variables de `/prototipos/general/css/theme.css`.
3. **Componentes Estándar:**
   - Toda pantalla de usuario o comerciante debe incluir `<gamarra-header>` arriba y `<gamarra-nav>` abajo.
   - No crees barras de navegación ad-hoc salvo que sea un flujo modal especializado.
4. **Actualización de Rutas:**
   - Si creas una nueva pantalla, registra su URL en `prototipos/general/layouts/navigation.js` para mantener la navegación coherente.
5. **Conservación de `stitch_remix_of_textile_merchant_mobile_dashboard`:**
   - No elimines ni alteres esta carpeta; actúa como el archivo fuente inmutable del modelado original de Stitch.
