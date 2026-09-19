export const projects = [
  {
    id: 'i-heart',
    number: '01',
    name: 'I-HEART',
    subtitle: 'AI-Based Health Risk Prediction System',
    focus: ['Machine Learning', 'FastAPI', 'Python', 'Data Science'],
    tagline: 'Predictive health risk assessment engine translating clinical biometric indicators into actionable cardiovascular and metabolic risk scores.',
    overview: 'I-HEART is an intelligent diagnostics support platform engineered to calculate cardiovascular and metabolic risk probabilities using trained machine learning models. Built to bridge patient data with automated risk classification, the system minimizes diagnosis turnaround time while maintaining explainability through feature importance scoring.',
    role: 'Lead ML & Backend Developer — Model architecture, data preprocessing pipeline, API contract design and deployment.',
    technologies: ['Python', 'Scikit-learn', 'FastAPI', 'Pandas', 'NumPy', 'Docker', 'REST API'],
    highlights: [
      'Engineered supervised classification pipelines with automated data preprocessing and outlier handling.',
      'Developed low-latency FastAPI endpoints enabling sub-50ms inference times on tabular patient metrics.',
      'Implemented explainability layers highlighting top risk factors (blood pressure, lipid profiles, BMI).',
      'Configured validation checks ensuring HIPAA-compliant input isolation and data validation schemas.'
    ],
    architecture: 'Input Biometrics → Data Cleaning & Feature Scaling → Ensemble Classifier → Confidence Scoring & Explainability Layer → FastAPI JSON Response',
    links: {
      github: 'https://github.com/sahilsk888',
      live: null
    }
  },
  {
    id: 'fixit',
    number: '02',
    name: 'FIXIT',
    subtitle: 'Smart Campus Issue Management & Predictive Maintenance Platform',
    focus: ['Full-Stack Development', 'Backend', 'Data', 'Campus Management'],
    tagline: 'Centralized incident routing platform with automated dispatch algorithms and predictive equipment breakdown notifications for campus infrastructure.',
    overview: 'FIXIT tackles university campus maintenance fragmentation by integrating real-time student ticketing with automated technician dispatching and predictive maintenance alerts. Instead of reactive repairs, FIXIT aggregates historical issue velocity across campus zones to forecast asset degradation.',
    role: 'Full-Stack Software Engineer — End-to-end architecture, relational schema design, ticketing life-cycle workflows, and administrative dashboards.',
    technologies: ['React', 'Node.js', 'Express.js', 'PostgreSQL', 'REST APIs', 'Tailored CSS', 'Vercel'],
    highlights: [
      'Designed a multi-role RBAC system separating students, maintenance engineers, and campus administrators.',
      'Engineered real-time issue dispatch algorithms prioritizing urgent safety and electrical tickets.',
      'Built interactive incident location mapping and photographic verification audit trails.',
      'Implemented proactive frequency-based alert pipelines notifying teams prior to catastrophic equipment failure.'
    ],
    architecture: 'Client UI (Responsive Web) → REST Gateway (JWT Auth) → Issue Routing & Priority Queue → PostgreSQL (Relational State) → Notification Webhooks',
    links: {
      github: 'https://github.com/sahilsk888',
      live: null
    }
  },
  {
    id: 'mindmap-ai',
    number: '03',
    name: 'MINDMAP AI',
    subtitle: 'Student Burnout Analytics & Predictive Risk Assessment',
    focus: ['Data Science', 'Machine Learning', 'Analytics'],
    tagline: 'Psychometric sentiment modeling and academic workload correlation engine designed to identify early-stage cognitive burnout indicators in university students.',
    overview: 'MINDMAP AI analyzes multidisciplinary academic markers, self-reported stress indicators, and behavioral submission patterns to construct a multi-dimensional burnout vulnerability index. It empowers educational counselors and students with preventative insights before academic exhaustion occurs.',
    role: 'Data Scientist & ML Engineer — Exploratory data analysis, psychometric feature extraction, correlation matrix modeling, and visual dashboard design.',
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'NLP', 'Flask'],
    highlights: [
      'Conducted exhaustive EDA across academic deadlines, sleep deficit indices, and student workload ratios.',
      'Engineered an ensemble risk-scoring model synthesizing sentiment polarity and assignment submission trajectories.',
      'Developed dynamic visual correlation heatmaps helping advisors detect systemic departmental stress spikes.',
      'Formulated early-intervention alert triggers respecting student anonymity and ethical data boundaries.'
    ],
    architecture: 'Survey & Log Ingestion → NLP Sentiment Tokenization → Workload Feature Engineering → Random Forest Classifier → Visualization Dashboard',
    links: {
      github: 'https://github.com/sahilsk888',
      live: null
    }
  },
  {
    id: 'blackout',
    number: '04',
    name: 'BLACKOUT',
    subtitle: 'Authoritative Server Multiplayer Game',
    focus: ['Game Development', 'Networking', 'Server Architecture', 'Godot'],
    tagline: 'High-frequency deterministic multiplayer game architecture featuring authoritative state synchronization and client-side interpolation.',
    overview: 'BLACKOUT is a networked multiplayer experience built to explore distributed client-server synchronization, latency mitigation, and physics determinism. With the server acting as the single source of truth, BLACKOUT mitigates cheating and packet loss across high-ping environments.',
    role: 'Systems & Network Programmer — Authoritative server logic, packet serialization, snapshot interpolation, and game loop synchronization.',
    technologies: ['Godot Engine', 'Networking Sockets', 'UDP/WebSockets', 'Server Architecture', 'C++ / GDScript'],
    highlights: [
      'Architected dedicated server topology processing fixed 60Hz tick rates for physics and hit registration.',
      'Implemented client-side prediction and server reconciliation to ensure seamless local input responsiveness.',
      'Engineered compact binary packet serialization formats reducing round-trip bandwidth consumption.',
      'Designed robust reconnection protocols and delta snapshot compression for variable latency connections.'
    ],
    architecture: 'Client Inputs (Raw) → UDP Serialization → Authoritative Server Simulation (60Hz) → Compressed World Delta Snapshot → Client Interpolation & Rendering',
    links: {
      github: 'https://github.com/sahilsk888',
      live: null
    }
  }
];
