document.addEventListener("DOMContentLoaded", function () {
  const inputCurriculo = document.getElementById("curriculo");
  const form = document.getElementById("form-trabalhe");
  const modal = document.getElementById("modal-sucesso");
  const fecharModal = document.getElementById("btn-fechar-modal");

  // Validação de tipo de arquivo
  inputCurriculo.addEventListener("change", function () {
    const file = inputCurriculo.files[0];

    if (file) {
      const extensoesValidas = [".pdf", ".doc", ".docx"];
      const nomeArquivo = file.name.toLowerCase();
      const extensaoValida = extensoesValidas.some(ext => nomeArquivo.endsWith(ext));

      if (!extensaoValida) {
        alert("Tipo de arquivo inválido. Por favor, envie um currículo em PDF, DOC ou DOCX.");
        inputCurriculo.value = ""; // limpa o campo
      }
    }
  });

  // Evento de envio do formulário
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Impede envio real (backend)

    // Simula sucesso da validação
    if (form.checkValidity()) {
      modal.style.display = "flex";
      form.reset(); // limpa o formulário
    }
  });

  // Botão de fechar modal
  fecharModal.addEventListener("click", function () {
    modal.style.display = "none";
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
