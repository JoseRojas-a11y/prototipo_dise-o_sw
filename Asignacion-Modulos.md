# Listado de Módulos

Para organizar el desarrollo y la operatividad de la plataforma, el sistema se divide en los siguientes módulos principales:

## 1. Módulo de Navegación y Experiencia de Usuario (Core App)

**Funciones:** Renderizado del mapa 3D de interiores, geolocalización del usuario, cálculo de rutas óptimas hacia un stand y visualización de la interfaz principal.


**Objetivo:** Guiar al usuario desde su punto de origen hasta el producto deseado sin pérdidas de tiempo.


## 2. Módulo de Búsqueda y Catálogo Comercial
**Funciones:** Indexación de tiendas, categorías de prendas, rangos de precios y perfiles de los comerciantes.


**Objetivo:** Permitir al comprador encontrar exactamente lo que necesita y comparar opciones antes de iniciar la navegación.


## 3. Módulo de Gestión de Incentivos y Fidelización
**Funciones:** Gestión de perfiles de usuario, asignación de puntos por validaciones correctas, canje de recompensas (descuentos o beneficios comerciales) y control de reputación de los validadores.


**Objetivo:** Mantener a la comunidad motivada para actualizar la base de datos de manera constante sin recurrir a infraestructura criptográfica compleja.


## 4. Módulo de Ingesta y Actualización de Datos (Garantía de Ingreso)
**Funciones:** Herramientas de carga masiva, interfaces simplificadas de actualización para comerciantes, flujos de moderación de reportes de usuarios y control de calidad de la información ingresada.


**Objetivo:** Asegurar de manera proactiva y automatizada un flujo constante de datos frescos, minimizando catálogos desactualizados o información huérfana.


## 5. Módulo de Gestión de Publicidad (Merchant Panel)
**Funciones:** Panel de control para que los comerciantes creen campañas publicitarias, segmenten su audiencia por geolocalización y gestionen sus pagos y métricas de impacto.


**Objetivo:** Generar la principal fuente de ingresos de la plataforma otorgando visibilidad destacada a los vendedores.


## 6. Módulo de Inteligencia de Mercado (Data Analytics)
**Funciones:** Agregación de datos de tráfico peatonal, términos de búsqueda más frecuentes y tendencias de compra (siempre de manera anónima).


**Objetivo:** Empaquetar y monetizar estos reportes estadísticos para empresas del sector retail o instituciones corporativas (modelo B2B).


## 7. Módulo de Administración y Gobernanza Centralizada/Híbrida
**Funciones:** Panel maestro de control para la administración de la plataforma, supervisión de disputas sobre datos y configuración de reglas de negocio o incentivos.


**Objetivo:** Permitir una toma de decisiones ágil y un control operativo directo sobre la evolución de la plataforma y la calidad de los datos.

## División:

### Mauricio Miguel Chinchayhuara Pantoja: Responsable de Experiencia de Usuario y Navegación 3D (Core App)

**Módulos a cargo:**
Módulo de Navegación y Experiencia de Usuario (Core App)

**Responsabilidades principales:**
- Desarrollo de la interfaz móvil principal (UX/UI orientada a Waze/Google Maps).
- Integración e implementación del motor de renderizado del mapa 3D de interiores y geolocalización del usuario.
- Lógica de cálculo de rutas óptimas hacia un stand dentro de galerías complejas.

### Renzo Moises Chavarria Llamacponcca: Responsable de Catálogos, Búsqueda e Ingesta de Datos

**Módulos a cargo:**
Módulo de Búsqueda y Catálogo Comercial
Módulo de Ingesta y Actualización de Datos (Garantía de Ingreso)
**Responsabilidades principales:**
- Diseño e implementación de la base de datos relacional y motores de búsqueda rápida (filtros por prendas, precios, categorías).
- Desarrollo de las herramientas de carga masiva y formularios simplificados para que los comerciantes actualicen su inventario.
- Automatización de flujos y alianzas técnicas para asegurar el ingreso constante de directorios base.

### Alvaro Martin Vera Palacios: Responsable del Panel de Comerciantes y Monetización (Publicidad)

**Módulos a cargo:**
Módulo de Gestión de Publicidad (Merchant Panel)
Módulo de Inteligencia de Mercado (Data Analytics)

**Responsabilidades principales:**
- Desarrollo del panel web/móvil B2B para que los comerciantes creen campañas publicitarias y segmenten su audiencia por geolocalización.
- Integración de pasarelas de pago tradicionales para la pauta publicitaria y suscripciones SaaS.
- Procesamiento y agregación de datos anónimos para la generación de reportes estadísticos de tráfico y tendencias (monetización B2B).

### Jose Martin Rojas Sanchez: Responsable de Incentivos, Fidelización y Administración del Sistema

**Módulos a cargo:**
Módulo de Gestión de Incentivos y Fidelización (Gamificación)
Módulo de Administración y Gobernanza Centralizada/Híbrida

**Responsabilidades principales:**
- Desarrollo del sistema de puntos, niveles de usuario, reputación de validadores y canje de descuentos/vales en tiendas aliadas.
- Construcción del panel maestro de administración para la moderación de reportes comunitarios y control de disputas sobre datos.
- Seguridad general de la plataforma (control de accesos, cifrado, respaldos) y supervisión del flujo de calidad.