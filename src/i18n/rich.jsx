import { Fragment } from "react";

/**
 * Renders a translation string that carries <b>...</b> emphasis.
 *
 * Translators keep the markers in place; nothing else in the string is parsed,
 * so a stray angle bracket is rendered literally rather than becoming markup.
 * Deliberately not dangerouslySetInnerHTML.
 */
export const rich = (value) =>
  String(value ?? "")
    .split(/(<b>[\s\S]*?<\/b>)/g)
    .filter(Boolean)
    .map((part, index) =>
      part.startsWith("<b>") && part.endsWith("</b>") ? (
        <strong key={index}>{part.slice(3, -4)}</strong>
      ) : (
        <Fragment key={index}>{part}</Fragment>
      ),
    );
