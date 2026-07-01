// Keep Vercel from treating this Next.js app as a generic static site.
export const config = {
  framework: "nextjs",
  buildCommand: "npm run build",
  installCommand: "npm install",
} as const;
