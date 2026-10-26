# Theresa’s Women and Child Clinic

A production-ready website for **Theresa’s Women and Child Clinic**: women’s health, maternal care, children’s health, and a Kids Corner with original poems, rhymes, and two playable games.

The visual direction is inspired by a set of colour-coded care rooms — blush, sunshine, sky, and warm sand — and translated into a berry-plum, teal, coral, and yellow brand. It is not a photograph of another clinic, and it does not reuse that clinic’s artwork.

## Requirements

- Node.js 20 or newer
- npm

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Script | Purpose |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript check |

## Environment variables

Copy `.env.example` to `.env.local`. All variables are optional.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL for metadata, sitemap, and Open Graph |
| `NEXT_PUBLIC_CLINIC_PHONE` | Published telephone number |
| `NEXT_PUBLIC_CLINIC_EMAIL` | Published email address |
| `NEXT_PUBLIC_CLINIC_ADDRESS` | Published street address |
| `NEXT_PUBLIC_CLINIC_HOURS` | Published opening hours |

Leave a value blank if the clinic has not confirmed it. The site hides or labels missing contact details instead of inventing them.

There is no database and no secret key. The appointment form is a front-end demonstration.

## Pages

- `/` Home
- `/about` About Us
- `/womens-health` Women’s Health
- `/childrens-health` Children’s Health
- `/our-team` Our Care Team
- `/patient-guide` Patient and Parent Guide
- `/kids-corner` Kids Corner
- `/contact` Contact and Appointments

## Kids Corner

Two original poems, two original rhymes, and two games:

- The Little Seed
- My Brave Little Heart, with read-aloud where the browser supports speech synthesis
- Wash, Wash, Little Hands
- Stretch Up to the Sky
- Feed the Hungry Giraffe (six questions)
- Rainbow Colour Hunt (six rounds)

Speech starts only after a button press and is cancelled when the control unmounts. Games keep score in the browser only.

## Still to supply

Before treating the site as the clinic’s final public information, confirm and add:

- A more precise street address inside Ashongman Estate, if one should be published
- Verified care-team names, roles, biographies, credentials, and photographs
- Final mission and vision wording, editable in `data/site-config.ts`
- Social media accounts, if they should be linked
- A real appointment endpoint, if the enquiry form should send messages

Do not add fictional clinicians or stock photos presented as staff.

## Appointment form

After validation, the form tells the visitor that the enquiry was checked in the demonstration only. It has not been sent, and no appointment has been booked.

## Deployment

The site is a standard Next.js App Router project and can be deployed to Vercel or any Node host that runs `npm run build` and `npm run start`. It has not been deployed from this repository setup by itself.

Set `NEXT_PUBLIC_SITE_URL` to the public URL before going live so the sitemap and social metadata point at the right place.
