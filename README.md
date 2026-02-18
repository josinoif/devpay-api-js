# devpay-api-js

Projeto Node.js de exemplo para demonstrar **Integração Contínua (CI)** com GitHub Actions.

Corresponde ao **Bloco 2 — Integração Contínua** do material de DevOps: pipeline com checkout → setup Node → `npm ci` → lint → build → test.

## Estrutura

```
devpay-api-js/
├── package.json
├── src/
│   └── index.js      # Módulo com applyRate e isValidEmail
├── test/
│   └── index.test.js # Testes Jest
├── .eslintrc.js
└── .github/
    └── workflows/
        └── ci.yml    # Pipeline CI
```

## Executar localmente

```bash
npm ci
npm run lint
npm run build
npm test
```

## Pipeline (GitHub Actions)

O workflow `.github/workflows/ci.yml` roda a cada **push** e **pull request** na branch `main`:

1. Checkout do código
2. Setup Node.js 20 (com cache npm)
3. `npm ci` — instalação reprodutível
4. Lint (ESLint em `src/`)
5. Build
6. Testes (Jest)

Se qualquer etapa falhar, o pipeline falha.
