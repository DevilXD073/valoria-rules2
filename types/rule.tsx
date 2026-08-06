export interface Rule {
  title: string;
  description?: string;
  punishment?: "Warn" | "Temp Ban" | "Permanent Ban";
}

export interface RuleSection {
  id: string;
  title: string;
  icon: string;
  rules: Rule[];
}
