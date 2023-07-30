import { Mesh } from "@babylonjs/core";
import { EventSystem } from "../utils/eventSystem";
import { inject, onMounted, provide } from "vue";
import { BabylonSceneInjectionKey } from "../components/babylonScene.vue";
import { babyuewMeshInjectionKey } from "../data/injectionKeys";

export const useMesh = (meshFactory: () => Mesh) => {
  const onInit = new EventSystem<Mesh>();
  provide(babyuewMeshInjectionKey, { onInit: onInit });

  onMounted(() => {
    const babyuewScene = inject(BabylonSceneInjectionKey);
    if (!babyuewScene) {
      return;
    }

    babyuewScene.onInit.addListener(() => {
      const mesh = meshFactory();
      onInit.notify(mesh);
    });
  });

  return {
    onInit,
  };
};
