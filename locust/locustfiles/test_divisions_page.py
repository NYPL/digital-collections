from locust import HttpUser, task, between

DIVISIONS_PAGE_PATH = "/divisions"


class DivisionsPageUser(HttpUser):
    wait_time = between(7, 15)

    # Get divisions page
    @task
    def divisions_page(self):
        self.client.get(DIVISIONS_PAGE_PATH)
