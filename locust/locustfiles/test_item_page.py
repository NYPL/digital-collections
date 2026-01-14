from locust import HttpUser, task, between

ITEM_PAGE_PATH = "/items/{uuid}"


class ItemPageUser(HttpUser):
    wait_time = between(7, 15)

    # Get top-level item in collection, single capture
    @task(3)
    def item_page_top_level_item(self):
        item_uuid = "7fd21780-c61e-012f-55dd-58d385a7bc34"
        path = ITEM_PAGE_PATH.format(uuid=item_uuid)
        name = "top-level item in collection, single capture"
        self.client.get(path, name=name)

    # Get restricted top-level item in collection, single capture
    @task(1)
    def item_page_top_level_item_restricted(self):
        item_uuid = "40523a80-c6b8-012f-7fa4-58d385a7bc34"
        path = ITEM_PAGE_PATH.format(uuid=item_uuid)
        name = "restricted top-level item in collection, single capture"
        self.client.get(path, name=name)

    # Get deeply-nested item in large collection, two captures
    @task(3)
    def item_page_deeply_nested_item_in_large_collection(self):
        item_uuid = "ca164a90-c533-012f-0575-58d385a7bc34"
        path = ITEM_PAGE_PATH.format(uuid=item_uuid)
        name = "deeply-nested item in large collection, two captures"
        self.client.get(path, name=name)

    # Get first capture in sequence for item, several captures
    @task(2)
    def item_page_several_captures_item_first_capture_in_sequence(self):
        item_uuid = "e28a9180-81d4-0134-b707-00505686a51c"
        first_capture_index = 0
        canvas_index = f"canvasIndex={first_capture_index}"
        query_string = f"?{canvas_index}"
        path = f"{ITEM_PAGE_PATH.format(uuid=item_uuid)}{query_string}"
        name = "several captures item, first capture in sequence"
        self.client.get(path, name=name)

    # Get twelfth capture in sequence for item, several captures
    @task(2)
    def item_page_several_captures_item_twelfth_capture_in_sequence(self):
        item_uuid = "e28a9180-81d4-0134-b707-00505686a51c"
        twelfth_capture_index = 11
        canvas_index = f"canvasIndex={twelfth_capture_index}"
        query_string = f"?{canvas_index}"
        path = f"{ITEM_PAGE_PATH.format(uuid=item_uuid)}{query_string}"
        name = "several captures item, twelfth capture in sequence"
        self.client.get(path, name=name)

    # Get standalone item, two captures
    @task(2)
    def item_page_standalone_item(self):
        item_uuid = "1d1bd920-0031-0130-5ffe-58d385a7bc34"
        path = ITEM_PAGE_PATH.format(uuid=item_uuid)
        name = "standalone item, two captures"
        self.client.get(path, name=name)

    # Get AMI item, audio, public domain
    @task(1)
    def item_page_ami_item_audio(self):
        item_uuid = "aa56ae00-b884-0133-3277-60f81dd2b63c"
        path = ITEM_PAGE_PATH.format(uuid=item_uuid)
        name = "ami item, audio, public domain"
        self.client.get(path, name=name)

    # Get AMI item, video, public domain
    @task(1)
    def item_page_ami_item_video(self):
        item_uuid = "cf5f2590-f875-0130-f348-3c075448cc4b"
        path = ITEM_PAGE_PATH.format(uuid=item_uuid)
        name = "ami item, video, public domain"
        self.client.get(path, name=name)
