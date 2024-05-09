import { exampleService } from "./service";

export default function ExamplePage() {
    const service = exampleService();

    return <main onClick={service.getAll}>example page</main>;
}
