import { InjectionKey } from "vue";
import { EventSystem } from "../utils/eventSystem";
import { Mesh, Material, Camera } from "@babylonjs/core";

export interface BabyuewComponent<T> {
  onInit: EventSystem<T>;
}

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
