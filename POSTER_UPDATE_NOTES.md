# Poster Update Notes — 2026-11-01

All 7 plain gradient posters replaced with photo-based posters, composited locally with PIL at exactly 800x1000: full-bleed photo (centre-cropped), dark violet/black gradient scrim (stronger top and bottom), thin white inset border, small violet accent rule, and the same text as before (bold white title, category line, pale yellow metric line, footer "RAMYA • DATA ANALYST"). No watermarks, no phone numbers, no other text.

The 7 plain posters are backed up in `posters-plain-backup/`. Nothing was pushed to GitHub; this is a local change only, ready to be pushed with the next portfolio update.

Project-folder check: none of the individual project folders under `~/workspace/ramya-build/` contains a poster file or a README poster reference, so no extra copies were made.

## Per project

### retail-sales-performance-customer-segmentation.png
- Image: supermarket shoppers with trolley and basket in a grocery aisle (1920x1080 source)
- Source page: https://mallettinsurance.com/insurance-for-grocery-stores/
- Query: "supermarket retail store customers shopping aisle"
- Final size: 783,488 bytes (plain was 31,998)

### marketing-campaign-analytics-ab-testing.png
- Image: marketing team in a meeting, laptop showing campaign charts, sticky-note board behind (1344x1008 source)
- Source page: https://www.itverticals.com/blog/steps-to-start-digital-marketing-agency/
- Query: second query used — "marketing team meeting office discussing charts laptop" (first query, "digital marketing team working laptops analytics", only yielded illustrations and an 800x422 image too small for a portrait crop)
- Final size: 654,673 bytes (plain was 31,783)

### automated-kpi-reporting-pipeline.png
- Image: dual monitors showing KPI dashboards and charts on a desk (1920x1080 source)
- Source page: https://tinzi.com/home-2-2/
- Query: "business data dashboard charts on monitor screen"
- Final size: 686,848 bytes (plain was 30,652)

### customer-churn-prediction-retention-analytics.png
- Image: customer support team wearing headsets at laptops (2800x1869 source)
- Source page: https://mirroredstorage.mirroredcloud.com/voipcontact.html
- Query: "customer support call centre headset team"
- Final size: 547,904 bytes (plain was 28,227)

### microplastic-segmentation.png
- Image: scientist looking through a microscope in a laboratory (1000x506 source)
- Source page: https://professionalpestmanager.com/pest-control-products/
- Query: "scientist microscope laboratory examining sample"
- Final size: 558,669 bytes (plain was 31,931)

### product-recommendation-engine.png
- Image: person holding a smartphone showing a shopping app with cart and Buy Now (1919x1080 source)
- Source page: https://www.dvz.de/suche.html?tx_solr%5Bfilter%5D%5B650%5D=type%3Anews&tx_solr%5Bfilter%5D%5B651%5D=date%3Aall&tx_solr%5Bpage%5D=159&tx_solr%5Bsort%5D=dateTime_dateS+desc
- Query: "person online shopping smartphone app"
- Final size: 612,678 bytes (plain was 28,772)

### linear-b-cell-epitope-prediction.png
- Image: glossy 3D protein molecule structure render on dark teal (1100x677 source)
- Source page: https://nordiclifescience.org/protein-protein-protein/
- Query: "protein molecule 3d structure science"
- Final size: 1,022,561 bytes (plain was 29,030)

## Verification
- All 7 new posters open in PIL as PNG at exactly 800x1000.
- Visually spot-checked: retail (supermarket photo visible mid-frame, all text legible over the scrim), microplastic (scientist and microscope fill the frame, dissertation metric readable), epitope (protein render behind the text, long metric line fits on one line).

---

# Poster Style Change — 2026-11-15

All 8 posters (the 7 above plus ecommerce-sales-forecasting-inventory-analytics.png) regenerated as **cinematic gradient art**, replacing the photo-based versions. This matches the style of Jagadeeswara's own portfolio, where every project card uses a CSS `art` field with a unique diagonal 3-stop linear-gradient (135deg, dark base → mid tone → vivid accent) and no photographs at all.

Each poster is composited locally with PIL at exactly 800x1000:
- Diagonal linear gradient at 135deg (top-left dark → bottom-right vivid), mid stop at 57%
- Soft radial glow of the accent colour near the centre-right, plus a subtle dark vignette at the edges, so the art feels cinematic rather than flat
- No photos, no charts, no icons
- Same layout and text as the photo posters: thin white inset border, accent rule in the project's vivid colour, bold white title, category line, pale-yellow metric line, footer "RAMYA • DATA ANALYST"

The photo-based versions are backed up in `posters-photo-backup/` (copy, not move). The earlier plain-gradient versions remain in `posters-plain-backup/`. Nothing was pushed to GitHub; this is a local change only.

## Palettes (dark → mid → vivid)

| Poster | Palette | Final size |
| --- | --- | --- |
| retail-sales-performance-customer-segmentation.png | #160a2e → #5b21b6 → #f59e0b | 938,355 bytes |
| marketing-campaign-analytics-ab-testing.png | #1f0a14 → #9d174d → #f472b6 | 934,316 bytes |
| automated-kpi-reporting-pipeline.png | #0f172a → #0369a1 → #38bdf8 | 933,958 bytes |
| customer-churn-prediction-retention-analytics.png | #0a1f1a → #0f766e → #2dd4bf | 929,299 bytes |
| microplastic-segmentation.png | #041a2e → #075985 → #22d3ee | 936,281 bytes |
| product-recommendation-engine.png | #1e1b4b → #4c1d95 → #a78bfa | 932,754 bytes |
| linear-b-cell-epitope-prediction.png | #06281f → #065f46 → #34d399 | 935,541 bytes |
| ecommerce-sales-forecasting-inventory-analytics.png | #1c1410 → #92400e → #f59e0b | 941,681 bytes |

## Verification
- All 8 new posters open in PIL as PNG at exactly 800x1000, RGB.
- Visually spot-checked: retail (deep violet melting into warm amber with a soft amber glow centre-right; amber accent rule; title, RFM category line and £360,215 metric crisp against the darkened top-left), microplastic (deep navy through sky blue to cyan with a cyan glow on the right; dissertation metric fully legible), forecasting (dark brown through burnt orange to amber; "Forecasting & Inventory" fits inside the border; MAPE metric legible over the orange).
- Zero photographic content in any poster — backgrounds are pure gradient, glow and vignette.
