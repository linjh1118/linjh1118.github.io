// Original 19 cards plus additions from the curated README. See scripts/import_papers.py.
window.surveyPapers = [
  {
    "title": "SWE-bench: Can Language Models Resolve Real-World GitHub Issues?",
    "year": "2024",
    "venue": "ICLR",
    "group": "Benchmarks",
    "tags": [
      "issue repair",
      "repository",
      "tests"
    ],
    "lesson": "Established the repository snapshot + issue + executable regression test as a reusable evaluation unit.",
    "url": "https://arxiv.org/abs/2310.06770",
    "groups": [
      "Benchmarks"
    ]
  },
  {
    "title": "SWE-bench-Live",
    "year": "2025",
    "venue": "Project",
    "group": "Benchmarks",
    "tags": [
      "rolling",
      "freshness",
      "evaluation"
    ],
    "lesson": "Continuously refreshed tasks make benchmark freshness an operational property rather than a one-time split.",
    "url": "https://github.com/microsoft/swe-bench-live",
    "groups": [
      "Benchmarks"
    ]
  },
  {
    "title": "SWE-rebench: Automated Task Collection and Decontaminated Evaluation",
    "year": "2025",
    "venue": "arXiv",
    "group": "Benchmarks",
    "tags": [
      "time split",
      "environment",
      "decontamination"
    ],
    "lesson": "Automated setup, temporal separation, and versioned collection can expand both training arenas and held-out evaluation.",
    "url": "https://arxiv.org/abs/2505.20411",
    "groups": [
      "Benchmarks",
      "Task Factory"
    ]
  },
  {
    "title": "Multi-SWE-bench: A Multilingual Benchmark for Issue Resolving",
    "year": "2025",
    "venue": "arXiv",
    "group": "Benchmarks",
    "tags": [
      "multilingual",
      "issue repair",
      "RL data"
    ],
    "lesson": "Language diversity also changes dependencies, toolchains, and environment reliability—not only prompt language.",
    "url": "https://arxiv.org/abs/2504.02605",
    "groups": [
      "Benchmarks"
    ]
  },
  {
    "title": "PostTrainBench: Can LLM Agents Automate LLM Post-Training?",
    "year": "2026",
    "venue": "Project",
    "group": "Benchmarks",
    "tags": [
      "AI R&D",
      "data choice",
      "checkpoint"
    ],
    "lesson": "The agent itself becomes a data operator that selects corpora, recipes, compute, and the final trained artifact.",
    "url": "https://posttrainbench.com/",
    "groups": [
      "Benchmarks"
    ]
  },
  {
    "title": "Training Software Engineering Agents and Verifiers with SWE-Gym",
    "year": "2024",
    "venue": "arXiv",
    "group": "Task Factory",
    "tags": [
      "issue/PR",
      "arena",
      "verifier"
    ],
    "lesson": "Evaluation-style repository tasks can become training environments only after a new held-out boundary is created.",
    "url": "https://arxiv.org/abs/2412.21139",
    "groups": [
      "Task Factory"
    ]
  },
  {
    "title": "R2E-Gym: Procedural Environments and Hybrid Verifiers",
    "year": "2025",
    "venue": "arXiv",
    "group": "Task Factory",
    "tags": [
      "commit",
      "back-translation",
      "hybrid verifier"
    ],
    "lesson": "Commit-derived tasks scale when specifications, tests, and execution evidence are reconstructed together.",
    "url": "https://arxiv.org/abs/2504.07164",
    "groups": [
      "Task Factory"
    ]
  },
  {
    "title": "SWE-smith: Scaling Data for Software Engineering Agents",
    "year": "2025",
    "venue": "NeurIPS",
    "group": "Task Factory",
    "tags": [
      "mutation",
      "stable repo",
      "teacher trace"
    ],
    "lesson": "Qualify a repository environment first, then inject testable bugs and collect verified solutions.",
    "url": "https://arxiv.org/abs/2504.21798",
    "groups": [
      "Task Factory"
    ]
  },
  {
    "title": "SWE-Factory: Automated Issue Resolution Data and Benchmarks",
    "year": "2025",
    "venue": "arXiv",
    "group": "Task Factory",
    "tags": [
      "real issue",
      "test recovery",
      "F2P"
    ],
    "lesson": "Environment restoration and fail-to-pass validation are core data-generation stages, not harness afterthoughts.",
    "url": "https://arxiv.org/abs/2506.10954",
    "groups": [
      "Task Factory"
    ]
  },
  {
    "title": "Terminal-World: Scaling Terminal-Agent Environments via Agent Skills",
    "year": "2026",
    "venue": "arXiv",
    "group": "Task Factory",
    "tags": [
      "skill",
      "terminal",
      "joint synthesis"
    ],
    "lesson": "A skill can serve as the seed for jointly synthesizing a task, environment, verifier, and guideline.",
    "url": "https://arxiv.org/abs/2605.20876",
    "groups": [
      "Task Factory"
    ]
  },
  {
    "title": "LiteCoder-Terminal",
    "year": "2026",
    "venue": "arXiv",
    "group": "Task Factory",
    "tags": [
      "terminal",
      "adversarial verifier",
      "behavior"
    ],
    "lesson": "Environment synthesis, verifier red-teaming, behavior filtering, and objective routing form one data pipeline.",
    "url": "https://arxiv.org/abs/2605.29559",
    "groups": [
      "Task Factory",
      "Trajectories"
    ]
  },
  {
    "title": "Recursive Synthesis for Long-Horizon Terminal Tasks",
    "year": "2026",
    "venue": "arXiv",
    "group": "Task Factory",
    "tags": [
      "recursive",
      "curriculum",
      "difficulty"
    ],
    "lesson": "Validated seeds can generate harder descendants, but novelty and verifier independence must be audited every round.",
    "url": "https://arxiv.org/abs/2608.05466",
    "groups": [
      "Task Factory"
    ]
  },
  {
    "title": "SWE-TRACE: Rubric Process Reward Models and Test-Time Scaling",
    "year": "2026",
    "venue": "arXiv",
    "group": "Trajectories",
    "tags": [
      "PRM",
      "step selection",
      "pruning"
    ],
    "lesson": "One rollout graph can yield compact demonstrations, hard negatives, process labels, RL data, and search guidance.",
    "url": "https://arxiv.org/abs/2604.14820",
    "groups": [
      "Trajectories"
    ]
  },
  {
    "title": "TRAJDEBUG: Tracing Error Lifecycle in Agent Trajectories",
    "year": "2026",
    "venue": "arXiv",
    "group": "Trajectories",
    "tags": [
      "failure",
      "causal attribution",
      "recovery"
    ],
    "lesson": "Resolved, manifest, and latent errors should not inherit the same terminal label.",
    "url": "https://arxiv.org/abs/2608.06346",
    "groups": [
      "Trajectories"
    ]
  },
  {
    "title": "daVinci-Agency: Unlocking Long-Horizon Agency Data-Efficiently",
    "year": "2026",
    "venue": "arXiv",
    "group": "Trajectories",
    "tags": [
      "PR chain",
      "human trace",
      "long horizon"
    ],
    "lesson": "Fewer information-dense dependency chains can carry more useful agency structure than flat transcript volume.",
    "url": "https://arxiv.org/abs/2602.02619",
    "groups": [
      "Trajectories",
      "Task Factory"
    ]
  },
  {
    "title": "CompactionRL: Reinforcement Learning with Context Compaction",
    "year": "2026",
    "venue": "arXiv",
    "group": "Trajectories",
    "tags": [
      "context",
      "compaction",
      "policy action"
    ],
    "lesson": "Compaction can be learned as a policy action, distinct from offline trace pruning and immutable raw storage.",
    "url": "https://arxiv.org/abs/2607.05378",
    "groups": [
      "Trajectories",
      "Data Systems"
    ]
  },
  {
    "title": "Klear-AgentForge: Forging Agentic Intelligence through Posttraining Scaling",
    "year": "2025",
    "venue": "arXiv",
    "group": "Post-training",
    "tags": [
      "agentic SFT",
      "multi-turn RL",
      "merge"
    ],
    "lesson": "Agentic demonstrations, online environments, and capability-preserving merging can be staged as separate data regimes.",
    "url": "https://arxiv.org/abs/2511.05951",
    "groups": [
      "Post-training",
      "Data Systems"
    ]
  },
  {
    "title": "SkyRL-Agent: Efficient RL Training for Multi-Turn LLM Agents",
    "year": "2025",
    "venue": "arXiv",
    "group": "Post-training",
    "tags": [
      "asynchronous RL",
      "throughput",
      "on-policy"
    ],
    "lesson": "Long-environment RL needs rollout infrastructure, but higher throughput does not remove stale-policy or reward-noise risk.",
    "url": "https://arxiv.org/abs/2511.16108",
    "groups": [
      "Post-training",
      "Data Systems"
    ]
  },
  {
    "title": "One Tool Is Enough: RL for Repository-Level LLM Agents",
    "year": "2025",
    "venue": "arXiv",
    "group": "Post-training",
    "tags": [
      "repository",
      "RLVR",
      "action interface"
    ],
    "lesson": "A constrained action interface can simplify online RL while making harness transfer an explicit evaluation question.",
    "url": "https://arxiv.org/abs/2512.20957",
    "groups": [
      "Post-training",
      "Data Systems"
    ]
  },
  {
    "title": "HumanEval：Evaluating Large Language Models Trained on Code",
    "year": "2021",
    "venue": "arXiv",
    "group": "Benchmarks",
    "groups": [
      "Benchmarks"
    ],
    "tags": [
      "L1–L2 · function- and repository-context synthesis",
      "Benchmark"
    ],
    "lesson": "Bounded function synthesis from a signature and docstring, scored by hidden tests — the scalable but non-agentic ancestor of executable verification.",
    "url": "https://arxiv.org/abs/2107.03374"
  },
  {
    "title": "RepoBench: Benchmarking Repository-Level Code Auto-Completion Systems",
    "year": "2023",
    "venue": "arXiv",
    "group": "Benchmarks",
    "groups": [
      "Benchmarks"
    ],
    "tags": [
      "L1–L2 · function- and repository-context synthesis",
      "Benchmark"
    ],
    "lesson": "Isolates cross-file retrieval (acc@k), next-line completion (EM, edit similarity) and the end-to-end pipeline, separating grounding from repair.",
    "url": "https://arxiv.org/abs/2306.03091"
  },
  {
    "title": "InterCode: Standardizing and Benchmarking Interactive Coding with Execution Feedback",
    "year": "2023",
    "venue": "arXiv",
    "group": "Benchmarks",
    "groups": [
      "Benchmarks",
      "Task Factory"
    ],
    "tags": [
      "L1–L2 · function- and repository-context synthesis",
      "Real-issue recovery & environment reconstruction",
      "Benchmark"
    ],
    "lesson": "Wraps NL2Bash, Spider and MBPP as reproducible Bash, SQL and Python environments with execution feedback — early evidence that interactivity, not just answers, is the artifact.",
    "url": "https://arxiv.org/abs/2306.14898"
  },
  {
    "title": "SWE-bench Verified: A Human-Validated Subset of SWE-bench",
    "year": "2024",
    "venue": "Resource",
    "group": "Benchmarks",
    "groups": [
      "Benchmarks"
    ],
    "tags": [
      "L3 · repository-level issue resolution",
      "Benchmark",
      "Code"
    ],
    "lesson": "A 500-task human-screened subset that removes ambiguous statements and unfair tests; retired by OpenAI in 2026 after a 59.4% defect rate in a 138-task audit.",
    "url": "https://openai.com/index/introducing-swe-bench-verified/"
  },
  {
    "title": "SWE-Bench Pro: Can AI Agents Solve Long-Horizon Software Engineering Tasks?",
    "year": "2025",
    "venue": "arXiv",
    "group": "Benchmarks",
    "groups": [
      "Benchmarks"
    ],
    "tags": [
      "L3 · repository-level issue resolution",
      "Benchmark",
      "Code"
    ],
    "lesson": "1,865 human-verified tasks split into public, commercial and held-out tiers; a later audit estimated about 30% of the public split to be broken.",
    "url": "https://arxiv.org/abs/2509.16941"
  },
  {
    "title": "SWE-PolyBench: A Multi-Language Benchmark for Repository Level Evaluation of Coding Agents",
    "year": "2025",
    "venue": "arXiv",
    "group": "Benchmarks",
    "groups": [
      "Benchmarks"
    ],
    "tags": [
      "L3 · repository-level issue resolution",
      "Benchmark",
      "Code"
    ],
    "lesson": "2,110 tasks across 21 repositories in Java, JavaScript, TypeScript and Python, grouped by language, task type and diff complexity.",
    "url": "https://arxiv.org/abs/2504.08703"
  },
  {
    "title": "DeepSWE: Measuring Frontier Coding Agents on Original, Long-Horizon Engineering Tasks",
    "year": "2026",
    "venue": "arXiv",
    "group": "Benchmarks",
    "groups": [
      "Benchmarks"
    ],
    "tags": [
      "L3 · repository-level issue resolution",
      "Benchmark",
      "Code"
    ],
    "lesson": "113 original tasks in five languages with functional verifiers; only 1.4% disagreement against an independent LLM judge, versus 32.4% for inherited SWE-bench Pro tests.",
    "url": "https://arxiv.org/abs/2607.07946"
  },
  {
    "title": "SWE-Lancer: Can Frontier LLMs Earn One Million Dollars from Real-World Freelance Software Engineering?",
    "year": "2025",
    "venue": "arXiv",
    "group": "Benchmarks",
    "groups": [
      "Benchmarks"
    ],
    "tags": [
      "L4 · long-horizon engineering, terminal & professional work",
      "Benchmark",
      "Code"
    ],
    "lesson": "Over 1,400 paid freelance tasks worth about $1M, scored by triple-reviewed end-to-end tests or real manager choices — coding accuracy and economic value are not commensurate.",
    "url": "https://arxiv.org/abs/2502.12115"
  },
  {
    "title": "OSWorld: Benchmarking Multimodal Agents for Open-Ended Tasks in Real Computer Environments",
    "year": "2024",
    "venue": "arXiv",
    "group": "Benchmarks",
    "groups": [
      "Benchmarks"
    ],
    "tags": [
      "L4 · long-horizon engineering, terminal & professional work",
      "Benchmark",
      "Code"
    ],
    "lesson": "369 initialized desktop-VM tasks scored by final-state evaluators, making environment state and evaluator coverage first-class benchmark assets.",
    "url": "https://arxiv.org/abs/2404.07972"
  },
  {
    "title": "Terminal-Bench: Benchmarking Agents on Hard, Realistic Tasks in Command Line Interfaces",
    "year": "2026",
    "venue": "arXiv",
    "group": "Benchmarks",
    "groups": [
      "Benchmarks"
    ],
    "tags": [
      "L4 · long-horizon engineering, terminal & professional work",
      "Benchmark",
      "Code"
    ],
    "lesson": "89 hand-verified terminal tasks in Harbor/Docker containers scored by hidden final-state tests; revision 2.1 repaired 28 tasks, showing that versions are material.",
    "url": "https://arxiv.org/abs/2601.11868"
  },
  {
    "title": "SWE-EVO: Benchmarking Coding Agents in Long-Horizon Software Evolution Scenarios",
    "year": "2025",
    "venue": "arXiv",
    "group": "Benchmarks",
    "groups": [
      "Benchmarks"
    ],
    "tags": [
      "L4 · long-horizon engineering, terminal & professional work",
      "Benchmark"
    ],
    "lesson": "48 release-scale tasks across 7 repositories, averaging about 21 files each, scored with a partial fix rate for evolving whole versions rather than single patches.",
    "url": "https://arxiv.org/abs/2512.18470"
  },
  {
    "title": "SWE Atlas: Benchmarking Coding Agents Beyond Issue Resolution",
    "year": "2025",
    "venue": "Resource",
    "group": "Benchmarks",
    "groups": [
      "Benchmarks"
    ],
    "tags": [
      "L4 · long-horizon engineering, terminal & professional work",
      "Benchmark"
    ],
    "lesson": "284 expert tasks spanning repository QA, test writing and refactoring — multi-faceted professional work that cannot collapse into one resolve rate.",
    "url": "https://static.scale.com/uploads/6691558a94899f2f65a87a75/Coding_Agent_Eval%20(5).pdf"
  },
  {
    "title": "PaperBench: Evaluating AI's Ability to Replicate AI Research",
    "year": "2025",
    "venue": "arXiv",
    "group": "Benchmarks",
    "groups": [
      "Benchmarks"
    ],
    "tags": [
      "L5 · autonomous AI R&D",
      "Benchmark"
    ],
    "lesson": "Decomposes reproduction of 20 ICML papers into 8,316 rubric nodes, exposing partial research progress that a pass/fail bit cannot represent.",
    "url": "https://arxiv.org/abs/2504.01848"
  },
  {
    "title": "MLE-bench: Evaluating Machine Learning Agents on Machine Learning Engineering",
    "year": "2024",
    "venue": "arXiv",
    "group": "Benchmarks",
    "groups": [
      "Benchmarks"
    ],
    "tags": [
      "L5 · autonomous AI R&D",
      "Benchmark"
    ],
    "lesson": "75 offline Kaggle competitions with local scoring code, turning experiment selection and resource use into the measured unit.",
    "url": "https://arxiv.org/abs/2410.07095"
  },
  {
    "title": "MLGym: A New Framework and Benchmark for Advancing AI Research Agents",
    "year": "2025",
    "venue": "arXiv",
    "group": "Benchmarks",
    "groups": [
      "Benchmarks"
    ],
    "tags": [
      "L5 · autonomous AI R&D",
      "Benchmark",
      "Code"
    ],
    "lesson": "13 open research tasks across CV, NLP and RL with a common interactive environment; models mostly improve baselines by search, rarely by new hypotheses.",
    "url": "https://arxiv.org/abs/2502.14499"
  },
  {
    "title": "SWE-Universe: Scale Real-World Verifiable Environments to Millions",
    "year": "2026",
    "venue": "arXiv",
    "group": "Task Factory",
    "groups": [
      "Task Factory"
    ],
    "tags": [
      "Real-issue recovery & environment reconstruction",
      "Environments"
    ],
    "lesson": "Learns specialized builder and validator models so environment construction amortizes across languages and repositories at million scale.",
    "url": "https://arxiv.org/abs/2602.02361"
  },
  {
    "title": "SWE-World: Building Software Engineering Agents in Docker-Free Environments",
    "year": "2026",
    "venue": "arXiv",
    "group": "Task Factory",
    "groups": [
      "Task Factory"
    ],
    "tags": [
      "Real-issue recovery & environment reconstruction",
      "Environments"
    ],
    "lesson": "Learns a lower-cost execution surrogate calibrated against real runs, changing the economics of task interaction rather than the task set.",
    "url": "https://arxiv.org/abs/2602.03419"
  },
  {
    "title": "SWE-rebench V2: Scalable Multilingual Software-Engineering Environments",
    "year": "2026",
    "venue": "arXiv",
    "group": "Task Factory",
    "groups": [
      "Task Factory"
    ],
    "tags": [
      "Real-issue recovery & environment reconstruction",
      "Environments",
      "Code"
    ],
    "lesson": "Language-agnostic automatic mining that separates a heavyweight executable product from a lightweight one, matching supply to the consumer.",
    "url": "https://arxiv.org/abs/2602.23866"
  },
  {
    "title": "Open-SWE-Traces: Advancing Dual-Mode Multilingual Distillation for Software Engineering Agents",
    "year": "2026",
    "venue": "arXiv",
    "group": "Task Factory",
    "groups": [
      "Task Factory"
    ],
    "tags": [
      "Commit back-translation & procedural construction",
      "HF_data"
    ],
    "lesson": "Demonstrates that TaskPackage provenance and licensing constrain which trajectories can legally be distilled — rights flow into trace eligibility.",
    "url": "https://arxiv.org/abs/2606.16038"
  },
  {
    "title": "SWE-Dev: Building Software Engineering Agents with Training and Inference Scaling",
    "year": "2025",
    "venue": "arXiv",
    "group": "Task Factory",
    "groups": [
      "Task Factory",
      "Post-training"
    ],
    "tags": [
      "Task-to-trace coupling & teacher rollouts",
      "Supervised & rejection-sampling fine-tuning",
      "Environments"
    ],
    "lesson": "Couples synthesized tests and execution results to both training and inference scaling, connecting task synthesis to the serving loop.",
    "url": "https://arxiv.org/abs/2506.07636"
  },
  {
    "title": "SWE-Flow: Synthesizing Software Engineering Data in a Test-Driven Manner",
    "year": "2025",
    "venue": "arXiv",
    "group": "Task Factory",
    "groups": [
      "Task Factory",
      "Post-training"
    ],
    "tags": [
      "Task-to-trace coupling & teacher rollouts",
      "Supervised & rejection-sampling fine-tuning",
      "Environments"
    ],
    "lesson": "Aligns generated development steps to unit tests and the runtime dependency graph, producing TDD-style sequences rather than isolated snippets.",
    "url": "https://arxiv.org/abs/2506.09003"
  },
  {
    "title": "RepoForge: Training a SOTA Fast-thinking SWE Agent with an End-to-End Data Curation Pipeline Synergizing SFT and RL at Scale",
    "year": "2025",
    "venue": "arXiv",
    "group": "Task Factory",
    "groups": [
      "Task Factory",
      "Post-training"
    ],
    "tags": [
      "Task-to-trace coupling & teacher rollouts",
      "Supervised & rejection-sampling fine-tuning"
    ],
    "lesson": "Shows that curation and post-training must be designed jointly: execution filtering feeds both SFT and RL from one pipeline.",
    "url": "https://arxiv.org/abs/2508.01550"
  },
  {
    "title": "SWE-Master: Unleashing the Potential of Software Engineering Agents via Post-Training",
    "year": "2026",
    "venue": "arXiv",
    "group": "Task Factory",
    "groups": [
      "Task Factory",
      "Trajectories"
    ],
    "tags": [
      "Task-to-trace coupling & teacher rollouts",
      "Trace selection & learnability",
      "Environments",
      "Code"
    ],
    "lesson": "Turns a task pool into teacher trajectories, an RL arena and a post-training recipe, and shows that budget truncation and submission failure need different labels.",
    "url": "https://arxiv.org/abs/2602.03411"
  },
  {
    "title": "Qwen3-Coder-Next Technical Report",
    "year": "2026",
    "venue": "arXiv",
    "group": "Task Factory",
    "groups": [
      "Task Factory"
    ],
    "tags": [
      "Task-to-trace coupling & teacher rollouts",
      "Environments"
    ],
    "lesson": "An industrial stack integrating verifiable tasks, agentic mid-training and RL in executable environments — task synthesis as one component of a larger recipe.",
    "url": "https://arxiv.org/abs/2603.00729"
  },
  {
    "title": "SWE-Playground：Training Versatile Coding Agents in Synthetic Environments",
    "year": "2025",
    "venue": "arXiv",
    "group": "Task Factory",
    "groups": [
      "Task Factory"
    ],
    "tags": [
      "From-scratch, skill-driven & generative worlds",
      "Environments"
    ],
    "lesson": "Synthesizes project, task, environment and trajectory together, giving coverage beyond repositories that already exist.",
    "url": "https://arxiv.org/abs/2512.12216"
  },
  {
    "title": "Self-play SWE-RL：Toward Training Superintelligent Software Agents through Self-Play SWE-RL",
    "year": "2025",
    "venue": "arXiv",
    "group": "Task Factory",
    "groups": [
      "Task Factory"
    ],
    "tags": [
      "Self-play, recursive & freshness-conditioned construction",
      "Environments"
    ],
    "lesson": "Alternates bug injection and repair with a formal test patch as the specification, removing the need for human-written issue text.",
    "url": "https://arxiv.org/abs/2512.18552"
  },
  {
    "title": "SWE-Future: Forecast-Conditioned Data Synthesis for Future-Oriented Software Engineering Agents",
    "year": "2026",
    "venue": "arXiv",
    "group": "Task Factory",
    "groups": [
      "Task Factory"
    ],
    "tags": [
      "Self-play, recursive & freshness-conditioned construction",
      "Environments"
    ],
    "lesson": "Treats freshness as a forecast problem, conditioning construction on anticipated task families and validating against later held-out events.",
    "url": "https://arxiv.org/abs/2606.18733"
  },
  {
    "title": "AgentLens: Production-Assessed Trajectory Reviews for Coding Agent Evaluation",
    "year": "2026",
    "venue": "arXiv",
    "group": "Trajectories",
    "groups": [
      "Trajectories"
    ],
    "tags": [
      "Experience acquisition & rollout topology"
    ],
    "lesson": "Adds instruction-compliance, pitfall and tool-use evidence on top of full-trajectory review, with learned judges kept subordinate to executable checks.",
    "url": "https://arxiv.org/abs/2607.06624"
  },
  {
    "title": "Trial and Error: Exploration-Based Trajectory Optimization for LLM Agents",
    "year": "2024",
    "venue": "arXiv",
    "group": "Trajectories",
    "groups": [
      "Trajectories"
    ],
    "tags": [
      "Experience acquisition & rollout topology"
    ],
    "lesson": "Exploration-based trajectory optimization that converts failed attempts into a search signal instead of discarding them.",
    "url": "https://arxiv.org/abs/2403.02502"
  },
  {
    "title": "SWE-Fuse: Empowering Software Agents via Issue-Free Trajectory Learning and Entropy-Aware RLVR Training",
    "year": "2026",
    "venue": "arXiv",
    "group": "Trajectories",
    "groups": [
      "Trajectories"
    ],
    "tags": [
      "Trace selection & learnability",
      "Traces"
    ],
    "lesson": "Mixes issue-guided with issue-free trajectories and removes Git shortcuts, then trains with entropy-aware RLVR — 43.0%/60.2% on SWE-bench Verified at 8B/32B.",
    "url": "https://arxiv.org/abs/2603.07927"
  },
  {
    "title": "OpenCodeReasoning: Advancing Data Distillation for Competitive Coding",
    "year": "2025",
    "venue": "arXiv",
    "group": "Trajectories",
    "groups": [
      "Trajectories"
    ],
    "tags": [
      "Trace selection & learnability",
      "HF_data"
    ],
    "lesson": "Under a controlled 151K-sample ablation, failed-execution solutions trained a stronger student than passing ones — correctness filtering changes the difficulty distribution, not just the count.",
    "url": "https://arxiv.org/abs/2504.01943"
  },
  {
    "title": "NaturalThoughts: Selecting and Distilling Reasoning Traces for General Reasoning Tasks",
    "year": "2025",
    "venue": "arXiv",
    "group": "Trajectories",
    "groups": [
      "Trajectories"
    ],
    "tags": [
      "Trace selection & learnability"
    ],
    "lesson": "Random scaling is a strong baseline; reasoning-strategy diversity and model disagreement beat topical diversity at small budgets, and medium-length traces beat both extremes.",
    "url": "https://arxiv.org/abs/2507.01921"
  },
  {
    "title": "LARK: Learnability-Grounded Trajectory Selection for Efficient Reasoning Distillation",
    "year": "2026",
    "venue": "arXiv",
    "group": "Trajectories",
    "groups": [
      "Trajectories"
    ],
    "tags": [
      "Trace selection & learnability",
      "Traces"
    ],
    "lesson": "Defines trajectory learnability by anchor-time loss decay and solves a χ²-regularized fixed-budget top-B problem, keeping coverage instead of collapsing onto easy samples.",
    "url": "https://arxiv.org/abs/2605.30651"
  },
  {
    "title": "A Systematic Evaluation of Trajectory Data Curation for LoRA Fine-Tuning of Code Agents",
    "year": "2026",
    "venue": "arXiv",
    "group": "Trajectories",
    "groups": [
      "Trajectories"
    ],
    "tags": [
      "Trace selection & learnability"
    ],
    "lesson": "Over 67,074 SWE trajectories, 500→1,000 trajectories cut held-out loss by 12.7% while TopQ and random differ by under 1%; error–retry behaviour is the strongest single feature.",
    "url": "https://arxiv.org/abs/2607.17205"
  },
  {
    "title": "AgentRx: Diagnosing AI Agent Failures from Execution Trajectories",
    "year": "2026",
    "venue": "arXiv",
    "group": "Trajectories",
    "groups": [
      "Trajectories"
    ],
    "tags": [
      "Failure attribution & error lifecycle"
    ],
    "lesson": "Targets the first unrecoverable critical failure by validating steps and checking whether later actions repair each violation, rather than blaming the terminal outcome.",
    "url": "https://arxiv.org/abs/2602.02475"
  },
  {
    "title": "Tracing Agentic Failure from the Flow of Success",
    "year": "2026",
    "venue": "arXiv",
    "group": "Trajectories",
    "groups": [
      "Trajectories"
    ],
    "tags": [
      "Failure attribution & error lifecycle"
    ],
    "lesson": "A one-class model of successful trajectories flags deviations in failed runs — useful for localizing a candidate window, but an anomaly is not evidence of causal responsibility.",
    "url": "https://arxiv.org/abs/2607.12747"
  },
  {
    "title": "From Reasoning Traces to Reusable Modules: Understanding Compositional Generalization in Language Model Reasoning",
    "year": "2026",
    "venue": "arXiv",
    "group": "Trajectories",
    "groups": [
      "Trajectories"
    ],
    "tags": [
      "Failure attribution & error lifecycle"
    ],
    "lesson": "Shows that atomic abilities in isolation are insufficient: compound traces demonstrating their interfaces support later RL composition far better.",
    "url": "https://arxiv.org/abs/2606.18089"
  },
  {
    "title": "Compress-Distill: Reasoning Trace Compression for Efficient Knowledge Distillation",
    "year": "2026",
    "venue": "arXiv",
    "group": "Trajectories",
    "groups": [
      "Trajectories"
    ],
    "tags": [
      "Compression, abstraction & reuse"
    ],
    "lesson": "Compresses correct traces to 8.6–21.0% of their character length for 2.0–7.6× faster training, while uncompressed traces stay most accurate — a Pareto trade, not a free win.",
    "url": "https://arxiv.org/abs/2606.05988"
  },
  {
    "title": "BRIDGE: Bridging Reasoning In Distillation Gap Elimination via Structure-Aware Masking",
    "year": "2026",
    "venue": "arXiv",
    "group": "Trajectories",
    "groups": [
      "Trajectories"
    ],
    "tags": [
      "Compression, abstraction & reuse"
    ],
    "lesson": "Uses structure-aware masked reconstruction and accuracy–brevity RL, with strong evidence for small mathematical reasoners but not yet for stateful coding agents.",
    "url": "https://arxiv.org/abs/2602.17686"
  },
  {
    "title": "HarnessFix: From Failed Trajectories to Reliable LLM Agents: Diagnosing and Repairing Harness Flaws",
    "year": "2026",
    "venue": "arXiv",
    "group": "Trajectories",
    "groups": [
      "Trajectories",
      "Validity"
    ],
    "tags": [
      "Compression, abstraction & reuse",
      "Verifier & harness repair"
    ],
    "lesson": "Compiles traces and harness code into an intermediate representation to localize defects across execution, tool, context, lifecycle and governance layers, improving four benchmarks by 6.3–18.4 points. When the failure belongs to the harness rather than the policy, repair the framework under regression-aware replay instead of extracting negative policy gradients.",
    "url": "https://arxiv.org/abs/2606.06324"
  },
  {
    "title": "Reusing Past Repairs Through Hierarchical Trajectory Abstraction for Coding Agents",
    "year": "2026",
    "venue": "arXiv",
    "group": "Trajectories",
    "groups": [
      "Trajectories"
    ],
    "tags": [
      "Compression, abstraction & reuse"
    ],
    "lesson": "Segments past repairs into localization, planning and verification, then abstracts them into procedure trees; raw unabstracted traces transfer less well.",
    "url": "https://arxiv.org/abs/2607.29658"
  },
  {
    "title": "Direct Preference Optimization: Your Language Model Is Secretly a Reward Model",
    "year": "2023",
    "venue": "arXiv",
    "group": "Post-training",
    "groups": [
      "Post-training"
    ],
    "tags": [
      "Offline preference optimization"
    ],
    "lesson": "Base method: learns from chosen/rejected pairs without a separate reward model; reported on general preference tasks, not on coding-agent repair.",
    "url": "https://arxiv.org/abs/2305.18290"
  },
  {
    "title": "KTO: Model Alignment as Prospect Theoretic Optimization",
    "year": "2024",
    "venue": "arXiv",
    "group": "Post-training",
    "groups": [
      "Post-training"
    ],
    "tags": [
      "Offline preference optimization"
    ],
    "lesson": "Base method: consumes independently labelled desirable/undesirable examples, so exact pairs are not required.",
    "url": "https://arxiv.org/abs/2402.01306"
  },
  {
    "title": "Agentic-DPO: From Imitation to Agentic Policy Optimization on Expert Trajectories",
    "year": "2026",
    "venue": "arXiv",
    "group": "Post-training",
    "groups": [
      "Post-training"
    ],
    "tags": [
      "Offline preference optimization"
    ],
    "lesson": "Samples student actions at expert states to build local action-level comparisons without a full online RL loop.",
    "url": "https://arxiv.org/abs/2607.10601"
  },
  {
    "title": "ENTROPO：Building Coding Agents via Entropy-Enhanced Multi-Turn Preference Optimization",
    "year": "2025",
    "venue": "arXiv",
    "group": "Post-training",
    "groups": [
      "Post-training"
    ],
    "tags": [
      "Offline preference optimization"
    ],
    "lesson": "Adds an explicit entropy objective because ordinary DPO/KTO collapses exploration in long interactive tasks: 37.7 base → 43.8 SFT → 51.6, reaching 59.4 with test-time scaling.",
    "url": "https://arxiv.org/abs/2509.12434"
  },
  {
    "title": "Direct Multi-Turn Preference Optimization for Language Agents",
    "year": "2024",
    "venue": "arXiv",
    "group": "Post-training",
    "groups": [
      "Post-training"
    ],
    "tags": [
      "Offline preference optimization"
    ],
    "lesson": "Extends preference optimization to multi-turn agent trajectories, where a turn-level comparison is not equivalent to a whole-response one.",
    "url": "https://arxiv.org/abs/2406.14868"
  },
  {
    "title": "PPO：Proximal Policy Optimization Algorithms",
    "year": "2017",
    "venue": "arXiv",
    "group": "Post-training",
    "groups": [
      "Post-training"
    ],
    "tags": [
      "On- and off-policy reinforcement learning"
    ],
    "lesson": "Base method: on-policy updates with a clipped importance ratio; the most general baseline when a critic and granular advantages are reliable.",
    "url": "https://arxiv.org/abs/1707.06347"
  },
  {
    "title": "GRPO：DeepSeekMath: Pushing the Limits of Mathematical Reasoning in Open Language Models",
    "year": "2024",
    "venue": "arXiv",
    "group": "Post-training",
    "groups": [
      "Post-training"
    ],
    "tags": [
      "On- and off-policy reinforcement learning"
    ],
    "lesson": "Base method: normalizes verified rewards across same-task groups, dropping the critic — but all-pass and all-fail groups carry almost no learning signal.",
    "url": "https://arxiv.org/abs/2402.03300"
  },
  {
    "title": "Training Long-Context, Multi-Turn Software Engineering Agents with Reinforcement Learning",
    "year": "2025",
    "venue": "arXiv",
    "group": "Post-training",
    "groups": [
      "Post-training"
    ],
    "tags": [
      "On- and off-policy reinforcement learning"
    ],
    "lesson": "RFT warm-up plus multi-turn DAPO with a binary test reward, a small step penalty and a horizon curriculum — and a warning that unfiltered sampling makes importance ratios biased.",
    "url": "https://arxiv.org/abs/2508.03501"
  },
  {
    "title": "B-Coder: Value-Based Deep Reinforcement Learning for Program Synthesis",
    "year": "2023",
    "venue": "arXiv",
    "group": "Post-training",
    "groups": [
      "Post-training"
    ],
    "tags": [
      "On- and off-policy reinforcement learning"
    ],
    "lesson": "Learns action values with Bellman targets and improves the policy off-policy, so historical programs are reused instead of discarded after one update.",
    "url": "https://arxiv.org/abs/2310.03173"
  },
  {
    "title": "Process Supervision-Guided Policy Optimization for Code Generation",
    "year": "2024",
    "venue": "arXiv",
    "group": "Post-training",
    "groups": [
      "Post-training"
    ],
    "tags": [
      "Densifying executable credit"
    ],
    "lesson": "Finds the first incorrect line by execution-guided binary search, turning a terminal pass bit into a line-level process reward and value initialization.",
    "url": "https://arxiv.org/abs/2410.17621"
  },
  {
    "title": "CodeRL+: Improving Code Generation with Reinforcement Learning from Execution Semantics",
    "year": "2025",
    "venue": "arXiv",
    "group": "Post-training",
    "groups": [
      "Post-training"
    ],
    "tags": [
      "Densifying executable credit"
    ],
    "lesson": "Asks the failing program to predict final values of primitive variables and scores that agreement, exposing partial semantic correctness when no test passes.",
    "url": "https://arxiv.org/abs/2510.18471"
  },
  {
    "title": "Verifiable Process Rewards for Agentic Reasoning",
    "year": "2026",
    "venue": "arXiv",
    "group": "Post-training",
    "groups": [
      "Post-training"
    ],
    "tags": [
      "Densifying executable credit"
    ],
    "lesson": "Assigns externally checked reward to intermediate decisions and normalizes advantage among samples still active at the same decision point.",
    "url": "https://arxiv.org/abs/2605.10325"
  },
  {
    "title": "RLPF: Reinforcement Learning from Performance Feedback for Code Generation",
    "year": "2026",
    "venue": "arXiv",
    "group": "Post-training",
    "groups": [
      "Post-training"
    ],
    "tags": [
      "Densifying executable credit"
    ],
    "lesson": "Turns performance into an ordered staircase — non-executable, executable, correct, correct-and-efficient — so correctness and efficiency improve without an opaque judge.",
    "url": "https://arxiv.org/abs/2607.27271"
  },
  {
    "title": "Privileged Information Distillation for Language Models",
    "year": "2026",
    "venue": "arXiv",
    "group": "Post-training",
    "groups": [
      "Post-training"
    ],
    "tags": [
      "Densifying executable credit"
    ],
    "lesson": "Gives a teacher verifier or state information the student will not have at deployment, adding a reverse-KL term — directly relevant when execution evidence is train-time only.",
    "url": "https://arxiv.org/abs/2602.04942"
  },
  {
    "title": "Single-Rollout Asynchronous Optimization for Agentic Reinforcement Learning",
    "year": "2026",
    "venue": "arXiv",
    "group": "Post-training",
    "groups": [
      "Post-training"
    ],
    "tags": [
      "Rollout scheduling & sampler consistency"
    ],
    "lesson": "Asynchronous single-rollout optimization that keeps trainer throughput high without a large synchronous batch.",
    "url": "https://arxiv.org/abs/2607.07508"
  },
  {
    "title": "Why We No Longer Evaluate SWE-bench Verified",
    "year": "2026",
    "venue": "Resource",
    "group": "Validity",
    "groups": [
      "Validity"
    ],
    "tags": [
      "Benchmark audits & retired claims",
      "Benchmark"
    ],
    "lesson": "Audit of 138 difficult tasks by at least six engineers each: at least 59.4% materially defective (35.5% too-narrow tests, 18.8% too-wide), plus contamination evidence — the benchmark was withdrawn.",
    "url": "https://openai.com/index/why-we-no-longer-evaluate-swe-bench-verified/"
  },
  {
    "title": "Separating Signal from Noise in Coding Evaluations",
    "year": "2026",
    "venue": "Resource",
    "group": "Validity",
    "groups": [
      "Validity"
    ],
    "tags": [
      "Benchmark audits & retired claims"
    ],
    "lesson": "Audit of the 731-task public SWE-bench Pro split: 200 flagged automatically and 249 by human review, leading to an estimate that about 30% were broken and the recommendation withdrawn.",
    "url": "https://openai.com/index/separating-signal-from-noise-coding-evaluations/"
  },
  {
    "title": "SWE-Pruner: Repository Context Pruning for Software Engineering Agents",
    "year": "2026",
    "venue": "arXiv",
    "group": "Data Systems",
    "groups": [
      "Data Systems"
    ],
    "tags": [
      "Context management for long-horizon agents"
    ],
    "lesson": "Prunes repository context against the current coding objective, saving 23–54% of tokens on multi-turn tasks while improving success in the reported settings.",
    "url": "https://arxiv.org/abs/2601.16746"
  },
  {
    "title": "Context Pruning for Coding Agents via Multi-Rubric Latent Reasoning",
    "year": "2026",
    "venue": "arXiv",
    "group": "Data Systems",
    "groups": [
      "Data Systems"
    ],
    "tags": [
      "Context management for long-horizon agents"
    ],
    "lesson": "Models code relevance under multiple rubrics to prune context while retaining structural evidence, winning 12 of 16 reported multi-turn comparisons.",
    "url": "https://arxiv.org/abs/2605.15315"
  },
  {
    "title": "BenchEvolver: Frontier Task Synthesis via Solution-Centric Evolution",
    "year": "2026",
    "venue": "arXiv",
    "group": "Further Reading",
    "groups": [
      "Further Reading"
    ],
    "tags": [
      "task synthesis"
    ],
    "lesson": "Evolves tasks from reference solutions to keep frontier difficulty as the policy improves",
    "url": "https://arxiv.org/abs/2606.01286"
  },
  {
    "title": "Meta-Task: Turning Terminal Task Synthesis into a Terminal Task for Scalable Agent Training",
    "year": "2026",
    "venue": "arXiv",
    "group": "Further Reading",
    "groups": [
      "Further Reading"
    ],
    "tags": [
      "task synthesis"
    ],
    "lesson": "Turns terminal task synthesis itself into a terminal task, so generate–execute–repair–filter traces become the training signal",
    "url": "https://arxiv.org/abs/2607.27929"
  },
  {
    "title": "PostTrain Arena",
    "year": "2026",
    "venue": "Resource",
    "group": "Further Reading",
    "groups": [
      "Further Reading"
    ],
    "tags": [
      "benchmark"
    ],
    "lesson": "The complementary two-sided evaluation: environment authors are scored on whether their tasks produce transferable learning",
    "url": "https://posttrain.com/"
  },
  {
    "title": "Scaling LLM Agent Learning with Data Synthesis: A Comprehensive Survey",
    "year": "2026",
    "venue": "Resource",
    "group": "Further Reading",
    "groups": [
      "Further Reading"
    ],
    "tags": [
      "survey"
    ],
    "lesson": "The general cross-domain companion to this list: classifies task specifications, trajectories, feedback and environments outside coding",
    "url": "https://openreview.net/forum?id=pQYwkpYmLy"
  },
  {
    "title": "Towards Long-Horizon Agents: A Survey",
    "year": "2026",
    "venue": "Resource",
    "group": "Further Reading",
    "groups": [
      "Further Reading"
    ],
    "tags": [
      "survey"
    ],
    "lesson": "The broadest system framing across model, harness, environment and evaluation; useful as scope context for where coding agents sit",
    "url": "https://long-horizon-agents.github.io/"
  },
  {
    "title": "Large Language Model-Based Agents for Software Engineering: A Survey",
    "year": "2024",
    "venue": "arXiv",
    "group": "Further Reading",
    "groups": [
      "Further Reading"
    ],
    "tags": [
      "survey"
    ],
    "lesson": "The architecture-and-application survey that predates the data-centric view taken here",
    "url": "https://arxiv.org/abs/2409.02977"
  }
];
