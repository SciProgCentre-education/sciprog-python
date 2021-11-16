%module mandelbrot_swig
%{
/* Put headers and other declarations here */
extern int**    mandelbrot(int n, int m);
%}

extern int**    mandelbrot(int n, int m);