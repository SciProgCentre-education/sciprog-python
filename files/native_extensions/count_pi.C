void count_pi(double& pi, int count)
{
    // count --- approximation accuracy of number PI
    int count1;
    double a, b;
    for(count, count1 = 1; count != 0; count--, count1++)
    {
        if(count1 == 1)
        {
            a = 4 - 1;
            b = 1;
            pi = 4/b - 4/a;
        }
        if(count1 > 1)
        {
            a = a + 4;
            b = b + 4;
            pi = pi + (4/b-4/a);
        }
    }
}