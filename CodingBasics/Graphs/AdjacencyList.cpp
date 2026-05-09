#include <bits/stdc++.h>
#include <vector>
using namespace std;
class AdjacencyList{
    public:
        vector<vector<int>> buildGraph(vector<vector<int>> &edges, int n){
            vector<vector<int>>graph;

            for(int i=0;i<n;i++){
                vector<int>list;
                graph.push_back(list);
            }

            for(auto &edge:edges){
                graph[edge[0]].push_back(edge[1]);
                graph[edge[1]].push_back(edge[0]);
            }
            return graph;
        }
};

int main(){
    vector<vector<int>> edges ={{0,1},{1,2},{2,3},{3,0}};
    int n=4;

    AdjacencyList adjacencyList;

    vector<vector<int>> graph = adjacencyList.buildGraph(edges,n);
    for(int i=0;i<n;i++){
        cout<<i<<":";
        for(auto &x:graph[i])
            cout<<x<<" ";
        cout<<endl;
    }
}