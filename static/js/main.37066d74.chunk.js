(this["webpackJsonptimekeeper-frontend"]=this["webpackJsonptimekeeper-frontend"]||[]).push([[0],{180:function(e,t,a){},186:function(e,t,a){},188:function(e,t,a){},189:function(e,t,a){},190:function(e,t,a){},191:function(e,t,a){},193:function(e,t,a){},194:function(e,t,a){},195:function(e,t,a){},301:function(e,t,a){},302:function(e,t,a){},303:function(e,t,a){},304:function(e,t,a){},305:function(e,t,a){},311:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(18),r=a.n(c),s=(a(180),a(12)),i=a(32),o=a(337),l=a(60),u=a.n(l),d={SAVE_TOTAL_TIME:"SAVE_TOTAL_TIME",START_COUNTDOWN:"START_COUNTDOWN",PAUSE_COUNTDOWN:"PAUSE_COUNTDOWN",SET_COUNTDOWN_TRUE:"SET_COUNTDOWN_TRUE",UPDATE_COUNTDOWN:"UPDATE_COUNTDOWN",REMOVE_ALL_TIME:"REMOVE_ALL_TIME",UPDATE_LAST_RUN_TIME:"UPDATE_LAST_RUN_TIME"},b=function(e){return{type:d.START_COUNTDOWN,seconds:e}},j=function(){return{type:d.PAUSE_COUNTDOWN}},m=function(){return{type:d.SET_COUNTDOWN_TRUE}},O=function(){return{type:d.REMOVE_ALL_TIME}},T=function(e){return{type:d.UPDATE_LAST_RUN_TIME,seconds:e}},p=function(e){var t=[0,0,0,0,0,0];e<0&&(e*=-1,t[6]="-");var a=parseInt(e),n=Math.floor(a/3600),c=3600*n,r=Math.floor((a-c)/60),s=a-c-60*r;if(n<10)t[1]=n;else{var i=n.toString();t[0]=i.substr(0,1),t[1]=i.substr(1)}if(r<10)t[3]=r;else{var o=r.toString();t[2]=o.substr(0,1),t[3]=o.substr(1)}if(s<10)t[5]=s;else{var l=s.toString();t[4]=l.substr(0,1),t[5]=l.substr(1)}return t},k=(a(186),a(2)),v=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.TotalTimeReducer})),a=t.key,c=t.totalTime,r=Object(s.c)((function(e){return e.TaskReducer})).taskList,l=Object(n.useState)([]),b=Object(i.a)(l,2),j=b[0],m=b[1],O=[];Object(n.useEffect)((function(){T();var t=setInterval((function(){j.length>0&&(e({type:d.UPDATE_COUNTDOWN}),T(),m(O))}),1e3);return function(){return clearInterval(t)}}),[j.length]);var T=function(){void 0!==c[a]&&void 0!==c[a][f()]&&(O=p(c[a][f()]),m(O))},v=function(e){T(),O[parseInt(e.target.name)]=e.target.value,parseInt(e.target.name)<5?(document.getElementById(parseInt(e.target.name)+1).disabled=!1,document.getElementById(parseInt(e.target.name)+1).focus(),document.getElementById(parseInt(e.target.name)+1).value="",0!==parseInt(e.target.name)&&(document.getElementById(parseInt(e.target.name)).disabled=!0)):(document.getElementById(parseInt(e.target.name)).blur(),document.getElementById(parseInt(e.target.name)).disabled=!0)},h=function(e){document.getElementById(parseInt(e.target.name)).value=""},f=function(){var e=new Date,t=e.getDate(),a=e.getMonth()+1,n=e.getFullYear();return t.toString()+a.toString()+n.toString()},g=function(){m(O);var t=function(e){return 3600*(10*parseInt(e[0])+parseInt(e[1]))+60*(10*parseInt(e[2])+parseInt(e[3]))+(10*parseInt(e[4])+parseInt(e[5]))}(O);e({type:d.SAVE_TOTAL_TIME,payload:t})},x="timeBox";j.length>6&&(x="timeBox-negative");var A=!1;return j.length>0&&Object.keys(r).length>0&&(A=!0),Object(k.jsxs)("div",{className:"timcardsContainer",children:[j.length>6?Object(k.jsx)("span",{className:"timeBoxNegative",children:"-"}):"",Object(k.jsx)("input",{className:x,placeholder:"H",type:"text",name:"0",onFocus:h,id:"0",value:A?j[0]:O[0],maxlength:"1",onChange:v}),Object(k.jsx)("input",{disabled:!0,className:x,placeholder:"H",type:"text",name:"1",onFocus:h,id:"1",value:A?j[1]:O[1],maxlength:"1",onChange:v}),Object(k.jsx)("div",{className:"timerText",children:"H"}),Object(k.jsx)("input",{disabled:!0,className:x,placeholder:"M",type:"text",name:"2",onFocus:h,id:"2",value:A?j[2]:O[2],maxlength:"1",onChange:v}),Object(k.jsx)("input",{disabled:!0,className:x,placeholder:"M",type:"text",name:"3",onFocus:h,id:"3",value:A?j[3]:O[3],maxlength:"1",onChange:v}),Object(k.jsx)("div",{className:"timerText",children:"M"}),Object(k.jsx)("input",{disabled:!0,className:x,placeholder:"S",type:"text",name:"4",onFocus:h,id:"4",value:A?j[4]:O[4],maxlength:"1",onChange:v}),Object(k.jsx)("input",{disabled:!0,className:x,placeholder:"S",type:"text",name:"5",onFocus:h,id:"5",onfocus:'this.value=""',value:A?j[5]:O[5],maxlength:"1",onChange:v}),Object(k.jsx)("div",{className:"timerText",children:"S"}),c[a]?"":Object(k.jsx)(o.a,{variant:"contained",color:"primary",className:"saveTimeBtn",startIcon:Object(k.jsx)(u.a,{}),onClick:function(){return g()},children:"Save Time"})]})},h=a(135),f=a.n(h),g=a(136),x=a.n(g),A=a(137),N=a.n(A),y=a(138),E=a.n(y),_=a(139),L=a.n(_),C=a(140),S=a.n(C),R=a(141),D=a.n(R),w=a(143),I=a.n(w),M=a(142),B=a.n(M),U=a(145),K=a.n(U),P=(a(188),a(348)),F=a(144),V=a.n(F),W={START_BREAK:"START_BREAK",PAUSE_BREAK:"PAUSE_BREAK",GET_BREAK_COLOR:"GET_BREAK_COLOR"},G=function(e){return{type:W.START_BREAK,breakName:e}},z=function(){var e=Object(s.c)((function(e){return e.BreakButtonReducer})),t=Object(s.c)((function(e){return e.TotalTimeReducer})),a=t.key,n=t.totalTime,c=Object(s.b)(),r=function(e){c(G(e))};return Object(k.jsx)("div",{className:"breakbuttonsMainContainer",children:n[a]?Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(P.a,{title:"Instagram",children:Object(k.jsx)("button",{className:"brakButton-insta-".concat(e.instagram.isActive?"active":""),onClick:function(){return r("instagram")},children:Object(k.jsx)(f.a,{style:{fill:"white"},fontSize:"large"})})}),Object(k.jsx)(P.a,{title:"Facebook",children:Object(k.jsx)("button",{className:"brakButton-fb-".concat(e.faceBook.isActive?"active":""),onClick:function(){return r("faceBook")},children:Object(k.jsx)(x.a,{style:{fill:"white"},fontSize:"large"})})}),Object(k.jsx)(P.a,{title:"Youtube",children:Object(k.jsx)("button",{className:"brakButton-youtube-".concat(e.youtube.isActive?"active":""),onClick:function(){return r("youtube")},children:Object(k.jsx)(N.a,{style:{fill:"white"},fontSize:"large"})})}),Object(k.jsx)(P.a,{title:"Calls",children:Object(k.jsx)("button",{className:"brakButton-calls-".concat(e.call.isActive?"active":""),onClick:function(){return r("call")},children:Object(k.jsx)(E.a,{style:{fill:"white"},fontSize:"large"})})}),Object(k.jsx)(P.a,{title:"Messaging",children:Object(k.jsx)("button",{className:"brakButton-messaging-".concat(e.messaging.isActive?"active":""),onClick:function(){return r("messaging")},children:Object(k.jsx)(L.a,{style:{fill:"white"},fontSize:"large"})})}),Object(k.jsx)(P.a,{title:"Sleep",children:Object(k.jsx)("button",{className:"brakButton-sleep-".concat(e.sleep.isActive?"active":""),onClick:function(){return r("sleep")},children:Object(k.jsx)(S.a,{style:{fill:"white"},fontSize:"large"})})}),Object(k.jsx)(P.a,{title:"Excercise",children:Object(k.jsx)("button",{className:"brakButton-excesise-".concat(e.excercise.isActive?"active":""),onClick:function(){return r("excercise")},children:Object(k.jsx)(D.a,{style:{fill:"white"},fontSize:"large"})})}),Object(k.jsx)(P.a,{title:"Food",children:Object(k.jsx)("button",{className:"brakButton-food-".concat(e.food.isActive?"active":""),onClick:function(){return r("food")},children:Object(k.jsx)(B.a,{style:{fill:"white"},fontSize:"large"})})}),Object(k.jsx)(P.a,{title:"Tea/Coffee",children:Object(k.jsx)("button",{className:"brakButton-tea-".concat(e.tea.isActive?"active":""),onClick:function(){return r("tea")},children:Object(k.jsx)(I.a,{style:{fill:"white"},fontSize:"large"})})}),Object(k.jsx)(P.a,{title:"Miscelaneous Task",children:Object(k.jsx)("button",{className:"brakButton-misc-".concat(e.miscelaneous.isActive?"active":""),onClick:function(){return r("miscelaneous")},children:Object(k.jsx)(V.a,{style:{fill:"white"},fontSize:"large"})})}),Object(k.jsx)(P.a,{title:"Release All",children:Object(k.jsx)("button",{className:"brakButton-eject-".concat(e.releaseAll.isActive?"active":""),onClick:function(){return r("releaseAll")},children:Object(k.jsx)(K.a,{style:{fill:"white"},fontSize:"large"})})})]}):""})},Y=(a(189),{ADD_TASK:"ADD_TASK",REMOVE_TASK:"REMOVE_TASK",PAUSE_TASK:"PAUSE_TASK",START_TASK:"START_TASK",COMPLETED_TASK:"COMPLETED_TASK",ADD_BREAK_TASK:"ADD_BREAK_TASK",REMOVE_ALL_TASK:"REMOVE_ALL_TASK",COMPLETE_ALL_TASK:"COMPLETE_ALL_TASK",ADD_REMAINDER:"ADD_REMAINDER",START_REMAINDER:"START_REMAINDER"}),H=function(e,t,a){return{type:Y.START_TASK,taskName:e,seconds:t,totalTime:a}},J=function(){return{type:Y.REMOVE_ALL_TASK}},q=function(e){return{type:Y.START_REMAINDER,seconds:e}},Q=a(146),X=a.n(Q),Z=a(147),$=a.n(Z),ee=a(148),te=a.n(ee),ae=a(85),ne=a.n(ae),ce=function(e){var t=e.completed,a=e.bgColor,n=e.taskName,c=e.paused,r=e.percentage,i=e.type,o=e.time,l=Object(s.b)(),u={height:"100%",width:"".concat(r,"%"),backgroundColor:"".concat(a),textAlign:"right",borderRadius:"5px",transition:"width 1s ease-in-out"};return Object(k.jsx)(P.a,{title:n.toUpperCase(),placement:"right-start",arrow:!0,children:Object(k.jsxs)("div",{className:"taskMainContainer",style:{position:"relative",height:"15%",width:"100%",backgroundColor:"#e0e0de",borderRadius:"10px","margin-top":5,display:"flex"},children:[Object(k.jsx)("div",{className:"contentContainer",style:u}),Object(k.jsxs)("div",{className:"taskContent",style:{position:"absolute",display:"flex",right:"50%",top:"10%",textAlign:"right","font-weight":"bold"},children:[Object(k.jsx)("span",{style:{position:"absolute",top:"1vh",left:"-3vw",color:"black",fontWeight:"bold","z-index":-1,width:"10vw"},children:"".concat(o[0]+""+o[1]+":"+o[2]+o[3]+":"+o[4]+o[5],"  -  ").concat(r,"%")}),Object(k.jsx)("div",{className:"taskName",style:{position:"absolute",top:"1vh",color:"black",right:"1.9vw","text-align":"left",width:"11vw","margin-left":"10%"},children:"".concat(n.toUpperCase().slice(0,14)).concat(n.length>14?"...":"")}),t&&"remainder"!==i?"":Object(k.jsxs)("div",{className:"iconsList",style:{position:"absolute",top:"0.5vh",display:"flex",left:"1vw","padding-left":"7.5vw",textAlign:"right"},children:[c?"remainder"!==i?Object(k.jsx)(P.a,{title:"Start ".concat(n.toUpperCase()),arrow:!0,children:Object(k.jsx)("div",{className:"playButton",children:Object(k.jsx)(X.a,{onClick:function(){return l(H(n))}},"".concat(n,"-playBtn"))})}):"":"remainder"!==i?Object(k.jsx)(P.a,{title:"Pause ".concat(n.toUpperCase()),arrow:!0,children:Object(k.jsx)("div",{className:"playButton",children:Object(k.jsx)($.a,{onClick:function(){return l(function(e){return{type:Y.PAUSE_TASK,taskName:e}}(n))}},"".concat(n,"-pauseBtn"))})}):"","task"!==i?"":Object(k.jsx)(P.a,{title:"Mark Complete ".concat(n.toUpperCase()),arrow:!0,children:Object(k.jsx)("div",{className:"completedButton",children:Object(k.jsx)(te.a,{onClick:function(){return l(function(e){return{type:Y.COMPLETED_TASK,taskName:e}}(n))}})})}),"break"===i||r>0&&"remainder"!==i?"":Object(k.jsx)(P.a,{title:"Remove ".concat(n.toUpperCase()),arrow:!0,children:Object(k.jsx)("div",{className:"removeButton",children:Object(k.jsx)(ne.a,{onClick:function(){return l(function(e){return{type:Y.REMOVE_TASK,taskName:e}}(n))}},"".concat(n,"-cancelBtn"))})})]})]})]})})},re=function(){var e=new Date,t=e.getDate(),a=e.getMonth()+1,n=e.getFullYear();return t.toString()+a.toString()+n.toString()},se=function(){return Math.floor((new Date).getTime()/1e3)},ie=function(){var e=new Date,t=e.getDate();t<10&&(t="0".concat(t));var a=e.getMonth()+1;a<10&&(a="0".concat(a));var n=e.getFullYear();return t.toString()+a.toString()+n.toString()},oe=function(){var e=Object(s.c)((function(e){return e.TaskReducer})).taskList,t=Object(s.c)((function(e){return e.TotalTimeReducer})),a=t.key,c=t.totalTime,r=Object(s.b)(),l=Object(n.useState)(),d=Object(i.a)(l,2),b=d[0],j=d[1];return Object(k.jsx)(k.Fragment,{children:void 0!==c[a]&&c[a][re()]?Object(k.jsxs)("div",{className:"toDoMainContainer",children:[Object(k.jsx)("span",{className:"headingToDo",children:"Task List"}),Object(k.jsx)("div",{className:"addTaskinpputContainer",children:Object(k.jsxs)("div",{className:"addTaskContainer",children:[Object(k.jsx)("input",{value:b,onChange:function(e){j(e.target.value)},className:"addTaskText",id:"outlined-basic",placeholder:"Add Task",variant:"outlined",color:"primary"}),Object(k.jsx)(o.a,{variant:"contained",color:"primary",className:"saveTaskBtn-".concat(b?"enabled":"disabled"),startIcon:Object(k.jsx)(u.a,{}),onClick:function(){b&&(r(function(e){return{type:Y.ADD_TASK,taskName:e}}(b)),j(""),document.getElementById("outlined-basic").blur())}}),Object(k.jsx)("hr",{})]})}),Object(k.jsx)("div",{className:"addedTaskListContainer",children:Object.keys(e).map((function(t){return e[t].isCompleted||"remainder"===e[t].type?"":Object(k.jsx)(ce,{type:e[t].type,completed:e[t].isCompleted,bgColor:e[t].color,taskName:t,paused:e[t].paused,percentage:e[t].percentage,time:p(e[t].time)},t)}))})]}):""})},le=(a(190),function(){var e=Object(s.c)((function(e){return e.TaskReducer})).taskList,t=Object(s.c)((function(e){return e.TotalTimeReducer})),a=t.key,n=t.totalTime;return Object(k.jsx)(k.Fragment,{children:void 0!==n[a]&&n[a][re()]?Object(k.jsxs)("div",{className:"completedTaskListMainContainer",children:[Object(k.jsx)("span",{className:"headingCompleted",children:"Completed Task List"}),Object(k.jsx)("div",{className:"completedTaskListContainer",children:Object.keys(e).map((function(t){return e[t].isCompleted?Object(k.jsx)(ce,{type:e[t].type,completed:e[t].isCompleted,bgColor:e[t].color,taskName:t,paused:e[t].paused,percentage:e[t].percentage,time:p(e[t].time)},t):""}))})]}):""})}),ue=(a(191),a(155)),de=a(27),be=a(345),je=a(347),me=function(){var e=Object(s.c)((function(e){return e.TaskReducer})).taskList,t=Object(s.c)((function(e){return e.TotalTimeReducer})),a=t.key,c=t.totalTime,r=Object(n.useState)(),l=Object(i.a)(r,2),d=l[0],b=l[1],j=Object(n.useState)(),m=Object(i.a)(j,2),O=m[0],T=m[1],v=Object(n.useState)(!1),h=Object(i.a)(v,2),f=h[0],g=h[1],x=Object(s.b)();return Object(k.jsx)(k.Fragment,{children:void 0!==c[a]&&c[a][re()]?Object(k.jsxs)("div",{className:"remainderMainContainer",children:[Object(k.jsx)("span",{className:"headingremainder",children:"Remainder List"}),Object(k.jsx)("div",{className:"addRemainderinpputContainer",children:Object(k.jsxs)("div",{className:"addRemainderContainer",children:[Object(k.jsxs)("div",{className:"remainderAddInputs",children:[Object(k.jsx)("input",{value:d,onChange:function(e){return b(e.target.value)},className:"addRemainderText",id:"outlined-basic",placeholder:"Add Remainder",variant:"outlined",color:"primary",type:"text"}),Object(k.jsx)(de.a,{utils:ue.a,children:Object(k.jsx)(be.a,{className:"timeSelector",value:void 0!==O?new Date(1e3*O):new Date,onChange:function(e){T(Math.floor(new Date(e).getTime()/1e3)),void 0!==O&&(O-se())/60<0&&(!0,T(void 0))},ampm:!1})})]}),Object(k.jsxs)("div",{className:"minutesFromNowContainer",children:[Object(k.jsx)(je.a,{inputProps:{"aria-label":"Checkbox Repeat"},style:{color:"white"},color:"primary",className:"repeatSelectCheckBox",onChange:function(e){return g(e.target.checked)},checked:f}),Object(k.jsxs)("span",{className:"minutesFromNow",children:[" ","Repeat Every ".concat(void 0!==O?((O-se())/60).toFixed(1):0," Minutes From Now")]}),Object(k.jsx)(o.a,{variant:"contained",color:"primary",className:"saveRemainderBtn",startIcon:Object(k.jsx)(u.a,{}),onClick:function(){x(function(e,t,a){return{type:Y.ADD_REMAINDER,remainderName:e,time:t,repeat:a}}(d,O,f)),b(""),T(void 0),g(!1),document.getElementById("outlined-basic").blur()},disabled:void 0===O})]}),O-se()<0?Object(k.jsx)("span",{className:"timeError",children:"Please select a future time"}):""]})}),Object(k.jsx)("div",{className:"addedRemainderListContainer",children:Object.keys(e).map((function(t){return"remainder"===e[t].type?Object(k.jsx)(ce,{type:e[t].type,completed:e[t].isCompleted,bgColor:e[t].color,taskName:t,paused:e[t].paused,percentage:e[t].percentage,time:p(e[t].timeRemaining)},t):""}))})]}):""})},Oe={SUBMIT_ALL_DATA_START:"SUBMIT_ALL_DATA_START",SUBMIT_ALL_DATA_INPROGRESS:"SUBMIT_ALL_DATA_INPROGRESS"},Te=function(){return{type:Oe.SUBMIT_ALL_DATA_START}},pe=function(e,t,a){return{type:Oe.SUBMIT_ALL_DATA_INPROGRESS,breakButtonReducer:t,taskReducer:e,totalTimeReducer:a}},ke=(a(193),function(){var e=Object(s.c)((function(e){return e.TotalTimeReducer})),t=e.key,a=e.totalTime,n=Object(s.b)();return Object(k.jsx)(k.Fragment,{children:a[t]?Object(k.jsx)(o.a,{className:"finishDayBtn",variant:"contained",color:"secondary",onClick:function(){n(Te()),setTimeout((function(){window.location.reload(!1)}),500)},children:"Finish Your Day"}):""})}),ve={TOGGLE_NOTE_DISPLAY:"TOGGLE_NOTE_DISPLAY",ADD_NOTE:"ADD_NOTE",REMOVE_NOTE:"REMOVE_NOTE"},he=(a(194),function(e){var t=e.noteMsg,a=e.noteKey,n=Object(s.b)();return Object(k.jsxs)("div",{className:"notesContainer",children:[Object(k.jsx)("div",{className:"notesText",children:t}),Object(k.jsx)("div",{className:"removeButton",children:Object(k.jsx)(ne.a,{onClick:function(){return n({type:ve.REMOVE_NOTE,noteId:a})}})})]})}),fe=(a(195),function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.NoteReducer})),a=t.noteDisplay,c=t.notes,r=Object(n.useState)(""),o=Object(i.a)(r,2),l=o[0],u=o[1];return a?Object(k.jsxs)("div",{className:"notesContanerMain",children:[Object(k.jsxs)("div",{className:"notesInput",children:[Object(k.jsx)("input",{value:l,type:"text",placeholder:"Add Note",className:"noteInputs",onChange:function(e){return u(e.target.value)}}),Object(k.jsx)("button",{className:"addNoteBtn-".concat(l.length>0?"enabled":"disabled"),onClick:function(){l.length>0&&(e({type:ve.ADD_NOTE,noteText:l}),u(""))},disabled:l.length<=0,children:"Add"})]}),Object(k.jsx)("div",{className:"notesCollection",children:Object.keys(c).map((function(e){return Object(k.jsx)(he,{noteMsg:c[e],noteKey:e})}))})]}):""}),ge=a(62),xe=(a(301),function(){var e=Object(s.c)((function(e){return e.SubmitDataReducer})),t=e.key,a=e.data,n={},c=!1;if(Object.keys(a).length>0&&Object.keys(a[t]).length>0){var r=[],i=[],o=[],l=[];if(Object.keys(a).length>0){var u=a[t].taskData;for(var d in u)r.push(d.toUpperCase()),i.push((u[d].time/3600).toFixed(4)),o.push(u[d].color),l.push("rgb(255,255,255)")}n={labels:r,datasets:[{label:"# of Votes",data:i,backgroundColor:o,borderColor:l,borderWidth:2,hoverOffset:20}]},c=!0}return Object(k.jsx)("div",{className:"doughnutChartContainer-".concat(c?"":"hideBarDougnutContainer"),children:Object.keys(a).length>0&&Object.keys(a[t]).length>0?Object(k.jsx)(ge.b,{data:n}):""})}),Ae=(a(302),function(){var e=Object(s.c)((function(e){return e.SubmitDataReducer})),t=e.key,a=e.data,n={},c=!1;if(Object.keys(a).length>0&&Object.keys(a[t]).length>0){var r=[],i=[],o=[],l=[];if(Object.keys(a).length>0){var u=a[t].taskData;for(var d in u)r.push(d.toUpperCase()),i.push((u[d].time/3600).toFixed(3)),o.push(u[d].color),l.push("rgb(255,255,255)")}r.push("Estimated Total Time");var b=a[t].totalTimeData,j=Object.keys(b.originalTime[b.key])[0];i.push((b.originalTime[b.key][j]/3600).toFixed(3)),o.push("rgb(28,16,133)"),l.push("rgb(255,255,255)");var m=0;m=b.totalTime[b.key][j]<0?-1*b.totalTime[b.key][j]+b.originalTime[b.key][j]:b.originalTime[b.key][j]-b.totalTime[b.key][j],r.push("Actual Total Time"),i.push((m/3600).toFixed(3)),o.push("rgb(222, 11, 39)"),l.push("rgb(255,255,255)"),n={labels:r,datasets:[{label:"Time Comparison Chart",data:i,backgroundColor:o,borderColor:l,borderWidth:5,hoverOffset:20}]},c=!0}return Object(k.jsx)("div",{className:"timeConparisonBarChartContainer-".concat(c?"":"hideBarChartContainer"),children:Object.keys(a).length>0&&Object.keys(a[t]).length>0?Object(k.jsx)(ge.a,{data:n}):""})}),Ne=(a(303),function(){var e=Object(s.c)((function(e){return e.SubmitDataReducer})),t=e.key,a=e.data,n=null,c=!1;if(Object.keys(a).length>0&&Object.keys(a[t]).length>0){var r=[],i=[],o={label:"Estimated Time",data:[],fill:!1,borderColor:"rgb(93, 66, 245)",tension:.1},l={label:"Actual Time",data:[],fill:!1,borderColor:"rgb(245, 5, 25)",tension:.1};if(Object.keys(a).length>0){for(var u in a){var d=a[u].date,b=null;6===d.length?b="0".concat(d[0],"/0").concat(d[1],"/").concat(d.substring(2,7)):7===d.length?d.substring(2,3)<=9&&d.substring(2,3)>2?b="".concat(d.substring(0,2),"/0").concat(d.substring(2,3),"/").concat(d.substring(3,8)):d.substring(2,3)<=2&&d.substring(2,3)>=0&&(b=1==d.substring(1,2)?"0".concat(d.substring(0,1),"/").concat(d.substring(1,3),"//").concat(d.substring(3,8)):"".concat(d.substring(0,2),"/0").concat(d.substring(2,3),"//").concat(d.substring(3,8))):8===d.length&&(b="".concat(d.substring(0,2),"/").concat(d.substring(2,4),"/").concat(d.substring(4,8))),r.push(b);var j=a[u].totalTimeData.key;for(var m in a[u].totalTimeData.originalTime[j])o.data.push((a[u].totalTimeData.originalTime[j][m]/3600).toFixed(3));for(var O in a[u].totalTimeData.totalTime[j]){var T=0;T=a[u].totalTimeData.totalTime[j][O]<0?-1*a[u].totalTimeData.totalTime[j][O]+a[u].totalTimeData.originalTime[j][O]:a[u].totalTimeData.originalTime[j][O]-a[u].totalTimeData.totalTime[j][O],l.data.push((T/3600).toFixed(3))}}i=[o,l],c=!0}n={labels:r,datasets:i}}return Object(k.jsx)("div",{className:"timeConparisonBarLineContainer-".concat(c?"":"hidelineChartContainer"),children:Object.keys(a).length>0&&Object.keys(a[t]).length>0?Object(k.jsx)(ge.c,{className:"lineChart",data:n}):""})}),ye=a(151),Ee=a.n(ye),_e=a(343),Le=a(344),Ce=a(152),Se=a.n(Ce),Re=(a(304),function(){return Object(k.jsxs)("nav",{className:"headerContainer",children:[Object(k.jsx)("div",{className:"logoContainer",children:Object(k.jsx)("div",{className:"logo",children:"TimeLogger"})}),Object(k.jsx)("div",{className:"optionContainer",children:Object(k.jsx)("div",{className:"option"})})]})}),De=(a(305),function(){var e=Object(s.b)();return Object(k.jsxs)("div",{className:"mainContainerHomePage",children:[Object(k.jsx)(Re,{}),Object(k.jsx)("div",{className:"restoreReducer",children:Object(k.jsx)(_e.a,{"aria-label":"reset",color:"primary",onClick:function(){e(J()),e(O()),setTimeout((function(){window.location.reload(!1)}),500)},children:Object(k.jsx)(Ee.a,{})})}),Object(k.jsxs)("div",{className:"openNotes",children:[Object(k.jsx)(Le.a,{color:"primary","aria-label":"add",onClick:function(){return e({type:ve.TOGGLE_NOTE_DISPLAY})},children:Object(k.jsx)(Se.a,{})}),Object(k.jsx)(fe,{className:"notesContainerMainHome"})]}),Object(k.jsx)("div",{className:"totalTimeContainer",children:Object(k.jsx)(v,{})}),Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("div",{className:"switchButtonsContainer",children:Object(k.jsx)(z,{})}),Object(k.jsxs)("div",{className:"taskListContainer",children:[Object(k.jsx)(oe,{className:"toDoListMain"}),Object(k.jsx)(me,{clasName:"remainderMain"}),Object(k.jsx)(le,{className:"completedTaskListMain"})]}),Object(k.jsx)("div",{className:"reportButtonContainer",children:Object(k.jsx)(ke,{})})]}),Object(k.jsxs)("div",{className:"graphsContainer",children:[Object(k.jsxs)("div",{className:"chartConatiner1",children:[Object(k.jsx)(xe,{}),"1",Object(k.jsx)(Ae,{})]}),Object(k.jsx)("div",{className:"chartContainer2",children:Object(k.jsx)(Ne,{})})]})]})});var we=function(){return Object(k.jsx)("div",{className:"App",children:Object(k.jsx)(De,{})})},Ie=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,350)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))},Me=a(153),Be=a(34),Ue=(a(306),a(156)),Ke=a(86),Pe=a(154),Fe=a.n(Pe),Ve=a(6),We=a(19),Ge={key:0,totalTime:{},originalTime:{},countDownProgress:!1,lastUpdatedTime:null},ze={instagram:{isActive:!1,time:0,color:"rgb(243, 9, 192)"},faceBook:{isActive:!1,time:0,color:"rgb(10, 79, 158)"},youtube:{isActive:!1,time:0,color:"rgb(192, 9, 9)"},call:{isActive:!1,time:0,color:"rgb(109, 75, 204)"},messaging:{isActive:!1,time:0,color:"rgb(43, 192, 43)"},sleep:{isActive:!1,time:0,color:"rgb(36, 109, 128)"},excercise:{isActive:!1,time:0,color:"rgb(13, 121, 94)"},tea:{isActive:!1,time:0,color:"rgb(102, 50, 7)"},food:{isActive:!1,time:0,color:"rgb(48, 197, 185)"},releaseAll:{isActive:!0,time:0,color:"rgb(48, 1, 1)"},miscelaneous:{isActive:!1,time:0,color:"rgb(115, 20, 223)"},currentActive:"releaseAll"},Ye={taskList:{},activeTask:null,notification:null,remainderLastUpdate:null},He={key:0,data:{}},Je={noteKey:0,notes:{},noteDisplay:!1},qe={key:"root",storage:Fe.a,whiteList:["TotalTimeReducer","SubmitDataReducer"]},Qe=Object(Be.b)({TotalTimeReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d.SAVE_TOTAL_TIME:e.key=Object.keys(e.totalTime).length;var a=re();return e.totalTime[e.key]=Object(We.a)({},a,t.payload),e.originalTime[e.key]=Object(We.a)({},a,t.payload),Object(Ve.a)(Object(Ve.a)({},e),{},{key:e.key,totalTime:Object(Ve.a)({},e.totalTime),originalTime:Object(Ve.a)({},e.originalTime)});case d.START_COUNTDOWN:var n=re();return e.totalTime[e.key][n]=e.totalTime[e.key][n]-parseInt(t.seconds),Object(Ve.a)(Object(Ve.a)({},e),{},{totalTime:Object(Ve.a)({},e.totalTime),countDownProgress:!0});case d.UPDATE_LAST_RUN_TIME:return Object(Ve.a)(Object(Ve.a)({},e),{},{lastUpdatedTime:t.seconds});case d.PAUSE_COUNTDOWN:return e.countDownProgress=!1,Object(Ve.a)(Object(Ve.a)({},e),{},{countDownProgress:!1,lastUpdatedTime:null});case d.SET_COUNTDOWN_TRUE:return Object(Ve.a)(Object(Ve.a)({},e),{},{countDownProgress:!0});case d.UPDATE_COUNTDOWN:return e;case d.REMOVE_ALL_TIME:return{key:0,totalTime:{},originalTime:{},countDownProgress:!1,lastUpdatedTime:null};default:return e}},BreakButtonReducer:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ze,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case W.START_BREAK:var n="",c=a.breakName;return"releaseAll"!==a.breakName?(t[t.currentActive].isActive=!1,t[a.breakName].isActive=!0,t.currentActive=a.breakName,n=t.currentActive):(t[t.currentActive].isActive=!1,t.currentActive=a.breakName,n=t.currentActive),Object(Ve.a)(Object(Ve.a)({},t),{},(e={},Object(We.a)(e,c,Object(Ve.a)({},t[c])),Object(We.a)(e,n,Object(Ve.a)({},t[n])),e));case W.PAUSE_BREAK:return t[t.currentActive].isActive=!1,Object(Ve.a)(Object(Ve.a)({},t),{},Object(We.a)({},a.breakName,Object(Ve.a)({},t[a.breakName])));case W.GET_BREAK_COLOR:var r=t[a.breakName].color;return r;default:return t}},TaskReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Y.ADD_TASK:if(void 0===e.taskList[t.taskName]){var a={time:0,paused:!0,isCompleted:!1,color:"rgb(239, 68, 11)",percentage:0,type:"task"};e.taskList[t.taskName]=a}return Object(Ve.a)(Object(Ve.a)({},e),{},{taskList:Object(Ve.a)({},e.taskList)});case Y.REMOVE_TASK:return delete e.taskList[t.taskName],e.activeTask===t.taskName&&(e.activeTask=null),Object(Ve.a)(Object(Ve.a)({},e),{},{taskList:Object(Ve.a)({},e.taskList),activeTask:e.activeTask,notification:null});case Y.PAUSE_TASK:return e.taskList[t.taskName].paused=!0,e.activeTask=null,Object(Ve.a)(Object(Ve.a)({},e),{},{taskList:Object(Ve.a)({},e.taskList),activeTask:e.activeTask});case Y.START_TASK:for(var n in e.taskList)e.taskList[n].paused=!0;return e.taskList[t.taskName].paused=!1,void 0!==t.seconds&&void 0!==t.totalTime&&"remainder"!==e.taskList[t.taskName].type&&(e.taskList[t.taskName].time=parseInt(e.taskList[t.taskName].time)+parseInt(t.seconds),e.taskList[t.taskName].percentage=(e.taskList[t.taskName].time/parseInt(t.totalTime)*parseInt(100)).toFixed(1)),e.activeTask=t.taskName,Object(Ve.a)(Object(Ve.a)({},e),{},{taskList:Object(Ve.a)({},e.taskList),activeTask:e.activeTask});case Y.COMPLETED_TASK:return e.taskList[t.taskName].isCompleted=!0,e.activeTask===t.taskName&&(e.activeTask=null),Object(Ve.a)(Object(Ve.a)({},e),{},{taskList:Object(Ve.a)({},e.taskList),activeTask:e.activeTask});case Y.ADD_BREAK_TASK:for(var c in e.taskList)c!==t.taskName&&(e.taskList[c].paused=!0);if("releaseAll"!==t.taskName)if(void 0===e.taskList[t.taskName]){var r={time:0,paused:!1,isCompleted:!1,color:t.color,percentage:0,type:"break"};e.taskList[t.taskName]=r,e.activeTask=t.taskName}else e.taskList[t.taskName].paused?(e.taskList[t.taskName].paused=!1,e.activeTask=t.taskName):(e.taskList[t.taskName].paused=!0,e.activeTask=null);return Object(Ve.a)(Object(Ve.a)({},e),{},{taskList:Object(Ve.a)({},e.taskList),activeTask:e.activeTask});case Y.REMOVE_ALL_TASK:return Object(Ve.a)(Object(Ve.a)({},e),{},{taskList:{},activeTask:null,notification:null});case Y.COMPLETE_ALL_TASK:for(var s in e.taskList)e.taskList[s].isCompleted=!0;return Object(Ve.a)(Object(Ve.a)({},e),{},{activeTask:null,taskList:Object(Ve.a)({},e.taskList),notification:null});case Y.ADD_REMAINDER:if(void 0===e.taskList[t.remainderName]){var i={time:t.time-Math.floor(new Date/1e3),isCompleted:!1,color:"rgb(6, 125, 38)",percentage:100,timeRemaining:t.time-Math.floor(new Date/1e3),repeat:t.repeat,type:"remainder"};e.taskList[t.remainderName]=i}return Object(Ve.a)(Object(Ve.a)({},e),{},{taskList:Object(Ve.a)({},e.taskList)});case Y.START_REMAINDER:e.notification=null;var o=0;for(var n in null===e.remainderLastUpdate?(e.remainderLastUpdate=t.seconds,o=1):(o=t.seconds-e.remainderLastUpdate,e.remainderLastUpdate=t.seconds),e.taskList)"remainder"===e.taskList[n].type&&!1===e.taskList[n].isCompleted&&(e.taskList[n].timeRemaining=parseInt(e.taskList[n].timeRemaining)-parseInt(o),e.taskList[n].timeRemaining<=0&&!1===e.taskList[n].repeat?(e.taskList[n].isCompleted=!0,e.notification=n):e.taskList[n].timeRemaining<=0&&!0===e.taskList[n].repeat&&(e.notification=n,e.taskList[n].timeRemaining=e.taskList[n].time),e.taskList[n].percentage=(e.taskList[n].timeRemaining/e.taskList[n].time*parseInt(100)).toFixed(1));return Object(Ve.a)(Object(Ve.a)({},e),{},{taskList:Object(Ve.a)({},e.taskList),notification:e.notification,remainderLastUpdate:e.remainderLastUpdate});default:return e}},SubmitDataReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:He,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Oe.SUBMIT_ALL_DATA_START:return Object(Ve.a)({},e);case Oe.SUBMIT_ALL_DATA_INPROGRESS:e.key=Object.keys(e.data).length;var a=ie(),n=t.taskReducer;for(var c in n)"remainder"===n[c].type&&delete n[c];var r=t.breakButtonReducer,s=t.totalTimeReducer;return e.data[e.key]={date:a,taskData:n,breakButtonData:r,totalTimeData:s},Object(Ve.a)(Object(Ve.a)({},e),{},{key:e.key,data:Object(Ve.a)({},e.data)});default:return e}},NoteReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ve.TOGGLE_NOTE_DISPLAY:return Object(Ve.a)(Object(Ve.a)({},e),{},{noteDisplay:!e.noteDisplay});case ve.ADD_NOTE:return e.notes[e.noteKey]=t.noteText,Object(Ve.a)(Object(Ve.a)({},e),{},{noteKey:e.noteKey+1,notes:Object(Ve.a)({},e.notes)});case ve.REMOVE_NOTE:return delete e.notes[t.noteId],Object(Ve.a)(Object(Ve.a)({},e),{},{notes:Object(Ve.a)({},e.notes)});default:return e}}}),Xe=Object(Ke.a)(qe,Qe),Ze=a(15),$e=a.n(Ze),et=a(10),tt=$e.a.mark(nt),at=$e.a.mark(ct);function nt(e){var t,a,n;return $e.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.breakName,c.next=3,Object(et.d)((function(e){return e.BreakButtonReducer}));case 3:return a=c.sent,c.next=6,Object(et.d)((function(e){return e.TaskReducer}));case 6:return n=c.sent,c.next=9,Object(et.c)((r=t,s=a[t].color,{type:Y.ADD_BREAK_TASK,taskName:r,color:s}));case 9:if("releaseAll"===t||!1!==n.taskList[t].paused){c.next=14;break}return c.next=12,Object(et.c)(m());case 12:c.next=16;break;case 14:return c.next=16,Object(et.c)(j());case 16:case"end":return c.stop()}var r,s}),tt)}function ct(){return $e.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(et.e)(W.START_BREAK,nt);case 2:case"end":return e.stop()}}),at)}var rt=$e.a.mark(bt),st=$e.a.mark(jt),it=$e.a.mark(mt),ot=$e.a.mark(Ot),lt=$e.a.mark(Tt),ut=$e.a.mark(pt),dt=$e.a.mark(kt);function bt(e){return $e.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.type,e.taskName,e.seconds,t.next=3,Object(et.c)(m());case 3:case"end":return t.stop()}}),rt)}function jt(e){return $e.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.type,e.taskName,t.next=3,Object(et.c)(j());case 3:case"end":return t.stop()}}),st)}function mt(e){return $e.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.type,e.taskName,t.next=3,Object(et.d)((function(e){return e.TaskReducer}));case 3:if(null!==t.sent.activeTask){t.next=7;break}return t.next=7,Object(et.c)(j());case 7:case"end":return t.stop()}}),it)}function Ot(){return $e.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(et.e)(Y.START_TASK,bt);case 2:case"end":return e.stop()}}),ot)}function Tt(){return $e.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(et.e)(Y.PAUSE_TASK,jt);case 2:case"end":return e.stop()}}),lt)}function pt(){return $e.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(et.e)(Y.COMPLETED_TASK,mt);case 2:case"end":return e.stop()}}),ut)}function kt(){return $e.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(et.e)(Y.REMOVE_TASK,mt);case 2:case"end":return e.stop()}}),dt)}var vt=a(87);a(310);vt.a.configure();var ht=$e.a.mark(gt),ft=$e.a.mark(xt);function gt(){var e,t,a,n,c,r,s,i,o,l,u,d,j;return $e.a.wrap((function(m){for(;;)switch(m.prev=m.next){case 0:return e=new Date,t=e.getHours(),a=e.getMinutes(),n=e.getSeconds(),m.next=6,Object(et.d)((function(e){return e.TotalTimeReducer}));case 6:return c=m.sent,r=c.key,s=c.countDownProgress,i=c.originalTime,o=c.lastUpdatedTime,m.next=13,Object(et.d)((function(e){return e.TaskReducer}));case 13:if(l=m.sent,23!==parseInt(t)||59!==parseInt(a)||58!==parseInt(n)){m.next=22;break}return window.alert("The day is about to end, and a new day will begin, We will Save your progress so far"),m.next=18,Object(et.c)(Te());case 18:setTimeout((function(){}),500),window.location.reload(!1),m.next=44;break;case 22:return u=i[r][re()],d=se(),m.next=26,Object(et.c)(q(d));case 26:if(null!==l.notification&&(O=l.notification,vt.a.info("Hi There!!! You had set a remainder for ".concat(O),{position:vt.a.POSITION.TOP_RIGHT,autoClose:!1}),new Audio("https://www.fesliyanstudios.com/play-mp3/4384").play()),!s){m.next=44;break}if(null!==o){m.next=37;break}return m.next=31,Object(et.c)(T(d));case 31:return m.next=33,Object(et.c)(b(1));case 33:return m.next=35,Object(et.c)(H(l.activeTask,1,u));case 35:m.next=44;break;case 37:return j=d-o,m.next=40,Object(et.c)(T(d));case 40:return m.next=42,Object(et.c)(b(j));case 42:return m.next=44,Object(et.c)(H(l.activeTask,j,u));case 44:case"end":return m.stop()}var O}),ht)}function xt(){return $e.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(et.e)(d.UPDATE_COUNTDOWN,gt);case 2:case"end":return e.stop()}}),ft)}var At=$e.a.mark(yt),Nt=$e.a.mark(Et);function yt(){var e,t,a;return $e.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(et.c)(G("releaseAll"));case 2:return n.next=4,Object(et.c)({type:Y.COMPLETE_ALL_TASK});case 4:return n.next=6,Object(et.d)((function(e){return e.TaskReducer.taskList}));case 6:return e=n.sent,n.next=9,Object(et.d)((function(e){return e.BreakButtonReducer}));case 9:return t=n.sent,n.next=12,Object(et.d)((function(e){return e.TotalTimeReducer}));case 12:return a=n.sent,n.next=15,Object(et.c)(pe(e,t,a));case 15:return n.next=17,Object(et.c)(J());case 17:return n.next=19,Object(et.c)(O());case 19:case"end":return n.stop()}}),At)}function Et(){return $e.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(et.e)(Oe.SUBMIT_ALL_DATA_START,yt);case 2:case"end":return e.stop()}}),Nt)}var _t=$e.a.mark(Lt);function Lt(){return $e.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(et.a)([Object(et.b)(ct),Object(et.b)(Ot),Object(et.b)(Tt),Object(et.b)(pt),Object(et.b)(kt),Object(et.b)(xt),Object(et.b)(Et)]);case 2:case"end":return e.stop()}}),_t)}var Ct=Object(Ue.a)(),St=[Ct],Rt=Object(Be.d)(Xe,Be.a.apply(void 0,St));Ct.run(Lt);var Dt=Object(Ke.b)(Rt);r.a.render(Object(k.jsx)(s.a,{store:Rt,children:Object(k.jsx)(Me.a,{persistor:Dt,children:Object(k.jsx)(we,{})})}),document.getElementById("root")),Ie()}},[[311,1,2]]]);
//# sourceMappingURL=main.37066d74.chunk.js.map