import { state } from "@/pages/example/state";

export function exampleService() {
    function getAll() {
        state.value = [1, 2, 3];
        return state;
    }

    function remove() {
        console.log("remove");
    }

    return { getAll, remove };
}
