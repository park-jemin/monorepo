import "./inlang-doc-layout.ts"
import type { Meta, StoryObj } from "@storybook/web-components"
import { html } from "lit"
import { manifest } from "./../mock/manifest.ts"

const meta: Meta = {
	component: "inlang-doc-layout",
	title: "Public/inlang-doc-layout",
}

export default meta

export const Props: StoryObj = {
	render: () => html`<inlang-doc-layout .manifest=${manifest}>doc-layout</inlang-doc-layout> `,
}

export const Attributes: StoryObj = {
	render: () =>
		html` <inlang-doc-layout manifest=${JSON.stringify(manifest)}>doc-layout</inlang-doc-layout> `,
}
