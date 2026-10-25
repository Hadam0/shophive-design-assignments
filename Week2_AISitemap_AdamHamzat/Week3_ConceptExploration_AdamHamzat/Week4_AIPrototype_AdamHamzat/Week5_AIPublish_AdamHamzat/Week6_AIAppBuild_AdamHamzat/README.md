# ShopHive: Sign-up Flow (Week 6: AI App Build)

A working sign-up flow for the ShopHive marketplace app, built from my Figma design.

**Name:** Adam Hamzat
**Live URL:** YOUR LIVE LINK HERE
**Figma design:** https://www.figma.com/design/UwaeIAxZWKL9vcxBfsEGLA/FLEXISAF (page: Page 5)

## Tool used
Claude (AI assistant by Anthropic) generated the app code from my Figma design. I did not use Lovable. Authentication and the database use Supabase.

## What it does
1. Splash and Welcome screens, matching the Figma design
2. Sign up with name, email and password: validation, password strength meter, show/hide password, terms checkbox
3. Real authentication (Supabase Auth): create an account, log in, log out, forgot password and reset
4. Real database (Supabase Postgres): after sign-up the user chooses a delivery state and city and their interests, which are saved to a `profiles` table
5. A final screen reads the profile back from the database
6. Row Level Security: each user can only read and change their own profile

## Tech
- Plain HTML, CSS and JavaScript (`index.html`), no build step
- Supabase JS library included locally (`supabase.js`)
- Supabase (auth + Postgres), hosted on Netlify

## Files
- `index.html`: the app
- `supabase.js`, `26.supabase.js`: Supabase client library (v2.39.7)
- `supabase-setup.sql`: creates the `profiles` table and security rules

## Not included
- Phone number and OTP verification (needs an SMS provider)
- Google sign-in (shown as "coming soon")
- The 3-screen onboarding carousel
