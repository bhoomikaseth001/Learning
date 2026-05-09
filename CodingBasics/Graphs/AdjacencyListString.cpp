#include <bits/stdc++.h>
using namespace std;

class AdjacencyListString{
    public:
        map<string,vector<string>> buildGraph(vector<vector<string>> &edges){
            map<string, vector<string>> graph;

            for(auto &edge : edges){
                string src=edge[0];
                string dest = edge[1];

                graph[src].push_back(dest);
                graph[dest].push_back(src);
            }
            return graph;
        }
};

int main(){
    vector<vector<string>>edges=
       {{"A","B"},
        {"A","C"},
        {"A","D"},
        {"A","E"},
        {"D","E"},
        {"D","B"},
        {"D","C"}
    };
    AdjacencyListString adjacencyList; 
map<string,vector<string>> graph = adjacencyList.buildGraph(edges);
    for(auto &node : graph){
        cout<<node.first<<"->";
        for(auto &neighbor : node.second){
            cout<<neighbor<<" ";
        }
        cout<<endl;
    }

}