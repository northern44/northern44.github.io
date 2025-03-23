import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const services = defineCollection({
	// Load Markdown and MDX files in the `src/content/services/` directory.
	loader: glob({ base: './src/content/services', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
    draft: z.boolean().optional().default(false),
		heroImage: z.string().optional(),
	}),
});

export const collections = { services };
