# EnviroCore

EnviroCore is the public site for environmental engineering and management services.

Primary domain: https://envirocore-emc.me/

## Deployment

- GitHub Pages is configured for the custom domain through [CNAME](CNAME).
- The site metadata now points canonical traffic at the custom domain.
- If the domain is not live yet, update DNS for `envirocore-emc.me` to GitHub Pages and keep the custom domain set in repository Pages settings.

## Local development

- `npm start` runs the local site.
- `npm run build` produces the production bundle.