"use client";

import { useMemo, useState } from "react";
import { ruleSections } from "@/data/rules";
import RuleSection from "@/components/RuleSection";
import SearchBar from "@/components/SearchBar";
import Sidebar from "@/components/Sidebar";

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
            (rule.description?.toLowerCase().includes(query) ?? false)
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
          marginBottom: "60px",
        }}
      >
        <h1
          className="gradient-text"
          style={{
            fontSize: "clamp(2.8rem,7vw,5rem)",
            fontWeight: 900,
          }}
        >
          📖 ValoriaSMP Rulebook
        </h1>

        <p
          style={{
            color: "#94a3b8",
            marginTop: "14px",
            fontSize: "1.1rem",
          }}
        >
          Read every rule before playing.
          Ignorance of the rules is not an excuse.
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
        <Sidebar sections={ruleSections} />

        <div>
          {filteredSections.length === 0 ? (
            <div className="card">
              <h2>No rules found.</h2>

              <p
                style={{
                  marginTop: "10px",
                  color: "#94a3b8",
                }}
              >
                Try searching for another keyword.
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
