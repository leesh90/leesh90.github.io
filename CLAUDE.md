# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a Jekyll-based academic homepage using the Chirpy theme. The site is deployed to GitHub Pages and contains blog posts, research project descriptions, publications, and personal information for SeungHun Lee, a PhD student at Sangmyung University.

## Development Commands

### Jekyll Development Server
```bash
# Run development server
bundle exec jekyll serve -l

# Run with specific host
bundle exec jekyll serve -l -H 127.0.0.1

# Run in production mode  
JEKYLL_ENV=production bundle exec jekyll serve -l

# Using the convenience script
bash tools/run.sh

# Run with custom host
bash tools/run.sh -H 0.0.0.0

# Run in production mode
bash tools/run.sh -p
```

### Build and Test
```bash
# Build the site for production
JEKYLL_ENV=production bundle exec jekyll build

# Build and test with link checking
bash tools/test.sh

# Build with custom config
bash tools/test.sh -c "_config.yml,_config_custom.yml"
```

### Frontend Assets
```bash
# Build CSS and JavaScript assets
npm run build

# Build CSS only
npm run build:css

# Build JavaScript only  
npm run build:js

# Watch JavaScript changes during development
npm run watch:js

# Lint JavaScript
npm run lint:js

# Lint SCSS
npm run lint:scss

# Fix SCSS linting issues
npm run lint:fix:scss

# Run all tests (JS lint + SCSS lint)
npm test
```

### Bundle Management
```bash
# Install Ruby gems
bundle install

# Update gems
bundle update
```

## Site Architecture

### Core Structure
- **_config.yml**: Main site configuration including theme settings, SEO, analytics, and collections
- **_posts/**: Blog posts in Markdown format with YAML front matter
- **_projects/**: Research project descriptions using custom `project_detail` layout
- **_tabs/**: Main navigation pages (about, blog, categories, tags, projects, publications)
- **_layouts/**: HTML templates including custom `project_detail.html` layout
- **_includes/**: Reusable HTML components and partials
- **_sass/**: SCSS stylesheets organized by abstracts, base, components, layout, pages, and themes
- **_javascript/**: JavaScript modules for site functionality
- **assets/**: Static assets including images, CSS, and JavaScript output

### Content Types
- **Blog Posts**: Technical articles about AI, web crawling, and development (`_posts/`)
- **Research Projects**: Detailed project descriptions with images and buttons (`_projects/`)
- **Academic Information**: Publications, education, and research interests (`_tabs/about.md`)

### Custom Features
- Custom `project_detail` layout for research project pages
- Korean language support with localized content
- Academic publication management
- Research project showcase with image galleries
- Giscus comment system integration
- Google Analytics tracking

### Theme Customization
- Based on Jekyll Chirpy theme v7.3.1
- Custom SCSS in `_sass/pages/_project_detail.scss` 
- Custom layouts in `_layouts/project_detail.html`
- Korean language files in `_data/locales/ko-KR.yml`
- PWA enabled with offline caching

### Collections Configuration
```yaml
collections:
  tabs:
    output: true
    sort_by: order
  projects:
    output: true
    permalink: /projects/:path/
```

### Development Workflow
1. Content is written in Markdown with YAML front matter
2. Assets are processed through Jekyll and npm build tools
3. CSS is generated from SCSS and purged for optimization
4. JavaScript is bundled and minified with Rollup
5. Site is built to `_site/` directory for deployment

## File Organization Patterns

### Post Files
- Named with date prefix: `YYYY-MM-DD-title.md`
- Located in `_posts/` directory
- Use `post` layout automatically via defaults

### Project Files  
- Named with year prefix: `YYYYProject.md`
- Located in `_projects/` directory  
- Use `project_detail` layout
- Include start_date, end_date, buttons, and description in front matter

### Asset Organization
- Post images: `assets/img/posts/[post-slug]/`
- Project images: `assets/img/projects/[project-slug]/`
- Papers: `papers/` directory
- Site images: `assets/img/` root