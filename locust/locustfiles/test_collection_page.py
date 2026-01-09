import random

from locust import HttpUser, task, between

COLLECTION_PAGE_PATH = "/collections/{uuid}"


class CollectionPageUser(HttpUser):
    wait_time = between(7, 15)

    # Get collection page for one of various collections
    @task
    def collection_page(self):
        collection_uuids = [
            "5cd94760-c52a-012f-bcd4-3c075448cc4b",  # Typical collection
            "cd0fd890-b0de-0133-ad22-00505686d14e",  # Deeply-nested collection
            "6c7dc4f0-c5f5-012f-ff48-58d385a7bc34",  # Flat collection, several items
            "0edc61c0-3438-0131-1b5b-58d385a7b928",  # Single-item collection
        ]
        collection_uuid = random.choice(collection_uuids)
        path = COLLECTION_PAGE_PATH.format(uuid=collection_uuid)
        self.client.get(path)
