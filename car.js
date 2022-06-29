AFRAME.registerComponent('car-model', {
    schema: {
      modelRef: {type: "string", default: "../asessts/old_rusty_car/scene.gltf"}
    },
    init: function () {
        this.el.setAttribute("gltf-model", this.data.modelRef);
        const position = {x:0, y:15, z:80};
        const rotation = {x:0, y:-90, z:0};
        this.el.setAttribute("position", position);
        this.el.setAttribute("rotation", rotation);
      }
  });