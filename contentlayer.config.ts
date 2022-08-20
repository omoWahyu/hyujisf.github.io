import { defineDocumentType, makeSource } from "contentlayer/source-files"

export const Blog = defineDocumentType(() => ({
	name: "Blog",
	filePathPattern: "blogs/**/*.{md,mdx}",
	contentType: "mdx",
	fields: {
		title: {
			type: "string",
			required: true,
		},
		publishDate: {
			type: "date",
			description: "When the post was published",
			required: true,
		},
		description: {
			type: "string",
			required: true,
		},
		tags: {
			type: "list",
			of: {
				type: "string",
			},
		},
		thumbnail: {
			type: "string",
			required: true,
		},
	},
	computedFields: {
		slug: {
			type: "string",
			resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
			// resolve: (post) => {
			// 	return post._raw.sourceFileDir
			// },
		},
	},
}))

export default makeSource({
	contentDirPath: "contents",
	documentTypes: [Blog],
})
