from locust import HttpUser, task, between


class HomePageUser(HttpUser):
    wait_time = between(7, 15)

    # Get home page
    @task
    def home_page(self):
        self.client.get("/")
