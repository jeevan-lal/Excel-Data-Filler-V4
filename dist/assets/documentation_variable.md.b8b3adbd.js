import{r as l,t as o,o as d,c as i,b as t,d as s,a as u,e}from"./app.c3db6a28.js";const c={__name:"TodayDate",setup(n){const r=l(0),a=new Date;return r.value=`${("0"+a.getDate()).slice(-2)}-${("0"+(a.getMonth()+1)).slice(-2)}-${a.getFullYear()}`,(Y,A)=>o(r.value)}},h=u('<h1 id="variable" tabindex="-1">Variable <a class="header-anchor" href="#variable" aria-hidden="true">#</a></h1><p>You have to use these variables inside curly braces. like this</p><div><p>{{variable_name}}</p></div><h2 id="page-location-variable" tabindex="-1">Page Location Variable <a class="header-anchor" href="#page-location-variable" aria-hidden="true">#</a></h2><table><thead><tr><th>Variable Name</th><th>Description</th></tr></thead><tbody><tr><td><strong>location.href</strong></td><td>Page URL</td></tr><tr><td><strong>location.host</strong></td><td>Site Host Name</td></tr><tr><td><strong>location.hostname</strong></td><td>Site Hostname</td></tr><tr><td><strong>location.origin</strong></td><td>Site Origin</td></tr><tr><td><strong>location.pathname</strong></td><td>Page URL Pathname</td></tr></tbody></table><h2 id="generate-random-value" tabindex="-1">Generate Random Value <a class="header-anchor" href="#generate-random-value" aria-hidden="true">#</a></h2>',6),m=t("thead",null,[t("tr",null,[t("th",null,"Variable Name"),t("th",null,"Description"),t("th",null,"Example")])],-1),g=t("tr",null,[t("td",null,"random.integer[0][12]"),t("td",null,[e("Generate random integer value form "),t("strong",null,"0"),e(" to "),t("strong",null,"12"),e(".")]),t("td",null,[e("7 "),t("br"),e(" 11,..")])],-1),_=t("tr",null,[t("td",null,"random.float[0][12][2]"),t("td",null,[e("Generate random float value form "),t("strong",null,"0"),e(" to "),t("strong",null,"12"),e(" with "),t("strong",null,"2"),e(" digit precision.")]),t("td",null,[e("7.45 "),t("br"),e(" 11.90,..")])],-1),b=t("tr",null,[t("td",null,[e("random.string[a,A,0][7] "),t("br"),e(" random.string[a,0][7] "),t("br"),e(" random.string[a,A][7]")]),t("td",null,[e("Generate random string of "),t("strong",null,"15"),e(" chars with "),t("strong",null,"a-z,A-Z,0-9"),e(" character set")]),t("td",null,[e("A0bAur8,.. "),t("br"),e(" ud7dhe6 "),t("br"),e(" AuYctTd,..")])],-1),p=t("tr",null,[t("td",null,[e("random.email["),t("a",{href:"http://gmail.com",target:"_blank",rel:"noreferrer"},"gmail.com"),e("]")]),t("td",null,[e("Generate random email address with custom "),t("strong",null,"domain"),e(" name.")]),t("td",null,[t("a",{href:"mailto:abeu@gmail.com",target:"_blank",rel:"noreferrer"},"abeu@gmail.com")])],-1),f=t("td",null,"date.today[DD-MM-YYYY]",-1),v=t("td",null,"Generate today date for given format",-1),D=t("tr",null,[t("td",null,"random.date[YYYY-MM-DD][1994][2012]"),t("td",null,[e("Generate random date for given format within "),t("strong",null,"1994"),e("-"),t("strong",null,"2012")]),t("td",null,[e("2012-09-12 "),t("br"),e(" 1993-12-01,..")])],-1),V=t("ul",null,[t("li",null,[t("a",{href:"https://day.js.org/docs/en/display/format#list-of-all-available-formats",target:"_blank",rel:"noreferrer"},"Check All Date Formats")])],-1),N=JSON.parse('{"title":"Variable","description":"","frontmatter":{},"headers":[{"level":2,"title":"Page Location Variable","slug":"page-location-variable","link":"#page-location-variable","children":[]},{"level":2,"title":"Generate Random Value","slug":"generate-random-value","link":"#generate-random-value","children":[]}],"relativePath":"documentation/variable.md","lastUpdated":1677242610000}'),y={name:"documentation/variable.md"},S=Object.assign(y,{setup(n){return(r,a)=>(d(),i("div",null,[h,t("table",null,[m,t("tbody",null,[g,_,b,p,t("tr",null,[f,v,t("td",null,[s(c)])]),D])]),V]))}});export{N as __pageData,S as default};
