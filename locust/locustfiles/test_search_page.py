import time
import random

from locust import HttpUser, task, between

SEARCH_PAGE_URL = "/search/index"


class SearchPageUser(HttpUser):
    wait_time = between(7, 15)

    # Get search page with empty search
    @task(2)
    def search_page_empty_search(self):
        path = SEARCH_PAGE_URL
        name = "empty search"
        self.client.get(path, name=name)

    # Get search pages with one of various search terms applied
    @task(5)
    def search_pages_basic_search(self):
        search_terms = [
            "maps",
            "photographs",
            "books",
            "dance",
            "ellis island",
        ]
        for i in range(1, 6):
            search_term = random.choice(search_terms)
            search_term = search_term.replace(" ", "+")
            page = i
            query_string = f"?keywords={search_term}&page={page}"
            path = f"{SEARCH_PAGE_URL}{query_string}"
            name = f"search '{search_term.replace("+", " ")}' (page {page})"
            self.client.get(path, name=name)
            time.sleep(random.randint(10, 30))  # Give user time to explore current page


    # Get search page with a genre filter applied
    @task(1)
    def search_page_filter(self):
        search_term, filter_option = "maps", "Atlases"
        search_query_param = f"q={search_term}"
        filter_query_param = f"filters[genre]={filter_option}"
        query_string = f"?{search_query_param}&{filter_query_param}"
        path = f"{SEARCH_PAGE_URL}{query_string}"
        name = "filter for genre 'Atlases' on search 'maps'"
        self.client.get(path, name=name)

    # Get search page with a sort option applied
    @task(1)
    def search_page_sort(self):
        search_term, sort_option = "maps", "date-desc"
        search_query_param = f"q={search_term}"
        sort_query_param = f"sort={sort_option}"
        query_string = f"?{search_query_param}&{sort_query_param}"
        path = f"{SEARCH_PAGE_URL}{query_string}"
        name = "sort by 'date-desc' on search 'maps'"
        self.client.get(path, name=name)
