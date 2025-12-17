import random

from locust import HttpUser, task, between

SWIMLANE_PAGE_PATH = "/collections/lane/{slug}"


class SwimlanePageUser(HttpUser):
    wait_time = between(7, 15)

    # Get a swimlane page for one of various lanes
    @task
    def swimlane_page(self):
        swimlane_slugs = [
            "recently-digitized-collections",
            "photographs",
            "prints-and-drawings",
            "maps",
            "books-and-periodicals",
            "manuscripts-and-correspondence",
            "fliers-and-ephemera",
        ]
        swimlane_slug = random.choice(swimlane_slugs)
        path = SWIMLANE_PAGE_PATH.format(slug=swimlane_slug)
        self.client.get(path)
