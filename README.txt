Zambia Online Retail Presentation — Helper Files
=================================================

FILES INCLUDED
--------------
1. zambia_retail_v2.pptx        — The final PowerPoint presentation (9 slides)
2. zambia_build_script.js       — Node.js script used to generate the PPTX
3. Poppins-Regular.ttf          — Poppins font (regular weight)
4. Poppins-Bold.ttf             — Poppins font (bold weight)
5. Poppins-SemiBold.ttf         — Poppins font (semi-bold weight)
6. Poppins-Light.ttf            — Poppins font (light weight)
7. README.txt                   — This file

HOW THE PPTX WAS BUILT
-----------------------
The presentation was generated programmatically using PptxGenJS, 
an open-source Node.js library for creating PowerPoint files.

To regenerate the PPTX from the script:
  1. Install Node.js (https://nodejs.org)
  2. Run: npm install -g pptxgenjs
  3. Run: node zambia_build_script.js
  4. Output: zambia_v2.pptx

FONTS
-----
Poppins is an open-source font by Indian Type Foundry, licensed under
the SIL Open Font License (OFL). Downloaded from Google Fonts.
Source: https://fonts.google.com/specimen/Poppins

Note: PowerPoint embeds the font at render time. The .ttf files are
included here for reference and in case the font needs to be installed
on the presenting machine.

DATA SOURCES (for Zambia market numbers)
-----------------------------------------
- ECDB (ecommercedb.com) — Zambia E-Commerce Market Profile, 2025
- DataReportal — Digital 2025: Zambia (January 2025)
  datareportal.com/reports/digital-2025-zambia
- US International Trade Administration — Zambia Country Commercial Guide
  trade.gov/country-commercial-guides/zambia
- Nikulipe — Zambia Market Report, April 2025
  nikulipe.com/countries/zambia
- AUDA-NEPAD — E-Commerce Systems in Zambia report
- UK retail figures — from Power BI analysis of ONS retail dataset (1996–2026)

DEPENDENCIES
------------
- Node.js >= 14
- pptxgenjs (npm install -g pptxgenjs)
