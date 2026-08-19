(function () {
  "use strict";

  var header = document.querySelector("[data-header]");
  var menuButton = document.querySelector(".menu-button");
  var menu = document.getElementById("site-menu");
  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".nav-links a"));

  function closeMenu() {
    if (!menuButton || !menu) return;
    menuButton.setAttribute("aria-expanded", "false");
    menu.classList.remove("open");
    document.body.classList.remove("menu-open");
  }

  if (menuButton && menu) {
    menuButton.addEventListener("click", function () {
      var open = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!open));
      menu.classList.toggle("open", !open);
      document.body.classList.toggle("menu-open", !open);
    });
    navLinks.forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
        closeMenu();
        menuButton.focus();
      }
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth > 900) closeMenu();
    }, { passive: true });
  }

  function updateHeader() {
    if (header) header.classList.toggle("scrolled", window.scrollY > 18);
  }
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  var revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var revealObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -40px" });
    revealItems.forEach(function (item) { revealObserver.observe(item); });
  } else {
    revealItems.forEach(function (item) { item.classList.add("visible"); });
  }

  var sections = Array.prototype.slice.call(document.querySelectorAll("main section[id]"));
  if ("IntersectionObserver" in window) {
    var activeObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        navLinks.forEach(function (link) {
          var active = link.getAttribute("href") === "#" + entry.target.id;
          link.classList.toggle("active", active);
          if (active) {
            link.setAttribute("aria-current", "location");
          } else {
            link.removeAttribute("aria-current");
          }
        });
      });
    }, { threshold: 0.12, rootMargin: "-20% 0px -65%" });
    sections.forEach(function (section) { activeObserver.observe(section); });
  }

  var lightbox = document.getElementById("figure-lightbox");
  var lightboxImage = lightbox ? lightbox.querySelector("img") : null;
  var lightboxClose = lightbox ? lightbox.querySelector(".lightbox-close") : null;
  var lightboxTrigger = null;

  function closeLightbox() {
    if (!lightbox) return;
    if (typeof lightbox.close === "function") {
      lightbox.close();
    } else {
      lightbox.removeAttribute("open");
    }
    if (lightboxTrigger) lightboxTrigger.focus();
  }

  document.querySelectorAll("[data-lightbox]").forEach(function (trigger) {
    trigger.addEventListener("click", function () {
      if (!lightbox || !lightboxImage) return;
      lightboxTrigger = trigger;
      var path = trigger.getAttribute("data-lightbox");
      lightboxImage.src = path;
      lightboxImage.alt = trigger.closest("figure") && trigger.closest("figure").querySelector("img")
        ? trigger.closest("figure").querySelector("img").alt
        : "Expanded survey figure";
      if (typeof lightbox.showModal === "function") {
        lightbox.showModal();
      } else {
        lightbox.setAttribute("open", "");
      }
    });
  });
  if (lightboxClose) {
    lightboxClose.addEventListener("click", closeLightbox);
  }
  if (lightbox) {
    lightbox.addEventListener("click", function (event) {
      if (event.target === lightbox) closeLightbox();
    });
    lightbox.addEventListener("close", function () {
      if (lightboxImage) lightboxImage.removeAttribute("src");
      lightboxTrigger = null;
    });
  }

  var copyButton = document.getElementById("copy-bibtex");
  var bibtex = document.getElementById("bibtex");
  var copyStatus = document.getElementById("copy-status");

  function setCopyStatus(message) {
    if (!copyStatus) return;
    copyStatus.textContent = message;
    window.setTimeout(function () { copyStatus.textContent = ""; }, 2200);
  }

  if (copyButton && bibtex) {
    copyButton.addEventListener("click", function () {
      var value = bibtex.textContent;
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(value).then(function () {
          setCopyStatus("Copied to clipboard.");
        }).catch(function () {
          setCopyStatus("Select the BibTeX block to copy.");
        });
      } else {
        var area = document.createElement("textarea");
        area.value = value;
        area.style.position = "fixed";
        area.style.opacity = "0";
        document.body.appendChild(area);
        area.select();
        try {
          document.execCommand("copy");
          setCopyStatus("Copied to clipboard.");
        } catch (error) {
          setCopyStatus("Select the BibTeX block to copy.");
        }
        area.remove();
      }
    });
  }

  var papers = [
    {
      title: "SWE-bench: Can Language Models Resolve Real-World GitHub Issues?",
      year: "2024",
      venue: "ICLR",
      group: "Benchmarks",
      tags: ["issue repair", "repository", "tests"],
      lesson: "Established the repository snapshot + issue + executable regression test as a reusable evaluation unit.",
      url: "https://arxiv.org/abs/2310.06770"
    },
    {
      title: "SWE-bench-Live",
      year: "2025",
      venue: "Project",
      group: "Benchmarks",
      tags: ["rolling", "freshness", "evaluation"],
      lesson: "Continuously refreshed tasks make benchmark freshness an operational property rather than a one-time split.",
      url: "https://github.com/microsoft/swe-bench-live"
    },
    {
      title: "SWE-rebench: Automated Task Collection and Decontaminated Evaluation",
      year: "2025",
      venue: "arXiv",
      group: "Benchmarks",
      tags: ["time split", "environment", "decontamination"],
      lesson: "Automated setup, temporal separation, and versioned collection can expand both training arenas and held-out evaluation.",
      url: "https://arxiv.org/abs/2505.20411"
    },
    {
      title: "Multi-SWE-bench: A Multilingual Benchmark for Issue Resolving",
      year: "2025",
      venue: "arXiv",
      group: "Benchmarks",
      tags: ["multilingual", "issue repair", "RL data"],
      lesson: "Language diversity also changes dependencies, toolchains, and environment reliability—not only prompt language.",
      url: "https://arxiv.org/abs/2504.02605"
    },
    {
      title: "PostTrainBench: Can LLM Agents Automate LLM Post-Training?",
      year: "2026",
      venue: "Project",
      group: "Benchmarks",
      tags: ["AI R&D", "data choice", "checkpoint"],
      lesson: "The agent itself becomes a data operator that selects corpora, recipes, compute, and the final trained artifact.",
      url: "https://posttrainbench.com/"
    },
    {
      title: "Training Software Engineering Agents and Verifiers with SWE-Gym",
      year: "2024",
      venue: "arXiv",
      group: "Task Factory",
      tags: ["issue/PR", "arena", "verifier"],
      lesson: "Evaluation-style repository tasks can become training environments only after a new held-out boundary is created.",
      url: "https://arxiv.org/abs/2412.21139"
    },
    {
      title: "R2E-Gym: Procedural Environments and Hybrid Verifiers",
      year: "2025",
      venue: "arXiv",
      group: "Task Factory",
      tags: ["commit", "back-translation", "hybrid verifier"],
      lesson: "Commit-derived tasks scale when specifications, tests, and execution evidence are reconstructed together.",
      url: "https://arxiv.org/abs/2504.07164"
    },
    {
      title: "SWE-smith: Scaling Data for Software Engineering Agents",
      year: "2025",
      venue: "NeurIPS",
      group: "Task Factory",
      tags: ["mutation", "stable repo", "teacher trace"],
      lesson: "Qualify a repository environment first, then inject testable bugs and collect verified solutions.",
      url: "https://arxiv.org/abs/2504.21798"
    },
    {
      title: "SWE-Factory: Automated Issue Resolution Data and Benchmarks",
      year: "2025",
      venue: "arXiv",
      group: "Task Factory",
      tags: ["real issue", "test recovery", "F2P"],
      lesson: "Environment restoration and fail-to-pass validation are core data-generation stages, not harness afterthoughts.",
      url: "https://arxiv.org/abs/2506.10954"
    },
    {
      title: "Terminal-World: Scaling Terminal-Agent Environments via Agent Skills",
      year: "2026",
      venue: "arXiv",
      group: "Task Factory",
      tags: ["skill", "terminal", "joint synthesis"],
      lesson: "A skill can serve as the seed for jointly synthesizing a task, environment, verifier, and guideline.",
      url: "https://arxiv.org/abs/2605.20876"
    },
    {
      title: "LiteCoder-Terminal",
      year: "2026",
      venue: "arXiv",
      group: "Task Factory",
      tags: ["terminal", "adversarial verifier", "behavior"],
      lesson: "Environment synthesis, verifier red-teaming, behavior filtering, and objective routing form one data pipeline.",
      url: "https://arxiv.org/abs/2605.29559"
    },
    {
      title: "Recursive Synthesis for Long-Horizon Terminal Tasks",
      year: "2026",
      venue: "arXiv",
      group: "Task Factory",
      tags: ["recursive", "curriculum", "difficulty"],
      lesson: "Validated seeds can generate harder descendants, but novelty and verifier independence must be audited every round.",
      url: "https://arxiv.org/abs/2608.05466"
    },
    {
      title: "SWE-TRACE: Rubric Process Reward Models and Test-Time Scaling",
      year: "2026",
      venue: "arXiv",
      group: "Trajectories",
      tags: ["PRM", "step selection", "pruning"],
      lesson: "One rollout graph can yield compact demonstrations, hard negatives, process labels, RL data, and search guidance.",
      url: "https://arxiv.org/abs/2604.14820"
    },
    {
      title: "TRAJDEBUG: Tracing Error Lifecycle in Agent Trajectories",
      year: "2026",
      venue: "arXiv",
      group: "Trajectories",
      tags: ["failure", "causal attribution", "recovery"],
      lesson: "Resolved, manifest, and latent errors should not inherit the same terminal label.",
      url: "https://arxiv.org/abs/2608.06346"
    },
    {
      title: "daVinci-Agency: Unlocking Long-Horizon Agency Data-Efficiently",
      year: "2026",
      venue: "arXiv",
      group: "Trajectories",
      tags: ["PR chain", "human trace", "long horizon"],
      lesson: "Fewer information-dense dependency chains can carry more useful agency structure than flat transcript volume.",
      url: "https://arxiv.org/abs/2602.02619"
    },
    {
      title: "CompactionRL: Reinforcement Learning with Context Compaction",
      year: "2026",
      venue: "arXiv",
      group: "Trajectories",
      tags: ["context", "compaction", "policy action"],
      lesson: "Compaction can be learned as a policy action, distinct from offline trace pruning and immutable raw storage.",
      url: "https://arxiv.org/abs/2607.05378"
    },
    {
      title: "Klear-AgentForge: Forging Agentic Intelligence through Posttraining Scaling",
      year: "2025",
      venue: "arXiv",
      group: "Post-training",
      tags: ["agentic SFT", "multi-turn RL", "merge"],
      lesson: "Agentic demonstrations, online environments, and capability-preserving merging can be staged as separate data regimes.",
      url: "https://arxiv.org/abs/2511.05951"
    },
    {
      title: "SkyRL-Agent: Efficient RL Training for Multi-Turn LLM Agents",
      year: "2025",
      venue: "arXiv",
      group: "Post-training",
      tags: ["asynchronous RL", "throughput", "on-policy"],
      lesson: "Long-environment RL needs rollout infrastructure, but higher throughput does not remove stale-policy or reward-noise risk.",
      url: "https://arxiv.org/abs/2511.16108"
    },
    {
      title: "One Tool Is Enough: RL for Repository-Level LLM Agents",
      year: "2025",
      venue: "arXiv",
      group: "Post-training",
      tags: ["repository", "RLVR", "action interface"],
      lesson: "A constrained action interface can simplify online RL while making harness transfer an explicit evaluation question.",
      url: "https://arxiv.org/abs/2512.20957"
    }
  ];

  var paperGrid = document.getElementById("paper-grid");
  var paperCount = document.getElementById("paper-count");
  var paperEmpty = document.getElementById("paper-empty");
  var searchInput = document.getElementById("paper-search");
  var filterButtons = Array.prototype.slice.call(document.querySelectorAll("[data-paper-filter]"));
  var currentFilter = "All";

  function paperCard(paper) {
    var card = document.createElement("article");
    card.className = "paper-card";

    var meta = document.createElement("div");
    meta.className = "paper-meta";
    meta.innerHTML = '<span class="paper-group">' + paper.group + '</span><span>' + paper.venue + " · " + paper.year + "</span>";

    var title = document.createElement("h3");
    title.textContent = paper.title;

    var lesson = document.createElement("p");
    lesson.textContent = paper.lesson;

    var tags = document.createElement("div");
    tags.className = "paper-tags";
    paper.tags.forEach(function (tag) {
      var item = document.createElement("span");
      item.textContent = tag;
      tags.appendChild(item);
    });

    var link = document.createElement("a");
    link.className = "paper-link";
    link.href = paper.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "Open source ↗";

    card.appendChild(meta);
    card.appendChild(title);
    card.appendChild(lesson);
    card.appendChild(tags);
    card.appendChild(link);
    return card;
  }

  function renderPapers() {
    if (!paperGrid) return;
    var query = searchInput ? searchInput.value.trim().toLowerCase() : "";
    var visible = papers.filter(function (paper) {
      var groupMatches = currentFilter === "All" || paper.group === currentFilter;
      var haystack = [paper.title, paper.group, paper.lesson, paper.venue, paper.year].concat(paper.tags).join(" ").toLowerCase();
      return groupMatches && (!query || haystack.indexOf(query) !== -1);
    });

    paperGrid.textContent = "";
    visible.forEach(function (paper) { paperGrid.appendChild(paperCard(paper)); });
    if (paperCount) paperCount.textContent = String(visible.length);
    if (paperEmpty) paperEmpty.hidden = visible.length > 0;
  }

  filterButtons.forEach(function (button) {
    button.setAttribute("aria-pressed", String(button.classList.contains("active")));
    button.addEventListener("click", function () {
      currentFilter = button.getAttribute("data-paper-filter") || "All";
      filterButtons.forEach(function (item) {
        var active = item === button;
        item.classList.toggle("active", active);
        item.setAttribute("aria-pressed", String(active));
      });
      renderPapers();
    });
  });

  if (searchInput) searchInput.addEventListener("input", renderPapers);

  document.querySelectorAll("[data-filter-link]").forEach(function (link) {
    link.addEventListener("click", function () {
      var requested = link.getAttribute("data-filter-link");
      var target = filterButtons.find(function (button) {
        return button.getAttribute("data-paper-filter") === requested;
      });
      if (target) {
        currentFilter = requested;
        filterButtons.forEach(function (button) {
          var active = button === target;
          button.classList.toggle("active", active);
          button.setAttribute("aria-pressed", String(active));
        });
        renderPapers();
      }
    });
  });

  renderPapers();
}());
