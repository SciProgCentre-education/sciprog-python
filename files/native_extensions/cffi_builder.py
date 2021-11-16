from cffi import FFI
ffibuilder = FFI()

ffibuilder.cdef(
    """
int** mandelbrot(int ppoints, int qpoints);
    """
)

ffibuilder.set_source("_mandelbrot_cffi",  # name of the output C extension
"""
    #include "libmandelbrot.h"
""",
    sources=['libmandelbrot.c'],
    # libraries=['c']# on Unix, link with the math library
                      )

if __name__ == "__main__":
    ffibuilder.compile(verbose=True)