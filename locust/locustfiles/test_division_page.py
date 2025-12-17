import random

from locust import HttpUser, task, between

DIVISION_PAGE_PATH = "/divisions/{slug}"

class DivisionPageUser(HttpUser):
    wait_time = between(7, 15)

    # Get a random division page
    @task(1)
    def division_page(self):
        division_slugs = [
            "billy-rose-theatre-division",
            "carl-h-pforzheimer-collection-of-shelley-and-his-circle",
            "dorot-jewish-division",
            "general-research-division",
            "george-arents-collection",
            "henry-w-and-albert-a-berg-collection-of-english-and-american-literature",
            "irma-and-paul-milstein-division-of-united-states-history-local-history",
            "jerome-robbins-dance-division",
            "manuscripts-and-archives-division",
            "lionel-pincus-and-princess-firyal-map-division",
        ]
        division_slug = random.choice(division_slugs)
        path = DIVISION_PAGE_PATH.format(slug=division_slug)
        self.client.get(path)
