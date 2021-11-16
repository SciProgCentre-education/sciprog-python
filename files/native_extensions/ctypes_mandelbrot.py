import time
from ctypes import CDLL, POINTER, c_int
import matplotlib.pyplot as plt
import numpy as np

if __name__ == '__main__':
    ctypes_dll = CDLL("./libmandelbrot.so")
    ctypes_dll.mandelbrot.restype = POINTER(POINTER(c_int*200)*200)
    tic = time.perf_counter()
    image_ctypes = ctypes_dll.mandelbrot(200, 200)
    toc = time.perf_counter()
    print(toc - tic, "s")
    image = np.zeros((200, 200))
    for i, item in enumerate(image_ctypes.contents):
        for j, value in enumerate(item.contents):
            image[i, j] = value
    plt.imshow(image)
    plt.show()