!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).EscPosEncoder=e()}}(function(){return function(){return function e(t,n,a){function s(i,o){if(!n[i]){if(!t[i]){var c="function"==typeof require&&require;if(!o&&c)return c(i,!0);if(r)return r(i,!0);var p=new Error("Cannot find module '"+i+"'");throw p.code="MODULE_NOT_FOUND",p}var l=n[i]={exports:{}};t[i][0].call(l.exports,function(e){return s(t[i][1][e]||e)},l,l.exports,e,t,n,a)}return n[i].exports}for(var r="function"==typeof require&&require,i=0;i<a.length;i++)s(a[i]);return s}}()({1:[function(e,t,n){const a={cp437:{name:"USA, Standard Europe",languages:["en"],offset:128,chars:"ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "},cp720:{name:"Arabic",languages:["ar"],offset:128,chars:"éâàçêëèïîّْô¤ـûùءآأؤ£إئابةتثجحخدذرزسشص«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀ضطظعغفµقكلمنهوىي≡ًٌٍَُِ≈°∙·√ⁿ²■ "},cp737:{name:"Greek",languages:["el"],offset:128,chars:"ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρσςτυφχψ░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀ωάέήϊίόύϋώΆΈΉΊΌΎΏ±≥≤ΪΫ÷≈°∙·√ⁿ²■ "},cp775:{name:"Baltic Rim",languages:["et","lt"],offset:128,chars:"ĆüéāäģåćłēŖŗīŹÄÅÉæÆōöĢ¢ŚśÖÜø£Ø×¤ĀĪóŻżź”¦©®¬½¼Ł«»░▒▓│┤ĄČĘĖ╣║╗╝ĮŠ┐└┴┬├─┼ŲŪ╚╔╩╦╠═╬Žąčęėįšųūž┘┌█▄▌▐▀ÓßŌŃõÕµńĶķĻļņĒŅ’­±“¾¶§÷„°∙·¹³²■ "},cp850:{name:"Multilingual",languages:["en"],offset:128,chars:"ÇüéâäůćçłëŐőîŹÄĆÉĹĺôöĽľŚśÖÜŤťŁ×čáíóúĄąŽžĘę¬źČş«»░▒▓│┤ÁÂĚŞ╣║╗╝Żż┐└┴┬├─┼Ăă╚╔╩╦╠═╬¤đĐĎËďŇÍÎě┘┌█▄ŢŮ▀ÓßÔŃńňŠšŔÚŕŰýÝţ´­˝˛ˇ˘§÷¸°¨˙űŘř■ "},cp851:{name:"Greek",languages:["el"],offset:128,chars:"ÇüéâäàΆçêëèïîΈÄΉΊ ΌôöΎûùΏÖÜά£έήίϊΐόύΑΒΓΔΕΖΗ½ΘΙ«»░▒▓│┤ΚΛΜΝ╣║╗╝ΞΟ┐└┴┬├─┼ΠΡ╚╔╩╦╠═╬ΣΤΥΦΧΨΩαβγ┘┌█▄δε▀ζηθικλμνξοπρσςτ´­±υφχ§ψ¸°¨ωϋΰώ■ "},cp852:{name:"Latin 2",languages:["hu","pl","cz"],offset:128,chars:"ÇüéâäůćçłëŐőîŹÄĆÉĹĺôöĽľŚśÖÜŤťŁ×čáíóúĄąŽžĘę¬źČş«»░▒▓│┤ÁÂĚŞ╣║╗╝Żż┐└┴┬├─┼Ăă╚╔╩╦╠═╬¤đĐĎËďŇÍÎě┘┌█▄ŢŮ▀ÓßÔŃńňŠšŔÚŕŰýÝţ´­˝˛ˇ˘§÷¸°¨˙űŘř■ "},cp853:{name:"Turkish",languages:["tr"],offset:128,chars:"ÇüéâäàĉçêëèïîìÄĈÉċĊôöòûùİÖÜĝ£Ĝ×ĵáíóúñÑĞğĤĥ�½Ĵş«»░▒▓│┤ÁÂÀŞ╣║╗╝Żż┐└┴┬├─┼Ŝŝ╚╔╩╦╠═╬¤��ÊËÈıÍÎÏ┘┌█▄�Ì▀ÓßÔÒĠġµĦħÚÛÙŬŭ�´­�ℓŉ˘§÷¸°¨˙�³²■ "},cp855:{name:"Cyrillic",languages:["bg"],offset:128,chars:"ђЂѓЃёЁєЄѕЅіІїЇјЈљЉњЊћЋќЌўЎџЏюЮъЪаАбБцЦдДеЕфФгГ«»░▒▓│┤хХиИ╣║╗╝йЙ┐└┴┬├─┼кК╚╔╩╦╠═╬¤лЛмМнНоОп┘┌█▄Пя▀ЯрРсСтТуУжЖвВьЬ№­ыЫзЗшШэЭщЩчЧ§■ "},cp857:{name:"Turkish",languages:["tr"],offset:128,chars:"ÇüéâäàåçêëèïîıÄÅÉæÆôöòûùİÖÜø£ØŞşáíóúñÑĞğ¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ºªÊËÈ�ÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµ�×ÚÛÙìÿ¯´­±�¾¶§÷¸°¨·¹³²■ "},cp858:{name:"Euro",languages:["en"],offset:128,chars:"ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£Ø×ƒáíóúñÑªº¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ðÐÊËÈ€ÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµþÞÚÛÙýÝ¯´­±‗¾¶§÷¸°¨·¹³²■ "},cp860:{name:"Portuguese",languages:["pt"],offset:128,chars:"ÇüéâãàÁçêÊèÍÔìÃÂÉÀÈôõòÚùÌÕÜ¢£Ù₧ÓáíóúñÑªº¿Ò¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "},cp861:{name:"Icelandic",languages:["is"],offset:128,chars:"ÇüéâäàåçêëèÐðÞÄÅÉæÆôöþûÝýÖÜø£Ø₧ƒáíóúÁÍÓÚ¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "},cp862:{name:"Hebrew",languages:["he"],offset:128,chars:"אבגדהוזחטיךכלםמןנסעףפץצקרשת¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "},cp863:{name:"Canadian French",languages:["fr"],offset:128,chars:"ÇüéâÂà¶çêëèïî‗À§ÉÈÊôËÏûù¤ÔÜ¢£ÙÛƒ¦´óú¨¸³¯Î⌐¬½¼¾«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "},cp864:{name:"Arabic",languages:["ar"],offset:0,chars:"\0\b\t\n\v\f\r !\"#$٪&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~°·∙√▒─│┼┤┬├┴┐┌└┘β∞φ±½¼≈«»ﻷﻸ��ﻻﻼ� ­ﺂ£¤ﺄ��ﺎﺏﺕﺙ،ﺝﺡﺥ٠١٢٣٤٥٦٧٨٩ﻑ؛ﺱﺵﺹ؟¢ﺀﺁﺃﺅﻊﺋﺍﺑﺓﺗﺛﺟﺣﺧﺩﺫﺭﺯﺳﺷﺻﺿﻁﻅﻋﻏ¦¬÷×ﻉـﻓﻗﻛﻟﻣﻧﻫﻭﻯﻳﺽﻌﻎﻍﻡﹽّﻥﻩﻬﻰﻲﻐﻕﻵﻶﻝﻙﻱ■�"},cp865:{name:"Nordic",languages:["sv","dk"],offset:128,chars:"ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£Ø₧ƒáíóúñÑªº¿⌐¬½¼¡«¤░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "},cp866:{name:"Cyrillic 2",languages:["ru"],offset:128,chars:"АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмноп░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀рстуфхцчшщъыьэюяЁёЄєЇїЎў°∙·√№¤■ "},cp869:{name:"Greek",languages:["el"],offset:128,chars:"������Ά�·¬¦‘’Έ―ΉΊΪΌ��ΎΫ©Ώ²³ά£έήίϊΐόύΑΒΓΔΕΖΗ½ΘΙ«»░▒▓│┤ΚΛΜΝ╣║╗╝ΞΟ┐└┴┬├─┼ΠΡ╚╔╩╦╠═╬ΣΤΥΦΧΨΩαβγ┘┌█▄δε▀ζηθικλμνξοπρσςτ΄­±υφχ§ψ΅°¨ωϋΰώ■ "},cp874:{name:"Thai",languages:["th"],offset:128,chars:"€����…�����������‘’“”•–—�������� กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����"},cp1098:{name:"Farsi",languages:["fa"],offset:128,chars:"  ،؛؟ًآﺂاﺎءأﺄؤﺋبﺑﭖﭘتﺗثﺛجﺟﭺﭼ×حﺣخﺧدذرزﮊسﺳشﺷصﺻ«»░▒▓│┤ضﺿﻁﻃ╣║╗╝¤ﻅ┐└┴┬├─┼ﻇع╚╔╩╦╠═╬ ﻊﻋﻌغﻎﻏﻐفﻓ┘┌█▄قﻗ▀ﮎﻛﮒﮔلﻟمﻣنﻧوهﻫﻬﮤﯼ­ﯽﯾـ٠١٢٣٤٥٦٧٨٩■ "},cp1118:{name:"Lithuanian",languages:["lt"],offset:128,chars:"ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤ĄČĘĖ╣║╗╝ĮŠ┐└┴┬├─┼ŲŪ╚╔╩╦╠═╬Žąčęėįšųūž┘┌█▄▌▐▀αβΓπΣσµτΦΘΩδ∞φε⋂≡±≥≤„“÷≈°∙˙√ⁿ²■ "},cp1119:{name:"Lithuanian",languages:["lt"],offset:128,chars:"АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмноп░▒▓│┤ĄČĘĖ╣║╗╝ĮŠ┐└┴┬├─┼ŲŪ╚╔╩╦╠═╬Žąčęėįšųūž┘┌█▄▌▐▀рстуфхцчшщъыьэюяЁё≥≤„“÷≈°∙·√ⁿ²■ "},cp1125:{name:"Ukrainian",languages:["uk"],offset:128,chars:"АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмноп░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀рстуфхцчшщъыьэюяЁёҐґЄєІіЇї·√№¤■ "},cp1162:{name:"Thai",languages:["th"],offset:128,chars:"€…‘’“”•–— กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����"},cp2001:{name:"Lithuanian KBL or 771",languages:["lt"],offset:128,chars:"АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмноп░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█ĄąČčрстуфхцчшщъыьэюяĘęĖėĮįŠšŲųŪūŽž■ "},cp3001:{name:"Estonian 1 or 1116",languages:["et"],offset:128,chars:"ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£Ø×ƒáíóúñÑªº¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤šŠÊËÈıÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµžŽÚÛÙýÝ¯´­±‗¾¶§÷¸°¨·¹³²■ "},cp3002:{name:"Estonian 2",languages:["et"],offset:128,chars:" ¡¢£¤¥¦§¨©ª«¬­®‾°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏŠÑÒÓÔÕÖ×ØÙÚÛÜÝŽßàáâãäåæçèéêëìíîïšñòóôõö÷øùúûüýžÿ"},cp3011:{name:"Latvian 1",languages:["lv"],offset:128,chars:"ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤Ā╢ņ╕╣║╗╝╜╛┐└┴┬├─┼ā╟╚╔╩╦╠═╬╧Š╤čČ╘╒ģĪī┘┌█▄ūŪ▀αßΓπΣσµτΦΘΩδ∞φε∩ĒēĢķĶļĻžŽ∙·√Ņš■ "},cp3012:{name:"Latvian 2 (modified 866)",languages:["lv"],offset:128,chars:"АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмноп░▒▓│┤Ā╢ņ╕╣║╗╝Ō╛┐└┴┬├─┼ā╟╚╔╩╦╠═╬╧Š╤čČ╘╒ģĪī┘┌█▄ūŪ▀рстуфхцчшщъыьэюяĒēĢķĶļĻžŽō·√Ņš■ "},cp3021:{name:"Bulgarian (MIK)",languages:["bg"],offset:128,chars:"АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя└┴┬├─┼╣║╚╔╩╦╠═╬┐░▒▓│┤№§╗╝┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "},cp3041:{name:"Maltese ISO 646",languages:["mt"],offset:0,chars:"\0\b\t\n\v\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZġżħ^_ċabcdefghijklmnopqrstuvwxyzĠŻĦĊ"},cp3840:{name:"Russian (modified 866)",languages:["ru"],offset:128,chars:"АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмноп░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀рстуфхцчшщъыьэюя≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "},cp3841:{name:"Ghost",languages:["ru"],offset:128,chars:"ғәёіїјҝөўүӽӈҹҷє£ҒӘЁІЇЈҜӨЎҮӼӇҸҶЄЪ !\"#$%&'()*+,-./0123456789:;<=>?юабцдефгхийклмнопярстужвьызшэщчъЮАБЦДЕФГХИЙКЛМНОПЯРСТУЖВЬЫЗШЭЩЧ∅"},cp3843:{name:"Polish (Mazovia)",languages:["pl"],offset:128,chars:"ÇüéâäàąçêëèïîćÄĄĘęłôöĆûùŚÖÜ¢Ł¥śƒŹŻóÓńŃźż¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "},cp3844:{name:"Czech (Kamenický)",languages:["cz"],offset:128,chars:"ČüéďäĎŤčěĚĹÍľĺÄÁÉžŽôöÓůÚýÖÜŠĽÝŘťáíóúňŇŮÔšřŕŔ¼§«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "},cp3845:{name:"Hungarian (CWI-2)",languages:["hu"],offset:128,chars:"ÇüéâäàåçêëèïîÍÄÁÉæÆőöÓűÚŰÖÜ¢£¥₧ƒáíóúñÑªŐ¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "},cp3846:{name:"Turkish",languages:["tr"],offset:128,chars:"ÇüéâäàåçêëèïîıÄÅÉæÆôöòûùİÖÜ¢£¥ŞşáíóúñÑĞğ¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "},cp3847:{name:"Brazil ABNT",languages:["pt"],offset:256,chars:""},cp3848:{name:"Brazil ABICOMP",languages:["pt"],offset:160,chars:" ÀÁÂÃÄÇÈÉÊËÌÍÎÏÑÒÓÔÕÖŒÙÚÛÜŸ¨£¦§°¡àáâãäçèéêëìíîïñòóôõöœùúûüÿßªº¿±"},iso88591:{name:"Latin 1",languages:["en"],offset:128,chars:" ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ"},iso88592:{name:"Latin 2",languages:["hu","pl","cz"],offset:128,chars:" Ą˘Ł¤ĽŚ§¨ŠŞŤŹ­ŽŻ°ą˛ł´ľśˇ¸šşťź˝žżŔÁÂĂÄĹĆÇČÉĘËĚÍÎĎĐŃŇÓÔŐÖ×ŘŮÚŰÜÝŢßŕáâăäĺćçčéęëěíîďđńňóôőö÷řůúűüýţ˙"},iso88597:{name:"Greek",languages:["el"],offset:128,chars:" ‘’£€₯¦§¨©ͺ«¬­�―°±²³΄΅Ά·ΈΉΊ»Ό½ΎΏΐΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡ�ΣΤΥΦΧΨΩΪΫάέήίΰαβγδεζηθικλμνξοπρςστυφχψωϊϋόύώ�"},iso885915:{name:"Latin 9",languages:["fr"],offset:128,chars:" ¡¢£€¥Š§š©ª«¬­®¯°±²³Žµ¶·ž¹º»ŒœŸ¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ"},rk1048:{name:"Kazakh",languages:["kk"],offset:128,chars:"ЂЃ‚ѓ„…†‡€‰Љ‹ЊҚҺЏђ‘’“”•–—�™љ›њқһџ ҰұӘ¤Ө¦§Ё©Ғ«¬­®Ү°±Ііөµ¶·ё№ғ»әҢңүАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя"},windows1250:{name:"Latin 2",languages:["hu","pl","cz"],offset:128,chars:"€�‚�„…†‡�‰Š‹ŚŤŽŹ�‘’“”•–—�™š›śťžź ˇ˘Ł¤Ą¦§¨©Ş«¬­®Ż°±˛ł´µ¶·¸ąş»Ľ˝ľżŔÁÂĂÄĹĆÇČÉĘËĚÍÎĎĐŃŇÓÔŐÖ×ŘŮÚŰÜÝŢßŕáâăäĺćçčéęëěíîďđńňóôőö÷řůúűüýţ˙"},windows1251:{name:"Cyrillic",languages:["ru"],offset:128,chars:"ЂЃ‚ѓ„…†‡€‰Љ‹ЊЌЋЏђ‘’“”•–—�™љ›њќћџ ЎўЈ¤Ґ¦§Ё©Є«¬­®Ї°±Ііґµ¶·ё№є»јЅѕїАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя"},windows1252:{name:"Latin",languages:["fr"],offset:128,chars:"€�‚ƒ„…†‡ˆ‰Š‹Œ�Ž��‘’“”•–—˜™š›œ�žŸ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ"},windows1253:{name:"Greek",languages:["el"],offset:128,chars:"€�‚ƒ„…†‡�‰�‹�����‘’“”•–—�™�›���� ΅Ά£¤¥¦§¨©�«¬­®―°±²³΄µ¶·ΈΉΊ»Ό½ΎΏΐΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡ�ΣΤΥΦΧΨΩΪΫάέήίΰαβγδεζηθικλμνξοπρςστυφχψωϊϋόύώ�"},windows1254:{name:"Turkish",languages:["tr"],offset:128,chars:"€�‚ƒ„…†‡ˆ‰Š‹Œ����‘’“”•–—˜™š›œ��Ÿ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏĞÑÒÓÔÕÖ×ØÙÚÛÜİŞßàáâãäåæçèéêëìíîïğñòóôõö÷øùúûüışÿ"},windows1255:{name:"Hebrew",languages:["he"],offset:128,chars:"€�‚ƒ„…†‡ˆ‰�‹�����‘’“”•–—˜™�›���� ¡¢£₪¥¦§¨©×«¬­®¯°±²³´µ¶·¸¹÷»¼½¾¿ְֱֲֳִֵֶַָֹֺֻּֽ־ֿ׀ׁׂ׃װױײ׳״�������אבגדהוזחטיךכלםמןנסעףפץצקרשת��‎‏�"},windows1256:{name:"Arabic",languages:["ar"],offset:128,chars:"€پ‚ƒ„…†‡ˆ‰ٹ‹Œچژڈگ‘’“”•–—ک™ڑ›œ‌‍ں ،¢£¤¥¦§¨©ھ«¬­®¯°±²³´µ¶·¸¹؛»¼½¾؟ہءآأؤإئابةتثجحخدذرزسشصض×طظعغـفقكàلâمنهوçèéêëىيîïًٌٍَôُِ÷ّùْûü‎‏ے"},windows1257:{name:"Baltic Rim",languages:["et","lt"],offset:128,chars:"€�‚�„…†‡�‰�‹�¨ˇ¸�‘’“”•–—�™�›�¯˛� �¢£¤�¦§Ø©Ŗ«¬­®Æ°±²³´µ¶·ø¹ŗ»¼½¾æĄĮĀĆÄÅĘĒČÉŹĖĢĶĪĻŠŃŅÓŌÕÖ×ŲŁŚŪÜŻŽßąįāćäåęēčéźėģķīļšńņóōõö÷ųłśūüżž˙"},windows1258:{name:"Vietnamese",languages:["vi"],offset:128,chars:"€�‚ƒ„…†‡ˆ‰�‹Œ����‘’“”•–—˜™�›œ��Ÿ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂĂÄÅÆÇÈÉÊË̀ÍÎÏĐÑ̉ÓÔƠÖ×ØÙÚÛÜỮßàáâăäåæçèéêë́íîïđṇ̃óôơö÷øùúûüư₫ÿ"}},s={en:"The quick brown fox jumps over the lazy dog.",jp:"イロハニホヘト チリヌルヲ ワカヨタレソ ツネナラム",pt:"O próximo vôo à noite sobre o Atlântico, põe freqüentemente o único médico.",fr:"Les naïfs ægithales hâtifs pondant à Noël où il gèle sont sûrs d'être déçus en voyant leurs drôles d'œufs abîmés.",sv:"Flygande bäckasiner söka strax hwila på mjuka tuvor.",dk:"Quizdeltagerne spiste jordbær med fløde",el:"ξεσκεπάζω την ψυχοφθόρα βδελυγμία",tr:"Pijamalı hasta, yağız şoföre çabucak güvendi.",ru:"Съешь же ещё этих мягких французских булок да выпей чаю",hu:"Árvíztűrő tükörfúrógép",pl:"Pchnąć w tę łódź jeża lub ośm skrzyń fig",cz:"Mohu jíst sklo, neublíží mi.",ar:"أنا قادر على أكل الزجاج و هذا لا يؤلمني.",et:"Ma võin klaasi süüa, see ei tee mulle midagi.",lt:"Aš galiu valgyti stiklą ir jis manęs nežeidžia.",bg:"Мога да ям стъкло, то не ми вреди.",is:"Ég get etið gler án þess að meiða mig.",he:"אני יכול לאכול זכוכית וזה לא מזיק לי.",fa:".من می توانم بدونِ احساس درد شيشه بخورم",uk:"Я можу їсти скло, і воно мені не зашкодить.",vi:"Tôi có thể ăn thủy tinh mà không hại gì.",kk:"қазақша",lv:"Es varu ēst stiklu, tas man nekaitē.",mt:"Nista' niekol il-ħġieġ u ma jagħmilli xejn.",th:"ฉันกินกระจกได้ แต่มันไม่ทำให้ฉันเจ็บ"};t.exports=class{static getEncodings(){return Object.keys(a)}static getTestStrings(e){return void 0!==a[e]&&void 0!==a[e].languages?a[e].languages.map(e=>({language:e,string:s[e]})):[]}static supports(e){return void 0!==a[e]&&void 0!==a[e].chars}static encode(e,t){const n=new Uint8Array(e.length);let s="\0".repeat(128),r=128;void 0!==a[t]&&void 0!==a[t].chars&&(s=a[t].chars,r=a[t].offset);for(let t=0;t<e.length;t++){const a=e.codePointAt(t);if(a<128)n[t]=a;else{const i=s.indexOf(e[t]);-1!==i?n[t]=r+i:a<256&&(a<r||a>=r+s.length)?n[t]=a:n[t]=63}}return n}static autoEncode(e,t){const n=[];let s,r=-1;for(let i=0;i<e.length;i++){const o=e.codePointAt(i);let c,p=0;if(o<128&&(c=s||t[0],p=o),!c&&s){const t=a[s].chars.indexOf(e[i]);-1!==t&&(c=s,p=a[s].offset+t)}if(!c)for(let n=0;n<t.length;n++){const s=a[t[n]].chars.indexOf(e[i]);if(-1!==s){c=t[n],p=a[t[n]].offset+s;break}}c||(c=s||t[0],p=63),s!=c&&(s&&(n[r].bytes=new Uint8Array(n[r].bytes)),n[++r]={codepage:c,bytes:[]},s=c),n[r].bytes.push(p)}return s&&(n[r].bytes=new Uint8Array(n[r].bytes)),n}}},{}],2:[function(e,t,n){t.exports=new class{grayscale(e){for(let t=0;t<e.data.length;t+=4){const n=.299*e.data[t]+.587*e.data[t+1]+.114*e.data[t+2];e.data.fill(n,t,t+3)}return e}threshold(e,t){for(let n=0;n<e.data.length;n+=4){const a=.299*e.data[n]+.587*e.data[n+1]+.114*e.data[n+2]<t?0:255;e.data.fill(a,n,n+3)}return e}bayer(e,t){const n=[[15,135,45,165],[195,75,225,105],[60,180,30,150],[240,120,210,90]];for(let a=0;a<e.data.length;a+=4){const s=.299*e.data[a]+.587*e.data[a+1]+.114*e.data[a+2],r=a/4%e.width,i=Math.floor(a/4/e.width),o=Math.floor((s+n[r%4][i%4])/2)<t?0:255;e.data.fill(o,a,a+3)}return e}floydsteinberg(e){const t=e.width,n=new Uint8ClampedArray(e.width*e.height);for(let t=0,a=0;a<e.data.length;t++,a+=4)n[t]=.299*e.data[a]+.587*e.data[a+1]+.114*e.data[a+2];for(let a=0,s=0;s<e.data.length;a++,s+=4){const r=n[a]<129?0:255,i=Math.floor((n[a]-r)/16);e.data.fill(r,s,s+3),n[a+1]+=7*i,n[a+t-1]+=3*i,n[a+t]+=5*i,n[a+t+1]+=1*i}return e}atkinson(e){const t=e.width,n=new Uint8ClampedArray(e.width*e.height);for(let t=0,a=0;a<e.data.length;t++,a+=4)n[t]=.299*e.data[a]+.587*e.data[a+1]+.114*e.data[a+2];for(let a=0,s=0;s<e.data.length;a++,s+=4){const r=n[a]<129?0:255,i=Math.floor((n[a]-r)/8);e.data.fill(r,s,s+3),n[a+1]+=i,n[a+2]+=i,n[a+t-1]+=i,n[a+t]+=i,n[a+t+1]+=i,n[a+2*t]+=i}return e}}},{}],3:[function(e,t,n){t.exports=new class{flatten(e,t){for(let n=0;n<e.data.length;n+=4){const a=e.data[n+3],s=255-a;e.data[n]=(a*e.data[n]+s*t[0])/255,e.data[n+1]=(a*e.data[n+1]+s*t[1])/255,e.data[n+2]=(a*e.data[n+2]+s*t[2])/255,e.data[n+3]=255}return e}}},{}],4:[function(e,t,n){const a=e("./lib/parse-font");n.parseFont=a,n.createCanvas=function(e,t){return Object.assign(document.createElement("canvas"),{width:e,height:t})},n.createImageData=function(e,t,n){switch(arguments.length){case 0:return new ImageData;case 1:return new ImageData(e);case 2:return new ImageData(e,t);default:return new ImageData(e,t,n)}},n.loadImage=function(e,t){return new Promise(function(n,a){const s=Object.assign(document.createElement("img"),t);function r(){s.onload=null,s.onerror=null}s.onload=function(){r(),n(s)},s.onerror=function(){r(),a(new Error('Failed to load the image "'+e+'"'))},s.src=e})}},{"./lib/parse-font":5}],5:[function(e,t,n){"use strict";const a="'([^']+)'|\"([^\"]+)\"|[\\w\\s-]+",s=new RegExp("(bold|bolder|lighter|[1-9]00) +","i"),r=new RegExp("(italic|oblique) +","i"),i=new RegExp("(small-caps) +","i"),o=new RegExp("(ultra-condensed|extra-condensed|condensed|semi-condensed|semi-expanded|expanded|extra-expanded|ultra-expanded) +","i"),c=new RegExp("([\\d\\.]+)(px|pt|pc|in|cm|mm|%|em|ex|ch|rem|q) *((?:"+a+")( *, *(?:"+a+"))*)"),p={};t.exports=function(e){if(p[e])return p[e];const t=c.exec(e);if(!t)return;const n={weight:"normal",style:"normal",stretch:"normal",variant:"normal",size:parseFloat(t[1]),unit:t[2],family:t[3].replace(/["']/g,"").replace(/ *, */g,",")};let a,l,h,u,f=e.substring(0,t.index);switch((a=s.exec(f))&&(n.weight=a[1]),(l=r.exec(f))&&(n.style=l[1]),(h=i.exec(f))&&(n.variant=h[1]),(u=o.exec(f))&&(n.stretch=u[1]),n.unit){case"pt":n.size/=.75;break;case"pc":n.size*=16;break;case"in":n.size*=96;break;case"cm":n.size*=96/2.54;break;case"mm":n.size*=96/25.4;break;case"%":break;case"em":case"rem":n.size*=16/.75;break;case"q":n.size*=96/25.4/4}return p[e]=n}},{}],6:[function(e,t,n){var a={html:{skipScheme:"html",lineBreakScheme:"html",whitespace:"collapse"}},s=/<\s*br(?:[\s/]*|\s[^>]*)>/gi,r={unix:[/\n/g,"\n"],dos:[/\r\n/g,"\r\n"],mac:[/\r/g,"\r"],html:[s,"<br>"],xhtml:[s,"<br/>"]},i={"ansi-color":/\x1B\[[^m]*m/g,html:/<[^>]*>/g,bbcode:/\[[^]]*\]/g},o={soft:1,hard:1},c={collapse:1,default:1,line:1,all:1},p={all:1,multi:1,none:1},l=/([sm])(\d+)/,h=/[-/\\^$*+?.()|[\]{}]/g;function u(e){return e.replace(h,"\\$&")}var f=t.exports=function(e,t,n){"object"==typeof e&&(e=(n=e).start,t=n.stop),"object"==typeof t&&(n=t,e=e||n.start,t=void 0),t||(t=e,e=0),n||(n={});var s,h,f,g,d,w,m,b,y,v,k,x,_,E,j,I,L,q,B="soft",z="default",M=4,A="all",T="",R="";if(s=n.preset)for(s instanceof Array||(s=[s]),q=0;q<s.length;q++){if(!(I=a[s[q]]))throw new TypeError('preset must be one of "'+Object.keys(a).join('", "')+'"');I.mode&&(B=I.mode),I.whitespace&&(z=I.whitespace),void 0!==I.tabWidth&&(M=I.tabWidth),I.skip&&(h=I.skip),I.skipScheme&&(f=I.skipScheme),I.lineBreak&&(g=I.lineBreak),I.lineBreakScheme&&(d=I.lineBreakScheme),I.respectLineBreaks&&(A=I.respectLineBreaks),void 0!==I.preservedLineIndent&&(m=I.preservedLineIndent),void 0!==I.wrapLineIndent&&(b=I.wrapLineIndent),I.wrapLineIndentBase&&(y=I.wrapLineIndentBase)}if(n.mode){if(!o[n.mode])throw new TypeError('mode must be one of "'+Object.keys(o).join('", "')+'"');B=n.mode}if(n.whitespace){if(!c[n.whitespace])throw new TypeError('whitespace must be one of "'+Object.keys(c).join('", "')+'"');z=n.whitespace}if(void 0!==n.tabWidth){if(!(parseInt(n.tabWidth,10)>=0))throw new TypeError("tabWidth must be a non-negative integer");M=parseInt(n.tabWidth,10)}if(j=new Array(M+1).join(" "),n.respectLineBreaks){if(!p[n.respectLineBreaks]&&!l.test(n.respectLineBreaks))throw new TypeError('respectLineBreaks must be one of "'+Object.keys(p).join('", "')+'", "m<num>", "s<num>"');A=n.respectLineBreaks}if("multi"===A)A="m",w=2;else if(!p[A]){var S=l.exec(A);A=S[1],w=parseInt(S[2],10)}if(void 0!==n.preservedLineIndent){if(!(parseInt(n.preservedLineIndent,10)>=0))throw new TypeError("preservedLineIndent must be a non-negative integer");m=parseInt(n.preservedLineIndent,10)}if(m>0&&(T=new Array(m+1).join(" ")),void 0!==n.wrapLineIndent){if(isNaN(parseInt(n.wrapLineIndent,10)))throw new TypeError("wrapLineIndent must be an integer");b=parseInt(n.wrapLineIndent,10)}if(n.wrapLineIndentBase&&(y=n.wrapLineIndentBase),y){if(void 0===b)throw new TypeError("wrapLineIndent must be specified when wrapLineIndentBase is specified");if(y instanceof RegExp)E=y;else{if("string"!=typeof y)throw new TypeError("wrapLineIndentBase must be either a RegExp object or a string");E=new RegExp(u(y))}}else if(b>0)R=new Array(b+1).join(" ");else if(b<0)throw new TypeError("wrapLineIndent must be non-negative when a base is not specified");if(n.skipScheme){if(!i[n.skipScheme])throw new TypeError('skipScheme must be one of "'+Object.keys(i).join('", "')+'"');f=n.skipScheme}if(n.skip&&(h=n.skip),h)if(h instanceof RegExp)(v=h).global||(L="g",v.ignoreCase&&(L+="i"),v.multiline&&(L+="m"),v=new RegExp(v.source,L));else{if("string"!=typeof h)throw new TypeError("skip must be either a RegExp object or a string");v=new RegExp(u(h),"g")}if(!v&&f&&(v=i[f]),n.lineBreakScheme){if(!r[n.lineBreakScheme])throw new TypeError('lineBreakScheme must be one of "'+Object.keys(r).join('", "')+'"');d=n.lineBreakScheme}if(n.lineBreak&&(g=n.lineBreak),d&&(I=r[d])&&(k=I[0],x=I[1]),g)if(g instanceof Array&&(1===g.length?g=g[0]:g.length>=2&&(g[0]instanceof RegExp?(k=g[0],"string"==typeof g[1]&&(x=g[1])):g[1]instanceof RegExp?(k=g[1],"string"==typeof g[0]&&(x=g[0])):"string"==typeof g[0]&&"string"==typeof g[1]?(k=new RegExp(u(g[0]),"g"),x=g[1]):g=g[0])),"string"==typeof g)x=g,k||(k=new RegExp(u(g),"g"));else if(g instanceof RegExp)k=g;else if(!(g instanceof Array))throw new TypeError("lineBreak must be a RegExp object, a string, or an array consisted of a RegExp object and a string");k||(k=/\n/g,x="\n"),L="g",k.ignoreCase&&(L+="i"),k.multiline&&(L+="m"),_=new RegExp("\\s*(?:"+k.source+")(?:"+k.source+"|\\s)*",L),k.global||(k=new RegExp(k.source,L));var O="hard"===B?/\b/:/(\S+\s+)/,C=new Array(e+1).join(" "),U="default"===z||"collapse"===z,N="collapse"===z,W="line"===z,P="all"===z,D=/\t/g,F=/  +/g,G=/^\s+/,H=/\s+$/,K=/\S/,$=/\s/,Q=t-e;return function(n){var a;if(n=n.toString().replace(D,j),!x){if(k.lastIndex=0,!(a=k.exec(n)))throw new TypeError("Line break string for the output not specified");x=a[0]}var s,r,i,o,c,p,l,h,u,f=0;for(s=[],_.lastIndex=0,a=_.exec(n);a;){if(s.push(n.substring(f,a.index)),"none"!==A){for(i=[],o=0,k.lastIndex=0,r=k.exec(a[0]);r;)i.push(a[0].substring(o,r.index)),o=r.index+r[0].length,r=k.exec(a[0]);i.push(a[0].substring(o)),s.push({type:"break",breaks:i})}else c=N?" ":a[0].replace(k,""),s.push({type:"break",remaining:c});f=a.index+a[0].length,a=_.exec(n)}if(s.push(n.substring(f)),v)for(u=[],p=0;p<s.length;p++){var g=s[p];if("string"!=typeof g)u.push(g);else{for(f=0,v.lastIndex=0,a=v.exec(g);a;)u.push(g.substring(f,a.index)),u.push({type:"skip",value:a[0]}),f=a.index+a[0].length,a=v.exec(g);u.push(g.substring(f))}}else u=s;var d=[];for(p=0;p<u.length;p++){var m=u[p];if("string"!=typeof m)d.push(m);else{N&&(m=m.replace(F," "));var y=m.split(O),I=[];for(l=0;l<y.length;l++){var L=y[l];if("hard"===B)for(h=0;h<L.length;h+=Q)I.push(L.slice(h,h+Q));else I.push(L)}d=d.concat(I)}}var q,z=0,M=e+T.length,S=[C+T],V=0,J=!0,X=!0,Y=R;function Z(n){var a,s,r,i=S[z];if(P)M>t&&(V=V||t,r=i.length-(M-V),S[z]=i.substring(0,r)),V=0;else{for(a=i.length-1;a>=e&&" "===i[a];)a--;for(;a>=e&&$.test(i[a]);)a--;++a!==i.length&&(S[z]=i.substring(0,a)),X&&J&&W&&M>t&&(r=i.length-(M-t))<a&&(r=a)}if(X&&(X=!1,E&&(a=S[z].substring(e).search(E),Y=a>=0&&a+b>0?new Array(a+b+1).join(" "):"")),r){for(;r+Q<i.length;)P?(s=i.substring(r,r+Q),S.push(C+Y+s)):S.push(C+Y),r+=Q,z++;if(!n)return s=i.substring(r),Y+s;P?(s=i.substring(r),S.push(C+Y+s)):S.push(C+Y),z++}return""}for(p=0;p<d.length;p++){var ee=d[p];if(""!==ee)if("string"==typeof ee){for(var te;;){if(te=void 0,M+ee.length>t&&M+(te=ee.replace(H,"")).length>t&&""!==te&&M>e){if(q=Z(!1),S.push(C+Y),z++,M=e+Y.length,q){S[z]+=q,M+=q.length,J=!0;continue}!U&&(!W||X&&J)||(ee=ee.replace(G,"")),J=!1}else J&&(U||W&&(!X||!J)?""!==(ee=ee.replace(G,""))&&(J=!1):K.test(ee)&&(J=!1));break}P&&te&&M+te.length>t&&(V=M+te.length),S[z]+=ee,M+=ee.length}else if("break"===ee.type)if("none"!==A){var ne=ee.breaks,ae=ne.length-1;if("s"===A){for(l=0;l<ae;l++)ne[l+1].length<w?ne[l+1]=N?" ":ne[l]+ne[l+1]:(P&&(S[z]+=ne[l],M+=ne[l].length),Z(!0),S.push(C+T),z++,M=e+T.length,X=J=!0);(!J||P||W&&X)&&((N||!J&&""===ne[ae])&&(ne[ae]=" "),S[z]+=ne[ae],M+=ne[ae].length)}else if("m"===A&&ae<w)(!J||P||W&&X)&&(N?ee=" ":(ee=ne.join(""),J||""!==ee||(ee=" ")),S[z]+=ee,M+=ee.length);else if(U){for(Z(!0),l=0;l<ae;l++)S.push(C+T),z++;M=e+T.length,X=J=!0}else for((P||X&&J)&&(S[z]+=ne[0],M+=ne[0].length),l=0;l<ae;l++)Z(!0),S.push(C+T+ne[l+1]),z++,M=e+T.length+ne[l+1].length,X=J=!0}else(!J||P||W&&X)&&(ee=ee.remaining,(N||!J&&""===ee)&&(ee=" "),S[z]+=ee,M+=ee.length);else"skip"===ee.type&&(M>t&&(q=Z(!1),S.push(C+Y),z++,M=e+Y.length,q&&(S[z]+=q,M+=q.length),J=!0),S[z]+=ee.value)}return Z(!0),S.join(x)}};f.soft=f,f.hard=function(){var e=[].slice.call(arguments),t=e.length-1;return"object"==typeof e[t]?e[t].mode="hard":e.push({mode:"hard"}),f.apply(null,e)},f.wrap=function(e){var t=[].slice.call(arguments);return t.shift(),f.apply(null,t)(e)}},{}],7:[function(e,t,n){const a=e("linewrap"),{createCanvas:s}=e("canvas"),r=e("canvas-dither"),i=e("canvas-flatten"),o=e("codepage-encoder"),c={epson:{cp437:0,shiftjis:1,cp850:2,cp860:3,cp863:4,cp865:5,cp851:11,cp853:12,cp857:13,cp737:14,iso88597:15,windows1252:16,cp866:17,cp852:18,cp858:19,cp720:32,cp775:33,cp855:34,cp861:35,cp862:36,cp864:37,cp869:38,iso88592:39,iso885915:40,cp1098:41,cp1118:42,cp1119:43,cp1125:44,windows1250:45,windows1251:46,windows1253:47,windows1254:48,windows1255:49,windows1256:50,windows1257:51,windows1258:52,rk1048:53},zjiang:{cp437:0,shiftjis:1,cp850:2,cp860:3,cp863:4,cp865:5,windows1252:16,cp866:17,cp852:18,cp858:19,windows1255:32,cp861:56,cp855:60,cp857:61,cp862:62,cp864:63,cp737:64,cp851:65,cp869:66,cp1119:68,cp1118:69,windows1250:72,windows1251:73,cp3840:74,cp3843:76,cp3844:77,cp3845:78,cp3846:79,cp3847:80,cp3848:81,cp2001:83,cp3001:84,cp3002:85,cp3011:86,cp3012:87,cp3021:88,cp3041:89,windows1253:90,windows1254:91,windows1256:92,cp720:93,windows1258:94,cp775:95},bixolon:{cp437:0,shiftjis:1,cp850:2,cp860:3,cp863:4,cp865:5,cp851:11,cp858:19},star:{cp437:0,shiftjis:1,cp850:2,cp860:3,cp863:4,cp865:5,windows1252:16,cp866:17,cp852:18,cp858:19},legacy:{cp437:0,cp737:64,cp850:2,cp775:95,cp852:18,cp855:60,cp857:61,cp858:19,cp860:3,cp861:56,cp862:62,cp863:4,cp864:28,cp865:5,cp866:17,cp869:66,cp936:255,cp949:253,cp950:254,cp1252:16,iso88596:22,shiftjis:252,windows874:30,windows1250:72,windows1251:73,windows1252:71,windows1253:90,windows1254:91,windows1255:32,windows1256:92,windows1257:25,windows1258:94}};t.exports=class{constructor(e){this._reset(e)}_reset(e){this._options=Object.assign({imageMode:"column",codepageMapping:"epson",codepageCandidates:["cp437","cp858","cp860","cp861","cp863","cp865","cp852","cp857","cp855","cp866","cp869"]},e),this._buffer=[],this._codepage="ascii",this._state={bold:!1,italic:!1,underline:!1,invert:!1,hanzi:!1,width:1,height:1}}_encode(e){if("auto"!=this._codepage)return o.encode(e,this._codepage);let t;t="string"==typeof this._options.codepageMapping?c[this._options.codepageMapping]:this._options.codepageMapping;const n=o.autoEncode(e,this._options.codepageCandidates);let a=0;for(let e=0;e<n.length;e++)a+=3+n[e].bytes.byteLength;const s=new Uint8Array(a);let r=0;for(let e=0;e<n.length;e++)s.set([27,116,t[n[e].codepage]],r),s.set(n[e].bytes,r+3),r+=3+n[e].bytes.byteLength;return s}_queue(e){e.forEach(e=>this._buffer.push(e))}initialize(){return this._queue([27,64]),this}codepage(e){if("auto"===e)return this._codepage=e,this;if(!o.supports(e))throw new Error("Unknown codepage");let t;if(void 0===(t="string"==typeof this._options.codepageMapping?c[this._options.codepageMapping]:this._options.codepageMapping)[e])throw new Error("Codepage not supported by printer");return this._codepage=e,this._queue([27,116,t[e]]),this}text(e,t){t&&(e=a(t,{lineBreak:"\r\n"})(e));const n=this._encode(e);return this._queue([n]),this}newline(){return this._queue([10,13]),this}line(e,t){return this.text(e,t),this.newline(),this}underline(e){return void 0===e&&(e=!this._state.underline),this._state.underline=e,this._queue([27,45,Number(e)]),this}italic(e){return void 0===e&&(e=!this._state.italic),this._state.italic=e,this._queue([27,52,Number(e)]),this}bold(e){return void 0===e&&(e=!this._state.bold),this._state.bold=e,this._queue([27,69,Number(e)]),this}width(e){if(void 0===e&&(e=1),"number"!=typeof e)throw new Error("Width must be a number");if(e<1||e>8)throw new Error("Width must be between 1 and 8");return this._state.width=e,this._queue([29,33,this._state.height-1|this._state.width-1<<4]),this}height(e){if(void 0===e&&(e=1),"number"!=typeof e)throw new Error("Height must be a number");if(e<1||e>8)throw new Error("Height must be between 1 and 8");return this._state.height=e,this._queue([29,33,this._state.height-1|this._state.width-1<<4]),this}invert(e){return void 0===e&&(e=!this._state.invert),this._state.invert=e,this._queue([29,66,Number(e)]),this}size(e){return e="small"===e?1:0,this._queue([27,77,e]),this}align(e){const t={left:0,center:1,right:2};if(!(e in t))throw new Error("Unknown alignment");return this._queue([27,97,t[e]]),this}barcode(e,t,n){const a={upca:0,upce:1,ean13:2,ean8:3,code39:4,coda39:4,itf:5,codabar:6,code93:72,code128:73,"gs1-128":80,"gs1-databar-omni":81,"gs1-databar-truncated":82,"gs1-databar-limited":83,"gs1-databar-expanded":84,"code128-auto":85};if(!(t in a))throw new Error("Symbology not supported by printer");{const s=o.encode(e,"ascii");this._queue([29,104,n,29,119,"code39"===t?2:3]),"code128"==t&&123!==s[0]?this._queue([29,107,a[t],s.length+2,123,66,s]):a[t]>64?this._queue([29,107,a[t],s.length,s]):this._queue([29,107,a[t],s,0])}return this}qrcode(e,t,n,a){this._queue([10]);const s={1:49,2:50};if(void 0===t&&(t=2),!(t in s))throw new Error("Model must be 1 or 2");if(this._queue([29,40,107,4,0,49,65,s[t],0]),void 0===n&&(n=6),"number"!=typeof n)throw new Error("Size must be a number");if(n<1||n>8)throw new Error("Size must be between 1 and 8");this._queue([29,40,107,3,0,49,67,n]);const r={l:48,m:49,q:50,h:51};if(void 0===a&&(a="m"),!(a in r))throw new Error("Error level must be l, m, q or h");this._queue([29,40,107,3,0,49,69,r[a]]);const i=o.encode(e,"iso88591"),c=i.length+3;return this._queue([29,40,107,c%255,c/255,49,80,48,i]),this._queue([29,40,107,3,0,49,81,48]),this}image(e,t,n,a,o){if(t%8!=0)throw new Error("Width must be a multiple of 8");if(n%8!=0)throw new Error("Height must be a multiple of 8");void 0===a&&(a="threshold"),void 0===o&&(o=128);const c=s(t,n).getContext("2d");c.drawImage(e,0,0,t,n);let p=c.getImageData(0,0,t,n);switch(p=i.flatten(p,[255,255,255]),a){case"threshold":p=r.threshold(p,o);break;case"bayer":p=r.bayer(p,o);break;case"floydsteinberg":p=r.floydsteinberg(p);break;case"atkinson":p=r.atkinson(p)}const l=(e,a)=>e<t&&a<n?p.data[4*(t*a+e)]>0?0:1:0;return"column"==this._options.imageMode&&(this._queue([27,51,36]),((e,t)=>{const n=[];for(let a=0;a<Math.ceil(t/24);a++){const t=new Uint8Array(3*e);for(let n=0;n<e;n++)for(let e=0;e<3;e++)for(let s=0;s<8;s++)t[3*n+e]|=l(n,24*a+s+8*e)<<7-s;n.push(t)}return n})(t,n).forEach(e=>{this._queue([27,42,33,255&t,t>>8&255,e,10])}),this._queue([27,50])),"raster"==this._options.imageMode&&this._queue([29,118,48,0,t>>3&255,t>>3>>8&255,255&n,n>>8&255,((e,t)=>{const n=new Uint8Array(e*t>>3);for(let a=0;a<t;a++)for(let t=0;t<e;t+=8)for(let s=0;s<8;s++)n[a*(e>>3)+(t>>3)]|=l(t+s,a)<<7-s;return n})(t,n)]),this}cut(e){let t=0;return"partial"==e&&(t=1),this._queue([29,86,t]),this}pulse(e,t,n){return void 0===e&&(e=0),void 0===t&&(t=100),void 0===n&&(n=500),t=Math.min(500,Math.round(t/2)),n=Math.min(500,Math.round(n/2)),this._queue([27,112,e?1:0,255&t,255&n]),this}raw(e){return this._queue(e),this}encode(){let e=0;this._buffer.forEach(t=>{"number"==typeof t?e++:e+=t.length});const t=new Uint8Array(e);let n=0;return this._buffer.forEach(e=>{"number"==typeof e?(t[n]=e,n++):(t.set(e,n),n+=e.length)}),this._reset(),t}}},{canvas:4,"canvas-dither":2,"canvas-flatten":3,"codepage-encoder":1,linewrap:6}]},{},[7])(7)});