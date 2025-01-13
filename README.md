# @thefa/formation-tokens

This package contains design tokens for the Formation Design System

## Installation

Via NPM
```
npm install @thefa/formation-tokens
```

Via Yarn
```
yarn add @thefa/formation-tokens
```

Via CDN
```html
<link rel="stylesheet" href="//unpkg.com/@thefa/formation-tokens/1.0.0/formation.css" />
<link rel="stylesheet" href="//unpkg.com/@thefa/formation-tokens/1.0.0/themes/england-football.css" />
```

## Usage

This package adds Formation [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) to your `:root {}`.

When importing the package first import the base tokens and then make sure to specify which theme tokens you want to import.

### CSS
```css
@import "@thefa/formation-tokens/formation";
@import "@thefa/formation-tokens/themes/<theme>";
```

### JSX
```js
import '@thefa/formation-tokens/formation.css';
import "@thefa/formation-tokens/themes/<theme>.css";
```

All variables are prefixed with `fds`.

```css
.selector {
  color: var(--fds-text-general-headline-dark-text);
}
```

Themes currently available:

- `base` (Brand agnostic - for prototyping)
- `fa`
- `england-football`
- `england-teams`