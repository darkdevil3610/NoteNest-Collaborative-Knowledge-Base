# TODO: Add Production-Ready Environment Configuration & Secrets Management

- [x] Create backend/.env.example with documented placeholders
- [x] Create frontend/.env.example with documented placeholder
- [x] Add validation in backend/src/index.ts for required env vars
- [x] Remove hardcoded fallback for JWT_SECRET in backend/src/middleware/auth.ts
- [x] Add validation in frontend/lib/api.ts for NEXT_PUBLIC_API_URL
- [x] Update docs/setup.md if necessary
- [x] Test backend startup with missing env vars
- [x] Verify frontend loads without errors
