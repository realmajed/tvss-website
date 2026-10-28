# Tiered Visitor Safety System: website files, Google Sites handoff and build notes

Group 2 ("The Group") · UTS 31265 Communication for IT Professionals · EWB Challenge 2026, Port Stewart (Lama Lama), Project Opportunity 2.4

This file goes with the finished website. It explains how to get the site into Google Sites through Gemini, what the team still has to add, and how every part of the site is built. Sections 1 to 6 are for the team. Section 7 is the prompt to give Gemini. Sections 8 onwards are reference material for Gemini or anyone editing the site.

---

## 1. What is in the package

| File | What it is | Use it for |
|---|---|---|
| `tvss-website-single-file.html` | The whole website in one file (about 1.4 MB). Styles, scripts, photos and 3D models are built in. Fonts and the 3D viewer library load from the internet. | **Pasting into Gemini Canvas** (section 3), or opening on any computer by double-clicking. |
| `website/` | The same site as ordinary web files: `index.html`, `css/styles.css`, `js/main.js`, `img/` (10 photos as WebP) and `models/kits.js` (the three 3D kit models). | Hosting the site anywhere (GitHub Pages, Netlify), or editing it in VS Code. Open `website/index.html` to view it. |
| `HANDOFF.md` | This file. | Instructions, to-do list, and build notes. |

Nothing in the site is a build note. Unfinished items are marked in orange italics or dashed boxes on the site, and every one has a `data-todo` attribute in the code (section 4).

## 2. Is "Gemini → web app → Google Sites" right?

Yes. Since 19 October 2026 the Gemini app can export an interactive app made in Canvas straight to Google Sites (**Export → Google Sites**). It creates a new, private Google Sites draft with the working app already on the page. You can then add other Sites content, publish it and share it like any other Google Site. It works with personal Google accounts that have Gemini, and on web, Android and iOS.

Four things to know before you rely on it:

1. **Paste the code yourself instead of asking Gemini to rebuild the site.** Gemini would have to retype about 1.4 MB of code, including the embedded photos and 3D models, and would drop or change parts of it. Canvas lets you edit its code directly (**Code** view, auto-saved), so you paste the finished file there and use Gemini only for the export.
2. **The whole website becomes one interactive block on one Google Sites page.** Navigation between the 15 pages happens inside that block, not through Google Sites' own menu. The rubric marks content, design and referencing, not which Google Sites tools were used, so this is fine. Make the block full width and about one screen tall.
3. **The export makes a new site each time and Google does not say later edits sync.** Finish the to-do list in section 4 *before* you export. If you change something afterwards, paste the new code into Canvas, export again, publish the new draft and delete the old one.
4. **Use a personal Google account.** The draft belongs to whoever exports it. Share it with the team as editors and publish it so anyone can view it.

## 3. Step by step: from these files to a published Google Site (about 15 minutes)

Do this on a computer.

1. **Copy the code.** Open `tvss-website-single-file.html` in Chrome by dragging it into a tab. Press **Ctrl+U** (Mac: **Cmd+Option+U**) to view the source, then **Ctrl+A** and **Ctrl+C** (Mac: Cmd) to copy all of it. (Notepad or VS Code also work. On a Mac don't use TextEdit, which shows the page instead of the code.)
2. **Make a Canvas.** Go to [gemini.google.com](https://gemini.google.com), signed in with the Google account that should own the site. Pick **Canvas** in the tools menu under the prompt box and send: `Create a basic HTML page that says Test.`
3. **Replace its code.** In the Canvas panel, click **Code** (top right). Click in the code, press **Ctrl+A**, **Delete**, then **Ctrl+V** to paste. Wait a few seconds for the auto-save.
4. **Check it.** Switch back to **Preview**. Click through a few pages, open the **Prototype** page and drag the 3D model.
5. **Export.** Click **Share & export** at the top right of the Canvas and choose **Export → Google Sites** (Google's announcement calls it "Export > Google Sites"). A new private Google Sites draft opens with the site in it.
6. **Set up the Google Site.**
   - Name the site (top left) "Tiered Visitor Safety System".
   - Point at the page header and remove it (or set **Header type → Title only**), so the website starts at the top.
   - Click the app block and drag its edges so it fills the page width and is about one screen tall. The website scrolls inside the block.
   - Click **Preview** and check the desktop, tablet and phone sizes.
7. **Publish.** Click **Publish**, choose a web address (for example `tvss-group2-ewb2026`) and publish. Under **Share** → publish settings, make sure **anyone** can view the published site (not just people in your account). Under **Share**, add every team member as an editor.
8. **Check from outside.** Open the published link in a private/incognito window and on a phone. Send it to a teammate to confirm they can open it.
9. **Submit.** Put the published link at the top of the Word version of the site (section 6).

If **Export → Google Sites** doesn't appear, check that you're in the Gemini app on the web (gemini.google.com), that the Canvas is showing an app preview (not a document), and that the account can create Google Sites. Then see section 10 for other routes.

## 4. Finish these before you export

These items need information only the team has. Each is marked on the site in orange italics or a dashed box. To find them in the code, press Ctrl+F in Canvas Code view and search for the `data-todo` name.

| Page | What to add | Search for |
|---|---|---|
| Prototype | **How it was built:** materials and sizes of the cardboard kits, how the guide and trip record were mocked up, and 3–6 photos of the real prototype. Photos are easiest to build into the code before exporting; after exporting, they can only go on the Google Sites page below the website block (**Insert → Images**). | `data-todo="prototype-build"` |
| Prototype | **Table 7 results:** the Result and Change made columns for all five tests, then two or three sentences under **Results and changes**. Without results, the prototype counts as a model rather than a tested prototype. | `data-todo="test-results"` |
| Prototype | **Figure 11 note:** which tool made the concept renders. | `data-todo="figure-11-tool"` |
| Detailed design | **Figure 9 note:** the source of the Garmin product photo (page title, URL, "Copyright Garmin"), or swap in your own photo. | `data-todo="figure-9-source"` |
| Cost analysis | **Table 11:** replacement and Ranger-time estimates for Years 1–3, plus the assumption behind each in the table note. | `data-todo="table-11"` and `data-todo="table-11-assumptions"` |
| Team | **Table 13:** each member's website contribution. List contributing members only; a non-contributing member must not be listed. | `data-todo="team-contributions"` |
| Appendices | **A** group charter link, **B** meeting minutes, **C** full test results, **D** cost workings (the $420 allowance and the $175 accessory bundle, with a source per price). | `data-todo="appendix-a"` … `appendix-d` |
| Appendices | **E** the AI-use statement, with reasons for using AI and screenshots of prompts and outputs. The rubric only gives full marks for the statement when it includes reasons and screenshots. | `data-todo="appendix-e"` |

When you replace a placeholder, delete its `class="todo"` or `class="ph"` and its `data-todo="…"` too, so it stops showing in orange or in a dashed box. For example:

```html
<td class="todo" data-todo="test-results">[Record result]</td>
```

becomes

```html
<td>All items fitted; pouch closed each time</td>
```

## 5. Confirm these as a team

These items are filled in on the site, but the team needs to agree them.

- **Table 4 decision-matrix scores** (Design selection). Agree them together. If a score changes, recompute the weighted total (sum of weight × score) and update the sentence under the table.
- **Figure 12 timeline dates** (Implementation plan). Check they match what was presented.
- **Tutor's name** on the Home page ("Pranavi Gangapuri").
- **Concept renders (Figure 11).** The Tier 1 render shows a pouch, but Table 5 only adds the pouch at Tier 2. The strobe in the renders is a branded torch, not the ACR strobe in the costing. Fix the renders or say in the note that they are illustrative (the note already says this).
- **One editor reads every page** so the site reads in one voice and in the third person.

## 6. After publishing

- **Word version (required).** One member submits a Word version of all the material on the website, with the site URL at the top. Copy the text page by page from the published site.
- **Access.** Every team member and the tutor must be able to open the site. Test this from a logged-out browser.
- **Links.** Click every reference link once (References page).

---

## 7. Prompt to give Gemini

Paste this into Gemini with this file attached, **after** you have pasted the code into Canvas (section 3). It stops Gemini from rewriting the site and gets it to give you edits you can paste in.

```text
I'm publishing my university team's finished website to Google Sites using Canvas and Export → Google Sites.
The website code is already in this Canvas. I pasted it in myself. It is about 1.4 MB because photos and 3D models are embedded as base64.
The attached HANDOFF.md describes the site, the to-do items and the writing rules.

Rules for helping me:
1. Do not regenerate, rewrite, restyle, shorten or "improve" the Canvas code, and never output the whole file.
2. When I ask for a change, reply with exact find-and-replace instructions: the exact text to search for in Code view, and the exact replacement. Keep every other character the same.
3. Keep all facts, numbers, figure and table numbers, in-text citations and references exactly as they are unless I tell you otherwise.
4. Follow the writing rules in section 9 of HANDOFF.md: Australian English, third person, APA 7 citations, respectful language for the Lama Lama people.
5. If I give you team information (test results, contributions, appendix content), turn it into replacement HTML for the matching data-todo placeholder listed in section 4 of HANDOFF.md.
6. Do not invent results, sources, quotes or prices.

First, confirm you understand. Then wait for my request.
```

---

## 8. Site overview

**Purpose.** The site presents Group 2's proposal to the client, Yintjingga Aboriginal Corporation (YAC), and to the public: a Ranger-run loan system that matches safety equipment to each approved visitor trip on Lama Lama Country. It follows the EWB/UTS Task 3 template order (problem → options → selection → detailed design → prototype → implementation → costs → considerations → recommendations), so each page builds the argument for the next.

**Audience.** YAC and the Lama Lama Rangers (decision makers), the public and visitors, and UTS markers. The writing is plain and in the third person. Community authority is stated up front: YAC approves destinations, tier rules and data handling.

**The design in one paragraph.** Rangers ask four questions about each approved trip (approval, nearby assistance, communication, hazards) and issue one of three tiers. **Tier 1** (near base) is a printed visitor guide and a trip record. **Tier 2** (away from base) adds a strobe, whistle, power bank and protective pouch. **Tier 3** (remote or unmonitored) adds a two-way satellite messenger, benchmarked on the Garmin inReach Messenger. Every trip has a due-back time that a named person monitors. The first-year pilot is about AUD $3,405, including 15% contingency, then about $528 per year for satellite service plus staff time and replacements.

**Pages (15) and their routes.** The menu groups pages the same way a Google Sites menu would.

| Menu | Page | Route | Main content |
|---|---|---|---|
| Home | Tiered Visitor Safety System | `#home` | Cover, Acknowledgement of Country, executive summary (template headings), Figure 1 (the three tiers), design brief details |
| Project | Project details | `#project` | Context, needs statement, Figure 2 (map of Lama Lama Country), Figure 3 (Google Map of Port Stewart) |
| Project | Background | `#background` | Visiting Lama Lama Country, how communication works today, when something goes wrong (Aunty Mary quote), Table 1, Figures 4–6 |
| Project | Problem and design criteria | `#problem` | User needs statement, problem description, community-control gate, Table 2 (five weighted criteria) |
| Design | Design options | `#options` | Three options, Table 3 (earlier concepts, in a collapsible) |
| Design | Design selection | `#selection` | Table 4 (weighted decision matrix), reasons for each rating, selected design |
| Design | Detailed design | `#design` | Figure 7 (workflow), Figure 8 (tier flowchart), Tables 5–6, Figure 9 (messenger), why radio is excluded, reserve and data, community concerns (collapsibles) |
| Prototype | Prototyping and testing | `#prototype` | What was prototyped, Figure 10 (interactive 3D kits), Figure 11 (render carousel), Table 7 (tests) |
| Delivery | Implementation plan | `#implementation` | Figure 12 (timeline), Table 8 (roles), training, evaluation, ownership and repair |
| Delivery | Cost analysis | `#costs` | Tables 9–11, Figure 13 (cost chart), funding, end of life |
| Delivery | Other considerations | `#considerations` | Figure 14 (visitor journey map), Table 12 (broader considerations) |
| Delivery | Recommendations | `#recommendations` | Six follow-up actions |
| Team | Group 2 – "The Group" | `#team` | Group declaration, Table 13 |
| References | References | `#references` | 24 APA 7 references, hanging indent, links |
| Appendices | Appendices | `#appendices` | A–E in collapsibles |

**Look and feel.** The colours and fonts match the team's Canva deck:

- Navy `#143F61` for headings, the header and table heads; deep navy `#0D2E48` for the footer.
- Teal `#009E82` for accents and buttons.
- Off-white `#F9F8F3` page background and mist `#EEF4F4` for alternate sections.
- Tier colours: Tier 1 `#009E82`, Tier 2 `#B87414`, Tier 3 `#C4472B`.
- Fonts: Open Sans (headings) and Montserrat (body), from Google Fonts.

Figures and tables use APA 7 style: a bold label, an italic title, and a *Note.* line below.

## 9. Writing rules (for any edits)

- Australian English (organise, colour, centre); dates like 8 October 2026; money as AUD with $.
- Third person ("the team", "Group 2"), never "we/I", except in the Acknowledgement of Country.
- Respectful language: Lama Lama people, Traditional Owners, Country and Sea Country (capitalised), Elders, Yintjingga Aboriginal Corporation (YAC). Decisions belong to YAC and the Rangers, so proposals are offered "for review".
- APA 7 in-text citations, for example (EWB Australia, 2026, p. 31). Every citation must be in the reference list and every reference must be cited. Self-made figures say "Created by Group 2 (2026)".
- Figures and tables are numbered in order of appearance across the whole site. If one is added, renumber the later ones and every mention of them in the text.
- Word limit: 4,000 words, excluding the cover/landing information, executive summary, references and appendices (section 12).

## 10. If the Gemini export isn't available or doesn't work

- **Embed the code directly.** In Google Sites, choose **Insert → Embed → Embed code**, paste the single file, then **Next** and **Insert**, and drag the box to full width and one screen tall. This uses no Gemini at all. The file may be too large for this box; if Sites rejects it, use the next route.
- **Host the files and embed the page.** Put the `website/` folder online for free. For example, create a public GitHub repository, upload the folder's contents, and turn on **Settings → Pages** (deploy from the main branch). Then in Google Sites choose **Insert → Embed → By URL**, paste the site's address, choose to embed the whole page (not a preview) and insert it. This keeps the exact site, and a later change to the hosted files shows up without re-embedding.
- **Build it natively in Google Sites.** This is the most manual route, and section 14 lists the Google Sites tool for every block.

---

## 11. Media and credits

All photos are from the EWB Challenge 2026 design brief. They are copyright Engineers Without Borders Australia and used with the caption shown, which is fine for the course. The renders and messenger photo came from the team's final presentation.

| File | Used for | Source and caption note |
|---|---|---|
| `cover.webp` | Home cover; Team banner | EWB brief, cover photo. Credit on the image: "Photo: Engineers Without Borders Australia (2026), cover". |
| `aerial.webp` | Project details and Implementation banners | EWB brief, p. 18. |
| `running-creek.webp` | Background banner | EWB brief, p. 21. |
| `signage.webp` | Problem banner; Figure 6 | EWB brief, p. 31. |
| `map.webp` | Figure 2 | EWB brief, p. 14. |
| `safari-camp.webp` | Figure 4 | EWB brief, p. 19. |
| `messenger.webp` | Figure 9 | Garmin product photo from the team's slides. **Needs its source** (section 4). |
| `render-t1/t2/t3.webp` | Figure 11 carousel | Team's final presentation, slide 13. **Name the tool that made them** (section 4). |
| 3D models (in `models/kits.js`) | Figure 10 | Demonstration models made with AI assistance (cited as Anthropic, 2026). Not to scale. |
| Google Map | Figure 3 | Live Google Maps embed (cited as Google, n.d.). |

Free extras (Wikimedia Commons, freely licensed; use **Use this file** on each page for the exact credit):

- [Princess Charlotte Bay](https://commons.wikimedia.org/wiki/File:Princess-charlotte-bay.JPG)
- [Cape York Peninsula map](https://commons.wikimedia.org/wiki/File:A2015_Cape_York_Peninsula_map.svg)
- [Corrugated road in the wet season, Cape York](https://commons.wikimedia.org/wiki/File:Corrugated_road_in_wet_season._CYP_1990.jpg)
- [Saltwater crocodile](https://commons.wikimedia.org/wiki/File:Saltwater_Crocodile_on_a_river_bank.jpg)
- [Crocodile warning sign](https://commons.wikimedia.org/wiki/File:Crocodile_warning_sign_01.svg)
- [RFDS Queensland aircraft](https://commons.wikimedia.org/wiki/File:VH-FDZ_Raytheon_B200_Super_King_Air_Royal_Flying_Doctor_Service_of_Australia_(Queensland_Section)_(8709024657).jpg)
- [ACR ResQLink beacon](https://commons.wikimedia.org/wiki/File:ACR_ResQLink_406MHz_Personal_Locator_Beacon_with_GPS_emergency_PLB_c18ca43690ed11e392db12e25f465f4f_8.jpg)
- [Fox 40 whistle](https://commons.wikimedia.org/wiki/File:Fox-40-whistle.jpg)
- [Power bank](https://commons.wikimedia.org/wiki/File:Portable_power_bank.jpg)
- Free icons: [Google Material Symbols](https://fonts.google.com/icons)

Videos that can be embedded and cited:

- [Working Together on Lama Lama Wetlands](https://www.youtube.com/watch?v=I0H9k1lC1Hc)
- [Why I am a Lama Lama Ranger](https://vimeo.com/117456520) (linked from the EWB brief, p. 38)
- [The Junior Ranger Program, Lama Lama Cultural Heritage Week 2017](https://www.youtube.com/watch?v=DEzl82AS5_8) (EWB brief, p. 39)

These show community members, so embed them from the original source rather than re-uploading.

## 12. Word count

The counted pages are Project details through Recommendations. Home holds the cover information, Acknowledgement and executive summary, and Team, References and Appendices are excluded too. The table shows two ways of counting:

| Page | Body text and tables | Body text only |
|---|---:|---:|
| Project details | 253 | 200 |
| Background | 633 | 406 |
| Problem and criteria | 366 | 182 |
| Design options | 363 | 287 |
| Design selection | 348 | 272 |
| Detailed design | 684 | 461 |
| Prototype | 292 | 102 |
| Implementation | 320 | 198 |
| Cost analysis | 361 | 162 |
| Other considerations | 305 | 29 |
| Recommendations | 112 | 112 |
| **Total** | **4,037** | **2,411** |

The first column also counts every table, figure label and *Note.* line. Excluding the notes and labels but keeping tables gives about 3,585. The prototype and test-results text still to be written will add about 200–300 words. If the team's count needs to come down, start with Table 3 and its paragraph on Design options (about 110 words) or shorten the journey map (Figure 14).

## 13. Technical notes

- **How pages work.** Every page is a `<section class="page" id="p-ROUTE" data-route="ROUTE">` inside `<main>`. `js/main.js` shows one page at a time from the URL hash (`#design`). It updates the menu highlight and the browser tab title, builds the "On this page" lists from each page's `<h2>` headings, and scrolls to the top. Links to `#route` are handled in the script, so navigation also works inside Gemini Canvas and Google Sites embeds, where the address bar can't change.
- **Add a page.** Copy a `<section class="page">` block, give it a new `id="p-NAME"` and `data-route="NAME"`, add `<a href="#NAME" data-r="NAME">` to the menu in `<header>`, and add pager buttons.
- **Figures and charts.**
  - Figures 5 and 8 are inline SVG.
  - Figure 12 (timeline) and Figure 13 (cost chart) are drawn by `main.js` from small data arrays near the bottom of the file. Edit the numbers there.
  - Tables are plain HTML `<table class="t">`.
- **3D viewer.** It uses Google's [model-viewer](https://modelviewer.dev/) 4.1.0 from jsDelivr, so it needs the internet. The three kit models are GLB files stored as base64 in `window.KIT_GLB` (in `models/kits.js`, or the last `<script>` of the single file), keyed `"1"`, `"2"` and `"3"`. To use a phone scan of the cardboard prototype, export it as `.glb`, base64-encode it, and replace the `"3"` string. Hotspot positions are in the `HOT` object at the top of `main.js`.
- **External resources.**
  - Google Fonts (falls back to system fonts if blocked).
  - jsDelivr for model-viewer (falls back to a message, and the renders still show).
  - The Google Maps embed (falls back to an "open in Google Maps" link).
- **Rebuilding the single file.** It is `website/` with `css/styles.css` and `js/main.js` inlined, every `img/*.webp` turned into a base64 data URI, and `models/kits.js` appended at the end. Edit the single file directly for small text changes.

---

## 14. Build notes: building the same site natively in Google Sites

Use this only if you build the site page by page in Google Sites instead of exporting from Gemini. The Gemini route needs none of it.

**General how-tos**

- **Theme.** **Themes → Custom → Create theme.** Use the colours in section 8 and the fonts Open Sans for headings and Montserrat for body text, or the closest sans-serif offered.
- **Section backgrounds.** Point to a section, click the **Background** palette at its left edge, and choose a style: Style 1 (plain), Style 2 (pale, mist) or Style 3 (dark, navy).
- **Headers.** Header types are Cover, Large banner, Banner and Title only. **Change image → Upload** for the photo. Headers hold text only, so put buttons in a short section directly under the header.
- **Tables.** Google Sites has no table tool. Use **Insert → Embed → Embed code** with the table's HTML (from `index.html`) plus a small `<style>` block, then drag the box taller until every row shows. The alternative is **Insert → Sheets**.
- **Captions (APA 7).** Add a text box above each image or table with the bold label (**Figure 4**) and italic title, and a text box below for the *Note.* line. Select the image and its text boxes and **Group** them.
- **Alt text.** Click an image, open its **⋮** menu → **Alt text**. The alt text for each image is in `index.html`.
- **Diagrams** (Figures 1, 5, 7, 8, 12, 14). Rebuild them in Canva or Google Slides and insert them as images, or screenshot them from the site and say so in the AI statement.
- **Chart** (Figure 13). Paste Table 10 into a Google Sheet, **Insert → Chart → Bar chart**, then in Sites **Insert → Charts** and pick the Sheet. It stays linked to the Sheet.
- **Map** (Figure 3). **Insert → Map**, search "Port Stewart QLD 4892".
- **Carousel** (Figure 11). **Insert → Image carousel.** In **Edit carousel**, point to each image → **Add text → Add caption**.
- **Collapsible text and table of contents.** **Insert → Collapsible group** and **Insert → Table of contents** (lists the Heading and Subheading text on the page).
- **3D model.** **Insert → Embed → Embed code**, using either:
  - Sketchfab's embed code for an uploaded model, or
  - `<script type="module" src="https://cdn.jsdelivr.net/npm/@google/model-viewer@4.1.0/dist/model-viewer.min.js"></script><model-viewer src="https://cdn.jsdelivr.net/gh/USER/REPO@main/tier3.glb" camera-controls auto-rotate style="width:100%;height:440px"></model-viewer>` with the `.glb` in a public GitHub repository.
- **References.** Text boxes can't make APA hanging indents. Paste the list as an embed with `p{padding-left:2.2em;text-indent:-2.2em}`, or accept no indent on the site and indent it in the Word version (**Paragraph → Indentation → Special: Hanging**).
- **Help pages.**
  - [Add or edit text and images](https://support.google.com/sites/answer/90538?hl=en)
  - [Embed code, Google files, maps and video](https://support.google.com/sites/answer/90569?hl=en-GB)
  - [Pages](https://support.google.com/sites/answer/98216?hl=en)
  - [Themes and section backgrounds](https://support.google.com/sites/answer/6372865?hl=en)
  - [Accessibility and alt text](https://support.google.com/sites/answer/7529116?hl=en-GB)
  - [Sheets charts](https://support.google.com/docs/answer/63824?hl=en-GB)
  - [Custom HTML in Sites (Steegle)](https://steegle.com/google-sites/how-to/insert-custom-code)

**Block-by-block tool list.** Each line is *Google Sites tool → the block on the site*, page by page in order. The notes under each page are the design reasons and template rules from the draft.

#### Tiered Visitor Safety System (`#home`)

- Header type: Cover · image + title text → page title "Tiered Visitor Safety System", photo `cover.webp`
- Button → "Read the proposal"
- Button → "Explore the kits in 3D"
- Text box → "Acknowledgement of Country We acknowledge the Traditional Custodians of the…"
- Text boxes (Heading 1 / Heading 2 / Normal) → "Tiered Visitor Safety System A Ranger-run loan system that matches…"
- Text box + image (diagram made in Canva or Slides) → Figure 1: *The three equipment tiers and the trips they serve*
- Layout: text boxes in a grid → "Design Area 2 – Eco-tourism and Visitor Experience Project Opportunity…"
- Button → "Next: Project details →"

Notes for this page:
- Section background: the dark style (usually Style 3). Keep the Acknowledgement first on the landing page, as in your final presentation. The template puts it after the Group Declaration; leading with it is more respectful and reads well.
- Executive summary: keep these exact headings, in this order. Do not add or rename sections (Example 3 lost marks for this). In the Word version, use the template styles: Heading 1 Calibri 16 bold, Heading 2 Calibri 12 bold, Normal Calibri 11 justified. This section is excluded from the 4,000-word count.
- Layout: this is the template's cover block (Design Area, Project Opportunity, How Might We, Tutorial, Group Name). Use a 2-column layout of text boxes. Confirm the tutor's full name before publishing.

#### Project details (`#project`)

- Header type: Banner → page title "Project details", photo `aerial.webp`
- Text box → "Port Stewart (Yintjingga), on Princess Charlotte Bay in eastern Cape…"
- Text box (in a Style 2 section) → "Needs statement Lama Lama Rangers need a simple, affordable way…"
- Image + caption text boxes → Figure 2: *Map of Lama Lama Country*
- Insert → Map → Figure 3: *Location of Port Stewart on Cape York Peninsula*

#### Background (`#background`)

- Header type: Banner → page title "Background", photo `running-creek.webp`
- Insert → Table of contents → "On this page"
- Heading → "Visiting Lama Lama Country"
- Text box → "Fishing and camping are the main drawcards, with campgrounds at…"
- Image + caption text boxes → Figure 4: *Visitor infrastructure at Safari Camp (Warokutal)*
- Heading → "How communication works today"
- Text box → "Ranger bases and outstations have reliable Starlink and Activ8me satellite…"
- Image (diagram made in Canva or Slides) + caption text boxes → Figure 5: *Communication reach compared with where visitors travel*
- Heading → "When something goes wrong"
- Text box → "Aunty Mary, a Lama Lama Elder and former nurse, is…"
- Text box (large quote style) → "Last year I had a bloke with a stinger ray…"
- Heading → "What is already being done"
- Embed → Embed code (HTML table) → Table 1: *Current visitor management measures and their gaps*
- Image + caption text boxes → Figure 6: *Visitor signage at Marina Plains nature refuge*
- Heading → "Why this is not enough"
- Text box → "Each existing measure works at the base or at a…"

Notes for this page:
- This page covers the template's empathy questions in order: the context, why it matters to stakeholders, what is already being done, why that is not enough, and what the project wants to achieve.

#### Problem and design criteria (`#problem`)

- Header type: Banner → page title "Problem and design criteria", photo `signage.webp`
- Heading → "User needs statement"
- Text box → "Lama Lama Rangers need a simple, affordable way to account…"
- Heading → "Problem description"
- Text box → "Once visitors leave a Ranger base, nobody knows if a…"
- Heading → "Design criteria"
- Text box → "Each option must first pass a community-control gate: YAC approves…"
- Embed → Embed code (HTML table) → Table 2: *Design criteria, justification and weighting*

Notes for this page:
- Criteria format: the template suggests "name, 1–3 sentence description, 1–2 sentence justification" per criterion. A table does this compactly and also feeds the decision matrix. The marker for Example 3 said their criteria were "difficult to measure", so keep each one testable.

#### Design options (`#options`)

- Header type: Title only → page title "Design options", no photo
- Text box → "Three distinct options were developed for the same problem, each…"
- Layout: 3 columns (text boxes) → "Option 1 Satellite kit for every party Every visiting party…"
- Insert → Collapsible group → "How the options evolved from earlier concepts Earlier in the…"
- Embed → Embed code (HTML table) → Table 3: *Earlier concepts and why they were screened out*

Notes for this page:
- Template rule: each option needs at least one reference unless the team invented it. Options 1 and 2 cite existing practice; Option 3 is the team's own combination.

#### Design selection (`#selection`)

- Header type: Title only → page title "Design selection", no photo
- Text box → "The options were compared in a weighted decision matrix using…"
- Heading → "Why each rating was given"
- Text box (bulleted list) → "Remote emergency contact. Option 1 scores 5 because every party…"
- Text box (in a Style 2 section) → "Selected design Option 3, the three-tier system, scored highest (3.95…"

Notes for this page:
- Draft scores: these follow the strengths and limitations on your "Design Choice and Criteria" slide, but the scores are the team's judgement call. Agree them together and adjust the text if any change. If you change weights, recompute: total = Σ(weight × score).

#### Detailed design (`#design`)

- Header type: Title only → page title "Detailed design", no photo
- Insert → Table of contents → "On this page"
- Heading → "How it works"
- Text box → "Every approved trip passes through the same four stages (Figure…"
- Image (diagram) or 4-column layout of text boxes → Figure 7: *Issue, monitor and return workflow*
- Heading → "Trip assessment and tier allocation"
- Text box → "Rangers ask the same questions about every requested trip (Figure…"
- Image (flowchart made in Canva, Slides or draw.io) → Figure 8: *Trip assessment and tier allocation flowchart*
- Embed → Embed code (HTML table) → Table 5: *The three-tier scope*
- Heading → "What each item does"
- Embed → Embed code (HTML table) → Table 6: *Equipment purpose and limits*
- Heading → "Tier 3: the two-way satellite messenger"
- Text box → "The Garmin inReach Messenger is the procurement benchmark (Figure 9).…"
- Heading → "Why radio is not included"
- Text box → "Ranger vehicles use VHF radio, but the radios visitors can…"
- Image + caption text boxes → Figure 9: *Two-way satellite messenger used as the Tier 3 benchmark*
- Heading → "Reserve, maintenance and trip data"
- Text box → "One complete Tier 3 kit is kept charged as a…"
- Heading → "Community concerns and responses"
- Insert → Collapsible group (one per question) → "Will this add to the Rangers' workload? Issue and reset…"

#### Prototyping and testing (`#prototype`)

- Header type: Title only → page title "Prototyping and testing", no photo
- Heading → "What was prototyped and why"
- Text box → "The devices are proven products, so the riskiest part of…"
- Heading → "How it was built"
- Text box + Image carousel (your photos) → "Team to add: materials and sizes of the cardboard kits,…"
- Heading → "Explore the kits in 3D"
- Embed → Embed code (model-viewer) or Sketchfab embed → Figure 10: *Interactive 3D model of the three equipment tiers*
- Insert → Image carousel → Figure 11: *Concept renders of the Tier 1, Tier 2 and Tier 3 kits*
- Heading → "Testing"
- Text box → "Five quick tests check the handover questions above (Table 7).…"
- Embed → Embed code (HTML table) → Table 7: *Prototype tests, targets and results*
- Heading → "Results and changes"
- Text box → "Team to add: two or three sentences on what the…"

Notes for this page:
- 3D in Google Sites: works through Insert → Embed → Embed code. Two routes: Sketchfab (quickest) or model-viewer with the model file on GitHub (no third-party branding); see "3D model" in the general how-tos above. Google Sites embeds are fixed-height boxes, so set the height to about 460 px.
- Why this matters: your final slide said "no electronic or field test results claimed". The marker for Example 3 wrote: "if nothing is tested you have created a model, but not a prototype." All five tests need only the cardboard kit, a stopwatch and a few classmates, so they can be run before the deadline. Targets are suggestions; set your own before testing.

#### Implementation plan (`#implementation`)

- Header type: Banner → page title "Implementation plan", photo `aerial.webp`
- Text box → "Implementation is staged around the seasons. Planning happens during the…"
- Image (timeline made in Sheets, Canva or Slides) → Figure 12: *Proposed implementation timeline, November 2026 to November 2027*
- Heading → "Who does what"
- Embed → Embed code (HTML table) → Table 8: *Roles and responsibilities*
- Heading → "Training"
- Text box → "Rangers learn the system from a one-page procedure and a…"
- Heading → "Evaluation"
- Text box → "The pilot records issue and reset time, teach-back pass rate,…"
- Heading → "Ownership and repair"
- Text box → "YAC owns the equipment and the records, and the Rangers…"

#### Cost analysis (`#costs`)

- Header type: Title only → page title "Cost analysis", no photo
- Text box → "Costs are in Australian dollars, checked on 8 October 2026.…"
- Embed → Embed code (HTML table) → Table 9: *Tier 3 satellite messenger cost baseline*
- Embed → Embed code (HTML table) → Table 10: *Illustrative first-year pilot cost*
- Insert → Chart (from a Google Sheet) → Figure 13: *First-year pilot cost by budget line (AUD; total $3,405)*
- Heading → "Beyond the pilot"
- Text box → "After the first year, satellite service for two devices costs…"
- Embed → Embed code (HTML table) → Table 11: *Three-year cost view*
- Heading → "Funding"
- Text box → "YAC-approved seed funding or sponsorship can cover the pilot, and…"
- Heading → "End of life"
- Text box → "Port Stewart has no dedicated recycling service (EWB Australia, 2026,…"

#### Other considerations (`#considerations`)

- Header type: Title only → page title "Other considerations", no photo
- Heading → "Visitor journey map"
- Text box → "The journey map follows one visitor through the system and…"
- Image (journey map made in Canva or Slides) or Embed code table → Figure 14: *Visitor journey through the Tiered Visitor Safety System*
- Heading → "Broader considerations and mitigation"
- Embed → Embed code (HTML table) → Table 12: *Broader design considerations and how they are mitigated*

#### Recommendations (`#recommendations`)

- Header type: Title only → page title "Recommendations", no photo
- Text box → "The following work sits outside this project's scope but is…"
- Text box (bulleted list) → "Record visitor numbers, party sizes and trip lengths for a…"

#### Group 2 – "The Group" (`#team`)

- Header type: Banner → page title Group 2 – "The Group", photo `cover.webp`
- Heading → "Group declaration"
- Text box → "Only team members who contributed directly to this website are…"
- Embed → Embed code (HTML table) → Table 13: *Team member contributions*

Notes for this page:
- Submission rules: a non-contributing member must not be listed (they receive zero). Name one editor to read every page for a single voice; Example 3 was marked down because "it is clear that the website report has been written by different people".

#### References (`#references`)

- Header type: Title only → page title "References", no photo
- Text box or Embed code (hanging indent) → "ACR Electronics. (2016). ACR C-Strobe & C-Strobe H₂O: Manual/water-activated emergency…"

Notes for this page:
- Checks: every in-text citation on the site must appear here, and every entry here must be cited somewhere (this list matches the site's citations). Undated works by the same author go before dated ones (Garmin n.d. before Garmin 2025). If you also cite Garmin's account-setup page from your slides, the two undated Garmin entries become n.d.-a and n.d.-b, lettered by title.

#### Appendices (`#appendices`)

- Header type: Title only → page title "Appendices", no photo
- Insert → Collapsible group (one per appendix) + Insert → Drive → "Appendix A: Group charter Embed the Week 2 group charter…"

Notes for this page:
- Format: one sub-page or collapsible group per appendix, numbered and named. Figures inside appendices are numbered by appendix letter (Figure C1, Table C1), per the UTS APA guide.
