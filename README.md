# @thefa/formation-tokens-demo

**[ DEMO ]** This package allows you to import Formation design tokens into your project.

## Installation

```bash
# If you're using npm:
npm install --save @thefa/formation-tokens-demo

# OR If you're using yarn:
yarn add @thefa/formation-tokens-demo
```

You can also use the CSS files from Unpkg.

```html
<link rel="stylesheet" href="https://unpkg.com/@thefa/formation-tokens-demo@0.1.2/css/<theme>.css" />
```

## Usage

Tokens can be imported as [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) to your `:root {}`, SCSS variables, or as JSON.

All variables are prefixed with `fds`.

### CSS

To make use of the CSS variables, import them into your stylesheet like so:

```css
/* Inside css */
@import "@thefa/formation-tokens/css/<theme>.css";
```

```js
// For projects where you can import css files into JS
import "@thefa/formation-tokens/css/<theme>.css";
```

```css
.error {
  color: var(--fds-status-danger);
}
```

### SCSS

To make use of the scss variables, import them into your scss files like so:

```scss
@use "@thefa/formation-tokens/scss/<theme>";
```

```css
.error {
  color: $fds-status-danger;
}
```

#### Common JS module

```js
const formation = require('@thefa/formation-tokens/json/<theme>')

// Then use in code:
element.style.color = formation.status.danger
```

#### ES6 module

```js
import tokens from "@thefa/formation-tokens/json/<theme>";

// Then use in code:
element.style.color = formation.status.danger
```


## Themes

Themes currently available:

- `fa`
- `england-football`
- `england-teams`