#include <bits/stdc++.h>
using namespace std;

class BreadthFirstSearch{
public:
    vector<vector<int>> buildGraph(vector<vector<int>> &edges, int n){
            vector<vector<int>>graph;

            for(int i=0;i<n;i++){
                vector<int>nbr;
                graph.push_back(nbr);
            }

            for(auto &edge:edges){
                graph[edge[0]].push_back(edge[1]);
                graph[edge[1]].push_back(edge[0]);
            }
            return graph;
        }

    vector<int>breadthFirstSearch(vector<vector<int>> &edges, int n, int src){
        vector<vector<int>> graph = buildGraph(edges, n);

        queue<int>q;
        vector<bool>visited(n,false);
        vector<int>bfsanswer;

        q.push(src);
        visited[src]=true;

        while(!q.empty()){
            int curr= q.front();
            q.pop();
            bfsanswer.push_back(curr);

            for(auto &nbr :graph[curr]){
                if(!visited[nbr]){
                    q.push(nbr);
                    visited[nbr]=true;
                }
            }
        }
        return bfsanswer;
    }
};

int main(){
    vector<vector<int>>edges={{0,1},{0,2},{1,2},{1,3},{1,4},{2,5},{3,4},{3,5}};
    int n=6;
    int src=0;

    BreadthFirstSearch bfs ;

    vector<int>bfsAnswer = bfs.breadthFirstSearch(edges, n, src);
    for(auto node : bfsAnswer){
        cout<<node<<" ";
    }
}