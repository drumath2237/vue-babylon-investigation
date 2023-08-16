import { Mesh } from "@babylonjs/core";
import { EventSystem } from "../utils/eventSystem";
import { inject, provide } from "vue";
import {
  babyuewMeshInjectionKey,
  BabyuewSceneInjectionKey,
} from "../data/injectionKeys";

export const useMesh = (meshFactory: () => Mesh) => {
  const onInit = new EventSystem<Mesh>();
  let mesh: Mesh | undefined = undefined;
  provide(babyuewMeshInjectionKey, { onInit, mesh });

  const babyuewScene = inject(BabyuewSceneInjectionKey);
  babyuewScene?.onInit.addListener(() => {
    mesh = meshFactory();
    onInit.notify(mesh);
  });

  return {
    onInit,
    mesh,
  };
};
