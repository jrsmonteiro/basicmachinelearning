/**
 * Página index
 */
app.page("/", () => {
  const message = ref("Mensagem de teste");
  return { message };
});

/**
 * Página de regressão linear
 */
app.page("/linear-regression", () => {});
