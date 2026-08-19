(function () {
  "use strict";

  var header = document.querySelector("[data-header]");
  var menuButton = document.querySelector(".menu-button");
  var menu = document.getElementById("site-menu");
  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".nav-links a"));

  function setupCursorComet() {
    var canvas = document.querySelector(".cursor-comet");
    if (!canvas || !canvas.getContext || !window.matchMedia) return;

    var finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    var context = canvas.getContext("2d");
    if (!context) return;

    var MAX_TRAIL = 34;
    var MAX_SPARKS = 90;
    var ACTIVE_SELECTOR = "a, button, [role='button'], article, figure, .audit-callout, .benchmark-ladder, .factory-flow, .feature-figure, .hero-card";
    var currentX = 0;
    var currentY = 0;
    var targetX = 0;
    var targetY = 0;
    var viewportWidth = 0;
    var viewportHeight = 0;
    var frame = 0;
    var burstTick = 0;
    var started = false;
    var inside = false;
    var active = false;
    var enabled = false;
    var trail = [];
    var sparks = [];

    function isEligible() {
      return finePointer.matches && !reducedMotion.matches;
    }

    function hideComet(clearParticles) {
      inside = false;
      active = false;
      canvas.classList.remove("visible");
      if (clearParticles) {
        trail = [];
        sparks = [];
        if (frame) {
          window.cancelAnimationFrame(frame);
          frame = 0;
        }
        context.clearRect(0, 0, viewportWidth, viewportHeight);
      }
    }

    function resizeCanvas() {
      var ratio = Math.min(window.devicePixelRatio || 1, 2);
      viewportWidth = window.innerWidth;
      viewportHeight = window.innerHeight;
      canvas.width = Math.round(viewportWidth * ratio);
      canvas.height = Math.round(viewportHeight * ratio);
      canvas.style.width = viewportWidth + "px";
      canvas.style.height = viewportHeight + "px";
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      trail = [];
      sparks = [];
      if (inside && started) requestDraw();
    }

    function glow(x, y, radius, core, halo) {
      var gradient = context.createRadialGradient(x, y, 0, x, y, radius);
      gradient.addColorStop(0, core);
      gradient.addColorStop(0.3, halo);
      gradient.addColorStop(1, "rgba(47, 95, 224, 0)");
      context.fillStyle = gradient;
      context.beginPath();
      context.arc(x, y, radius, 0, Math.PI * 2);
      context.fill();
    }

    function requestDraw() {
      if (enabled && !frame) frame = window.requestAnimationFrame(drawComet);
    }

    function drawComet() {
      frame = 0;
      if (!enabled) return;

      var dx = targetX - currentX;
      var dy = targetY - currentY;
      var speed = Math.hypot(dx, dy);
      var moving = speed > 0.18;
      currentX += dx * 0.24;
      currentY += dy * 0.24;

      if (inside && moving) {
        trail.unshift({
          x: currentX,
          y: currentY,
          life: 1,
          size: 2.2 + Math.random() * 2.4,
          wobble: (Math.random() - 0.5) * 5
        });
        if (trail.length > MAX_TRAIL) trail.length = MAX_TRAIL;

        burstTick += 1;
        if (speed > 7 && burstTick % 3 === 0) {
          var direction = Math.atan2(dy, dx) + Math.PI;
          var amount = Math.min(7, 3 + Math.floor(speed / 22));
          for (var i = 0; i < amount; i += 1) {
            var angle = direction + (Math.random() - 0.5) * 2.2;
            var force = 1.2 + Math.random() * Math.min(5.5, 1.8 + speed * 0.045);
            sparks.push({
              x: currentX - dx * 0.025 + (Math.random() - 0.5) * 6,
              y: currentY - dy * 0.025 + (Math.random() - 0.5) * 6,
              vx: Math.cos(angle) * force,
              vy: Math.sin(angle) * force,
              life: 0.72 + Math.random() * 0.28,
              size: 1.1 + Math.random() * 2.2
            });
          }
          if (sparks.length > MAX_SPARKS) {
            sparks.splice(0, sparks.length - MAX_SPARKS);
          }
        }
      }

      trail.forEach(function (point) {
        point.life *= moving ? 0.955 : 0.91;
        point.y += point.wobble * 0.018;
        point.size *= 0.994;
      });
      trail = trail.filter(function (point, index) {
        return point.life > 0.035 && index < MAX_TRAIL;
      });

      sparks.forEach(function (spark) {
        spark.x += spark.vx;
        spark.y += spark.vy;
        spark.vx *= 0.94;
        spark.vy *= 0.94;
        spark.life *= 0.89;
        spark.size *= 0.985;
      });
      sparks = sparks.filter(function (spark) { return spark.life > 0.035; });

      context.clearRect(0, 0, viewportWidth, viewportHeight);
      context.save();
      context.globalCompositeOperation = "lighter";

      if (trail.length > 1) {
        var tail = trail[trail.length - 1];
        var streak = context.createLinearGradient(currentX, currentY, tail.x + 0.01, tail.y + 0.01);
        streak.addColorStop(0, "rgba(91, 141, 239, 0.72)");
        streak.addColorStop(0.45, "rgba(47, 95, 224, 0.28)");
        streak.addColorStop(1, "rgba(30, 58, 138, 0)");
        context.strokeStyle = streak;
        context.lineWidth = active ? 5 : 3.5;
        context.lineCap = "round";
        context.lineJoin = "round";
        context.beginPath();
        context.moveTo(currentX, currentY);
        trail.forEach(function (point, index) {
          if (index % 2 === 0) context.lineTo(point.x, point.y);
        });
        context.stroke();
      }

      trail.forEach(function (point, index) {
        context.globalAlpha = point.life * (1 - index / Math.max(trail.length, 1)) * 0.72;
        glow(point.x, point.y, point.size * 3, "rgba(138, 181, 255, 0.85)", "rgba(47, 95, 224, 0.24)");
      });

      sparks.forEach(function (spark) {
        context.globalAlpha = spark.life * 0.9;
        glow(spark.x, spark.y, spark.size * 3.8, "rgba(255, 255, 255, 0.96)", "rgba(91, 141, 239, 0.34)");
        context.fillStyle = "rgba(47, 95, 224, " + Math.min(0.9, spark.life) + ")";
        context.beginPath();
        context.arc(spark.x, spark.y, Math.max(0.55, spark.size * 0.52), 0, Math.PI * 2);
        context.fill();
      });

      context.globalAlpha = inside ? 1 : 0.45;
      glow(currentX, currentY, active ? 25 : 20, "rgba(255, 255, 255, 0.98)", "rgba(91, 141, 239, 0.48)");
      glow(currentX, currentY, active ? 10 : 8, "rgba(255, 255, 255, 1)", "rgba(47, 95, 224, 0.88)");
      context.restore();

      if (moving || trail.length > 1 || sparks.length) requestDraw();
    }

    function handlePointerMove(event) {
      if (!enabled || event.pointerType === "touch") return;
      targetX = event.clientX;
      targetY = event.clientY;
      if (!started) {
        currentX = targetX;
        currentY = targetY;
        started = true;
      }
      inside = true;
      canvas.classList.add("visible");
      requestDraw();
    }

    function handlePointerOver(event) {
      if (!enabled || !(event.target instanceof Element)) return;
      active = Boolean(event.target.closest(ACTIVE_SELECTOR));
      requestDraw();
    }

    function handleLeave() {
      hideComet(false);
      requestDraw();
    }

    function handlePageExit() {
      hideComet(true);
    }

    function handleVisibility() {
      if (document.hidden) hideComet(true);
    }

    function enableComet() {
      if (enabled || !isEligible()) return;
      enabled = true;
      resizeCanvas();
      document.addEventListener("pointermove", handlePointerMove, { passive: true });
      document.addEventListener("pointerover", handlePointerOver, { passive: true });
      document.documentElement.addEventListener("mouseleave", handleLeave);
      window.addEventListener("blur", handlePageExit);
      window.addEventListener("pagehide", handlePageExit);
      window.addEventListener("resize", resizeCanvas, { passive: true });
      document.addEventListener("visibilitychange", handleVisibility);
    }

    function disableComet() {
      if (!enabled) return;
      hideComet(true);
      enabled = false;
      started = false;
      document.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerover", handlePointerOver);
      document.documentElement.removeEventListener("mouseleave", handleLeave);
      window.removeEventListener("blur", handlePageExit);
      window.removeEventListener("pagehide", handlePageExit);
      window.removeEventListener("resize", resizeCanvas);
      document.removeEventListener("visibilitychange", handleVisibility);
    }

    function updateCometPolicy() {
      if (isEligible()) {
        enableComet();
      } else {
        disableComet();
      }
    }

    if (finePointer.addEventListener) {
      finePointer.addEventListener("change", updateCometPolicy);
      reducedMotion.addEventListener("change", updateCometPolicy);
    } else {
      finePointer.addListener(updateCometPolicy);
      reducedMotion.addListener(updateCometPolicy);
    }
    updateCometPolicy();
  }

  setupCursorComet();

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
