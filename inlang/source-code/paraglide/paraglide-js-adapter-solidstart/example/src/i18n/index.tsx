import { Component } from "solid-js"
import * as paraglide from "../paraglide/runtime.js" // generated by paraglide
import * as adapter from "./adapter.js"

export type AvailableLanguageTag = paraglide.AvailableLanguageTag
export const availableLanguageTags = paraglide.availableLanguageTags
export const sourceLanguageTag = paraglide.sourceLanguageTag

export const { LanguageTagProvider, languageTag, setLanguageTag } = adapter.createI18n(paraglide)

export function getLanguageTagFromURL(): AvailableLanguageTag | undefined {
	return adapter.getLanguageTagFromURL(availableLanguageTags)
}

export const LocaleSwitcher: Component = () => {
	const language_tag = languageTag()

	return (
		<select
			name="language"
			onChange={(e) => setLanguageTag(e.target.value as AvailableLanguageTag)}
		>
			{availableLanguageTags.map((tag) => (
				<option value={tag} selected={tag === language_tag}>
					{tag}
				</option>
			))}
		</select>
	)
}

/**
 * Changes a provided url to include the correct language tag.
 *
 * To be used on `<A href="...">` components to make sure that the anchor tag will link to the correct language, when server side rendered.
 *
 * **Use only on internal links. (e.g. `<A href="/foo">` or `<A href="/en/foo">`)**
 *
 * @example
 * ```tsx
 * <a href={i18n.translateHref("/foo/bar")}>...</a>
 * ```
 *
 * @param pathname The pathname to link to. (e.g. "/foo/bar")
 * @param language_tag The current language tag. Will read one from context by default, pass one explicitly if context is not available.
 * @returns The translated pathname. (e.g. "/en/bar")
 */
export function translateHref(pathname: string, language_tag = languageTag()): string {
	return adapter.translateHref(
		pathname,
		language_tag,
		paraglide.availableLanguageTags,
		paraglide.sourceLanguageTag
	)
}
