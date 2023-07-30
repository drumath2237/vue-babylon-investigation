import { Mesh } from "@babylonjs/core";
import { EventSystem } from "../utils/eventSystem";
import { inject, onMounted, provide } from "vue";
import { BabylonSceneInjectionKey } from "../components/babylonScene.vue";
import { babyuewMeshInjectionKey } from "../data/injectionKeys";

export const useMesh = (meshFactory: () => Mesh) => {
  const onInit = new EventSystem<Mesh>();
  let mesh: Mesh | undefined = undefined;
  provide(babyuewMeshInjectionKey, { onInit, mesh });

  onMounted(() => {
    const babyuewScene = inject(BabylonSceneInjectionKey);
    if (!babyuewScene) {
      return;
    }

    babyuewScene.onInit.addListener(() => {
      const createdMesh = meshFactory();
      mesh = createdMesh;
      onInit.notify(createdMesh);
    });
  });

  return {
    onInit,
  };
};
