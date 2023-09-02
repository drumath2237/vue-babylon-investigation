import { Mesh } from "@babylonjs/core";
import { EventSystem } from "../../utils/eventSystem";
import { inject, provide } from "vue";
import {
  babyuewMeshInjectionKey,
  babyuewSceneInjectionKey,
} from "../../data/injectionKeys";

export const createMeshComponentCore = (meshFactory: () => Mesh) => {
  const onInit = new EventSystem<Mesh>();
  let mesh: Mesh | null = null;

  const getMesh = () => mesh;

  provide(babyuewMeshInjectionKey, {
    onInit,
    getMesh,
  });

  const babyuewScene = inject(babyuewSceneInjectionKey);
  babyuewScene?.onInit.addListener(() => {
    mesh = meshFactory();
    onInit.notify(mesh);
  });

  return {
    onInit,
    getMesh,
  };
};
