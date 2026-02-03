# Manifesto InfoBIM

<div align="center">
<pre>
  _____        __      ____ _____ __  __
 |_   _|      / _|    |  _ \_   _|  \/  |
   | |  _ __ | |_ ___ | |_) || | | \  / |
   | | | '_ \|  _/ _ \|  _ < | | | |\/| |
  _| |_| | | | || (_) | |_) || |_| |  | |
 |_____|_| |_|_| \___/|____/_____|_|  |_|
 <br />
BIM on the inside, drawings on the outside, data for everyone.

</pre>
</div>

[![License](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](http://creativecommons.org/licenses/by/4.0/)

🇺🇸 [English Version](../MANIFESTO.md)
## BIM por dentro, 2D por fora, dados para todo mundo

### Prefácio
Este documento é um manifesto, não um edital, não um artigo, não uma briga de internet.
Ele nasce de um fato recorrente: projetos “BIM” que, no momento do aceite, viram “PDF com sentimento”.

A entrega em **PDF/DWG é inegociável** hoje.
Beleza.
O erro não é gerar prancha.
O erro é tratar a prancha como **fonte de verdade** e o modelo como **adereço contratual**.

O InfoBIM existe para operar no mundo real: entregar o que o mercado exige, sem abrir mão do que o BIM oferece.

---

## 1. O problema que ninguém quer encarar
1. O contrato diz BIM.
2. A equipe entrega modelo, estrutura, coordenação, informação.
3. O aceite valida só pranchas em PDF.
4. O modelo (IFC ou nativo) vira figurante.
5. O melhor do trabalho apodrece num HD.

Isso cria um incentivo perverso:
- quem faz informação perde tempo;
- quem finge que fez informação ganha igual;
- quem tem a caneta continua decidindo por “imagem”.

---

## 2. Diagnóstico sem briga
Não adianta brigar com o mercado. Ele não vai mudar porque você está certo.
E outra: BIM nunca foi “anti-2D”.

O BIM é processo:
- colaboração,
- padronização,
- estruturação de dados,
- rastreabilidade,
- automação.

A prancha é um produto final possível.
Só não pode ser o centro do universo.

**Regra de ouro:**
- **Modelo é motor.**
- **Prancha é interface.**

---

## 3. O agora: IA, agentes e por que o caos vai ficar mais caro
O avanço de IA no trabalho com BIM não vai premiar “quem desenha bonito”.
Vai premiar **quem tem fluxo e dados**.

Agentes, copilotos e automações só funcionam quando existe:
- fonte de verdade definida,
- dados estruturados e acessíveis,
- histórico e rastreabilidade,
- contratos claros de entrada e saída.

Sem isso, a IA vira “leitor de PDF” com confiança indevida.
IA não faz milagre.
IA é multiplicador.
Multiplica ordem ou multiplica bagunça.

---

## 4. Princípios do InfoBIM
1. **BIM é processo, não arquivo.**
2. **Entrada pode ser suja. O núcleo precisa ser limpo.**
3. **Saída pode ser “burra”. O núcleo precisa ser inteligente.**
4. **Quem não modela ainda assim participa do contexto do projeto.**
5. **PDF/DWG continuam existindo, mas como derivação automática.**
6. **Consulta é a porta de entrada para quem só conhece prancha.**
7. **Automação não é “luxo”. É sobrevivência.**

---

## 5. A proposta: Entrada não parametrizada → Núcleo parametrizado → Saída não parametrizada

### 5.1 Entrada não parametrizada (mundo real)
Entra o que existe:
- DWG
- PDF
- planilhas
- textos
- fotos
- relatórios legados
- “memoriais que nasceram no caos”

Nada disso é proibido.
Nada disso é ignorado.
Tudo isso precisa atravessar o núcleo.

### 5.2 Núcleo parametrizado (onde o BIM acontece de verdade)
Aqui a informação vira adulta:
- padroniza e organiza,
- estrutura e classifica,
- consolida dados de várias origens,
- cria rastreabilidade,
- habilita automação,
- prepara consulta.

O núcleo não é “um arquivo”.
É um **contexto de dados**.

### 5.3 Saída não parametrizada (o que o mercado quer)
Sai o que o mundo exige:
- pranchas em PDF
- DWGs
- relatórios e anexos

Só que gerados **automaticamente** a partir do núcleo.
PDF deixa de ser “origem”.
Vira “export”.

---

## 6. Um detalhe decisivo: dados de quem não trabalha no modelo também entram
Nem todo dado nasce dentro do BIM.
Mas todo dado que importa precisa terminar dentro do mesmo contexto.

Exemplos de dados que geralmente ficam “fora”:
- planilhas de levantamento
- critérios normativos aplicados
- checklists
- registros de decisão
- listas de pendência
- quantidades revisadas
- pareceres

Se esses dados não entram no núcleo, o projeto vira dois mundos paralelos:
- mundo do modelo
- mundo do PDF/planilha

E aí o BIM perde justamente o que ele tem de melhor: consistência e automação.

---

## 7. Consulta: como trazer quem está fora para perto sem evangelização
A maioria das pessoas não vai virar modelador.
E nem precisa.

O primeiro degrau de adoção é permitir que a pessoa:
- **pergunte** sobre o projeto
- **ache** respostas consistentes
- **compare** revisões e mudanças
- **extraia** informação sem virar “arqueólogo de PDF”

Consulta é a ponte:
- A pessoa começa no conforto da prancha,
- e descobre que perguntas respondidas por dados são melhores que “caça ao detalhe”.

PDF é ótimo para assinar e arquivar.
É péssimo para perguntar.

---

## 8. O núcleo open source do InfoBIM
O **InfoBIM Core** é open source por necessidade técnica, não por ideologia.

Motivos práticos:
- para qualquer equipe poder usar o núcleo;
- para qualquer pessoa contribuir com o que já fez;
- para evitar reinvenção de roda em mil empresas;
- para criar um contrato comum e reutilizável;
- para dar base a automação e agentes.

Onde isso vive primeiro:
- repositório no GitHub
Depois, versões congeladas e citáveis:
- DOI no Zenodo

---

## 9. De “scripts soltos” para “capacidades catalogadas”
Script solto é útil para quem escreveu.
Ecossistema útil precisa de catálogo e contrato.

No InfoBIM, a unidade mínima é uma **capability** (capacidade), com:
- `id` e `version`
- `inputs` e `outputs` declarados
- pré-condições (ex.: IFC4, unidades, estrutura)
- efeitos (o que altera / o que gera)
- limites (o que não faz)
- metadados (autor, licença, tags)

### 9.1 O Catálogo
O catálogo permite descobrir capacidades por intenção:
- “gerar pranchas 2D”
- “normalizar propriedades”
- “extrair quantitativos”
- “validar consistência”
- “converter formatos”
- “comparar revisões”

### 9.2 O Runtime (executor)
Um executor comum garante que capacidade rode de forma reproduzível:
- local
- container
- CI
- servidor

Com logs e artefatos rastreáveis.

---

## 10. API e MCP: ferramentas para humanos e para agentes
O núcleo precisa ser consumível de dois jeitos:
- **API**: integrações clássicas (sistemas, front-ends, pipelines)
- **MCP**: integração padronizada para agentes e clientes de IA

A separação é simples:
- **Resources**: contexto (modelos, metadados, estados, schemas)
- **Tools**: ações (rodar checagem, gerar prancha, extrair dados, converter)

Isso permite:
- um agente descobrir capacidades,
- executar de forma consistente,
- e usar o mesmo núcleo em vários projetos.

---

## 11. O que o InfoBIM não é
- não é “mais um visualizador”
- não é “um template mágico”
- não é “evangelização de IFC”
- não é “guerra contra PDF”

É engenharia de processo.
É infraestrutura de informação.

---

## 12. Chamado à ação
Se você já tem scripts que fazem coisas úteis, você não tem “script”.
Você tem uma capacidade.
E capacidades precisam ser:
- encontráveis,
- executáveis,
- auditáveis,
- integráveis.

A proposta é simples:
- pare de tentar convencer quem não quer,
- construa um fluxo onde o BIM acontece por gravidade,
- entregue PDF/DWG como derivação,
- mantenha o núcleo como fonte de verdade,
- e abra o ecossistema para contribuição.

O mercado pode continuar assinando PDF.
A diferença é que agora o PDF sai de um sistema que presta.

---

## Apêndice A — Estrutura sugerida do repositório
- `MANIFEST.md`: A constituição do projeto, contendo os princípios e visão.
- `catalog/`: O "coração" do sistema, onde vivem as definições.
  - `capabilities/`: Definições individuais de capacidades (YAML/JSON) descrevendo inputs, outputs e lógica.
- `runtime/`: Código que executa as capabilities (o motor que processa os dados).
- `api/`: Pontos de entrada para integração via REST/GraphQL para sistemas legados.
- `mcp-server/`: Servidor do Model Context Protocol para conectar com IAs e Agentes.
- `examples/`: Projetos de referência mostrando como usar o núcleo na prática.
- `docs/`: Documentação técnica, tutoriais e guias de implementação.
- `LICENSE`: Termos legais de uso.
- `CONTRIBUTING.md`: Guia de como a comunidade pode colaborar (PRs, issues, padrões).
- `CODE_OF_CONDUCT.md`: Regras de convivência da comunidade (opcional).

---

## Apêndice B — Licença
Para o texto do manifesto:
- **CC BY 4.0** (permite uso e remix com crédito)

Para código:
- **Apache-2.0** (boa para ecossistema e contribuições)

Licença é política pública de longo prazo.

---

## Apêndice C — Como Citar
Se você usar o InfoBIM Core ou derivar deste manifesto, por favor cite:

> **InfoBIM Core** (2026). *Manifesto InfoBIM: BIM por dentro, 2D por fora, dados para todo mundo*. Disponível em: [URL do repositório].

Ou em BibTeX:

```bibtex
@misc{infobim2025manifesto,
  author = {Comunidade InfoBIM},
  title = {Manifesto InfoBIM: BIM por dentro, 2D por fora, dados para todo mundo},
  year = {2026},
  url = {https://github.com/InfoBIM-Community},
  note = {Acessado em: [data]}
}
```

---

