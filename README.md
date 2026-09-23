# Environmental Risk & Finance Lab

Website for Dr. Dan Li’s Environmental Risk & Finance Lab at Florida International University. The front page uses an applications-and-approach layout, research projects have their own pages, and people, publications, news, and joining are separate sections.

The public site is meant to live at [https://erfl-fiu.github.io](https://erfl-fiu.github.io), from the repository [erfl-fiu/erfl-fiu.github.io](https://github.com/erfl-fiu/erfl-fiu.github.io). Student and project code belongs in other repositories under the [erfl-fiu](https://github.com/erfl-fiu) organization. This repository is only the website.

## Run locally

```bash
npm install
npm run dev -- -p 43123
```

`npm run build` writes a static site to `out/`. `npm run lint` checks the project.

## Edit the site

Content is typed data, not a database.


| File                      | What to edit                                                    |
| ------------------------- | --------------------------------------------------------------- |
| `content/home.ts`         | Headline, applications, and approach                            |
| `content/research.ts`     | Current and previous research, including an optional `repo` URL |
| `content/people.ts`       | Team members.                                                   |
| `content/publications.ts` | Papers, links, and abstracts                                    |
| `content/news.ts`         | One short line per event                                        |
| `content/site.ts`         | Lab name and email addresses                                    |


To add a research project, append an object to `research` in `content/research.ts`. It appears on the research index and at `/research/<slug>/`. Set `repo` to a GitHub URL when a project repository exists, for example `https://github.com/erfl-fiu/fphlm-cat-bonds`.

To add a previous student, append `{ name, role }` to `previousStudents` in `content/people.ts`. One line is enough.

To add a portrait, put an image in `public/images/people/` and set `photo` to that path, for example `"/images/people/dan-li.jpg"`. Until then the portrait is an empty square.

## Publish on GitHub Pages

1. Push this site to `erfl-fiu/erfl-fiu.github.io` on the `main` branch.
2. In that repository, open Settings → Pages and set the source to GitHub Actions.
3. The workflow in `.github/workflows/pages.yml` builds the static export and deploys it.

The site will load at `https://erfl-fiu.github.io` after the action finishes.