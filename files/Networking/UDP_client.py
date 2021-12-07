import socket
import sys

import pygame

from pygame.locals import (
    K_UP,
    K_DOWN,
    K_LEFT,
    K_RIGHT,
    K_ESCAPE,
    KEYDOWN,
    QUIT,
)

SCREEN_WIDTH = 800
SCREEN_HEIGHT = 600

class AnotherPlayer(pygame.sprite.Sprite):
    def __init__(self):
        super(AnotherPlayer, self).__init__()
        self.surf = pygame.Surface((50, 50))
        self.surf.fill((0, 0, 0))
        self.rect = self.surf.get_rect()

    def update(self, x, y):
        self.rect.center = (x,y)

class Player(pygame.sprite.Sprite):

    def __init__(self):
        super(Player, self).__init__()
        self.surf = pygame.Surface((50, 50))
        self.surf.fill((0, 0, 0))
        self.rect = self.surf.get_rect()

    def update(self, pressed_keys):
        if pressed_keys[K_UP]:
            self.rect.move_ip(0, -1)
        if pressed_keys[K_DOWN]:
            self.rect.move_ip(0, 1)
        if pressed_keys[K_LEFT]:
            self.rect.move_ip(-1, 0)
        if pressed_keys[K_RIGHT]:
            self.rect.move_ip(1, 0)
        # Keep player on the screen
        if self.rect.left < 0:
            self.rect.left = 0
        if self.rect.right > SCREEN_WIDTH:
            self.rect.right = SCREEN_WIDTH
        if self.rect.top <= 0:
            self.rect.top = 0
        if self.rect.bottom >= SCREEN_HEIGHT:
            self.rect.bottom = SCREEN_HEIGHT


def main():
    pygame.init()
    screen = pygame.display.set_mode([SCREEN_WIDTH, SCREEN_HEIGHT])
    running = True
    player = Player()
    another_players = {}
    HOST, PORT = "localhost", 9999
    my_name = sys.argv[1]
    sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

    while running:
        for event in pygame.event.get():
            if event.type == KEYDOWN:
                if event.key == K_ESCAPE:
                    running = False
            elif event.type == QUIT:
                running = False

        pressed_keys = pygame.key.get_pressed()
        player.update(pressed_keys)
        screen.fill((255, 255, 255))

        data = bytes(my_name + " " + str(player.rect.centerx) + ":" + str(player.rect.centery) + "\n", "utf-8")
        sock.sendto(data, (HOST, PORT))
        received = sock.recv(1024)
        # print(received.split(b"|"))
        for item in received.split(b"|")[:-1]:
            name, data = item.split()
            if str(name, "utf-8") == my_name:
                continue
            if name not in another_players.keys():
                new_another = AnotherPlayer()
                another_players[name] = new_another
            data = str(data, "utf-8")
            x, y = map(int, data.split(":"))
            a_p =  another_players[name]
            a_p.update(x,y)
            screen.blit(a_p.surf, a_p.rect)
        screen.blit(player.surf, player.rect)
        pygame.display.flip()
    pygame.quit()

if __name__ == '__main__':
    main()