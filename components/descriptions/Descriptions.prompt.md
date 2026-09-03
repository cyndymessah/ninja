# Descriptions

A read-only key/value data-display card — for summary/review screens (e.g. "Company created", confirmation steps). Groups related fields under an optional titled header, in a responsive 2-column grid with divider lines between cells. Use `full: true` on an item to span both columns (long values, lists of tags, image previews).

Pair item values with the `Tag` component (variant="neutral") for inline badges like "Locked", or variant="primary" for enabled-flag chips.

Stack multiple `<Descriptions>` cards vertically (with gap) to build a full summary page — one card per logical section (General information, Configuration, Bank information, Contacts…).
