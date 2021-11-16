#include <complex.h>
#include <stdlib.h>
#include <stdio.h>

int** mandelbrot(int ppoints, int qpoints) {
    double pmin, pmax, qmin, qmax;
    pmin = -2.5; pmax = 1.5; qmin = -2; qmax = 2;
    int max_iterations = 400;
    double infinity_border = 100;
    double p, q;
    p = pmin;
    q = qmin;
    double step_p = (pmax - pmin)/(ppoints-1);
    double step_q = (qmax - qmin)/(qpoints-1);
    double complex z;
    double complex c;

    int ** image = (int**) malloc(ppoints*sizeof(int*));
    for (int i =0; i < ppoints; ++i){
        image[i] = (int*) malloc(qpoints*sizeof(int));
        for (int j =0; j < qpoints; ++j){
            image[i][j] = 0;
        }
    }


    for (int i =0; i < ppoints; ++i){
        for (int j = 0; j < qpoints; ++j){
            c = p + I*q;

            z = 0;
            q += step_q;
            for (int k = 0; k< max_iterations; ++k){
                z = z*z + c;
                if (cabs(z) > infinity_border){
//                    printf("%d %d %f\n", i, j, cabs(z));
                    image[i][j] = 1;
                    break;
                }
            }
        }
        p += step_p;
        q = qmin;
    }
//   for (int i =0; i < ppoints; ++i){
//        for (int j =0; j < qpoints; ++j){
//            printf("%d", image[i][j]);
//        }
//        printf("\n");
//    }
    return image;
};