import { Light } from "@babylonjs/core";
import { EventSystem } from "../utils/eventSystem";
import { inject, provide } from "vue";
import {
  BabyuewSceneInjectionKey,
  babyuewLightInjectionKey,
} from "../data/injectionKeys";

export const useLight = (factory: () => Light) => {
  const onInit = new EventSystem<Light>();
  let light: Light | undefined = undefined;
  provide(babyuewLightInjectionKey, { onInit, light });

  const babyuewScene = inject(BabyuewSceneInjectionKey);
  babyuewScene?.onInit.addListener(() => {
    light = factory();
    onInit.notify(light);
  });

  return {
    onInit,
    light,
  };
};
