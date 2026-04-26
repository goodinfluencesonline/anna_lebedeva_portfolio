# Project Coding Standards — Anna Lebedeva Portfolio

## SOLID Compliance — CSS

All styling in this project must follow SOLID principles as defined below.
Any suggestion or generated code that violates these rules is **non-compliant** —
flag it explicitly to the user before proceeding.

### Rules

**S — Single Responsibility**
Each CSS file owns exactly one concern. A component file must not style elements
belonging to another component. Rules for shared patterns belong in `css/globals.css`,
not duplicated across component files.

**O — Open/Closed**
Extend styles via additional classes or `css/responsive.css` overrides.
Do not modify an existing component file to accommodate a new use case —
add a modifier class or a new file instead.

**L — Liskov Substitution**
Utility classes (`.label-mono`, `.btn-base`, `.accent-mark`, `.body-text`, `.grid-cell`)
must be interchangeable across all contexts they are applied to.
Do not apply a utility class to an element if its component file immediately
overrides the utility's core properties — use a modifier class instead.

**I — Interface Segregation**
`css/globals.css` must only contain rules used by two or more component files.
Single-use rules belong in the owning component file, not globals.

**D — Dependency Inversion**
All components must reference design tokens from `css/tokens.css` via CSS custom
properties (e.g. `var(--accent)`, `var(--sans)`, `var(--border)`).
Hardcoded color values, font strings, or numeric values that duplicate a token
are non-compliant.

### CSS File Load Order (must be preserved in index.html)
1. `css/tokens.css`
2. `css/base.css`
3. `css/globals.css`
4. `css/nav.css`
5. `css/button.css`
6. `css/hero.css`
7. `css/numbers.css`
8. `css/companies.css`
9. `css/section-header.css`
10. `css/services.css`
11. `css/work.css`
12. `css/archive.css`
13. `css/contact.css`
14. `css/footer.css`
15. `css/animations.css`
16. `css/responsive.css` ← must always be last

### Non-Compliance Reporting

When reviewing or generating CSS for this project, if any of the above rules
are violated, respond with:

> ⚠️ **SOLID Non-Compliance detected** — `[rule letter]`: [description of violation].
> Suggested fix: [specific remediation].

Do not silently accept non-compliant styling.
