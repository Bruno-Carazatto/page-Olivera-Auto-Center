// ===================================================
// CONTATO.JS – Scripts para a página de contato
// ===================================================

document.addEventListener("DOMContentLoaded", () => {
  const tipo = document.getElementById("tipo");
  const camposEmpresa = document.getElementById("campos-empresa");
  const camposIndividual = document.getElementById("campos-individual");

  // Mostrar campos de acordo com o tipo selecionado
  tipo.addEventListener("change", () => {
    camposEmpresa.classList.remove("show");
    camposIndividual.classList.remove("show");

    if (tipo.value === "empresa") {
      camposEmpresa.classList.add("show");
    } else if (tipo.value === "individual") {
      camposIndividual.classList.add("show");
    }
  });

  // Aplicar máscaras com VMasker
  VMasker(document.getElementById("telefone")).maskPattern("(99) 99999-9999");
  VMasker(document.getElementById("cep")).maskPattern("99999-999");
  VMasker(document.getElementById("cep-empresa")).maskPattern("99999-999");
  VMasker(document.getElementById("cpf")).maskPattern("999.999.999-99");
  VMasker(document.getElementById("cnpj")).maskPattern("99.999.999/9999-99");

  // Validação simples de e-mail
  const email = document.getElementById("email");
  email.addEventListener("blur", () => {
    if (!email.value.includes("@") || !email.value.includes(".")) {
      email.setCustomValidity("Por favor, insira um e-mail válido.");
    } else {
      email.setCustomValidity("");
    }
  });

  // Preencher as marcas automaticamente
  preencherMarcas("marca");
  preencherMarcas("marca-empresa");

  // Configurar dropdowns para Marca > Modelo > Ano
  configurarDropdowns("marca", "modelo", "ano");
  configurarDropdowns("marca-empresa", "modelo-empresa", "ano-empresa");
});

// ===================================================
// DADOS DE CARROS: Marca > Modelo > Ano
// ===================================================

const carros = {
  fiat: {
    "Uno": [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "Palio": [2018, 2019, 2020, 2021, 2022, 2023],
    "Siena": [2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "Mobi": [2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "Argo": [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "Cronos": [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "Toro": [2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "Strada": [2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "Fiorino": [2018, 2019, 2020, 2021, 2022, 2023],
    "Idea": [2018, 2019, 2020, 2021, 2022, 2023],
    "Punto": [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "Bravo": [2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "Weekend": [2018, 2019, 2020, 2021, 2022, 2023],
    "Doblò": [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
  },
  volkswagen: {
    "Gol": [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "Fox": [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "Voyage": [2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "Polo": [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "Virtus": [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "Saveiro": [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "T-Cross": [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "Jetta": [2018, 2019, 2020, 2021, 2022, 2023],
    "Amarok": [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "Tiguan": [2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "Golf": [2018, 2019, 2020, 2021, 2022, 2023],
    "Passat": [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "CrossFox": [2018, 2019, 2020, 2021, 2022, 2023],
    "Up!": [2018, 2019, 2020, 2021, 2022, 2023],
  },
  chevrolet: {
    "Onix": [2018, 2019, 2020, 2021, 2022, 2023],
    "Onix Plus": [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "Prisma": [2018, 2019, 2020, 2021, 2022, 2023],
    "Celta": [2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "Corsa": [2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "Cruze": [2018, 2019, 2020, 2021, 2022, 2023],
    "Tracker": [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "Spin": [2018, 2019, 2020, 2021, 2022, 2023],
    "Montana": [2018, 2019, 2020, 2021, 2022, 2023],
    "S10": [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "Equinox": [2018, 2019, 2020, 2021, 2022, 2023],
    "Captiva": [2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "Meriva": [2018, 2019, 2020, 2021, 2022, 2023],
    "Zafira": [2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "Agile": [2018, 2019, 2020, 2021, 2022, 2023],
  },
  ford: {
    "Ka": [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "Fiesta": [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "Focus": [2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "EcoSport": [2018, 2019, 2020, 2021, 2022, 2023],
    "Ranger": [2018, 2019, 2020, 2021, 2022, 2023],
    "Fusion": [2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "Edge": [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "Ka Sedan": [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "Courier": [2017, 2018, 2019, 2020, 2021, 2022, 2023],
  },
  hyundai: {
    "HB20": [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "HB20S": [2018, 2019, 2020, 2021, 2022, 2023],
    "Creta": [2018, 2019, 2020, 2021, 2022, 2023],
    "Tucson": [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "ix35": [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "Santa Fe": [2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "Elantra": [2018, 2019, 2020, 2021, 2022, 2023],
    "Azera": [2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "Veloster": [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
  },
  toyota: {
    "Corolla": [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "Corolla Cross": [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "Etios": [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "Etios Sedan": [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "Hilux": [2018, 2019, 2020, 2021, 2022, 2023],
    "SW4": [2018, 2019, 2020, 2021, 2022, 2023],
    "Yaris": [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "Yaris Sedan": [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "Camry": [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "Prius": [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "RAV4": [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
  },
  honda: {
    "Civic": [2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "Fit": [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "City": [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "HR-V": [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "WR-V": [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "Accord": [2018, 2019, 2020, 2021, 2022, 2023],
  },
  renault: {
    "Kwid": [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "Sandero": [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "Logan": [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "Duster": [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "Captur": [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "Oroch": [2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "Fluence": [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "Symbol": [2017, 2018, 2019, 2020, 2021, 2022, 2023],
  },
  peugeot: {
    "206": [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "207": [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "208": [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "2008": [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "3008": [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "308": [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "408": [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "Partner": [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "Hoggar": [2018, 2019, 2020, 2021, 2022, 2023],
  },
  citroen: {
    "C3": [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "C3 Aircross": [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "C4": [2018, 2019, 2020, 2021, 2022, 2023],
    "C4 Lounge": [2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "C4 Picasso": [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "Berlingo": [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "Aircross": [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
  },
  jeep: {
    "Renegade": [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "Compass": [2018, 2019, 2020, 2021, 2022, 2023],
    "Commander": [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "Cherokee": [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "Grand Cherokee": [2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "Wrangler": [2018, 2019, 2020, 2021, 2022, 2023],
    "Gladiator": [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
  },
  nissan: {
    "March": [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "Versa": [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "Kicks": [2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "Sentra": [2018, 2019, 2020, 2021, 2022, 2023],
    "Frontier": [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "Altima": [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "X-Trail": [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
  },
  chery: {
    "QQ": [2018, 2019, 2020, 2021, 2022, 2023],
    "Tiggo 2": [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "Tiggo 3X": [2018, 2019, 2020, 2021, 2022, 2023],
    "Tiggo 5X": [2018, 2019, 2020, 2021, 2022, 2023],
    "Tiggo 7": [2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "Tiggo 8": [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "Arrizo 5": [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "Arrizo 6": [2017, 2018, 2019, 2020, 2021, 2022, 2023],
  },
  mitsubishi: {
    "L200": [2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "ASX": [2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "Pajero": [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "Outlander": [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
  },
  kia: {
    "Picanto": [2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "Cerato": [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "Sportage": [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "Soul": [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
  },
  mercedes: {
    "Classe A": [2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "Classe C": [2018, 2019, 2020, 2021, 2022, 2023],
    "Classe E": [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "GLA": [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "GLC": [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
  },
  bmw: {
    "Série 1": [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "Série 3": [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "Série 5": [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "X1": [2018, 2019, 2020, 2021, 2022, 2023],
    "X3": [2017, 2018, 2019, 2020, 2021, 2022, 2023],
  },
  audi: {
    "A1": [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "A3": [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "A4": [2018, 2019, 2020, 2021, 2022, 2023],
    "Q3": [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    "Q5": [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
  },
};

// ===================================================
// FUNÇÕES AUXILIARES
// ===================================================

// Preencher marcas no campo de seleção
function preencherMarcas(selectId) {
  const select = document.getElementById(selectId);
  if (!select) return;

  for (const marca in carros) {
    const option = document.createElement("option");
    option.value = marca;
    option.textContent = marca.charAt(0).toUpperCase() + marca.slice(1);
    select.appendChild(option);
  }
}

// Configurar relacionamento entre marca > modelo > ano
function configurarDropdowns(marcaId, modeloId, anoId) {
  const marca = document.getElementById(marcaId);
  const modelo = document.getElementById(modeloId);
  const ano = document.getElementById(anoId);

  if (!marca || !modelo || !ano) return;

  marca.addEventListener("change", () => {
    const marcaSelecionada = marca.value;
    modelo.innerHTML = "<option value=''>Selecione o modelo</option>";
    ano.innerHTML = "<option value=''>Selecione o modelo primeiro</option>";
    ano.disabled = true;

    if (carros[marcaSelecionada]) {
      modelo.disabled = false;
      for (const nomeModelo in carros[marcaSelecionada]) {
        const option = document.createElement("option");
        option.value = nomeModelo;
        option.textContent = nomeModelo;
        modelo.appendChild(option);
      }
    } else {
      modelo.disabled = true;
    }
  });

  modelo.addEventListener("change", () => {
    const marcaSelecionada = marca.value;
    const modeloSelecionado = modelo.value;
    ano.innerHTML = "<option value=''>Selecione o ano</option>";

    if (carros[marcaSelecionada] && carros[marcaSelecionada][modeloSelecionado]) {
      ano.disabled = false;
      carros[marcaSelecionada][modeloSelecionado].forEach((anoValor) => {
        const option = document.createElement("option");
        option.value = anoValor;
        option.textContent = anoValor;
        ano.appendChild(option);
      });
    } else {
      ano.disabled = true;
    }
  });
}

// Captura do formulário
const form = document.getElementById("form-contato");
const modalSucesso = document.getElementById("modal-sucesso");
const btnVoltar = document.getElementById("btn-voltar");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (form.checkValidity()) {
    modalSucesso.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
    form.reset();

    // Resetar os campos dinâmicos
    document.getElementById("campos-empresa").classList.remove("show");
    document.getElementById("campos-individual").classList.remove("show");
  } else {
    form.reportValidity();
  }
});

btnVoltar.addEventListener("click", () => {
  modalSucesso.classList.add("hidden");
});
