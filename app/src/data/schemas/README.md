# Schemas for DCFL <-> NYPL Collections API connections

Helpful documents:
[BRD](https://docs.google.com/document/d/1MHVFDTAOmDFo9S53SH5IM4zAhVNu9RcUSeGWvS5FZuQ/edit?tab=t.0)
[Field and Query Parameters](https://docs.google.com/document/d/1_HDSzW5ToWf6ariAm7G0VWoUTvPBCqbq7q-9gInqQiM/edit?tab=t.0)
[Phase 3 Backend Requirements](https://docs.google.com/document/d/1S8Ww89LquPvkQeAou4MRmYNsi99y3X5FX5ZO0S4MOGI/edit?tab=t.0#heading=h.yvtsqvimdeo2)

## Phase 2
### /collections
schema route: /api/schema/collections
pages used:
  - /collections
  - /collections/lane/:slug

## Phase 3
### /search
schema route: /api/schema/search

pages used: 
  - /search
  - /collections:uuid

### /collections/:uuid
schema route: /api/schema/collections/:uuid

pages used:
  - /collections/:uuid