# Ramya Portfolio — Netflix-Style Rebuild Notes

Built locally only (no logins, no push). Date: 2026-11-01.

## Backup
The previous simple portfolio was copied (not moved) to `~/workspace/ramya-build/portfolio-simple-backup/` — index.html, style.css, script.js, LICENSE and all 7 posters preserved there.

## Structure (index.html / style.css / script.js, same folder, posters and LICENSE kept)
- **Preloader:** glowing violet "R" (Bebas, layered violet text-shadow, pulse animation) + "RAMYA KRISHNA PARIMI", fades out on load (500 ms delay, 3 s safety timeout in script.js).
- **Navbar:** fixed, "RAMYA" Bebas logo in violet #8b5cf6, links Projects / Skills / Experience / About / Contact, "Hire Me" button → mailto:ramyakrishnaparimi@gmail.com. Solid background on scroll.
- **Hero billboard:** cinematic violet radial/linear gradients on dark #0a0a0a, eyebrow "A Ramya Original Series", big Bebas name, tagline "Data Analyst | Data Scientist | ML Engineer", MSc AI Aston + Capgemini line, buttons to #projects and https://github.com/ramyakrishna-p, tech badge line.
- **Rows (horizontal scroll, hover scale-up cards using the existing 7 posters):**
  - Trending Now — all 7 projects
  - Data Analytics — retail sales, campaign A/B, KPI pipeline, churn
  - AI & Machine Learning — microplastic, epitope, recommender, churn
- **Detail modals (7, one per project):** title, description, "By the numbers" with the verified real metrics, tech chips, GitHub repo link, honest synthetic-data labelling for the synthetic projects; microplastic and epitope are labelled as her real dissertation / coursework with notebooks. Close via × button, backdrop click, and Escape (script.js: openModal/closeModal/closeAllModals, backdrop listener, keydown handler).
- **About:** "R" avatar placeholder (no photo exists — none invented or fetched), CV bio, 4 stat tiles (MSc AI Aston; 1 Year Data Analyst Capgemini; 7 Projects Shipped; 41.8% Dissertation mIoU), covered by the skills chips below it.
- **Skills:** 24 chips (Python, SQL, R, Pandas, NumPy, Scikit-learn, TensorFlow, PyTorch, Power BI, Tableau, Excel, Spark, Hadoop, Hive, Kafka, AWS, Git, GitHub, RAG, NLP, BERT, Recommender Systems, Data Visualisation, ETL).
- **Experience & Education:** Capgemini Data Analyst May 2024–Apr 2025; MSc AI Aston 2025–2026; B.Tech EEE 2019–2023, CGPA 7.49/10. Certifications: 6 Forage (Lloyds, British Airways, J.P. Morgan SQL, BCG X, Deloitte, Accenture).
- **Contact:** email ramyakrishnaparimi@gmail.com, LinkedIn, GitHub, portfolio URL. No phone number anywhere.

## Palette
Dark #0a0a0a background, violet accent #8b5cf6 (CSS variable, plus rgba(139,92,246,…) glows throughout). No red hex codes used.

## Verification (all passed)
- HTML parses cleanly (Python HTMLParser, 344 tags).
- All 7 poster files referenced exist in posters/ (15 <img> references across rows, 7 unique posters, 0 missing).
- 7 modals present (modal-0 … modal-6); openModal/closeModal defined; Escape handler and backdrop-click close present in script.js; JS syntax checked OK with Node's Function parser.
- grep checks: no #e50914, no #f6121d, no phone number 7900445117 in index.html / style.css / script.js.
- Metrics spot-checked in source: £360,215, £240.14, £471,555, 0.8122, 0.7822, 41.8%, 53.3%, 0.4503, 0.7812, 0.8503, p = 0.4429.

## Next step (parent, not done here)
Push index.html, style.css, script.js and BUILD_NOTES.md to repo ramyakrishna-p/portfolio (posters/ and LICENSE unchanged) via a browser task, then verify https://ramyakrishna-p.github.io/portfolio/ shows the new Netflix layout.
