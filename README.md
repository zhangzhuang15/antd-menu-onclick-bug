# antd-menu-onclick-bug
report a bug that antd menu doesn't invoke onClick as expected

## Reproduct
1. `pnpm i`
2. `pnpm run dev`
3. click any menu item, take a look at console, and there's no message.
4. if we remove `children` property in menuItem, `onClick` is invoked as expected.