# Bem-vindo(a) ao InfoBIM
<div align="center">
  <pre>
  _____        __      ____ _____ __  __
 |_   _|      / _|    |  _ \_   _|  \/  |
   | |  _ __ | |_ ___ | |_) || | | \  / |
   | | | '_ \|  _/ _ \|  _ < | | | |\/| |
  _| |_| | | | || (_) | |_) || |_| |  | |
 |_____|_| |_|_| \___/|____/_____|_|  |_|
  </pre>
  <div style="display: inline-block; vertical-align: middle; margin-left: 10px;">
    <h1 style="margin: 0; border-bottom: none;">InfoBIM: o motor de capacidades para automação BIM</h1>
    <p style="margin: 4px 0 0 0; font-style: italic;">A interface entre dados BIM, engenheiros humanos e agentes de IA.</p>
  </div>
</div>

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
![Status](https://img.shields.io/badge/Status-Development-yellow?style=for-the-badge)

> **“Engenheiros focam no que importa; o runtime cuida do resto.”**

<div align="right">

**[🇺🇸 English Version](../README.md)**

</div>

---

## Visão geral

InfoBIM IFC é um ambiente modular de execução para automação de engenharia, projetado para reduzir o gap entre dados BIM estáticos e agentes de IA dinâmicos.

Em vez de tratar modelos BIM como arquivos passivos, o InfoBIM expõe **Capabilities** – pequenas unidades reutilizáveis de lógica de engenharia que podem ser orquestradas por humanos ou por agentes de IA.

---

## Interface para agentes: o protocolo de descoberta

InfoBIM é *agent‑friendly*. Ele fornece um catálogo de ferramentas legível por máquina, permitindo que LLMs entendam funções disponíveis e seus parâmetros sem alucinações.

Ao envolver o código com metadados, JSON Schemas e documentação, a lógica se torna descobrível e autoexplicativa.

Fluxo típico para agentes:

- `./infobim run --json` — retorna um catálogo em JSON das Capabilities disponíveis.
- O agente seleciona uma Capability e chama, por exemplo:  
  `./infobim run {capability_id} {ifc_file_path} --export json`.

Agentes não “chutam” geometria; eles chamam Capabilities que retornam resultados precisos.

---

## Detecção de interferências e conformidade

InfoBIM foca em verificações determinísticas e auditáveis para qualidade e conformidade de modelos BIM:

- **Regras baseadas em IDS** – suporte a arquivos IDS da buildingSMART para codificar requisitos como contratos legíveis por máquina.
- **Checagens orientadas a propriedades** – verificações agnósticas a software usando conjuntos de propriedades, com esquemas oficiais ou customizados.
- **Motor always‑on** – o motor pode rodar continuamente, aplicando normas de engenharia complexas sempre da mesma forma.
- **Engenheiro no comando** – a decisão final permanece com o engenheiro, que pode revisar ou refinar qualquer resultado.

---

## Relatórios descritivos automáticos

InfoBIM transforma relatórios descritivos em código.

As Capabilities geram seções em Markdown para cada capítulo da narrativa técnica diretamente a partir de modelos IFC – identificação do empreendimento, andares, ambientes e sistemas.

- **Memoriais mais rápidos** – identificação e contexto vêm diretamente dos IFCs como seções em Markdown prontas para uso.
- **Narrativa rastreável** – cada parágrafo é sustentado por Capabilities, permitindo rastrear cada afirmação até os dados de modelo.
- **Relatórios guiados por Capabilities** – seções são geradas por Capabilities em Markdown consistente, pronto para revisão humana.
- **Conhecimento reutilizável** – a lógica da narrativa vive em Capabilities e Usecases, não na cabeça de uma pessoa.

Agentes não escrevem memoriais do zero; eles chamam Capabilities que produzem blocos de Markdown verificáveis.

---

## Licenciamento e distribuição

InfoBIM IFC é **gratuito e open source**.

Você pode:

- **Rodar self‑hosted** – clonar o repositório no GitHub, configurar seus projetos e iniciar os serviços na sua própria infraestrutura.
- **Trabalhar com um implementador** – contar com um especialista que cuida de instalação, infraestrutura e suporte DevOps contínuo para a sua implantação.

---

## Comunidade

InfoBIM foi criado para colaboração. Participe da comunidade e compartilhe Capabilities, experimentos e receitas de automação IFC usadas em projetos reais.

- **GitHub** – código‑fonte, issues e exemplos de Capabilities: https://github.com/InfoBIM-Community
- **Discord** – canal em tempo real para discutir pipelines, normas e automação: https://discord.gg/j8zTsdBw
- **Blog** – artigos sobre automação IFC, Capabilities e projetos reais: https://blog.infobim.org

---

## Iniciando

A ferramenta foi projetada para rodar em contêineres.

### Pré‑requisitos

- Docker Engine
- Docker Compose

### Comandos

```bash
# Instalar e verificar o ambiente
./infobim install
./infobim check

# Iniciar a CLI interativa
./infobim ifc
```

---

## Licença

Este projeto é licenciado sob a **Apache License 2.0**. Veja o arquivo [LICENSE](../LICENSE) para mais detalhes.

<div align="center">
  <b>Orgulhosamente desenvolvido no Brasil 🇧🇷, por enquanto.</b>
</div>
