
KJE.AutoLoanCalc=function(){this.iDecimal=2;this.TOTAL_FEES=0;this.PERIOD_LABEL="";this.ANNUAL_PERIODS=KJE.Default.PAY_MONTHLY;this.PAYMENT_CALC=true;this.SALES_TAX_LESS_TRADE=true;this.YEAR=false;this.MSG_TITLE_PAYMENT=KJE.parameters.get("MSG_TITLE_PAYMENT","Car payment is KJE1 KJE2.");this.MSG_TITLE_AMOUNT=KJE.parameters.get("MSG_TITLE_AMOUNT","Car purchase price is KJE3.");this.MSG_ERROR1=KJE.parameters.get("MSG_ERROR1","Interest rate must be greater than or equal to zero.");this.MSG_ERROR2=KJE.parameters.get("MSG_ERROR2","Your monthly payment is zero.");this.MSG_TAX_LESS_TRADE=KJE.parameters.get("MSG_TAX_LESS_TRADE","Sales tax was calculated as SALES_TAX_RATE times your vehicle price of AUTO_SALE_PRICE minus your trade-in allowance of TRADE_ALLOWANCE.");this.MSG_TAX_NO_TRADE=KJE.parameters.get("MSG_TAX_NO_TRADE","Sales tax was calculated as SALES_TAX_RATE times your vehicle price of AUTO_SALE_PRICE. No deduction was included for you trade-in allowance of TRADE_ALLOWANCE.");this.MSG_DOWNPAYMENT=KJE.parameters.get("MSG_DOWNPAYMENT","Down Payment");this.DS_BALANCE=null;this.DS_DOWNPAYMENT=KJE.FloatArray(4);this.DS_CHANGE_TERM=KJE.FloatArray(4);this.cats=null;this.CS_DOWNPAYMENT=new Array(4);this.CS_CHANGE_TERM=new Array(4);this.sSchedule=new KJE.Repeating()};KJE.AutoLoanCalc.prototype.clear=function(){this.ANNUAL_INCOME=0;this.MONTHLY_PAYMENT=0;this.INTEREST_RATE=0;this.TERM=0;this.CASH_DOWN=0;this.TRADE_ALLOWANCE=0;this.AMOUNT_OWED_ON_TRADE=0;this.NONTAX_FEES=0;this.TAXABLE_FEES=0;this.SALES_TAX_RATE=0;this.AUTO_SALE_PRICE=0;this.DEBT_LOAD_PERCENT=20;this.MONTHLY_PAYMENT=0;this.CASH_DOWN=0;this.PERCENT_DOWN=0;this.PAYMENT_TYPE=KJE.Default.PAY_MONTHLY};KJE.AutoLoanCalc.prototype.calculate=function(I){var j=KJE;var a=this.ANNUAL_INCOME;var P=this.MONTHLY_PAYMENT;var h=this.INTEREST_RATE;var V=this.TERM;var z=this.CASH_DOWN;var g=this.TRADE_ALLOWANCE;var d=this.AMOUNT_OWED_ON_TRADE;var t=this.NONTAX_FEES;var T=this.TAXABLE_FEES;var e=this.SALES_TAX_RATE;var y=this.AUTO_SALE_PRICE;var c=this.DEBT_LOAD_PERCENT;var u=this.PERCENT_DOWN;var f=this.PAYMENT_TYPE;this.ANNUAL_PERIODS=KJE.Default.PAY_PERIOD[f];this.PERIOD_LABEL=KJE.Default.PAY_SELECTIONS[f];this.PERIOD_DESC=KJE.Default.PAY_DESC[f];this.PERIOD_PAY_PER=KJE.Default.PAY_PER[f];var B=0;var b=0;var C=0;var E=0;var v=0;var k=0;var s=0;var r=0;var p=0;var o=0;var W=0;var U=0;var S=0;var Q=0;if(h<0){throw (this.MSG_ERROR1)}this.NET_TRADE_IN=g-d;if(!this.PAYMENT_CALC){if(a>0&&c>0){P=j.round((a/this.ANNUAL_PERIODS)*(c/100),2)}v=Math.round(KJE.PV(h/(this.ANNUAL_PERIODS*100),V,P));if(z<0){if(u>0){y=(B+v-t+((this.SALES_TAX_LESS_TRADE?g:0)+T)*(e/100))/(e/100+1);z=y;var F=z/2;for(var R=0;R<30;R++){if(z/(u/100)<(z+g-d+v-t+((this.SALES_TAX_LESS_TRADE?g:0)+T)*(e/100))/(e/100+1)){z+=F}else{z-=F}F=F/2}}else{z=0}}B=z+g-d;y=(B+v)-T-t;E=0;if(e>0){var F=y/2;for(var R=0;R<30;R++){if(y<(B+v-T-t-E)){y+=F}else{y-=F}F=F/2;E=j.round((y+T-(this.SALES_TAX_LESS_TRADE?g:0))*(e/100),2)}}}else{if(z<0){if(u>0){z=(u/100)*y}else{z=0}}B=z+g-d;E=(y-(this.SALES_TAX_LESS_TRADE?g:0)+T)*(e/100);v=y+E+t+T-B;P=j.round(KJE.PMT(h/(this.ANNUAL_PERIODS*100),V,v),2);a=P*(c/100)*this.ANNUAL_PERIODS;if(P<0){P=0;v=0}}u=z/y;if(a<=0&&c>0){a=(P*this.ANNUAL_PERIODS)/(c/100)}this.TOTAL_FEES=t+T;this.TOTAL_SALE_PRICE=y+E+this.TOTAL_FEES;this.TOTAL_TAXES_AND_FEES=E+this.TOTAL_FEES;var J=500;if(v>100000){J=5000}else{if(v>50000){J=2500}else{if(v>20000){J=1000}else{if(v<5000){J=250}}}}if(z>0){s=0-z;r=0;p=J;o=2*J}else{s=0;r=J;p=2*J;o=3*J}this.DS_DOWNPAYMENT[0]=this.CHANGE_DOWNPAYMENT_NEWPAYMENT_1=KJE.PMT(h/(this.ANNUAL_PERIODS*100),V,v-s);this.DS_DOWNPAYMENT[1]=this.CHANGE_DOWNPAYMENT_NEWPAYMENT_2=KJE.PMT(h/(this.ANNUAL_PERIODS*100),V,v-r);this.DS_DOWNPAYMENT[2]=this.CHANGE_DOWNPAYMENT_NEWPAYMENT_3=KJE.PMT(h/(this.ANNUAL_PERIODS*100),V,v-p);this.DS_DOWNPAYMENT[3]=this.CHANGE_DOWNPAYMENT_NEWPAYMENT_4=KJE.PMT(h/(this.ANNUAL_PERIODS*100),V,v-o);this.CS_DOWNPAYMENT[0]=j.dollars(z+s)+" "+this.MSG_DOWNPAYMENT;this.CS_DOWNPAYMENT[1]=j.dollars(z+r)+" "+this.MSG_DOWNPAYMENT;this.CS_DOWNPAYMENT[2]=j.dollars(z+p)+" "+this.MSG_DOWNPAYMENT;this.CS_DOWNPAYMENT[3]=j.dollars(z+o)+" "+this.MSG_DOWNPAYMENT;var O=this.ANNUAL_PERIODS;if(V<this.ANNUAL_PERIODS*3){W=V;U=V+O;S=V+2*O;Q=V+3*O}else{if(V<this.ANNUAL_PERIODS*5){W=V-O;U=V;S=V+O;Q=V+2*O}else{W=V-2*O;U=V-O;S=V;Q=V+O}}this.DS_CHANGE_TERM[0]=this.CHANGE_TERM_NEWPAYMENT_1=KJE.PMT(h/(this.ANNUAL_PERIODS*100),W,v);this.DS_CHANGE_TERM[1]=this.CHANGE_TERM_NEWPAYMENT_2=KJE.PMT(h/(this.ANNUAL_PERIODS*100),U,v);this.DS_CHANGE_TERM[2]=this.CHANGE_TERM_NEWPAYMENT_3=KJE.PMT(h/(this.ANNUAL_PERIODS*100),S,v);this.DS_CHANGE_TERM[3]=this.CHANGE_TERM_NEWPAYMENT_4=KJE.PMT(h/(this.ANNUAL_PERIODS*100),Q,v);this.CS_CHANGE_TERM[0]=j.number(W)+" "+this.PERIOD_DESC;this.CS_CHANGE_TERM[1]=j.number(U)+" "+this.PERIOD_DESC;this.CS_CHANGE_TERM[2]=j.number(S)+" "+this.PERIOD_DESC;this.CS_CHANGE_TERM[3]=j.number(Q)+" "+this.PERIOD_DESC;var l=Math.round(V);var R=0;var L=l;this.DS_BALANCE=new Array(L);this.cats=new Array(L);if(I){var A=this.sSchedule;A.clearRepeat();A.addHeader((this.YEAR?A.sReportCol("Year",5):A.sReportCol(KJE.Default.PAY_DESC[f],5)),A.sReportCol("Payment",1),A.sReportCol("Principal",2),A.sReportCol("Interest",3),A.sReportCol("Balance",4));A.addRepeat("&nbsp;","&nbsp;","&nbsp;","&nbsp;",j.dollars(v))}var X=v;var x=0;var m=0;var G=P;var K=0;var D=0;var w=0;var N=0;var H=true;this.INTEREST_PAID=0;for(var M=1;M<=l;M++){R=M-1;x=j.round((h/(this.ANNUAL_PERIODS*100))*X,2);m=P-x;X-=m;this.INTEREST_PAID+=x;if(X<0||M==l){G+=X;X=0;m=G-x}else{G=P}this.cats[R]=""+M;this.DS_BALANCE[R]=X;if(I&&!this.YEAR){A.addRepeat(j.number(M),j.dollars(G),j.dollars(m),j.dollars(x),j.dollars(X))}D+=G;w+=m;N+=x;if(I&&this.YEAR&&M%this.ANNUAL_PERIODS==0){A.addRepeat(j.number(M/this.ANNUAL_PERIODS),j.dollars(D),j.dollars(w),j.dollars(N),j.dollars(X));D=0;w=0;N=0}}this.MSG_AUTO_TITLE=KJE.getKJEReplaced((this.PAYMENT_CALC?this.MSG_TITLE_PAYMENT:this.MSG_TITLE_AMOUNT),j.dollars(P),(KJE.lang=="FR"?this.PERIOD_LABEL:this.PERIOD_PAY_PER),j.dollars(y));this.MONTHLY_PAYMENT=P;this.AUTO_SALE_PRICE=y;this.TOTAL_OF_PAYMENTS=this.INTEREST_PAID+v;this.ANNUAL_INCOME=a;this.PERCENT_DOWN=u;this.TOTAL_DOWN=B;this.QUALIFYING_INCOME_LOW=b;this.QUALIFYING_INCOME_HIGH=C;this.SALES_TAX=E;this.LOAN_AMOUNT=v;this.CALC_PAYMENT_AMOUNT=k;this.CHANGE_DOWNPAYMENT_1=s;this.CHANGE_DOWNPAYMENT_2=r;this.CHANGE_DOWNPAYMENT_3=p;this.CHANGE_DOWNPAYMENT_4=o;this.CHANGE_TERM_1=W;this.CHANGE_TERM_2=U;this.CHANGE_TERM_3=S;this.CHANGE_TERM_4=Q};KJE.AutoLoanCalc.prototype.formatReport=function(a){a.dollars("CALC_PAYMENT_AMOUNT",this.CALC_PAYMENT_AMOUNT);a.replace("CHANGE_DOWNPAYMENT_1",this.CS_DOWNPAYMENT[0]);a.replace("CHANGE_DOWNPAYMENT_2",this.CS_DOWNPAYMENT[1]);a.replace("CHANGE_DOWNPAYMENT_3",this.CS_DOWNPAYMENT[2]);a.replace("CHANGE_DOWNPAYMENT_4",this.CS_DOWNPAYMENT[3]);a.dollars("CHANGE_DOWNPAYMENT_NEWPAYMENT_1",this.CHANGE_DOWNPAYMENT_NEWPAYMENT_1);a.dollars("CHANGE_DOWNPAYMENT_NEWPAYMENT_2",this.CHANGE_DOWNPAYMENT_NEWPAYMENT_2);a.dollars("CHANGE_DOWNPAYMENT_NEWPAYMENT_3",this.CHANGE_DOWNPAYMENT_NEWPAYMENT_3);a.dollars("CHANGE_DOWNPAYMENT_NEWPAYMENT_4",this.CHANGE_DOWNPAYMENT_NEWPAYMENT_4);a.number("CHANGE_TERM_1",this.CHANGE_TERM_1);a.number("CHANGE_TERM_2",this.CHANGE_TERM_2);a.number("CHANGE_TERM_3",this.CHANGE_TERM_3);a.number("CHANGE_TERM_4",this.CHANGE_TERM_4);a.dollars("CHANGE_TERM_NEWPAYMENT_1",this.CHANGE_TERM_NEWPAYMENT_1);a.dollars("CHANGE_TERM_NEWPAYMENT_2",this.CHANGE_TERM_NEWPAYMENT_2);a.dollars("CHANGE_TERM_NEWPAYMENT_3",this.CHANGE_TERM_NEWPAYMENT_3);a.dollars("CHANGE_TERM_NEWPAYMENT_4",this.CHANGE_TERM_NEWPAYMENT_4);a.dollars("MONTHLY_PAYMENT",this.MONTHLY_PAYMENT);a.loanRate("INTEREST_RATE",this.INTEREST_RATE/100);a.number("TERM",this.TERM);a.percent("PERCENT_DOWN",this.PERCENT_DOWN,1);a.dollars("CASH_DOWN",this.CASH_DOWN);if(this.CASH_DOWN>0){a.replace("PAYMENT_INDICATOR1","");a.replace("PAYMENT_INDICATOR2","<strong>*</strong>")}else{a.replace("PAYMENT_INDICATOR1","<strong>*</strong>");a.replace("PAYMENT_INDICATOR2","")}a.replace("MSG_CHECK_TAX_LESS_TRADE",(this.SALES_TAX_LESS_TRADE?this.MSG_TAX_LESS_TRADE:this.MSG_TAX_NO_TRADE));a.dollars("TRADE_ALLOWANCE",this.TRADE_ALLOWANCE);a.dollars("AMOUNT_OWED_ON_TRADE",this.AMOUNT_OWED_ON_TRADE);a.dollars("NONTAX_FEES",this.NONTAX_FEES);a.dollars("TAXABLE_FEES",this.TAXABLE_FEES);a.dollars("TITLE_TRANSFER_FEE",this.NONTAX_FEES);a.dollars("TOTAL_FEES",this.TOTAL_FEES);a.taxRate("SALES_TAX_RATE",this.SALES_TAX_RATE/100);a.dollars("AUTO_SALE_PRICE",this.AUTO_SALE_PRICE);a.dollars("TOTAL_DOWN",this.TOTAL_DOWN);a.dollars("NET_TRADE_IN",this.NET_TRADE_IN);a.dollars("QUALIFYING_INCOME_LOW",this.QUALIFYING_INCOME_LOW);a.dollars("QUALIFYING_INCOME_HIGH",this.QUALIFYING_INCOME_HIGH);a.dollars("TOTAL_SALE_PRICE",this.TOTAL_SALE_PRICE);a.dollars("AUTO_SALE_PRICE",this.AUTO_SALE_PRICE);a.dollars("SALES_TAX",this.SALES_TAX);a.dollars("LOAN_AMOUNT",this.LOAN_AMOUNT);a.dollars("ANNUAL_INCOME",this.ANNUAL_INCOME);a.percent("DEBT_LOAD_PERCENT",this.DEBT_LOAD_PERCENT/100);a.dollars("TOTAL_OF_PAYMENTS",this.TOTAL_OF_PAYMENTS);a.dollars("INTEREST_PAID",this.INTEREST_PAID);a.replace("PERIOD_PAY_PER",this.PERIOD_PAY_PER.toLowerCase());a.replace("PERIOD_LABEL_LOWER",this.PERIOD_LABEL.toLowerCase());a.replace("PERIOD_LABEL",this.PERIOD_LABEL);a.replace("PERIOD_DESC_LOWER",this.PERIOD_DESC.toLowerCase());a.replace("PERIOD_DESC",this.PERIOD_DESC);a.replace("MSG_AUTO_TITLE",this.MSG_AUTO_TITLE);a.replace("**REPEATING GROUP**",this.sSchedule.getRepeat())};KJE.Default.PAY_WEEKLY=0;KJE.Default.PAY_BIWEEKLY=1;KJE.Default.PAY_MONTHLY=2;KJE.Default.PAY_SELECTIONS=KJE.parameters.get("ARRAY_PAY_SELECTIONS",["Weekly","Biweekly","Monthly"]);KJE.Default.PAY_PER=KJE.parameters.get("PAY_DESC",["per week","bi-weekly","per month"]);KJE.Default.PAY_DESC=KJE.parameters.get("PAY_DESC",["Weeks","Bi-weekly Payments","Months"]);KJE.Default.PAY_PERIOD=KJE.parameters.get("PAY_PERIOD",[52,26,12]);KJE.Default.PAY_INDEX=[KJE.Default.PAY_WEEKLY,KJE.Default.PAY_BIWEEKLY,KJE.Default.PAY_MONTHLY];KJE.getDropBoxPaymentFreq=function(a,c,b){return KJE.replace("**"+a+"**",KJE.getDropBox(a,KJE.parameters.get(a,c),KJE.Default.PAY_INDEX,KJE.Default.PAY_SELECTIONS),b)};KJE.CalcName="Car Loan Calculator";KJE.CalcType="autoloan";KJE.CalculatorTitleTemplate="KJE1";KJE.parseInputs=function(a){return KJE.getDropBoxPaymentFreq("PAYMENT_TYPE",KJE.Default.PAY_MONTHLY,a)};KJE.initialize=function(){KJE.CalcControl=new KJE.AutoLoanCalc();KJE.GuiControl=new KJE.AutoLoan(KJE.CalcControl)};KJE.AutoLoan=function(o){var f=KJE;var b=KJE.gLegend;var g=KJE.inputs.items;this.SHOW_SIMPLE=KJE.parameters.get("SHOW_SIMPLE",false);this.SHOW_PAYMENT_PERIODS=KJE.parameters.get("SHOW_PAYMENT_PERIODS",false);this.SHOW_FEES=KJE.parameters.get("SHOW_FEES",true);this.TRADEIN_TAX_OPTION_SHOW=KJE.parameters.get("TRADEIN_TAX_OPTION_SHOW",true);this.MSG_GRAPH_TITLE1=KJE.parameters.get("MSG_GRAPH_TITLE1","Principal Balances for KJE1 in financing");this.MSG_GRAPH_TITLE2=KJE.parameters.get("MSG_GRAPH_TITLE2","How does the term affect my payment?");this.MSG_GRAPH_TITLE3=KJE.parameters.get("MSG_GRAPH_TITLE3","How does the down payment affect my payment?");KJE.Radioboxes("PAYMENT_CALC","Calculate for",true,"Payment","Price","bold");KJE.DollarSlider("MONTHLY_PAYMENT",(this.SHOW_PAYMENT_PERIODS?"Payment":"Monthly payment"),0,100000,2,0,6);KJE.PercentSlider("INTEREST_RATE","Interest rate",0,25,2,0.5);KJE.Slider("TERM",(this.SHOW_PAYMENT_PERIODS?"Number of payments":"Term in months"),12,480,0,f.FMT_NUMBER,6,KJE.parameters.get("TERM_SCALE_LABEL",KJE.s_label[8]),KJE.parameters.get("TERM_SCALE",KJE.useScale(8)));KJE.DollarSlider("CASH_DOWN","Rebates and Cash Down",0,100000,2,0,1);KJE.DollarSlider("TRADE_ALLOWANCE","Trade allowance",0,100000,2,0,1);KJE.DollarSlider("AMOUNT_OWED_ON_TRADE","Amount owed on trade",0,100000,2,0,1);KJE.DollarSlider("NONTAX_FEES","Fees (non-taxable)",0,10000,2,0,7);KJE.DollarSlider("TAXABLE_FEES","Fees (taxable)",0,10000,2,0,7);KJE.PercentSlider("SALES_TAX_RATE","Sales tax rate",0,20,2,0.5);KJE.DollarSlider("AUTO_SALE_PRICE","Total purchase price (before tax)",0,5000000,2,0,KJE.parameters.get("AUTO_SALE_PRICE_SLM",2));KJE.Checkbox("SALES_TAX_LESS_TRADE","No Sales tax deduction",false,"Check here if your state does not allow a sales tax deduction for trade-ins");if(!KJE.parameters.exists("PAYMENT_TYPE")){KJE.parameters.set("PAYMENT_TYPE",KJE.Default.PAY_MONTHLY)}KJE.DropBox("PAYMENT_TYPE","Payments are made");this.MSG_GRAPH1=KJE.parameters.get("MSG_GRAPH1","Principal balance by payment");if(!this.SHOW_SIMPLE){var h=KJE.gNewGraph(KJE.gCOLUMN,"GRAPH1",true,false,KJE.colorList[1],this.MSG_GRAPH_TITLE1);h._legend.setVisible(false);h._showItemLabel=false;h._axisX._fSpacingPercent=0.75;h._titleYAxis.setText(KJE.sCurrency);var k=KJE.gNewGraph(KJE.gCATEGORIES,"GRAPH2",true,true,KJE.colorList[1],this.MSG_GRAPH_TITLE2);k._legend.setVisible(true);k._legend._iOrientation=b.TOP_RIGHT;k._axisX.setVisible(false);k._showItemLabel=true;k._axisX._fSpacingPercent=0.25;k._axisY._bAutoMinimum=false;k._titleYAxis.setText(KJE.sCurrency);k._titleXAxis.setText(KJE.parameters.get("MSG_GRAPH1_XAXIS_TITLE","Payments by Term of Loan"));k._bPopDetail=true;var j=KJE.gNewGraph(KJE.gCATEGORIES,"GRAPH3",true,true,KJE.colorList[1],this.MSG_GRAPH_TITLE3);j._legend.setVisible(true);j._legend._iOrientation=b.TOP_RIGHT;j._showItemLabel=true;j._axisX._fSpacingPercent=0.25;j._axisY._bAutoMinimum=false;j._axisX.setVisible(false);j._titleYAxis.setText(KJE.sCurrency);j._titleXAxis.setText(KJE.parameters.get("MSG_GRAPH2_XAXIS_TITLE","Payments by Down Payment Amount"));j._bPopDetail=true}if(this.SHOW_SIMPLE){KJE.addDiv("INPUTS",KJE.colorList[0])}else{if(KJE.DropperDefined("INPUTS")){var a=KJE.parameters.get("MSG_DROPPER_TITLE","Car financing:");var d=KJE.parameters.get("MSG_DROPPER_CLOSETITLE","Loan amount: KJE1");var e=function(){return a+"|"+KJE.subText(KJE.getKJEReplaced(d,f.dollars(o.LOAN_AMOUNT)),"KJERightBold")};KJE.addDropper(new KJE.Dropper("INPUTS",true,e,e),KJE.colorList[0])}if(KJE.DropperDefined("DOWNPAYMENT")){var c=KJE.parameters.get("MSG_DROPPER_DOWNPAYMENT","Down payment:");var i=KJE.parameters.get("MSG_DROPPER_CLOSEDOWNPAYMENT","KJE1");var n=function(){return c+"|"+KJE.subText(KJE.getKJEReplaced(i,f.dollars(o.TOTAL_DOWN)),"KJERightBold")};KJE.addDropper(new KJE.Dropper("DOWNPAYMENT",false,n,n),KJE.colorList[0])}if(KJE.DropperDefined("TAXES")){var p=KJE.parameters.get("MSG_DROPPER_TAXES","Taxes and fees:");var q=KJE.parameters.get("MSG_DROPPER_CLOSETAXES","KJE1");var m=function(){return p+"|"+KJE.subText(KJE.getKJEReplaced(q,f.dollars(o.TOTAL_TAXES_AND_FEES)),"KJERightBold")};KJE.addDropper(new KJE.Dropper("TAXES",false,m,m),KJE.colorList[0])}}};KJE.AutoLoan.prototype.setValues=function(b){var a=KJE.inputs.items;b.PAYMENT_CALC=a.PAYMENT_CALC.getValue();b.INTEREST_RATE=a.INTEREST_RATE.getValue();b.TERM=a.TERM.getValue();b.PAYMENT_TYPE=a.PAYMENT_TYPE.getValue();b.CASH_DOWN=a.CASH_DOWN.getValue();b.TRADE_ALLOWANCE=a.TRADE_ALLOWANCE.getValue();b.AMOUNT_OWED_ON_TRADE=a.AMOUNT_OWED_ON_TRADE.getValue();b.NONTAX_FEES=a.NONTAX_FEES.getValue();b.TAXABLE_FEES=a.TAXABLE_FEES.getValue();b.SALES_TAX_RATE=a.SALES_TAX_RATE.getValue();b.SALES_TAX_LESS_TRADE=!a.SALES_TAX_LESS_TRADE.getValue();if(b.PAYMENT_CALC){b.AUTO_SALE_PRICE=a.AUTO_SALE_PRICE.getValue();b.MONTHLY_PAYMENT=0;a.MONTHLY_PAYMENT.disable();a.AUTO_SALE_PRICE.enable()}else{b.MONTHLY_PAYMENT=a.MONTHLY_PAYMENT.getValue();b.AUTO_SALE_PRICE=0;a.MONTHLY_PAYMENT.enable();a.AUTO_SALE_PRICE.disable()}};KJE.AutoLoan.prototype.refresh=function(g){var f=KJE;var e=KJE.gLegend;var b=KJE.inputs.items;var a=KJE.gGraphs[0];var d=KJE.gGraphs[1];var c=KJE.gGraphs[2];KJE.setTitleTemplate(g.MSG_AUTO_TITLE);if(!this.SHOW_SIMPLE){a.removeAll();a.setGraphCategories(g.cats);a.add(new KJE.gGraphDataSeries(g.DS_BALANCE,this.MSG_GRAPH1,a.getColor(1)));a.setTitleTemplate(f.dollars(g.LOAN_AMOUNT));a.paint();d.removeAll();d.setGraphCategories(g.CS_CHANGE_TERM);d.add(new KJE.gGraphDataSeries(g.DS_CHANGE_TERM,KJE.MSG_MONTHS,a.getColor(4)));d._axisY._axisMinimum=(g.DS_CHANGE_TERM[3]*0.66);d.paint();c.removeAll();c.setGraphCategories(g.CS_DOWNPAYMENT);c.add(new KJE.gGraphDataSeries(g.DS_DOWNPAYMENT,a.getColor(3)));c._axisY._axisMinimum=(g.DS_DOWNPAYMENT[3]*0.66);c.paint()}b.MONTHLY_PAYMENT.setValue(g.MONTHLY_PAYMENT,true);b.AUTO_SALE_PRICE.setValue(g.AUTO_SALE_PRICE,true)};KJE.InputScreenText=" <div id=KJE-D-INPUTS><div id=KJE-P-INPUTS>Input information:</div></div> <div id=KJE-E-INPUTS > <div id='KJE-C-PAYMENT_CALC'><fieldset id='KJE-FS-PAYMENT_CALC'><input type=radio id='KJE-PAYMENT_CALC1' name=PAYMENT_CALC /><input type=radio id='KJE-PAYMENT_CALC2' name=PAYMENT_CALC /></fieldset></div> <div id='KJE-C-AUTO_SALE_PRICE'><input id='KJE-AUTO_SALE_PRICE' /></div> <div id='KJE-C-MONTHLY_PAYMENT'><input id='KJE-MONTHLY_PAYMENT' /></div> <div id='KJE-C-PAYMENT_TYPE'>**PAYMENT_TYPE**</div> <div id='KJE-C-TERM'><input id='KJE-TERM' /></div> <div id='KJE-C-INTEREST_RATE'><input id='KJE-INTEREST_RATE' /></div> <div class=KJEDropperSpacer></div> </div> <div id=KJE-D-DOWNPAYMENT><div id=KJE-P-DOWNPAYMENT>Input information:</div></div> <div id=KJE-E-DOWNPAYMENT > <div id='KJE-C-CASH_DOWN'><input id='KJE-CASH_DOWN' /></div> <div id='KJE-C-TRADE_ALLOWANCE'><input id='KJE-TRADE_ALLOWANCE' /></div> <div id='KJE-C-AMOUNT_OWED_ON_TRADE'><input id='KJE-AMOUNT_OWED_ON_TRADE' /></div> <div class=KJEDropperSpacer></div> </div> <div id=KJE-D-TAXES><div id=KJE-P-TAXES>Input information:</div></div> <div id=KJE-E-TAXES > <div id='KJE-C-NONTAX_FEES'><input id='KJE-NONTAX_FEES' /></div> <div id='KJE-C-TAXABLE_FEES'><input id='KJE-TAXABLE_FEES' /></div> <div id='KJE-C-SALES_TAX_RATE'><input id='KJE-SALES_TAX_RATE' /></div> <div id='KJE-C-SALES_TAX_LESS_TRADE'><input id='KJE-SALES_TAX_LESS_TRADE' type=checkbox name='SALES_TAX_LESS_TRADE' /></div> <div class=KJEDropperSpacer></div> </div> **GRAPH1** **GRAPH2** **GRAPH3** ";KJE.DefinitionText=" <div id='KJE-D-PAYMENT_CALC' ><dt>Calculate for</dt><dd>Choose what you would like to calculate. You can choose to calculate the payment or the purchase price.</dd></div> <div id='KJE-D-MONTHLY_PAYMENT' ><dt>Monthly payment</dt><dd>The amount you pay each month for your auto financing.</dd></div> <div id='KJE-D-AUTO_SALE_PRICE' ><dt>Total purchase price (before tax)</dt><dd>This is the total cost of your auto purchase. Include the cost of the vehicle, additional options and destination charges. This amount does not include sales tax. Sales tax will be calculated for you and included in your total after-tax price.</dd></div> <div id='KJE-D-TERM' ><dt>Term in months</dt><dd>Number of months the loan will be in effect.</dd></div> <div id='KJE-D-INTEREST_RATE' ><dt>Interest rate</dt><dd>Annual interest rate for this loan.</dd></div> <div id='KJE-D-CASH_DOWN' ><dt>Rebates and cash down</dt><dd>Total amount of cash and/or factory rebates applied to the purchase. The larger your cash down payment the smaller the loan you will need to finance this purchase.</dd></div> <div id='KJE-D-TRADE_ALLOWANCE' ><dt>Trade allowance</dt><dd>The total amount that you are given for any automobile that you trade-in as part of the purchase. In some states a trade-in can also reduce the amount of sales tax you will owe. See the definition for \"No sales tax deduction for trade-in\" for more information on trade-in vehicles and sales tax.</dd></div> <div id='KJE-D-AMOUNT_OWED_ON_TRADE' ><dt>Amount owed on trade</dt><dd>Total loan balance still outstanding on the trade-in.</dd></div> <div id='KJE-D-NONTAX_FEES' ><dt>Non-taxable fees (optional)</dt><dd>Any additional fee that is not subject to sales tax. This usually includes document fees or any other fees that may be due at delivery and are not taxable.</dd></div> <div id='KJE-D-TAXABLE_FEES' ><dt>Taxable fees (optional)</dt><dd>Any additional fee that is subject to sales tax. This usually includes title transfer fees or any other fees that may be due at delivery and are taxable.</dd></div> <div id='KJE-D-SALES_TAX_RATE' ><dt>Sales tax rate</dt><dd>Sales tax percentage rate charged on this purchase.</dd></div> <div id='KJE-D-SALES_TAX_LESS_TRADE' ><dt>No sales tax deduction for trade-in</dt><dd>If you live in a state where your sales tax is calculated on your full purchase price, check this box in the calculator. If this box is unchecked, sales tax is calculated on the purchase price, less trade-in. Currently the District of Columbia, California, Hawaii, Maryland, Kentucky, Michigan and Virginia allow no deductions for trade-ins when calculating sales tax. In addition, Alaska, Delaware, Montana and New Hampshire have no sales tax on auto purchases. Oregon currently only collects tax on new vehicles.</dd></div> ";KJE.ReportText=' <h2 class=\'KJEReportHeader KJEFontHeading\'>Your car payment is MONTHLY_PAYMENT PERIOD_PAY_PER for a AUTO_SALE_PRICE car.</h2>This is for LOAN_AMOUNT in financing at INTEREST_RATE for TERM months. **GRAPH** <div class=KJEReportTableDiv><table class=KJEReportTable role="presentation" > <caption class=\'KJEHeaderRow KJEHeading\'>Car Financing Summary</caption> <tbody class=\'KJEReportTBody\'> <tr class=KJEOddRow><th class="KJELabel KJECellBorder KJECell60" scope=\'row\'>Interest rate:</th><td class="KJECell">INTEREST_RATE</td></tr> <tr class=KJEEvenRow><th class="KJELabel KJECellBorder" scope=\'row\'>Term in months:</th><td class="KJECell">TERM</td></tr> <tr class=KJEOddRow><th class="KJELabel KJECellBorder" scope=\'row\'>Total purchase price (before tax):</th><td class="KJECell">AUTO_SALE_PRICE</td></tr> <tr class=KJEEvenRow><th class="KJELabel KJECellBorder" scope=\'row\'>Taxable fees:</th><td class="KJECell">TAXABLE_FEES</td></tr> <tr class=KJEOddRow><th class="KJELabel KJECellBorder" scope=\'row\'>Sales tax*:</th><td class="KJECell">SALES_TAX</td></tr> <tr class=KJEOddRow><th class="KJELabel KJECellBorder" scope=\'row\'>Non-taxable fees:</th><td class="KJECell">NONTAX_FEES</td></tr> <tr class=KJEEvenRow><th class="KJELabel KJECellBorder" scope=\'row\'>Total sales price (after-tax):</th><td class="KJECell">TOTAL_SALE_PRICE</td></tr> <tr class=KJEOddRow><th class="KJELabel KJECellBorder" scope=\'row\'>Total down payment**:</th><td class="KJECell">TOTAL_DOWN</td></tr> </tbody> <tfoot class=\'KJEReportTFooter\'> <tr class=KJEFooterRow><th class="KJELabel KJECellBorder" scope=\'row\'>Amount financed:</th><td class="KJECellStrong">LOAN_AMOUNT</td></tr> <tr class=KJEFooterRow><th class="KJELabel KJECellBorder" scope=\'row\'>Monthly payment:</th><td class="KJECellStrong">MONTHLY_PAYMENT</td></tr> <tr class=KJEFooterRow><th class="KJELabel KJECellBorder" scope=\'row\'>Total payments***:</th><td class="KJECellStrong">TOTAL_OF_PAYMENTS</td></tr> <tr class=KJEFooterRow><th class="KJELabel KJECellBorder" scope=\'row\'>Total interest paid***:</th><td class="KJECellStrong">INTEREST_PAID</td></tr> </tfoot> </table> </div> <div class=KJEInset> *MSG_CHECK_TAX_LESS_TRADE Currently California, the District of Columbia, Hawaii and Michigan allow no deductions for trade-ins when calculating sales tax. If you live in one of these states make sure to check the box "No sales tax deduction for trade-in" on the main calculator page. <p>**Your total down payment is calculated as your rebates and cash down payment of CASH_DOWN plus your trade-in allowance of TRADE_ALLOWANCE minus the AMOUNT_OWED_ON_TRADE balance outstanding on your trade-in vehicle. <p>***This assumes that you do not refinance and that all payments are made on time with no prepayments. </div> **GRAPH** **GRAPH** <h2 class=\'KJEScheduleHeader KJEFontHeading\'>Payment Schedule</h2> **REPEATING GROUP** ';
// 07/01/2024 Copyright 2024 KJE Computer Solutions, Inc.  Licensed for use on cu804.org

