# Dovetail marketing coding exercise

Congratulations 🎉 Reading this page means we see potential in you
and would love to move forward and learn more about your technical side to
better understand if you'd be a good fit for the team.

We've created an exercise that's representative of the type of technical work
you'd perform in the role, and hope it will give you the opportunity to
demonstrate how you approach and solve practical development.

You should time-box the coding to 150 minutes, this allows us to
calibrate across multiple candidates.

## Getting Started

### Requirements

- Git
- Yarn
- Node >=12.22.0
- macOS >=10.15 (recommended)

### Running

First, run the development server:

```bash
yarn
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Exercise 1: Color by numbers

**Duration:** 90 minutes

The first order of business is to update the home page layout to match a new design (as closely as possible).

**Requirements**

- Update the page to match:

  ![Events Page](docs/events.png)

- Use the images and illustrations from `docs/assets/*`
- Follow responsive best practices where possible
- Optionally: Animate an element on the page e.g. parallax scroll, an illustration, or the form

**Tips**

- Use [this Figma file](https://www.figma.com/file/Uu9nT22KI1x3aCXL8PkdEp/Events-landing-page) for dimensions, colors, and fonts
- Make Git commits as you go, so we can see your stepping stones.
- We have provided @emotion but feel free to to deviate to another CSS-in-JS library if you are unfamiliar.

## Exercise 2: Form submission

**Duration:** 60 minutes

Next up you need to add support for submitting the form on the home page. There's some existing scaffolding in both the
front-end and API, but it's missing pieces. That's where you come in!

**Requirements**

- Update the front-end code to submit the following fields to the API endpoint `/api/submit`
  - Name
  - Type of event
  - Email
- Update the API located in `pages/api/submit.ts` to parse the request data and send it to a [https://requestbin.net](RequestBin)
  - The RequestBin URL should be stored as an environment variable only accessible to the API code.
- On success or error, show the corresponding UI as seen in the designs (see `docs/events_success.png`).

**Tips**

- Make Git commits as you go, so we can see your stepping stones.
- Feel free to add new dependencies, just as you would in a normal project.

## Submission

Congratulations! Treat yourself to a cookie 🍪

1. Please ensure there's a pull request which contains all your code changes. If there are multiple, please indicate which one.
2. Send us an email to let us know you're done and how much time you spent on the challenge.
3. A couple of Dovetail engineers will perform a detailed review of your submission. We'll get back in touch when we're done.

Thanks!

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
