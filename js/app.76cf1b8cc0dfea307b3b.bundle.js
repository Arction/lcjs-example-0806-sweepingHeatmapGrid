(self.webpackChunk=self.webpackChunk||[]).push([[524],{44:(e,t,a)=>{const s=a(89),{lightningChart:o,PalettedFill:l,LUT:r,ColorHSV:n,emptyLine:i,LegendBoxBuilders:d,LinearGradientFill:m,ColorRGBA:u,regularColorSteps:p,Themes:c}=s,{createSpectrumDataGenerator:S}=a(863),h=1e3,w=o({resourcesBaseUrl:new URL(document.head.baseURI).origin+new URL(document.head.baseURI).pathname+"resources/"}).ChartXY({theme:c[new URLSearchParams(window.location.search).get("theme")||"darkGold"]||void 0}).setTitle("Sweeping Heatmap Spectrogram");w.getDefaultAxisY().setTitle("Frequency (Hz)").setInterval({start:0,end:h});const g=new l({lut:new r({steps:p(0,75,w.getTheme().examples.spectrogramColorPalette),units:"dB",interpolate:!0}),lookUpProperty:"value"}),f=w.addHeatmapGridSeries({columns:250,rows:h}).setFillStyle(g).setWireframeStyle(i),y=w.getDefaultAxisX().addBand(!0).setStrokeStyle(i).setFillStyle(new m({angle:90,stops:[{offset:0,color:u(0,0,0,255)},{offset:1,color:u(0,0,0,0)}]}));w.addLegendBox(d.HorizontalLegendBox).setAutoDispose({type:"max-width",maxWidth:.8}).add(f);let D=0,B=0;S().setSampleSize(h).setNumberOfSamples(12340).setVariation(15).setFrequencyStability(.7).generate().setStreamRepeat(!0).setStreamInterval(25).setStreamBatchSize(1).toStream().map((e=>e.map((e=>80*e)))).forEach((e=>{f.invalidateIntensityValues({iColumn:D%250,iRow:0,values:[e]}),y.setValueStart(D%250).setValueEnd(y.getValueStart()+10),B+=e.length,D+=1}));const C=w.getTitle();let L=Date.now(),x=Date.now();setInterval((()=>{if(B>0&&Date.now()-L>0){const e=1e3*B/(Date.now()-L);w.setTitle(`${C} (${Math.round(e)} data points / s)`)}Date.now()-x>=5e3&&(L=x=Date.now(),B=0)}),1e3)}},e=>{e.O(0,[502],(()=>(44,e(e.s=44)))),e.O()}]);