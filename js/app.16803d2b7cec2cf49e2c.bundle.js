(self.webpackChunk=self.webpackChunk||[]).push([[524],{44:(e,t,a)=>{const l=a(89),{lightningChart:s,PalettedFill:o,LUT:r,ColorHSV:n,emptyLine:i,LegendBoxBuilders:d,LinearGradientFill:m,ColorRGBA:p,regularColorSteps:u,Themes:S}=l,{createSpectrumDataGenerator:c}=a(863),g=1e3,h=s().ChartXY({theme:S[new URLSearchParams(window.location.search).get("theme")||"darkGold"]||void 0}).setTitle("Sweeping Heatmap Spectrogram");h.getDefaultAxisY().setTitle("Frequency (Hz)").setInterval({start:0,end:g});const w=new o({lut:new r({steps:u(0,75,h.getTheme().examples.spectrogramColorPalette),units:"dB",interpolate:!0}),lookUpProperty:"value"}),f=h.addHeatmapGridSeries({columns:250,rows:g}).setFillStyle(w).setWireframeStyle(i),y=h.getDefaultAxisX().addBand(!0).setStrokeStyle(i).setFillStyle(new m({angle:90,stops:[{offset:0,color:p(0,0,0,255)},{offset:1,color:p(0,0,0,0)}]}));h.addLegendBox(d.HorizontalLegendBox).setAutoDispose({type:"max-width",maxWidth:.8}).add(f);let D=0,C=0;c().setSampleSize(g).setNumberOfSamples(12340).setVariation(15).setFrequencyStability(.7).generate().setStreamRepeat(!0).setStreamInterval(25).setStreamBatchSize(1).toStream().map((e=>e.map((e=>80*e)))).forEach((e=>{f.invalidateIntensityValues({iColumn:D%250,iRow:0,values:[e]}),y.setValueStart(D%250).setValueEnd(y.getValueStart()+10),C+=e.length,D+=1}));const x=h.getTitle();let B=Date.now(),k=Date.now();setInterval((()=>{if(C>0&&Date.now()-B>0){const e=1e3*C/(Date.now()-B);h.setTitle(`${x} (${Math.round(e)} data points / s)`)}Date.now()-k>=5e3&&(B=k=Date.now(),C=0)}),1e3)}},e=>{e.O(0,[502],(()=>(44,e(e.s=44)))),e.O()}]);