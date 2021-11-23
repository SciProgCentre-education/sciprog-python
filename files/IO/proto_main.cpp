
#include "example.pb.h"
#include <fstream>

using namespace std;

int main(){
    auto list = new sciprog::ParticleList();

    for (int i = 0; i < 10000; ++i){
        auto data = list->add_particle();
        data->set_id(i);
        data->set_energy(i*3.14);
        auto vector = new sciprog::Vector();
        vector->set_x(-i/100);
        vector->set_y(i/100);
        vector->set_z(i*i/10000);
        data->set_allocated_momentum_direction(vector);
    }

    ofstream fout;
    fout.open("example.bin");
    list->SerializeToOstream(&fout);
    fout.close();
    return 0;
}