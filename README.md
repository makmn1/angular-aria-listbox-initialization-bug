# VitestAngularHostDirectiveUndefined

A bug with Angular Aria's Listbox when used as a host directive and tested with Vitest.

Simply run `npm install` and then `ng test` to see the following error:

```bash
FAIL   vitest-angular-host-directive-undefined  src/app/listbox-host/listbox-host.component.spec.ts [ src/app/listbox-host/listbox-host.component.spec.ts ]
ReferenceError: Cannot access 'ComboboxPopup' before initialization
 ❯ Combobox.<static_initializer> node_modules/@angular/aria/fesm2022/combobox.mjs:147:18
 ❯ node_modules/@angular/aria/fesm2022/combobox.mjs:1:1
 ❯ src/app/listbox-host/listbox-host.component.ts:2:1
```

The example without Listbox in `app/src/demo-host` works fine. The issue is in `app/src/listbox-host`.

## Note
The original error I got was more vague, probably because I was testing with Vitest and Playwright instead of Jsdom:

```bash
Error: Failed to import test file C:/Users/makmn/IdeaProjects/simply-material/simply-material/projects/components/src/lib/buttons/button-group/button-group-selection.spec.ts
Caused by: TypeError: Cannot read properties of undefined (reading 'directive')
 ❯ <static_initializer> spec-button-group-selection.js:845:42
```
