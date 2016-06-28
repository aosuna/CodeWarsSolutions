#include <iostream>
#include <string>
#include <cstdlib>
#include <stdlib.h>

using namespace std;

int main(){

	int array[6] = {1, 10, 9, 12, 3, 4};

	long long n;
	long long result;
	cout << "enter a value: ";
	cin >> n;
	cout << "\n";

	string value = to_string(n);
	//char * i;
	long long arrl[value.size()];
	for (int k = 0; k < value.size(); k++){
			arrl[k] = (value[k] - 48);
			cout << "value in arry arrl: " << arrl[k] << endl;

	}

	cout << "value is: " << value << endl;

	int i = value.size() - 1;
	int j = 0;
	while( i >= 0){
		cout << "value from index: " << arrl[i] << endl;
		cout << "	array index: " << j%6 << endl;
		int mult = arrl[i] * array[j % 6];
		cout << "mult value: " << mult << endl;

		result += mult;
		i--;
		j++;
	}

	cout << "result is: " << result << endl;

	return 0;
}