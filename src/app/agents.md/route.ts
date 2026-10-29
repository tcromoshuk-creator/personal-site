import { profileMarkdown } from "@/lib/public-profile";
import { site } from "@/lib/content";

export const dynamic = "force-static";

export function GET() {
  return new Response(profileMarkdown(), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "X-Robots-Tag": "noindex",
      Link: `<${site.url}/agents>; rel="canonical"`,
    },
  });
}
