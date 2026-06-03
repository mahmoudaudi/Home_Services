export default function CheckItem({ children, color = "#2196F3", textColor = "#142257" }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0 }}
        aria-hidden="true"
      >
        <polyline
          points="20 6 9 17 4 12"
          stroke={color}
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span style={{ fontSize: "14px", fontWeight: 700, color: textColor, fontFamily: "var(--font-sans)" }}>
        {children}
      </span>
    </div>
  );
}
