# eruda-ume

## 快速使用

```js
import { ErudaUmePlugin } from "eruda-ume";

if (window.eruda) {
  window.eruda.init({
    tool: ["console", "network", "info"],
  });
  window.eruda.add(ErudaUmePlugin);
  let ume = eruda.get("ume");
  ume.addAction([{ key: "token", value: "xxx" }, { key: "用户信息", value: "{a: 123}" }]);

}
```

## 规划中

- [ ] 查看 saveData 的数据