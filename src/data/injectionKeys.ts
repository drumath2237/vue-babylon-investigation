import { InjectionKey } from "vue";
import { EventSystem } from "../utils/eventSystem";
import { Mesh, Material, Camera, Engine, Scene, Light } from "@babylonjs/core";

export interface BabyuewComponent<T> {
  onInit: EventSystem<T>;
}

export interface BabyuewSceneComponent
  extends BabyuewComponent<{
    scene?: Scene;
    engine?: Engine;
  }> {
  engine?: Engine;
  scene?: Scene;
}

export const babyuewSceneInjectionKey: InjectionKey<BabyuewSceneComponent> =
  Symbol("babyuew-scene-injection-key");

export interface BabyuewMeshComponent extends BabyuewComponent<Mesh> {
  getMesh: () => Mesh | null;
}

export const babyuewMeshInjectionKey: InjectionKey<BabyuewMeshComponent> =
  Symbol("babyuew-mesh-injection-key");

export interface BabyuewMaterialComponent extends BabyuewComponent<Material> {
  material?: Material;
}

export const babyuewMaterialInjectionKey: InjectionKey<BabyuewMaterialComponent> =
  Symbol("babyuew-material-injection-key");

export interface BabyuewCameraComponent extends BabyuewComponent<Camera> {
  camera?: Camera;
}

export const babyuewCameraInjectionKey: InjectionKey<BabyuewCameraComponent> =
  Symbol("babyuew-camera-injection-key");

export interface BabyuewLightComponent extends BabyuewComponent<Light> {
  light?: Light;
}

export const babyuewLightInjectionKey: InjectionKey<BabyuewLightComponent> =
  Symbol("babyuew-light-injection-key");
