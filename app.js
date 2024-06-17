/**
 * Classe base da aplicação
 */
class App {
  /**
   * URL base da aplicação
   */
  static URL_BASE = "/basicmachinelearning";

  /**
   * Instância de Vue
   */
  #vueApp = null;

  /**
   * Instância de VueRouter
   */
  #vueRouter = null;

  /**
   * Metódo construtor
   */
  constructor() {
    this.#vueApp = Vue.createApp({});
    this.#vueRouter = VueRouter.createRouter({
      history: VueRouter.createWebHashHistory(),
      routes: [],
    });
  }

  /**
   * Inicia aplicação
   */
  start() {
    this.#vueApp.use(this.#vueRouter);
    this.#vueApp.mount("#app");
  }

  /**
   * Retorna roteador do VueRouter
   */
  get router() {
    return VueRouter.useRouter();
  }

  /**
   * retorna rota do VueRouter
   */
  get route() {
    return VueRouter.useRoute();
  }

  /**
   * Direciona para uma rota/página
   * @param {string} route
   */
  go(route) {
    // code
  }

  /**
   * Retorna para a rota/página anterior
   */
  goBack() {
    // code
  }

  /**
   * Registra componente geral
   * @param {string} name
   * @param {Function} setupFunction
   */
  component(name, setupFunction) {
    const component = {
      name: name,
      template: this.template(`${name}-component`),
      setup: setupFunction,
    };
    this.#vueApp.component(name, component);
  }

  /**
   * Registra componente de página
   * @param {string} route
   * @param {setupFunction} Function
   */
  page(route, setupFunction) {
    const componentName =
      route === "/" ? "index-page" : `${route.substring(1)}-page`;
    const component = {
      name: componentName,
      template: this.template(componentName),
      setup: setupFunction,
    };
    this.#vueRouter.addRoute({
      path: route,
      component: component,
    });
  }

  /**
   * Retorna template de um componente
   * @param {string} id
   */
  template(id) {
    return document.getElementById(id).innerHTML;
  }
}

/**
 * Cria globalmente componente principal da aplicação
 */
const app = new App();

/**
 * Expõe globalmente funções do Vue
 */
const {
  ref,
  reactive,
  watch,
  computed,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onUnmounted,
  onBeforeUnmount,
  onActivated,
  onDeactivated,
} = Vue;

// ------------------------------------------------------------------
// ---- Registra componentes gerais da aplicação --------------------
// ------------------------------------------------------------------

/**
 * Componente principal
 */
app.component("app-main", () => {});

/**
 * Componente wrapper de uma página
 */
app.component("app-page", () => {});

// ------------------------------------------------------------------

/**
 * Inicia aplicação após carregamento dos elementos da página/DOM
 */
document.addEventListener("DOMContentLoaded", () => app.start());
