import { z } from "zod";

export const schema = z.object({
    name: z.string().min(1, "El nombre es obligatorio"),
    email: z.string().email("Correo inválido").min(1, "El correo es obligatorio"),
    password: z.string().min(6, "La contraseña debe tener la menos 6 caracteres"),
    confirmPassword: z.string().min(6, "La confirmación debe tener al menos 6 carácteres")
}).refine(data => data.password === data.confirmPassword, {
    message: "Las contraseñas son diferentes, deben ser iguales",
    path: ["confirmPassword"]
})

export type FormValues = z.infer<typeof schema>; //nos ha creado un type de typescript es mágico