(self.webpackChunk=self.webpackChunk||[]).push([[524],{44:(e,t,a)=>{const l=a(89),{lightningChart:s,PalettedFill:o,LUT:r,ColorHSV:n,emptyLine:i,LegendBoxBuilders:p,LinearGradientFill:d,ColorRGBA:m,regularColorSteps:u,Themes:S}=l,{createSpectrumDataGenerator:c}=a(863),g=1e3,w=s().ChartXY({}).setTitle("Sweeping Heatmap Spectrogram");w.getDefaultAxisY().setTitle("Frequency (Hz)").setInterval({start:0,end:g});const h=new o({lut:new r({steps:u(0,75,w.getTheme().examples.spectrogramColorPalette),units:"dB",interpolate:!0}),lookUpProperty:"value"}),f=w.addHeatmapGridSeries({columns:250,rows:g}).setFillStyle(h).setWireframeStyle(i),y=w.getDefaultAxisX().addBand(!0).setStrokeStyle(i).setFillStyle(new d({angle:90,stops:[{offset:0,color:m(0,0,0,255)},{offset:1,color:m(0,0,0,0)}]}));w.addLegendBox(p.HorizontalLegendBox).setAutoDispose({type:"max-width",maxWidth:.8}).add(f);let D=0,C=0;c().setSampleSize(g).setNumberOfSamples(12340).setVariation(15).setFrequencyStability(.7).generate().setStreamRepeat(!0).setStreamInterval(25).setStreamBatchSize(1).toStream().map((e=>e.map((e=>80*e)))).forEach((e=>{f.invalidateIntensityValues({iColumn:D%250,iRow:0,values:[e]}),y.setValueStart(D%250).setValueEnd(y.getValueStart()+10),C+=e.length,D+=1}));const x=w.getTitle();let B=Date.now(),T=Date.now();setInterval((()=>{if(C>0&&Date.now()-B>0){const e=1e3*C/(Date.now()-B);w.setTitle(`${x} (${Math.round(e)} data points / s)`)}Date.now()-T>=5e3&&(B=T=Date.now(),C=0)}),1e3)}},e=>{e.O(0,[502],(()=>(44,e(e.s=44)))),e.O()}]);