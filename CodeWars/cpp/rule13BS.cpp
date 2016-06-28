#include <vector>

class Thirteen
{
public:
    static long long thirt(long long n);
};

long long Thirteen::thirt(long long n)
{
    std::vector<int> w = {1, 10, 9, 12, 3, 4};
    while (true)
    {
        long long r = n, q = -1, c = 0;
        int j = 0;
        while (q != 0)
        {
            q = static_cast<long long>(r / 10);
            c += (r % 10) * w[j % 6];
            r = q;
            j++;
        }
        if (c == n)
            return c;
        n = c;
    }
}