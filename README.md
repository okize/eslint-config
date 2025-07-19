# eslint-config
My preferred eslint rules bundled into composable configs

## Peer Dependencies

### Required
- **ESLint** `>= 9` - Required for all configurations

### Optional
- **TypeScript** `>= 5` - Required when using `@okize/eslint-config/typescript`
- **Storybook** `>= 8` - Required when using `@okize/eslint-config/storybook`

## Usage

Install the package and required peer dependencies:

```bash
npm install --save-dev @okize/eslint-config eslint

# If using TypeScript:
npm install --save-dev typescript

# If using Storybook:
npm install --save-dev storybook
```

Then extend the appropriate configurations in your `eslint.config.js`:

```javascript
import js from '@okize/eslint-config/javascript'
import typescript from '@okize/eslint-config/typescript'
import storybook from '@okize/eslint-config/storybook'

export default [
  ...js,
  ...typescript, // if using TypeScript
  ...storybook,  // if using Storybook
]
```
