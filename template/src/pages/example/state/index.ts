import { signal, effect, computed } from "@preact/signals-react";

export const state = signal<any>(undefined);

export const computedState = computed(() => !!state);

effect(() => {
    console.log(state.value);
});
