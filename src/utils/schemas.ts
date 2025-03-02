import { z, ZodSchema } from "zod";

export const productSchema = z.object({
  name: z.string().min(3, { message: "name must  be at least 3 characters" }),
  company: z
    .string()
    .min(3, { message: "company's name must  be at least 3 characters" }),
  price: z.coerce.number().int().min(0),
  description: z.string().refine(
    (description) => {
      const wordCount = description.split(" ").length;
      return wordCount >= 4 && wordCount <= 1000;
    },
    {
      message: "description must be between 4 and 1000 words",
    }
  ),
  featured: z.coerce.boolean(),
});

export function validateWithZodSchema<T>(
  schema: ZodSchema<T>,
  data: unknown
): T {
  const result = schema.safeParse(data);
  if (!result.success) {
    const errors = result.error.errors.map((err) => err.message);
    throw new Error(errors.join(", "));
  }
  return result.data;
}

const validateImageFile = () => {
  const maxUploadSize = 1024 * 1024;
  const acceptedFileTypes = ["image/"];
  return z
    .instanceof(File)
    .refine((file) => {
      return !file || file.size <= maxUploadSize;
    }, "File size  must be less  than 1MB")
    .refine((file) => {
      return (
        !file || acceptedFileTypes.some((type) => file.type.startsWith(type))
      );
    }, "File must be an image");
};

export const imageSchema = z.object({
  image: validateImageFile(),
});
