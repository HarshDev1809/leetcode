#include <iostream>
#include <string>
using namespace std;

string mergeAlternately(string word1, string word2) {
    string result = "";
    int i = 0;
    while(i < word1.length() || i < word2.length()) {
        char word1_ = i < word1.length() ? word1[i] : '\0';
        char word2_ = i < word2.length() ? word2[i] : '\0';
        if(word1_ != '\0') result += word1_;
        if(word2_ != '\0') result += word2_;
        i++;
    }
    return result;
}

int main() {
    string word1 = "abc";
    string word2 = "pqr";
    cout << mergeAlternately(word1, word2);
}