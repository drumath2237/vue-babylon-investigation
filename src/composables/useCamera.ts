import { Camera } from "@babylonjs/core";
import { EventSystem } from "../utils/eventSystem";
import { inject, provide } from "vue";
import {
  babyuewCameraInjectionKey,
  babyuewSceneInjectionKey,
} from "../data/injectionKeys";

export const useCamera = (cameraFactory: () => Camera) => {
  const onInit = new EventSystem<Camera>();
  let camera: Camera | undefined = undefined;
  provide(babyuewCameraInjectionKey, { onInit, camera });

  const injectedScene = inject(babyuewSceneInjectionKey);
  injectedScene?.onInit.addListener(() => {
    const createdCamera = cameraFactory();
    camera = createdCamera;
    onInit.notify(camera);
  });

  return { onInit, camera };
};
