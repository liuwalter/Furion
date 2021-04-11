(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{190:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return b}));var a=t(3),i=t(7),r=(t(0),t(205)),o={id:"json-serialization",title:"23. JSON \u5e8f\u5217\u5316",sidebar_label:"23. JSON \u5e8f\u5217\u5316"},l={unversionedId:"json-serialization",id:"json-serialization",isDocsHomePage:!1,title:"23. JSON \u5e8f\u5217\u5316",description:"\u4ee5\u4e0b\u5185\u5bb9\u53ea\u9650 Furion 1.16.0 + \u7248\u672c\u4f7f\u7528\u3002",source:"@site/docs/json-serialization.mdx",slug:"/json-serialization",permalink:"/furion/docs/json-serialization",editUrl:"https://gitee.com/dotnetchina/Furion/tree/master/handbook/docs/json-serialization.mdx",version:"current",lastUpdatedBy:"\u767e\u5c0f\u50e7",lastUpdatedAt:1618132444,formattedLastUpdatedAt:"4/11/2021",sidebar_label:"23. JSON \u5e8f\u5217\u5316",sidebar:"docs",previous:{title:"22. \u4e8b\u4ef6\u603b\u7ebf",permalink:"/furion/docs/event-bus"},next:{title:"24. \u5373\u65f6\u901a\u8baf",permalink:"/furion/docs/signalr"}},s=[{value:"23.1 \u4ec0\u4e48\u662f <code>JSON</code>",id:"231-\u4ec0\u4e48\u662f-json",children:[]},{value:"23.2 \u5173\u4e8e\u5e8f\u5217\u5316\u5e93",id:"232-\u5173\u4e8e\u5e8f\u5217\u5316\u5e93",children:[]},{value:"23.3 <code>IJsonSerializerProvider</code> \u63a5\u53e3",id:"233-ijsonserializerprovider-\u63a5\u53e3",children:[]},{value:"23.4 \u5982\u4f55\u4f7f\u7528",id:"234-\u5982\u4f55\u4f7f\u7528",children:[{value:"23.4.1 \u83b7\u53d6\u5e8f\u5217\u5316\u5bf9\u8c61",id:"2341-\u83b7\u53d6\u5e8f\u5217\u5316\u5bf9\u8c61",children:[]},{value:"23.4.2 \u5e8f\u5217\u5316\u5bf9\u8c61",id:"2342-\u5e8f\u5217\u5316\u5bf9\u8c61",children:[]},{value:"23.4.3 \u53cd\u5e8f\u5217\u5316\u5b57\u7b26\u4e32",id:"2343-\u53cd\u5e8f\u5217\u5316\u5b57\u7b26\u4e32",children:[]},{value:"23.4.4 \u5e8f\u5217\u5316\u66f4\u591a\u914d\u7f6e",id:"2344-\u5e8f\u5217\u5316\u66f4\u591a\u914d\u7f6e",children:[]}]},{value:"23.5 \u9ad8\u7ea7\u7528\u6cd5",id:"235-\u9ad8\u7ea7\u7528\u6cd5",children:[{value:"23.5.1 \u81ea\u5b9a\u4e49\u5e8f\u5217\u5316\u63d0\u4f9b\u5668",id:"2351-\u81ea\u5b9a\u4e49\u5e8f\u5217\u5316\u63d0\u4f9b\u5668",children:[]},{value:"23.5.2 \u5e8f\u5217\u5316\u5c5e\u6027\u540d\u5927\u5199",id:"2352-\u5e8f\u5217\u5316\u5c5e\u6027\u540d\u5927\u5199",children:[]},{value:"23.5.3 \u65f6\u95f4\u683c\u5f0f\u5316",id:"2353-\u65f6\u95f4\u683c\u5f0f\u5316",children:[]},{value:"23.5.4 \u5ffd\u7565\u5faa\u73af\u5f15\u7528",id:"2354-\u5ffd\u7565\u5faa\u73af\u5f15\u7528",children:[]}]},{value:"23.6 <code>DataTable</code>\u3001<code>DataSet</code>\u3001<code>Tuple</code> \u5143\u7ec4\u7b49\u5e8f\u5217\u5316\u95ee\u9898",id:"236-datatable\u3001dataset\u3001tuple-\u5143\u7ec4\u7b49\u5e8f\u5217\u5316\u95ee\u9898",children:[]},{value:"23.7 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"237-\u53cd\u9988\u4e0e\u5efa\u8bae",children:[]}],c={toc:s};function b(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u7248\u672c\u8bf4\u660e")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"\u4ee5\u4e0b\u5185\u5bb9\u53ea\u9650 ",Object(r.b)("inlineCode",{parentName:"p"},"Furion 1.16.0 +")," \u7248\u672c\u4f7f\u7528\u3002"))),Object(r.b)("h2",{id:"231-\u4ec0\u4e48\u662f-json"},"23.1 \u4ec0\u4e48\u662f ",Object(r.b)("inlineCode",{parentName:"h2"},"JSON")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"JSON (JavaScript Object Notation, JS \u5bf9\u8c61\u6807\u8bb0) \u662f\u4e00\u79cd\u8f7b\u91cf\u7ea7\u7684\u6570\u636e\u4ea4\u6362\u683c\u5f0f\u3002\u5b83\u57fa\u4e8e ECMAScript (w3c \u5236\u5b9a\u7684 js \u89c4\u8303)\u7684\u4e00\u4e2a\u5b50\u96c6\uff0c\u91c7\u7528\u5b8c\u5168\u72ec\u7acb\u4e8e\u7f16\u7a0b\u8bed\u8a00\u7684\u6587\u672c\u683c\u5f0f\u6765\u5b58\u50a8\u548c\u8868\u793a\u6570\u636e\u3002\u7b80\u6d01\u548c\u6e05\u6670\u7684\u5c42\u6b21\u7ed3\u6784\u4f7f\u5f97 JSON \u6210\u4e3a\u7406\u60f3\u7684\u6570\u636e\u4ea4\u6362\u8bed\u8a00\u3002 \u6613\u4e8e\u4eba\u9605\u8bfb\u548c\u7f16\u5199\uff0c\u540c\u65f6\u4e5f\u6613\u4e8e\u673a\u5668\u89e3\u6790\u548c\u751f\u6210\uff0c\u5e76\u6709\u6548\u5730\u63d0\u5347\u7f51\u7edc\u4f20\u8f93\u6548\u7387\u3002")),Object(r.b)("p",null,"\u7b80\u5355\u6765\u8bf4\uff0cJSON\uff0c\u662f\u4e00\u79cd\u6570\u636e\u683c\u5f0f\uff0c\u5728\u4e0e\u540e\u7aef\u7684\u6570\u636e\u4ea4\u4e92\u4e2d\u6709\u8f83\u4e3a\u5e7f\u6cdb\u7684\u5e94\u7528\u3002"),Object(r.b)("h2",{id:"232-\u5173\u4e8e\u5e8f\u5217\u5316\u5e93"},"23.2 \u5173\u4e8e\u5e8f\u5217\u5316\u5e93"),Object(r.b)("p",null,"\u76ee\u524d\u5728 C# \u8bed\u8a00\u4e2d\u6709\u4e24\u4e2a\u4e3b\u6d41\u7684 ",Object(r.b)("inlineCode",{parentName:"p"},"JSON")," \u5e8f\u5217\u5316\u64cd\u4f5c\u5e93\uff1a"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"System.Text.Json"),"\uff1a",Object(r.b)("inlineCode",{parentName:"li"},".NET Core")," \u5185\u7f6e ",Object(r.b)("inlineCode",{parentName:"li"},"JSON")," \u5e8f\u5217\u5316\u5e93\uff0c\u4e5f\u662f ",Object(r.b)("inlineCode",{parentName:"li"},"Furion")," \u6846\u67b6\u9ed8\u8ba4\u5b9e\u73b0"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Newtonsoft.Json"),"\uff1a\u76ee\u524d\u4f7f\u7528\u4eba\u6570\u6700\u591a\u7684 ",Object(r.b)("inlineCode",{parentName:"li"},"JSON")," \u5e8f\u5217\u5316\u5e93\uff0c\u9700\u8981\u5b89\u88c5 ",Object(r.b)("inlineCode",{parentName:"li"},"Microsoft.AspNetCore.Mvc.NewtonsoftJson")," \u62d3\u5c55\u5305")),Object(r.b)("p",null,"\u7531\u4e8e\u76ee\u524d ",Object(r.b)("inlineCode",{parentName:"p"},"System.Text.Json")," \u76f8\u6bd4 ",Object(r.b)("inlineCode",{parentName:"p"},"Newtonsoft.Json")," \u529f\u80fd\u548c\u7a33\u5b9a\u6027\u6709\u8bb8\u591a\u4e0d\u8db3\u4e4b\u5904\uff0c\u6bd4\u5982\u5faa\u73af\u5f15\u7528\u95ee\u9898\u5728 ",Object(r.b)("inlineCode",{parentName:"p"},"System.Text.Json")," \u65e0\u89e3\u3002\u4f46\u5728 ",Object(r.b)("inlineCode",{parentName:"p"},".NET 6")," \u4e4b\u540e\u5f97\u5230\u89e3\u51b3\u3002"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u4e3a\u4e86\u89e3\u51b3\u591a\u79cd\u5e8f\u5217\u5316\u5de5\u5177\u914d\u7f6e\u548c\u7528\u6cd5\u4e0a\u7684\u5dee\u5f02\u95ee\u9898\uff0c\u62bd\u8c61\u51fa\u4e86 ",Object(r.b)("inlineCode",{parentName:"p"},"IJsonSerializerProvider")," \u63a5\u53e3\u3002"),Object(r.b)("h2",{id:"233-ijsonserializerprovider-\u63a5\u53e3"},"23.3 ",Object(r.b)("inlineCode",{parentName:"h2"},"IJsonSerializerProvider")," \u63a5\u53e3"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u63d0\u4f9b\u4e86 ",Object(r.b)("inlineCode",{parentName:"p"},"IJsonSerializerProvider")," \u63a5\u53e3\u89c4\u8303\uff0c\u540c\u65f6",Object(r.b)("strong",{parentName:"p"},"\u8981\u6c42\u5b9e\u73b0\u8be5\u63a5\u53e3\u7684\u5b9e\u4f53\u90fd\u5fc5\u987b\u91c7\u7528\u5355\u4f8b\u6a21\u5f0f"),"\uff0c\u8be5\u63a5\u53e3\u5b9a\u4e49\u4ee3\u7801\u5982\u4e0b\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cs"},'namespace Furion.JsonSerialization\n{\n    /// <summary>\n    /// Json \u5e8f\u5217\u5316\u63d0\u4f9b\u5668\n    /// </summary>\n    public interface IJsonSerializerProvider\n    {\n        /// <summary>\n        /// \u5e8f\u5217\u5316\u5bf9\u8c61\n        /// </summary>\n        /// <param name="value"></param>\n        /// <param name="jsonSerializerOptions"></param>\n        /// <returns></returns>\n        string Serialize(object value, object jsonSerializerOptions = default);\n\n        /// <summary>\n        /// \u53cd\u5e8f\u5217\u5316\u5b57\u7b26\u4e32\n        /// </summary>\n        /// <typeparam name="T"></typeparam>\n        /// <param name="json"></param>\n        /// <param name="jsonSerializerOptions"></param>\n        /// <returns></returns>\n        T Deserialize<T>(string json, object jsonSerializerOptions = default);\n    }\n}\n')),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u9ed8\u8ba4\u5b9e\u73b0")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},Object(r.b)("inlineCode",{parentName:"p"},"SystemTextJsonSerializerProvider")," \u7c7b\u662f ",Object(r.b)("inlineCode",{parentName:"p"},"IJsonSerializerProvider")," \u63a5\u53e3\u7684\u9ed8\u8ba4\u5b9e\u73b0\uff0c\u5728\u5e94\u7528\u542f\u52a8\u65f6\u5df2\u9ed8\u8ba4\u6ce8\u518c\u3002"))),Object(r.b)("h2",{id:"234-\u5982\u4f55\u4f7f\u7528"},"23.4 \u5982\u4f55\u4f7f\u7528"),Object(r.b)("h3",{id:"2341-\u83b7\u53d6\u5e8f\u5217\u5316\u5bf9\u8c61"},"23.4.1 \u83b7\u53d6\u5e8f\u5217\u5316\u5bf9\u8c61"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u63d0\u4f9b\u4e86\u4e24\u79cd\u65b9\u5f0f\u83b7\u53d6 ",Object(r.b)("inlineCode",{parentName:"p"},"IJsonSerializerProvider")," \u5b9e\u4f8b\uff1a"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u6784\u9020\u51fd\u6570\u6ce8\u5165 ",Object(r.b)("inlineCode",{parentName:"li"},"IJsonSerializerProvider")),Object(r.b)("li",{parentName:"ul"},"\u9759\u6001\u7c7b ",Object(r.b)("inlineCode",{parentName:"li"},"JSON.GetJsonSerializer()")," \u65b9\u5f0f")),Object(r.b)("p",null,"\u5982\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cs",metastring:"{10,13}","{10,13}":!0},"using Furion.DynamicApiController;\nusing Furion.JsonSerialization;\n\nnamespace Furion.Application\n{\n    public class JsonDemo : IDynamicApiController\n    {\n        private readonly IJsonSerializerProvider _jsonSerializer;\n        private readonly IJsonSerializerProvider _jsonSerializer2;\n        public JsonDemo(IJsonSerializerProvider jsonSerializer)\n        {\n            _jsonSerializer = jsonSerializer;\n            _jsonSerializer2 = JSON.GetJsonSerializer();\n        }\n    }\n}\n")),Object(r.b)("h3",{id:"2342-\u5e8f\u5217\u5316\u5bf9\u8c61"},"23.4.2 \u5e8f\u5217\u5316\u5bf9\u8c61"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cs"},'public string GetText()\n{\n    return _jsonSerializer.Serialize(new\n    {\n        Id = 1,\n        Name = "Furion"\n    });\n}\n')),Object(r.b)("h3",{id:"2343-\u53cd\u5e8f\u5217\u5316\u5b57\u7b26\u4e32"},"23.4.3 \u53cd\u5e8f\u5217\u5316\u5b57\u7b26\u4e32"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cs"},'public object GetObject()\n{\n    var json = "{\\"Id\\":1,\\"Name\\":\\"Furion\\"}";\n    var obj = _jsonSerializer.Deserialize<object>(json);\n    return obj;\n}\n')),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u7279\u522b\u6ce8\u610f")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},Object(r.b)("inlineCode",{parentName:"p"},"System.Text.Json")," \u9ed8\u8ba4\u53cd\u5e8f\u5217\u5316\u5927\u5c0f\u5199\u654f\u611f\uff0c\u4e5f\u5c31\u662f\u4e0d\u5b8c\u5168\u5339\u914d\u7684\u5c5e\u6027\u540d\u79f0\u4e0d\u4f1a\u81ea\u52a8\u8d4b\u503c\u3002\u8fd9\u65f6\u5019\u6211\u4eec\u53ef\u4ee5\u5168\u5c40\u914d\u7f6e\u6216\u5355\u72ec\u914d\u7f6e\u3002"),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},"\u5168\u5c40\u914d\u7f6e")),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",{parentName:"pre",className:"language-cs"},"services.AddControllersWithViews()\n        .AddJsonOptions(options => {\n            options.JsonSerializerOptions.PropertyNameCaseInsensitive = true;\n        });\n")),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},"\u5355\u72ec\u914d\u7f6e")),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",{parentName:"pre",className:"language-cs"},"var obj = _jsonSerializer.Deserialize<object>(json, new JsonSerializerOptions\n   {\n       PropertyNameCaseInsensitive = true\n   });\n")))),Object(r.b)("h3",{id:"2344-\u5e8f\u5217\u5316\u66f4\u591a\u914d\u7f6e"},"23.4.4 \u5e8f\u5217\u5316\u66f4\u591a\u914d\u7f6e"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u4e0d\u63a8\u8350\u4e00\u4e2a\u6846\u67b6\u4e2d\u6709\u591a\u79cd\u5e8f\u5217\u5316\u5b9e\u73b0\u7c7b\uff0c\u4e5f\u5c31\u662f\u8bf4\u4f7f\u7528 ",Object(r.b)("inlineCode",{parentName:"p"},"System.Text.Json")," \u5c31\u4e0d\u8981\u4f7f\u7528 ",Object(r.b)("inlineCode",{parentName:"p"},"Newtonsoft.Json"),"\uff0c\u53cd\u4e4b\u4ea6\u7136\u3002"),Object(r.b)("p",null,"\u5982\u9700\u914d\u7f6e\u66f4\u591a\u9009\u9879\uff0c\u53ea\u9700\u521b\u5efa ",Object(r.b)("inlineCode",{parentName:"p"},"JsonSerializerOptions")," \u914d\u7f6e\u5bf9\u8c61\u5373\u53ef\uff0c\u5982\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cs",metastring:"{5}","{5}":!0},'var json =  _jsonSerializer.Serialize(new\n            {\n                Id = 1,\n                Name = "Furion"\n            }, new JsonSerializerOptions {\n                WriteIndented = true\n            });\n')),Object(r.b)("h2",{id:"235-\u9ad8\u7ea7\u7528\u6cd5"},"23.5 \u9ad8\u7ea7\u7528\u6cd5"),Object(r.b)("h3",{id:"2351-\u81ea\u5b9a\u4e49\u5e8f\u5217\u5316\u63d0\u4f9b\u5668"},"23.5.1 \u81ea\u5b9a\u4e49\u5e8f\u5217\u5316\u63d0\u4f9b\u5668"),Object(r.b)("p",null,"\u6b63\u5982\u4e0a\u6587\u6240\u8bf4\uff0c",Object(r.b)("inlineCode",{parentName:"p"},"Furion")," \u9ed8\u8ba4\u7684 ",Object(r.b)("inlineCode",{parentName:"p"},"IJsonSerializerProvider")," \u5b9e\u73b0\u65b9\u5f0f\u662f ",Object(r.b)("inlineCode",{parentName:"p"},"System.Text.Json")," \u5e93\uff0c\u5982\u9700\u66ff\u6362\u4e3a ",Object(r.b)("inlineCode",{parentName:"p"},"Newtonsoft.Json"),"\uff0c\u53ea\u9700\u4ee5\u4e0b\u6b65\u9aa4\u5373\u53ef\uff1a"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"\u5b89\u88c5 ",Object(r.b)("inlineCode",{parentName:"li"},"Microsoft.AspNetCore.Mvc.NewtonsoftJson")," \u62d3\u5c55\uff0c\u5e76\u5728 ",Object(r.b)("inlineCode",{parentName:"li"},"Startup.cs")," \u4e2d\u6ce8\u518c")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cs",metastring:"{2}","{2}":!0},"services.AddControllersWithViews()\n        .AddNewtonsoftJson();\n")),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},"\u5b9e\u73b0 ",Object(r.b)("inlineCode",{parentName:"li"},"IJsonSerializerProvider")," \u63d0\u4f9b\u5668")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cs",metastring:"{10}","{10}":!0},'using Furion.DependencyInjection;\nusing Furion.JsonSerialization;\nusing Newtonsoft.Json;\n\nnamespace Furion.Core\n{\n    /// <summary>\n    /// Newtonsoft.Json \u5b9e\u73b0\n    /// </summary>\n    public class NewtonsoftJsonSerializerProvider : IJsonSerializerProvider, ISingleton\n    {\n        /// <summary>\n        /// \u5e8f\u5217\u5316\u5bf9\u8c61\n        /// </summary>\n        /// <param name="value"></param>\n        /// <param name="jsonSerializerOptions"></param>\n        /// <returns></returns>\n        public string Serialize(object value, object jsonSerializerOptions = null)\n        {\n            return JsonConvert.SerializeObject(value, jsonSerializerOptions as JsonSerializerSettings);\n        }\n\n        /// <summary>\n        /// \u53cd\u5e8f\u5217\u5316\u5b57\u7b26\u4e32\n        /// </summary>\n        /// <typeparam name="T"></typeparam>\n        /// <param name="json"></param>\n        /// <param name="jsonSerializerOptions"></param>\n        /// <returns></returns>\n        public T Deserialize<T>(string json, object jsonSerializerOptions = null)\n        {\n            return JsonConvert.DeserializeObject<T>(json, jsonSerializerOptions as JsonSerializerSettings);\n        }\n    }\n}\n')),Object(r.b)("h3",{id:"2352-\u5e8f\u5217\u5316\u5c5e\u6027\u540d\u5927\u5199"},"23.5.2 \u5e8f\u5217\u5316\u5c5e\u6027\u540d\u5927\u5199"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"System.Text.Json")," \u65b9\u5f0f")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cs"},"services.AddControllersWithViews()\n        .AddJsonOptions(options => {\n            options.JsonSerializerOptions.PropertyNamingPolicy = null;\n        });\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Newtonsoft.Json")," \u65b9\u5f0f")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cs"},"services.AddControllersWithViews()\n        .AddNewtonsoftJson(options =>\n        {\n            options.SerializerSettings.ContractResolver = new DefaultContractResolver();\n        });\n")),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u7279\u522b\u6ce8\u610f")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"\u91c7\u7528 ",Object(r.b)("inlineCode",{parentName:"p"},"Newtonsoft.Json")," \u65b9\u5f0f\u63a5\u53e3\u8fd4\u56de\u503c\u80fd\u591f\u6b63\u5e38\u8f93\u51fa\uff0c\u4f46\u662f ",Object(r.b)("inlineCode",{parentName:"p"},"Swagger")," \u754c\u9762\u4e2d\u7684 ",Object(r.b)("inlineCode",{parentName:"p"},"Example Values")," \u4f9d\u7136\u663e\u793a\u5c0f\u5199\u5b57\u6bcd\u5f00\u5934\u7684\u5c5e\u6027\uff0c\u8fd9\u65f6\u53ea\u9700\u8981\u518d\u6dfb\u52a0 ",Object(r.b)("inlineCode",{parentName:"p"},"System.Text.Json")," \u914d\u7f6e\u5373\u53ef\uff0c\u5982\uff1a"),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",{parentName:"pre",className:"language-cs"},".AddJsonOptions(options => {\n            options.JsonSerializerOptions.PropertyNamingPolicy = null;\n        });\n")),Object(r.b)("p",{parentName:"div"},"\u4e3b\u8981\u539f\u56e0\u662f ",Object(r.b)("inlineCode",{parentName:"p"},"Swagger")," \u62d3\u5c55\u5305\u5e95\u5c42\u4f9d\u8d56\u4e86 ",Object(r.b)("inlineCode",{parentName:"p"},"System.Text.Json"),"\u3002"))),Object(r.b)("h3",{id:"2353-\u65f6\u95f4\u683c\u5f0f\u5316"},"23.5.3 \u65f6\u95f4\u683c\u5f0f\u5316"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"System.Text.Json")," \u65b9\u5f0f")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cs"},'services.AddControllersWithViews()\n        .AddJsonOptions(options =>\n        {\n            options.JsonSerializerOptions.Converters.AddDateFormatString("yyyy-MM-dd HH:mm:ss");\n        });\n')),Object(r.b)("p",null,"\u9700\u5f15\u7528 ",Object(r.b)("inlineCode",{parentName:"p"},"System.Text.Json")," \u547d\u540d\u7a7a\u95f4\u3002"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Newtonsoft.Json")," \u65b9\u5f0f")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cs"},'services.AddControllersWithViews()\n        .AddNewtonsoftJson(options =>\n        {\n            options.SerializerSettings.DateFormatString = "yyyy-MM-dd HH:mm:ss";\n        });\n')),Object(r.b)("h3",{id:"2354-\u5ffd\u7565\u5faa\u73af\u5f15\u7528"},"23.5.4 \u5ffd\u7565\u5faa\u73af\u5f15\u7528"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"System.Text.Json")," \u65b9\u5f0f")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cs"},"services.AddControllersWithViews()\n        .AddJsonOptions(options =>\n        {\n            options.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles;\n        });\n")),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u7279\u522b\u8bf4\u660e")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"\u5728 ",Object(r.b)("inlineCode",{parentName:"p"},".NET 5")," \u4e2d\uff0c",Object(r.b)("inlineCode",{parentName:"p"},"System.Text.Json")," \u5e76\u4e0d\u652f\u6301\u5904\u7406\u5faa\u73af\u5f15\u7528\u95ee\u9898\uff0c\u4ee5\u4e0a\u7684\u89e3\u51b3\u65b9\u6848\u53ea\u9650\u7528\u4e8e ",Object(r.b)("inlineCode",{parentName:"p"},".NET 6 Preview 2+"),"\u3002\ud83d\ude02"))),Object(r.b)("p",null,"\u9700\u5f15\u7528 ",Object(r.b)("inlineCode",{parentName:"p"},"System.Text.Json")," \u547d\u540d\u7a7a\u95f4\u3002"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Newtonsoft.Json")," \u65b9\u5f0f")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cs"},"services.AddControllersWithViews()\n        .AddNewtonsoftJson(options =>\n        {\n            options.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;\n        });\n")),Object(r.b)("h2",{id:"236-datatable\u3001dataset\u3001tuple-\u5143\u7ec4\u7b49\u5e8f\u5217\u5316\u95ee\u9898"},"23.6 ",Object(r.b)("inlineCode",{parentName:"h2"},"DataTable"),"\u3001",Object(r.b)("inlineCode",{parentName:"h2"},"DataSet"),"\u3001",Object(r.b)("inlineCode",{parentName:"h2"},"Tuple")," \u5143\u7ec4\u7b49\u5e8f\u5217\u5316\u95ee\u9898"),Object(r.b)("p",null,"\u7531\u4e8e\u9ed8\u8ba4 ",Object(r.b)("inlineCode",{parentName:"p"},"Furion")," \u91c7\u7528 ",Object(r.b)("inlineCode",{parentName:"p"},"System.Text.Json")," \u8fdb\u884c\u5e8f\u5217\u5316\uff0c\u4f46\u662f\u4e0d\u652f\u6301\u590d\u6742\u7c7b\u578b\uff0c\u5982 ",Object(r.b)("inlineCode",{parentName:"p"},"DataTable")," \u3001 ",Object(r.b)("inlineCode",{parentName:"p"},"DataSet"),"\u3001",Object(r.b)("inlineCode",{parentName:"p"},"Tuple")," \u5143\u7ec4\uff0c\u6240\u4ee5\u9700\u8981\u66f4\u6362\u6210 ",Object(r.b)("inlineCode",{parentName:"p"},"NewtonsoftJson")," \u5373\u53ef\uff0c\u89c1 ",Object(r.b)("a",{parentName:"p",href:"./json-serialization#2351-%E8%87%AA%E5%AE%9A%E4%B9%89%E5%BA%8F%E5%88%97%E5%8C%96%E6%8F%90%E4%BE%9B%E5%99%A8"},"JSON \u5e8f\u5217\u5316 - 23.5.1 \u81ea\u5b9a\u4e49\u5e8f\u5217\u5316\u63d0\u4f9b\u5668")),Object(r.b)("h2",{id:"237-\u53cd\u9988\u4e0e\u5efa\u8bae"},"23.7 \u53cd\u9988\u4e0e\u5efa\u8bae"),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u4e0e\u6211\u4eec\u4ea4\u6d41")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"\u7ed9 Furion \u63d0 ",Object(r.b)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"},"Issue"),"\u3002"))))}b.isMDXComponent=!0},205:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return j}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=i.a.createContext({}),b=function(e){var n=i.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=b(e.components);return i.a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=b(t),m=a,j=p["".concat(o,".").concat(m)]||p[m]||d[m]||r;return t?i.a.createElement(j,l(l({ref:n},c),{},{components:t})):i.a.createElement(j,l({ref:n},c))}));function j(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=t[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);