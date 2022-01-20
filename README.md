# Docusaurus Demo

> OBJECTIVE 

Build a docusaurus-powered site, deploy it to Azure Static Web Apps, automate builds with GitHub Actions - then use it to learn/test various features from the framework.

[![Deploy to GitHub Pages](https://github.com/nitya/docusaurus-demo/actions/workflows/deploy.yml/badge.svg)](https://github.com/nitya/docusaurus-demo/actions/workflows/deploy.yml) | [![pages-build-deployment](https://github.com/nitya/docusaurus-demo/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/nitya/docusaurus-demo/actions/workflows/pages/pages-build-deployment)

---

## 1. What is Docusaurus

Docusaurus is a framework (from Facebook/Meta) to help build single-page applications with a single focus usage: to _write and publish content_.

Key features:

 * Static site generator built with React. Born fast, accessible.
 * Markdown authoring, with [MDX](https://mdxjs.com/) components support 
 * First-class Typescript support
 * Localization support pre-configured (70 languages)
 * Built-in versioning and search support 
 * SEO friendly

Adoption Trends: 
 * Ranked #3 on [2021 Rising Stars in Static Sites](https://risingstars.js.org/2021/en#section-ssg) after Next, Astro.
 * Continuing upwards trend in [npm downloads](https://www.npmtrends.com/docusaurus-vs-@docusaurus/core)

For more details:
 - read the [docs](https://docusaurus.io/docs)
 - learn the [CLI and API](https://docusaurus.io/docs/cli)
 - review [comparison with other tools](https://docusaurus.io/docs#comparison-with-other-tools) like Docsify, Gatsby, Jekyll and more. 
 - try [Playground](https://docusaurus.io/docs/playground) to explore Docusaurus without installing anything. 
 - explore [Showcase](https://docusaurus.io/showcase) for real-world usage examples.
 - fast track [Getting Started](https://docusaurus.io/docs) with docusaurus.

---

## 2. Quick Commands

| Command | Description |
|:--- |:--- |
| `npx create-docusaurus@latest <www> classic` | Create new site in folder `www/` with classic theme (fast track) |
| `cd www; npx docusaurus start` | Preview site locally (with hot reload) |
| `cd www/src/pages; touch <newpage.md>` | Creates a new standalone page that gets hosted at route: `/newpage`. Can be created as Markdown or as React component. |
| `cd www/docs; mkdir <group>; touch <group/page-X>.md` | Creates new collection of pages at `/docs/group` consisting of all `page-X` files. Group automatically gets `Previous/Next` navigation footers and automated `Sidebar` (customizable)  |
|`cd www/blog; touch <post.md>` | Create blog post. Blogging system supports index, tags, RSS feed - withc [fronmatter](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-frontmatter) for better SEO. If post name takes form `<yyyy-mm-dd-slug.md>`, this is automatically mapped to publication date and route path.|
| `cd www; npm run build` | Builds static site (production files) in `build/` folder by default, ready for deployment. |
|`cd www; npm run serve`| Test production build locally. Explore [deployment guides](https://docusaurus.io/docs/deployment) to setup workflows to push build to relevant hosting provider. |

---

## 3. Key Features To Explore

| | |
|:---| :---|
| [Markdown Frontmatter](https://docusaurus.io/docs/docs-markdown-features#markdown-frontmatter) | Metadata added to top of Markdown pages that translates to HTML meta tags (good for SEO). See available options for [docs](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-frontmatter) and [blog](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog#markdown-frontmatter). |
| [MDX + React Components](https://docusaurus.io/docs/markdown-features/react) | Enhance Markdown with JSX syntax, allowing you to import and embed interactive content or components into pages. See [Example](https://tutorial.docusaurus.io/docs/tutorial-basics/markdown-features#mdx-and-react-components) of usage. Create [MDX Plugins](https://docusaurus.io/docs/markdown-features/plugins) for customization. |
| [Versioning](https://docusaurus.io/docs/versioning) | Helps maintain multiple versions of content (e.g., legacy, current, upcoming) - allowing older versions to be accessible even as current versions take priority.loca Try the [Versioning Tutorial](https://tutorial.docusaurus.io/docs/tutorial-extras/manage-docs-versions/)|
| [Localization - i8n](https://docusaurus.io/docs/i18n/introduction)| Setup content to support translations (with language-specific drop-down). Learn [translation workflow](https://docusaurus.io/docs/i18n/introduction#translation-workflow) and try to [translate your site](https://tutorial.docusaurus.io/docs/tutorial-extras/translate-your-site/) in this first tutorial.|
| [SEO - Search Engine Optimization](https://docusaurus.io/docs/seo) | Explore best practices to improve SEO including global meta attributes, page-specific meta attributes, robots file, rich text, structured content, sitemaps and more.|
| [Admonitions](https://docusaurus.io/docs/markdown-features/admonitions) | Enhanced syntax to support [remark](https://github.com/elviswolcott/remark-admonitions) callouts in content (note, tip, info, caution, danger) - can be used with Markdown, [MDX](https://docusaurus.io/docs/markdown-features/admonitions#admonitions-with-mdx) or [JSX](https://docusaurus.io/docs/markdown-features/admonitions#usage-in-jsx).|
| [Tabs](https://docusaurus.io/docs/markdown-features/tabs)| Enhanced Markdown feature > Tabbed Panes.|
| [Code Blocks](https://docusaurus.io/docs/markdown-features/code-blocks) | Enhanced Markdown feature > Code Highlighting .|
| [Inline TOC](https://docusaurus.io/docs/markdown-features/inline-toc) | Enhanced Markdown feature > Table Of Contents |
| [Assets](https://docusaurus.io/docs/markdown-features/assets) | Enhanced Markdown feature > Inline SVG, Themed Images, Files, etc.|
| [Math](https://docusaurus.io/docs/markdown-features/math-equations) | Enhanced Markdown feature > Math Equations.|
| [Head](https://docusaurus.io/docs/markdown-features/head-metadata) | Enhanced Markdown feature > Automatic and extensible `<head>` metadata|

---

## 4. Deployment to GitHub Pages

Let's explore [this tutorial](https://docusaurus.io/docs/deployment#deploying-to-github-pages) to see how we can deploy this site to the GitHub Pages endpoint on this repo.

| Step | Description |
|:---|:---|
| 1. [Modify docusaurus.config.js](https://docusaurus.io/docs/deployment#docusaurusconfigjs-settings)  | Add `organizationName`=user, `projectName`=repo, `deploymentBranch`=gh-pages properties. <br/>Updated `url` property to relevant github.io version for now |
| 2. [Configure publishing source for GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)| Use the _Pages_ Settings to setup a default `gh-pages` branch. This publishes the page to [https://nitya.github.io/docusaurus-demo/](https://nitya.github.io/docusaurus-demo/) |
| 3. [Setup GitHub Actions for auto-deploy](https://docusaurus.io/docs/deployment#triggering-deployment-with-github-actions) | We want this to auto-deploy build to gh-pages when new commit is made to `main/`. Follow the directions for "Same" repo - add `deploy.yml` and `test-deploy.yml` to `.github/workflows` -- commit changes! I used `www/**` for paths) and `npm` for build)  |
| 4. [Visit Actions Dashboard](https://github.com/nitya/docusaurus-demo/actions) | Commits should trigger action - verify that build/deploy works. |
| 5. [Add CNAME for Custom Domain](https://docusaurus.io/docs/deployment#github-pages-overview) | Create `CNAME` file in static directory - move configuration back to `baseUrl:'/'` and set `url` to custom domain. Note that you need to [configure DNS](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site) on your domain provider site.|

---

## 5. Deployment to Azure Static Web Apps

Learn more about [Azure Static Web Apps](https://docs.microsoft.com/en-us/azure/static-web-apps/publish-gatsby) then explore tutorials like [this one](https://dev.to/sumitkharche/deploy-a-docusaurus-app-on-azure-static-web-apps-2dpj). I'll update this section with a detailed tutorial based on my workflow when done.

| | |
|:---|:---|
| | |

---

## 6. Exploring Features!

I'll capture any notes/a-ha moments from my exploration here.

---