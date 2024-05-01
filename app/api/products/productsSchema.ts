import { z } from "zod";

const productSchema = z.object({
  name: z.string().min(3),
  price: z.number().positive().min(1),
});

export default productSchema;
