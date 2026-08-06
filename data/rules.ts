import { RuleSection } from "@/types/rule";

export const ruleSections: RuleSection[] = [
  {
    id: "general",
    icon: "📋",
    title: "General Rules",
    rules: [
      {
        title: "Follow Discord Terms of Service.",
      },
      {
        title: "Staff have the final say.",
        description:
          "Staff decisions regarding punishments and rule interpretations are final.",
      },
      {
        title: "Be respectful to everyone.",
      },
      {
        title: "Keep toxicity to a minimum.",
        description:
          "Harassment, encouraging self-harm, or excessive toxicity is prohibited.",
      },
      {
        title: "No hate speech.",
        description:
          "Racism, sexism, homophobia, discrimination, or offensive slurs are strictly prohibited.",
        punishment: "Permanent Ban",
      },
      {
        title: "No false reports.",
      },
      {
        title: "Keep personal arguments in DMs.",
      },
      {
        title: "No threats.",
        description:
          "DDoS threats, death threats, blackmail, and doxxing are prohibited.",
        punishment: "Permanent Ban",
      },
      {
        title: "No advertising or self-promotion.",
        description:
          "Advertising servers, websites, Discords, or sending advertisements through DMs is prohibited.",
        punishment: "Permanent Ban",
      },
      {
        title: "No excessive pinging.",
      },
      {
        title: "Do not repeatedly leave and rejoin the server.",
      },
      {
        title: "Do not bait or provoke players.",
      },
      {
        title: "No NSFW or gore.",
        punishment: "Permanent Ban",
      },
      {
        title: "Respect everyone's privacy.",
        description:
          "Do not share personal information, screenshots, recordings, or DMs without permission.",
        punishment: "Permanent Ban",
      },
      {
        title: "Do not promote drugs or illegal activities.",
      },
    ],
  },

  {
    id: "combat",
    icon: "⚔️",
    title: "Combat & Item Rules",
    rules: [
      {
        title: "TNT Minecarts are prohibited.",
      },
      {
        title: "End Crystals are prohibited.",
      },
      {
        title: "Respawn Anchors are prohibited.",
      },
      {
        title: "Explosive PvP is prohibited.",
      },
      {
        title: "Spawn trapping is prohibited.",
      },
      {
        title: "Killing naked or unarmed players without reason is prohibited.",
      },
      {
        title: "Hack clients, unfair mods, exploit packs, or cheats are prohibited.",
        punishment: "Permanent Ban",
      },
      {
        title: "Players interfering with an ongoing fight may be attacked.",
      },
    ],
  },
];
