import { Material, Mesh } from "@babylonjs/core";
import { EventSystem } from "../utils/eventSystem";

export interface BabyuewComponent<T> {
  onInit: EventSystem<T>;
}

export interface BabyuewMeshComponent extends BabyuewComponent<Mesh> {
  mesh?: Mesh;
}

export interface BabyuewMaterialComponent extends BabyuewComponent<Material> {
  material?: Material;
}
