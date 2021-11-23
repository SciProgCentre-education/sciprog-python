import time

import mandelbrot_swig

if __name__ == '__main__':
    tic = time.perf_counter()
    image_swig = mandelbrot_swig.mandelbrot(200, 200)
    toc = time.perf_counter()
    print(toc - tic, "s")
    print(image_swig)