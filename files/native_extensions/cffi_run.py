import time
from _mandelbrot_cffi import ffi, lib
import matplotlib.pyplot as plt
import numpy as np
import cffi
ffi = cffi.FFI()



if __name__ == '__main__':

    tic = time.perf_counter()
    image_cffi = lib.mandelbrot(200, 200)
    toc = time.perf_counter()
    print(toc - tic, "s")
    image = np.zeros((200,200))
    for i in range(200):
        for j in range(200):
            image[i,j] = image_cffi[i][j]
    plt.imshow(image)
    plt.show()