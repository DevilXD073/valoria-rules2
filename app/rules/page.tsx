"use client";

import { useMemo, useState } from "react";

import SearchBar from "@/components/SearchBar";
import Sidebar from "@/components/Sidebar";
import RuleSection from "@/components/RuleSection";

import { ruleSections } from "@/data/rules";

export default function RulesPage() {
  const [search, setSearch] = useState("");

  const filteredSections = useMemo(() => {
    if (!search.trim()) return ruleSections;

    const query = search.toLowerCase();

    return ruleSections
      .map((section) => ({
        ...section,
        rules: section.rules.filter((rule) => {
          return (
            rule.title.toLowerCase().includes(query) ||
            (rule.description ?? "")
              .toLowerCase()
              .includes(query) ||
            (rule.punishment ?? "")
              .toLowerCase()
              .includes(query)
          );
        }),
      }))
      .filter((section) => section.rules.length > 0);
  }, [search]);

  return (
    <main className="container section">
      <div
        style={{
          textAlign: "center",
          marginBottom: "50px",
        }}
      >
        <h1
          className="gradient-text"
          style={{
            fontSize: "clamp(2.5rem,6vw,4rem)",
            fontWeight: 900,
            marginBottom: "16px",
          }}
        >
          📖 ValoriaSMP Rulebook
        </h1>

        <p
          style={{
            color: "#94a3b8",
            maxWidth: "750px",
            margin: "0 auto",
            lineHeight: 1.8,
          }}
        >
          Read every rule carefully before playing. Ignorance of the rules
          is not an excuse for breaking them.
        </p>
      </div>

      <SearchBar
        value={search}
        onChange={setSearch}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "280px 1fr",
          gap: "32px",
          alignItems: "start",
        }}
      >
        <Sidebar sections={filteredSections} />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "40px",
          }}
        >
          {filteredSections.length === 0 ? (
            <div className="glass" style={{ padding: "40px" }}>
              <h2>No rules found.</h2>

              <p
                style={{
                  color: "#94a3b8",
                  marginTop: "12px",
                }}
              >
                Try another search.
              </p>
            </div>
          ) : (
            filteredSections.map((section) => (
              <RuleSection
                key={section.id}
                section={section}
              />
            ))
          )}
        </div>
      </div>
    </main>
  );
}
