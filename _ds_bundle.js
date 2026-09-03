/* @ds-bundle: {"format":4,"namespace":"NDPSDesignSystem_82df03","components":[{"name":"Alert","sourcePath":"components/alert/Alert.jsx"},{"name":"Button","sourcePath":"components/button/Button.jsx"},{"name":"Descriptions","sourcePath":"components/descriptions/Descriptions.jsx"},{"name":"Icon","sourcePath":"components/icon/Icon.jsx"},{"name":"InnovationCurve","sourcePath":"components/innovation-curve/InnovationCurve.jsx"},{"name":"Input","sourcePath":"components/input/Input.jsx"},{"name":"QuickAmountInput","sourcePath":"components/quick-amount-input/QuickAmountInput.jsx"},{"name":"Table","sourcePath":"components/table/Table.jsx"},{"name":"Tag","sourcePath":"components/tag/Tag.jsx"}],"sourceHashes":{"components/alert/Alert.jsx":"ecfbbafeb5db","components/button/Button.jsx":"5e3175016847","components/descriptions/Descriptions.jsx":"58ce13869e81","components/icon/Icon.jsx":"225bf6479467","components/innovation-curve/InnovationCurve.jsx":"bc3c33dde4a9","components/input/Input.jsx":"49824e9b0d94","components/quick-amount-input/QuickAmountInput.jsx":"a1dcf741d369","components/table/Table.jsx":"5812853632ec","components/tag/Tag.jsx":"173f3d225983","doc-page.js":"371bab66f42d","icons/icon-paths.js":"667281a694e0","icons/icon-registry.js":"63fa5fe549a7","ui_kits/ndps-app/DashboardScreen.jsx":"47548242201d","ui_kits/ndps-app/HistoryScreen.jsx":"af8f363a7361","ui_kits/ndps-app/WithdrawScreen.jsx":"4ce9b5f8bbb8"},"inlinedExternals":[],"unexposedExports":[{"name":"iconNames","sourcePath":"components/icon/Icon.jsx"},{"name":"iconPaths","sourcePath":"icons/icon-paths.js"},{"name":"iconSize","sourcePath":"icons/icon-paths.js"},{"name":"iconStroke","sourcePath":"icons/icon-paths.js"},{"name":"iconViewBox","sourcePath":"icons/icon-paths.js"}]} */

(() => {

const __ds_ns = (window.NDPSDesignSystem_82df03 = window.NDPSDesignSystem_82df03 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/alert/Alert.jsx
try { (() => {
const VARIANT = {
  info: {
    bg: "var(--status-info-bg)",
    iconBg: "var(--status-info)",
    icon: "i"
  },
  success: {
    bg: "var(--status-success-bg)",
    iconBg: "var(--status-success)",
    icon: "\u2713"
  },
  warning: {
    bg: "var(--status-warning-bg)",
    iconBg: "var(--status-warning)",
    icon: "!"
  },
  error: {
    bg: "var(--status-error-bg)",
    iconBg: "var(--status-error)",
    icon: "\u00d7"
  }
};
function Alert({
  variant = "info",
  title,
  description,
  style
}) {
  const v = VARIANT[variant] || VARIANT.info;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "center",
      padding: "14px 15px",
      borderRadius: "var(--radius-alert)",
      background: v.bg,
      boxSizing: "border-box",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 34,
      height: 34,
      flexShrink: 0,
      borderRadius: 10,
      background: v.iconBg,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--core-white)",
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: 15
    }
  }, v.icon), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 3,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      fontSize: 13,
      color: "var(--text-heading)"
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 400,
      fontSize: 12,
      color: "var(--core-gray-text)"
    }
  }, description)));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/alert/Alert.jsx", error: String((e && e.message) || e) }); }

// components/button/Button.jsx
try { (() => {
const SIZE = {
  small: {
    height: 32,
    radius: "var(--radius-btn-sm)",
    paddingX: 14,
    fontSize: "var(--text-button-sm-size)"
  },
  medium: {
    height: 40,
    radius: "var(--radius-btn-md)",
    paddingX: 20,
    fontSize: "var(--text-button-md-size)"
  },
  large: {
    height: 48,
    radius: "var(--radius-btn-lg)",
    paddingX: 26,
    fontSize: "var(--text-button-lg-size)"
  }
};

// type -> { bg, border, color, hoverBg, hoverBorder, hoverColor }
const TYPE = {
  primary: {
    bg: "var(--color-primary)",
    border: "none",
    color: "var(--on-primary)",
    hoverBg: "var(--color-primary-hover)",
    hoverBorder: "none",
    hoverColor: "var(--on-primary)"
  },
  default: {
    bg: "var(--bg-container)",
    border: "inset 0 0 0 1px var(--border-default)",
    color: "var(--text-heading)",
    hoverBg: "var(--color-primary-bg)",
    hoverBorder: "inset 0 0 0 1px var(--color-primary)",
    hoverColor: "var(--color-primary)"
  },
  neutral: {
    bg: "var(--bg-container)",
    border: "inset 0 0 0 1px var(--border-default)",
    color: "var(--text-heading)",
    hoverBg: "var(--bg-layout)",
    hoverBorder: "inset 0 0 0 1px var(--border-default)",
    hoverColor: "var(--text-heading)"
  },
  text: {
    bg: "transparent",
    border: "none",
    color: "var(--core-gray-text)",
    hoverBg: "var(--color-primary-bg)",
    hoverBorder: "none",
    hoverColor: "var(--color-primary)"
  }
};
function Button({
  type = "primary",
  size = "medium",
  disabled = false,
  children = "Button",
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const s = SIZE[size] || SIZE.medium;
  const t = TYPE[type] || TYPE.primary;
  let background = t.bg;
  let boxShadow = t.border === "none" ? undefined : t.border;
  let color = t.color;
  if (disabled) {
    background = "var(--bg-layout)";
    boxShadow = "inset 0 0 0 1px var(--border-default)";
    color = "var(--text-disabled)";
  } else if (hover) {
    background = t.hoverBg;
    boxShadow = t.hoverBorder === "none" ? undefined : t.hoverBorder;
    color = t.hoverColor;
  }
  return /*#__PURE__*/React.createElement("button", {
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    disabled: disabled,
    style: {
      height: s.height,
      borderRadius: s.radius,
      padding: `0 ${s.paddingX}px`,
      background,
      boxShadow,
      border: "none",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: s.fontSize,
      color,
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "background 0.15s ease, box-shadow 0.15s ease, color 0.15s ease",
      whiteSpace: "nowrap",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/button/Button.jsx", error: String((e && e.message) || e) }); }

// components/descriptions/Descriptions.jsx
try { (() => {
function Descriptions({
  title,
  columns = 2,
  items = [],
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--bg-elevated)",
      boxShadow: "inset 0 0 0 1px var(--border-default)",
      borderRadius: "var(--radius-card-px)",
      overflow: "hidden",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "16px 24px",
      boxShadow: "inset 0 -1px 0 var(--border-default)",
      fontWeight: 700,
      fontSize: 15,
      color: "var(--text-heading)"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: `repeat(${columns}, 1fr)`
    }
  }, items.map((item, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      gridColumn: item.full ? `1 / -1` : undefined,
      padding: "14px 24px",
      boxShadow: "inset -1px 0 0 var(--border-default), inset 0 -1px 0 var(--border-default)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 11,
      fontWeight: 600,
      textTransform: "uppercase",
      letterSpacing: "0.02em",
      color: "var(--text-muted)",
      marginBottom: 4
    }
  }, item.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "var(--text-heading)",
      display: "flex",
      alignItems: "center",
      gap: 8,
      flexWrap: "wrap"
    }
  }, item.value ?? "—")))));
}
Object.assign(__ds_scope, { Descriptions });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/descriptions/Descriptions.jsx", error: String((e && e.message) || e) }); }

// components/innovation-curve/InnovationCurve.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * NTT DATA Innovation Curve — brand graphic.
 * Two parts: the "Curve" (heavy stroke / fill) and the "Grid" (light stroke).
 * Stroke-weight ratio is fixed at 2:1 (Curve : Grid).
 * DARK BACKGROUNDS ONLY (navy or future blue). Renders in `color` (default white).
 */
function InnovationCurve({
  variant = "wireframe",
  // "wireframe" | "solid"
  size = 271,
  color = "#ffffff",
  gridOpacity = 0.5,
  style,
  ...rest
}) {
  const grid = "M90.7164 0.625332H83.0718H270.5V269.99H1.28521L1.16007 89.5009H270.266M270.266 179.306H0.5M90.7164 0.5V269.109M180.753 0.5V269.109";
  const curveOutline = "M90.6565 269.946V89.5215L180.993 270.044M1.20209 270.5V79.822C1.20209 79.822 2.19806 3.31024 81.2916 1.09264C145.684 -0.717344 162.954 57.252 185.295 99.6412C207.643 142.03 270.152 270.044 270.152 270.044";
  const curveFill = "M90.6565 89.5215V269.946L1.20209 270.5V79.822C1.20209 79.822 2.19806 3.31024 81.2916 1.09264C145.684 -0.717344 162.954 57.252 185.295 99.6412C207.643 142.03 270.152 270.044 270.152 270.044H180.993L90.6565 89.5215Z";
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 271 271",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: style
  }, rest), /*#__PURE__*/React.createElement("path", {
    d: grid,
    stroke: color,
    strokeOpacity: gridOpacity,
    strokeWidth: 1,
    strokeLinecap: "square"
  }), variant === "solid" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: curveOutline,
    stroke: color,
    strokeOpacity: gridOpacity,
    strokeWidth: 2,
    strokeMiterlimit: 4.3
  }), /*#__PURE__*/React.createElement("path", {
    d: curveFill,
    fill: color,
    stroke: color,
    strokeOpacity: gridOpacity,
    strokeWidth: 2,
    strokeMiterlimit: 4.3
  })) :
  /*#__PURE__*/
  /* Curve — 2x stroke, no fill */
  React.createElement("path", {
    d: curveOutline,
    stroke: color,
    strokeOpacity: gridOpacity,
    strokeWidth: 2,
    strokeMiterlimit: 4.3
  }));
}
Object.assign(__ds_scope, { InnovationCurve });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/innovation-curve/InnovationCurve.jsx", error: String((e && e.message) || e) }); }

// components/input/Input.jsx
try { (() => {
function Input({
  label = "Amount",
  value = "",
  placeholder,
  helper,
  state = "default",
  onChange,
  style
}) {
  const effective = state === "disabled" ? "disabled" : state;
  let boxShadow = "inset 0 0 0 1px var(--border-default)";
  let bg = "var(--bg-container)";
  let color = "var(--text-heading)";
  let helperColor = "var(--text-muted)";
  if (effective === "focus") {
    boxShadow = "inset 0 0 0 1px var(--color-primary), var(--shadow-focus-ring)";
  } else if (effective === "error") {
    boxShadow = "inset 0 0 0 1px var(--status-error)";
    helperColor = "var(--status-error)";
  } else if (effective === "disabled") {
    bg = "var(--bg-layout)";
    color = "var(--text-disabled)";
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      alignItems: "flex-start",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 500,
      fontSize: 12,
      color: "var(--core-gray-text)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 40,
      width: "100%",
      borderRadius: "var(--radius-input)",
      background: bg,
      boxShadow,
      display: "flex",
      alignItems: "center",
      padding: "0 12px",
      boxSizing: "border-box"
    }
  }, effective === "disabled" ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 400,
      fontSize: 14,
      color
    }
  }, value || placeholder) : /*#__PURE__*/React.createElement("input", {
    value: value,
    placeholder: placeholder,
    onChange: onChange,
    style: {
      border: "none",
      outline: "none",
      background: "transparent",
      width: "100%",
      fontFamily: "var(--font-sans)",
      fontWeight: 400,
      fontSize: 14,
      color
    }
  })), helper ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 400,
      fontSize: 11,
      color: helperColor
    }
  }, helper) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/input/Input.jsx", error: String((e && e.message) || e) }); }

// components/quick-amount-input/QuickAmountInput.jsx
try { (() => {
function QuickAmountInput({
  label = "Amount",
  value = "₹0",
  presets = ["₹1,000", "₹2,500", "₹5,000", "Max"],
  selectedIndex = 2,
  onSelectPreset,
  error,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--bg-container)",
      boxShadow: "inset 0 0 0 1px var(--border-default)",
      borderRadius: "var(--radius-card-px)",
      padding: "20px 24px 24px",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      fontFamily: "var(--font-sans)",
      width: 312,
      boxSizing: "border-box",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: "var(--text-secondary)"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    title: "The amount you'd like to withdraw",
    style: {
      width: 14,
      height: 14,
      borderRadius: "50%",
      boxShadow: "inset 0 0 0 1px var(--text-muted)",
      color: "var(--text-muted)",
      fontSize: 10,
      fontWeight: 700,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "default"
    }
  }, "?")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--text-heading-2-family, var(--font-sans))",
      fontWeight: 700,
      fontSize: 32,
      color: error ? "var(--status-error)" : "var(--text-heading)"
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: "var(--border-secondary)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, presets.map((p, i) => {
    const active = i === selectedIndex;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      onClick: () => onSelectPreset && onSelectPreset(i),
      style: {
        flex: 1,
        height: 33,
        border: "none",
        borderRadius: "var(--radius-btn-md, 9px)",
        background: active ? "var(--color-primary)" : "var(--bg-container)",
        boxShadow: active ? "none" : "inset 0 0 0 1px var(--color-primary)",
        color: active ? "var(--on-primary)" : "var(--color-primary)",
        fontFamily: "var(--font-sans)",
        fontWeight: 700,
        fontSize: 12.5,
        cursor: "pointer"
      }
    }, p);
  })), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--status-error)",
      fontWeight: 600
    }
  }, error) : null);
}
Object.assign(__ds_scope, { QuickAmountInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/quick-amount-input/QuickAmountInput.jsx", error: String((e && e.message) || e) }); }

// components/table/Table.jsx
try { (() => {
const cellFont = "var(--font-sans)";
function Table({
  columns = [],
  data = [],
  style
}) {
  const align = c => c.align || "left";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      boxShadow: "inset 0 0 0 1px var(--border-default)",
      borderRadius: "var(--radius-card-px)",
      overflow: "auto",
      background: "var(--bg-elevated)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontFamily: cellFont,
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map((c, i) => /*#__PURE__*/React.createElement("th", {
    key: c.key ?? i,
    style: {
      textAlign: align(c),
      padding: "12px 16px",
      fontSize: 11,
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "0.02em",
      color: "var(--text-muted)",
      background: "var(--bg-elevated)",
      boxShadow: "inset 0 -1px 0 var(--border-default)",
      ...(c.action ? {
        width: "1%",
        whiteSpace: "nowrap",
        position: "sticky",
        right: 0,
        zIndex: 2
      } : null),
      ...(i === 0 ? {
        borderTopLeftRadius: "var(--radius-card-px)"
      } : null),
      ...(i === columns.length - 1 ? {
        borderTopRightRadius: "var(--radius-card-px)"
      } : null)
    }
  }, c.title)))), /*#__PURE__*/React.createElement("tbody", null, data.map((row, ri) => {
    const last = ri === data.length - 1;
    return /*#__PURE__*/React.createElement("tr", {
      key: row.key ?? ri
    }, columns.map((c, ci) => {
      const content = c.render ? c.render(row) : row[c.key];
      const amount = c.amount;
      return /*#__PURE__*/React.createElement("td", {
        key: c.key ?? ci,
        style: {
          padding: "14px 16px",
          textAlign: align(c),
          color: "var(--text-body)",
          boxShadow: last ? "none" : "inset 0 -1px 0 var(--border-default)",
          ...(amount ? {
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            color: "var(--text-heading)",
            fontVariantNumeric: "tabular-nums"
          } : null),
          ...(c.action ? {
            width: "1%",
            whiteSpace: "nowrap",
            position: "sticky",
            right: 0,
            zIndex: 2,
            background: "var(--bg-elevated)",
            boxShadow: last ? "inset 1px 0 0 var(--border-default)" : "inset 0 -1px 0 var(--border-default), inset 1px 0 0 var(--border-default)"
          } : null)
        }
      }, content);
    }));
  }))));
}
Object.assign(__ds_scope, { Table });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/table/Table.jsx", error: String((e && e.message) || e) }); }

// components/tag/Tag.jsx
try { (() => {
const VARIANT = {
  primary: {
    bg: "var(--color-primary-bg)",
    color: "var(--color-primary)"
  },
  success: {
    bg: "var(--status-success-bg)",
    color: "var(--status-success)"
  },
  warning: {
    bg: "var(--status-warning-bg)",
    color: "var(--status-warning)"
  },
  error: {
    bg: "var(--status-error-bg)",
    color: "var(--status-error)"
  },
  neutral: {
    bg: "var(--bg-layout)",
    color: "var(--text-secondary)"
  }
};
function Tag({
  variant = "primary",
  children = "Tag",
  style
}) {
  const v = VARIANT[variant] || VARIANT.primary;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "4px 11px",
      borderRadius: "var(--radius-pill-px)",
      background: v.bg,
      color: v.color,
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: 12,
      whiteSpace: "nowrap",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/tag/Tag.jsx", error: String((e && e.message) || e) }); }

// doc-page.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <doc-page> — paged-document shell for printable HTML.
 *
 * FIRST, decide how the document paginates — up front, before building:
 *
 * - FLOWING document (the default): write the whole document as one
 *   normal HTML flow inside <doc-page>; the browser's print engine
 *   splits it onto pages at export. Use for long-form documents with a
 *   single text flow: reports, memos, letters, essays.
 * - EXPLICIT pagination: a fixed set of pre-paginated pages, one
 *   <section class="page"> child per page. Use when the user asks for a
 *   specific page count, or the design implies one: a one-page resume, a
 *   two-sided flier, a poster, a certificate, a brochure — any richly
 *   laid-out document without a single text flow.
 * - If in doubt, ask the user as part of the build.
 *
 * PAGE SIZING — paper differs by country (letter vs A4), so the printed
 * sheet is not one fixed truth:
 * - FLOWING documents pin NO paper size: the print engine paginates
 *   onto the user's real paper, and the content reflows to it.
 * - EXPLICITLY PAGINATED documents print each page at a FIXED page box
 *   with overflow hidden — letter by default, size="a4" for a clearly
 *   metric user, the user's chosen paper when they export. Design each
 *   page to FILL that box, fitting letter and A4 alike without overlap.
 * - width/height pin an explicit fixed size, ONLY when the user gives
 *   one.
 * Never write your own @page rule or hard-code paper dimensions in the
 * content.
 *
 * Sizing modes (attributes):
 *   (none)                      — portrait: flowing docs use the user's
 *           paper; explicitly paginated pages use the named size box
 *           (letter unless size="a4")
 *   orientation="landscape"     — the same, landscape
 *   width / height              — explicit fixed size, ONLY when the user
 *           gives one (e.g. width="22in" height="30in" for a 22×30
 *           poster): the page IS the design's size, printed at true
 *           dimensions (or scaled onto the user's paper at print time).
 *           Any absolute CSS length: px/in/mm/cm/pt/pc.
 * The component announces the chosen mode to the host app at runtime (a
 * meta tag it injects), so the print path can inject the user's true
 * paper size.
 *
 * On screen the document renders on a desk background: a flowing
 * document as one tall scrolling sheet (Google Docs' pageless view);
 * explicitly paginated documents as one card per page.
 *
 * EXPLICIT pagination usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page>
 *     <section class="page" id="p1">…one page's design…</section>
 *     <section class="page" id="p2">…</section>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * How the page box works, concretely: each .page prints as ONE full-bleed
 * sheet at a FIXED physical size — letter by default (set size="a4" for
 * a clearly metric user), the user's chosen paper when they export —
 * with overflow hidden. Nothing scrolls and nothing reflows onto a next
 * sheet: content that misses the box is CLIPPED. Design each page to
 * FILL that page box, and to fit it — letter and A4 alike — without
 * overlap. Each page is a size container; don't size anything in
 * viewport units (they track the window, not the page), and never set
 * width or height on the .page section itself (the component sizes the
 * page box; an authored height like 100% is meaningless at print and is
 * overridden). The component owns the page box, the screen card chrome,
 * and the page breaks (never add your own break-before/after). Don't mix
 * .page sections with flowing content or header/footer slots in the same
 * document.
 *
 * FLOWING usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page margin="0.75in">
 *     <h1>Title</h1>
 *     <p>…body…</p>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * There is no manual page-splitting — the browser's print engine
 * paginates at export. Standard break-hygiene rules (`break-inside:
 * avoid` on figures, code blocks, images and table rows; `orphans/
 * widows: 3`) are applied so paragraphs and groups split cleanly. On
 * screen and at print, headings default to `text-wrap: balance` and
 * body text to `text-wrap: pretty`; the defaults have zero specificity,
 * so any text-wrap you declare wins.
 *
 * Other attributes:
 *   size    — letter | a4 | legal (default letter). Flowing documents:
 *           preview proportion only — it does NOT pin their printed
 *           paper (the print dialog's paper governs); leave it alone
 *           there. Explicitly paginated documents: it sets the page box
 *           the cards and the pinned @page share (the export dialog's
 *           choice overrides both at print) — set size="a4" for a
 *           clearly metric user. Scaled-fit: names the sheet the fit is
 *           computed against, same a4-for-metric-users advice.
 *   content-width / content-height — the design's own fixed dimensions
 *           (CSS lengths), for scaling a fixed-size design ONTO the
 *           named sheet: content lays out at exactly this size, and the
 *           component scales it to fit that sheet's printable area
 *           (centered horizontally, top-aligned; the export dialog
 *           re-fits to the user's actual paper choice where available).
 *           Both must be set; they do not change the page box. For pages
 *           WITHOUT running header/footer slots.
 *   margin  — printable inset on every page of a FLOWING document
 *           (default 0.75in); margin="0" makes pages full-bleed.
 *           Explicitly paginated pages are always full-bleed.
 *
 * Running header/footer (flowing documents only): give an element
 * `slot="header"` or `slot="footer"` and it repeats on every printed
 * page via `position: fixed`. To keep body text from sliding under it,
 * the component prints inside a single-cell table whose <thead>/<tfoot>
 * are spacers sized to the header/footer height — browsers repeat
 * thead/tfoot on every page, so each sheet's content starts below the
 * header and ends above the footer. On screen the header/footer render
 * once at the top/bottom of the sheet.
 *
 * At print the component injects `@page { margin: 0 }` (which leaves
 * Chrome no margin box to draw its date/URL/page-count header in) and
 * moves the visual margin onto the sheet's own padding. It also marks
 * the document as owning its print CSS (a
 * `meta[name="omelette-owns-print"]` it injects at runtime), so the
 * PDF export never injects page-geometry CSS of its own on top.
 *
 * Print best practices for the content you author:
 * - Multi-column text: use CSS columns (`column-count` +
 *   `column-gap`), never side-by-side flex/grid columns — only real
 *   CSS columns flow and break across pages. `column-span: all` lets
 *   a heading span the columns; `hyphens: auto` (needs `lang` on
 *   the html element) keeps narrow columns readable.
 * - Page breaks in flowing documents: `break-before: page` on an
 *   element that must start a new page (a chapter, an appendix). Add
 *   your own kept-together blocks (callouts, stat tiles, cards) to a
 *   `break-inside: avoid` rule, and keep each one shorter than a page.
 * - Extend `orphans: 3; widows: 3` to any custom text blocks you add
 *   (p and li are covered by default).
 * - Give long tables a <thead> — browsers repeat it on every printed
 *   page.
 * - No `position: fixed`/`sticky` and no viewport units in content:
 *   fixed elements stamp every printed page (running headers/footers go
 *   in the component's slots) and `100vh` mis-sizes at print.
 *
 * Author content as static HTML so the user can click-to-edit any text
 * directly. Do not set width/padding/background on the document body —
 * the component owns the sheet box.
 */
/* END USAGE */

(() => {
  const PAPER = {
    letter: ['8.5in', '11in'],
    a4: ['210mm', '297mm'],
    legal: ['8.5in', '14in']
  };
  const CSS_LENGTH = /^\d+(\.\d+)?(px|in|mm|cm|pt|pc)$/;
  // Unitless "0" is a valid CSS length and the natural way to write
  // margin="0"; normalise it to 0px so max()/calc() (which reject a bare
  // number) keep working.
  const safeLen = (v, fb) => {
    v = (v || '').trim();
    return v === '0' ? '0px' : CSS_LENGTH.test(v) ? v : fb;
  };
  // WebKit (Safari and every iOS browser shell) never repeats a table's
  // thead/tfoot on printed pages (WebKit bug 17205), so the spacer-borne
  // vertical margins of a FLOWING document reach only the first page
  // there. Engine check, not browser check: vendor is 'Apple Computer,
  // Inc.' exactly for WebKit and 'Google Inc.' for Blink.
  const WK_PRINT = /apple/i.test(navigator.vendor || '');
  // CSS length → px number (CSS absolute units are exact: 1in = 96px).
  // Returns NaN for anything safeLen would reject — callers gate on it.
  const PX_PER = {
    px: 1,
    in: 96,
    mm: 96 / 25.4,
    cm: 96 / 2.54,
    pt: 96 / 72,
    pc: 16
  };
  const toPx = v => {
    const m = /^(\d+(?:\.\d+)?)(px|in|mm|cm|pt|pc)$/.exec((v || '').trim());
    return m ? parseFloat(m[1]) * PX_PER[m[2]] : NaN;
  };
  const stylesheet = `
    :host {
      position: relative;
      display: block;
      /* When the viewport is narrower than the page, grow to wrap the
       * sheet (plus this padding) instead of staying viewport-width, so
       * the desk background and right margin reach the sheet's far edge
       * in the horizontal scroll. */
      min-width: max-content;
      min-height: 100vh;
      background: #f5f5f4;
      padding: 48px 24px;
      box-sizing: border-box;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
      --doc-page-w: 8.5in;
      --doc-page-h: 11in;
      --doc-page-margin: 0.75in;
      --doc-hdr-h: 0px;
      --doc-ftr-h: 0px;
      --doc-hdr-pad: 0px;
      --doc-ftr-pad: 0px;
    }
    .sheet {
      width: var(--doc-page-w);
      margin: 0 auto;
      background: #fff;
      box-shadow: 0 2px 10px rgba(20, 20, 19, 0.12);
      border-radius: 7px;
      box-sizing: border-box;
      padding: var(--doc-page-margin);
    }
    .frame { width: 100%; border-collapse: collapse; }
    /* Scaled-fit mode (content-width/content-height): the inner .fit box
     * lays the content out at its authored fixed size and scales it onto
     * the printable area; .fit-box reserves the scaled footprint in flow
     * (transforms don't affect layout) and centers it. Without the mode,
     * both divs are unstyled block pass-throughs. */
    /* Explicit pagination: direct .page children are the pages. The sheet
     * becomes a transparent stack and each page carries the card look on
     * screen; at print each page is exactly one full-bleed sheet. The
     * ::slotted defaults are deliberately weak (document CSS wins), so
     * authored page styling can override any of this. */
    .sheet.paginated {
      background: transparent;
      box-shadow: none;
      border-radius: 0;
      padding: 0;
    }
    .paginated ::slotted(.page) {
      position: relative;
      display: block;
      width: 100%;
      aspect-ratio: var(--doc-page-ar);
      container-type: size;
      overflow: hidden;
      box-sizing: border-box;
      background: #fff;
      border-radius: 7px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
      print-color-adjust: exact;
      -webkit-print-color-adjust: exact;
      break-inside: avoid;
    }
    .paginated ::slotted(.page:not(:first-child)) { margin-top: 1rem; }
    @media print {
      .sheet.paginated { padding: 0; }
      /* The flowing-document vertical inset lives on the repeating
       * thead/tfoot spacers, not the sheet padding — they must go too,
       * or each full-sheet .page is pushed ~margin down and spills onto
       * a second sheet. Paginated pages are full-bleed by definition
       * (content owns its insets). */
      .sheet.paginated .hdr-space,
      .sheet.paginated .ftr-space { height: 0; }
      .paginated ::slotted(.page) {
        border-radius: 0 !important;
        box-shadow: none !important;
        margin: 0 !important;
        /* Physical page-box sizing, no viewport units: Safari resolves
         * 100vh against the window, not the page box, so a vh-sized card
         * paginates wrong there. --doc-page-w/h are the named size by
         * default and are overridden to the user's chosen paper by the
         * export path, so every card is exactly one sheet either way.
         * Width + height (same source values as @page size) rather than
         * width + aspect-ratio: the ratio is a 6-decimal rounding of the
         * same division, and a few millionths of overflow would spill a
         * blank sheet after every page. The screen-only aspect-ratio
         * (preview proportions) must not leak into print. cqh typography
         * tracks the same box.
         *
         * Every declaration is !important: per CSS Scoping, unimportant
         * shadow ::slotted rules LOSE to the document context, so a page
         * section's authored inline style would silently beat this print
         * geometry. A model-authored height:100% did exactly that — the
         * percentage resolves as auto in the all-auto print ancestry, the
         * base rule's size containment turns auto into ZERO, and
         * overflow:hidden then paints nothing: a blank PDF with perfect
         * page boxes. At print the component's geometry is the design's
         * whole contract, so it must win over any authored sizing. */
        aspect-ratio: auto !important;
        width: var(--doc-page-w) !important;
        height: var(--doc-page-h) !important;
        overflow: hidden !important;
      }
      .paginated ::slotted(.page:not(:first-child)) {
        break-before: page !important;
        margin-top: 0 !important;
      }
    }
    .fit-mode .fit-box {
      width: calc(var(--doc-fit-w) * var(--doc-fit-scale));
      height: calc(var(--doc-fit-h) * var(--doc-fit-scale));
      margin: 0 auto;
      break-inside: avoid;
    }
    .fit-mode .fit {
      width: var(--doc-fit-w);
      height: var(--doc-fit-h);
      transform: scale(var(--doc-fit-scale));
      transform-origin: top left;
    }
    .frame td, .frame th { padding: 0; text-align: left; font-weight: inherit; }
    .hdr-space { height: var(--doc-hdr-h); }
    .ftr-space { height: var(--doc-ftr-h); }
    ::slotted([slot="header"]),
    ::slotted([slot="footer"]) { display: block; box-sizing: border-box; }
    @media print {
      :host { background: none; padding: 0; min-width: 0; min-height: 0; }
      .sheet {
        width: auto; margin: 0; box-shadow: none; border-radius: 0;
        padding: 0 var(--doc-page-margin);
      }
      /* The thead/tfoot spacers repeat on every page, so they carry the
       * vertical page margin (which the sheet's own padding cannot, since
       * that padding is consumed once on the first/last page). The running
       * header/footer are fixed inside that band. */
      /* The 0.35in is breathing room between a running header/footer and
       * the body; without one the spacer is exactly the page margin, so a
       * margin="0" full-bleed document gets truly full-bleed pages. */
      .hdr-space { height: max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))); }
      .ftr-space { height: max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))); }
      /* WebKit flowing documents: @page carries the vertical margin (see
       * _syncPrintPageRule), so the spacers keep only whatever a running
       * header/footer needs BEYOND it — page 1 would otherwise double its
       * top inset. Paginated sheets already zero their spacers above. */
      .sheet.wk-print:not(.paginated) .hdr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))) - var(--doc-page-margin))); }
      .sheet.wk-print:not(.paginated) .ftr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))) - var(--doc-page-margin))); }
      ::slotted([slot="header"]) {
        position: fixed; top: 0; left: 0; right: 0; margin: 0;
        padding: calc(var(--doc-page-margin) * 0.45) var(--doc-page-margin) 0;
      }
      ::slotted([slot="footer"]) {
        position: fixed; bottom: 0; left: 0; right: 0; margin: 0;
        padding: 0 var(--doc-page-margin) calc(var(--doc-page-margin) * 0.45);
      }
    }
  `;
  class DocPage extends HTMLElement {
    static get observedAttributes() {
      return ['size', 'width', 'height', 'margin', 'orientation', 'content-width', 'content-height'];
    }
    constructor() {
      super();
      this._root = this.attachShadow({
        mode: 'open'
      });
      this._mo = typeof MutationObserver === 'function' ? new MutationObserver(() => this._scheduleMeasure()) : null;
    }

    /** The named paper's [w, h], swapped when orientation="landscape".
     *  Only the named size swaps — explicit width/height are exact values
     *  the author already oriented. */
    _paperSize() {
      const named = PAPER[(this.getAttribute('size') || '').toLowerCase()] || PAPER.letter;
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? [named[1], named[0]] : named;
    }
    get pageWidth() {
      return safeLen(this.getAttribute('width'), this._paperSize()[0]);
    }
    get pageHeight() {
      return safeLen(this.getAttribute('height'), this._paperSize()[1]);
    }
    get pageMargin() {
      return safeLen(this.getAttribute('margin'), '0.75in');
    }

    /** Scaled-fit mode's content box [w, h] as CSS lengths, or null when
     *  the mode is off (either attribute missing/invalid/zero — a partial
     *  declaration falls back to normal flow rather than guessing). */
    _contentFit() {
      const w = safeLen(this.getAttribute('content-width'), null);
      const h = safeLen(this.getAttribute('content-height'), null);
      if (!w || !h) return null;
      const wPx = toPx(w),
        hPx = toPx(h);
      return wPx > 0 && hPx > 0 ? [w, h, wPx, hPx] : null;
    }
    connectedCallback() {
      if (!this._sheet) this._render();
      this._syncSize();
      this._syncPrintPageRule();
      this._ensureTextWrapDefaults();
      this._ensureOwnsPrintMeta();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      if (this._mo) this._mo.observe(this, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true
      });
      this._onResize = () => this._scheduleMeasure();
      window.addEventListener('resize', this._onResize);
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => this._scheduleMeasure());
      }
      this._scheduleMeasure();
    }
    disconnectedCallback() {
      window.removeEventListener('resize', this._onResize);
      if (this._mo) this._mo.disconnect();
      if (this._raf) {
        cancelAnimationFrame(this._raf);
        this._raf = null;
      }
      // Drop the head rules when the last doc-page leaves, so a deleted
      // document's @page geometry and text-wrap defaults can't apply to
      // whatever replaces it.
      const survivor = document.querySelector('doc-page');
      if (!survivor) {
        ['doc-page-print', 'doc-page-text-wrap', 'doc-page-owns-print', 'doc-page-fixed-size', 'doc-page-print-sizing'].forEach(id => {
          const tag = document.getElementById(id);
          if (tag) tag.remove();
        });
        // A live deck-stage deferred its own print-sizing meta to ours —
        // hand the page-global meta over so the deck isn't left unmarked.
        const deck = document.querySelector('deck-stage');
        if (deck && typeof deck._ensurePrintSizingMeta === 'function') {
          deck._ensurePrintSizingMeta();
        }
      } else {
        // A departed owner hands each page-global meta to whatever
        // doc-page remains (or it's removed).
        if (typeof survivor._syncFixedSizeMeta === 'function') {
          survivor._syncFixedSizeMeta();
        }
        if (typeof survivor._syncPrintSizingMeta === 'function') {
          survivor._syncPrintSizingMeta();
        }
      }
    }
    attributeChangedCallback() {
      if (!this._sheet) return;
      this._syncSize();
      this._syncPrintPageRule();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      this._scheduleMeasure();
    }
    _render() {
      this._root.innerHTML = `
        <style>${stylesheet}</style>
        <style id="vars"></style>
        <div class="sheet" data-screen-label="Document">
          <table class="frame" role="presentation">
            <thead><tr><th><div class="hdr-space"><slot name="header"></slot></div></th></tr></thead>
            <tbody><tr><td class="body"><div class="fit-box"><div class="fit"><slot></slot></div></div></td></tr></tbody>
            <tfoot><tr><td><div class="ftr-space"><slot name="footer"></slot></div></td></tr></tfoot>
          </table>
        </div>`;
      this._sheet = this._root.querySelector('.sheet');
      this._vars = this._root.getElementById('vars');
    }

    /** Runtime sizing lives in a shadow <style> :host rule, never on the
     *  light-DOM host element, so serialize-persist can't write it back. */
    _syncSize(hdrH, ftrH) {
      // Scaled-fit mode: content at its authored size, scaled onto the
      // printable area (page minus margins on both axes). The factor is a
      // plain number var so calc(length * number) stays valid; 4 decimals
      // keeps the shadow style stable across re-measures. Upscaling is
      // allowed — print transforms are vector, so text and CSS stay crisp
      // (raster images soften, which the catalog bullet warns about).
      const fit = this._contentFit();
      let fitVars = '';
      if (fit) {
        const marginPx = toPx(this.pageMargin) || 0;
        const availW = toPx(this.pageWidth) - 2 * marginPx;
        const availH = toPx(this.pageHeight) - 2 * marginPx;
        const scale = Math.min(availW / fit[2], availH / fit[3]);
        if (scale > 0 && Number.isFinite(scale)) {
          fitVars = '--doc-fit-w:' + fit[0] + ';' + '--doc-fit-h:' + fit[1] + ';' + '--doc-fit-scale:' + scale.toFixed(4) + ';';
        }
      }
      this._sheet.classList.toggle('fit-mode', !!fitVars);
      // Numeric w/h ratio for the paginated page cards' aspect-ratio —
      // aspect-ratio takes a number, not a length ratio, so compute it
      // here (CSS length division isn't portable). 6 decimals keeps the
      // shadow style stable across re-syncs.
      const arW = toPx(this.pageWidth);
      const arH = toPx(this.pageHeight);
      const ar = arW > 0 && arH > 0 ? (arW / arH).toFixed(6) : '0.772727';
      this._vars.textContent = ':host{' + fitVars + '--doc-page-ar:' + ar + ';' + '--doc-page-w:' + this.pageWidth + ';' + '--doc-page-h:' + this.pageHeight + ';' + '--doc-page-margin:' + this.pageMargin + ';' + '--doc-hdr-h:' + (hdrH || 0) + 'px;' + '--doc-ftr-h:' + (ftrH || 0) + 'px;' + '--doc-hdr-pad:' + (hdrH ? '0.35in' : '0px') + ';' + '--doc-ftr-pad:' + (ftrH ? '0.35in' : '0px') + '}';
    }

    /** @page is a no-op inside shadow DOM, so the rule lives in <head>.
     *  Re-appended on every sync so it stays last in source order — the
     *  @page cascade is source-order per descriptor, so this rule wins
     *  over any other @page rule in the document.
     *
     *  The @page SIZE is pinned where the page box IS part of the design:
     *  explicit-fixed-size mode (width + height authored), scaled-fit
     *  mode (the named sheet the fit targets), and explicit pagination
     *  (the named size the cards share — so card and sheet agree on
     *  every print path, and the export path's chosen paper overrides
     *  BOTH with one later rule). For FLOWING documents no paper size is
     *  emitted at all — the true size comes from the user's preference,
     *  injected by the export path or chosen in the print dialog — so a
     *  flowing document never fights the paper it lands on.
     *  margin: 0 is emitted in every mode: it leaves Chrome no margin box
     *  to draw its date/URL/page-count header in, and the visual margin
     *  lives on the sheet's own padding. */
    _syncPrintPageRule() {
      const id = 'doc-page-print';
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('style');
        tag.id = id;
      }
      document.head.appendChild(tag);
      // Three print-geometry regimes:
      // - true-size: the page IS the design — pin its exact size.
      // - scaled-fit (content-width/height): the fit factor is computed
      //   against the NAMED paper's printable area, so that paper must
      //   stay pinned or the scaled content overflows a smaller sheet
      //   (the export path re-fits and re-pins at print time on top).
      // - default modes: no paper size — but landscape still needs the
      //   paper-agnostic 'size: landscape' keyword, because the size
      //   descriptor is what carries orientation; without it a landscape
      //   document prints portrait whenever nothing injects a size.
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      // Explicit pagination pins the page box to the SAME values that
      // size the cards (the named size by default, the export path's
      // chosen paper when its later rule overrides both) — card and
      // sheet agree on every print path, and a mismatched real paper
      // shrinks-to-fit in the dialog instead of clipping a Letter card
      // on A4. Declared before the paginated read below so both derive
      // from one check.
      const paginatedNow = this.querySelector(':scope > .page') !== null;
      const sizeDescriptor = this._trueSizePx() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : this._contentFit() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : paginatedNow ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : landscape ? 'size: landscape; ' : '';
      // WebKit never repeats the thead/tfoot spacers that carry a flowing
      // document's vertical page margins (see WK_PRINT above), so pages
      // after the first print edge-to-edge there. Carry the VERTICAL
      // margins on @page for WebKit instead, and the shadow print CSS
      // trims the first-page spacers by the same amount (.sheet.wk-print
      // rules). Horizontal inset stays on the sheet's own padding in
      // every engine. Blink keeps margin: 0 (a nonzero margin there
      // re-opens the box Chrome draws its header furniture in). One cost,
      // learned in testing: Safari's own date/URL headers are a USER
      // dialog setting ("Print headers and footers") that renders in the
      // margin area when room exists — margin: 0 only suppressed it by
      // leaving no room, and no CSS controls it. The export dialog's
      // Safari guide teaches turning the setting off for flowing
      // documents. Explicitly paginated and fixed-size documents keep
      // margin: 0 everywhere: their pages ARE the sheet.
      const wkFlowing = WK_PRINT && !paginatedNow && !this._trueSizePx() && !this._contentFit();
      const marginDescriptor = wkFlowing ? 'margin: ' + this.pageMargin + ' 0; ' : 'margin: 0; ';
      // Shadow-internal marker (never serialized), kept in lockstep with
      // the @page decision above: the print CSS trims the first-page
      // spacers ONLY while @page actually carries the margins — a
      // true-size or scaled-fit sheet keeps margin: 0 and must keep its
      // spacers too. Re-synced here so attribute changes and pagination
      // flips move both together.
      if (this._sheet) this._sheet.classList.toggle('wk-print', wkFlowing);
      tag.textContent = '@page { ' + sizeDescriptor + marginDescriptor + '} ' + '@media print { html, body { margin: 0 !important; padding: 0 !important; background: none !important; height: auto !important; overflow: visible !important; } ' + 'h1,h2,h3,h4,h5,h6 { break-after: avoid; } ' + 'figure,pre,blockquote,img,svg,tr { break-inside: avoid; } ' + 'p,li { orphans: 3; widows: 3; } ' + '* { -webkit-print-color-adjust: exact; print-color-adjust: exact; ' + 'backdrop-filter: none !important; -webkit-backdrop-filter: none !important; } ' + '*, *::before, *::after { animation-delay: -99s !important; animation-duration: .001s !important; ' + 'animation-iteration-count: 1 !important; animation-fill-mode: both !important; ' + 'animation-play-state: running !important; transition-duration: 0s !important; } }';
    }

    /** Typographic defaults for document text: balance headings, avoid
     *  widowed/orphaned words in body copy (browsers without text-wrap
     *  support drop the declarations). Zero-specificity via :where() so
     *  any text-wrap authored on those elements wins; document-level so the
     *  rules reach the slotted (light DOM) content — shadow styles can't.
     *  data-omelette-injected marks the tag for the host editor to strip
     *  at serialize, so it is never written back as authored source. */
    _ensureTextWrapDefaults() {
      if (document.getElementById('doc-page-text-wrap')) return;
      const tag = document.createElement('style');
      tag.id = 'doc-page-text-wrap';
      tag.setAttribute('data-omelette-injected', '');
      tag.textContent = ':where(h1,h2,h3,h4,h5,h6){text-wrap:balance}' + ':where(p,li,blockquote,figcaption){text-wrap:pretty}';
      document.head.appendChild(tag);
    }

    /** Declares that this document owns its print CSS. The instant-PDF
     *  export checks for the meta by NAME PRESENCE alone (content is
     *  ignored) and skips its automatic print-CSS injections, so the
     *  component's @page geometry is never overridden by a heuristic.
     *  data-omelette-injected keeps it out of serialized source. */
    _ensureOwnsPrintMeta() {
      if (document.getElementById('doc-page-owns-print')) return;
      const tag = document.createElement('meta');
      tag.id = 'doc-page-owns-print';
      tag.name = 'omelette-owns-print';
      tag.content = 'true';
      tag.setAttribute('data-omelette-injected', '');
      document.head.appendChild(tag);
    }

    /** This page's valid true-size page box (explicit width AND height)
     *  as [w, h] px ints, or null when the mode is off. */
    _trueSizePx() {
      if (!safeLen(this.getAttribute('width'), null) || !safeLen(this.getAttribute('height'), null)) return null;
      const w = Math.round(toPx(this.pageWidth));
      const h = Math.round(toPx(this.pageHeight));
      return w > 0 && h > 0 ? [w, h] : null;
    }

    /** True-size pages (explicit width AND height) also declare the page
     *  box as the preview size: the in-app preview reads
     *  meta[name="omelette-fixed-size"] (content "W,H" in px ints) and
     *  scales the sheet into view — without it an 18in poster previews at
     *  true size with scrollbars. Never overrides an author-set meta
     *  (only the component's own id is managed). The meta is page-global
     *  while doc-page instances are not, so every sync recomputes the
     *  page-wide owner — the first connected true-size doc-page — and a
     *  non-true-size sibling's sync can never delete the owner's meta.
     *  Removed when no true-size page remains (the owner's disconnect
     *  re-syncs via any survivor) or when an author-set meta exists. */
    _syncFixedSizeMeta() {
      const id = 'doc-page-fixed-size';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-fixed-size"]:not([data-omelette-injected])');
      // The page-wide owner, not this instance: an upgraded true-size page
      // anywhere in the document keeps the meta alive and sized.
      let box = null;
      for (const el of document.querySelectorAll('doc-page')) {
        box = typeof el._trueSizePx === 'function' ? el._trueSizePx() : null;
        if (box) break;
      }
      if (!box || authored) {
        if (own) own.remove();
        return;
      }
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-fixed-size';
      tag.content = box[0] + ',' + box[1];
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }

    /** This page's print-sizing mode: 'fixed' when an explicit width AND
     *  height are authored (the page is the design's own size), else the
     *  default paper in the authored orientation. */
    _printSizingMode() {
      if (this._trueSizePx()) return 'fixed';
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? 'default-landscape' : 'default-portrait';
    }

    /** Announces the print-sizing mode to the host app:
     *  meta[name="omelette-print-sizing"] with content 'default-portrait',
     *  'default-landscape', or 'fixed' (fixed pages also carry the
     *  omelette-fixed-size meta with the page box in px). The export path
     *  probes it to decide what true paper size to inject at print time —
     *  in the default modes the component emits no paper size of its own.
     *  Same page-global ownership rules as the fixed-size meta above:
     *  first connected doc-page owns it, an authored meta is never
     *  overridden, removed when no doc-page remains. */
    _syncPrintSizingMeta() {
      const id = 'doc-page-print-sizing';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-print-sizing"]:not([data-omelette-injected])');
      // A fixed page wins outright (mirroring the fixed-size loop above,
      // so the two metas can never contradict each other in a mixed
      // multi-page document); otherwise the first page's mode holds.
      let mode = null;
      for (const el of document.querySelectorAll('doc-page')) {
        if (typeof el._printSizingMode !== 'function') continue;
        const m = el._printSizingMode();
        if (m === 'fixed') {
          mode = m;
          break;
        }
        if (mode === null) mode = m;
      }
      if (!mode || authored) {
        if (own) own.remove();
        return;
      }
      // A deck-stage that connected first injected its own meta and
      // defers to any existing one — take it over, or the document ends
      // up with two conflicting injected metas (a doc-page page is the
      // document; the deck re-ensures its meta if every doc-page leaves).
      const deckMeta = document.getElementById('deck-stage-print-sizing');
      if (deckMeta) deckMeta.remove();
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-print-sizing';
      tag.content = mode;
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }
    _scheduleMeasure() {
      if (this._raf) return;
      this._raf = requestAnimationFrame(() => {
        this._raf = null;
        this._measure();
      });
    }

    /** Slot heights feed the print spacers (--doc-hdr-h / --doc-ftr-h), so
     *  they re-measure on content mutation, resize, and font load. The
     *  same pass detects explicit pagination (direct .page children) and
     *  toggles the sheet between the flowing-document card and the
     *  page-per-card stack — content edits can add or remove pages at any
     *  time, so this tracks the same mutations the measurement does. */
    _measure() {
      const hdr = this.querySelector(':scope > [slot="header"]');
      const ftr = this.querySelector(':scope > [slot="footer"]');
      const wasPaginated = this._sheet.classList.contains('paginated');
      this._sheet.classList.toggle('paginated', this.querySelector(':scope > .page') !== null);
      // The WebKit @page margin is flowing-only, so a pagination flip
      // must re-emit the rule (content edits can add or remove .page
      // sections at any time).
      if (this._sheet.classList.contains('paginated') !== wasPaginated) {
        this._syncPrintPageRule();
      }
      this._syncSize(hdr ? hdr.offsetHeight : 0, ftr ? ftr.offsetHeight : 0);
    }
  }
  if (!customElements.get('doc-page')) {
    customElements.define('doc-page', DocPage);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "doc-page.js", error: String((e && e.message) || e) }); }

// icons/icon-paths.js
try { (() => {
/* Finicon icon set (finicon.app) — free for personal and commercial use.
   18 glyphs, 24x24 outline, stroke 2, currentColor. Body only: no <svg> wrapper,
   so the same data feeds the React <Icon> and the plain-HTML registry. */
const iconStroke = 2;
const iconViewBox = "0 0 24 24";
const iconPaths = {
  alert: '<path d="M12 14V7M12 18H12.01M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>',
  approve: '<path d="M4 11.4L10 18L20 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>',
  back: '<path d="M19 12H5M11 6L5 12L11 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>',
  calendar: '<path d="M18 5H19C19.5304 5 20.0391 5.21071 20.4142 5.58579C20.7893 5.96086 21 6.46957 21 7V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V7C3 6.46957 3.21071 5.96086 3.58579 5.58579C3.96086 5.21071 4.46957 5 5 5H6M9 3V6M15 3V6M4 10H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>',
  companies: '<path d="M3 20.9999H21M5 20.9999L5.077 6.82593C5.08139 6.40768 5.21845 6.00162 5.46844 5.66626C5.71842 5.33091 6.06842 5.08359 6.468 4.95993L12.392 3.09593C13.682 2.68893 15 3.63793 15 4.97293V20.9999M8 10.6509H12M8 14.5939H12M19 20.9999V11.1439C19 10.5239 18.704 9.93893 18.2 9.56693L15 7.20193" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>',
  dashboard: '<path d="M19.071 20C20.0006 19.0782 20.7381 17.9811 21.2409 16.7724C21.7436 15.5636 22.0016 14.2671 22 12.958C22 7.458 17.523 3 12 3C6.47701 3 2.00001 7.459 2.00001 12.958C1.99837 14.2671 2.2564 15.5636 2.75916 16.7724C3.26192 17.9811 3.99943 19.0782 4.92901 20M12 3.474V5.371M19.07 6.861L17.589 8.055M20.82 14.491L18.964 14.065M3.18001 14.49L5.03601 14.064M4.93001 6.86L6.41001 8.054M15 10.482C15 10.482 13.462 14.799 12.731 15.552C12.3794 15.914 11.8988 16.1222 11.3942 16.131C10.8896 16.1398 10.402 15.9485 10.038 15.599C9.85802 15.4265 9.71395 15.22 9.6141 14.9915C9.51426 14.7631 9.4606 14.5171 9.45623 14.2678C9.45187 14.0185 9.49687 13.7708 9.58865 13.539C9.68043 13.3071 9.81718 13.0957 9.99101 12.917C10.721 12.163 15 10.482 15 10.482Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>',
  disbursement: '<path d="M16 5.5L20 9.5H6M8 18.5L4 14.5H18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>',
  export: '<path d="M3 16L4.406 18.11C4.5887 18.3838 4.83616 18.6083 5.12643 18.7636C5.41671 18.9188 5.74082 19 6.07 19H17.93C18.2592 19 18.5833 18.9188 18.8736 18.7636C19.1638 18.6083 19.4113 18.3838 19.594 18.11L21 16M12 15V5M9 8L12 5L15 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>',
  menu: '<path d="M20 19H4M14.5 12H4M20 5H4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>',
  refresh: '<path d="M5.285 4.27007C4.313 5.16707 3.525 6.25007 2.963 7.45707C1.82859 9.90225 1.69087 12.6931 2.579 15.2381C3.01601 16.494 3.69441 17.6524 4.576 18.6481C5.45043 19.6364 6.51183 20.4419 7.699 21.0181C8.87894 21.5902 10.1617 21.9196 11.4713 21.987C12.7808 22.0543 14.0906 21.8581 15.323 21.4101L12.59 18.6201M18.715 19.7301C19.687 18.8331 20.475 17.7501 21.037 16.5431C22.1714 14.0979 22.3091 11.3071 21.421 8.76207C20.984 7.50609 20.3056 6.34768 19.424 5.35207C18.5496 4.36375 17.4882 3.55827 16.301 2.98207C15.1211 2.40998 13.8383 2.08051 12.5287 2.01317C11.2192 1.94584 9.90939 2.14201 8.677 2.59007L11.383 5.35207" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>',
  reject: '<path d="M5 5L19 19M19 5L5 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>',
  report: '<path d="M14.944 21V4C14.944 3.73478 14.8386 3.48043 14.6511 3.29289C14.4636 3.10536 14.2092 3 13.944 3H9.885C9.61978 3 9.36543 3.10536 9.17789 3.29289C8.99036 3.48043 8.885 3.73478 8.885 4V21M14.944 21L14.942 10.79C14.942 10.5248 15.0474 10.2704 15.2349 10.0829C15.4224 9.89536 15.6768 9.79 15.942 9.79H20C20.2652 9.79 20.5196 9.89536 20.7071 10.0829C20.8946 10.2704 21 10.5248 21 10.79V20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21H14.944ZM14.944 21H8.885M8.885 21V16.058C8.885 15.7928 8.77964 15.5384 8.59211 15.3509C8.40457 15.1634 8.15022 15.058 7.885 15.058H4C3.73478 15.058 3.48043 15.1634 3.29289 15.3509C3.10536 15.5384 3 15.7928 3 16.058V20C3 20.2652 3.10536 20.5196 3.29289 20.7071C3.48043 20.8946 3.73478 21 4 21H8.885Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>',
  requests: '<path d="M6 11H8M6 7H10M18 12H20C20.2652 12 20.5196 12.1054 20.7071 12.2929C20.8946 12.4804 21 12.7348 21 13V20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21H18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M13 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H13C14.1046 21 15 20.1046 15 19V5C15 3.89543 14.1046 3 13 3Z" stroke="currentColor" stroke-width="2"></path>',
  rupee: '<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M8 8H15M8 10.778H15M12.958 18L8 13.556H9.75C13.64 13.556 13.64 8 9.75 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>',
  search: '<path d="M19 19L21 21M19 11C19 13.1217 18.1571 15.1566 16.6569 16.6569C15.1566 18.1571 13.1217 19 11 19C8.87827 19 6.84344 18.1571 5.34315 16.6569C3.84285 15.1566 3 13.1217 3 11C3 8.87827 3.84285 6.84344 5.34315 5.34315C6.84344 3.84285 8.87827 3 11 3C13.1217 3 15.1566 3.84285 16.6569 5.34315C18.1571 6.84344 19 8.87827 19 11Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>',
  trendDown: '<path d="M7.05 7.05005L16.95 16.95M8.465 16.95H16.95V8.46405" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>',
  trend: '<path d="M7.05 16.95L16.95 7.05005M16.95 15.536V7.05005H8.464" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>',
  users: '<path d="M12 9C13.6569 9 15 7.65685 15 6C15 4.34315 13.6569 3 12 3C10.3431 3 9 4.34315 9 6C9 7.65685 10.3431 9 12 9Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M18.5 12C19.3284 12 20 11.3284 20 10.5C20 9.67157 19.3284 9 18.5 9C17.6716 9 17 9.67157 17 10.5C17 11.3284 17.6716 12 18.5 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M5.5 12C6.32843 12 7 11.3284 7 10.5C7 9.67157 6.32843 9 5.5 9C4.67157 9 4 9.67157 4 10.5C4 11.3284 4.67157 12 5.5 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M8 21V16C8 14.9391 8.42143 13.9217 9.17157 13.1716C9.92172 12.4214 10.9391 12 12 12C13.0609 12 14.0783 12.4214 14.8284 13.1716C15.5786 13.9217 16 14.9391 16 16V21M5 15C4.73478 15 4.48043 15.1054 4.29289 15.2929C4.10536 15.4804 4 15.7348 4 16V21M19 15C19.2652 15 19.5196 15.1054 19.7071 15.2929C19.8946 15.4804 20 15.7348 20 16V21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>'
};
const iconSize = {
  sm: 16,
  md: 20,
  lg: 24
};
Object.assign(__ds_scope, { iconStroke, iconViewBox, iconPaths, iconSize });
})(); } catch (e) { __ds_ns.__errors.push({ path: "icons/icon-paths.js", error: String((e && e.message) || e) }); }

// components/icon/Icon.jsx
try { (() => {
/* Icon renders a Finicon glyph at a token size, inheriting color from its parent
   (currentColor). Size accepts a token name ("sm" | "md" | "lg") or a px number. */
function Icon({
  name,
  size = "md",
  color,
  title,
  style
}) {
  const body = __ds_scope.iconPaths[name];
  const px = typeof size === "number" ? size : __ds_scope.iconSize[size] || __ds_scope.iconSize.md;
  if (!body) {
    if (typeof console !== "undefined") console.warn("Icon: unknown name \"" + name + "\"");
    return null;
  }
  return /*#__PURE__*/React.createElement("span", {
    role: title ? "img" : undefined,
    "aria-label": title,
    "aria-hidden": title ? undefined : true,
    style: {
      display: "inline-flex",
      flexShrink: 0,
      width: px,
      height: px,
      color: color || "inherit",
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: '<svg width="100%" height="100%" viewBox="' + __ds_scope.iconViewBox + '" fill="none">' + body + "</svg>"
    }
  });
}
const iconNames = Object.keys(__ds_scope.iconPaths);
Object.assign(__ds_scope, { Icon, iconNames });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icon/Icon.jsx", error: String((e && e.message) || e) }); }

// icons/icon-registry.js
try { (() => {
/* Plain-HTML counterpart to <Icon>. Same Finicon data, no framework.
   Usage:  <span class="ico" data-icon="dashboard"></span>
   In JS:  el.innerHTML = ICONS.approve
   Size and color come from CSS on the .ico span (default 20px, currentColor). */
(function () {
  var VIEWBOX = "0 0 24 24";
  var BODY = {
    alert: '<path d="M12 14V7M12 18H12.01M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>',
    approve: '<path d="M4 11.4L10 18L20 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>',
    back: '<path d="M19 12H5M11 6L5 12L11 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>',
    calendar: '<path d="M18 5H19C19.5304 5 20.0391 5.21071 20.4142 5.58579C20.7893 5.96086 21 6.46957 21 7V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V7C3 6.46957 3.21071 5.96086 3.58579 5.58579C3.96086 5.21071 4.46957 5 5 5H6M9 3V6M15 3V6M4 10H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>',
    companies: '<path d="M3 20.9999H21M5 20.9999L5.077 6.82593C5.08139 6.40768 5.21845 6.00162 5.46844 5.66626C5.71842 5.33091 6.06842 5.08359 6.468 4.95993L12.392 3.09593C13.682 2.68893 15 3.63793 15 4.97293V20.9999M8 10.6509H12M8 14.5939H12M19 20.9999V11.1439C19 10.5239 18.704 9.93893 18.2 9.56693L15 7.20193" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>',
    dashboard: '<path d="M19.071 20C20.0006 19.0782 20.7381 17.9811 21.2409 16.7724C21.7436 15.5636 22.0016 14.2671 22 12.958C22 7.458 17.523 3 12 3C6.47701 3 2.00001 7.459 2.00001 12.958C1.99837 14.2671 2.2564 15.5636 2.75916 16.7724C3.26192 17.9811 3.99943 19.0782 4.92901 20M12 3.474V5.371M19.07 6.861L17.589 8.055M20.82 14.491L18.964 14.065M3.18001 14.49L5.03601 14.064M4.93001 6.86L6.41001 8.054M15 10.482C15 10.482 13.462 14.799 12.731 15.552C12.3794 15.914 11.8988 16.1222 11.3942 16.131C10.8896 16.1398 10.402 15.9485 10.038 15.599C9.85802 15.4265 9.71395 15.22 9.6141 14.9915C9.51426 14.7631 9.4606 14.5171 9.45623 14.2678C9.45187 14.0185 9.49687 13.7708 9.58865 13.539C9.68043 13.3071 9.81718 13.0957 9.99101 12.917C10.721 12.163 15 10.482 15 10.482Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>',
    disbursement: '<path d="M16 5.5L20 9.5H6M8 18.5L4 14.5H18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>',
    export: '<path d="M3 16L4.406 18.11C4.5887 18.3838 4.83616 18.6083 5.12643 18.7636C5.41671 18.9188 5.74082 19 6.07 19H17.93C18.2592 19 18.5833 18.9188 18.8736 18.7636C19.1638 18.6083 19.4113 18.3838 19.594 18.11L21 16M12 15V5M9 8L12 5L15 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>',
    menu: '<path d="M20 19H4M14.5 12H4M20 5H4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>',
    refresh: '<path d="M5.285 4.27007C4.313 5.16707 3.525 6.25007 2.963 7.45707C1.82859 9.90225 1.69087 12.6931 2.579 15.2381C3.01601 16.494 3.69441 17.6524 4.576 18.6481C5.45043 19.6364 6.51183 20.4419 7.699 21.0181C8.87894 21.5902 10.1617 21.9196 11.4713 21.987C12.7808 22.0543 14.0906 21.8581 15.323 21.4101L12.59 18.6201M18.715 19.7301C19.687 18.8331 20.475 17.7501 21.037 16.5431C22.1714 14.0979 22.3091 11.3071 21.421 8.76207C20.984 7.50609 20.3056 6.34768 19.424 5.35207C18.5496 4.36375 17.4882 3.55827 16.301 2.98207C15.1211 2.40998 13.8383 2.08051 12.5287 2.01317C11.2192 1.94584 9.90939 2.14201 8.677 2.59007L11.383 5.35207" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>',
    reject: '<path d="M5 5L19 19M19 5L5 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>',
    report: '<path d="M14.944 21V4C14.944 3.73478 14.8386 3.48043 14.6511 3.29289C14.4636 3.10536 14.2092 3 13.944 3H9.885C9.61978 3 9.36543 3.10536 9.17789 3.29289C8.99036 3.48043 8.885 3.73478 8.885 4V21M14.944 21L14.942 10.79C14.942 10.5248 15.0474 10.2704 15.2349 10.0829C15.4224 9.89536 15.6768 9.79 15.942 9.79H20C20.2652 9.79 20.5196 9.89536 20.7071 10.0829C20.8946 10.2704 21 10.5248 21 10.79V20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21H14.944ZM14.944 21H8.885M8.885 21V16.058C8.885 15.7928 8.77964 15.5384 8.59211 15.3509C8.40457 15.1634 8.15022 15.058 7.885 15.058H4C3.73478 15.058 3.48043 15.1634 3.29289 15.3509C3.10536 15.5384 3 15.7928 3 16.058V20C3 20.2652 3.10536 20.5196 3.29289 20.7071C3.48043 20.8946 3.73478 21 4 21H8.885Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>',
    requests: '<path d="M6 11H8M6 7H10M18 12H20C20.2652 12 20.5196 12.1054 20.7071 12.2929C20.8946 12.4804 21 12.7348 21 13V20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21H18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M13 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H13C14.1046 21 15 20.1046 15 19V5C15 3.89543 14.1046 3 13 3Z" stroke="currentColor" stroke-width="2"></path>',
    rupee: '<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M8 8H15M8 10.778H15M12.958 18L8 13.556H9.75C13.64 13.556 13.64 8 9.75 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>',
    search: '<path d="M19 19L21 21M19 11C19 13.1217 18.1571 15.1566 16.6569 16.6569C15.1566 18.1571 13.1217 19 11 19C8.87827 19 6.84344 18.1571 5.34315 16.6569C3.84285 15.1566 3 13.1217 3 11C3 8.87827 3.84285 6.84344 5.34315 5.34315C6.84344 3.84285 8.87827 3 11 3C13.1217 3 15.1566 3.84285 16.6569 5.34315C18.1571 6.84344 19 8.87827 19 11Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>',
    trendDown: '<path d="M7.05 7.05005L16.95 16.95M8.465 16.95H16.95V8.46405" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>',
    trend: '<path d="M7.05 16.95L16.95 7.05005M16.95 15.536V7.05005H8.464" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>',
    users: '<path d="M12 9C13.6569 9 15 7.65685 15 6C15 4.34315 13.6569 3 12 3C10.3431 3 9 4.34315 9 6C9 7.65685 10.3431 9 12 9Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M18.5 12C19.3284 12 20 11.3284 20 10.5C20 9.67157 19.3284 9 18.5 9C17.6716 9 17 9.67157 17 10.5C17 11.3284 17.6716 12 18.5 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M5.5 12C6.32843 12 7 11.3284 7 10.5C7 9.67157 6.32843 9 5.5 9C4.67157 9 4 9.67157 4 10.5C4 11.3284 4.67157 12 5.5 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M8 21V16C8 14.9391 8.42143 13.9217 9.17157 13.1716C9.92172 12.4214 10.9391 12 12 12C13.0609 12 14.0783 12.4214 14.8284 13.1716C15.5786 13.9217 16 14.9391 16 16V21M5 15C4.73478 15 4.48043 15.1054 4.29289 15.2929C4.10536 15.4804 4 15.7348 4 16V21M19 15C19.2652 15 19.5196 15.1054 19.7071 15.2929C19.8946 15.4804 20 15.7348 20 16V21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>'
  };
  BODY.people = BODY.users;
  var ICONS = {};
  Object.keys(BODY).forEach(function (k) {
    ICONS[k] = '<svg width="100%" height="100%" viewBox="' + VIEWBOX + '" fill="none" aria-hidden="true">' + BODY[k] + '</svg>';
  });
  window.ICONS = ICONS;
  window.hydrateIcons = function (root) {
    (root || document).querySelectorAll("[data-icon]").forEach(function (el) {
      var svg = ICONS[el.getAttribute("data-icon")];
      if (svg && !el.firstElementChild) el.innerHTML = svg;
    });
  };
  document.addEventListener("DOMContentLoaded", function () {
    window.hydrateIcons(document);
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "icons/icon-registry.js", error: String((e && e.message) || e) }); }

// ui_kits/ndps-app/DashboardScreen.jsx
try { (() => {
const RECENT_WITHDRAWALS = [{
  title: "Withdrawal (HR approval)",
  date: "20 Jun 2026",
  amount: "₹3,000",
  status: "Awaiting approval",
  variant: "warning"
}, {
  title: "Withdrawal to Wallet",
  date: "12 Jun 2026",
  amount: "₹2,500",
  status: "Credited",
  variant: "success"
}, {
  title: "Withdrawal to Wallet",
  date: "5 Jun 2026",
  amount: "₹1,500",
  status: "Credited",
  variant: "success"
}];
function IconBadge({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 34,
      height: 34,
      flexShrink: 0,
      borderRadius: 10,
      background: "var(--color-primary-bg)",
      color: "var(--color-primary)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 15,
      fontWeight: 700
    }
  }, children);
}
function DashboardScreen({
  onWithdraw,
  onHistory
}) {
  const {
    Button,
    Tag
  } = window.NDPSDesignSystem_82df03;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: 20,
      paddingBottom: 90
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      whiteSpace: "nowrap",
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 20,
      color: "var(--text-heading)"
    }
  }, "Earned Wage Access")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: "var(--radius-card-px)",
      background: "var(--core-navy-smart)",
      padding: 22,
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 200 200",
    fill: "none",
    style: {
      position: "absolute",
      right: -50,
      bottom: -70,
      width: 280,
      height: 280,
      opacity: 0.5,
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M-20 210 C 40 150, 60 90, 210 -20",
    stroke: "rgba(255,255,255,0.12)",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M-20 240 C 60 170, 80 100, 240 -20",
    stroke: "rgba(255,255,255,0.08)",
    strokeWidth: "1.5"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      fontWeight: 600,
      color: "rgba(255,255,255,0.65)"
    }
  }, "Available to withdraw today"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 15,
      height: 15,
      borderRadius: 99,
      boxShadow: "inset 0 0 0 1.5px rgba(255,255,255,0.4)",
      color: "rgba(255,255,255,0.55)",
      font: "600 10px/15px var(--font-sans)",
      textAlign: "center"
    }
  }, "i")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 46,
      lineHeight: 1,
      color: "var(--core-white)",
      marginTop: 8
    }
  }, "\u20B99,500")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 7,
      borderRadius: 99,
      background: "rgba(255,255,255,0.16)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      width: "30%",
      borderRadius: 99,
      background: "var(--core-blue-50)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      color: "rgba(255,255,255,0.5)",
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u20B94,000 withdrawn"), /*#__PURE__*/React.createElement("span", null, "\u20B913,500 cap"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16,
      paddingTop: 18,
      borderTop: "1px solid rgba(255,255,255,0.1)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      color: "rgba(255,255,255,0.45)"
    }
  }, "Working days"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 23,
      color: "var(--core-white)",
      marginTop: 6
    }
  }, "18/30")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      color: "rgba(255,255,255,0.45)"
    }
  }, "Earned so far"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 23,
      color: "var(--core-white)",
      marginTop: 6
    }
  }, "\u20B927,000"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    size: "large",
    style: {
      width: "100%"
    },
    onClick: onWithdraw
  }, "Withdraw money"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 16,
      color: "var(--text-heading)"
    }
  }, "Recent withdrawals"), RECENT_WITHDRAWALS.map((row, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "12px 14px",
      borderRadius: 12,
      background: "var(--bg-container)",
      boxShadow: "inset 0 0 0 1px var(--border-default)"
    }
  }, /*#__PURE__*/React.createElement(IconBadge, null, "\u2193"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      fontSize: 13.5,
      color: "var(--text-heading)"
    }
  }, row.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 11,
      color: "var(--text-muted)"
    }
  }, row.date)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: 13.5,
      color: "var(--text-heading)"
    }
  }, row.amount), /*#__PURE__*/React.createElement(Tag, {
    variant: row.variant
  }, row.status))))));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ndps-app/DashboardScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ndps-app/HistoryScreen.jsx
try { (() => {
const ROWS = [{
  date: "12 Jan 2026",
  amount: "₹2,000",
  status: "success"
}, {
  date: "28 Dec 2025",
  amount: "₹1,500",
  status: "success"
}, {
  date: "14 Dec 2025",
  amount: "₹3,200",
  status: "warning"
}, {
  date: "1 Dec 2025",
  amount: "₹800",
  status: "error"
}, {
  date: "18 Nov 2025",
  amount: "₹1,000",
  status: "neutral"
}];
const STATUS_LABEL = {
  success: "Approved",
  warning: "Pending",
  error: "Declined",
  neutral: "Draft"
};
const STATUS_VARIANT = {
  success: "success",
  warning: "warning",
  error: "error",
  neutral: "neutral"
};
function HistoryScreen({
  onBack,
  justWithdrew
}) {
  const {
    Tag
  } = window.NDPSDesignSystem_82df03;
  const rows = justWithdrew ? [{
    date: "Today",
    amount: `₹${justWithdrew}`,
    status: "warning"
  }, ...ROWS] : ROWS;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      border: "none",
      background: "none",
      cursor: "pointer",
      fontFamily: "var(--font-sans)",
      fontSize: 20,
      color: "var(--text-heading)",
      padding: 0
    }
  }, "\u2190"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      whiteSpace: "nowrap",
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 20,
      color: "var(--text-heading)"
    }
  }, "Withdrawal history")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, rows.map((row, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "14px 16px",
      borderRadius: 12,
      background: "var(--bg-container)",
      boxShadow: "inset 0 0 0 1px var(--border-default)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      fontSize: 14,
      color: "var(--text-heading)"
    }
  }, row.amount), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 11,
      color: "var(--text-muted)"
    }
  }, row.date)), /*#__PURE__*/React.createElement(Tag, {
    variant: STATUS_VARIANT[row.status]
  }, STATUS_LABEL[row.status])))));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ndps-app/HistoryScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ndps-app/WithdrawScreen.jsx
try { (() => {
function WithdrawScreen({
  onBack,
  onConfirm
}) {
  const {
    Button,
    Input,
    Alert
  } = window.NDPSDesignSystem_82df03;
  const [amount, setAmount] = React.useState("2000");
  const fee = 50;
  const numeric = parseInt(amount || "0", 10);
  const feeTooHigh = numeric > 0 && fee > numeric * 0.05 && numeric < 1000;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20,
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      border: "none",
      background: "none",
      cursor: "pointer",
      fontFamily: "var(--font-sans)",
      fontSize: 20,
      color: "var(--text-heading)",
      padding: 0
    }
  }, "\u2190"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      whiteSpace: "nowrap",
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 20,
      color: "var(--text-heading)"
    }
  }, "Withdraw money")), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 16,
      background: "var(--bg-container)",
      boxShadow: "inset 0 0 0 1px var(--border-default)",
      padding: 24,
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Amount",
    value: `₹${amount}`,
    state: feeTooHigh ? "error" : "focus",
    helper: feeTooHigh ? `The ₹${fee} fee is more than your amount.` : "Focused — border color/primary",
    onChange: e => setAmount(e.target.value.replace(/[^0-9]/g, ""))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      color: "var(--text-secondary)"
    }
  }, "Minimum \u20B91,000 \xB7 Eligible \u20B9640")), feeTooHigh ? /*#__PURE__*/React.createElement(Alert, {
    variant: "error",
    title: "Fee is higher than request",
    description: "Increase your withdrawal amount."
  }) : /*#__PURE__*/React.createElement(Alert, {
    variant: "warning",
    title: "Monthly limit nearly used",
    description: "Remaining \u20B9700 \xB7 Minimum \u20B91,000."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    size: "medium",
    disabled: feeTooHigh,
    onClick: onConfirm
  }, "Confirm Withdrawal"), /*#__PURE__*/React.createElement(Button, {
    type: "neutral",
    size: "medium",
    onClick: onBack
  }, "Cancel")));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ndps-app/WithdrawScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Descriptions = __ds_scope.Descriptions;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.InnovationCurve = __ds_scope.InnovationCurve;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.QuickAmountInput = __ds_scope.QuickAmountInput;

__ds_ns.Table = __ds_scope.Table;

__ds_ns.Tag = __ds_scope.Tag;

})();
