class Animals:
    def rob_feeder(self, feeder):
        pass


class Feeder:
    def __init__(self, food):
        self.food = food

    def get_food(self, food):
        if food < self.food:
            self.food -= food
            return food
        raise Exception("Need more food, milord")


class Dog(Animals):
    def rob_feeders(self, feeder):
        feeder.get_food(10)


class Cat(Animals):
    pass
