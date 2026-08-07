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
          "Harassment, bullying, or encouraging self-harm is prohibited.",
      },
      {
        title: "No hate speech.",
        description:
          "Racism, sexism, homophobia, discrimination, or offensive slurs are strictly prohibited.",
        punishment: "Permanent Ban",
      },
      {
        title: "No false reports.",
        description:
          "Do not intentionally submit fake reports against players or staff.",
      },
      {
        title: "Keep personal arguments in DMs.",
      },
      {
        title: "No threats.",
        description:
          "Death threats, DDoS threats, blackmail, or doxxing are strictly prohibited.",
        punishment: "Permanent Ban",
      },
      {
        title: "No advertising or self-promotion.",
        description:
          "Advertising servers, Discords, websites, YouTube channels, or other communities without permission is prohibited.",
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
        title: "Do not promote illegal activities.",
      },
      {
        title: "Use common sense.",
        description:
          "If something gives an unfair advantage or harms the community, staff may still take action even if it is not explicitly listed.",
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
        description:
          "Using TNT Minecarts to kill players or destroy bases is not allowed.",
      },
      {
        title: "End Crystals are prohibited.",
        description:
          "End Crystal PvP is disabled and any attempt to bypass this restriction is prohibited.",
      },
      {
        title: "Respawn Anchors are prohibited.",
        description:
          "Using Respawn Anchors as weapons or explosives is not allowed.",
      },
      {
        title: "Explosive PvP is prohibited.",
        description:
          "Any combat involving excessive explosives to gain an unfair advantage is prohibited.",
      },
      {
        title: "Spawn trapping is prohibited.",
        description:
          "Do not repeatedly kill players at spawn or prevent them from leaving spawn safely.",
      },
      {
        title: "Killing naked or unarmed players without reason is prohibited.",
      },
      {
        title: "Combat logging is prohibited.",
        description:
          "Logging out to escape PvP or avoid death is not allowed.",
        punishment: "Temp Ban",
      },
      {
        title: "Hack clients, unfair mods, exploit packs, macros, or cheats are prohibited.",
        description:
          "Any modification that provides an unfair gameplay advantage is forbidden.",
        punishment: "Permanent Ban",
      },
      {
        title: "Abusing duplication glitches is prohibited.",
        punishment: "Permanent Ban",
      },
      {
        title: "Cross-teaming to bypass server rules is prohibited.",
      },
      {
        title: "Players interfering with an ongoing fight may be attacked.",
      },
      {
        title: "Using bugs or exploits during combat is prohibited.",
        punishment: "Permanent Ban",
      },
      {
        title: "Intentional lag machines or methods that create server lag are prohibited.",
        punishment: "Permanent Ban",
      },
      {
        title: "Respect PvP events and event-specific rules.",
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
          "If a player has seen you or is actively engaging with you, you may not disconnect or use commands to escape.",
        punishment: "Temp Ban",
      },
      {
        title: "Combat Logging",
        description:
          "Logging out during PvP to avoid death or consequences is prohibited.",
        punishment: "Temp Ban",
      },
      {
        title: "Spawn Vision Rule",
        description:
          "Players may not enter spawn or any designated safe zone to escape an active fight.",
      },
      {
        title: "No exploiting server bugs.",
        description:
          "Any bug or glitch that provides an unfair advantage must be reported instead of abused.",
        punishment: "Permanent Ban",
      },
      {
        title: "No duplication glitches.",
        description:
          "Duping items, blocks, or currency through exploits is strictly prohibited.",
        punishment: "Permanent Ban",
      },
      {
        title: "No x-ray or unfair resource packs.",
        description:
          "Any texture pack or modification that reveals hidden ores or entities is prohibited.",
        punishment: "Permanent Ban",
      },
      {
        title: "No unauthorized alt accounts.",
        description:
          "Using alternate accounts to bypass punishments or gain an unfair advantage is prohibited.",
        punishment: "Permanent Ban",
      },
      {
        title: "No intentionally causing server lag.",
        description:
          "Lag machines or any action that intentionally harms server performance are prohibited.",
        punishment: "Permanent Ban",
      },
      {
        title: "Respect world borders and protected regions.",
      },
      {
        title: "Do not grief protected builds or event areas.",
      },
      {
        title: "Screenshare requests must be followed.",
        description:
          "If requested by staff, refusing a valid screenshare may result in punishment.",
      },
      {
        title: "Do not impersonate staff members.",
        punishment: "Permanent Ban",
      },
      {
        title: "Use common sense.",
        description:
          "Any action intended to gain an unfair advantage may be punishable even if not explicitly listed.",
      },
    ],
        {
    id: "voice",
    icon: "🎤",
    title: "Voice Chat Rules",
    rules: [
      {
        title: "No earrape or microphone abuse.",
        description:
          "Extremely loud, distorted, or disruptive microphone audio is prohibited.",
      },
      {
        title: "No music spam.",
        description:
          "Do not continuously play music or sounds that disturb other players.",
      },
      {
        title: "Keep soundboards reasonable.",
        description:
          "Occasional use is fine, but excessive soundboard spam is prohibited.",
      },
      {
        title: "No voice changer abuse.",
        description:
          "Voice changers may not be used to impersonate staff or harass players.",
      },
      {
        title: "No screaming or disruptive behaviour.",
      },
      {
        title: "No hate speech in voice chat.",
        description:
          "Racism, sexism, homophobia, slurs, or discriminatory language is strictly prohibited.",
        punishment: "Permanent Ban",
      },
      {
        title: "No NSFW or explicit discussions.",
        punishment: "Permanent Ban",
      },
      {
        title: "Do not expose inappropriate content on camera.",
        punishment: "Permanent Ban",
      },
      {
        title: "Do not record voice chats without permission.",
        description:
          "Recording is only allowed if it is being used as evidence for a report.",
      },
      {
        title: "Do not harass or target players in voice chat.",
      },
      {
        title: "Respect staff instructions in voice channels.",
      },
      {
        title: "Do not intentionally interrupt events or staff announcements.",
      },
    ],
  },
    {
    id: "text",
    icon: "💬",
    title: "Text Chat Rules",
    rules: [
      {
        title: "No chat spam.",
        description:
          "Repeated messages, excessive capital letters, or flooding the chat is prohibited.",
      },
      {
        title: "No emoji or character spam.",
      },
      {
        title: "Keep chat respectful.",
        description:
          "Harassment, bullying, and excessive toxicity towards other players is prohibited.",
      },
      {
        title: "No hate speech.",
        description:
          "Racism, sexism, homophobia, slurs, or discriminatory language is strictly prohibited.",
        punishment: "Permanent Ban",
      },
      {
        title: "No advertising.",
        description:
          "Advertising other Minecraft servers, Discord servers, websites, or communities without permission is prohibited.",
        punishment: "Permanent Ban",
      },
      {
        title: "No malicious or phishing links.",
        punishment: "Permanent Ban",
      },
      {
        title: "No impersonating staff or other players.",
        punishment: "Permanent Ban",
      },
      {
        title: "Keep conversations appropriate.",
        description:
          "Avoid NSFW, explicit, or extremely offensive discussions.",
      },
      {
        title: "No false information.",
        description:
          "Do not intentionally spread misinformation about the server or staff.",
      },
      {
        title: "Do not leak private conversations.",
        description:
          "Sharing private messages without permission is prohibited unless used as evidence in a report.",
      },
      {
        title: "Respect staff warnings.",
      },
      {
        title: "Use channels for their intended purpose.",
      },
      {
        title: "English is recommended in public channels.",
        description:
          "Use a language that staff can moderate whenever possible.",
      },
      {
        title: "No excessive mentions or pings.",
      },
      {
        title: "Do not encourage players to break server rules.",
      },
    ],
  },
    {
    id: "staff",
    icon: "🛡️",
    title: "Staff Rules & Punishments",
    rules: [
      {
        title: "Staff decisions are final.",
        description:
          "Respect staff decisions. If you believe a mistake was made, submit a proper appeal instead of arguing.",
      },
      {
        title: "Do not argue with staff during investigations.",
      },
      {
        title: "Do not impersonate staff members.",
        punishment: "Permanent Ban",
      },
      {
        title: "Do not evade punishments.",
        description:
          "Using alternate accounts or other methods to bypass a punishment is prohibited.",
        punishment: "Permanent Ban",
      },
      {
        title: "Do not submit false appeals.",
      },
      {
        title: "Report bugs responsibly.",
        description:
          "Report exploits privately to staff instead of abusing or sharing them.",
      },
      {
        title: "Abusing glitches or exploits is prohibited.",
        punishment: "Permanent Ban",
      },
      {
        title: "Refusing a valid staff screenshare may result in punishment.",
        punishment: "Temp Ban",
      },
      {
        title: "Do not interfere with staff investigations.",
      },
      {
        title: "Providing false evidence is prohibited.",
      },
      {
        title: "Respect staff members in tickets and support channels.",
      },
      {
        title: "Do not abuse the report system.",
      },
      {
        title: "Staff may issue punishments for actions that intentionally harm the community, even if not explicitly listed.",
      },
    ],
  },
    {
    id: "world",
    icon: "🌍",
    title: "World, Base & Trading Rules",
    rules: [
      {
        title: "Do not intentionally grief protected or event builds.",
      },
      {
        title: "Respect all world borders and restricted areas.",
      },
      {
        title: "Lag machines are strictly prohibited.",
        description:
          "Any machine or setup designed to intentionally reduce server performance is prohibited.",
        punishment: "Permanent Ban",
      },
      {
        title: "Do not create inappropriate builds.",
        description:
          "Offensive, NSFW, hateful, or discriminatory builds are not allowed.",
      },
      {
        title: "Scamming other players is prohibited.",
        punishment: "Temp Ban",
      },
      {
        title: "Complete trades honestly.",
        description:
          "Both players must receive the agreed items or payment.",
      },
      {
        title: "Do not exploit trading systems.",
      },
      {
        title: "Respect claimed bases and player property where applicable.",
      },
      {
        title: "Do not use alternate accounts to gain unfair advantages.",
        punishment: "Permanent Ban",
      },
      {
        title: "Staff may remove any structure that negatively affects server performance.",
      },
      {
        title: "If a situation is not explicitly covered by these rules, staff may still act in the best interest of the server.",
      },
    ],
  },
];
