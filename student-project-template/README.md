# WEB ATELIER (UDIT) – Student Project Template

_Critical Coding for a Better Living._

**Build a real, accessible, multilingual site—commit every week.**

This repository is the **starting point for each student’s personal project** in the WEB ATELIER (UDIT) framework. While `web-foundations` provides the canonical lessons and `professor-course-template` manages the class instance, the **Student Project Template** is where each student designs and develops their own site. Every week, students commit progress here — _one student · one repo · one project · one commit per class_.

## Purpose & Audience

- **For Students:** A personal repository to build a web project step by step, following lessons. It deploys live via GitHub Pages.
- **For Professors:** A window into each student’s weekly progress, commit history, and final project.

## Core Technologies (Deep Explanation)

### GitHub Pages

- Students enable Pages on their repo to publish their project live at a URL like `https://username.github.io/project`.
- Automatic deployment: every commit to `main` updates the live site.

### Jekyll

- Not required by students, but Pages uses Jekyll under the hood.
- A `.nojekyll` file is provided to avoid conflicts unless Jekyll is explicitly needed.

### GitHub Actions

- Optional CI workflows included:

  - **Critical CI (Student):** checks links, page weight, and accessibility.

- Encouraged: students learn how professional developers automate quality checks.

## Supporting Technologies (Overview)

- **Markdown:** for `README.md` and `project-brief.md`.
- **YAML:** in `project.yaml` to describe project metadata (title, tagline, URL, etc.).
- **Liquid:** not directly edited by students, but used in professor/course templates to display project info.
- **JSON-LD:** added automatically by templates when projects are listed in the showroom.

## Repository Structure

```plaintext
student-project-template/
├── index.html         # Homepage (starter HTML with semantic structure)
├── assets/            # Modern asset organization
│   ├── css/
│   │   └── style.css  # Main stylesheet with responsive design
│   └── js/
│       └── main.js    # JavaScript functionality
├── images/            # Image assets (keep optimized)
├── css/               # Legacy CSS (imports from assets/css/)
│   └── style.css      # Compatibility layer
├── project.yaml       # Project metadata (complete by Week 4)
├── project-brief.md   # Project concept definition (Week 2)
├── README.md          # Instructions and weekly progress log
├── .nojekyll          # Prevents Jekyll processing conflicts
└── .github/workflows/
    └── critical.yml   # Automated quality checks (CI/CD)
```

## Workflow in Practice

1. **Clone Template:** Student creates repo from this template.
2. **Week 1:** Setup repo, push first commit (README updated).
3. **Week 2:** Fill out `project-brief.md` and `project.yaml` (project definition).
4. **Weekly Commits:** Update `index.html`, CSS, JS with new lessons. Each class → one commit.
5. **Week 4:** Ensure `project.yaml` is complete; submit metadata to professor’s repo (via PR or form).
6. **Week 5+:** Continue improving project; reflect on commits.

## Scaling and Feedback

- **Commit Log:** Each commit is a trace of weekly learning.
- **Peer Review:** In Week 5, peers view each other’s projects via the course showroom.
- **CI Feedback:** Automated checks give quick signals (broken links, large assets, accessibility issues).
- **Professor Review:** Spot-checks commits or reviews final project.

## Differences from Other Repos

- `web-foundations`: shared lessons & methodology, not edited by students.
- `professor-course-template`: course-level repo with roster and showroom.
- `student-project-template`: student’s own creative space; only this repo is graded per individual.

## References

- GitHub Pages – [https://docs.github.com/en/pages](https://docs.github.com/en/pages)
- GitHub Actions – [https://docs.github.com/en/actions](https://docs.github.com/en/actions)
- Jekyll (optional background) – [https://jekyllrb.com](https://jekyllrb.com)
- Markdown Guide – [https://www.markdownguide.org](https://www.markdownguide.org)
- YAML Introduction – [https://yaml.org/start.html](https://yaml.org/start.html)
- Schema.org / JSON-LD – [https://schema.org](https://schema.org)

© 2025 Rubén Vega Balbás, PhD — WEB ATELIER (UDIT) · ORCID: <https://orcid.org/0000-0001-6862-9081>
