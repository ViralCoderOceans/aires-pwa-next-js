import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

const removeTrailingSlash = (url) => {
  const result = url.replace(/\/$/, "")
  return result
}

export const env = createEnv({
  /*
   * ServerSide Environment variables, not available on the client.
   * Will throw if you access these variables on the client.
   */
  isServer: typeof window === "undefined",
  server: {
    INTERNAL_SECRET_KEY: z.string().min(1),
  },
  /*
   * Environment variables available on the client (and server).
   *
   * 💡 You'll get type errors if these are not prefixed with NEXT_PUBLIC_.
   */
  client: {
    NEXT_PUBLIC_SITE_URL: z.string().url().transform(removeTrailingSlash),
    NEXT_PUBLIC_SERVER_URL: z.string().url().transform(removeTrailingSlash),
  },
  /*
   * Due to how Next.js bundles environment variables on Edge and Client,
   * we need to manually destructure them to make sure all are included in bundle.
   *
   * 💡 You'll get type errors if not all variables from `server` & `client` are included here.
   */
  runtimeEnv: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    NEXT_PUBLIC_SERVER_URL: process.env.NEXT_PUBLIC_SERVER_URL,
  },
  onValidationError: (error) => {
    throw error
  },
})
