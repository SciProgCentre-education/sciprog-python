from unittest import TestCase

from files.unittests_example.project.simple_animals import Feeder, Cat


class TestCat(TestCase):

    def setUp(self) -> None:
        self.feeder = Feeder(60)

    def test_rob_feeder(self):

        cat = Cat()
        with self.feeder as f:
            cat.rob_feeder(f)

        self.assertEqual(self.feeder.food, 40, "asdasdas")

    def tearDown(self) -> None:
        print("End")
