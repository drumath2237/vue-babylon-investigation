import { Light, Scene } from "@babylonjs/core";
import { EventSystem } from "../utils/eventSystem";
import { inject, provide } from "vue";
import {
  babyuewSceneInjectionKey,
  babyuewLightInjectionKey,
} from "../data/injectionKeys";

export const useLight = (factory: (scene: Scene) => Light) => {
  const onInit = new EventSystem<Light>();
  let light: Light | undefined = undefined;
  provide(babyuewLightInjectionKey, { onInit, light });

  const babyuewScene = inject(babyuewSceneInjectionKey);
  babyuewScene?.onInit.addListener(() => {
    light = factory(babyuewScene.scene!);
    onInit.notify(light);
  });

  return {
    onInit,
    light,
  };
};
