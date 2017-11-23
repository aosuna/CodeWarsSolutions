#include <iostream>
#include <string>
#include <cstdlib>
#include <stdlib.h>

using namespace std;

int main(){

	int array[6] = {1, 10, 9, 12, 3, 4};

	long long n;
	long long result = 0;
	cout << "enter a value: ";
	cin >> n;
	cout << "\n";
	
	while( result != n){
		long long temp = 0;

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
			long long mult = arrl[i] * array[j % 6];
			cout << "mult value: " << mult << endl;

			temp += mult;
			i--;
			j++;
		}
		if(temp != n){
			n = temp;
		}
		else{
			result = n;
		}
	}
	cout << "result is: " << result << endl;
	//return result;

	return 0;
}