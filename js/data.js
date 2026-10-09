/* ==========================================================================
   Site content — the same projects and studies as matias-lima.github.io,
   organised by the same thematic divisions (filters = sections, group = subsection).
   Order matters: the first item is 01, the second 02, and so on.

   Fields
     id        unique slug (also seeds the generated artwork)
     title     card title
     desc      one or two lines
     cat       filter key (see PROJECT_FILTERS / STUDY_FILTERS)
     group     subsection shown on the card (e.g. "Applications", "Web Scraping")
     org       institution (studies)
     tags      up to three short labels
     link      optional URL — external links open in a new tab
     image     optional image path; without one, `art` draws a visual
               (chart · candles · network · pipeline · waves · skyline · code · pages · rings · chat)
     year      optional — used by the Recent / Oldest sorting on the explorer pages
     featured  true → also shown in the home-page carousel
     tagline   optional short line for the carousel's "now showing" bar
   ========================================================================== */
window.SITE = {

  PROJECT_FILTERS: [
    { key: 'all', label: 'All' },
    { key: 'finance', label: 'Finance' },
    { key: 'data', label: 'Data Science & Analytics' },
    { key: 'ai', label: 'Artificial Intelligence' },
    { key: 'economics', label: 'Economics' },
    { key: 'ml', label: 'Machine Learning' },
    { key: 'nlp', label: 'NLP' },
    { key: 'cs', label: 'Computer Science' }
  ],

  STUDY_FILTERS: [
    { key: 'all', label: 'All' },
    { key: 'challenges', label: 'Challenges' },
    { key: 'courses', label: 'Courses' },
    { key: 'research', label: 'Research & Extension' },
    { key: 'university', label: 'University' }
  ],

  PROJECTS: [
    /* ---------- Finance ---------- */
    {
      id: 'inovatec', title: 'Inovatec — Eu Posso', cat: 'finance', group: 'Applications',
      desc: 'Project developed for the Inovatec program: "Eu Posso".',
      tags: ['Inovatec', 'Application'],
      image: 'assets/photos/web-apps.jpg'
    },
    {
      id: 'datathon', title: 'Datathon 2023', cat: 'finance', group: 'Applications', year: 2023, featured: true, tagline: 'Champion project · FGV',
      desc: 'Project for FGV\'s Datathon 2023 — predictability of the cryptocurrency risk premium with technical indicators across market-sentiment levels.',
      tags: ['Python', 'NLP', 'Finance'],
      image: 'assets/photos/datathon.jpg',
      link: 'https://github.com/Matias-Lima/Datathon_2023'
    },
    {
      id: 'volatilidade', title: 'Volatilidade', cat: 'finance', group: 'Applications', year: 2023, featured: true, tagline: 'S&P 500 volatility explorer',
      desc: 'Graphical interface for the volatility of S&P 500 stocks.',
      tags: ['Python', 'Streamlit', 'Finance'],
      image: 'assets/thumbs/projects-finance-volatilidade.jpg',
      link: 'https://volatilidade-bergmann.streamlit.app'
    },
    {
      id: 'kinea', title: 'Desafio Kinea', cat: 'finance', group: 'Applications', year: 2024,
      desc: 'Case competition — details available only to the people involved; the presentation is public.',
      tags: ['Case', 'Finance', 'Presentation'],
      image: 'assets/photos/kinea.jpg',
      link: 'https://www.canva.com/design/DAF-ktDqV7s/I731QdFM1kwnwSEFR0ss1A/view?utm_content=DAF-ktDqV7s&utm_campaign=designshare&utm_medium=link&utm_source=editor'
    },
    {
      id: 'fractal', title: 'Fractal Analysis', cat: 'finance', group: 'Applications', year: 2024, featured: true, tagline: 'Multifractal time series',
      desc: 'Streamlit app for time-series analysis with Multifractal Detrended Fluctuation Analysis (MFDFA) and rescaled range (R/S): multifractal dynamics and the long-term behaviour of prices.',
      tags: ['Python', 'Time Series', 'Streamlit'],
      image: 'assets/thumbs/projects-fractalidade.jpg',
      link: 'https://factalidade.streamlit.app/',
      links: [
        { label: 'Live site', url: 'https://factalidade.streamlit.app/' },
        { label: 'Presentation', url: 'https://www.canva.com/design/DAGRkvpkHzI/46HkBGZLYf21ABkEzB9UsQ/view?utm_content=DAGRkvpkHzI&utm_campaign=designshare&utm_medium=link&utm_source=editor' }
      ]
    },
    {
      id: 'dashboard-pinheiros', title: 'Dashboard Financeiro', cat: 'finance', group: 'Data Visualization', year: 2023, featured: true, tagline: 'Financial transparency dashboard',
      desc: 'Tool to support financial transparency at the Adventist church in Pinheiros.',
      tags: ['Streamlit', 'Data Viz', 'Python'],
      image: 'assets/thumbs/projects-visualization-dashboard-pinheiros.jpg',
      link: 'https://dashboard-adventista-pinheiros.streamlit.app/'
    },
    {
      id: 'technical-indicators', title: 'Technical Indicators', cat: 'finance', group: 'Quantitative Finance · Algorithmic Trading', year: 2023, featured: true, tagline: 'Five classes of indicators',
      desc: 'Financial analysis: calculating the five classes of technical indicators — relative strength, momentum, trend, volume and mean reversion.',
      tags: ['Python', 'Pandas', 'Finance'],
      image: 'assets/thumbs/projects-finance-technical-indicators.jpg',
      link: 'https://github.com/Matias-Lima/Technical-Indicator'
    },
    {
      id: 'algo-trading', title: 'Algorithmic Trading', cat: 'finance', group: 'Quantitative Finance · Algorithmic Trading', year: 2024, featured: true, tagline: 'Quantitative strategies course app',
      desc: 'Implementation of quantitative trading strategies — published as a course website, with code and presentation.',
      tags: ['Python', 'Backtesting', 'Streamlit'],
      image: 'assets/thumbs/projects-curso-trading.jpg',
      link: 'https://algorithmic-trading-strategies-course.streamlit.app/',
      links: [
        { label: 'Website', url: 'https://algorithmic-trading-strategies-course.streamlit.app/' },
        { label: 'Code', url: 'https://github.com/Matias-Lima/Algorithmic-Trading-Strategies-Course' },
        { label: 'Presentation', url: 'https://www.canva.com/design/DAG0-PFrWKs/mppmH_gJi2b8sgHCvzdaEg/view?utm_content=DAG0-PFrWKs&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h998205db8f' }
      ]
    },
    {
      id: 'technical-indicators-pca', title: 'Technical Indicators with PCA', cat: 'finance', group: 'Quantitative Finance · Algorithmic Trading', year: 2023,
      desc: 'The five classes of technical indicators combined with principal component analysis.',
      tags: ['Python', 'PCA', 'Finance'],
      image: 'assets/thumbs/projects-finance-technical-indicators-pca.jpg',
      link: 'https://github.com/Matias-Lima/Technical-indicator-with-PCA'
    },

    /* ---------- Data Science & Data Analytics ---------- */
    {
      id: 'varejo', title: 'Varejo — YouTube Comments', cat: 'data', group: 'Data Analysis', year: 2023,
      desc: 'Analysis of YouTube comments as a retail sales indicator — smartphones, 2022.',
      tags: ['Python', 'NLP', 'Streamlit'],
      image: 'assets/thumbs/projects-data-s-a-datascience-varejo-comments-youtube-s-2022.jpg',
      link: 'https://varejo-comments-smartphones-2022.streamlit.app',
      links: [
        { label: 'Live site', url: 'https://varejo-comments-smartphones-2022.streamlit.app' },
        { label: 'Code', url: 'https://github.com/Matias-Lima/Varejo_Comments_Smartphones_2022' }
      ]
    },
    {
      id: 'extracao-pdf', title: 'Extração de PDF', cat: 'data', group: 'Data Analysis',
      desc: 'Extraction of information from PDF files and structuring of the data.',
      tags: ['Python', 'PDF', 'Data'],
      image: 'assets/thumbs/projects-extrair-dados.jpg'
    },
    {
      id: 'inadimplencia', title: 'Inadimplência — Topic Modeling', cat: 'data', group: 'Data Analysis', year: 2023, featured: true, tagline: 'Default rates in Brazil',
      desc: 'Analysis of information on default rates in Brazil using topic modeling.',
      tags: ['NLP', 'Topic Modeling', 'Economics'],
      image: 'assets/photos/topic-modeling.jpg',
      link: 'Paginas_projects/topic_modeling_inadimplencia.html',
      links: [
        { label: 'Page', url: 'Paginas_projects/topic_modeling_inadimplencia.html' },
        { label: 'Code', url: 'https://github.com/Matias-Lima/Topic-Modeling' }
      ]
    },
    {
      id: 'ws-youtube-api', title: 'Web Scraping YouTube API', cat: 'data', group: 'Web Scraping', year: 2023,
      desc: 'Runs YouTube searches by keyword and date, collecting information about the videos found.',
      tags: ['Python', 'YouTube API', 'Scraping'],
      image: 'assets/thumbs/projects-datascience-web-scraping-youtube-api.jpg',
      link: 'https://github.com/Matias-Lima/Web_Scraping_Youtube_API'
    },
    {
      id: 'ws-google-news', title: 'Web Scraping Google News', cat: 'data', group: 'Web Scraping', year: 2023,
      desc: 'Automation tool designed to extract information from Google News.',
      tags: ['Python', 'Scraping', 'News'],
      image: 'assets/thumbs/projects-google-news.jpg',
      link: 'https://github.com/Matias-Lima/Web-Scraping-of-News'
    },
    {
      id: 'ws-youtube', title: 'Web Scraping YouTube', cat: 'data', group: 'Web Scraping', year: 2023,
      desc: 'Automation tool to extract information from YouTube videos, channels and subtitles.',
      tags: ['Python', 'Scraping', 'YouTube'],
      image: 'assets/thumbs/projects-datascience-web-scraping-youtube.jpg',
      link: 'https://github.com/Matias-Lima/Web_Scraping_Youtube'
    },

    /* ---------- Artificial Intelligence — CS50's Introduction to AI with Python ---------- */
    {
      id: 'cs50-search', title: 'Search', cat: 'ai', group: 'CS50 AI projects', year: 2023,
      desc: 'Search problems: an agent given an initial state and a goal state returns a solution for getting from one to the other.',
      tags: ['Python', 'AI', 'Harvard'],
      image: 'assets/thumbs/projects-cs50ai-search.jpg',
      link: 'https://github.com/Matias-Lima/CS50_AI_Projects'
    },
    {
      id: 'cs50-knowledge', title: 'Knowledge', cat: 'ai', group: 'CS50 AI projects', year: 2023,
      desc: 'Representing knowledge and drawing conclusions from it — the way humans reason from what they already know.',
      tags: ['Python', 'AI', 'Harvard'],
      image: 'assets/thumbs/projects-cs50ai-knowledge.jpg',
      link: 'https://github.com/Matias-Lima/CS50_AI_Projects'
    },
    {
      id: 'cs50-uncertainty', title: 'Uncertainty', cat: 'ai', group: 'CS50 AI projects', year: 2023,
      desc: 'Representing uncertainty as a set of events and the probability of each one happening.',
      tags: ['Python', 'AI', 'Harvard'],
      image: 'assets/thumbs/projects-cs50ai-uncertainty.jpg',
      link: 'https://github.com/Matias-Lima/CS50_AI_Projects'
    },
    {
      id: 'cs50-learning', title: 'Learning', cat: 'ai', group: 'CS50 AI projects', year: 2023,
      desc: 'Machine learning: giving the computer data rather than explicit instructions, so it learns to recognise patterns and perform tasks on its own.',
      tags: ['Python', 'AI', 'Harvard'],
      image: 'assets/thumbs/projects-cs50ai-learning.jpg',
      link: 'https://github.com/Matias-Lima/CS50_AI_Projects'
    },
    {
      id: 'cs50-neural-network', title: 'Neural Network', cat: 'ai', group: 'CS50 AI projects', year: 2023, featured: true, tagline: 'CS50 AI · Harvard',
      desc: 'Artificial neural networks: mathematical models for learning, inspired by biological networks, that map inputs to outputs.',
      tags: ['Python', 'AI', 'Harvard'],
      image: 'assets/thumbs/projects-cs50ai-neural-retwork.jpg',
      link: 'https://github.com/Matias-Lima/CS50_AI_Projects'
    },
    {
      id: 'cs50-language', title: 'Language', cat: 'ai', group: 'CS50 AI projects', year: 2023,
      desc: 'Natural language processing: automatic summarisation, speech recognition, text classification and machine translation.',
      tags: ['Python', 'AI', 'Harvard'],
      image: 'assets/thumbs/projects-cs50ai-language.jpg',
      link: 'https://github.com/Matias-Lima/CS50_AI_Projects'
    },
    {
      id: 'cs50-optimization', title: 'Optimization', cat: 'ai', group: 'CS50 AI projects', year: 2023,
      desc: 'Choosing the best option from a set of possible options.',
      tags: ['Python', 'AI', 'Harvard'],
      image: 'assets/thumbs/projects-cs50ai-optimization.jpg',
      link: 'https://github.com/Matias-Lima/CS50_AI_Projects'
    },

    /* ---------- Economics ---------- */
    {
      id: 'monitoria', title: 'Econometrics II — Monitoria', cat: 'economics', group: 'Econometrics', year: 2024,
      desc: 'Teaching-assistant materials and exercises for Econometrics II.',
      tags: ['Econometrics', 'Teaching', 'R'],
      image: 'assets/thumbs/studies-university-monitoria.jpg',
      link: 'https://github.com/Matias-Lima/Econometria-II'
    },

    /* ---------- Machine Learning ---------- */
    {
      id: 'credit-score', title: 'Credit Score with XGBoost', cat: 'ml', group: 'Machine Learning', year: 2024, featured: true, tagline: 'Gradient boosting',
      desc: 'Credit-scoring model built with gradient boosting.',
      tags: ['Python', 'XGBoost', 'ML'],
      image: 'assets/thumbs/projects-credit-score.jpg',
      link: 'https://github.com/Matias-Lima/credit_score'
    },

    /* ---------- Natural Language Processing ---------- */
    {
      id: 'finbert', title: 'FinBERT', cat: 'nlp', group: 'Sentiment', year: 2024, featured: true, tagline: 'Financial sentiment analysis',
      desc: 'A BERT variant trained on the language of financial texts, applied to sentiment analysis.',
      tags: ['NLP', 'Transformers', 'Finance'],
      image: 'assets/photos/finbert.jpg',
      link: 'https://github.com/Matias-Lima/FinBERT'
    },
    {
      id: 'rag', title: 'RAG', cat: 'nlp', group: 'Sentiment', year: 2024, featured: true, tagline: 'Document question answering',
      desc: 'Extracts text from PDF files and uses retrieval-augmented generation to answer questions grounded in the documents.',
      tags: ['LLMs', 'RAG', 'Python'],
      image: 'assets/photos/rag.jpg',
      link: 'https://github.com/Matias-Lima/RAG_app'
    },
    {
      id: 'topic-modeling', title: 'Topic Modeling', cat: 'nlp', group: 'Visualization', year: 2023,
      desc: 'Inferring the themes that run through a large, unstructured text corpus from patterns of word frequency and co-occurrence.',
      tags: ['NLP', 'Topic Modeling', 'Visualization'],
      image: 'assets/thumbs/projects-npl-visualisation-topic-modeling.jpg',
      link: 'https://github.com/Matias-Lima/Topic-Modeling'
    },

    /* ---------- Computer Science ---------- */
    {
      id: 'hospsystem', title: 'HospSystem', cat: 'cs', group: 'HTML, CSS and PHP', year: 2020, featured: true, tagline: 'Hospital management system',
      desc: 'Hospital management system created to store and manage patient information.',
      tags: ['PHP', 'MySQL', 'HTML/CSS'],
      image: 'assets/thumbs/projects-computer-science-hosp-system.jpg',
      link: 'https://github.com/Matias-Lima/HospSystem'
    },
    {
      id: 'exercicios-php', title: 'Exercícios em PHP', cat: 'cs', group: 'HTML, CSS and PHP', year: 2020,
      desc: 'Series of exercises from the IT technical course.',
      tags: ['PHP', 'Exercises'],
      image: 'assets/thumbs/projects-computer-science-php.jpg',
      link: 'https://github.com/Matias-Lima/Exercicios-em-PHP'
    }
  ],

  STUDIES: [
    /* ---------- Challenges ---------- */
    {
      id: 'datathon-2023', title: 'Campeão Datathon 2023', org: 'FGV EESP', cat: 'challenges', group: 'Challenges', year: 2023, featured: true,
      desc: 'Competition held by FGV. Project: predictability of the cryptocurrency risk premium with technical indicators — an approach across market-sentiment levels.',
      tags: ['Crypto', 'NLP', '1st place'],
      image: 'assets/thumbs/studies-challenges-datathon.jpg', fit: 'contain',
      link: 'https://www.canva.com/design/DAGBFd_uHs0/PB88zPjyrMo2ZpvNek5l-A/view?utm_content=DAGBFd_uHs0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hd57df195e9',
      links: [
        { label: 'Presentation', url: 'https://www.canva.com/design/DAGBFd_uHs0/PB88zPjyrMo2ZpvNek5l-A/view?utm_content=DAGBFd_uHs0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hd57df195e9' },
        { label: 'UOL coverage', url: 'https://portaldobitcoin.uol.com.br/fgv-revela-vencedores-do-datathon-de-moedas-digitais-conheca-os-projetos/' },
        { label: 'Event info', url: 'https://eesp.fgv.br/evento/4o-desafio-de-dados-datathon-de-moedas-digitais-fgv-eesp' }
      ]
    },
    {
      id: 'kinea-infra', title: 'Infraestrutura — Desafio Kinea', org: 'Kinea Investimentos', cat: 'challenges', group: 'Challenges', year: 2024,
      desc: 'Case-competition presentation on infrastructure.',
      tags: ['Case', 'Finance'],
      image: 'assets/thumbs/projects-finance-kinea.jpg', fit: 'contain',
      link: 'https://www.canva.com/design/DAF-ktDqV7s/I731QdFM1kwnwSEFR0ss1A/view?utm_content=DAF-ktDqV7s&utm_campaign=designshare&utm_medium=link&utm_source=editor'
    },
    {
      id: 'march-mania', title: 'March Machine Learning Mania 2024', org: 'Kaggle', cat: 'challenges', group: 'Challenges', year: 2024, featured: true,
      desc: 'Competition gold medalist.',
      tags: ['Kaggle', 'Forecasting', 'Gold Medal'],
      image: 'assets/thumbs/certificados-matias-ant-nio-march-machine-learning-mania-2024.jpg', fit: 'contain',
      link: 'assets/thumbs/certificados-matias-ant-nio-march-machine-learning-mania-2024.jpg',
      links: [{ label: 'Certificate', url: 'assets/thumbs/certificados-matias-ant-nio-march-machine-learning-mania-2024.jpg' }]
    },
    {
      id: 'quantamental', title: 'Quantamental 2024', cat: 'challenges', group: 'Challenges', year: 2024, featured: true,
      desc: 'Highlight — best individual strategy; 6th place overall.',
      tags: ['Quant', 'Strategy', 'Award'],
      image: 'assets/thumbs/studies-challenge-quantamental.jpg', fit: 'contain',
      link: 'https://www.canva.com/design/DAGTalBIIpw/PXBu66lWRCpnU8ts9SVrvQ/view?utm_content=DAGTalBIIpw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h2f73c92264',
      links: [
        { label: 'Presentation', url: 'https://www.canva.com/design/DAGTalBIIpw/PXBu66lWRCpnU8ts9SVrvQ/view?utm_content=DAGTalBIIpw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h2f73c92264' },
        { label: 'Strategy update', url: 'https://www.canva.com/design/DAG1k_MgJMQ/5Bzt-NvCCvFWeOmrizplDg/view?utm_content=DAG1k_MgJMQ&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hd21899a737' }
      ]
    },
    {
      id: 'monografia', title: 'Best Monographs — Economics', org: 'FEA-USP', cat: 'challenges', group: 'Competições', year: 2026, featured: true,
      desc: 'Among the best undergraduate monographs in Economics at FEA-USP.',
      tags: ['Economics', 'Research', 'Award'],
      image: 'assets/studies/premio-monografia.jpg',
      link: 'assets/pdf/Monografia.pdf',
      links: [
        { label: 'Monograph (PDF)', url: 'assets/pdf/Monografia.pdf' },
        { label: 'News article', url: 'https://tendencias.com.br/tendencias-patrocina-edicao-de-2026-do-premio-de-melhor-monografia-da-fea-usp/' }
      ]
    },
    {
      id: 'omif', title: 'OMIF 2020 — Medalist', org: 'Olimpíada de Matemática dos Institutos Federais', cat: 'challenges', group: 'Competições', year: 2020,
      desc: 'Medalist in the III Mathematics Olympiad of the Federal Institutes — the highest grade on campus.',
      tags: ['Mathematics', 'Olympiad'],
      image: 'assets/thumbs/studies-ifpe-prata.jpg', fit: 'contain'
    },
    {
      id: 'best-final-project', title: 'Best final project — IT technical course', org: 'IFPE', cat: 'challenges', group: 'Competições', year: 2020,
      desc: 'HospSystem: best final project of the computer technician course (group: Matias, Estevão, Cleyton and Rodrigo).',
      tags: ['PHP', 'Award'],
      image: 'assets/thumbs/projects-computer-science-hosp-system.jpg', fit: 'contain'
    },
    {
      id: 'math-awards', title: 'Mathematics awards — IFPE', org: 'IFPE · Belo Jardim', cat: 'challenges', group: 'Competições',
      desc: 'Awarded three times among the best in the Mathematics class.',
      tags: ['Mathematics', 'Award'],
      image: 'assets/thumbs/studies-ifpe.jpg', fit: 'contain'
    },
    {
      id: 'geobrasil', title: 'GeoBrasil Olympiad — Regional Silver', org: 'Pernambuco', cat: 'challenges', group: 'Competições',
      desc: 'Silver medal in the Pernambuco regional stage of the GeoBrasil Olympiad.',
      tags: ['Geography', 'Olympiad'],
      image: 'assets/thumbs/studies-challenges-ogb.jpg', fit: 'contain'
    },

    /* ---------- Courses · Finance ---------- */
    {
      id: 'duke-behavioral', title: 'Behavioral Finance', org: 'Duke University · Coursera', cat: 'courses', group: 'Finance', year: 2024, featured: true,
      desc: 'The many daily decisions shaped by heuristics — mental shortcuts that help us navigate life but lead to predictable errors in financial decision-making.',
      tags: ['Finance', 'Certificate'],
      image: 'assets/photos/behavioral.jpg',
      link: 'https://coursera.org/share/808c8b8c424e6e6955e22a34ce4f947e'
    },
    {
      id: 'bocconi-pe', title: 'Private Equity and Venture Capital', org: 'Università Bocconi · Coursera', cat: 'courses', group: 'Finance', year: 2024,
      desc: 'How private-equity investors finance companies across their life-cycle — from start-up and early stage to expansion, maturity, crisis and decline.',
      tags: ['Finance', 'Certificate'],
      image: 'assets/photos/pe-vc.jpg',
      link: 'https://coursera.org/verify/R98NBTMFFBPW'
    },
    {
      id: 'fia-fundos', title: 'Fundos de Investimento', org: 'FIA · Coursera', cat: 'courses', group: 'Finance', year: 2024,
      desc: 'Investment funds: classification, characteristics and the information needed to guide investors in this industry.',
      tags: ['Finance', 'Certificate'],
      image: 'assets/photos/fundos.jpg',
      link: 'https://coursera.org/share/63c6da1fa12f728a28531aafb288226a'
    },
    /* ---------- Courses · Technologies ---------- */
    {
      id: 'cs50ai', title: 'CS50\'s Introduction to Artificial Intelligence with Python', org: 'Harvard University', cat: 'courses', group: 'Technologies', year: 2023, featured: true,
      desc: 'The concepts and algorithms at the foundation of modern AI — the ideas behind game-playing engines, handwriting recognition and machine translation.',
      tags: ['AI', 'Python', 'Certificate'],
      image: 'assets/photos/cs50ai-s.jpg',
      link: 'https://drive.google.com/file/d/1qL21HFQTkow648mkY0rI7tWRqfuurDqX/view?usp=sharing',
      links: [
        { label: 'Certificate', url: 'https://drive.google.com/file/d/1qL21HFQTkow648mkY0rI7tWRqfuurDqX/view?usp=sharing' },
        { label: 'Code', url: 'https://github.com/Matias-Lima/CS50_AI_Projects' }
      ]
    },
    {
      id: 'cs50-business', title: 'CS50\'s Computer Science for Business Professionals', org: 'Harvard University', cat: 'courses', group: 'Technologies', year: 2023,
      desc: 'CS50\'s introduction to computer science for managers, product managers, founders and decision-makers.',
      tags: ['CS', 'Certificate'],
      image: 'assets/photos/cs50b.jpg',
      link: 'https://drive.google.com/file/d/1q7dR_2chMMRtnTRY1faj2_qjN8dWB634/view?usp=drive_link'
    },
    {
      id: 'applied-ml', title: 'Applied Machine Learning in Python', org: 'University of Michigan · Coursera', cat: 'courses', group: 'Technologies', year: 2024, featured: true,
      desc: 'Applied machine learning with scikit-learn: clustering, supervised learning, feature engineering and ensemble methods, with hands-on Python practice.',
      tags: ['scikit-learn', 'ML', 'Certificate'],
      image: 'assets/photos/applied-ml.jpg',
      link: 'https://coursera.org/share/77a93f36c542773d9819518ebf15a7ac'
    },

    /* ---------- Courses · Asimov Academy — Trilha Aplicações IA com Python ---------- */
    {
      id: 'asimov-langchain', title: 'Aplicações de IA com LangChain', org: 'Asimov Academy', cat: 'courses', group: 'Trilha Aplicações IA com Python', year: 2024,
      desc: 'The LangChain framework for building powerful AI applications.',
      tags: ['LangChain', 'LLMs'],
      image: 'assets/asimov_academy/ai/Aplicacoes-de-IA-com-LangChain.webp'
    },
    {
      id: 'asimov-agents', title: 'Agents de IA com Python e LangChain', org: 'Asimov Academy', cat: 'courses', group: 'Trilha Aplicações IA com Python', year: 2024, featured: true,
      desc: 'Building conversational agents and decision-making systems, integrating language models with custom workflows.',
      tags: ['Agents', 'LangChain'],
      image: 'assets/asimov_academy/ai/CursoAgents-com-langchain.webp'
    },
    {
      id: 'asimov-huggingface', title: 'AIs para imagens e vídeo com Hugging Face', org: 'Asimov Academy', cat: 'courses', group: 'Trilha Aplicações IA com Python', year: 2024,
      desc: 'Applying pre-trained models to image classification, object detection and video analysis.',
      tags: ['Hugging Face', 'Vision'],
      image: 'assets/asimov_academy/ai/CursoAudioVideoComHuggingFace.webp'
    },
    {
      id: 'asimov-chatpdf', title: 'ChatPDF — analisando PDFs com IA e LangChain', org: 'Asimov Academy', cat: 'courses', group: 'Trilha Aplicações IA com Python', year: 2024,
      desc: 'Interactive web app to analyse PDFs with LangChain and Streamlit.',
      tags: ['LangChain', 'Streamlit'],
      image: 'assets/asimov_academy/ai/ChatPDF.webp'
    },
    {
      id: 'asimov-data-agent', title: 'Agent para analisar dados com LangChain e OpenAI', org: 'Asimov Academy', cat: 'courses', group: 'Trilha Aplicações IA com Python', year: 2024,
      desc: 'Integrating language models with data-analysis tools to interpret and generate insights from complex datasets.',
      tags: ['Agents', 'OpenAI'],
      image: 'assets/asimov_academy/ai/ConstruindoAgentParaAnalisarDadosComLangChainOpenAI.webp'
    },

    /* ---------- Courses · Asimov Academy — Trilha Trading Quantitativo ---------- */
    {
      id: 'asimov-quant', title: 'Fundamentos de Trading Quantitativo', org: 'Asimov Academy', cat: 'courses', group: 'Trilha Trading Quantitativo', year: 2024, featured: true,
      desc: 'Quantitative analysis with Python and pandas in financial markets — creating and controlling your own investment strategies.',
      tags: ['Quant', 'Python'],
      image: 'assets/asimov_academy/trading/CursoTradingQuant.webp'
    },
    {
      id: 'asimov-backtesting', title: 'Backtesting — avaliando estratégias com dados históricos', org: 'Asimov Academy', cat: 'courses', group: 'Trilha Trading Quantitativo', year: 2024,
      desc: 'Simulating strategies on historical data and evaluating them with metrics such as drawdown and the Sharpe ratio.',
      tags: ['Backtesting', 'Python'],
      image: 'assets/asimov_academy/trading/CursoBacktesting.webp'
    },
    {
      id: 'asimov-algotrading', title: 'Algotrading', org: 'Asimov Academy', cat: 'courses', group: 'Trilha Trading Quantitativo', year: 2024,
      desc: 'Automating strategies in Python with MetaTrader 5.',
      tags: ['Algo Trading', 'MetaTrader 5'],
      image: 'assets/asimov_academy/trading/Algotrading.webp'
    },

    /* ---------- Courses · Asimov Academy — Trilha Python Office ---------- */
    {
      id: 'asimov-pyautogui', title: 'Automatizando tudo no seu computador com PyAutoGUI', org: 'Asimov Academy', cat: 'courses', group: 'Trilha Python Office', year: 2024,
      desc: 'Controlling mouse and keyboard programmatically to automate tasks that would normally need manual interaction.',
      tags: ['Automation', 'Python'],
      image: 'assets/asimov_academy/office/CursoPyAutoGUI.webp'
    },
    {
      id: 'asimov-excel', title: 'Automatizando Excel', org: 'Asimov Academy', cat: 'courses', group: 'Trilha Python Office', year: 2024,
      desc: 'Editing spreadsheets with Python using pandas and openpyxl.',
      tags: ['Excel', 'pandas'],
      image: 'assets/asimov_academy/office/CursoAutomatizandoExcel.webp'
    },
    {
      id: 'asimov-webscraping', title: 'Web Scraping — extraindo dados da web', org: 'Asimov Academy', cat: 'courses', group: 'Trilha Python Office', year: 2024,
      desc: 'Navigating and collecting information from websites, handling and storing the data in a structured way.',
      tags: ['Scraping', 'Python'],
      image: 'assets/asimov_academy/office/CursoWebScraping.webp'
    },
    {
      id: 'asimov-exec', title: 'Execução automatizada de programas', org: 'Asimov Academy', cat: 'courses', group: 'Trilha Python Office', year: 2024,
      desc: 'Setting up scheduled, automated tasks.',
      tags: ['Automation'],
      image: 'assets/asimov_academy/office/CursoExecAutomatixadaProgramas.webp'
    },
    {
      id: 'asimov-python-excel', title: 'Python para usuários de Excel', org: 'Asimov Academy', cat: 'courses', group: 'Trilha Python Office', year: 2024,
      desc: 'Importing, manipulating and exporting spreadsheet data; automating repetitive tasks and generating dynamic reports.',
      tags: ['Excel', 'Python'],
      image: 'assets/asimov_academy/office/CursoPythonExcel.webp'
    },
    {
      id: 'asimov-whatsapp-bot', title: 'Bot WhatsApp — automatizando WhatsApp com Selenium', org: 'Asimov Academy', cat: 'courses', group: 'Trilha Python Office', year: 2024,
      desc: 'Setting up the environment, navigating WhatsApp Web and automating sending and replying to messages.',
      tags: ['Selenium', 'Automation'],
      image: 'assets/asimov_academy/office/BotWhatsApp.webp'
    },

    /* ---------- Courses · Asimov Academy — Trilha Data Science & Machine Learning ---------- */
    {
      id: 'asimov-unsupervised', title: 'Modelos Não Supervisionados', org: 'Asimov Academy', cat: 'courses', group: 'Trilha Data Science & Machine Learning', year: 2024,
      desc: 'Finding hidden patterns and structures in unlabelled datasets.',
      tags: ['ML', 'Clustering'],
      image: 'assets/asimov_academy/machine_learning/CursoModelosNaoSupervisionados.webp'
    },
    {
      id: 'asimov-trees', title: 'Árvores de Decisão e Ensemble Learning', org: 'Asimov Academy', cat: 'courses', group: 'Trilha Data Science & Machine Learning', year: 2024,
      desc: 'Building and interpreting decision trees, and methods for combining multiple models.',
      tags: ['ML', 'Ensembles'],
      image: 'assets/asimov_academy/machine_learning/ModelosArvore.webp'
    },

    /* ---------- Courses · Miscelânea ---------- */
    {
      id: 'empreendedorismo', title: 'Empreendedorismo e Inovação', org: 'Instituto Conceição Moura · Fab Lab', cat: 'courses', group: 'Miscelânea',
      desc: 'Program qualifying students in technology, design and business.',
      tags: ['Innovation', 'Design'],
      image: 'assets/thumbs/studies-empreendorismo-inovacao.jpg', fit: 'contain'
    },
    {
      id: 'stanford-math', title: 'Introduction to Mathematical Thinking', org: 'Stanford University · Coursera', cat: 'courses', group: 'Miscelânea', year: 2023,
      desc: 'Learning to think the way mathematicians do — thinking outside the box, a powerful cognitive process developed over thousands of years.',
      tags: ['Mathematics', 'Certificate'],
      image: 'assets/photos/math-thinking.jpg',
      link: 'https://drive.google.com/file/d/1uoJXdBhN09oMvIzaQ4QYo9pKnYnqWexg/view?usp=drive_link'
    },

    /* ---------- Research & Extension · Research ---------- */
    {
      id: 'multifractal', title: 'Asymmetric Multifractal Analysis of Cryptocurrencies', org: 'Undergraduate research', cat: 'research', group: 'Research', year: 2025, featured: true,
      desc: 'Investigating the efficiency and asymmetric multifractal characteristics of cryptocurrencies with Asymmetric Multifractal Cross-Correlation Analysis (MF-ADCCA) — in development.',
      tags: ['Research', 'Time Series', 'Crypto'],
      image: 'assets/photos/multifractal.jpg'
    },
    {
      id: 'news-crypto', title: 'Market News for Diversification in Cryptocurrency Investments', org: 'Undergraduate research', cat: 'research', group: 'Research', year: 2024, featured: true,
      desc: 'How timely, relevant market news can improve decision-making and the diversification of portfolios with crypto assets.',
      tags: ['Research', 'NLP', 'Portfolio'],
      image: 'assets/photos/news-crypto.jpg',
      link: 'assets/studies/ic.pdf',
      links: [
        { label: 'Presentation', url: 'https://www.canva.com/design/DAGA4wUimEE/A6OAHy-e6-bFUyyrKiKRKw/view?utm_content=DAGA4wUimEE&utm_campaign=designshare&utm_medium=link&utm_source=editor' },
        { label: 'Report (PDF)', url: 'assets/studies/ic.pdf' }
      ]
    },
    {
      id: 'ubri', title: 'Market sentiment and the predictability of the cryptocurrency risk premium', org: 'USP Blockchain Research Initiative · UBRI · Ripple', cat: 'research', group: 'Research', year: 2024, featured: true,
      desc: 'Artificial neural networks and NLP applied to predicting cryptocurrency prices, addressing the complex, non-linear nature of their time series — accepted paper.',
      tags: ['Research', 'Crypto', 'Paper'],
      image: 'assets/photos/ubri.jpg',
      link: 'assets/studies/artigo_aceite.png',
      links: [{ label: 'Conference acceptance', url: 'assets/studies/artigo_aceite.png' }]
    },
    {
      id: 'news-stocks', title: 'Market News for Stock Diversification', org: 'Research project', cat: 'research', group: 'Research',
      desc: 'A computational framework, built on natural-language algorithms, to read and evaluate short-impact news (analysts, investors and market experts on Twitter) and long-impact reports (banks and brokers), seeking efficiency gains (return vs. risk) in stock diversification.',
      tags: ['Research', 'NLP', 'Stocks'],
      image: 'assets/photos/ima-b.jpg'
    },

    /* ---------- Research & Extension · High School ---------- */
    {
      id: 'ifpe-tecnico', title: 'Curso Técnico em Informática para Internet', org: 'IFPE', cat: 'research', group: 'High School', year: 2020,
      desc: 'Three-year technical course taken alongside high school at a Federal Institute.',
      tags: ['IFPE', 'Programming'],
      image: 'assets/photos/ifpe.jpg',
      link: 'assets/studies/Historico.png',
      links: [{ label: 'Transcript', url: 'assets/studies/Historico.png' }]
    },

    /* ---------- Research & Extension · Extension and Teaching ---------- */
    {
      id: 'robots-course', title: 'Investment Robots — FEA postgraduate course', org: 'FEA-USP', cat: 'research', group: 'Extension & Teaching', year: 2025, featured: true,
      desc: 'Support in developing a 60-hour postgraduate course on building investment robots for the Brazilian market, planned for 2025 or 2026 — a way to promote financial education in Brazil.',
      tags: ['Algo Trading', 'Teaching'],
      image: 'assets/photos/robots-course.jpg',
      link: 'https://algorithmic-trading-strategies-course.streamlit.app/',
      links: [{ label: 'Website', url: 'https://algorithmic-trading-strategies-course.streamlit.app/' }]
    },
    {
      id: 'vr-literacy', title: 'Realidade virtual como facilitadora para o letramento literário', cat: 'research', group: 'Extension & Teaching',
      desc: 'Raising students\' interest in reading by pairing literature with virtual-reality technology.',
      tags: ['Education', 'VR'],
      image: 'assets/photos/vr-literacy.jpg'
    },
    {
      id: 'pesc', title: 'PESC — Programa de Extensão de Serviços à Comunidade', org: 'FEA-USP', cat: 'research', group: 'Extension & Teaching', year: 2023,
      desc: 'FEA-USP volunteering program with third-sector institutions and other organisations running social-impact projects.',
      tags: ['Volunteering', 'Impact'],
      image: 'assets/thumbs/studies-studies-pesc.jpg',
      link: 'https://github.com/Matias-Lima/PESC-project',
      links: [{ label: 'Material', url: 'https://github.com/Matias-Lima/PESC-project' }]
    },

    /* ---------- University · Econometria II ---------- */
    {
      id: 'econometria-monitoria', title: 'Monitoria — Econometria II', org: 'FEA-USP', cat: 'university', group: 'Econometria II', year: 2024,
      desc: 'Teaching assistant for Econometrics II — materials and exercises on GitHub.',
      tags: ['Econometrics', 'Teaching'],
      image: 'assets/thumbs/studies-university-monitoria.jpg',
      link: 'https://github.com/Matias-Lima/Econometria-II'
    },
    {
      id: 'dados-painel', title: 'Dados em Painel', org: 'FEA-USP', cat: 'university', group: 'Econometria II', year: 2023,
      desc: 'Presentation on panel-data methods.',
      tags: ['Econometrics', 'Presentation'],
      image: 'assets/photos/panel.jpg',
      link: 'https://www.canva.com/design/DAFzgbmWj1k/Vmmu5_DO02FupvNkSN0_ag/view?utm_content=DAFzgbmWj1k&utm_campaign=designshare&utm_medium=link&utm_source=editor'
    },

    /* ---------- University · Economia Regional e Urbana e Avaliação de Políticas ---------- */
    {
      id: 'dados-espaciais', title: 'Análise Exploratória de Dados Espaciais', org: 'FEA-USP', cat: 'university', group: 'Economia Regional e Urbana', year: 2024,
      desc: 'Presentation for Regional and Urban Economics and Policy Evaluation.',
      tags: ['Spatial', 'Presentation'],
      image: 'assets/thumbs/studies-regional.jpg',
      link: 'https://www.canva.com/design/DAGAnF-3CCw/gBZC_Lpze7Z9plCXG2-_ww/view?utm_content=DAGAnF-3CCw&utm_campaign=designshare&utm_medium=link&utm_source=editor'
    },
    {
      id: 'extracao-sp', title: 'Extração Hipotética: São Paulo', org: 'FEA-USP', cat: 'university', group: 'Economia Regional e Urbana', year: 2024,
      desc: 'Presentation for Regional and Urban Economics and Policy Evaluation.',
      tags: ['Regional', 'Presentation'],
      image: 'assets/photos/regional.jpg',
      link: 'https://www.canva.com/design/DAGFnfCWV5I/szjPkGN6eo-vIn_vWlfZfg/view?utm_content=DAGFnfCWV5I&utm_campaign=designshare&utm_medium=link&utm_source=editor'
    },
    {
      id: 'metro-lilas', title: 'Efeito do Metrô-Linha Lilás sobre salário', org: 'FEA-USP', cat: 'university', group: 'Economia Regional e Urbana', year: 2024, featured: true,
      desc: 'A difference-in-differences approach — presentation for Regional and Urban Economics and Policy Evaluation.',
      tags: ['Policy', 'Diff-in-diff', 'Presentation'],
      image: 'assets/thumbs/studies-metro.jpg',
      link: 'https://www.canva.com/design/DAGIaiMWMQ4/QAG1BqRF-w9r-kirjMGuIw/view?utm_content=DAGIaiMWMQ4&utm_campaign=designshare&utm_medium=link&utm_source=editor'
    }
  ]
};
