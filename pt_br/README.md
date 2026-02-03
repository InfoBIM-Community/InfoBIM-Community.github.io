<div>
  <div style="display: inline-block; vertical-align: middle;" width="100">
    <img src="https://avatars.githubusercontent.com/u/252078843" width="100" alt="InfoBIM Logo" />
  </div>
  <div style="display: inline-block; vertical-align: middle; margin-left: 10px;">
    <h1 style="margin: 0; border-bottom: none;">BIM por dentro, 2D por fora, dados para todo mundo.</h1>
  </div>
</div>

[![License](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](http://creativecommons.org/licenses/by/4.0/)
![Status](https://img.shields.io/badge/Status-Development-yellow?style=for-the-badge)

> **"Se o aceite é PDF, o IFC vira adereço contratual."**

<div align="center">

### 📜 [Leia o Manifesto](./MANIFESTO.md)
**[🇺🇸 English Version](../README.md)**

</div>

---

## 1. O Choque de Realidade: "BIM de Fachada"

Em muitos projetos públicos e cenários reais, **a entrega em PDF/DWG é inegociável**.
O erro não é gerar prancha. O erro é tratar a prancha como **fonte de verdade** e o modelo como adereço contratual.

*   **O Problema**: A equipe entrega modelos, coordenação e dados, mas o rito de aceite valida apenas o PDF.
*   **A Consequência**: O BIM vira "CAD gourmet". Modelos ricos apodrecem em HDs enquanto decisões são tomadas sobre imagens estáticas.
*   **O Risco**: Na era da IA, validar projetos via PDF torna-os "invisíveis" para agentes que poderiam otimizar custos e cronogramas.

**InfoBIM** existe para operar neste mundo real: entregando o que o mercado exige (PDFs/Desenhos) sem abrir mão do que o século 21 permite (Dados/BIM).

> **"O PDF não invalida o BIM; ele só invalida o fetiche."**

---

## 2. A Solução: InfoBIM

**InfoBIM** é um hub operacional para **triagem, auditoria e execução** de dados BIM. Ele atua como uma ponte entre a realidade "suja" dos insumos de obra e os requisitos estruturados da gestão de dados.

### Princípios Fundamentais
1.  **BIM é Processo, não Arquivo**: O valor real está na colaboração e estruturação de dados.
2.  **Modelo é Motor, Prancha é Interface**: O modelo trabalha nos bastidores para gerar a documentação necessária.
3.  **Automação como Cola**: A padronização garante que o esforço de modelagem se pague.

### A Metodologia
1.  **Entrada (Mundo Real)**: Aceita dados "sujos" ou não parametrizados (DWG, PDF, planilhas legadas).
2.  **Núcleo (A Verdade)**: Dados são estruturados, classificados e auditados. **O modelo é o motor.**
3.  **Saída (O Mercado)**: Gera automaticamente o que o contrato exige (pranchas PDF) *derivadas* do modelo, mais dados estruturados (IFC/API) para quem já tem maturidade para consumir.

---

## 3. A Arquitetura Híbrida: TUI + Infra + IA

O projeto consolida ferramentas dispersas em uma arquitetura coerente que une três mundos:

### 🏃 A Interface Humana (TUI)
Construída sobre **Textual** e **Rich**. Rápida, leve e focada em produtividade.
*   **Triagem & Navegação**: Escaneamento automático de diretórios e filtragem de IFC.
*   **Inspeção**: Relatórios técnicos dinâmicos renderizados via Jinja2.
*   **Feedback Visual**: `print_message_box`, cores semânticas e progresso em tempo real.

### 🏗️ Infraestrutura como Produto
O **InfoBIM Infrastructure Stack** garante que o software rode em qualquer lugar.
*   **Padronização Radical**: Docker e estruturas de pastas rígidas (`stack/`, `data/`) eliminam o "na minha máquina funciona".
*   **Check & Repair**: O sistema se autodiagnostica (`./infobim check`).
*   **Prompt as Code (PEaC)**: Instruções para IAs são versionadas (`stack/prompts/`), garantindo que agentes automatizados sigam as mesmas regras de negócio que humanos.

### 🧠 O Cérebro Artificial (LLM como Planejador)
*   **LLM Planeja, Não Executa**: Uma IA não "chuta" a área do telhado. Ela entende a pergunta e chama um **script determinístico**.
*   **Auditável**: O cálculo real é feito por código Python/OntoBDC.
*   **Multilíngue**: Pergunte em Português, Inglês, Espanhol ou Francês; o sistema traduz a intenção para comandos técnicos.

---

## 4. Arquitetura & Fluxo de Dados

### Camadas
1.  **Apresentação (TUI)**: Gerencia entrada/saída e telas.
2.  **Adaptadores**: A ponte entre CLI/TUI e o Núcleo.
3.  **Domínio (OntoBDC)**: O motor de regras de negócio BIM e camada de persistência.
4.  **Infraestrutura**: Scripts Bash e Docker.

### Event Sourcing
Ao contrário de sistemas que dependem de comparação de arquivos (IFC diffs), o InfoBIM foca na **rastreabilidade de ações**. Cada operação (importar, corrigir, exportar) é um evento registrado, permitindo auditoria objetiva: *"Quem fez o quê, quando e com quais parâmetros?"*

---

## 5. Prévia

<table>
<tr>
<td width="50%">
<a href="">
<img src="../docs/images/menu-preview.png" alt="InfoBIM CLI Menu Principal" />
</a>
</td>
<td width="50%">
<a href="">
<img src="../docs/images/report-preview.png" alt="Detalhes do Arquivo IFC" />
</a>
</td>
</tr>
<tr>
<td align="center"><b>Menu Principal</b><br/>O hub central para triagem e navegação.</td>
<td align="center"><b>Detalhes do Arquivo IFC</b><br/>Inspeção estruturada e relatórios.</td>
</tr>
</table>

---

## 6. Como Rodar

A ferramenta foi projetada para rodar em containers.

### Pré-requisitos
- Docker Engine & Docker Compose

### Comandos
```bash
# Instalar e verificar ambiente
./infobim install
./infobim check

# Iniciar a CLI Interativa
./infobim ifc
```

---

## 7. Modelo de Distribuição

*   **Local (Open Source)**: Para usuários técnicos. Requer Docker. Gratuito e ilimitado.
*   **Provedor (API)**: Para o mercado AECO geral. Usuários acessam via API/Web gerenciada por um provedor, eliminando atrito de infraestrutura.

---

## Licença

Este projeto está licenciado sob a **Apache License 2.0**. Veja o arquivo [LICENSE](../LICENSE) para detalhes.

<div align="center">
  <b>Orgulhosamente desenvolvido no Brasil 🇧🇷, por enquanto</b>
</div>
