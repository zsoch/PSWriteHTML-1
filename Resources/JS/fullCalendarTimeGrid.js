﻿/*!
FullCalendar Time Grid Plugin v4.3.0
Docs & License: https://fullcalendar.io/
(c) 2019 Adam Shaw
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@fullcalendar/core"),require("@fullcalendar/daygrid")):"function"==typeof define&&define.amd?define(["exports","@fullcalendar/core","@fullcalendar/daygrid"],t):t((e=e||self).FullCalendarTimeGrid={},e.FullCalendar,e.FullCalendarDayGrid)}(this,function(e,t,r){"use strict";var i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};function n(e,t){function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var o=function(){return(o=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},s=function(e){function r(r){var i=e.call(this,r.context)||this;return i.timeGrid=r,i.fullTimeFormat=t.createFormatter({hour:"numeric",minute:"2-digit",separator:i.context.options.defaultRangeSeparator}),i}return n(r,e),r.prototype.attachSegs=function(e,t){for(var r=this.timeGrid.groupSegsByCol(e),i=0;i<r.length;i++)r[i]=this.sortEventSegs(r[i]);this.segsByCol=r,this.timeGrid.attachSegsByCol(r,this.timeGrid.fgContainerEls)},r.prototype.detachSegs=function(e){e.forEach(function(e){t.removeElement(e.el)}),this.segsByCol=null},r.prototype.computeSegSizes=function(e){var t=this.timeGrid,r=this.segsByCol,i=t.colCnt;if(t.computeSegVerticals(e),r)for(var n=0;n<i;n++)this.computeSegHorizontals(r[n])},r.prototype.assignSegSizes=function(e){var t=this.timeGrid,r=this.segsByCol,i=t.colCnt;if(t.assignSegVerticals(e),r)for(var n=0;n<i;n++)this.assignSegCss(r[n])},r.prototype.computeEventTimeFormat=function(){return{hour:"numeric",minute:"2-digit",meridiem:!1}},r.prototype.computeDisplayEventEnd=function(){return!0},r.prototype.renderSegHtml=function(e,r){var i,n,o,s=this.context.view,a=e.eventRange,l=a.def,d=a.ui,c=l.allDay,h=s.computeEventDraggable(l,d),u=e.isStart&&s.computeEventStartResizable(l,d),p=e.isEnd&&s.computeEventEndResizable(l,d),f=this.getSegClasses(e,h,u||p,r),g=t.cssToStr(this.getSkinCss(d));if(f.unshift("fc-time-grid-event"),t.isMultiDayRange(a.range)){if(e.isStart||e.isEnd){var m=e.start,y=e.end;i=this._getTimeText(m,y,c),n=this._getTimeText(m,y,c,this.fullTimeFormat),o=this._getTimeText(m,y,c,null,!1)}}else i=this.getTimeText(a),n=this.getTimeText(a,this.fullTimeFormat),o=this.getTimeText(a,null,!1);return'<a class="'+f.join(" ")+'"'+(l.url?' href="'+t.htmlEscape(l.url)+'"':"")+(g?' style="'+g+'"':"")+'><div class="fc-content">'+(i?'<div class="fc-time" data-start="'+t.htmlEscape(o)+'" data-full="'+t.htmlEscape(n)+'"><span>'+t.htmlEscape(i)+"</span></div>":"")+(l.title?'<div class="fc-title">'+t.htmlEscape(l.title)+"</div>":"")+"</div>"+(p?'<div class="fc-resizer fc-end-resizer"></div>':"")+"</a>"},r.prototype.computeSegHorizontals=function(e){var t,r,i;if(function(e){var t,r,i,n,o;for(t=0;t<e.length;t++)for(r=e[t],i=0;i<r.length;i++)for((n=r[i]).forwardSegs=[],o=t+1;o<e.length;o++)l(n,e[o],n.forwardSegs)}(t=function(e){var t,r,i,n=[];for(t=0;t<e.length;t++){for(r=e[t],i=0;i<n.length&&l(r,n[i]).length;i++);r.level=i,(n[i]||(n[i]=[])).push(r)}return n}(e)),r=t[0]){for(i=0;i<r.length;i++)a(r[i]);for(i=0;i<r.length;i++)this.computeSegForwardBack(r[i],0,0)}},r.prototype.computeSegForwardBack=function(e,t,r){var i,n=e.forwardSegs;if(void 0===e.forwardCoord)for(n.length?(this.sortForwardSegs(n),this.computeSegForwardBack(n[0],t+1,r),e.forwardCoord=n[0].backwardCoord):e.forwardCoord=1,e.backwardCoord=e.forwardCoord-(e.forwardCoord-r)/(t+1),i=0;i<n.length;i++)this.computeSegForwardBack(n[i],0,e.forwardCoord)},r.prototype.sortForwardSegs=function(e){var r=e.map(d),i=[{field:"forwardPressure",order:-1},{field:"backwardCoord",order:1}].concat(this.context.view.eventOrderSpecs);return r.sort(function(e,r){return t.compareByFieldSpecs(e,r,i)}),r.map(function(e){return e._seg})},r.prototype.assignSegCss=function(e){for(var r=0,i=e;r<i.length;r++){var n=i[r];t.applyStyle(n.el,this.generateSegCss(n)),n.level>0&&n.el.classList.add("fc-time-grid-event-inset"),n.eventRange.def.title&&n.bottom-n.top<30&&n.el.classList.add("fc-short")}},r.prototype.generateSegCss=function(e){var t,r,i=this.context.options.slotEventOverlap,n=e.backwardCoord,o=e.forwardCoord,s=this.timeGrid.generateSegVerticalCss(e),a=this.timeGrid.isRtl;return i&&(o=Math.min(1,n+2*(o-n))),a?(t=1-o,r=n):(t=n,r=1-o),s.zIndex=e.level+1,s.left=100*t+"%",s.right=100*r+"%",i&&e.forwardPressure&&(s[a?"marginLeft":"marginRight"]=20),s},r}(t.FgEventRenderer);function a(e){var t,r,i=e.forwardSegs,n=0;if(void 0===e.forwardPressure){for(t=0;t<i.length;t++)a(r=i[t]),n=Math.max(n,1+r.forwardPressure);e.forwardPressure=n}}function l(e,t,r){void 0===r&&(r=[]);for(var i=0;i<t.length;i++)n=e,o=t[i],n.bottom>o.top&&n.top<o.bottom&&r.push(t[i]);var n,o;return r}function d(e){var r=t.buildSegCompareObj(e);return r.forwardPressure=e.forwardPressure,r.backwardCoord=e.backwardCoord,r}var c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.attachSegs=function(e,t){this.segsByCol=this.timeGrid.groupSegsByCol(e),this.timeGrid.attachSegsByCol(this.segsByCol,this.timeGrid.mirrorContainerEls),this.sourceSeg=t.sourceSeg},t.prototype.generateSegCss=function(t){var r=e.prototype.generateSegCss.call(this,t),i=this.sourceSeg;if(i&&i.col===t.col){var n=e.prototype.generateSegCss.call(this,i);r.left=n.left,r.right=n.right,r.marginLeft=n.marginLeft,r.marginRight=n.marginRight}return r},t}(s),h=function(e){function t(t){var r=e.call(this,t.context)||this;return r.timeGrid=t,r}return n(t,e),t.prototype.attachSegs=function(e,t){var r,i=this.timeGrid;return"bgEvent"===e?r=i.bgContainerEls:"businessHours"===e?r=i.businessContainerEls:"highlight"===e&&(r=i.highlightContainerEls),i.attachSegsByCol(i.groupSegsByCol(t),r),t.map(function(e){return e.el})},t.prototype.computeSegSizes=function(e){this.timeGrid.computeSegVerticals(e)},t.prototype.assignSegSizes=function(e){this.timeGrid.assignSegVerticals(e)},t}(t.FillRenderer),u=[{hours:1},{minutes:30},{minutes:15},{seconds:30},{seconds:15}],p=function(e){function i(r,i,n){var o=e.call(this,r,i)||this;o.isSlatSizesDirty=!1,o.isColSizesDirty=!1,o.renderSlats=t.memoizeRendering(o._renderSlats);var a=o.eventRenderer=new s(o),l=o.fillRenderer=new h(o);o.mirrorRenderer=new c(o);var d=o.renderColumns=t.memoizeRendering(o._renderColumns,o._unrenderColumns);return o.renderBusinessHours=t.memoizeRendering(l.renderSegs.bind(l,"businessHours"),l.unrender.bind(l,"businessHours"),[d]),o.renderDateSelection=t.memoizeRendering(o._renderDateSelection,o._unrenderDateSelection,[d]),o.renderFgEvents=t.memoizeRendering(a.renderSegs.bind(a),a.unrender.bind(a),[d]),o.renderBgEvents=t.memoizeRendering(l.renderSegs.bind(l,"bgEvent"),l.unrender.bind(l,"bgEvent"),[d]),o.renderEventSelection=t.memoizeRendering(a.selectByInstanceId.bind(a),a.unselectByInstanceId.bind(a),[o.renderFgEvents]),o.renderEventDrag=t.memoizeRendering(o._renderEventDrag,o._unrenderEventDrag,[d]),o.renderEventResize=t.memoizeRendering(o._renderEventResize,o._unrenderEventResize,[d]),o.processOptions(),i.innerHTML='<div class="fc-bg"></div><div class="fc-slats"></div><hr class="fc-divider '+o.theme.getClass("widgetHeader")+'" style="display:none" />',o.rootBgContainerEl=i.querySelector(".fc-bg"),o.slatContainerEl=i.querySelector(".fc-slats"),o.bottomRuleEl=i.querySelector(".fc-divider"),o.renderProps=n,o}return n(i,e),i.prototype.processOptions=function(){var e,r,i=this.opt("slotDuration"),n=this.opt("snapDuration");i=t.createDuration(i),n=n?t.createDuration(n):i,null===(e=t.wholeDivideDurations(i,n))&&(n=i,e=1),this.slotDuration=i,this.snapDuration=n,this.snapsPerSlot=e,r=this.opt("slotLabelFormat"),Array.isArray(r)&&(r=r[r.length-1]),this.labelFormat=t.createFormatter(r||{hour:"numeric",minute:"2-digit",omitZeroMinute:!0,meridiem:"short"}),r=this.opt("slotLabelInterval"),this.labelInterval=r?t.createDuration(r):this.computeLabelInterval(i)},i.prototype.computeLabelInterval=function(e){var r,i,n;for(r=u.length-1;r>=0;r--)if(i=t.createDuration(u[r]),null!==(n=t.wholeDivideDurations(i,e))&&n>1)return i;return e},i.prototype.render=function(e){var t=e.cells;this.colCnt=t.length,this.renderSlats(e.dateProfile),this.renderColumns(e.cells,e.dateProfile),this.renderBusinessHours(e.businessHourSegs),this.renderDateSelection(e.dateSelectionSegs),this.renderFgEvents(e.fgEventSegs),this.renderBgEvents(e.bgEventSegs),this.renderEventSelection(e.eventSelection),this.renderEventDrag(e.eventDrag),this.renderEventResize(e.eventResize)},i.prototype.destroy=function(){e.prototype.destroy.call(this),this.renderSlats.unrender(),this.renderColumns.unrender()},i.prototype.updateSize=function(e){var t=this.fillRenderer,r=this.eventRenderer,i=this.mirrorRenderer;(e||this.isSlatSizesDirty)&&(this.buildSlatPositions(),this.isSlatSizesDirty=!1),(e||this.isColSizesDirty)&&(this.buildColPositions(),this.isColSizesDirty=!1),t.computeSizes(e),r.computeSizes(e),i.computeSizes(e),t.assignSizes(e),r.assignSizes(e),i.assignSizes(e)},i.prototype._renderSlats=function(e){var r=this.theme;this.slatContainerEl.innerHTML='<table class="'+r.getClass("tableGrid")+'">'+this.renderSlatRowHtml(e)+"</table>",this.slatEls=t.findElements(this.slatContainerEl,"tr"),this.slatPositions=new t.PositionCache(this.el,this.slatEls,!1,!0),this.isSlatSizesDirty=!0},i.prototype.renderSlatRowHtml=function(e){for(var r,i,n,o=this.dateEnv,s=this.theme,a=this.isRtl,l="",d=t.startOfDay(e.renderRange.start),c=e.minTime,h=t.createDuration(0);t.asRoughMs(c)<t.asRoughMs(e.maxTime);)r=o.add(d,c),i=null!==t.wholeDivideDurations(h,this.labelInterval),n='<td class="fc-axis fc-time '+s.getClass("widgetContent")+'">'+(i?"<span>"+t.htmlEscape(o.format(r,this.labelFormat))+"</span>":"")+"</td>",l+='<tr data-time="'+t.formatIsoTimeString(r)+'"'+(i?"":' class="fc-minor"')+">"+(a?"":n)+'<td class="'+s.getClass("widgetContent")+'"></td>'+(a?n:"")+"</tr>",c=t.addDurations(c,this.slotDuration),h=t.addDurations(h,this.slotDuration);return l},i.prototype._renderColumns=function(e,i){var n=this.theme,o=this.dateEnv,s=this.view,a=new r.DayBgRow(this.context);this.rootBgContainerEl.innerHTML='<table class="'+n.getClass("tableGrid")+'">'+a.renderHtml({cells:e,dateProfile:i,renderIntroHtml:this.renderProps.renderBgIntroHtml})+"</table>",this.colEls=t.findElements(this.el,".fc-day, .fc-disabled-day");for(var l=0;l<this.colCnt;l++)this.publiclyTrigger("dayRender",[{date:o.toDate(e[l].date),el:this.colEls[l],view:s}]);this.isRtl&&this.colEls.reverse(),this.colPositions=new t.PositionCache(this.el,this.colEls,!0,!1),this.renderContentSkeleton(),this.isColSizesDirty=!0},i.prototype._unrenderColumns=function(){this.unrenderContentSkeleton()},i.prototype.renderContentSkeleton=function(){var e,r=[];r.push(this.renderProps.renderIntroHtml());for(var i=0;i<this.colCnt;i++)r.push('<td><div class="fc-content-col"><div class="fc-event-container fc-mirror-container"></div><div class="fc-event-container"></div><div class="fc-highlight-container"></div><div class="fc-bgevent-container"></div><div class="fc-business-container"></div></div></td>');this.isRtl&&r.reverse(),e=this.contentSkeletonEl=t.htmlToElement('<div class="fc-content-skeleton"><table><tr>'+r.join("")+"</tr></table></div>"),this.colContainerEls=t.findElements(e,".fc-content-col"),this.mirrorContainerEls=t.findElements(e,".fc-mirror-container"),this.fgContainerEls=t.findElements(e,".fc-event-container:not(.fc-mirror-container)"),this.bgContainerEls=t.findElements(e,".fc-bgevent-container"),this.highlightContainerEls=t.findElements(e,".fc-highlight-container"),this.businessContainerEls=t.findElements(e,".fc-business-container"),this.isRtl&&(this.colContainerEls.reverse(),this.mirrorContainerEls.reverse(),this.fgContainerEls.reverse(),this.bgContainerEls.reverse(),this.highlightContainerEls.reverse(),this.businessContainerEls.reverse()),this.el.appendChild(e)},i.prototype.unrenderContentSkeleton=function(){t.removeElement(this.contentSkeletonEl)},i.prototype.groupSegsByCol=function(e){var t,r=[];for(t=0;t<this.colCnt;t++)r.push([]);for(t=0;t<e.length;t++)r[e[t].col].push(e[t]);return r},i.prototype.attachSegsByCol=function(e,t){var r,i,n;for(r=0;r<this.colCnt;r++)for(i=e[r],n=0;n<i.length;n++)t[r].appendChild(i[n].el)},i.prototype.getNowIndicatorUnit=function(){return"minute"},i.prototype.renderNowIndicator=function(e,r){if(this.colContainerEls){var i,n=this.computeDateTop(r),o=[];for(i=0;i<e.length;i++){var s=t.createElement("div",{className:"fc-now-indicator fc-now-indicator-line"});s.style.top=n+"px",this.colContainerEls[e[i].col].appendChild(s),o.push(s)}if(e.length>0){var a=t.createElement("div",{className:"fc-now-indicator fc-now-indicator-arrow"});a.style.top=n+"px",this.contentSkeletonEl.appendChild(a),o.push(a)}this.nowIndicatorEls=o}},i.prototype.unrenderNowIndicator=function(){this.nowIndicatorEls&&(this.nowIndicatorEls.forEach(t.removeElement),this.nowIndicatorEls=null)},i.prototype.getTotalSlatHeight=function(){return this.slatContainerEl.getBoundingClientRect().height},i.prototype.computeDateTop=function(e,r){return r||(r=t.startOfDay(e)),this.computeTimeTop(t.createDuration(e.valueOf()-r.valueOf()))},i.prototype.computeTimeTop=function(e){var r,i,n=this.slatEls.length,o=this.props.dateProfile,s=(e.milliseconds-t.asRoughMs(o.minTime))/t.asRoughMs(this.slotDuration);return s=Math.max(0,s),s=Math.min(n,s),r=Math.floor(s),i=s-(r=Math.min(r,n-1)),this.slatPositions.tops[r]+this.slatPositions.getHeight(r)*i},i.prototype.computeSegVerticals=function(e){var t,r,i,n=this.opt("timeGridEventMinHeight");for(t=0;t<e.length;t++)r=e[t],i=this.props.cells[r.col].date,r.top=this.computeDateTop(r.start,i),r.bottom=Math.max(r.top+n,this.computeDateTop(r.end,i))},i.prototype.assignSegVerticals=function(e){var r,i;for(r=0;r<e.length;r++)i=e[r],t.applyStyle(i.el,this.generateSegVerticalCss(i))},i.prototype.generateSegVerticalCss=function(e){return{top:e.top,bottom:-e.bottom}},i.prototype.buildPositionCaches=function(){this.buildColPositions(),this.buildSlatPositions()},i.prototype.buildColPositions=function(){this.colPositions.build()},i.prototype.buildSlatPositions=function(){this.slatPositions.build()},i.prototype.positionToHit=function(e,r){var i=this.dateEnv,n=this.snapsPerSlot,o=this.slatPositions,s=this.colPositions,a=s.leftToIndex(e),l=o.topToIndex(r);if(null!=a&&null!=l){var d=o.tops[l],c=o.getHeight(l),h=(r-d)/c,u=l*n+Math.floor(h*n),p=this.props.cells[a].date,f=t.addDurations(this.props.dateProfile.minTime,t.multiplyDuration(this.snapDuration,u)),g=i.add(p,f);return{col:a,dateSpan:{range:{start:g,end:i.add(g,this.snapDuration)},allDay:!1},dayEl:this.colEls[a],relativeRect:{left:s.lefts[a],right:s.rights[a],top:d,bottom:d+c}}}},i.prototype._renderEventDrag=function(e){e&&(this.eventRenderer.hideByHash(e.affectedInstances),e.isEvent?this.mirrorRenderer.renderSegs(e.segs,{isDragging:!0,sourceSeg:e.sourceSeg}):this.fillRenderer.renderSegs("highlight",e.segs))},i.prototype._unrenderEventDrag=function(e){e&&(this.eventRenderer.showByHash(e.affectedInstances),this.mirrorRenderer.unrender(e.segs,{isDragging:!0,sourceSeg:e.sourceSeg}),this.fillRenderer.unrender("highlight"))},i.prototype._renderEventResize=function(e){e&&(this.eventRenderer.hideByHash(e.affectedInstances),this.mirrorRenderer.renderSegs(e.segs,{isResizing:!0,sourceSeg:e.sourceSeg}))},i.prototype._unrenderEventResize=function(e){e&&(this.eventRenderer.showByHash(e.affectedInstances),this.mirrorRenderer.unrender(e.segs,{isResizing:!0,sourceSeg:e.sourceSeg}))},i.prototype._renderDateSelection=function(e){e&&(this.opt("selectMirror")?this.mirrorRenderer.renderSegs(e,{isSelecting:!0}):this.fillRenderer.renderSegs("highlight",e))},i.prototype._unrenderDateSelection=function(e){this.mirrorRenderer.unrender(e,{isSelecting:!0}),this.fillRenderer.unrender("highlight")},i}(t.DateComponent),f=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return n(r,e),r.prototype.getKeyInfo=function(){return{allDay:{},timed:{}}},r.prototype.getKeysForDateSpan=function(e){return e.allDay?["allDay"]:["timed"]},r.prototype.getKeysForEventDef=function(e){return e.allDay?t.hasBgRendering(e)?["timed","allDay"]:["allDay"]:["timed"]},r}(t.Splitter),g=t.createFormatter({week:"short"}),m=function(e){function i(i,n,o,s){var a=e.call(this,i,n,o,s)||this;a.splitter=new f,a.renderHeadIntroHtml=function(){var e,r=a,i=r.theme,n=r.dateEnv,o=a.props.dateProfile.renderRange,s=t.diffDays(o.start,o.end);return a.opt("weekNumbers")?(e=n.format(o.start,g),'<th class="fc-axis fc-week-number '+i.getClass("widgetHeader")+'" '+a.axisStyleAttr()+">"+t.buildGotoAnchorHtml(a,{date:o.start,type:"week",forceOff:s>1},t.htmlEscape(e))+"</th>"):'<th class="fc-axis '+i.getClass("widgetHeader")+'" '+a.axisStyleAttr()+"></th>"},a.renderTimeGridBgIntroHtml=function(){return'<td class="fc-axis '+a.theme.getClass("widgetContent")+'" '+a.axisStyleAttr()+"></td>"},a.renderTimeGridIntroHtml=function(){return'<td class="fc-axis" '+a.axisStyleAttr()+"></td>"},a.renderDayGridBgIntroHtml=function(){return'<td class="fc-axis '+a.theme.getClass("widgetContent")+'" '+a.axisStyleAttr()+"><span>"+t.getAllDayHtml(a)+"</span></td>"},a.renderDayGridIntroHtml=function(){return'<td class="fc-axis" '+a.axisStyleAttr()+"></td>"},a.el.classList.add("fc-timeGrid-view"),a.el.innerHTML=a.renderSkeletonHtml(),a.scroller=new t.ScrollComponent("hidden","auto");var l=a.scroller.el;a.el.querySelector(".fc-body > tr > td").appendChild(l),l.classList.add("fc-time-grid-container");var d=t.createElement("div",{className:"fc-time-grid"});if(l.appendChild(d),a.timeGrid=new p(a.context,d,{renderBgIntroHtml:a.renderTimeGridBgIntroHtml,renderIntroHtml:a.renderTimeGridIntroHtml}),a.opt("allDaySlot")){a.dayGrid=new r.DayGrid(a.context,a.el.querySelector(".fc-day-grid"),{renderNumberIntroHtml:a.renderDayGridIntroHtml,renderBgIntroHtml:a.renderDayGridBgIntroHtml,renderIntroHtml:a.renderDayGridIntroHtml,colWeekNumbersVisible:!1,cellWeekNumbersVisible:!1});var c=a.el.querySelector(".fc-divider");a.dayGrid.bottomCoordPadding=c.getBoundingClientRect().height}return a}return n(i,e),i.prototype.destroy=function(){e.prototype.destroy.call(this),this.timeGrid.destroy(),this.dayGrid&&this.dayGrid.destroy(),this.scroller.destroy()},i.prototype.renderSkeletonHtml=function(){var e=this.theme;return'<table class="'+e.getClass("tableGrid")+'">'+(this.opt("columnHeader")?'<thead class="fc-head"><tr><td class="fc-head-container '+e.getClass("widgetHeader")+'">&nbsp;</td></tr></thead>':"")+'<tbody class="fc-body"><tr><td class="'+e.getClass("widgetContent")+'">'+(this.opt("allDaySlot")?'<div class="fc-day-grid"></div><hr class="fc-divider '+e.getClass("widgetHeader")+'" />':"")+"</td></tr></tbody></table>"},i.prototype.getNowIndicatorUnit=function(){return this.timeGrid.getNowIndicatorUnit()},i.prototype.unrenderNowIndicator=function(){this.timeGrid.unrenderNowIndicator()},i.prototype.updateSize=function(t,r,i){e.prototype.updateSize.call(this,t,r,i),this.timeGrid.updateSize(t),this.dayGrid&&this.dayGrid.updateSize(t)},i.prototype.updateBaseSize=function(e,r,i){var n,o,s,a=this;if(this.axisWidth=t.matchCellWidths(t.findElements(this.el,".fc-axis")),this.timeGrid.colEls){var l=t.findElements(this.el,".fc-row").filter(function(e){return!a.scroller.el.contains(e)});this.timeGrid.bottomRuleEl.style.display="none",this.scroller.clear(),l.forEach(t.uncompensateScroll),this.dayGrid&&(this.dayGrid.removeSegPopover(),(n=this.opt("eventLimit"))&&"number"!=typeof n&&(n=5),n&&this.dayGrid.limitRows(n)),i||(o=this.computeScrollerHeight(r),this.scroller.setHeight(o),((s=this.scroller.getScrollbarWidths()).left||s.right)&&(l.forEach(function(e){t.compensateScroll(e,s)}),o=this.computeScrollerHeight(r),this.scroller.setHeight(o)),this.scroller.lockOverflow(s),this.timeGrid.getTotalSlatHeight()<o&&(this.timeGrid.bottomRuleEl.style.display=""))}else i||(o=this.computeScrollerHeight(r),this.scroller.setHeight(o))},i.prototype.computeScrollerHeight=function(e){return e-t.subtractInnerElHeight(this.el,this.scroller.el)},i.prototype.computeDateScroll=function(e){var t=this.timeGrid.computeTimeTop(e);return(t=Math.ceil(t))&&t++,{top:t}},i.prototype.queryDateScroll=function(){return{top:this.scroller.getScrollTop()}},i.prototype.applyDateScroll=function(e){void 0!==e.top&&this.scroller.setScrollTop(e.top)},i.prototype.axisStyleAttr=function(){return null!=this.axisWidth?'style="width:'+this.axisWidth+'px"':""},i}(t.View);m.prototype.usesMinMaxTime=!0;var y=function(e){function r(r,i){var n=e.call(this,r,i.el)||this;return n.buildDayRanges=t.memoize(v),n.slicer=new S,n.timeGrid=i,r.calendar.registerInteractiveComponent(n,{el:n.timeGrid.el}),n}return n(r,e),r.prototype.destroy=function(){e.prototype.destroy.call(this),this.calendar.unregisterInteractiveComponent(this)},r.prototype.render=function(e){var t=e.dateProfile,r=e.dayTable,i=this.dayRanges=this.buildDayRanges(r,t,this.dateEnv);this.timeGrid.receiveProps(o({},this.slicer.sliceProps(e,t,null,this.timeGrid,i),{dateProfile:t,cells:r.cells[0]}))},r.prototype.renderNowIndicator=function(e){this.timeGrid.renderNowIndicator(this.slicer.sliceNowDate(e,this.timeGrid,this.dayRanges),e)},r.prototype.buildPositionCaches=function(){this.timeGrid.buildPositionCaches()},r.prototype.queryHit=function(e,t){var r=this.timeGrid.positionToHit(e,t);if(r)return{component:this.timeGrid,dateSpan:r.dateSpan,dayEl:r.dayEl,rect:{left:r.relativeRect.left,right:r.relativeRect.right,top:r.relativeRect.top,bottom:r.relativeRect.bottom},layer:0}},r}(t.DateComponent);function v(e,t,r){for(var i=[],n=0,o=e.headerDates;n<o.length;n++){var s=o[n];i.push({start:r.add(s,t.minTime),end:r.add(s,t.maxTime)})}return i}var S=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return n(r,e),r.prototype.sliceRange=function(e,r){for(var i=[],n=0;n<r.length;n++){var o=t.intersectRanges(e,r[n]);o&&i.push({start:o.start,end:o.end,isStart:o.start.valueOf()===e.start.valueOf(),isEnd:o.end.valueOf()===e.end.valueOf(),col:n})}return i},r}(t.Slicer),C=function(e){function i(i,n,o,s){var a=e.call(this,i,n,o,s)||this;return a.buildDayTable=t.memoize(E),a.opt("columnHeader")&&(a.header=new t.DayHeader(a.context,a.el.querySelector(".fc-head-container"))),a.simpleTimeGrid=new y(a.context,a.timeGrid),a.dayGrid&&(a.simpleDayGrid=new r.SimpleDayGrid(a.context,a.dayGrid)),a}return n(i,e),i.prototype.destroy=function(){e.prototype.destroy.call(this),this.header&&this.header.destroy(),this.simpleTimeGrid.destroy(),this.simpleDayGrid&&this.simpleDayGrid.destroy()},i.prototype.render=function(t){e.prototype.render.call(this,t);var r=this.props.dateProfile,i=this.buildDayTable(r,this.dateProfileGenerator),n=this.splitter.splitProps(t);this.header&&this.header.receiveProps({dateProfile:r,dates:i.headerDates,datesRepDistinctDays:!0,renderIntroHtml:this.renderHeadIntroHtml}),this.simpleTimeGrid.receiveProps(o({},n.timed,{dateProfile:r,dayTable:i})),this.simpleDayGrid&&this.simpleDayGrid.receiveProps(o({},n.allDay,{dateProfile:r,dayTable:i,nextDayThreshold:this.nextDayThreshold,isRigid:!1}))},i.prototype.renderNowIndicator=function(e){this.simpleTimeGrid.renderNowIndicator(e)},i}(m);function E(e,r){var i=new t.DaySeries(e.renderRange,r);return new t.DayTable(i,!1)}var b=t.createPlugin({defaultView:"timeGridWeek",views:{timeGrid:{class:C,allDaySlot:!0,slotDuration:"00:30:00",slotEventOverlap:!0},timeGridDay:{type:"timeGrid",duration:{days:1}},timeGridWeek:{type:"timeGrid",duration:{weeks:1}}}});e.AbstractTimeGridView=m,e.TimeGrid=p,e.TimeGridSlicer=S,e.TimeGridView=C,e.buildDayRanges=v,e.buildDayTable=E,e.default=b,Object.defineProperty(e,"__esModule",{value:!0})});