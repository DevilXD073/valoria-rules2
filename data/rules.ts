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
  {
    id: "gameplay",
    icon: "🎮",
    title: "Gameplay Rules",
    rules: [
      {
        title: "Vision Logging",
        description:
          "If a player has seen you or is actively engaging with you, you may not use commands or log out to escape combat.",
      },
      {
        title: "Spawn Vision Rule",
        description:
          "Players in combat may not enter spawn to escape. Entering spawn while not in combat is allowed.",
      },
      {
        title: "Naked Killing",
        description:
          "Purposely giving items to an unarmed player just to kill them counts as naked killing.",
      },
      {
        title: "Hack Reports",
        description:
          "Accusing players without evidence will not result in punishment. Use recordings whenever possible.",
      },
      {
        title: "Screenshare",
        description:
          "Staff may request a screenshare during investigations. Refusing may result in punishment.",
      }
    ]
  },

  {
    id: "voice",
    icon: "🎤",
    title: "Voice Chat Rules",
    rules: [
      {
        title: "No earrape or mic spam."
      },
      {
        title: "No music bot spam."
      },
      {
        title: "Keep soundboards and voice changers reasonable."
      },
      {
        title: "No NSFW or gore in voice chats.",
        punishment: "Permanent Ban"
      },
      {
        title: "Do not expose inappropriate content on camera.",
        punishment: "Permanent Ban"
      },
      {
        title: "Get everyone's permission before recording a voice chat unless collecting evidence."
      }
    ]
  },

  {
    id: "text",
    icon: "💬",
    title: "Text Chat Rules",
    rules: [
      {
        title: "No spam or flooding chat."
      },
      {
        title: "No emoji or sticker spam."
      },
      {
        title: "Do not misuse media channels."
      },
      {
        title: "Do not send malicious or misleading links."
      },
      {
        title: "Do not advertise other servers or communities.",
        punishment: "Permanent Ban"
      }
    ]
  }
