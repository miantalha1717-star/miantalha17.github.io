# Talha Suleman — Portfolio

> A portfolio site for an entrepreneur and AI builder.
> The repo is not his. Read on.

---

## What is this?

This is the personal site of **Mian Muhammad Talha Suleman** — an aspiring entrepreneur and AI builder based in Pakistan, doing things across AI, e-commerce, EVs, dairy, chatbots, and manufacturing. Solid resume. Genuinely interesting person.

The site, however, was originally a single `index.html` file that I will diplomatically describe as **"a cry for help rendered in HTML."** I am not Talha. I am the friend who saw that file, winced, and decided to do something about it before he ever linked it to anyone with taste.

So this repo is what happens when you let a friend with a keyboard and no boundaries near a brand identity.

---

## The full story (in three acts)

### Act I — The Original
A single `index.html`. One file. No build step, no router, no framework, no design system, no self-respect. It rendered. It loaded. It also looked like a GeoCities page that had been emotionally damaged. Commits were titled things like `index.html` and `Add files via upload`, which is the git history equivalent of shrugging.

### Act II — The Intervention
I cloned the repo. I opened the file. I closed the file. I opened it again to make sure I wasn't being unfair. I was not being unfair. I then rebuilt the entire thing in a single afternoon, because that's what friends do when the alternative is letting their boy ship a `<marquee>` tag to a recruiter.

### Act III — The Push
This is what you're about to review, Talha. Please merge it. Please don't `git revert` it. I will know.

---

## What I actually built

- **React 19** + **Vite 6** for the bones
- **Tailwind CSS 4** for the styling (because hand-writing CSS for a portfolio in 2026 is a war crime)
- **Motion** for the animations that say "I have a design eye" without saying it
- **Phosphor Icons** for the little pictograms that make everything look 30% more professional
- **Geist + Geist Mono** for the typography, because Times New Roman was not the move
- A real `package.json`, real components, real data file, real nav, real everything

Things I did *not* add, because I have restraint:
- A particle background
- An AI chatbot that pops up after 3 seconds
- Your face fading in from a blur

You're welcome.

---

## Running it

```bash
bun install
bun run dev
```

Then open the URL Vite yells about. It runs on port 4000 because 3000 is for cowards and 5173 is the Vite default, which means nothing to a non-developer trying to look at a portfolio.

To build for production:

```bash
bun run build
```

The output goes to `dist/`, which is the folder you upload to whatever hosting Talha is using. If the answer is "I'm just going to email people the `index.html`," I need you to stop reading this and call me.

---

## File map (for the curious)

```
src/
├── App.tsx              # The whole app. Yes, it just mounts the design.
├── main.tsx             # React entry point
├── index.css            # Tailwind + global styles
├── components/          # Reusable bits (Nav, Reveal, ContactIcons)
├── data/portfolio.ts    # All the actual content lives here. Edit this.
├── pages/               # (Empty. Future Talha is future Talha's problem.)
└── designs/
    └── Design1.tsx      # The only design, called "Design1" because I
                         # planned to build a Design2 and then I did not.
```

> ⚠️ If you want to change a name, a project description, a tagline, or literally any text on the site: **edit `src/data/portfolio.ts`**. Do not go hunting through the JSX. I beg you.

---

## Credits

- **Subject of the site:** Mian Muhammad Talha Suleman
- **Person who built the actual site in React:** me
- **Person who wrote the original `index.html`:** ChatGPT, not Talhs
- **Stack:** React, Vite, Tailwind, Motion, Phosphor, Geist, and the unshakeable belief that your friend deserves a website that doesn't make people leave

---

## License

This is a personal portfolio. Don't copy it. Don't clone it. Don't `Add files via upload` it back into a new repo and call it yours. I'm watching.

---

*Built by a friend who hates you, but loves good design more.*
