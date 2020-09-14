#include <iostream>
#include <string>
#include<vector>
#include<fstream>
#include <algorithm>
using namespace std; 

int main() {
	//declare vector for file
	vector <string> song;

	//read file using ifstream
	ifstream file("TrackStream.csv");

	//Allow user to know if file can open
	// not open, program will exit
	if (!file.is_open()) {
		cout << "ERROR!FILE NOT FOUND";
		exit(1);
	}
	//Loop for vector name to be sorted
	string track;

	//display column title
	cout << "Track" << "\t\tStream" << endl;

	//add elements to vector
	while (getline(file, track)) 
		song.push_back(track);

	//method sort song from begin to end alphabetical order
	sort(song.begin(), song.end());
	//print out names
		for (int i = 0; i <= song.size(); i++) {
			cout << song[i] << endl;
		}
}
