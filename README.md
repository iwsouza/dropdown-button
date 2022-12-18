# Dropdown para cima e para baixo

<div align="center">
<img src="https://i.imgur.com/dwF4EyJ.gif" alt="Preview do projeto" width="40%"/>
</div>

<p align="center">Segue no <a href="https://instagram.com/iwsouza" target="_blank">insta</a> pra mais dicas</p>

### <p align="center"> 🧪 Veja a <a href="https://dropdown-button.vercel.app/" target="_blank">demonstração aqui</a></p>

## 🚀 Começando

- É só dar um fork no repo e usar ♡
- Com TypeScript o/

## 📋 Pré-requisitos

- Instalar o Phospor-icons para o ícone

  - Ou use a lib de ícone de sua preferência

- Instalar styled-components

```
yarn add phospor-icons styled-components
```

## 🔧 Como implementar

Parâmetros

```ts
  // Obrigatórios
  name: string;
  variant: 'up' | 'down';
  items: {
    id: string | number;
    name: string;
    handle?: () => void;
    subItems?: {
      id: string | number;
      name: string;
      handle: () => void;
    }[];
  }[];

  // Não obrigatório
  theme?: 'light' | 'dark'; //default dark
```

```jsx
<DropdownButton name="Ações" variant="down" theme="light" items={list} />
```

## ✒️ Suporte

- **Wesley Souza** - _Full Stack Dev_ - [iwsouza](https://github.com/iwsouza)
