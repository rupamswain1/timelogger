export const GetDate=()=>{
    let newDate=new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let fullDate=date.toString()+month.toString()+year.toString();
    return fullDate;
}

export const GetTimeInSeconds=()=>{
    let seconds=Math.floor(new Date().getTime()/1000);
    return seconds;
}