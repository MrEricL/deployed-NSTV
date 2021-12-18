(this["webpackJsonpnyquist-shannon"]=this["webpackJsonpnyquist-shannon"]||[]).push([[0],{121:function(t,e){function s(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}s.keys=function(){return[]},s.resolve=s,t.exports=s,s.id=121},122:function(t,e){},178:function(t,e,s){},179:function(t,e,s){},181:function(t,e,s){},182:function(t,e,s){},200:function(t,e){},201:function(t,e){},202:function(t,e){},203:function(t,e){},204:function(t,e){},205:function(t,e){},206:function(t,e,s){},509:function(t,e,s){},510:function(t,e,s){},513:function(t,e,s){},514:function(t,e,s){},535:function(t,e,s){},542:function(t,e,s){"use strict";s.r(e);var a=s(2),n=s.n(a),i=s(32),c=s.n(i),o=s(51),l=s.n(o),r=s(80),h=s(3),d=s(4),u=s(11),b=s(8),j=s(7),p=(s(178),s(179),s(1));var O=function(){return Object(p.jsx)("div",{class:"navbar_wrapper",children:Object(p.jsxs)("div",{class:"my_navbar",children:[Object(p.jsx)("button",{children:Object(p.jsx)("a",{class:"navbar-brand",href:"/",children:"Nyquist Shannon Theorem Visualizer"})}),Object(p.jsx)("button",{children:Object(p.jsxs)("a",{class:"nav-link",href:"/about",children:["About The Theorem ",Object(p.jsx)("span",{class:"sr-only",children:"(current)"})]})})]})})},v=(s(181),s(182),function(t){var e=t.title,s=t.handleSubmission;return Object(p.jsx)("button",{class:"sub-button",onClick:s,children:e})}),f=s(65),g=s.n(f);g.a.defaults.headers.common["Access-Control-Allow-Origin"]="*";var x=function(t){Object(b.a)(s,t);var e=Object(j.a)(s);function s(t){var a;return Object(h.a)(this,s),(a=e.call(this,t)).state={selectedFile:"",isFilePicked:!1},a.postSelectedFile=a.postSelectedFile.bind(Object(u.a)(a)),a.changeHandler=a.changeHandler.bind(Object(u.a)(a)),a}return Object(d.a)(s,[{key:"changeHandler",value:function(t){this.setState({selectedFile:t.target.files[0]}),this.setState({isFilePicked:!0}),console.log(t.target.files[0])}},{key:"postSelectedFile",value:function(){var t=Object(r.a)(l.a.mark((function t(e){var s,a,n=this;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(s=new FormData).append("file",e),a=[],t.next=5,g.a.post("https://herokutestcs.herokuapp.com/process",s).then((function(t){return console.log("this is response",t),n.props.changeAudio(t.data.audio_in.substring(2,t.data.audio_in.length-1),t.data.audio_out.substring(2,t.data.audio_out.length-1)),console.log("comparison",t.data.audio_out.substring(2,t.data.audio_out.length-1).length,t.data.audio_in.substring(2,t.data.audio_in.length-1).length),t})).then((function(t){a=JSON.parse(t.data.data)}));case 5:this.props.changeArrays(a),this.setState({isFilePicked:!1});case 7:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this;return Object(p.jsx)("div",{class:"cards",children:Object(p.jsxs)("div",{children:[Object(p.jsx)("h5",{children:"Select File:"}),Object(p.jsx)("p",{children:"Choose the sound file you want to run through the visualizer."}),this.state.isFilePicked?Object(p.jsx)(v,{title:"Convert File",class:"button",handleSubmission:function(){return t.postSelectedFile(t.state.selectedFile)}}):Object(p.jsx)("input",{type:"file",name:"file",onChange:this.changeHandler})]})})}}]),s}(n.a.Component),y=x,m=(s(120),s(206),function(t){Object(b.a)(s,t);var e=Object(j.a)(s);function s(t){var a;return Object(h.a)(this,s),(a=e.call(this,t)).state={ARR_NUM:0,MOUSE_POS:0,SCALE_FACTOR:1,DISPLAY_TRANSFORM:3,DISPLAY_ORIGINAL:1,checked1:!0,checked2:!0,checked3:!0,SHIFT:0,vertical_scale:1},a.getMax=a.getMax.bind(Object(u.a)(a)),a.display=a.display.bind(Object(u.a)(a)),a.wheelZoom=a.wheelZoom.bind(Object(u.a)(a)),a.mouseMove=a.mouseMove.bind(Object(u.a)(a)),a.displayTransform=a.displayTransform.bind(Object(u.a)(a)),a.displayOriginal=a.displayOriginal.bind(Object(u.a)(a)),a.displayLines=a.displayLines.bind(Object(u.a)(a)),a}return Object(d.a)(s,[{key:"getMax",value:function(t,e,s){for(var a=[t,0,0],n=0;n<this.state.SCALE_FACTOR;n++)a[0]=t,s[e][this.state.ARR_NUM][t]>a[1]?a[1]=s[e][this.state.ARR_NUM][t]:s[e][this.state.ARR_NUM][t]<a[2]&&(a[2]=s[e][this.state.ARR_NUM][t]),t++;return a}},{key:"display",value:function(){var t=this.refs.canvas.getContext("2d"),e=this.props.data,s=this.state.SCALE_FACTOR;if(t.canvas.width=1920,t.moveTo(0,250),t.lineTo(1920,250),t.stroke(),console.log(this.props.data),0!=this.props.data.length&&this.props.data)for(var a=this.state.DISPLAY_ORIGINAL;a<this.state.DISPLAY_TRANSFORM;a++){var n=1;2==a&&(n=this.props.data[3]);var i=0;t.beginPath();var c=0;if(this.state.checked3)for(var o=Math.floor(this.state.SHIFT/Math.pow(10,this.state.ARR_NUM)/n);o<e[a][this.state.ARR_NUM].length&&!(c>=1920);o++){if(s>1){var l=this.getMax(o,a,e);t.moveTo(Math.floor(i*n),(0-l[2])*this.state.vertical_scale/e[0][0]+250),t.lineTo(Math.floor(i*n),(0-l[1])*this.state.vertical_scale/e[0][0]+250)}else if(s<0){t.moveTo(i*Math.abs(s)*n,250),t.lineTo(i*Math.abs(s)*n,0-e[a][this.state.ARR_NUM][o]*this.state.vertical_scale/e[0][0][0]+250);l=[o,0,0]}else{t.moveTo(i*n,250),t.lineTo(i*n,0-e[a][this.state.ARR_NUM][o]*this.state.vertical_scale/e[0][0][0]+250);l=[o,0,0]}c++,i+=1,o=l[0]}else for(o=Math.floor(this.state.SHIFT/Math.pow(10,this.state.ARR_NUM)/n);o<e[a][this.state.ARR_NUM].length&&!(c>=1920);o++){if(s>1){l=this.getMax(o,a,e);t.fillRect(Math.floor(i*n),(0-l[2])/e[0][0]+250,2,2),t.fillRect(Math.floor(i*n),(0-l[1])/e[0][0]+250,2,2)}else if(s<0){t.fillRect(i*Math.abs(s)*n,250,2,2),t.fillRect(i*Math.abs(s)*n,0-e[a][this.state.ARR_NUM][o]/e[0][0][0]+250,2,2);l=[o,0,0]}else{t.fillRect(i*n,250,2,2),t.fillRect(i*n,0-e[a][this.state.ARR_NUM][o]/e[0][0][0]+250,2,2);l=[o,0,0]}c++,i+=1,o=l[0]}t.strokeStyle=["red","green","blue"][a],t.stroke(),t.closePath()}}},{key:"wheelZoom",value:function(t){1==Math.abs(t.deltaY/Math.abs(t.deltaY))&&(t.preventDefault(),console.log(t),console.log(this.state.SHIFT),t.ctrlKey?(this.state.SCALE_FACTOR=this.state.SCALE_FACTOR+=Math.floor(t.deltaY/Math.abs(t.deltaY)),this.state.SCALE_FACTOR>19&&this.state.ARR_NUM<this.props.data.length?(this.state.SCALE_FACTOR=2,this.state.ARR_NUM++):this.state.SCALE_FACTOR<=1&&this.state.ARR_NUM>=1&&(this.state.SCALE_FACTOR=19,this.state.ARR_NUM--),console.log(this.state.SCALE_FACTOR,this.state.ARR_NUM)):t.shiftKey?(this.state.vertical_scale-=Math.floor(t.deltaY/Math.abs(t.deltaY)),this.state.vertical_scale<=1&&(this.state.vertical_scale=1),console.log(this.state.vertical_scale)):(this.state.SHIFT+=500*Math.floor(t.deltaY/Math.abs(t.deltaY)),this.state.SHIFT<=0&&(this.state.SHIFT=0)),this.display())}},{key:"mouseMove",value:function(t){var e=this.refs.canvas.getBoundingClientRect();this.state.MOUSE_POS=Math.round(t.clientX-e.left)}},{key:"displayLines",value:function(t){this.setState({checked3:t.target.checked})}},{key:"componentDidMount",value:function(){var t=this.refs.canvas,e=t.getContext("2d");e.clearRect(0,0,t.width,t.height),t.addEventListener("wheel",this.wheelZoom),t.addEventListener("mousemove",this.mouseMove),e.moveTo(0,250),e.lineTo(1920,250),e.stroke()}},{key:"componentDidUpdate",value:function(){console.log("update");var t=this.refs.canvas;t.getContext("2d").clearRect(0,0,t.width,t.height),this.display()}},{key:"displayTransform",value:function(t){t.target.checked?this.setState({DISPLAY_TRANSFORM:3}):this.setState({DISPLAY_TRANSFORM:2}),this.display(),this.setState({checked1:t.target.checked})}},{key:"displayOriginal",value:function(t){t.target.checked?this.setState({DISPLAY_ORIGINAL:1}):this.setState({DISPLAY_ORIGINAL:2}),this.display(),this.setState({checked2:t.target.checked})}},{key:"render",value:function(){console.log("rendered");return Object(p.jsxs)("div",{children:[Object(p.jsx)("canvas",{ref:"canvas",class:"my_canvas",width:1920,height:500,style:{border:"1px solid black"}}),Object(p.jsx)("form",{onSubmit:this.handleSubmit,children:Object(p.jsxs)("div",{class:"checkboxes",children:[Object(p.jsxs)("div",{class:"checkbox",children:[Object(p.jsx)("input",{type:"checkbox",checked:this.state.checked1,onChange:this.displayTransform}),"Display Downsampled Waveform"]}),Object(p.jsxs)("div",{class:"checkbox",children:[Object(p.jsx)("input",{type:"checkbox",checked:this.state.checked2,onChange:this.displayOriginal}),"Display Original Waveform"]}),Object(p.jsxs)("div",{class:"checkbox",children:[Object(p.jsx)("input",{type:"checkbox",checked:this.state.checked3,onChange:this.displayLines}),"Draw Lines to Samples"]})]})})]})}}]),s}(n.a.Component)),w=(s(207),s(509),s(510),function(t){Object(b.a)(s,t);var e=Object(j.a)(s);function s(t){var a;return Object(h.a)(this,s),(a=e.call(this,t)).state={file:"",value:""},a.handleChange=a.handleChange.bind(Object(u.a)(a)),a}return Object(d.a)(s,[{key:"handleChange",value:function(t){this.props.changeArrays(JSON.parse(this.props.defaults[t.target.value].data)),this.props.changeAudio(this.props.defaults[t.target.value].audio_in.substring(2,this.props.defaults[t.target.value].audio_in.length-1),this.props.defaults[t.target.value].audio_out.substring(2,this.props.defaults[t.target.value].audio_out.length-1)),console.log(this.props.defaults[t.target.value].audio_in),this.setState({value:t.target.value})}},{key:"render",value:function(){console.log("rendered");return Object(p.jsx)("div",{class:"dropdown",children:Object(p.jsxs)("select",{value:this.state.value,onChange:this.handleChange,class:"custom-select",children:[Object(p.jsx)("option",{value:"sine",children:" Sine "}),Object(p.jsx)("option",{value:"cantina",children:" Cantina "}),Object(p.jsx)("option",{value:"star_wars",children:" Star Wars "})]})})}}]),s}(n.a.Component));s(511),s(541),s(512),s(513);var A=function(t){Object(b.a)(s,t);var e=Object(j.a)(s);function s(t){var a;return Object(h.a)(this,s),(a=e.call(this,t)).downloadProcessed=a.downloadProcessed.bind(Object(u.a)(a)),a.downloadAudio=a.downloadAudio.bind(Object(u.a)(a)),a}return Object(d.a)(s,[{key:"downloadProcessed",value:function(){fetch("data:audio/wav;base64,"+this.props.processed).then((function(t){return t.blob()})).then((function(t){console.log(t);var e=window.URL.createObjectURL(t);console.log(e),window.location.assign(e)})),console.log("***",this.props.processed),console.log("***",this.props.audio)}},{key:"downloadAudio",value:function(){fetch("data:audio/wav;base64,"+this.props.audio).then((function(t){return t.blob()})).then((function(t){console.log(t);var e=window.URL.createObjectURL(t);console.log(e),window.location.assign(e)})),console.log("***",this.props.processed),console.log("***",this.props.audio)}},{key:"render",value:function(){return Object(p.jsxs)("div",{class:"audio_player",children:[Object(p.jsxs)("div",{class:"Audio",children:[Object(p.jsx)("p",{children:"This is the original audio."}),this.props.audio&&Object(p.jsxs)("div",{children:[Object(p.jsx)("audio",{controls:!0,src:"data:audio/wav;base64,"+this.props.audio}),Object(p.jsx)("button",{onClick:this.downloadAudio,class:"download_button",children:"Download"})]})]}),Object(p.jsxs)("div",{class:"Audio",children:[Object(p.jsx)("p",{children:"This is the processed audio."}),this.props.audio&&Object(p.jsxs)("div",{children:[Object(p.jsx)("audio",{controls:!0,src:"data:audio/wav;base64,"+this.props.audio}),Object(p.jsx)("button",{onClick:this.downloadProcessed,class:"download_button",children:"Download"})]})]})]})}}]),s}(n.a.Component),S=function(t){Object(b.a)(s,t);var e=Object(j.a)(s);function s(t){var a;return Object(h.a)(this,s),(a=e.call(this,t)).state={arrays:[],audio:"",processed:"",defaults:{}},a.changeArrays=a.changeArrays.bind(Object(u.a)(a)),a.changeAudio=a.changeAudio.bind(Object(u.a)(a)),a}return Object(d.a)(s,[{key:"componentDidMount",value:function(){var t=Object(r.a)(l.a.mark((function t(){var e;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=[],t.next=3,g.a.get("https://herokutestcs.herokuapp.com/defaults").then((function(t){return t})).then((function(t){e=t.data}));case 3:console.log(e),this.setState({defaults:e}),console.log(this.state.arrays);case 6:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"changeArrays",value:function(t){this.setState({arrays:t}),console.log(this.state.arrays)}},{key:"changeAudio",value:function(t,e){this.setState({audio:t}),this.setState({processed:e})}},{key:"render",value:function(){return Object(p.jsx)("div",{class:"body",children:Object(p.jsxs)("body",{children:[">",Object(p.jsxs)("div",{children:[Object(p.jsx)(y,{changeArrays:this.changeArrays,changeAudio:this.changeAudio}),Object(p.jsx)(A,{audio:this.state.audio,processed:this.state.processed,data:this.state.arrays.data})]}),Object(p.jsx)("div",{class:"middle_section",children:Object(p.jsx)("div",{class:"sample_dropdown",children:Object(p.jsx)(w,{changeArrays:this.changeArrays,changeAudio:this.changeAudio,defaults:this.state.defaults,class:"dropdown"})})}),Object(p.jsx)("div",{class:"control_text",children:Object(p.jsx)("p",{children:" Use CTRL + ScrollWheel to zoom in and out horizontally, use SHIFT + ScrollWheel to zoom in and out vertically, use ScrollWheel to scrub through the audio file "})}),Object(p.jsx)(m,{data:this.state.arrays})]})})}}]),s}(n.a.Component),_=S,k=(s(514),s(172)),R=s.n(k),M=function(){return Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{class:"aboutcontainer",children:[Object(p.jsx)("h2",{children:"So what's the deal with the Nyquist Shannon Theorem?"}),Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:"The Nyquist-Shannon Theorem states that when representing an analog signal digitally, as long as your number of sampling points is at least twice as great as the signal\u2019s highest frequency, you can represent that signal using only those points without losing any information at all."}),Object(p.jsx)("li",{children:"This means if we resample an audio file to have a sampling rate that is twice it's maximum detected frequency, we can greatly reduce the file size."}),Object(p.jsx)("li",{children:"Our visualizer accepts a large audio file and reduces the amount of points without any audio loss or drop in quality."})]})]}),Object(p.jsx)("div",{class:"aboutvideo",children:Object(p.jsx)(R.a,{url:"https://www.youtube.com/watch?v=FcXZ28BX-xE&t=330s&ab_channel=SteveBrunton"})})]})},T=s(52),C=(s(535),function(){return Object(p.jsxs)("div",{class:"centered",children:[Object(p.jsx)("h1",{children:"Sample Library"}),Object(p.jsx)("div",{class:"center-text",children:Object(p.jsx)("p",{children:"This is a little library of sample .wav files"})}),Object(p.jsxs)("div",{class:"row",children:[Object(p.jsx)("div",{class:"column",children:Object(p.jsxs)("div",{class:"card bg-dark mb-3",children:[Object(p.jsx)("h3",{children:"Cantina"}),Object(p.jsx)("audio",{type:"audio/mpeg",src:"./cantina.wav",controls:!0,autoplay:!0,autostart:"false"}),Object(p.jsx)(T.b,{to:"/cantina.wav",target:"_blank",download:!0,children:"Download"})]})}),Object(p.jsx)("div",{class:"column",children:Object(p.jsxs)("div",{class:"card bg-dark mb-3",children:[Object(p.jsx)("h3",{children:"Star Wars "}),Object(p.jsx)("audio",{type:"audio/mpeg",src:"./StarWars3.wav",controls:!0,autoplay:!0,autostart:"false"}),Object(p.jsx)(T.b,{to:"/StarWars3.wav",target:"_blank",download:!0,children:"Download"})]})}),Object(p.jsx)("div",{class:"column",children:Object(p.jsxs)("div",{class:"card bg-dark mb-3",children:[Object(p.jsx)("h3",{children:"Taunt"}),Object(p.jsx)("audio",{type:"audio/mpeg",src:"./taunt.wav",controls:!0,autoplay:!0}),Object(p.jsx)(T.b,{to:"/taunt.wav",target:"_blank",download:!0,children:"Download"})]})})]})]})}),F=s(10),L=function(){return Object(p.jsxs)(T.a,{children:[Object(p.jsx)(O,{}),Object(p.jsxs)(F.c,{children:[Object(p.jsx)(F.a,{exact:!0,path:"/",children:Object(p.jsx)(_,{})}),Object(p.jsx)(F.a,{path:"/about",children:Object(p.jsx)(M,{})}),Object(p.jsx)(F.a,{path:"/wavlibrary",children:Object(p.jsx)(C,{})})]})]})};c.a.render(Object(p.jsx)(L,{}),document.getElementById("root"))}},[[542,1,2]]]);
//# sourceMappingURL=main.64aacbdf.chunk.js.map