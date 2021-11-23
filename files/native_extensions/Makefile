all: mandelbrot

mandelbrot: libmandelbrot.c
	gcc -fPIC -g -c libmandelbrot.c
	gcc -shared -o libmandelbrot.so libmandelbrot.o
	rm libmandelbrot.o

swig: libmandelbrot.c libmandelbrot.i
	swig -python libmandelbrot.i
	gcc -c -fpic libmandelbrot.c libmandelbrot_wrap.c -I/home/zelenyy/miniconda3/envs/sciprog/include/python3.9
	gcc -shared libmandelbrot.o libmandelbrot_wrap.o -o _mandelbrot_swig.so