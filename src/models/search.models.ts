import { z } from "zod";

export const schema = z.object({
    name: z.string().min(3, "El nombre es obligatorio"),
})

export type searchValues = z.infer<typeof schema>; //nos ha creado un type de typescript es mágico