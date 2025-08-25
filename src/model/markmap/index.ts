import { z } from "zod";

// 定义登录请求的验证 schema
export const MarkmapSchema = z.object({
    markdown: z.string(),
});

export type MarkmapSchemaType = z.infer<typeof MarkmapSchema>;

