# Locust Load Testing

This Locust test suite provides load testing tools for Digital Collections, offering capability of measuring performance impact of code changes.

## Table of Contents

- [Overview](#overview)
- [Setup Instructions](#setup-instructions)
- [Developer Guidance](#developer-guidance)
- [Test Scenarios](#test-scenarios)
- [Load Profiles](#load-profiles)
- [Testing with LoadForge](#testing-with-loadforge)
- [Future Considerations: CI Automation](#future-considerations-ci-automation)
- [References](#references)

---

## Overview

- **Tool:** [Locust](https://locust.io/) (Python-based load testing)
- **Primary Use:** Run locally for development and performance comparison
- **Key Features:** Simulates realistic usage of all pages

---

## Setup Instructions
---

> **Note:**
> The scripts in this test suite are written in Python. Therefore, the creation of a dedicated virtual environment in the `locust` folder is highly recommended to ensure:
> - Isolatation of load testing dependencies from the rest of the project.
> - Avoidance of dependency conflicts with the main application or other Python virtual environments that may exist.
> - Improved reproducibility of results by keeping a stable, dedicated environment.
> - Enabling of easy cleanup by removing the virtual environment when no longer needed.


### 1. Create and Activate a Virtual Environment

Create and activate a virtual environment in the `locust` folder:

```bash
locust % python3 -m venv .venv
locust % source .venv/bin/activate
```

### 2. Install Dependencies

```bash
locust % pip install -r requirements.txt
```

### 3. Run Locust

A typical Locust command that gets a load test set up to run looks like:
```
locust -f <locustfile.py> -u <num_users> -r <spawn_rate> --host <target_host> --run-time <duration>
```
Or simply:
```
locust
```
`-f <locustfile.py>` is not needed when the script is named `locustfile.py` but the option is required otherwise (as it is with this test suite).

After executing either command, go to [localhost:8089](http://localhost:8089) in a browser. From there, set the desired test parameters then hit Start.
- Using the longer command above just loads the web UI with the fields already set.
- There is a `--headless` option that can be used to keep everything contained within the terminal for simpler and faster test execution.

---

## Developer Guidance

- Point to a local instance of the application to assess performance impact of code changes before publishing them.
  - For example, run a test in the latest qa branch then run the same one using the same parameters in a branch containing new code, noting whether any significant differences in results exist between the two identical test runs.
- The test suite is modular; add additional test scripts as desired.

---

## Test Scenarios
The table below lists the pages in which test scripts currently exist for (found within the `locustfiles` folder).

| Endpoint         | Test script              | Scenarios                                                                |
|------------------|--------------------------|--------------------------------------------------------------------------|
| Collection page  | test_collection_page.py  | Request random collection page                                           |
| Collections page | test_collections_page.py | Collections root, pagination, searching, and sorting                     |
| Division page    | test_division_page.py    | Request random division page                                             |
| Divisions page   | test_divisions_page.py   | Request divisions page                                                   |
| Home page        | test_home_page.py        | Request home page                                                        |
| Item page        | test_item_page.py        | Request item page using various types of items                           |
| Search page      | test_search_page.py      | Basic search queries w/ pagination, empty search, filtering, and sorting |
| Swimlane page    | test_swimlane_page.py    | Request random swimlane page                                             |

---

## Load Profiles
The table below details suggested test parameters to use for simulating live traffic for varying scenarios.

| Profile      | Users | Spawn Rate | Duration | Purpose                                                |
|--------------|-------|------------|----------|--------------------------------------------------------|
| Baseline     | 10    | 0.0333     | 10 min   | Establish baseline performance at low volume           |
| Peak Avg     | 170   | 0.3778     | 15 min   | Simulate average peak usage                            |
| Stress       | 1000  | 1.1111     | 30 min   | Determine maximum capacity and identify bottlenecks    |

> **Tip:** For quick comparisons, run short tests with a moderate user count (e.g. somewhere between Baseline and Peak Avg) and a high spawn rate (e.g. 10.0). Avoid tests that are so short that outliers distort results.

---

## Testing with LoadForge

Formal performance testing for the new Digital Collections application took place throughout the DC Facelift project throughout its various phases. The load test service [LoadForge](https://docs.loadforge.com/introduction) was used for increased reliability and confidence in test results over local testing, as concurrent users get generated using a distributed cloud network.

Past test results and analysis using LoadForge can be found in: [DC Facelift Performance Testing](https://docs.google.com/document/d/196-OdgspFEbvb5VXidIwc5Fa1lK-i9XkHdWhAEH4dKo/edit?usp=sharing)

> ℹ️&nbsp;&nbsp;To request access to LoadForge, ask a member of the QA team.

## Future Considerations: CI Automation

Automating load tests in CI is a potentially valuable future enhancement. Benefits include:
- Early detection of performance regressions before code is merged
- Rapid feedback on the impact of code changes
- Performance metrics tracked over time
- Performance trends linked to particular code changes
- Reduction of manual testing effort and improved reliability of releases

## References
- [Locust documentation](https://docs.locust.io/en/stable/)
- [Performance testing standards](https://github.com/NYPL/engineering-general/blob/main/standards/performance-testing.md)

---
