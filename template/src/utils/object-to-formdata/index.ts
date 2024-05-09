export function objectToFormData(
    obj: Record<string, string | number | boolean | object | null | undefined>
): FormData {
    const formData = new FormData();

    for (const [key, value] of Object.entries(obj)) {
        formData.append(key, JSON.stringify(value));
    }

    return formData;
}
