export enum Role {
    admin = Number(import.meta.env.ADMIN_ROLE_ID),
    teacher = Number(import.meta.env.TEACHER_ROLE_ID),
    student = Number(import.meta.env.STUDENT_ROLE_ID),
}

export enum Languages {
    uz = "uz",
    ru = "ru",
    en = "en",
}
