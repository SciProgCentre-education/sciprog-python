//#include <complex.h>
//#include <stdlib.h>

//#include <boost/python/numpy.hpp>
#include <boost/python/module.hpp>
#include <boost/python/def.hpp>

namespace p = boost::python;
//namespace np = boost::python::numpy;

int mandelbrot(int x){
    return x;
}

//np::ndarray mandelbrot(int ppoints, int qpoints) {
//    double pmin, pmax, qmin, qmax;
//    pmin = -2.5; pmax = 1.5; qmin = -2; qmax = 2;
//    int max_iterations = 400;
//    double infinity_border = 100;
//    double p, q;
//    p = pmin;
//    q = qmin;
//    double step_p = (pmax - pmin)/(ppoints-1);
//    double step_q = (qmax - qmin)/(qpoints-1);
//    double complex z;
//    double complex c;
//
//
//    p::tuple shape = p::make_tuple(ppoints, qpoints);
//    np::dtype dtype = np::dtype::get_builtin<int>();
//    np::ndarray image = np::zeros(shape, dtype);
//
//    for (int i =0; i < ppoints; ++i){
//        for (int j = 0; j < qpoints; ++j){
//            c = p + I*q;
//
//            z = 0;
//            q += step_q;
//            for (int k = 0; k< max_iterations; ++k){
//                z = z*z + c;
//                if (cabs(z) > infinity_border){
//                    image[i][j] = 1;
//                    break;
//                }
//            }
//        }
//        p += step_p;
//        q = qmin;
//    }
//
//    return image;
//};


BOOST_PYTHON_MODULE(boost_mandelbrot_ext)
{
    p::def("mandelbrot", &mandelbrot);
}