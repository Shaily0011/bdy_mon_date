let month=[                                              
    [1,3,5,7,9,11],
    [2,3,6,7,10,11],
    [4,5,6,7,12],
    [8,9,10,11,12]
];
let date=[
    [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31],
    [2,3,6,7,10,11,14,15,18,19,22,23,26,27,30,31],
    [4,5,6,7,12,13,14,15,20,21,22,23,28,29,30,31],
    [8,9,10,11,12,13,14,15,24,25,26,27,28,29,30,31],
    [16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
];
let count=0;
let months_count=0;
let days_count=0;
for(let j=0;j<=month.length-1;j++){                               //month selection
    count=2**j;
    if(confirm(`select your bdy month ${month[j]}`)){
        months_count=months_count+count;
    }
}
for(let i=0;i<=date.length-1;i++){                                //date selection
    count=2**i;
    if(confirm(`select your date ${date[i]}`)){
         days_count=days_count+count;
    }
}
let month_identify=[
    [1,3,5,7,8,10,12],                     //these months having 31 days
    [4,6,9,11],                            //these months having 30 days
    [2]
];
let month_name=["Jan","Feb","March","April","May","June","July","August","Sep","Oct","Nov","Dec"];
for(let m1=0;m1<=month_identify.length-1;m1++){
    for(let m2=0;m2<=month_identify[m1].length-1;m2++){
        if(months_count===month_identify[m1][m2]){
            if(m1===0&&days_count<=31&&days_count>0){
                document.getElementById("month").innerHTML=`According to your data Your bdy  is on  ${days_count}  ${month_name[months_count-1]}`;
            }
            else if(m1===1&&days_count<=30&&days_count>0){ 
                document.getElementById("month").innerHTML=`According to your data Your bdy  is on  ${days_count}  ${month_name[months_count-1]}`;
            }
            else if(m1===2&&days_count<=29&&days_count>0){
                document.getElementById("month").innerHTML=`According to your data Your bdy  is on ${days_count}  ${month_name[months_count-1]}`;
            }
            else{
                document.getElementById("month").innerHTML=`According to your data  ${month_name[months_count-1]}'s date doesn't exist `;
            }
        }
        else if(months_count>12||months_count===0){
            document.getElementById("month").innerHTML=`According to your data month doesn't exist `;
        }
    }
}
    
