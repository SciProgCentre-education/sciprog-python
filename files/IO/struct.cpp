#include <fstream>
#include <iostream>
using namespace std;

struct Foo
{
    char ch;
    int value;
};

int main(int argc, char* argv[]){
    cout<<"Hello" << endl;
    ofstream fout;
    fout.open("data.bin", ios_base::binary | ios_base::trunc);
    Foo foo = {1, 256};
    for (int i = 0; i < 5; ++i){
        cout<<foo.ch;
        fout.write((char*) &foo, sizeof(foo));
    }
    fout.close();
    return 0;
}