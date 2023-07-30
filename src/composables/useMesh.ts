import { Mesh } from "@babylonjs/core";
import { EventSystem } from "../utils/eventSystem";
import { inject, provide } from "vue";
import { BabylonSceneInjectionKey } from "../components/babylonScene.vue";
import { babyuewMeshInjectionKey } from "../data/injectionKeys";

export const useMesh = (meshFactory: () => Mesh) => {
  const onInit = new EventSystem<Mesh>();
  let mesh: Mesh | undefined = undefined;
  provide(babyuewMeshInjectionKey, { onInit, mesh });

  const babyuewScene = inject(BabylonSceneInjectionKey);
  babyuewScene?.onInit.addListener(() => {
    const createdMesh = meshFactory();
    mesh = createdMesh;
    onInit.notify(createdMesh);
  });

  return {
    onInit,
    mesh,
  };
};
