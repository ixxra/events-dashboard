// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__38739){
var map__38740 = p__38739;
var map__38740__$1 = ((((!((map__38740 == null)))?((((map__38740.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38740.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38740):map__38740);
var m = map__38740__$1;
var n = cljs.core.get.call(null,map__38740__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__38740__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5278__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5278__auto__)){
var ns = temp__5278__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38742_38764 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38743_38765 = null;
var count__38744_38766 = (0);
var i__38745_38767 = (0);
while(true){
if((i__38745_38767 < count__38744_38766)){
var f_38768 = cljs.core._nth.call(null,chunk__38743_38765,i__38745_38767);
cljs.core.println.call(null,"  ",f_38768);

var G__38769 = seq__38742_38764;
var G__38770 = chunk__38743_38765;
var G__38771 = count__38744_38766;
var G__38772 = (i__38745_38767 + (1));
seq__38742_38764 = G__38769;
chunk__38743_38765 = G__38770;
count__38744_38766 = G__38771;
i__38745_38767 = G__38772;
continue;
} else {
var temp__5278__auto___38773 = cljs.core.seq.call(null,seq__38742_38764);
if(temp__5278__auto___38773){
var seq__38742_38774__$1 = temp__5278__auto___38773;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38742_38774__$1)){
var c__37520__auto___38775 = cljs.core.chunk_first.call(null,seq__38742_38774__$1);
var G__38776 = cljs.core.chunk_rest.call(null,seq__38742_38774__$1);
var G__38777 = c__37520__auto___38775;
var G__38778 = cljs.core.count.call(null,c__37520__auto___38775);
var G__38779 = (0);
seq__38742_38764 = G__38776;
chunk__38743_38765 = G__38777;
count__38744_38766 = G__38778;
i__38745_38767 = G__38779;
continue;
} else {
var f_38780 = cljs.core.first.call(null,seq__38742_38774__$1);
cljs.core.println.call(null,"  ",f_38780);

var G__38781 = cljs.core.next.call(null,seq__38742_38774__$1);
var G__38782 = null;
var G__38783 = (0);
var G__38784 = (0);
seq__38742_38764 = G__38781;
chunk__38743_38765 = G__38782;
count__38744_38766 = G__38783;
i__38745_38767 = G__38784;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_38785 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__36589__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__36589__auto__)){
return or__36589__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_38785);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_38785)))?cljs.core.second.call(null,arglists_38785):arglists_38785));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38746_38786 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38747_38787 = null;
var count__38748_38788 = (0);
var i__38749_38789 = (0);
while(true){
if((i__38749_38789 < count__38748_38788)){
var vec__38750_38790 = cljs.core._nth.call(null,chunk__38747_38787,i__38749_38789);
var name_38791 = cljs.core.nth.call(null,vec__38750_38790,(0),null);
var map__38753_38792 = cljs.core.nth.call(null,vec__38750_38790,(1),null);
var map__38753_38793__$1 = ((((!((map__38753_38792 == null)))?((((map__38753_38792.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38753_38792.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38753_38792):map__38753_38792);
var doc_38794 = cljs.core.get.call(null,map__38753_38793__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38795 = cljs.core.get.call(null,map__38753_38793__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38791);

cljs.core.println.call(null," ",arglists_38795);

if(cljs.core.truth_(doc_38794)){
cljs.core.println.call(null," ",doc_38794);
} else {
}

var G__38796 = seq__38746_38786;
var G__38797 = chunk__38747_38787;
var G__38798 = count__38748_38788;
var G__38799 = (i__38749_38789 + (1));
seq__38746_38786 = G__38796;
chunk__38747_38787 = G__38797;
count__38748_38788 = G__38798;
i__38749_38789 = G__38799;
continue;
} else {
var temp__5278__auto___38800 = cljs.core.seq.call(null,seq__38746_38786);
if(temp__5278__auto___38800){
var seq__38746_38801__$1 = temp__5278__auto___38800;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38746_38801__$1)){
var c__37520__auto___38802 = cljs.core.chunk_first.call(null,seq__38746_38801__$1);
var G__38803 = cljs.core.chunk_rest.call(null,seq__38746_38801__$1);
var G__38804 = c__37520__auto___38802;
var G__38805 = cljs.core.count.call(null,c__37520__auto___38802);
var G__38806 = (0);
seq__38746_38786 = G__38803;
chunk__38747_38787 = G__38804;
count__38748_38788 = G__38805;
i__38749_38789 = G__38806;
continue;
} else {
var vec__38755_38807 = cljs.core.first.call(null,seq__38746_38801__$1);
var name_38808 = cljs.core.nth.call(null,vec__38755_38807,(0),null);
var map__38758_38809 = cljs.core.nth.call(null,vec__38755_38807,(1),null);
var map__38758_38810__$1 = ((((!((map__38758_38809 == null)))?((((map__38758_38809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38758_38809.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38758_38809):map__38758_38809);
var doc_38811 = cljs.core.get.call(null,map__38758_38810__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38812 = cljs.core.get.call(null,map__38758_38810__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38808);

cljs.core.println.call(null," ",arglists_38812);

if(cljs.core.truth_(doc_38811)){
cljs.core.println.call(null," ",doc_38811);
} else {
}

var G__38813 = cljs.core.next.call(null,seq__38746_38801__$1);
var G__38814 = null;
var G__38815 = (0);
var G__38816 = (0);
seq__38746_38786 = G__38813;
chunk__38747_38787 = G__38814;
count__38748_38788 = G__38815;
i__38749_38789 = G__38816;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5278__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5278__auto__)){
var fnspec = temp__5278__auto__;
cljs.core.print.call(null,"Spec");

var seq__38760 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__38761 = null;
var count__38762 = (0);
var i__38763 = (0);
while(true){
if((i__38763 < count__38762)){
var role = cljs.core._nth.call(null,chunk__38761,i__38763);
var temp__5278__auto___38817__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5278__auto___38817__$1)){
var spec_38818 = temp__5278__auto___38817__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_38818));
} else {
}

var G__38819 = seq__38760;
var G__38820 = chunk__38761;
var G__38821 = count__38762;
var G__38822 = (i__38763 + (1));
seq__38760 = G__38819;
chunk__38761 = G__38820;
count__38762 = G__38821;
i__38763 = G__38822;
continue;
} else {
var temp__5278__auto____$1 = cljs.core.seq.call(null,seq__38760);
if(temp__5278__auto____$1){
var seq__38760__$1 = temp__5278__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38760__$1)){
var c__37520__auto__ = cljs.core.chunk_first.call(null,seq__38760__$1);
var G__38823 = cljs.core.chunk_rest.call(null,seq__38760__$1);
var G__38824 = c__37520__auto__;
var G__38825 = cljs.core.count.call(null,c__37520__auto__);
var G__38826 = (0);
seq__38760 = G__38823;
chunk__38761 = G__38824;
count__38762 = G__38825;
i__38763 = G__38826;
continue;
} else {
var role = cljs.core.first.call(null,seq__38760__$1);
var temp__5278__auto___38827__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5278__auto___38827__$2)){
var spec_38828 = temp__5278__auto___38827__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_38828));
} else {
}

var G__38829 = cljs.core.next.call(null,seq__38760__$1);
var G__38830 = null;
var G__38831 = (0);
var G__38832 = (0);
seq__38760 = G__38829;
chunk__38761 = G__38830;
count__38762 = G__38831;
i__38763 = G__38832;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map
