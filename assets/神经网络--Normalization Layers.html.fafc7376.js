import{_ as s,r,o as _,c,a as e,d as t,w as o,b as a,e as l}from"./app.6738de7d.js";var h="/online_notes/assets/image-20220628205443548.986a210c.png",d="/online_notes/assets/image-20220628205603236.92dd9d02.png",m="/online_notes/assets/image-20220628112432023-16563866733421.2e57468f.png",u="/online_notes/assets/image-20220628113609658-16563873709792.44dc6814.png",g="/online_notes/assets/image-20220628113933578-16563875756703.9aa05953.png",p="/online_notes/assets/image-20220628114419631-16563878611514.5c770ed3.png",f="/online_notes/assets/image-20220628205641253.77ccdd4f.png",b="/online_notes/assets/image-20220628205754749.d49dd7f1.png",y="/online_notes/assets/image-20220628205943844.b63172fc.png",N="/online_notes/assets/image-20220628210135431.4c8253be.png";const x={},v=e("h1",{id:"\u57FA\u7840\u795E\u7ECF\u7F51\u7EDC-layer-norm",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u57FA\u7840\u795E\u7ECF\u7F51\u7EDC-layer-norm","aria-hidden":"true"},"#"),a(" \u57FA\u7840\u795E\u7ECF\u7F51\u7EDC--Layer Norm")],-1),z={class:"table-of-contents"},B=a("0.\u8D44\u6599\u7F51\u5740\uFF1A"),k=a("\u5F52\u4E00\u5316\u7684\u901A\u7528\u6846\u67B6"),L=a("1. BN -- \u4E00\u4E2Abatch\u8FDB\u884Cscale"),V=a("1.1 \u4E3A\u4EC0\u4E48\u9700\u8981BN"),w=a("1.2 BN\u7684\u7B97\u6CD5"),C=a("1.3 \u8BC4\u4F30\u7684\u65F6\u5019"),I=a("2. Layer Norm -- \u4E00\u5C42scale"),S=a("3. Weight Norm -- \u4F7F\u7528\u6743\u91CD\u5BF9\u6570\u636Escale"),E=e("h2",{id:"_0-\u8D44\u6599\u7F51\u5740",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_0-\u8D44\u6599\u7F51\u5740","aria-hidden":"true"},"#"),a(" 0.\u8D44\u6599\u7F51\u5740\uFF1A")],-1),R={href:"https://zhuanlan.zhihu.com/p/33173246",target:"_blank",rel:"noopener noreferrer"},T=a("\u77E5\u4E4E\u5173\u4E8Enorm\u7684\u597D\u4E13\u9898\u6587\u7AE0"),W=l('<h2 id="\u5F52\u4E00\u5316\u7684\u901A\u7528\u6846\u67B6" tabindex="-1"><a class="header-anchor" href="#\u5F52\u4E00\u5316\u7684\u901A\u7528\u6846\u67B6" aria-hidden="true">#</a> \u5F52\u4E00\u5316\u7684\u901A\u7528\u6846\u67B6</h2><img src="'+h+'" alt="image-20220628205443548" style="zoom:67%;"><h2 id="_1-bn-\u4E00\u4E2Abatch\u8FDB\u884Cscale" tabindex="-1"><a class="header-anchor" href="#_1-bn-\u4E00\u4E2Abatch\u8FDB\u884Cscale" aria-hidden="true">#</a> 1. BN -- \u4E00\u4E2Abatch\u8FDB\u884Cscale</h2><img src="'+d+'" alt="image-20220628205603236" style="zoom:50%;">',4),Z={href:"http://proceedings.mlr.press/v37/ioffe15.pdf",target:"_blank",rel:"noopener noreferrer"},A=a("\u8BBA\u6587Batch Normalization: Accelerating Deep Network Training by Reducing Internal Covariate Shift"),D={href:"https://blog.csdn.net/happynear/article/details/44238541",target:"_blank",rel:"noopener noreferrer"},P=a("\u597D\u7684\u9605\u8BFB\u7B14\u8BB0"),U={href:"https://proceedings.neurips.cc/paper/2018/file/36072923bfc3cf47745d704feb489480-Paper.pdf",target:"_blank",rel:"noopener noreferrer"},j=a("\u8BBA\u6587Understanding Batch Normalization"),q=l('<h3 id="_1-1-\u4E3A\u4EC0\u4E48\u9700\u8981bn" tabindex="-1"><a class="header-anchor" href="#_1-1-\u4E3A\u4EC0\u4E48\u9700\u8981bn" aria-hidden="true">#</a> 1.1 \u4E3A\u4EC0\u4E48\u9700\u8981BN</h3><ul><li><p>BN\u662F\u5BF9\u4E8E\u6BCF\u4E2A\u6FC0\u6D3B\u51FD\u6570\u7684\u64CD\u4F5C(\u53EF\u80FD\u5728\u6FC0\u6D3B\u51FD\u6570\u4E4B\u524D\uFF0C\u4E5F\u53EF\u80FD\u5728\u6FC0\u6D3B\u51FD\u6570\u4E4B\u540E)</p></li><li><p>\u9700\u8981BN\u7684\u539F\u56E0\u662F\u6240\u8C13\u7684Internal Covariate Shift</p><ul><li><img src="'+m+'" alt="image-20220628112432023" style="zoom:50%;"></li><li>ICS\u5BFC\u81F4\u4E86\u5982\u4E0B\u7684\u95EE\u9898\uFF1A <ul><li>\u5176\u4E00\uFF0C\u4E0A\u5C42\u53C2\u6570\u9700\u8981\u4E0D\u65AD\u9002\u5E94\u65B0\u7684\u8F93\u5165\u6570\u636E\u5206\u5E03\uFF0C\u964D\u4F4E\u5B66\u4E60\u901F\u5EA6\u3002</li><li>\u5176\u4E8C\uFF0C\u4E0B\u5C42\u8F93\u5165\u7684\u53D8\u5316\u53EF\u80FD\u8D8B\u5411\u4E8E\u53D8\u5927\u6216\u8005\u53D8\u5C0F\uFF0C\u5BFC\u81F4\u4E0A\u5C42\u843D\u5165\u9971\u548C\u533A\uFF0C\u4F7F\u5F97\u5B66\u4E60\u8FC7\u65E9\u505C\u6B62\u3002 <ul><li><img src="'+u+'" alt="image-20220628113609658" style="zoom:50%;"></li></ul></li><li>\u5176\u4E09\uFF0C\u6BCF\u5C42\u7684\u66F4\u65B0\u90FD\u4F1A\u5F71\u54CD\u5230\u5176\u5B83\u5C42\uFF0C\u56E0\u6B64\u6BCF\u5C42\u7684\u53C2\u6570\u66F4\u65B0\u7B56\u7565\u9700\u8981\u5C3D\u53EF\u80FD\u7684\u8C28\u614E\u3002</li></ul></li></ul></li></ul><h3 id="_1-2-bn\u7684\u7B97\u6CD5" tabindex="-1"><a class="header-anchor" href="#_1-2-bn\u7684\u7B97\u6CD5" aria-hidden="true">#</a> 1.2 BN\u7684\u7B97\u6CD5</h3><img src="'+g+'" alt="image-20220628113933578" style="zoom:67%;"><ul><li>\u5373\u5BF9\u6BCF\u4E2A\u6FC0\u6D3B\u51FD\u6570\u7684\u8F93\u5165/\u8F93\u51FAx\uFF0C\u5C06x\u5148Z\u5F52\u4E00\u5316\u6210y\uFF0C\u800C\u540E\u628Ay\u66FF\u6362\u6389x\u3002</li><li>\u800C\u8FD9\u4E2A\u5F52\u4E00\u5316\uFF0C\u662F\u4F7F\u7528\u4E00\u4E2Abatch\u5185x\u7684\u5747\u503C\u548C\u65B9\u5DEE\u6765\u8FDB\u884C\u7684\uFF0C\u56E0\u6B64\u53EBbatch norm</li><li>\u800C\u4E3A\u4E86\u7ED9\u7F51\u7EDC\u66F4\u5927\u7684\u80FD\u529B\uFF0C\u8BBE\u7F6E\u4E86\u4E24\u4E2A\u53EF\u5B66\u4E60\u7684\u51FD\u6570\uFF0C\u628AZ\u5F52\u4E00\u5316\u540E\u7684y\u518Dscale\u548Cbias\uFF0C\u6210\u4E3A\u6700\u7EC8\u7684\u66FF\u4EE3</li></ul><h3 id="_1-3-\u8BC4\u4F30\u7684\u65F6\u5019" tabindex="-1"><a class="header-anchor" href="#_1-3-\u8BC4\u4F30\u7684\u65F6\u5019" aria-hidden="true">#</a> 1.3 \u8BC4\u4F30\u7684\u65F6\u5019</h3><img src="'+p+'" alt="image-20220628114419631" style="zoom:67%;"> - \u5728\u8BAD\u7EC3\u7684\u6700\u540E\u4E00\u4E2Aepoch\uFF0C\u9700\u8981\u8BB0\u5F55\u4E0B\u6240\u6709mini-batch\u7684\u6BCF\u4E2A\u7684mean\u548CVar - \u6700\u540E\u7EDF\u8BA1\u5F97\u51FA\u8FD9\u4E2A\u6FC0\u6D3B\u51FD\u6570\u5BF9\u6574\u4E2Aepoch\u7684mean\u548CVar\u3002\u5728\u8BC4\u4F30\u8FC7\u7A0B\u4E2D\uFF0C\u4F7F\u7528\u6574\u4F53mean\u548CVar\u8FDB\u884C\u5F52\u4E00\u5316 <h2 id="_2-layer-norm-\u4E00\u5C42scale" tabindex="-1"><a class="header-anchor" href="#_2-layer-norm-\u4E00\u5C42scale" aria-hidden="true">#</a> 2. Layer Norm -- \u4E00\u5C42scale</h2><img src="'+f+'" alt="image-20220628205641253" style="zoom:67%;">',10),F={href:"https://arxiv.org/pdf/1607.06450.pdf",target:"_blank",rel:"noopener noreferrer"},G=a("\u8BBA\u6587Layer Normalization"),H=l('<h2 id="_3-weight-norm-\u4F7F\u7528\u6743\u91CD\u5BF9\u6570\u636Escale" tabindex="-1"><a class="header-anchor" href="#_3-weight-norm-\u4F7F\u7528\u6743\u91CD\u5BF9\u6570\u636Escale" aria-hidden="true">#</a> 3. Weight Norm -- \u4F7F\u7528\u6743\u91CD\u5BF9\u6570\u636Escale</h2><img src="'+b+'" alt="image-20220628205754749" style="zoom:67%;"><img src="'+y+'" alt="image-20220628205943844" style="zoom:67%;"><img src="'+N+'" alt="image-20220628210135431" style="zoom:67%;">',4);function J(K,M){const n=r("RouterLink"),i=r("ExternalLinkIcon");return _(),c("div",null,[v,e("nav",z,[e("ul",null,[e("li",null,[t(n,{to:"#_0-\u8D44\u6599\u7F51\u5740"},{default:o(()=>[B]),_:1})]),e("li",null,[t(n,{to:"#\u5F52\u4E00\u5316\u7684\u901A\u7528\u6846\u67B6"},{default:o(()=>[k]),_:1})]),e("li",null,[t(n,{to:"#_1-bn-\u4E00\u4E2Abatch\u8FDB\u884Cscale"},{default:o(()=>[L]),_:1}),e("ul",null,[e("li",null,[t(n,{to:"#_1-1-\u4E3A\u4EC0\u4E48\u9700\u8981bn"},{default:o(()=>[V]),_:1})]),e("li",null,[t(n,{to:"#_1-2-bn\u7684\u7B97\u6CD5"},{default:o(()=>[w]),_:1})]),e("li",null,[t(n,{to:"#_1-3-\u8BC4\u4F30\u7684\u65F6\u5019"},{default:o(()=>[C]),_:1})])])]),e("li",null,[t(n,{to:"#_2-layer-norm-\u4E00\u5C42scale"},{default:o(()=>[I]),_:1})]),e("li",null,[t(n,{to:"#_3-weight-norm-\u4F7F\u7528\u6743\u91CD\u5BF9\u6570\u636Escale"},{default:o(()=>[S]),_:1})])])]),E,e("ul",null,[e("li",null,[e("a",R,[T,t(i)])])]),W,e("ul",null,[e("li",null,[e("a",Z,[A,t(i)])]),e("li",null,[e("a",D,[P,t(i)])]),e("li",null,[e("a",U,[j,t(i)])])]),q,e("ul",null,[e("li",null,[e("a",F,[G,t(i)])])]),H])}var Q=s(x,[["render",J],["__file","\u795E\u7ECF\u7F51\u7EDC--Normalization Layers.html.vue"]]);export{Q as default};
