# Schemas for DCFL <-> NYPL Collections API

Helpful documents:
[BRD](https://docs.google.com/document/d/1MHVFDTAOmDFo9S53SH5IM4zAhVNu9RcUSeGWvS5FZuQ/edit?tab=t.0)
[Field and Query Parameters](https://docs.google.com/document/d/1_HDSzW5ToWf6ariAm7G0VWoUTvPBCqbq7q-9gInqQiM/edit?tab=t.0)
[Phase 3 Backend Requirements](https://docs.google.com/document/d/1S8Ww89LquPvkQeAou4MRmYNsi99y3X5FX5ZO0S4MOGI/edit?tab=t.0#heading=h.yvtsqvimdeo2)

## Phase 2

### /collections endpoint

schema route: /api/schema/collections
DCFL pages using it:

- /collections
- /collections/lane/:slug

## Phase 3

### /search endpoint

schema route: /api/schema/search

DCFL pages using it:

- /search
- /collections/:uuid

### /collections/:uuid endpoint

schema route: /api/schema/collections/:uuid

DCFL pages using it:

- /collections/:uuid

### /collections/:uuid/children endpoint

schema route: /api/schema/collections/:uuid/children

DCFL pages using it:

- /collections/:uuid
