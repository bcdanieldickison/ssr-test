# SSR v-bind bug demo

Demonstrates a possible bug in Vue's SSR with `v-bind` in SFC styles in dev mode.

When running inside of the vite dev server with `ssrLoadModule`, `v-bind` inside of a `<style scoped>` fail when referencing an `import`-ed object from the `<script setup>` block. Simply assigning the object to a new `const` at the script scope works around the issue. 

```
$ npm run test
/Users/daniel/bc/src/ssr-test/src/App.vue:26
    "--7a7a37b1-Color\\.red": $setup.Color.red
                                           ^

TypeError: Cannot read properties of undefined (reading 'red')
```

See [App.vue](src/App.vue) for demo code.
