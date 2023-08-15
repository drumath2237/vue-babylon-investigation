import { InjectionKey } from "vue";
import { EventSystem } from "../utils/eventSystem";
import { Mesh, Material, Camera, Engine, Scene } from "@babylonjs/core";

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

export const BabyuewSceneInjectionKey: InjectionKey<BabyuewSceneComponent> =
  Symbol("babyuew-scene-injection-key");

export interface BabyuewMeshComponent extends BabyuewComponent<Mesh> {
  mesh?: Mesh;
}

export interface BabyuewMaterialComponent extends BabyuewComponent<Material> {
  material?: Material;
}

export interface BabyuewCameraComponent extends BabyuewComponent<Camera> {
  camera?: Camera;
}

export const babyuewMeshInjectionKey: InjectionKey<BabyuewMeshComponent> =
  Symbol("babyuew-mesh-injection-key");

export const babyuewMaterialInjectionKey: InjectionKey<BabyuewMaterialComponent> =
  Symbol("babyuew-material-injection-key");

export const babyuewCameraInjectionKey: InjectionKey<BabyuewCameraComponent> =
  Symbol("babyuew-camera-injection-key");
