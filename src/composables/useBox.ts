import { MeshBuilder, Scene, Vector3 } from "@babylonjs/core";
import { Ref, watchEffect } from "vue";

type UseBoxProps = Ref<Vector3>;

const useBox = (props: UseBoxProps, scene?:Scene) => {
  const box = MeshBuilder.CreateBox("box", { size: 0.1 }, scene);
  box.position = props.value;

  watchEffect(() => {
    box.position = props.value;
  });

  return { box };
};

export { useBox, type UseBoxProps };