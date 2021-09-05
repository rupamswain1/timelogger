(this["webpackJsonptimekeeper-frontend"]=this["webpackJsonptimekeeper-frontend"]||[]).push([[0],{155:function(e,t,a){e.exports=a(280)},160:function(e,t,a){},166:function(e,t,a){},167:function(e,t,a){},168:function(e,t,a){},169:function(e,t,a){},170:function(e,t,a){},172:function(e,t,a){},173:function(e,t,a){},174:function(e,t,a){},270:function(e,t,a){},271:function(e,t,a){},272:function(e,t,a){},273:function(e,t,a){},274:function(e,t,a){},280:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),i=a.n(c),s=(a(160),a(11)),o=a(36),l=a(306),u=a(54),m=a.n(u),d={SAVE_TOTAL_TIME:"SAVE_TOTAL_TIME",START_COUNTDOWN:"START_COUNTDOWN",PAUSE_COUNTDOWN:"PAUSE_COUNTDOWN",SET_COUNTDOWN_TRUE:"SET_COUNTDOWN_TRUE",UPDATE_COUNTDOWN:"UPDATE_COUNTDOWN",REMOVE_ALL_TIME:"REMOVE_ALL_TIME",UPDATE_LAST_RUN_TIME:"UPDATE_LAST_RUN_TIME"},b=function(e){return{type:d.START_COUNTDOWN,seconds:e}},T=function(){return{type:d.PAUSE_COUNTDOWN}},p=function(){return{type:d.SET_COUNTDOWN_TRUE}},E=function(){return{type:d.REMOVE_ALL_TIME}},k=function(e){return{type:d.UPDATE_LAST_RUN_TIME,seconds:e}},f=function(e){var t=[0,0,0,0,0,0];e<0&&(e*=-1,t[6]="-");var a=parseInt(e),n=Math.floor(a/3600),r=3600*n,c=Math.floor((a-r)/60),i=a-r-60*c;if(n<10)t[1]=n;else{var s=n.toString();t[0]=s.substr(0,1),t[1]=s.substr(1)}if(c<10)t[3]=c;else{var o=c.toString();t[2]=o.substr(0,1),t[3]=o.substr(1)}if(i<10)t[5]=i;else{var l=i.toString();t[4]=l.substr(0,1),t[5]=l.substr(1)}return t},v=(a(166),function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.TotalTimeReducer})),a=t.key,c=t.totalTime,i=Object(s.c)((function(e){return e.TaskReducer})).taskList,u=Object(n.useState)([]),b=Object(o.a)(u,2),T=b[0],p=b[1],E=[];Object(n.useEffect)((function(){k();var t=setInterval((function(){T.length>0&&(e({type:d.UPDATE_COUNTDOWN}),k(),p(E))}),1e3);return function(){return clearInterval(t)}}),[T.length]);var k=function(){void 0!==c[a]&&void 0!==c[a][g()]&&(E=f(c[a][g()]),p(E))},v=function(e){k(),E[parseInt(e.target.name)]=e.target.value,parseInt(e.target.name)<5?(document.getElementById(parseInt(e.target.name)+1).disabled=!1,document.getElementById(parseInt(e.target.name)+1).focus(),document.getElementById(parseInt(e.target.name)+1).value="",0!==parseInt(e.target.name)&&(document.getElementById(parseInt(e.target.name)).disabled=!0)):(document.getElementById(parseInt(e.target.name)).blur(),document.getElementById(parseInt(e.target.name)).disabled=!0)},O=function(e){document.getElementById(parseInt(e.target.name)).value=""},g=function(){var e=new Date,t=e.getDate(),a=e.getMonth()+1,n=e.getFullYear();return t.toString()+a.toString()+n.toString()},A=function(){p(E);var t=function(e){return 3600*(10*parseInt(e[0])+parseInt(e[1]))+60*(10*parseInt(e[2])+parseInt(e[3]))+(10*parseInt(e[4])+parseInt(e[5]))}(E);e({type:d.SAVE_TOTAL_TIME,payload:t})},N="timeBox";T.length>6&&(N="timeBox-negative");var y=!1;return T.length>0&&Object.keys(i).length>0&&(y=!0),r.a.createElement("div",{className:"timcardsContainer"},T.length>6?r.a.createElement("span",{className:"timeBoxNegative"},"-"):"",r.a.createElement("input",{className:N,placeholder:"H",type:"text",name:"0",onFocus:O,id:"0",value:y?T[0]:E[0],maxlength:"1",onChange:v}),r.a.createElement("input",{disabled:!0,className:N,placeholder:"H",type:"text",name:"1",onFocus:O,id:"1",value:y?T[1]:E[1],maxlength:"1",onChange:v}),r.a.createElement("div",{className:"timerText"},"H"),r.a.createElement("input",{disabled:!0,className:N,placeholder:"M",type:"text",name:"2",onFocus:O,id:"2",value:y?T[2]:E[2],maxlength:"1",onChange:v}),r.a.createElement("input",{disabled:!0,className:N,placeholder:"M",type:"text",name:"3",onFocus:O,id:"3",value:y?T[3]:E[3],maxlength:"1",onChange:v}),r.a.createElement("div",{className:"timerText"},"M"),r.a.createElement("input",{disabled:!0,className:N,placeholder:"S",type:"text",name:"4",onFocus:O,id:"4",value:y?T[4]:E[4],maxlength:"1",onChange:v}),r.a.createElement("input",{disabled:!0,className:N,placeholder:"S",type:"text",name:"5",onFocus:O,id:"5",onfocus:'this.value=""',value:y?T[5]:E[5],maxlength:"1",onChange:v}),r.a.createElement("div",{className:"timerText"},"S"),c[a]?"":r.a.createElement(l.a,{variant:"contained",color:"primary",className:"saveTimeBtn",startIcon:r.a.createElement(m.a,null),onClick:function(){return A()}},"Save Time"))}),O=a(116),g=a.n(O),A=a(117),N=a.n(A),y=a(118),h=a.n(y),j=a(119),_=a.n(j),L=a(120),C=a.n(L),R=a(121),S=a.n(R),D=a(122),x=a.n(D),w=a(124),I=a.n(w),B=a(123),M=a.n(B),U=a(126),K=a.n(U),P=(a(167),a(317)),F=a(125),V=a.n(F),W={START_BREAK:"START_BREAK",PAUSE_BREAK:"PAUSE_BREAK",GET_BREAK_COLOR:"GET_BREAK_COLOR"},G=function(e){return{type:W.START_BREAK,breakName:e}},z=function(){var e=Object(s.c)((function(e){return e.BreakButtonReducer})),t=Object(s.c)((function(e){return e.TotalTimeReducer})),a=t.key,n=t.totalTime,c=Object(s.b)(),i=function(e){c(G(e))};return r.a.createElement("div",{className:"breakbuttonsMainContainer"},n[a]?r.a.createElement("div",null,r.a.createElement(P.a,{title:"Instagram"},r.a.createElement("button",{className:"brakButton-insta-".concat(e.instagram.isActive?"active":""),onClick:function(){return i("instagram")}},r.a.createElement(g.a,{style:{fill:"white"},fontSize:"large"}))),r.a.createElement(P.a,{title:"Facebook"},r.a.createElement("button",{className:"brakButton-fb-".concat(e.faceBook.isActive?"active":""),onClick:function(){return i("faceBook")}},r.a.createElement(N.a,{style:{fill:"white"},fontSize:"large"}))),r.a.createElement(P.a,{title:"Youtube"},r.a.createElement("button",{className:"brakButton-youtube-".concat(e.youtube.isActive?"active":""),onClick:function(){return i("youtube")}},r.a.createElement(h.a,{style:{fill:"white"},fontSize:"large"}))),r.a.createElement(P.a,{title:"Calls"},r.a.createElement("button",{className:"brakButton-calls-".concat(e.call.isActive?"active":""),onClick:function(){return i("call")}},r.a.createElement(_.a,{style:{fill:"white"},fontSize:"large"}))),r.a.createElement(P.a,{title:"Messaging"},r.a.createElement("button",{className:"brakButton-messaging-".concat(e.messaging.isActive?"active":""),onClick:function(){return i("messaging")}},r.a.createElement(C.a,{style:{fill:"white"},fontSize:"large"}))),r.a.createElement(P.a,{title:"Sleep"},r.a.createElement("button",{className:"brakButton-sleep-".concat(e.sleep.isActive?"active":""),onClick:function(){return i("sleep")}},r.a.createElement(S.a,{style:{fill:"white"},fontSize:"large"}))),r.a.createElement(P.a,{title:"Excercise"},r.a.createElement("button",{className:"brakButton-excesise-".concat(e.excercise.isActive?"active":""),onClick:function(){return i("excercise")}},r.a.createElement(x.a,{style:{fill:"white"},fontSize:"large"}))),r.a.createElement(P.a,{title:"Food"},r.a.createElement("button",{className:"brakButton-food-".concat(e.food.isActive?"active":""),onClick:function(){return i("food")}},r.a.createElement(M.a,{style:{fill:"white"},fontSize:"large"}))),r.a.createElement(P.a,{title:"Tea/Coffee"},r.a.createElement("button",{className:"brakButton-tea-".concat(e.tea.isActive?"active":""),onClick:function(){return i("tea")}},r.a.createElement(I.a,{style:{fill:"white"},fontSize:"large"}))),r.a.createElement(P.a,{title:"Miscelaneous Task"},r.a.createElement("button",{className:"brakButton-misc-".concat(e.miscelaneous.isActive?"active":""),onClick:function(){return i("miscelaneous")}},r.a.createElement(V.a,{style:{fill:"white"},fontSize:"large"}))),r.a.createElement(P.a,{title:"Release All"},r.a.createElement("button",{className:"brakButton-eject-".concat(e.releaseAll.isActive?"active":""),onClick:function(){return i("releaseAll")}},r.a.createElement(K.a,{style:{fill:"white"},fontSize:"large"})))):"")},Y=(a(168),{ADD_TASK:"ADD_TASK",REMOVE_TASK:"REMOVE_TASK",PAUSE_TASK:"PAUSE_TASK",START_TASK:"START_TASK",COMPLETED_TASK:"COMPLETED_TASK",ADD_BREAK_TASK:"ADD_BREAK_TASK",REMOVE_ALL_TASK:"REMOVE_ALL_TASK",COMPLETE_ALL_TASK:"COMPLETE_ALL_TASK",ADD_REMAINDER:"ADD_REMAINDER",START_REMAINDER:"START_REMAINDER"}),H=function(e,t,a){return{type:Y.START_TASK,taskName:e,seconds:t,totalTime:a}},J=function(){return{type:Y.REMOVE_ALL_TASK}},q=function(e){return{type:Y.START_REMAINDER,seconds:e}},Q=a(127),X=a.n(Q),Z=a(128),$=a.n(Z),ee=a(129),te=a.n(ee),ae=a(76),ne=a.n(ae),re=r.a.memo((function(e){var t=e.completed,a=e.bgColor,n=e.taskName,c=e.paused,i=e.percentage,o=e.type,l=e.time,u=Object(s.b)(),m="#e0e0de";!1===c&&(m="#c1edb4");var d={position:"relative",height:"15%",width:"100%",backgroundColor:m,borderRadius:"10px","margin-top":5,display:"flex"},b={height:"100%",width:"".concat(i,"%"),backgroundColor:"".concat(a),textAlign:"right",borderRadius:"5px",transition:"width 1s ease-in-out"};return r.a.createElement(P.a,{title:n.toUpperCase(),placement:"right-start",arrow:!0},r.a.createElement("div",{className:"taskMainContainer",style:d},r.a.createElement("div",{className:"contentContainer",style:b}),r.a.createElement("div",{className:"taskContent",style:{position:"absolute",display:"flex",right:"50%",top:"10%",textAlign:"right","font-weight":"bold"}},r.a.createElement("span",{style:{position:"absolute",top:"1vh",left:"-3vw",color:"black",fontWeight:"bold","z-index":-1,width:"10vw"}},"".concat(l[0]+""+l[1]+":"+l[2]+l[3]+":"+l[4]+l[5],"  -  ").concat(i,"%")),r.a.createElement("div",{className:"taskName",style:{position:"absolute",top:"1vh",color:"black",right:"1.9vw","text-align":"left",width:"11vw","margin-left":"10%"}},"".concat(n.toUpperCase().slice(0,14)).concat(n.length>14?"...":"")),t&&"remainder"!==o?"":r.a.createElement("div",{className:"iconsList",style:{position:"absolute",top:"0.5vh",display:"flex",left:"1vw","padding-left":"7.5vw",textAlign:"right"}},c?"remainder"!==o?r.a.createElement(P.a,{title:"Start ".concat(n.toUpperCase()),arrow:!0},r.a.createElement("div",{className:"playButton"},r.a.createElement(X.a,{key:"".concat(n,"-playBtn"),onClick:function(){return u(H(n))}}))):"":"remainder"!==o?r.a.createElement(P.a,{title:"Pause ".concat(n.toUpperCase()),arrow:!0},r.a.createElement("div",{className:"playButton"},r.a.createElement($.a,{key:"".concat(n,"-pauseBtn"),onClick:function(){return u(function(e){return{type:Y.PAUSE_TASK,taskName:e}}(n))}}))):"","task"!==o?"":r.a.createElement(P.a,{title:"Mark Complete ".concat(n.toUpperCase()),arrow:!0},r.a.createElement("div",{className:"completedButton"},r.a.createElement(te.a,{onClick:function(){return u(function(e){return{type:Y.COMPLETED_TASK,taskName:e}}(n))}}))),"break"===o||i>0&&"remainder"!==o?"":r.a.createElement(P.a,{title:"Remove ".concat(n.toUpperCase()),arrow:!0},r.a.createElement("div",{className:"removeButton"},r.a.createElement(ne.a,{key:"".concat(n,"-cancelBtn"),onClick:function(){return u(function(e){return{type:Y.REMOVE_TASK,taskName:e}}(n))}})))))))})),ce=function(){var e=new Date,t=e.getDate(),a=e.getMonth()+1,n=e.getFullYear();return t.toString()+a.toString()+n.toString()},ie=function(){return Math.floor((new Date).getTime()/1e3)},se=function(){var e=Object(s.c)((function(e){return e.TaskReducer})).taskList,t=Object(s.c)((function(e){return e.TotalTimeReducer})),a=t.key,c=t.totalTime,i=Object(s.b)(),u=Object(n.useState)(),d=Object(o.a)(u,2),b=d[0],T=d[1],p=function(){b&&(i(function(e){return{type:Y.ADD_TASK,taskName:e}}(b)),T(""),document.getElementById("outlined-basic").blur())};return r.a.createElement(r.a.Fragment,null,void 0!==c[a]&&c[a][ce()]?r.a.createElement("div",{className:"toDoMainContainer"},r.a.createElement("span",{className:"headingToDo"},"Task List"),r.a.createElement("div",{className:"addTaskinpputContainer"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),p()},className:"addTaskContainer"},r.a.createElement("input",{value:b,onChange:function(e){T(e.target.value)},className:"addTaskText",id:"outlined-basic",placeholder:"Add Task",variant:"outlined",color:"primary"}),r.a.createElement(l.a,{variant:"contained",type:"submit",color:"primary",className:"saveTaskBtn-".concat(b?"enabled":"disabled"),startIcon:r.a.createElement(m.a,null)}),r.a.createElement("hr",null))),r.a.createElement("div",{className:"addedTaskListContainer"},Object.keys(e).map((function(t){return e[t].isCompleted||"remainder"===e[t].type?"":r.a.createElement(re,{key:t,type:e[t].type,completed:e[t].isCompleted,bgColor:e[t].color,taskName:t,paused:e[t].paused,percentage:e[t].percentage,time:f(e[t].time)})})))):"")},oe=(a(169),function(){var e=Object(s.c)((function(e){return e.TaskReducer})).taskList,t=Object(s.c)((function(e){return e.TotalTimeReducer})),a=t.key,n=t.totalTime;return r.a.createElement(r.a.Fragment,null,void 0!==n[a]&&n[a][ce()]?r.a.createElement("div",{className:"completedTaskListMainContainer"},r.a.createElement("span",{className:"headingCompleted"},"Completed Task List"),r.a.createElement("div",{className:"completedTaskListContainer"},Object.keys(e).map((function(t){return e[t].isCompleted?r.a.createElement(re,{key:t,type:e[t].type,completed:e[t].isCompleted,bgColor:e[t].color,taskName:t,paused:e[t].paused,percentage:e[t].percentage,time:f(e[t].time)}):""})))):"")}),le=(a(170),a(134)),ue=a(25),me=a(314),de=a(316),be=function(){var e=Object(s.c)((function(e){return e.TaskReducer})).taskList,t=Object(s.c)((function(e){return e.TotalTimeReducer})),a=t.key,c=t.totalTime,i=Object(n.useState)(),u=Object(o.a)(i,2),d=u[0],b=u[1],T=Object(n.useState)(),p=Object(o.a)(T,2),E=p[0],k=p[1],v=Object(n.useState)(!1),O=Object(o.a)(v,2),g=O[0],A=O[1],N=Object(s.b)();return r.a.createElement(r.a.Fragment,null,void 0!==c[a]&&c[a][ce()]?r.a.createElement("div",{className:"remainderMainContainer"},r.a.createElement("span",{className:"headingremainder"},"Remainder List"),r.a.createElement("div",{className:"addRemainderinpputContainer"},r.a.createElement("div",{className:"addRemainderContainer"},r.a.createElement("div",{className:"remainderAddInputs"},r.a.createElement("input",{value:d,onChange:function(e){return b(e.target.value)},className:"addRemainderText",id:"outlined-basic",placeholder:"Add Remainder",variant:"outlined",color:"primary",type:"text"}),r.a.createElement(ue.a,{utils:le.a},r.a.createElement(me.a,{className:"timeSelector",value:void 0!==E?new Date(1e3*E):new Date,onChange:function(e){k(Math.floor(new Date(e).getTime()/1e3)),void 0!==E&&(E-ie())/60<0&&(!0,k(void 0))},ampm:!1}))),r.a.createElement("div",{className:"minutesFromNowContainer"},r.a.createElement(de.a,{inputProps:{"aria-label":"Checkbox Repeat"},style:{color:"white"},color:"primary",className:"repeatSelectCheckBox",onChange:function(e){return A(e.target.checked)},checked:g}),r.a.createElement("span",{className:"minutesFromNow"}," ","Repeat Every ".concat(void 0!==E?((E-ie())/60).toFixed(1):0," Minutes From Now")),r.a.createElement(l.a,{variant:"contained",color:"primary",className:"saveRemainderBtn",startIcon:r.a.createElement(m.a,null),onClick:function(){N(function(e,t,a){return{type:Y.ADD_REMAINDER,remainderName:e,time:t,repeat:a}}(d,E,g)),b(""),k(void 0),A(!1),document.getElementById("outlined-basic").blur()},disabled:void 0===E})),E-ie()<0?r.a.createElement("span",{className:"timeError"},"Please select a future time"):"")),r.a.createElement("div",{className:"addedRemainderListContainer"},Object.keys(e).map((function(t){return"remainder"===e[t].type?r.a.createElement(re,{key:t,type:e[t].type,completed:e[t].isCompleted,bgColor:e[t].color,taskName:t,paused:e[t].paused,percentage:e[t].percentage,time:f(e[t].timeRemaining)}):""})))):"")},Te={SUBMIT_ALL_DATA_START:"SUBMIT_ALL_DATA_START",SUBMIT_ALL_DATA_INPROGRESS:"SUBMIT_ALL_DATA_INPROGRESS"},pe=function(){return{type:Te.SUBMIT_ALL_DATA_START}},Ee=function(e,t,a){return{type:Te.SUBMIT_ALL_DATA_INPROGRESS,breakButtonReducer:t,taskReducer:e,totalTimeReducer:a}},ke=(a(172),function(){var e=Object(s.c)((function(e){return e.TotalTimeReducer})),t=e.key,a=e.totalTime,n=Object(s.b)();return r.a.createElement(r.a.Fragment,null,a[t]?r.a.createElement(l.a,{className:"finishDayBtn",variant:"contained",color:"secondary",onClick:function(){n(pe()),setTimeout((function(){window.location.reload(!1)}),500)}},"Finish Your Day"):"")}),fe={TOGGLE_NOTE_DISPLAY:"TOGGLE_NOTE_DISPLAY",ADD_NOTE:"ADD_NOTE",REMOVE_NOTE:"REMOVE_NOTE"},ve=(a(173),function(e){var t=e.noteMsg,a=e.noteKey,n=Object(s.b)();return r.a.createElement("div",{className:"notesContainer"},r.a.createElement("div",{className:"notesText"},t),r.a.createElement("div",{className:"removeButton"},r.a.createElement(ne.a,{onClick:function(){return n({type:fe.REMOVE_NOTE,noteId:a})}})))}),Oe=(a(174),function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.NoteReducer})),a=t.noteDisplay,c=t.notes,i=Object(n.useState)(""),l=Object(o.a)(i,2),u=l[0],m=l[1];return a?r.a.createElement("div",{className:"notesContanerMain"},r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),u.length>0&&(e({type:fe.ADD_NOTE,noteText:u}),m(""))},className:"notesInput"},r.a.createElement("input",{value:u,type:"text",placeholder:"Add Note",className:"noteInputs",onChange:function(e){return m(e.target.value)}}),r.a.createElement("button",{className:"addNoteBtn-".concat(u.length>0?"enabled":"disabled"),type:"submit",disabled:u.length<=0},"Add")),r.a.createElement("div",{className:"notesCollection"},Object.keys(c).map((function(e){return r.a.createElement(ve,{noteMsg:c[e],noteKey:e})})))):""}),ge=a(56),Ae=(a(270),function(){var e=Object(s.c)((function(e){return e.SubmitDataReducer})),t=e.key,a=e.data,n={},c=!1;if(Object.keys(a).length>0&&Object.keys(a[t]).length>0){var i=[],o=[],l=[],u=[];if(Object.keys(a).length>0){var m=a[t].taskData;for(var d in m)i.push(d.toUpperCase()),o.push((m[d].time/3600).toFixed(4)),l.push(m[d].color),u.push("rgb(255,255,255)")}n={labels:i,datasets:[{label:"# of Votes",data:o,backgroundColor:l,borderColor:u,borderWidth:2,hoverOffset:20}]},c=!0}return r.a.createElement("div",{className:"doughnutChartContainer-".concat(c?"":"hideBarDougnutContainer")},Object.keys(a).length>0&&Object.keys(a[t]).length>0?r.a.createElement(ge.Doughnut,{data:n}):"")}),Ne=(a(271),function(){var e=Object(s.c)((function(e){return e.SubmitDataReducer})),t=e.key,a=e.data,n={},c=!1;if(Object.keys(a).length>0&&Object.keys(a[t]).length>0){var i=[],o=[],l=[],u=[];if(Object.keys(a).length>0){var m=a[t].taskData;for(var d in m)i.push(d.toUpperCase()),o.push((m[d].time/3600).toFixed(3)),l.push(m[d].color),u.push("rgb(255,255,255)")}i.push("Estimated Total Time");var b=a[t].totalTimeData,T=Object.keys(b.originalTime[b.key])[0];o.push((b.originalTime[b.key][T]/3600).toFixed(3)),l.push("rgb(28,16,133)"),u.push("rgb(255,255,255)");var p=0;p=b.totalTime[b.key][T]<0?-1*b.totalTime[b.key][T]+b.originalTime[b.key][T]:b.originalTime[b.key][T]-b.totalTime[b.key][T],i.push("Actual Total Time"),o.push((p/3600).toFixed(3)),l.push("rgb(222, 11, 39)"),u.push("rgb(255,255,255)"),n={labels:i,datasets:[{label:"Time Comparison Chart",data:o,backgroundColor:l,borderColor:u,borderWidth:5,hoverOffset:20}]},c=!0}return r.a.createElement("div",{className:"timeConparisonBarChartContainer-".concat(c?"":"hideBarChartContainer")},Object.keys(a).length>0&&Object.keys(a[t]).length>0?r.a.createElement(ge.Bar,{data:n}):"")}),ye=(a(272),function(){var e=Object(s.c)((function(e){return e.SubmitDataReducer})),t=e.key,a=e.data,n=null,c=!1;if(Object.keys(a).length>0&&Object.keys(a[t]).length>0){var i=[],o=[],l={label:"Estimated Time",data:[],fill:!1,borderColor:"rgb(93, 66, 245)",tension:.1},u={label:"Actual Time",data:[],fill:!1,borderColor:"rgb(245, 5, 25)",tension:.1};if(Object.keys(a).length>0){for(var m in a){i.push(a[m].date);var d=a[m].totalTimeData.key;for(var b in a[m].totalTimeData.originalTime[d])l.data.push((a[m].totalTimeData.originalTime[d][b]/3600).toFixed(3));for(var T in a[m].totalTimeData.totalTime[d]){var p=0;p=a[m].totalTimeData.totalTime[d][T]<0?-1*a[m].totalTimeData.totalTime[d][T]+a[m].totalTimeData.originalTime[d][T]:a[m].totalTimeData.originalTime[d][T]-a[m].totalTimeData.totalTime[d][T],u.data.push((p/3600).toFixed(3))}}o=[l,u],c=!0}n={labels:i,datasets:o}}return r.a.createElement("div",{className:"timeConparisonBarLineContainer-".concat(c?"":"hidelineChartContainer")},Object.keys(a).length>0&&Object.keys(a[t]).length>0?r.a.createElement(ge.Line,{className:"lineChart",data:n}):"")}),he=a(130),je=a.n(he),_e=a(312),Le=a(313),Ce=a(131),Re=a.n(Ce),Se=(a(273),function(){return r.a.createElement("nav",{className:"headerContainer"},r.a.createElement("div",{className:"logoContainer"},r.a.createElement("div",{className:"logo"},"TimeLogger")),r.a.createElement("div",{className:"optionContainer"},r.a.createElement("div",{className:"option"})))}),De=(a(274),function(){var e=Object(s.b)();return r.a.createElement("div",{className:"mainContainerHomePage"},r.a.createElement(Se,null),r.a.createElement("div",{className:"restoreReducer"},r.a.createElement(_e.a,{"aria-label":"reset",color:"primary",onClick:function(){e(J()),e(E()),setTimeout((function(){window.location.reload(!1)}),500)}},r.a.createElement(je.a,null))),r.a.createElement("div",{className:"openNotes"},r.a.createElement(Le.a,{color:"primary","aria-label":"add",onClick:function(){return e({type:fe.TOGGLE_NOTE_DISPLAY})}},r.a.createElement(Re.a,null)),r.a.createElement(Oe,{className:"notesContainerMainHome"})),r.a.createElement("div",{className:"totalTimeContainer"},r.a.createElement(v,null)),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"switchButtonsContainer"},r.a.createElement(z,null)),r.a.createElement("div",{className:"taskListContainer"},r.a.createElement(se,{className:"toDoListMain"}),r.a.createElement(be,{clasName:"remainderMain"}),r.a.createElement(oe,{className:"completedTaskListMain"})),r.a.createElement("div",{className:"reportButtonContainer"},r.a.createElement(ke,null))),r.a.createElement("div",{className:"graphsContainer"},r.a.createElement("div",{className:"chartConatiner1"},r.a.createElement(Ae,null),"1",r.a.createElement(Ne,null)),r.a.createElement("div",{className:"chartContainer2"},r.a.createElement(ye,null))))});var xe=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(De,null))},we=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,319)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),c(e),i(e)}))},Ie=a(132),Be=a(31),Me=(a(275),a(135)),Ue=a(77),Ke=a(133),Pe=a.n(Ke),Fe=a(7),Ve=a(39),We={key:0,totalTime:{},originalTime:{},countDownProgress:!1,lastUpdatedTime:null},Ge={instagram:{isActive:!1,time:0,color:"rgb(243, 9, 192)"},faceBook:{isActive:!1,time:0,color:"rgb(10, 79, 158)"},youtube:{isActive:!1,time:0,color:"rgb(192, 9, 9)"},call:{isActive:!1,time:0,color:"rgb(109, 75, 204)"},messaging:{isActive:!1,time:0,color:"rgb(43, 192, 43)"},sleep:{isActive:!1,time:0,color:"rgb(36, 109, 128)"},excercise:{isActive:!1,time:0,color:"rgb(13, 121, 94)"},tea:{isActive:!1,time:0,color:"rgb(102, 50, 7)"},food:{isActive:!1,time:0,color:"rgb(48, 197, 185)"},releaseAll:{isActive:!0,time:0,color:"rgb(48, 1, 1)"},miscelaneous:{isActive:!1,time:0,color:"rgb(115, 20, 223)"},currentActive:"releaseAll"},ze={taskList:{},activeTask:null,notification:null,remainderLastUpdate:null},Ye={key:0,data:{}},He={noteKey:0,notes:{},noteDisplay:!1},Je={key:"root",storage:Pe.a,whiteList:["TotalTimeReducer","SubmitDataReducer"]},qe=Object(Be.b)({TotalTimeReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:We,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d.SAVE_TOTAL_TIME:e.key=Object.keys(e.totalTime).length;var a=ce();return e.totalTime[e.key]=Object(Ve.a)({},a,t.payload),e.originalTime[e.key]=Object(Ve.a)({},a,t.payload),Object(Fe.a)(Object(Fe.a)({},e),{},{key:e.key,totalTime:Object(Fe.a)({},e.totalTime),originalTime:Object(Fe.a)({},e.originalTime)});case d.START_COUNTDOWN:var n=ce();return e.totalTime[e.key][n]=e.totalTime[e.key][n]-parseInt(t.seconds),Object(Fe.a)(Object(Fe.a)({},e),{},{totalTime:Object(Fe.a)({},e.totalTime),countDownProgress:!0});case d.UPDATE_LAST_RUN_TIME:return Object(Fe.a)(Object(Fe.a)({},e),{},{lastUpdatedTime:t.seconds});case d.PAUSE_COUNTDOWN:return e.countDownProgress=!1,Object(Fe.a)(Object(Fe.a)({},e),{},{countDownProgress:!1,lastUpdatedTime:null});case d.SET_COUNTDOWN_TRUE:return Object(Fe.a)(Object(Fe.a)({},e),{},{countDownProgress:!0});case d.UPDATE_COUNTDOWN:return e;case d.REMOVE_ALL_TIME:return{key:0,totalTime:{},originalTime:{},countDownProgress:!1,lastUpdatedTime:null};default:return e}},BreakButtonReducer:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ge,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case W.START_BREAK:var n="",r=a.breakName;return"releaseAll"!==a.breakName?(t[t.currentActive].isActive=!1,t[a.breakName].isActive=!0,t.currentActive=a.breakName,n=t.currentActive):(t[t.currentActive].isActive=!1,t.currentActive=a.breakName,n=t.currentActive),Object(Fe.a)(Object(Fe.a)({},t),{},(e={},Object(Ve.a)(e,r,Object(Fe.a)({},t[r])),Object(Ve.a)(e,n,Object(Fe.a)({},t[n])),e));case W.PAUSE_BREAK:return t[t.currentActive].isActive=!1,Object(Fe.a)(Object(Fe.a)({},t),{},Object(Ve.a)({},a.breakName,Object(Fe.a)({},t[a.breakName])));case W.GET_BREAK_COLOR:var c=t[a.breakName].color;return c;default:return t}},TaskReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ze,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Y.ADD_TASK:if(void 0===e.taskList[t.taskName]){var a={time:0,paused:!0,isCompleted:!1,color:"rgb(239, 68, 11)",percentage:0,type:"task"};e.taskList[t.taskName]=a}return Object(Fe.a)(Object(Fe.a)({},e),{},{taskList:Object(Fe.a)({},e.taskList)});case Y.REMOVE_TASK:return delete e.taskList[t.taskName],e.activeTask===t.taskName&&(e.activeTask=null),Object(Fe.a)(Object(Fe.a)({},e),{},{taskList:Object(Fe.a)({},e.taskList),activeTask:e.activeTask,notification:null});case Y.PAUSE_TASK:return e.taskList[t.taskName].paused=!0,e.activeTask=null,Object(Fe.a)(Object(Fe.a)({},e),{},{taskList:Object(Fe.a)({},e.taskList),activeTask:e.activeTask});case Y.START_TASK:for(var n in e.taskList)e.taskList[n].paused=!0;return e.taskList[t.taskName].paused=!1,void 0!==t.seconds&&void 0!==t.totalTime&&"remainder"!==e.taskList[t.taskName].type&&(e.taskList[t.taskName].time=parseInt(e.taskList[t.taskName].time)+parseInt(t.seconds),e.taskList[t.taskName].percentage=(e.taskList[t.taskName].time/parseInt(t.totalTime)*parseInt(100)).toFixed(1)),e.activeTask=t.taskName,Object(Fe.a)(Object(Fe.a)({},e),{},{taskList:Object(Fe.a)({},e.taskList),activeTask:e.activeTask});case Y.COMPLETED_TASK:return e.taskList[t.taskName].isCompleted=!0,e.activeTask===t.taskName&&(e.activeTask=null),Object(Fe.a)(Object(Fe.a)({},e),{},{taskList:Object(Fe.a)({},e.taskList),activeTask:e.activeTask});case Y.ADD_BREAK_TASK:for(var r in e.taskList)r!==t.taskName&&(e.taskList[r].paused=!0);if("releaseAll"!==t.taskName)if(void 0===e.taskList[t.taskName]){var c={time:0,paused:!1,isCompleted:!1,color:t.color,percentage:0,type:"break"};e.taskList[t.taskName]=c,e.activeTask=t.taskName}else e.taskList[t.taskName].paused?(e.taskList[t.taskName].paused=!1,e.activeTask=t.taskName):(e.taskList[t.taskName].paused=!0,e.activeTask=null);return Object(Fe.a)(Object(Fe.a)({},e),{},{taskList:Object(Fe.a)({},e.taskList),activeTask:e.activeTask});case Y.REMOVE_ALL_TASK:return Object(Fe.a)(Object(Fe.a)({},e),{},{taskList:{},activeTask:null,notification:null});case Y.COMPLETE_ALL_TASK:for(var i in e.taskList)e.taskList[i].isCompleted=!0;return Object(Fe.a)(Object(Fe.a)({},e),{},{activeTask:null,taskList:Object(Fe.a)({},e.taskList),notification:null});case Y.ADD_REMAINDER:if(void 0===e.taskList[t.remainderName]){var s={time:t.time-Math.floor(new Date/1e3),isCompleted:!1,color:"rgb(6, 125, 38)",percentage:100,timeRemaining:t.time-Math.floor(new Date/1e3),repeat:t.repeat,type:"remainder"};e.taskList[t.remainderName]=s}return Object(Fe.a)(Object(Fe.a)({},e),{},{taskList:Object(Fe.a)({},e.taskList)});case Y.START_REMAINDER:e.notification=null;var o=0;for(var n in null===e.remainderLastUpdate?(e.remainderLastUpdate=t.seconds,o=1):(o=t.seconds-e.remainderLastUpdate,e.remainderLastUpdate=t.seconds),e.taskList)"remainder"===e.taskList[n].type&&!1===e.taskList[n].isCompleted&&(e.taskList[n].timeRemaining=parseInt(e.taskList[n].timeRemaining)-parseInt(o),e.taskList[n].timeRemaining<=0&&!1===e.taskList[n].repeat?(e.taskList[n].isCompleted=!0,e.notification=n):e.taskList[n].timeRemaining<=0&&!0===e.taskList[n].repeat&&(e.notification=n,e.taskList[n].timeRemaining=e.taskList[n].time),e.taskList[n].percentage=(e.taskList[n].timeRemaining/e.taskList[n].time*parseInt(100)).toFixed(1));return Object(Fe.a)(Object(Fe.a)({},e),{},{taskList:Object(Fe.a)({},e.taskList),notification:e.notification,remainderLastUpdate:e.remainderLastUpdate});default:return e}},SubmitDataReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Te.SUBMIT_ALL_DATA_START:return Object(Fe.a)({},e);case Te.SUBMIT_ALL_DATA_INPROGRESS:e.key=Object.keys(e.data).length;var a=ce(),n=t.taskReducer;for(var r in n)"remainder"===n[r].type&&delete n[r];var c=t.breakButtonReducer,i=t.totalTimeReducer;return e.data[e.key]={date:a,taskData:n,breakButtonData:c,totalTimeData:i},Object(Fe.a)(Object(Fe.a)({},e),{},{key:e.key,data:Object(Fe.a)({},e.data)});default:return e}},NoteReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:He,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case fe.TOGGLE_NOTE_DISPLAY:return Object(Fe.a)(Object(Fe.a)({},e),{},{noteDisplay:!e.noteDisplay});case fe.ADD_NOTE:return e.notes[e.noteKey]=t.noteText,Object(Fe.a)(Object(Fe.a)({},e),{},{noteKey:e.noteKey+1,notes:Object(Fe.a)({},e.notes)});case fe.REMOVE_NOTE:return delete e.notes[t.noteId],Object(Fe.a)(Object(Fe.a)({},e),{},{notes:Object(Fe.a)({},e.notes)});default:return e}}}),Qe=Object(Ue.a)(Je,qe),Xe=a(14),Ze=a.n(Xe),$e=a(9),et=Ze.a.mark(at),tt=Ze.a.mark(nt);function at(e){var t,a,n;return Ze.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.breakName,r.next=3,Object($e.d)((function(e){return e.BreakButtonReducer}));case 3:return a=r.sent,r.next=6,Object($e.d)((function(e){return e.TaskReducer}));case 6:return n=r.sent,r.next=9,Object($e.c)((c=t,i=a[t].color,{type:Y.ADD_BREAK_TASK,taskName:c,color:i}));case 9:if("releaseAll"===t||!1!==n.taskList[t].paused){r.next=14;break}return r.next=12,Object($e.c)(p());case 12:r.next=16;break;case 14:return r.next=16,Object($e.c)(T());case 16:case"end":return r.stop()}var c,i}),et)}function nt(){return Ze.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object($e.e)(W.START_BREAK,at);case 2:case"end":return e.stop()}}),tt)}var rt=Ze.a.mark(mt),ct=Ze.a.mark(dt),it=Ze.a.mark(bt),st=Ze.a.mark(Tt),ot=Ze.a.mark(pt),lt=Ze.a.mark(Et),ut=Ze.a.mark(kt);function mt(e){return Ze.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.type,e.taskName,e.seconds,t.next=3,Object($e.c)(p());case 3:case"end":return t.stop()}}),rt)}function dt(e){return Ze.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.type,e.taskName,t.next=3,Object($e.c)(T());case 3:case"end":return t.stop()}}),ct)}function bt(e){return Ze.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.type,e.taskName,t.next=3,Object($e.d)((function(e){return e.TaskReducer}));case 3:if(null!==t.sent.activeTask){t.next=7;break}return t.next=7,Object($e.c)(T());case 7:case"end":return t.stop()}}),it)}function Tt(){return Ze.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object($e.e)(Y.START_TASK,mt);case 2:case"end":return e.stop()}}),st)}function pt(){return Ze.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object($e.e)(Y.PAUSE_TASK,dt);case 2:case"end":return e.stop()}}),ot)}function Et(){return Ze.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object($e.e)(Y.COMPLETED_TASK,bt);case 2:case"end":return e.stop()}}),lt)}function kt(){return Ze.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object($e.e)(Y.REMOVE_TASK,bt);case 2:case"end":return e.stop()}}),ut)}var ft=a(78);a(279);ft.a.configure();var vt=Ze.a.mark(gt),Ot=Ze.a.mark(At);function gt(){var e,t,a,n,r,c,i,s,o,l,u,m,d;return Ze.a.wrap((function(T){for(;;)switch(T.prev=T.next){case 0:return e=new Date,t=e.getHours(),a=e.getMinutes(),n=e.getSeconds(),T.next=6,Object($e.d)((function(e){return e.TotalTimeReducer}));case 6:return r=T.sent,c=r.key,i=r.countDownProgress,s=r.originalTime,o=r.lastUpdatedTime,T.next=13,Object($e.d)((function(e){return e.TaskReducer}));case 13:if(l=T.sent,23!==parseInt(t)||59!==parseInt(a)||58!==parseInt(n)){T.next=22;break}return window.alert("The day is about to end, and a new day will begin, We will Save your progress so far"),T.next=18,Object($e.c)(pe());case 18:setTimeout((function(){}),500),window.location.reload(!1),T.next=44;break;case 22:return u=s[c][ce()],m=ie(),T.next=26,Object($e.c)(q(m));case 26:if(null!==l.notification&&(p=l.notification,ft.a.info("Hi There!!! You had set a remainder for ".concat(p),{position:ft.a.POSITION.TOP_RIGHT,autoClose:!1}),new Audio("https://www.fesliyanstudios.com/play-mp3/4384").play()),!i){T.next=44;break}if(null!==o){T.next=37;break}return T.next=31,Object($e.c)(k(m));case 31:return T.next=33,Object($e.c)(b(1));case 33:return T.next=35,Object($e.c)(H(l.activeTask,1,u));case 35:T.next=44;break;case 37:return d=m-o,T.next=40,Object($e.c)(k(m));case 40:return T.next=42,Object($e.c)(b(d));case 42:return T.next=44,Object($e.c)(H(l.activeTask,d,u));case 44:case"end":return T.stop()}var p}),vt)}function At(){return Ze.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object($e.e)(d.UPDATE_COUNTDOWN,gt);case 2:case"end":return e.stop()}}),Ot)}var Nt=Ze.a.mark(ht),yt=Ze.a.mark(jt);function ht(){var e,t,a;return Ze.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object($e.c)(G("releaseAll"));case 2:return n.next=4,Object($e.c)({type:Y.COMPLETE_ALL_TASK});case 4:return n.next=6,Object($e.d)((function(e){return e.TaskReducer.taskList}));case 6:return e=n.sent,n.next=9,Object($e.d)((function(e){return e.BreakButtonReducer}));case 9:return t=n.sent,n.next=12,Object($e.d)((function(e){return e.TotalTimeReducer}));case 12:return a=n.sent,n.next=15,Object($e.c)(Ee(e,t,a));case 15:return n.next=17,Object($e.c)(J());case 17:return n.next=19,Object($e.c)(E());case 19:case"end":return n.stop()}}),Nt)}function jt(){return Ze.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object($e.e)(Te.SUBMIT_ALL_DATA_START,ht);case 2:case"end":return e.stop()}}),yt)}var _t=Ze.a.mark(Lt);function Lt(){return Ze.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object($e.a)([Object($e.b)(nt),Object($e.b)(Tt),Object($e.b)(pt),Object($e.b)(Et),Object($e.b)(kt),Object($e.b)(At),Object($e.b)(jt)]);case 2:case"end":return e.stop()}}),_t)}var Ct=Object(Me.a)(),Rt=[Ct],St=Object(Be.d)(Qe,Be.a.apply(void 0,Rt));Ct.run(Lt);var Dt=Object(Ue.b)(St);i.a.render(r.a.createElement(s.a,{store:St},r.a.createElement(Ie.a,{persistor:Dt},r.a.createElement(xe,null))),document.getElementById("root")),we()}},[[155,1,2]]]);
//# sourceMappingURL=main.ec23dc8f.chunk.js.map