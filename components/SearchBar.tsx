"use client";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({
  value,
  onChange,
}: SearchBarProps) {
  return (
    <div
      className="glass"
      style={{
        padding: "18px",
        marginBottom: "28px",
      }}
    >
      <input
        type="text"
        placeholder="🔍 Search rules..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: "100%",
          background: "transparent",
          border: "none",
          outline: "none",
          color: "white",
          fontSize: "1rem",
        }}
      />
    </div>
  );
}
