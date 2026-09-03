import React from "react";

const cellFont = "var(--font-sans)";

export function Table({ columns = [], data = [], style }) {
  const align = (c) => c.align || "left";
  return (
    <div
      style={{
        boxShadow: "inset 0 0 0 1px var(--border-default)",
        borderRadius: "var(--radius-card-px)",
        overflow: "auto",
        background: "var(--bg-elevated)",
        ...style,
      }}
    >
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontFamily: cellFont,
          fontSize: 13,
        }}
      >
        <thead>
          <tr>
            {columns.map((c, i) => (
              <th
                key={c.key ?? i}
                style={{
                  textAlign: align(c),
                  padding: "12px 16px",
                  fontSize: 11,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.02em",
                  color: "var(--text-muted)",
                  background: "var(--bg-elevated)",
                  boxShadow: "inset 0 -1px 0 var(--border-default)",
                  ...(c.action
                    ? {
                        width: "1%",
                        whiteSpace: "nowrap",
                        position: "sticky",
                        right: 0,
                        zIndex: 2,
                      }
                    : null),
                  ...(i === 0
                    ? { borderTopLeftRadius: "var(--radius-card-px)" }
                    : null),
                  ...(i === columns.length - 1
                    ? { borderTopRightRadius: "var(--radius-card-px)" }
                    : null),
                }}
              >
                {c.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, ri) => {
            const last = ri === data.length - 1;
            return (
              <tr key={row.key ?? ri}>
                {columns.map((c, ci) => {
                  const content = c.render ? c.render(row) : row[c.key];
                  const amount = c.amount;
                  return (
                    <td
                      key={c.key ?? ci}
                      style={{
                        padding: "14px 16px",
                        textAlign: align(c),
                        color: "var(--text-body)",
                        boxShadow: last
                          ? "none"
                          : "inset 0 -1px 0 var(--border-default)",
                        ...(amount
                          ? {
                              fontFamily: "var(--font-display)",
                              fontWeight: 700,
                              color: "var(--text-heading)",
                              fontVariantNumeric: "tabular-nums",
                            }
                          : null),
                        ...(c.action
                          ? {
                              width: "1%",
                              whiteSpace: "nowrap",
                              position: "sticky",
                              right: 0,
                              zIndex: 2,
                              background: "var(--bg-elevated)",
                              boxShadow: last
                                ? "inset 1px 0 0 var(--border-default)"
                                : "inset 0 -1px 0 var(--border-default), inset 1px 0 0 var(--border-default)",
                            }
                          : null),
                      }}
                    >
                      {content}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
