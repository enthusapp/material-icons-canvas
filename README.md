# material-icons-canvas
Draw material icons on canvas

### install
```
yarn add git+https://github.com/enthusapp/material-icons-canvas
```

### Usage
```JS
import { icons, drawMaterialIcons } from "material-icons-canvas";

drawMaterialIcons(canvas.getContext("2d"), icons.cloud, {
  x: 0,
  y: 0,
  width: 100,
  height: 100,
  color: "#00ff00"
});
```

### create icons.js

copy https://github.com/google/material-design-icons, then

```
node createSVGSet.js
```

