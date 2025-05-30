document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const hamb = document.getElementById('hamburger');
    const menu = document.getElementById('nav-menu');
    hamb.addEventListener('click', () => {
        menu.classList.toggle('open');
    });

    // Close menu when clicking an in-page link
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            const href = link.getAttribute('href');
            if (menu.classList.contains('open') && (href.startsWith('#') || href.startsWith('index.html#'))) {
                menu.classList.remove('open');
            }
        });
    });

    const translations = {
        en: {
            // Nav
            navArchitecture:           "JusticeFusion Architecture",
            "navArchitecture-start":   "JusticeFusion Architecture",
            navWhitepaper:             "Whitepaper",
            navContactHome:            "Contact",
            navAdvantages:             "Advantages vs. ChatGPT",
            navAccess:                 "Access Assistant",

            // Hero
            heroTitle:                 "What is JusticeFusion?",
            heroText:                  "JusticeFusion is your next-generation legal AI assistant, created specifically for lawyers, legal experts, notaries, economists, administrative workers, companies, and anyone who needs reliable, fast, and accurate legal information. JusticeFusion understands domestic law, works with your documents, and saves your time — all with the simplest user experience.",
            btnAccess1:                "Access Assistant",

            // Bullet section
            bulletTitle:               "Why JusticeFusion?",
            bulletP1:                  "🤖 Automates tedious tasks!",
            bulletP2:                  "📋 Create solutions, decisions, emails, requests, memos, invoices, etc. with a single sentence!",
            bulletP3:                  "🔍 Search for information in documents hundreds of pages long using natural language!",
            bulletP4:                  "🏛 Automatically align all your documents with current legal regulations and laws!",
            bulletP5:                  "⚖️ Search laws, bylaws, court practices, and judgments using natural language!",
            bulletP6:                  "❓ Ask questions for authentic interpretation of laws and bylaws based on an always up-to-date huge database!",
            bulletP7:                  "🗂 All your documents in one place!",
            bulletP8:                  "🕺 Enjoy your free time!",
            btnAccessWhy:              "Access Assistant",

            // Contact form
            contactTitle:             "Contact Us",
            contactNamePlaceholder:   "Your name and surname",
            contactEmailPlaceholder:  "Your email",
            contactMessagePlaceholder:"Your message",
            contactSendButton:        "Send Message",

            // Architecture (index)
            architectureTitle:        "JusticeFusion Architecture",
            archSub1:                 "Real Legal Expertise Through a Specialized Model",
            archText1:                "JusticeFusion is powered by its own deeply trained language model, developed on over 10,000 laws and 130,000 court judgments, practice documents, bylaws, and regulations from Bosnia and Herzegovina, Croatia, and Serbia. Instead of relying on a generic dataset, our model uses fine-tuning on domestic legal corpora for pinpoint accuracy in identification, understanding, and answer generation — in both Cyrillic and Latin scripts.",
            archSub2:                 "The Real Power of RAG: True User Document Processing",
            archText2:                "Unlike most AI solutions, JusticeFusion uses an advanced Retrieval-Augmented Generation (RAG) architecture that lets you upload your own documents (PDF, DOCX, images). All files are processed through multiple text-extraction layers, auto-indexed, and instantly searchable — complete with OCR for scans and multi-language support.",
            archSub3:                 "Hybrid Retrieval: Combining Your Documents and the Legal Base",
            archText3:                "JusticeFusion’s hybrid engine gives priority to your docs; if they lack the answer, it pulls from our internal legal database (laws, regulations, cases) for a double-check — the best of both worlds without compromise.",
            archSub4:                 "Automatic Query Analysis & Adaptive Response",
            archText4:                "Every user query runs through intent detection to decide between general analyses (summaries, key points) or concrete legal data. Behind the scenes, optimized search and generation strategies kick in — no technical know-how needed.",
            archSub5:                 "Multi-Layer Verification & Chain-of-Thought Refinement",
            archText5:                "After the first model answers, a second agent-model checks completeness and accuracy. If it’s lacking, an auto-reformulation process improves the response — chain-of-thought style for higher legal reliability.",
            archSub6:                 "Automatic Detection & Generation of Legal Forms",
            archText6:                "If we detect you need a formal document (appeal, contract, decision), we auto-generate a legally valid Word (DOCX) you can download and use — no extra editing required.",
            archSub7:                 "Security, Privacy & On-Premise Operation",
            archText7:                "Install locally or in your private cloud — none of your data ever leaves your infrastructure. Full privacy control, offline capable, perfect for firms and public institutions.",
            archSub8:                 "Modern UI Designed for Legal Pros",
            archText8:                "Manage multiple chats, browse archives, export answers, handle user roles, and operate in Bosnian/Croatian/Serbian — all optimized for speed and simplicity.",
            archSub9:                 "Update & Expand Without Retraining",
            archText9:                "Upload new rules, laws, and judgments and they instantly get indexed for future queries, no costly retraining needed.",
            archSub10:                "Advanced Domestic Source Processing",
            archText10:               "Auto language detection, lemmatization, Cyrillic/Latin conversion, header/footer cleaning — all legal texts get noise-free, accurate analysis.",
            archSub11:                "Your Database, Your Rules: Private Offline Mode",
            archText11:               "Use only your own archive of contracts, decisions, or internal acts for a fully offline AI that never communicates externally.",
            archText12:               "No internet connection needed — everything stays on your server, fully under your control.",
            archText13:               "Ideal for law firms, notary offices, and institutions demanding top-tier security and confidentiality.",
            archEnd:                 "JusticeFusion — AI architecture built for lawyers, on modern principles, always under your control.",

            // Advantages vs. ChatGPT
            advantagesCompareTitle:  "Advantages vs. ChatGPT",
            advantagesTeaser:         "Learn why JusticeFusion outperforms generic AI tools for legal pros.",
            developedByGraphLab:      "Developed by GraphLab © 2025",
            pageTitleAdvantages:      "Advantages of JusticeFusion Over Generic AI Tools",
            advGenericTitle:          "ChatGPT, Gemini, DeepSeek (Generic AI Assistants):",
            advGenericProsTitle:      "Advantages:",
            advGenericProsText:       "Vast general knowledge, quick basic Q&A, multi-language text generation. Great for general info, science, IT, everyday topics where local legal nuance isn’t critical.",
            advGenericConsTitle:      "Disadvantages:",
            advGenericCon1:           "<strong>Lack of local legal expertise:</strong> No access to up-to-date Bosnian, Croatian, or Serbian laws/case practice.",
            advGenericCon2:           "<strong>Poor document handling:</strong> Limited or insecure search/analysis of your PDFs, DOCX, images.",
            advGenericCon3:           "<strong>No privacy control:</strong> Data processed on external servers (US/EU/China) without clear guarantees.",
            advGenericCon4:           "<strong>No legal focus:</strong> Can’t recognize legal forms or generate valid local-law documents.",
            advGenericCon5:           "<strong>Not end-to-end:</strong> No pipeline from document upload to form generation.",
            advGenericCon6:           "<strong>High costs:</strong> API usage is expensive and rate-limited for bigger legal teams.",
            advJusticeFusionTitle:    "JusticeFusion:",
            advJusticeFusionProsTitle:"Advantages:",
            advJusticeFusionPro1:     "<strong>Domestic-law specialist:</strong> Trained on thousands of regional laws and judgments.",
            advJusticeFusionPro2:     "<strong>Works with your docs:</strong> Auto-processes, indexes, and searches your files.",
            advJusticeFusionPro3:     "<strong>Hybrid approach:</strong> Combines your database with our legal base for complete answers.",
            advJusticeFusionPro4:     "<strong>Advanced verification:</strong> Automatic agentic evaluation ensures accuracy.",
            advJusticeFusionPro5:     "<strong>Form generation:</strong> Auto-detects and exports legal DOCX forms.",
            advJusticeFusionPro6:     "<strong>Privacy & security:</strong> On-premise or private cloud, data never leaves your network.",
            advJusticeFusionPro7:     "<strong>Quick updates:</strong> New laws auto-index without IT hassles.",
            advJusticeFusionPro8:     "<strong>Tailored UI:</strong> Built for lawyers, with RBAC, multi-language, export, admin tools.",
            advConclusionTitle:       "Conclusion:",
            advConclusionText:        "Generic AIs are fine for general info; JusticeFusion is the only AI assistant optimized for local law, document privacy, and full security — perfect for legal pros and organizations.",
            contactTitlePrednosti:    "Contact Us",
            footerText:               "© 2025 GraphLab. All rights reserved.",

            // ——— WHITEPAPER PAGE TRANSLATIONS ———
            whitepaperTitle:          "JusticeFusion – Tech Whitepaper",
            wpIntro:                  "JusticeFusion is a modular legal AI assistant based on a Retrieval-Augmented Generation (RAG) architecture and advanced use of domestic legal data...",

            // Section 1
            wp1Title:                 "1. System Overview & Architecture",
            wp1Text1:                "JusticeFusion is a modular legal AI assistant based on a Retrieval-Augmented Generation (RAG) architecture and advanced use of domestic legal data. The system is built from multiple specialized modules, developed in Python, which communicate through clear APIs and a shared database.",
            wp1Text2:                "It can be deployed as a SaaS (cloud), private cloud, or fully on-premise, depending on user requirements.",
            wp1Text3:                "Main components:",
            wp1Li1:                  "Core RAG module (Retrieval + Generation): Connects document processing and response generation.",
            wp1Li2:                  "Legal embedding model (SentenceTransformer, cde-small-v2): Trained on laws and court rulings from Bosnia and Herzegovina, Croatia, and Serbia.",
            wp1Li3:                  "Hybrid retrieval engine: Combines vector search (FAISS), keyword search (TF-IDF, BM25), and BM25 score weighting.",
            wp1Li4:                  "Document processor: Extracts and processes text from PDFs, DOCX, images (with advanced OCR).",
            wp1Li5:                  "Agentic evaluator: Two-layer answer evaluation (first model answers, second checks and provides “chain-of-thought” enhancements).",
            wp1Li6:                  "Local legal database: Laws, regulations, judgments – extendable with custom or external documents.",
            wp1Li7:                  "Web UI/administration: Intuitive Streamlit-based interface tailored for lawyers and firms.",

            // Section 2
            wp2Title:                 "2. Support for Diverse Input Formats & Advanced Text Processing",
            wp2Li1:                  "Supported formats: PDF, DOCX, text files, images (JPG, PNG, TIFF).",
            wp2Li2:                  "Automatic OCR: EasyOCR + Tesseract, with automatic language and script detection (Cyrillic/Latin).",
            wp2Li3:                  "Blank page detection, header/footer noise removal, automatic lemmatization (Stanza + NLTK).",
            wp2Li4:                  "Document chunking: Each document is automatically split into logical units (paragraphs/articles) for granular search and precise retrieval of relevant answers.",

            // Section 3
            wp3Title:                 "3. Legal Embedding & Vector Search",
            wp3Li1:                  "Embedding model (SentenceTransformer): Tailored for legal terminology and local languages. Enables efficient and precise semantic similarity between user queries and relevant document parts.",
            wp3Li2:                  "FAISS indexing: High-performance vector search, ready for tens of thousands of documents.",
            wp3Li3:                  "Caching mechanisms: Embeddings are cached for fast queries and reduced computational costs.",

            // Section 4
            wp4Title:                 "4. Hybrid Search (Vector + Keyword + BM25 Scoring)",
            wp4Li1:                  "Vector search: Based on semantic similarity (nearest embeddings).",
            wp4Li2:                  "Keyword search: TF-IDF and BM25 algorithms for traditional IR context.",
            wp4Li3:                  "Combined scoring: The system dynamically weights each source (vector, keyword, BM25) based on query type and user corpus.",
            wp4Li4:                  "RAG pipeline: The most relevant document segments are automatically sent to the LLM prompt for final answer generation.",

            // Section 5
            wp5Title:                 "5. Agentic Answer Evaluation (Multi-Step Chain-of-Thought)",
            wp5Text1:                "After the LLM generates the first answer, a second agent (agentic LLM) automatically analyzes:",
            wp5Li1:                  "Whether all relevant laws, articles, cases, and legal entities are cited?",
            wp5Li2:                  "Whether the answer is complete, accurate, and clear?",
            wp5Text2:                "If the answer is unsatisfactory, the agent generates a new (improved) prompt and sends it back into the RAG pipeline – up to three iterations per answer (iterative chain-of-thought).",
            wp5Text3:                "Benefits: Minimization of hallucinations, increased accuracy and legal reliability, reduced need for human double-checking.",

            // Section 6
            wp6Title:                 "6. Automatic Legal Form Detection & DOCX Generator",
            wp6Li1:                  "Response structure analysis – the model automatically recognizes when a formal document is requested (appeal, contract, decision, letter…).",
            wp6Li2:                  "Automatic Word (DOCX) generator: Creates a print-ready document for further editing, with placeholders for custom data.",

            // Section 7
            wp7Title:                 "7. Privacy & Deployment Options",
            wp7Li1:                  "On-premise or cloud: JusticeFusion can be installed locally, in a private cloud, or used as a SaaS with data residency guarantees.",
            wp7Li2:                  "Offline mode: Fully functional without an internet connection – no data, documents, queries, or answers leave the user network.",
            wp7Li3:                  "Private knowledge base architecture: You can build and use an AI that knows exclusively your internal document corpus – ideal for sensitive firms, institutions, legal teams, or notaries.",

            // Section 8
            wp8Title:                 "8. Database Updates & Maintenance",
            wp8Li1:                  "Adding new documents: Simple upload, automatic processing, and indexing – no manual entry, retraining, or advanced IT skills required.",
            wp8Li2:                  "Law change tracking: New rules and acts automatically become part of the database as soon as you add them.",
            wp8Li3:                  "Dataset versioning support: Every database change can be versioned, allowing rollback to previous versions if necessary.",

            // Section 9
            wp9Title:                 "9. Security & Auditing",
            wp9Li1:                  "Local data storage: All documents, embeddings, and query history are stored on your servers, with optional disk/database encryption.",
            wp9Li2:                  "Audit logs: All user accesses, document changes, and requests can be audited.",

            // Section 10
            wp10Title:                "10. User Interface, Administration & Integrations",
            wp10Li1:                 "Web UI (Streamlit-based): Intuitive chat interface for every lawyer; supports multiple conversations, history export, user administration, and advanced search.",
            wp10Li2:                 "Multilingual: Bosnian, Croatian, and Serbian – automatic detection and display in the preferred language.",
            wp10Li3:                 "Role-based access control (RBAC): Admin and user roles, with configurable access levels.",
            wp10Li4:                 "REST API & Webhook integrations: Integration with existing DMS, ERP, or CRM systems.",

            // Section 11
            wp11Title:               "11. Ecosystem & Extensibility",
            wp11Li1:                 "Plug-and-play extensions: Easily add new parsers, legal databases, or language models.",
            wp11Li2:                 "Custom workflows: Build your own workflows (e.g., litigation strategy preparation, template automation…).",
            wp11Li3:                 "External sources: Integration with open data, court databases, and international regulations.",

            // Section 12
            wp12Title:               "12. Technologies & Libraries",
            wp12Li1:                 "Backend: Python 3.x, Streamlit, FAISS, PyTorch, SentenceTransformers, Stanza, NLTK, EasyOCR, python-docx, PDFMiner, OpenCV, SQLite/LMDB for caching.",
            wp12Li2:                 "Frontend: Streamlit-based responsive UI + custom CSS/JS injections for mobile and desktop.",
            wp12Li3:                 "API: RESTful for administration and integrations, with webhook support.",

            // Section 13
            wp13Title:               "13. Roadmap & Support",
            wp13Li1:                 "Actively developed and maintained.",
            wp13Li2:                 "Customizable for client-specific processes.",
            wp13Li3:                 "Fast support, custom onboarding, and training for end users and IT staff."
        },
        bs: {
            // Nav
            navArchitecture:           "Arhitektura JusticeFusion",
            "navArchitecture-start":   "Arhitektura JusticeFusion",
            navWhitepaper:             "Whitepaper",
            navContactHome:            "Kontakt",
            navAdvantages:             "Prednosti u odnosu na ChatGPT",
            navAccess:                 "Pristup asistentu",

            // Hero
            heroTitle:                 "Šta je JusticeFusion?",
            heroText:                  "JusticeFusion je vaš pravni AI asistent nove generacije, kreiran posebno za advokate, pravne stručnjake, notare, ekonomiste, administrativne radnike, firme i sve kojima je potrebna pouzdana, brza i tačna pravna informacija. JusticeFusion razumije domaće pravo, radi s vašim dokumentima i štedi vaše vrijeme — sve uz najjednostavnije korisničko iskustvo.",
            btnAccess1:                "Pristup asistentu",

            // Bullet
            bulletTitle:               "Zašto JusticeFusion?",
            bulletP1:                  "🤖 Automatizuje dosadne poslove!",
            bulletP2:                  "📋 Kreirajte rješenja, odluke, mailove, zahtjeve, dopise, fakture i sl. sa jednom rečenicom!",
            bulletP3:                  "🔍 Pretražujte informacije u dokumentima od nekoliko stotina strana koristeći prirodni jezik!",
            bulletP4:                  "🏛 Uskladite sve Vaše dokumente sa aktuelnim pravnim propisima i zakonima automatski!",
            bulletP5:                  "⚖️ Pretražujte zakone, podzakonske akte, sudsku praksu i presude koristeći prirodni jezik!",
            bulletP6:                  "❓ Postavljajte pitanja za autentično tumačenje zakona i podzakonskih akata zasnovano na uvjek aktuelnoj ogromnoj bazi podataka!",
            bulletP7:                  "🗂 Svi Vaši dokumenti na jednom mjestu!",
            bulletP8:                  "🕺 Uživajte u slobodnom vremenu!",
            btnAccessWhy:              "Pristup asistentu",

            // Contact
            contactTitle:             "Kontaktirajte nas",
            contactNamePlaceholder:   "Vaše ime i prezime",
            contactEmailPlaceholder:  "Vaš email",
            contactMessagePlaceholder:"Vaša poruka",
            contactSendButton:        "Pošalji poruku",

            // Architecture
            architectureTitle:        "Arhitektura JusticeFusion",
            archSub1:                 "Prava pravna ekspertiza kroz specijalizovani model",
            archText1:                "JusticeFusion pokreće vlastiti duboko trenirani jezički model, razvijen na preko 10.000 aktuelnih zakona i 130.000 sudskih presuda, dokumenata sudske prakse, podzakonskih akata i pravilnika iz Bosne i Hercegovine, Hrvatske i Srbije. Umjesto oslanjanja na generički, globalni ili nerelevantni podatkovni skup, naš model koristi “fine-tuning” i legalne korpuse s domaćeg terena. Rezultat je nevjerovatno precizna identifikacija, razumijevanje i generisanje odgovora za sve što се tiče domaćeg prava — i to na oba pisma, ćirilici i latinici.",
            archSub2:                 "Prava snaga RAG-a: Prava obrada korisničkih dokumenata",
            archText2:                "Za razliku od većine AI rješenja, JusticeFusion koristi naprednu Retrieval-Augmented Generation (RAG) arhitekturu koja omogućava korisnicima da učitaju vlastite dokumente (PDF, DOCX, slike). Svi dokumenti se procesuiraju kroz više slojeva ekstrakcije teksta, automatski se indeksiraju i trenutačno su dostupni za pretraživanje. To znači da korisnik može postaviti pitanje doslovno o bilo čemu iz vlastitih materijala i odmah dobiti odgovor — uz podršku za razne formate, automatski OCR za skenirane fajlove i robustno prepoznavanje jezika.",
            archSub3:                 "Hibridni retrieval: Kombinacija vaših dokumenata i pravne baze",
            archText3:                "JusticeFusion kombinira hibridni retrieval engine: vaši dokumenti uvijek imaju prioritet, ali ako u njima nema odgovora, sistem koristi internu pravnu bazu (zakoni, propisi, presude). Time se automatski ostvaruje dvostruka provjera — sistem povlači podatke iz vaših izvora, ali i iz najšire moguće baze lokalnih pravnih akata, dajući vam “best of both worlds” bez kompromisa.",
            archSub4:                 "Automatska analiza upita i adaptivna strategija odgovaranja",
            archText4:                "Svaki korisnički upit prolazi kroz napredni intent detection koji automatski prepoznaje da li tražite opštu analizu (npr. sažetak, ključne tačke) ili konkretan pravni podatak. Na osnovu toga biraju se optimizirane strategije pretraživanja i generisanja odgovora — sve u pozadini, bez potrebe za tehničkim znanjem od strane korisnika.",
            archSub5:                 "Višeslojna provjera i agentic “chain-of-thought” rafiniranje",
            archText5:                "JusticeFusion uvodi dvoslojni sistem LLM evaluacije: nakon što model generiše prvi odgovor, poseban agentic model automatski provjerava njegovu potpunost i tačnost. Ako procijeni da odgovor nije dovoljno jasan ili kompletan, pokreće se proces automatskog reformulisanja pitanja i poboljšanja odgovora — ovaj “chain-of-thought” pristup donosi višestruko bolju pravnu pouzdanost.",
            archSub6:                 "Automatska detekcija i generisanje pravnih obrazaca",
            archText6:                "Sistem koristi detekciju predložaka: ako AI prepozna da korisničko pitanje zahtijeva pravni obrazac (npr. žalba, ugovor, rješenje), automatski generiše pravno validan Word (DOCX) dokument. Korisnik ga može preuzeti i koristiti bez dodatnog editovanja — ova funkcionalnost ne postoji u konkurentskim generičkim rješenjima.",
            archSub7:                 "Sigurnost, privatnost i on-premise rad",
            archText7:                "Za razliku od velikih globalnih servisa (ChatGPT, Gemini, DeepSeek), JusticeFusion se može instalirati lokalno ili u vašem cloudu. Vaši dokumenti, pitanja i podaci nikada ne napuštaju vašu infrastrukturu. Sistem nudi punu kontrolu nad privatnošću i može raditi bez internetske konekcije, što ga čini idealnim za advokatske kancelarije, firme i javni sektor.",
            archSub8:                 "Moderno korisničko sučelje dizajnirano za pravnu struku",
            archText8:                "UI je iz temelja napravljen za pravnike i firme — omogućava upravljanje s više paralelnih razgovora, arhivu svih pitanja i odgovora, administraciju korisnika, izvoz odgovora, te rad na bosanskom, hrvatskom i srpskom jeziku. Sve je optimizovano za brzinu i jednostavnost, bez tehničkih prepreka.",
            archSub9:                 "Ažuriranje i proširenje baze bez ponovnog treniranja",
            archText9:                "Sistem je dizajniran tako da nova pravila, zakoni i presude možete dodati jednostavnim uploadom dokumenata — JusticeFusion ih automatski indeksira i koristi u sljedećim upitima, bez potrebe za ručnim intervencijama ili skupim treninzima modela.",
            archSub10:                "Napredni algoritmi za obradu domaćih izvora",
            archText10:               "Integrirani su specijalni algoritmi za automatsko prepoznavanje jezika, lematizaciju, konverziju ćirilice/latinice, čišćenje zaglavlja i podnožja, pa su svi pravni tekstovi analizirani sa maksimalnom tačnošću — bez šuma i gubitka bitnih informacija.",
            archSub11:                "Vaša vlastita baza, vaša pravila – privatna offline verzija",
            archText11:               "Imate svoju veliku arhivu ugovora, presuda, rješenja, interne akte ili druge pravne dokumente? JusticeFusion nudi mogućnost uspostavljanja potpuno lokalne, offline verzije AI asistenta, koja radi isključivo s vašom bazom podataka.",
            archText12:               "U toj verziji, svi podaci ostaju isključivo na vašem serveru – nijedan dokument, upit ili odgovor ne izlazi van vašeg okruženja, niti je potrebna bilo kakva internet konekcija. AI asistent pretražuje, analizira i daje odgovore samo na osnovu dokumenata koje vi odaberete i učitate.",
            archText13:               "Ova opcija je idealna za firme, advokatske kancelarije, notarske urede i institucije koje žele potpunu kontrolu nad znanjem, sigurnošću i povjerljivošću, ali i dalje koristiti sve prednosti najnaprednije AI pravne tehnologije.",
            archEnd:                 "JusticeFusion — AI arhitektura osmišljena za pravnike, izgrađena na najmodernijim principima, ali uvijek pod vašom kontrolom.",

            // Advantages vs. ChatGPT (bs)
            advantagesCompareTitle:  "Prednosti u odnosu na ChatGPT",
            advantagesTeaser:         "Saznajte zašto je JusticeFusion superiorno rješenje za pravne profesionalce u odnosu na generičke AI alate.",
            developedByGraphLab:      "Razvijeno od strane GraphLab © 2025",
            pageTitleAdvantages:      "Prednosti JusticeFusion u odnosu na Generičke AI Alate",
            advGenericTitle:          "ChatGPT, Gemini, DeepSeek (Generički AI asistenti):",
            advGenericProsTitle:      "Prednosti:",
            advGenericProsText:       "Ove platforme posjeduju ogroman fond općeg znanja iz najrazličitijih oblasti, brzo prepoznaju osnovne upite i mogu generirati tekstove na mnogo jezika. Idealne su za brze odgovore na pitanja opće kulture, iz IT-a, nauke ili svakodnevnog života, gdje nije bitna lokalna pravna specifičnost.",
            advGenericConsTitle:      "Nedostaci:",
            advGenericCon1:           "<strong>Nedostatak lokalne pravne ekspertize:</strong> Nemaju pristup najnovijim verzijama lokalnih zakona, propisa i sudske prakse Bosne i Hercegovine, Hrvatske ili Srbije.",
            advGenericCon2:           "<strong>Ne rade efikasno s korisničkim dokumentima:</strong> Većina generičkih AI servisa ne omogućava pretragu, analizu i citiranje konkretnih korisničkih dokumenata (PDF, DOCX, slike) ili su te opcije ograničene i nesigurne.",
            advGenericCon3:           "<strong>Nema privatnosti ni kontrole nad podacima:</strong> Sve što pošaljete, obrađuje se na eksternim serverima (SAD, EU, Kina), često bez jasnih garancija privatnosti i sigurnosti vaših dokumenata i povjerljivih podataka.",
            advGenericCon4:           "<strong>Bez pravnog fokusa:</strong> Ne prepoznaju pravne forme, ne razumiju nijanse pravnog jezika, ne mogu generirati pravno validne akte, obrasce, zahtjeve ili ugovore specifične za naše zakonodavstvo.",
            advGenericCon5:           "<strong>Nedostaje end-to-end workflow:</strong> Ne mogu preuzeti kompletan pravni slučaj od učitavanja dokumenata, preko analize, do automatskog generisanja obrazaca ili rješenja.",
            advGenericCon6:           "<strong>Visoki troškovi:</strong> Komercijalna upotreba (posebno API integracije) je često vrlo skupa i s limitima na broj upita, što nije isplativo za veće pravne timove ili firme.",
            advJusticeFusionTitle:    "JusticeFusion:",
            advJusticeFusionProsTitle:"Prednosti:",
            advJusticeFusionPro1:     "<strong>Specijalizovan za domaće pravo:</strong> Trenirano na hiljadama zakona i presuda iz BiH, Hrvatske i Srbije — garantuje tačnost, relevantnost i pravni jezik u odgovorima.",
            advJusticeFusionPro2:     "<strong>Rad s vašim dokumentima:</strong> Automatski obrađuje, indeksira i pretražuje vaše PDF-ove, Word fajlove i skenirane slike. Možete postavljati pitanja direktno o svom ugovoru, rješenju ili presudi.",
            advJusticeFusionPro3:     "<strong>Hibridni pristup:</strong> Kombinuje znanje iz vaše baze i sistemske baze zakona/presuda, tako da uvijek daje najpotpuniji odgovor — čak i na kompleksne pravne upite.",
            advJusticeFusionPro4:     "<strong>Napredna provjera odgovora:</strong> Svaki odgovor prolazi automatsku pravnu provjeru (“agentic evaluation”) koja osigurava tačnost, potpunost i usklađenost sa zakonima.",
            advJusticeFusionPro5:     "<strong>Generisanje pravnih obrazaca i dokumenata:</strong> JusticeFusion automatski prepoznaje kada je potreban formalni akt (žalba, ugovor, zahtjev, izjava…) i odmah nudi izvoz u Word (DOCX) formatu, spreman za predaju ili print.",
            advJusticeFusionPro6:     "<strong>Privatnost i sigurnost:</strong> Radi na vašoj infrastrukturi (on-premise ili privatni cloud), bez slanja podataka van vaše mreže. Svi podaci, dokumenti i odgovori ostaju pod vašom punom kontrolom.",
            advJusticeFusionPro7:     "<strong>Brzo ažuriranje pravne baze:</strong> Novi zakoni, propisi i interni dokumenti se mogu dodavati jednostavno i automatski, bez potrebe za dugim IT intervencijama ili skupim treninzima.",
            advJusticeFusionPro8:     "<strong>Prilagođeno pravnim profesionalcima:</strong> Sve je prilagođeno svakodnevnom workflow-u advokata, notara, firmi i institucija — od korisničkog interfejsa, preko administracije, do podrške za više jezika i pisma.",
            advConclusionTitle:       "Zaključak:",
            advConclusionText:        "Dok su generički AI asistenti dobri za opće informacije, JusticeFusion je jedini AI pravni asistent optimiziran za domaće zakonodavstvo, rad s vašim dokumentima i potpunu sigurnost podataka — savršeno rješenje za pravne profesionalce i organizacije koje žele više od običnog “AI chatbota”.",
            contactTitlePrednosti:    "Kontaktirajte nas",
            footerText:               "© 2025 GraphLab. Sva prava zadržana.",

            // ——— WHITEPAPER (bs) ———
            whitepaperTitle:          "JusticeFusion – Tech Whitepaper",
            wpIntro:                  "JusticeFusion je modularni AI pravni asistent baziran na Retrieval-Augmented Generation (RAG) arhitekturi i naprednoj upotrebi domaćih pravnih podataka...",

            // Section 1
            wp1Title:                 "1. Pregled sistema i arhitektura",
            wp1Text1:                "JusticeFusion je modularni AI pravni asistent baziran na Retrieval-Augmented Generation (RAG) arhitekturi i naprednoj upotrebi domaćih pravnih podataka. Sistem je izgrađen od više specijaliziranih modula, razvijenih u Pythonu, koji međusobno komuniciraju kroz jasne API-je i zajedničku bazu podataka.",
            wp1Text2:                "Može se koristiti kao SaaS (cloud), privatni cloud, ili potpuno lokalno (on-premise), zavisno od zahtjeva korisnika.",
            wp1Text3:                "Glavne komponente:",
            wp1Li1:                  "RAG jezgrovni modul (Retrieval + Generation): Povezuje obradu dokumenata i generisanje odgovora.",
            wp1Li2:                  "Pravni embedding model (SentenceTransformer, cde-small-v2): Trenirano na zakonima i sudskim presudama sa prostora BiH, HR, SR.",
            wp1Li3:                  "Hybrid retrieval engine: Kombinira vektorsko pretraživanje (FAISS), pretragu ključnih riječi (TF-IDF, BM25) i BM25-score weighting.",
            wp1Li4:                  "Dokument procesor: Ekstrakcija i obrada teksta iz PDF, DOCX, slike (sa naprednim OCR-om).",
            wp1Li5:                  "Agentic evaluator: Dvoslojna evaluacija odgovora (prvi model odgovara, drugi provjerava i daje “chain-of-thought” poboljšanja).",
            wp1Li6:                  "Lokalna pravna baza: Zakoni, propisi, presude – može se proširivati vlastitim ili eksternim dokumentima.",
            wp1Li7:                  "Web UI/administracija: Intuitivni Streamlit-based interfejs prilagođen advokatima i firmama.",

            // Section 2
            wp2Title:                 "2. Podrška za raznovrsne ulazne formate i napredna obrada teksta",
            wp2Li1:                  "Podržani formati: PDF, DOCX, tekstualni fajlovi, slike (JPG, PNG, TIFF).",
            wp2Li2:                  "Automatski OCR: EasyOCR + Tesseract, sa automatskom detekcijom jezika i pisma (ćirilica/latinica).",
            wp2Li3:                  "Prepoznavanje praznih stranica, header/footer šuma, automatska lematizacija (Stanza + NLTK).",
            wp2Li4:                  "Chunking dokumenta: Svaki dokument se automatski dijeli u logične cjeline (paragrafi/članci), što omogućava granularno pretraživanje i tačno vraćanje relevantnih odgovora.",

            // Section 3
            wp3Title:                 "3. Legalni embedding i vektorsko pretraživanje",
            wp3Li1:                  "Embedding model (SentenceTransformer): Prilagođen za pravnu terminologiju i lokalne jezike. Omogućava efikasnu i preciznu semantičku sličnost između korisničkog pitanja i relevantnih dijelova dokumenata.",
            wp3Li2:                  "FAISS indeksacija: Visokoperformantno vektorsko pretraživanje, spremno za baze sa hiljadama ili desetinama hiljada dokumenata.",
            wp3Li3:                  "Caching mehanizmi: Embeddingi se keširaju za brze upite i minimiziranje računalnih troškova.",

            // Section 4
            wp4Title:                 "4. Hibridno pretraživanje (vector + keyword + BM25 scoring)",
            wp4Li1:                  "Vektorska pretraga: Na osnovu semantičke sličnosti (najbliži embeddingi).",
            wp4Li2:                  "Pretraga po ključnim riječima: TF-IDF i BM25 algoritmi za “traditional IR” kontekst.",
            wp4Li3:                  "Kombinovano bodovanje: Sistem dinamički određuje težinu svakog izvora (vektor, ključne riječi, BM25), prilagođavajući se tipu upita i korisničkoj bazi.",
            wp4Li4:                  "RAG pipeline: Najrelevantniji segmenti iz dokumenata automatski se šalju u LLM prompt za generisanje konačnog odgovora.",

            // Section 5
            wp5Title:                 "5. Agentic evaluacija odgovora (multi-step chain-of-thought)",
            wp5Text1:                "Nakon što LLM generiše prvi odgovor, drugi agent (agentic LLM) automatski analizira:",
            wp5Li1:                  "Da li su navedeni svi relevantni zakoni, članovi, presude i pravni entiteti?",
            wp5Li2:                  "Da li je odgovor potpun, precizan i razumljiv?",
            wp5Text2:                "Ako odgovor nije zadovoljavajući, agent generiše novo (poboljšano) pitanje i vraća ga u RAG pipeline — do tri iteracije po odgovoru (“iterativni chain-of-thought”).",
            wp5Text3:                "Prednosti: Minimizacija “halucinacija”, povećana tačnost i pravna pouzdanost, manje potrebe za ljudskim “double-checking”.",

            // Section 6
            wp6Title:                 "6. Automatska detekcija pravnih obrazaca i DOCX generator",
            wp6Li1:                  "Analiza strukture odgovora — model automatski prepoznaje da li se traži izrada formalnog dokumenta (žalba, ugovor, rješenje, dopis…).",
            wp6Li2:                  "Automatski Word (DOCX) generator: Iz teksta se kreira dokument spreman za print ili dalje uređivanje, sa mogućnošću unosa vlastitih podataka.",

            // Section 7
            wp7Title:                 "7. Prava privatnost i deployment opcije",
            wp7Li1:                  "On-premise ili cloud: JusticeFusion se može instalirati na lokalni server, u privatni cloud, ili koristiti kao SaaS uz “data residency” garanciju.",
            wp7Li2:                  "Offline režim: Potpuno funkcionalan i bez internetske konekcije — nijedan podatak, dokument, upit ili odgovor ne napušta korisničku mrežu.",
            wp7Li3:                  "Prava “private knowledge base” arhitektura: Možete izgraditi i koristiti AI koji poznaje isključivo vašu internu bazu dokumenata — izuzetno pogodno za osjetljive firme, institucije, pravne timove ili notare.",

            // Section 8
            wp8Title:                 "8. Ažuriranje i održavanje baze",
            wp8Li1:                  "Dodavanje novih dokumenata: Jednostavan upload, automatsko procesiranje i indeksiranje — nema potrebe za ručnim unosom, ponovnim treniranjem ili naprednim IT znanjem.",
            wp8Li2:                  "Praćenje izmjena zakona: Nova pravila i akti automatski postaju dio baze čim ih dodate.",
            wp8Li3:                  "Podrška za “dataset versioning”: Svaka izmjena baze može biti verzionisana, omogućavajući povratak na starije verzije po potrebi.",

            // Section 9
            wp9Title:                 "9. Sigurnost i auditi",
            wp9Li1:                  "Lokalna pohrana podataka: Svi dokumenti, embeddingi i historija upita su na vašim serverima, s mogućnošću šifriranja diska/baze.",
            wp9Li2:                  "Audit logovi: Svi korisnički pristupi, promjene dokumenata i zahtjevi mogu biti auditirani.",

            // Section 10
            wp10Title:               "10. Korisnički interfejs, administracija i integracije",
            wp10Li1:                "Web UI (Streamlit based): Intuitivan chat interfejs za svakog pravnika; podržava rad s više razgovora, povijest, izvoz, administraciju korisnika i napredne pretrage.",
            wp10Li2:                "Višejezičnost: Bosanski, hrvatski i srpski – automatsko prepoznavanje i prikaz odgovora na željenom jeziku.",
            wp10Li3:                "Role-based access control (RBAC): Administratorske i korisničke uloge, mogućnost definiranja različitih nivoa pristupa.",
            wp10Li4:                "REST API i webhook integracije: Mogućnost integracije s postojećim DMS, ERP ili CRM rješenjima.",

            // Section 11
            wp11Title:               "11. Ekosistem i proširivost",
            wp11Li1:                "Plug-and-play ekstenzije: Lako dodavanje novih funkcionalnosti, parsera, dodatnih pravnih baza ili novih jezičkih modela.",
            wp11Li2:                "Custom workflow: Moguće je napraviti vlastite tokove rada (npr. priprema sudske strategije, automatizacija tipskih obrazaca…).",
            wp11Li3:                "Eksterni izvori: Integracija s drugim izvorima prava (open data, sudske baze, internacionalni propisi).",

            // Section 12
            wp12Title:               "12. Tehnologije i biblioteke",
            wp12Li1:                "Backend: Python 3.x, Streamlit, FAISS, PyTorch, SentenceTransformers, Stanza, NLTK, EasyOCR, Docx, PDFMiner, OpenCV, SQLite/LMDB za keširanje.",
            wp12Li2:                "Frontend: Streamlit-based responsive UI + custom CSS/JS injekcije za mobile i desktop.",
            wp12Li3:                "API: RESTful za administraciju i integraciju, mogućnost webhookova.",

            // Section 13
            wp13Title:               "13. Roadmap i podrška",
            wp13Li1:                "Aktivno se razvija i podržava.",
            wp13Li2:                "Mogućnost prilagodbe na specifične procese klijenta.",
            wp13Li3:                "Brza podrška, custom onboarding, training za krajnje korisnike i IT osoblje."
        }
    };

    const langBsBtn = document.getElementById('lang-bs');
    const langEnBtn = document.getElementById('lang-en');
    const translatableElements = document.querySelectorAll('[data-lang]');
    const htmlElement = document.documentElement;

    function setLang(lang) {
        translatableElements.forEach(el => {
            const key = el.dataset.lang;
            let textToSet = '';
            if (translations[lang] && translations[lang][key]) {
                textToSet = translations[lang][key];
            } else if (translations['bs'] && translations['bs'][key]) {
                textToSet = translations['bs'][key];
            } else {
                textToSet = el.getAttribute('data-original-text') || '';
            }
            if (el.placeholder !== undefined) {
                el.placeholder = textToSet;
            } else {
                el.innerHTML = textToSet;
            }
        });
        htmlElement.lang = lang;
        langBsBtn.classList.toggle('active', lang === 'bs');
        langEnBtn.classList.toggle('active', lang === 'en');
        localStorage.setItem('preferredLang', lang);
    }

    // Store original text for fallback
    translatableElements.forEach(el => {
        if (el.placeholder !== undefined) {
            el.setAttribute('data-original-text', el.placeholder);
        } else {
            el.setAttribute('data-original-text', el.innerHTML);
        }
    });

    langBsBtn.addEventListener('click', () => setLang('bs'));
    langEnBtn.addEventListener('click', () => setLang('en'));

    // Init
    const preferredLang = localStorage.getItem('preferredLang') || 'bs';
    setLang(preferredLang);
});
