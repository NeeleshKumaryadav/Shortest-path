//creation of graph
function creation(ver,Edges){
    //ver->number of vertices in graph
    //Edges-> list of edges
    let adj_list= [];
    for(let i=1;i<=ver;i++){
        adj_list.push([]);
    }

    for(let i=0;i<Edges.length;i++) {
        adj_list[Edges[i][0]].push([Edges[i][1],Edges[i][2]])
        adj_list[Edges[i][1]].push([Edges[i][0],Edges[i][2]])
    }
    return adj_list;
} 

function djikstra(graph,v,src){
    let vis=Array(v).fill(0)
    let dis=[];
    for(let i=0;i<v;i++){
        dis.push([1000,-1])
    }

    dis[src][0]=0;

    for(let i=0;i<v-1;i++){
        minimum=-1;
        for(let j=0;j<v;j++){
            if(vis[j]==0){
                if(minimum==-1 || dis[j][0]<dis[minimum][0]){
                    minimum=j;
                }
            }
        }
        vis[minimum]=1;
        for(let j=0;j<graph[minimum].length;j++){
            let edge=graph[minimum][j]
            if(vis[edge[0]]==0 && dis[edge[0]][0]> dis[minimum][0]+edge[1]){
                dis[edge[0]][0]= dis[minimum][0]+edge[1];
                dis[edge[0]][1]=minimum;
            }
        }
    }
    return dis;
}
let src=0;
let v=9;
let E=[[0,1,4],[0,7,8],[1,7,11],[1,2,8],[7,8,7],[6,7,1],[2,8,2],[6,8,6],
        [5,6,2],[2,5,4],[2,3,7],[3,5,14],[3,4,9],[5,4,10]]

let graph=creation(v,E);
let distance=djikstra(graph,v,0);
console.log(distance);
