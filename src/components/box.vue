<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useBox } from "../composables/useBox";
import { Vector3 } from "@babylonjs/core";

type Props = { x: number; y: number; z: number };

const props = defineProps<Props>();

onMounted(() => {
  useBox(ref(new Vector3(props.x, props.y, props.z)));
});
</script>
