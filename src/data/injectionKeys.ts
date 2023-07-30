import { InjectionKey } from "vue";
import {
  BabyuewMaterialComponent,
  BabyuewMeshComponent,
} from "./objectInterfaces";

export const babyuewMeshInjectionKey: InjectionKey<BabyuewMeshComponent> =
  Symbol("babyuew-mesh-injection-key");

export const babyuewMaterialInjectionKey: InjectionKey<BabyuewMaterialComponent> =
  Symbol("babyuew-material-injection-key");
