/* ---------------------------------------------------------------------------
   This is the only file you need to edit.

   Add a project?  Copy a { } block inside `work` and change the three strings.
   Done with one?  Delete the block. An empty list hides its whole section.
   Every month:    bump `lastUpdated`.
--------------------------------------------------------------------------- */

window.SITE = {
  name: "Nissan Dutta",

  // One line. Plain language, no job-title soup.
  tagline: "I build evaluations and tools for language models, and the infrastructure they run on.",

  // Split so scrapers have to work for it. Joined back together in the page.
  email: ["nissandutta31", "gmail.com"],

  // Delete any you don't use. Order is the order they appear.
  links: [
    { label: "GitHub", href: "https://github.com/nissandutta31-maker" },
    // { label: "LinkedIn", href: "" },
    // { label: "Twitter", href: "" },
  ],

  lastUpdated: "September 2026",

  // Things you've done. Newest first. `href` is optional — leave it "" for no link.
  work: [
    {
      year: "2026",
      title: "Kubernetes runtime demo",
      note: "A Go microservice packaged into a minimal container and deployed to Kubernetes from manifests, with health probes and a Python script that checks cluster state.",
      href: "https://github.com/nissandutta31-maker/Kubernetes",
    },
    {
      year: "2026",
      title: "BanglaBench",
      note: "A leaderboard for how language models handle Bengali, scored directly in Bengali instead of through translation. The first version runs Belebele reading comprehension across GPT, Claude, DeepSeek and Llama.",
      href: "https://github.com/nissandutta31-maker/bangla-bench",
    },
    {
      year: "2026",
      title: "DeepSeek cloud proxy",
      note: "A small FastAPI service that puts an OpenAI-compatible endpoint in front of DeepSeek, so editors like Cursor and Cline can use it as a custom model.",
      href: "https://github.com/nissandutta31-maker/deepseek-cloud-proxy",
    },
  ],

  // What you're working toward. No dates — these are intentions, not history.
  // Empty for now, so the section is hidden. Add entries like:
  //   { title: "Learning something specific", note: "Why it matters to you." },
  now: [],

  // Empty for now, so the section is hidden. Add entries like:
  //   { year: "2024—", title: "Degree, institution", note: "Focus worth naming." },
  education: [],

  // Plain list. Only what you'd be happy to be asked about.
  skills: ["Python", "Go", "Docker", "Kubernetes", "FastAPI", "LLM evaluation"],
};
