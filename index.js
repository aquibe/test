let point1=250
let point2=250

let s1=document.getElementById('p1')
let s2=document.getElementById('p2')

function p1(){
    if(result()){
        point1+=3
        point2-=3
        s1.style.height=point1+'px'
        s2.style.height=point2+'px'
    }else{
        check()
    }
    
}

function p2(){
    if(result()){
        point1-=3
        point2+=3
        s1.style.height=point1+'px'
        s2.style.height=point2+'px'
    }else{
        check()
    }
}

function result(){
    if(point2>=10&&point1>=10){
        return true
    }else{
        return false
    }
}

function check(){
    if(point1<11){
        alert('Yellow is winner')
    }else if(point2<11){
        alert('Red is winner')
    }
}
