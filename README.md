# Juan Pablo Atal - Academic Website

Static professional website for [Juan Pablo Atal](https://juanpabloatal.github.io). It is designed to deploy directly through GitHub Pages with no build step.

## Local preview

From this repository, run:

```zsh
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Add local assets before publishing

Place these files at the paths referenced by the site:

- `assets/files/pic2.jpg`
- `assets/files/Juan-Pablo-Atal-CV.pdf`
- PDFs for the research links listed in `index.html`

The current paper links intentionally point to repository-local PDFs so the site remains independent of Dropbox and Google Drive once those files are added.

## Publish when ready

1. Push the repository to GitHub.
2. Make it public, or use a GitHub plan that supports Pages for private repositories.
3. In **Settings → Pages**, choose **Deploy from a branch**, then select `main` and `/ (root)`.
