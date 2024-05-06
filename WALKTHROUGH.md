# Walkthrough about how to implement tests

1. Install vitest `npm i vitest@latest`
2. Create a script to execute the tests on package.json `"test": "vitest"`
3. Create the file vitest.config.ts to define the setup tests
   3.1 Define the vite like globals. So It's not necessary import vitest's functions <br />

   ```
    import { defineConfig } from "vitest/config"

    export default defineConfig({
        test: {
            globals: true,
        },
    })
   ```

   3.2 It's necessary add configs for typescript integrate with vitest. Add the code below in tsconfig.json <br />

   ```
    "types": ["vitest/globals"]
   ```

4. Install @testing-library to enable making tests using react `npm install -D @testing-library/react`
5. Install a plugin to be possible to do assertions on DOM `npm install -D @testing-library/jest-dom`
6. Create a setup file to enable the config
   5.1 Create a folder named test with a file setup.ts
   5.2 Add testing library import
   ```
    import '@testing-library/jest-dom/vitest'
   ```
   5.3 Add config to vitest read the setup files on vitest.config.ts <br />
   ```
   setupFiles: ['./test/setup.ts']
   ```
7. Install happy-dom to simulate a browser `npm install happy-dom -D`
8. Add environment on vitest config
   ```
   environment: 'happy-dom'
   ```
9. Install library to management user's event `npm install -D @testing-library/user-event`
10. Install library to test some styles using styled-components `npm i -D jest-styled-components`
11. Add config to vitest read the setup files on vitest.config.ts <br />

```
import 'jest-styled-components'
```
