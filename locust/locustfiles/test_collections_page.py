import time
import random

from locust import HttpUser, task, between

COLLECTIONS_PAGE_PATH = "/collections"

class CollectionsPageUser(HttpUser):
    wait_time = between(7, 15)

    # Get collections page
    @task(2)
    def collections_page(self):
        self.client.get(COLLECTIONS_PAGE_PATH, name="collections page")

    # Get collections pages 1 through 5
    @task(3)
    def collections_pages(self):
        for i in range(1, 6):
            page_query_param = f"page={i}"
            path = f"{COLLECTIONS_PAGE_PATH}?{page_query_param}"
            name = f"collections page {i}"
            self.client.get(path, name=name)
            time.sleep(random.randint(10, 30))  # Give user time to explore current page

    # Get collections page with one of various search terms applied
    @task(1)
    def collections_page_search(self):
        search_terms = [
            "maps",
            "music",
            "posters",
            "new york",
            "japan",
        ]
        search_term = random.choice(search_terms).replace(" ", "+")
        query_param = f"q={search_term}"
        path = f"{COLLECTIONS_PAGE_PATH}?{query_param}"
        name = f"collections search: {search_term}"
        self.client.get(path, name=name)

    # Get collections page with one of various sort options applied
    @task(1)
    def collections_page_sort(self):
        sort_options = [
            "date-desc",
            "date-asc",
            "title-desc",
            "title-asc",
        ]
        sort_option = random.choice(sort_options)
        query_param = f"sort={sort_option}"
        path = f"{COLLECTIONS_PAGE_PATH}?{query_param}"
        name = f"collections sort: {sort_option}"
        self.client.get(path, name=name)
