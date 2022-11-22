var app = new function(){
    this.el=document.getElementById('tasks');
    this.tasks=[]

    this.FetchAll = function(){
var data = '';

if(this.tasks.length>0){
    for(i=0;i<this.tasks.length;i++){
        data+='<tr>';
        data+='<td>'+(i+1)+'. '+this.task[i]+'</td>';
        data+='<td><button onclick="app.Edit('+i+')"
        class="btn btn-warning">Edit</button></td> ';
        data+='<td><button onclick="app.Edit('+i+')"
        class="btn btn-danger">Edit</button></td> ';
        data+='</tr>'
    }
} 
    };

    this.Add = function(){

    };

    this.Edit = function(item){

    };

    this.Delete = function (item){

    };

    this.Count = function(data){

    };
}

app.FetchAll();

function CloseInput(){
    document.getElementById('edit-box').style.display = 'none';
}
