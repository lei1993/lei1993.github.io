(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{376:function(a,t,s){"use strict";s.r(t);var n=s(44),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"centos离线安装nvidia-docker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#centos离线安装nvidia-docker"}},[a._v("#")]),a._v(" CentOS离线安装Nvidia-Docker")]),a._v(" "),s("h3",{attrs:{id:"在一台联网的机器上执行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在一台联网的机器上执行"}},[a._v("#")]),a._v(" 在一台联网的机器上执行")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("distribution")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v(" /etc/os-release"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" $ID$VERSION_ID"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -s -L https://nvidia.github.io/nvidia-docker/"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$distribution")]),a._v("/nvidia-docker.repo "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tee")]),a._v(" /etc/yum.repos.d/nvidia-docker.repo\n \nyum "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" --downloadonly nvidia-docker2 --downloaddir"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/tmp/nvidia\n")])])]),s("h3",{attrs:{id:"将以上安装包上传到无法联网的服务器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#将以上安装包上传到无法联网的服务器"}},[a._v("#")]),a._v(" 将以上安装包上传到无法联网的服务器")]),a._v(" "),s("h4",{attrs:{id:"执行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#执行"}},[a._v("#")]),a._v(" 执行")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rpm")]),a._v(" -ivh libnvidia-container1-1.1.1-1.x86_64.rpm libnvidia-container-tools-1.1.1-1.x86_64.rpm\n \n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rpm")]),a._v(" -ivh nvidia-container-runtime-3.2.0-1.x86_64.rpm nvidia-container-toolkit-1.1.2-2.x86_64.rpm nvidia-docker2-2.3.0-1.noarch.rpm \n")])])]),s("p",[a._v("附：安装包链接")]),a._v(" "),s("p",[a._v("包括docker和nvidia-docker所有依赖")]),a._v(" "),s("p",[a._v("链接：https://pan.baidu.com/s/1PfCYUjq3pZU0Dq01Gr3LZA\n提取码：tiry")])])}),[],!1,null,null,null);t.default=e.exports}}]);