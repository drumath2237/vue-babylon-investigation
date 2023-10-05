import { Scene } from "@babylonjs/core";
import { shallowReadonly, shallowRef, watch } from "vue";

const babyuewScene = shallowRef<Scene | null>(null);

type SceneFunc = (scene: Scene) => void;
const initCallbacks = Array<SceneFunc>();

/**
 * a composable for scene
 * @returns tools for treat scene
 */
export const useBabyuewScene = () => {
  const onSceneInit = (callback: SceneFunc) => {
    if (babyuewScene.value === null) {
      initCallbacks.push(callback);
      return;
    }

    callback(babyuewScene.value);
  };

  const initScene = (scene: Scene) => {
    if (babyuewScene.value !== null) {
      console.error("scene has already inited");
      return;
    }

    babyuewScene.value = scene;
  };

  const forceReplaceScene = (scene: Scene) => {
    babyuewScene.value = scene;
  };

  const readonlyScene = shallowReadonly(babyuewScene);

  watch(readonlyScene, (scene) => {
    if (scene) {
      initCallbacks.forEach((cb) => {
        cb(scene);
      });
    }
  });

  return {
    initScene,
    forceReplaceScene,
    babyuewScene: readonlyScene,

    /**
     * init event callback
     * @param callback function called when the scene inited
     */
    onSceneInit,
  };
};
