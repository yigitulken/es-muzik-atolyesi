import { z } from "zod"

export const instrumentTypes = ["piyano", "yayli", "gitar", "diger"] as const

export const instrumentTypeLabels: Record<
  (typeof instrumentTypes)[number],
  string
> = {
  piyano: "Piyano",
  yayli: "Yayli Enstrumanlar",
  gitar: "Gitar",
  diger: "Diger",
}

export const photoUploadSchema = z.object({
  name: z.string().min(2, "Ad en az 2 karakter olmali"),
  phone: z
    .string()
    .regex(/^(\+90|0)?[0-9]{10}$/, "Gecerli bir telefon numarasi girin"),
  instrumentType: z.enum(instrumentTypes, {
    required_error: "Enstruman turunu secin",
  }),
  description: z
    .string()
    .min(10, "Aciklama en az 10 karakter olmali")
    .max(1000),
  photos: z
    .array(z.string().min(1))
    .min(1, "En az 1 fotograf yukleyin")
    .max(5, "En fazla 5 fotograf yukleyebilirsiniz"),
  source: z.enum(["photo_upload", "contact_form"]).default("photo_upload"),
})

export const contactFormSchema = z.object({
  name: z.string().min(2, "Ad en az 2 karakter olmali"),
  phone: z
    .string()
    .regex(/^(\+90|0)?[0-9]{10}$/, "Gecerli bir telefon numarasi girin"),
  email: z.string().email("Gecerli bir e-posta adresi girin"),
  instrumentType: z.enum(instrumentTypes, {
    required_error: "Enstruman turunu secin",
  }),
  description: z
    .string()
    .min(10, "Aciklama en az 10 karakter olmali")
    .max(1000),
  photos: z.array(z.string().min(1)).max(5).default([]),
  source: z.literal("contact_form").default("contact_form"),
})

export type PhotoUploadFormData = z.infer<typeof photoUploadSchema>
export type ContactFormData = z.infer<typeof contactFormSchema>
